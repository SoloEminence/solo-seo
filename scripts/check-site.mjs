#!/usr/bin/env node
// Launch check for a built static site. No dependencies.
// Usage: node check-site.mjs [build-dir]   (default: dist)
// Exits 1 if any error is found. Warnings don't fail the check.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const root = resolve(process.argv[2] ?? 'dist');
if (!existsSync(root) || !statSync(root).isDirectory()) {
  console.error(`Build folder not found: ${root}\nRun the build first, or pass the folder path.`);
  process.exit(2);
}

const errors = [];
const warnings = [];
const error = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match ? (match[1] ?? match[2] ?? match[3] ?? '') : null;
};
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
const metaContent = (html, key) => {
  const tag = tags(html, 'meta').find(
    (t) => (attr(t, 'name') ?? attr(t, 'property') ?? '').toLowerCase() === key,
  );
  return tag ? attr(tag, 'content') : null;
};
const hasRel = (html, rel) =>
  tags(html, 'link').some((t) => (attr(t, 'rel') ?? '').toLowerCase().split(/\s+/).includes(rel));
const stripCode = (html) =>
  html.replace(/<(script|style|code|pre)\b[\s\S]*?<\/\1>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ');

function targetExists(fromFile, href) {
  let path = href.split(/[?#]/)[0];
  try {
    path = decodeURIComponent(path);
  } catch {
    return false;
  }
  if (!path) return true;
  const target = path.startsWith('/') ? join(root, path) : resolve(dirname(fromFile), path);
  if (target !== root && !target.startsWith(root + sep)) return false;
  return [target, join(target, 'index.html'), `${target}.html`].some(
    (candidate) => existsSync(candidate) && statSync(candidate).isFile(),
  );
}

const slopPhrases =
  /\b(delve|seamless(ly)?|unlock(ing)? the|unleash|elevate your|game[- ]chang\w+|revolutioni[sz]\w+|cutting[- ]edge|supercharge|effortless(ly)?|leverag(e|ing)|in today's [\w -]+ world|it's important to note|look no further|whether you're a|not just \w+[,;] but|tapestry|testament to)\b/gi;

const files = walk(root);
const pages = files.filter((f) => f.endsWith('.html'));
if (pages.length === 0) error('site', 'no HTML pages found');

const titles = new Map();
const descriptions = new Map();
const addTo = (map, key, page) => map.set(key, [...(map.get(key) ?? []), page]);

for (const file of pages) {
  const page = '/' + relative(root, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  const visible = stripCode(html);
  const is404 = /(^|\/)404(\/index)?\.html$/.test(page);
  const robots = (metaContent(html, 'robots') ?? '').toLowerCase();
  // Redirect stubs have no content to check.
  if (/<meta[^>]+http-equiv=["']?refresh/i.test(html)) continue;
  const indexable = !is404 && !robots.includes('noindex');

  if (!/<!doctype html>/i.test(html)) warn(page, 'missing doctype');
  if (!attr(tags(html, 'html')[0] ?? '', 'lang')) error(page, 'missing lang on <html>');
  if (!metaContent(html, 'viewport')) error(page, 'missing viewport meta');

  const h1s = tags(visible, 'h1').length;
  if (h1s !== 1) error(page, `expected 1 <h1>, found ${h1s}`);

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim();
  const description = metaContent(html, 'description')?.trim();
  if (!title) error(page, 'missing <title>');
  if (indexable) {
    if (title) {
      addTo(titles, title, page);
      if (title.length > 60) warn(page, `title is ${title.length} characters (aim for 60 or fewer)`);
    }
    if (!description) error(page, 'missing meta description');
    else {
      addTo(descriptions, description, page);
      if (description.length > 160) warn(page, `description is ${description.length} characters (aim for 160 or fewer)`);
      if (description.length < 50) warn(page, `description is only ${description.length} characters`);
    }
    if (!hasRel(html, 'canonical')) error(page, 'missing canonical link');
    if (!metaContent(html, 'og:title')) error(page, 'missing og:title');
    if (!metaContent(html, 'og:image')) warn(page, 'missing og:image');
  }

  for (const img of tags(visible, 'img')) {
    const src = attr(img, 'src') ?? '(no src)';
    if (attr(img, 'alt') === null) error(page, `image without alt: ${src}`);
    if (!attr(img, 'width') || !attr(img, 'height')) warn(page, `image without width/height (layout shift): ${src}`);
  }

  for (const anchor of tags(visible, 'a')) {
    const href = attr(anchor, 'href');
    if (href === null) continue;
    if (/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue;
    if (!targetExists(file, href)) error(page, `broken internal link: ${href}`);
  }

  const blocks = [...html.matchAll(/<script\b[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, json] of blocks) {
    try {
      JSON.parse(json);
    } catch {
      error(page, 'invalid JSON-LD');
    }
  }
  if (page === '/index.html' && blocks.length === 0) error(page, 'home page has no JSON-LD');

  const text = visible.replace(/<[^>]+>/g, ' ');
  const leftover = text.match(/lorem ipsum|\bTODO\b|\bFIXME\b|coming soon|your (company|name|tagline) here/i);
  if (leftover) error(page, `placeholder text: "${leftover[0]}"`);
  if (/\b(href|src)=["']https?:\/\/(www\.)?example\.(com|org)/i.test(visible)) error(page, 'link to example.com');

  const emoji = text.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu);
  if (emoji) warn(page, `emoji in page text, use SVG icons: ${[...new Set(emoji)].slice(0, 5).join(' ')}`);

  const slop = text.match(slopPhrases) ?? [];
  if (slop.length) warn(page, `Possible AI phrasing: ${[...new Set(slop.map((s) => s.toLowerCase()))].join(', ')}`);
}

for (const [label, map] of [['title', titles], ['description', descriptions]]) {
  for (const [value, where] of map) {
    if (where.length > 1) error(where.join(', '), `duplicate ${label}: "${value.slice(0, 60)}"`);
  }
}

const has = (...names) => names.some((name) => existsSync(join(root, name)));
if (!has('robots.txt')) error('site', 'missing robots.txt');
else if (!/^\s*sitemap:/im.test(readFileSync(join(root, 'robots.txt'), 'utf8'))) warn('site', 'robots.txt has no Sitemap line');
if (!has('sitemap-index.xml', 'sitemap.xml')) error('site', 'missing sitemap');
if (!has('favicon.ico', 'favicon.svg')) error('site', 'missing favicon');
if (!has('404.html', '404/index.html')) warn('site', 'missing 404 page');
if (!has('llms.txt')) warn('site', 'missing llms.txt');

for (const w of warnings) console.log(`WARN   ${w}`);
for (const e of errors) console.log(`ERROR  ${e}`);
console.log(`\n${pages.length} pages checked: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
