# SEO, AEO and GEO playbook

Complete instructions for search work, so no other SEO skill is needed. Search rules change, so confirm anything time-sensitive in Google Search Central before relying on it. Facts here were last checked on 2026-10-31.

Scores are heuristics. Nobody outside Google has its ranking data, so never promise rankings, citations or traffic. When community advice conflicts with Google's own docs, follow Google.

## Keyword research

Use the best source available, in this order:

1. Keywords or exports the owner provides. If they mention having a list or a tool, ask for it once.
2. A connected paid tool: Semrush, Ahrefs or DataForSEO. If the owner has one but it isn't connected, ask for an export.
3. Google Search Console for a live site. Find queries with many impressions and few clicks.
4. Free methods: Google autocomplete, People Also Ask, related searches, the live top 10, Google Trends, Reddit and support forums.

If the owner says to handle it yourself, use whatever is available without asking. Label free research as estimates, with no invented volumes or difficulty scores.

Expand each seed into 30 to 50 variants using related searches, People Also Ask, question words, and modifiers such as "free", "how to", "vs", "best", "examples" and "alternative". Drop navigational terms. New sites should start with specific long-tail terms that have weak results, then move up to broader terms.

### Match the results page

A technically perfect page won't rank if it's the wrong type. For each main keyword, classify the top 10 results by page type and format:

- Over 60% one type: build that type.
- 40 to 60%: mixed intent, so serve the leading type and cover the second.
- Under 40%: no clear winner, which leaves room to stand out.

Also note the expected depth, media, People Also Ask questions, ad themes and whether an AI Overview appears. Turn these into three to five user stories: "As a [person], I want [goal], because [reason], but I'm blocked by [barrier]." Build the page to resolve those barriers, then check it as each person: relevant, clear within 10 seconds, trustworthy, and with an obvious next step.

### Group keywords by shared results

Group by how Google ranks keywords, not by similar wording. Compare the top 10 URLs of two keywords:

| Shared URLs | Action |
|---|---|
| 7 to 10 | Same page |
| 4 to 6 | Same cluster |
| 2 to 3 | Separate pages, linked to each other |
| 0 to 1 | Separate topics |

Pre-group by intent so you only compare likely pairs.

## Site structure

- Plan one page per intent. Merge pages that would rank for the same query.
- Keep URLs lowercase, hyphenated, short and free of parameters. Use subfolders, not subdomains.
- Use one trailing-slash style across the site.
- Use a pillar page for each topic, with two to five clusters of supporting pages.
- Every supporting page links to its pillar and back, plus two or three links to pages in the same cluster.
- Keep every important page within 3 clicks of home, with no orphan pages.
- Use varied, descriptive anchor text inside the body copy. Give each new page at least 3 incoming links once enough pages exist.
- Give paginated lists crawlable links and self-referencing canonicals. Google ignores `rel=next/prev`.

## On-page checklist

- Title under 60 characters: main keyword early, brand at the end.
- Meta description of 120 to 160 characters that states the page's value honestly.
- Metadata written for each page. Unique strings that share one template, such as the title followed by a stock CTA, still count as templated.
- One `h1`, then `h2` and `h3` in order, with headings that describe the section.
- Keyword in the title, `h1`, first paragraph and a subheading, where it reads naturally. Ignore keyword density.
- Self-referencing canonical on every indexable page.
- Images with descriptive filenames, useful alt text, set dimensions and modern formats.

## Technical checklist

- HTTPS everywhere, with no mixed content and one redirect at most.
- Title, canonical, robots tag, schema and main content all present in the initial HTML.
- `robots.txt` allows CSS, JS and images, and links to the sitemap.
- Sitemap contains only canonical, indexable pages, with `lastmod` updated only on real changes.
- `noindex` on thin or utility pages, removed from the sitemap. Never block those same pages in `robots.txt`, because crawlers must fetch a page to see its `noindex`.
- Correct status codes: real 404s, 301s for moved pages, no redirect chains.
- Core Web Vitals at the 75th percentile: LCP under 2.5s, INP under 200ms, CLS under 0.1.
- Same main content, metadata and schema on mobile and desktop, because Google indexes the mobile version.
- Key content visible on load, not hidden behind tabs or accordions.
- Key content and JSON-LD within the first 2 MB of HTML, the most Googlebot fetches. Watch for inline images and large inline scripts.
- No intrusive interstitials, heavy ad density or back-button hijacking. Google's spam policies now cover back-button hijacking, including when ad scripts cause it.
- `robots.txt` never returns a 5xx error, which crawlers treat as "disallow everything".
- Allow up to two weeks for canonical fixes to show.

## Schema

Use JSON-LD in the initial HTML and mark up only what's visible on the page. Use `@graph` for several entities. Validate with the Rich Results Test and the Schema.org validator.

| Page | Schema |
|---|---|
| Home | `Organization`, `WebSite` |
| Free tool | `WebApplication` or `SoftwareApplication`, with a free `offers` |
| Article | `Article` or `BlogPosting`, with a real `author` and dates |
| Any page with visible breadcrumbs | `BreadcrumbList` |
| Hub or list page | `ItemList` |
| Real product for sale | `Product` with visible price and availability |
| Author page | `ProfilePage` with a `Person` |
| Community Q&A on one question | `QAPage` |

Limits to remember:

- Google no longer shows FAQ rich results (retired May 2026), HowTo rich results or the sitelinks search box. Don't add `FAQPage` or `HowTo` for a Google benefit. Existing FAQ markup can stay, since other search engines may use it.
- Structured data isn't required for AI features, and no special AI markup exists.
- Software rating stars need genuine ratings or reviews. Skip them rather than invent any.
- Skip self-serving reviews on your own organization or product.
- Use absolute URLs, ISO 8601 dates and `https://schema.org` as the context.

## Comparison pages

Use this for "X vs Y", "X alternatives" and "best X" pages.

- Verify every feature and price from public sources, and link to them.
- Date prices with "as of", and write "not publicly available" for anything missing.
- Disclose which product is yours, state how you compared, and show where rivals win.
- Lead with a short verdict by use case, then a feature table.
- Show hidden costs, and keep CTAs out of competitor sections.
- Review these pages quarterly, and link between related comparisons.

## AEO and GEO are still SEO

Google says that optimizing for generative AI search "is optimizing for the search experience, and thus still SEO". For Google, you don't need `llms.txt`, chunked content, special phrasing or AI-specific markup. AI features run on the same ranking and quality systems, so everything above comes first. Skip near-duplicate pages for every query variation, rewrites made only for AI, and manufactured mentions. The test is whether the page satisfies a visitor without another search. The habits below help readers and other AI systems too.

## AEO: being the quoted answer

- Collect real questions from People Also Ask, forums and support channels.
- Use a question as the heading, then answer directly in the first 40 to 60 words.
- Write each answer to make sense alone. Name the subject, because "it" and "this" lose meaning when quoted. Avoid opening with "But" or "However".
- Include a specific fact, date or named source in key answers.
- Follow the short answer with detail, examples and edge cases.
- Use real HTML lists, steps and tables for steps and comparisons.
- Open tool and concept pages with a plain "X is..." definition.

## GEO: being cited by AI search

No signal here is guaranteed. These are the habits with the best evidence:

- Rank in normal search first. AI Overviews mainly draw on pages that already rank well, while AI Mode cites a broader set of pages.
- Publish things worth citing: original data, tests, clear definitions and unique tools.
- Put your most useful answer high on the page.
- Attribute claims to primary sources, and show real authors and updated dates.
- Refresh important pages when facts change. Third-party studies link recency with citations, but changing a date alone adds nothing.
- Serve main content without JavaScript. Many AI crawlers don't run it.
- Keep brand facts consistent, and use `sameAs` links to real profiles.
- Be present where AI systems look: Reddit, YouTube, Wikipedia, LinkedIn and review sites. This needs real participation, so list opportunities for the owner instead of faking mentions.
- `llms.txt` is optional. Google Search doesn't use it, and no major provider has confirmed using it. Spend five minutes on it and no more.

### AI crawlers in robots.txt

Allow search crawlers so the site can be cited. Blocking training crawlers is the owner's choice, so ask before adding those rules. Report each crawler separately, because access for training says nothing about access for search.

| Crawler | Used for |
|---|---|
| Googlebot | Google Search, AI Overviews and AI Mode |
| Bingbot | Bing and Copilot |
| OAI-SearchBot | ChatGPT search citations |
| ChatGPT-User | User-triggered ChatGPT fetches |
| GPTBot | OpenAI model training |
| Claude-SearchBot | Claude search citations |
| Claude-User | User-triggered Claude fetches |
| ClaudeBot | Anthropic model training |
| PerplexityBot | Perplexity search index |
| Perplexity-User | User-triggered Perplexity fetches |
| Applebot-Extended | Apple AI training opt-out. Siri and Spotlight follow Applebot |
| Google-Extended | Limits AI training and grounding in other Google systems. It has no effect on Search |

Some user-triggered fetchers ignore `robots.txt`, so protect private pages with authentication. To limit what appears in Google's AI features, use `nosnippet`, `data-nosnippet`, `max-snippet` or `noindex`. Crawler names change, so check each vendor's docs before writing rules.

## Readiness for AI agents

AI agents now browse sites and fill in forms for people. Good accessibility and speed cover most of this:

- Accessible names and valid roles on every control, with nothing interactive hidden from the accessibility tree.
- CLS at or under 0.1, because moving elements break agent clicks.
- Main content in the HTML, and real 404 status codes for unknown URLs.
- No CAPTCHA on public content, and a firewall that lets verified search bots through.
- Stable, visible confirmation after actions, with no hover-only menus or focus traps.

Lighthouse has an Agentic Browsing category, reported as a fraction such as 4/6. Treat that as a check, not a goal. WebMCP, `ai-catalog.json` and similar standards are still early, so add them only for sites with real transactions, and keep a human confirmation step on purchases, sends and deletes.

## Multiple languages

- Every page lists all language versions, including itself, and each version links back.
- `hreflang` URLs must match canonicals exactly, on the same protocol and slash style.
- Use ISO codes: `en`, `pt-BR`, `zh-Hant`. Common errors are `en-uk`, `jp` and `es-LA`.
- Add `x-default` when there's a fallback or language selector.
- Use `<link>` tags for small sites, and the sitemap for large or cross-domain sites.
- Translate for people: titles, schema, CTAs, trust signals, and number, date and currency formats. Review machine translations, because Google treats unreviewed output as a scaled content risk.

## Backlinks

Links are earned after launch, so plan for them without inventing any:

- Create something worth linking to: free tools, original data and useful guides.
- List honest opportunities for the owner: communities, roundups, tool directories and unlinked brand mentions.
- Check what competitors earned links for, using Semrush or Ahrefs when available.
- Keep exact-match anchors uncommon. Most natural anchors are the brand name or URL.
- Skip paid links, link farms, private blog networks and mass directory submissions.

## Pages at scale

Use this for tool variants, directories, comparisons, locations and glossaries.

- **Standalone test:** would this page be worth publishing if no similar page existed?
- **Unique content:** aim for 40% or more unique to each page. Stop and fix anything under 30%.
- **Thin page rule:** review pages under 300 words, and merge or `noindex` them if they lack value.
- **Data:** each record needs enough real attributes to fill the page. Hide sections with missing data.
- **Stronger data wins:** your own data beats user data, which beats licensed data, which beats public data.
- **Rollout:** publish 50 to 100 pages, review a 5 to 10% sample, watch indexing for 2 to 4 weeks, then expand. Get the owner's approval before publishing more than 500.
- **Risky patterns:** swapped city names, "[competitor] alternative" without real comparisons, and unreviewed AI pages. Google treats these as scaled content abuse.

## Astro setup

- Set `site` in `astro.config` to the production URL first. Canonicals, the sitemap and OG URLs all depend on it, and a missing value is the most common Astro SEO mistake.
- Put all head tags in one SEO component, with a fallback chain: SEO title, then page title, then site name. Consider `@jdevalk/astro-seo-graph` for this, after checking its current docs.
- Enforce title and description lengths with Zod schemas in content collections, so errors fail the build.
- Add `max-snippet:-1, max-image-preview:large` to the robots meta on indexable pages.
- Omit the canonical on `noindex` pages.
- Link schema entities in one `@graph` using `@id` references.
- Use JPEG or PNG for OG images at 1200 pixels wide or more, because social platforms don't reliably support WebP or AVIF. Generate them at build time.
- Take sitemap `lastmod` from git commit dates, not the build time.
- Split large sitemaps by collection, so indexing problems are easier to find.
- Publish a full-content RSS feed on content sites, and link it from the head.
- Submit to IndexNow only from production builds, using `VERCEL_ENV === 'production'`. Submissions from local or preview builds can invalidate the key.

## Before and after each deploy

SEO often breaks quietly during ordinary changes. `check-site` can compare two builds:

```bash
node <skill-dir>/scripts/check-site.mjs dist --save-baseline .seo-baseline.json
node <skill-dir>/scripts/check-site.mjs dist --compare .seo-baseline.json
```

Save the baseline from the build before making changes, then compare afterwards. Removed pages, new `noindex` tags, changed canonicals and lost schema are errors. Title, description and `h1` changes are warnings to confirm.

If traffic drops, first compare the dates with Google's confirmed updates on its Search Status Dashboard. A date overlap is a clue, not proof.

## After launch

- In Search Console, check indexed pages, queries and Core Web Vitals.
- Use IndexNow for Bing and others. It has no effect on Google.
- Update pages that sit in positions 5 to 15, because they're the quickest wins.
- Fix cannibalization by merging or redirecting pages competing for one query.
