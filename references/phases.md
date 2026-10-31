# Phase checklists

Each section works alone, so a phase can be finished even if no other skill is available.

## 0. Intake

- Work out the site type from the request: free tool, landing page, content, directory, or a mix.
- Work out the goal: the one action a visitor should take.
- Work out the visual style from the prompt and site type. Ask only if the two point in different directions.
- Infer whatever you can from the request and the repo. Ask at most 3 questions, and only about things you can't reasonably assume (usually audience, offer, or domain).

## 1. Brief

Fill the Brief section of `SITE.md`: name, one-line promise, audience, main goal and its metric, site type, pages for launch, tone, must-haves, and anything out of scope. Keep it under one screen. Show it to the owner and wait for approval.

## 2. Research

Follow Keyword research and Site structure in `playbook-seo.md`.

- Check the top 3 to 5 competitors: what they offer, how they're structured, what's weak.
- Build a keyword list: one primary keyword per page, grouped by search intent.
- Write the page map in `SITE.md`: URL, page purpose, primary keyword, internal links.
- Keep URLs short, lowercase and hyphenated.
- Give each page a distinct intent, so no two pages compete for the same keyword.

## 3. Design

Follow `playbook-design.md`, sections 1 to 8.

- Pick one clear visual direction drawn from the subject, using the UI and UX standards in `anti-slop.md`.
- Write `DESIGN.md`: palette, type scale, spacing, radius, motion rules, component notes.
- Define the tokens as CSS variables and support dark mode if the audience expects it.
- Scaffold the project (commands in phase 5), then build the real homepage hero and one section with real copy.
- Show the owner a running preview at desktop and phone width. Offer a second direction only if they reject it. Wait for approval.

## 4. Copy

Follow `playbook-content.md`.

- Write every page from the page map before building it, so layouts fit real words.
- Lead with what the visitor gets, in their words. One primary CTA per page.
- Use specifics from the brief. Follow the truthful content rule in `SKILL.md`.
- Write the UI text too: buttons, empty states, errors, form help, 404 page.
- Finish by checking every page against the Content section of `anti-slop.md`.

## 5. Build

Before scaffolding, read the official install guides for Astro, its Vercel deployment page, and Tailwind for the versions you'll get. Use the guide's commands if they differ from these. Scaffold if phase 3 didn't, then:

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git --yes
npm install
npx astro add tailwind sitemap --yes
npm install -D @astrojs/check typescript
```

Check current flags with `--help` if a command fails.

If Astro rejects the Node version, install Node 24 in the project and leave the system Node alone: run `npm install -D node@24`, then use `npx astro` and `npm run` as usual. Record it in `SITE.md`, and add `"engines": { "node": "24.x" }` to `package.json` so Vercel matches.

- Follow Astro setup in `playbook-seo.md`, starting with `site` in `astro.config`.
- Create one shared layout that handles title, description, canonical, Open Graph, Twitter card and JSON-LD through props.
- Build each interactive part with every state and bad-data case from sections 9 and 10 of `playbook-design.md`.
- Use semantic HTML with one `h1` per page and no skipped heading levels.
- Use Astro `<Image>` or AVIF/WebP with explicit width and height. Use `loading="lazy"` below the fold and never on the hero image.
- Self-host fonts, subset them, and preload at most two.
- Add a custom 404 page, privacy page, and a contact route.
- Use Phosphor icons as inline SVG, for example from `@phosphor-icons/core`, so no icon font or runtime JS is needed.
- Follow the Git section of `SKILL.md`: commit and push after every finished task.
- If a Vercel adapter is needed (server routes only), add it with `npx astro add vercel`. Static sites need none.

## 6. SEO + AI search

Follow `playbook-seo.md`, and apply the SEO, AEO and GEO standards in `anti-slop.md`. Check Google Search Central and schema.org for current guidance before adding schema, because rich result rules change often.

- Every indexable page has a unique title (under 60 characters) and description (under 160).
- Add JSON-LD: `Organization` and `WebSite` on the home page, plus the type-specific schema in `site-types.md`. Mark up only what is visible on the page.
- Check that `sitemap-index.xml` is generated and `robots.txt` links to it. Allow AI search crawlers, and ask the owner before blocking training crawlers.
- Add a short `/llms.txt` with links to key pages. It's optional, so keep it quick.
- Make each main section answer one question plainly in its first two sentences.
- Link related pages to each other with descriptive anchor text. Every page should be reachable within three clicks of home.
- Create a 1200x630 OG image in JPEG or PNG for the site, and per-page ones for important pages.

## 7. Quality gates

Run all of these on a production build. Record results in `SITE.md`.

```bash
npx astro check
npm run build
node <skill-dir>/scripts/check-site.mjs dist
```

`<skill-dir>` is the folder holding this skill's `SKILL.md`. Use `.vercel/output/static` instead of `dist` if the Vercel adapter is in use.

1. **Automated check:** `check-site` exits 0. Review its warnings too.
2. **Browser:** with Playwright or the agent's browser tool, open every page template at 375px and 1280px. Confirm no horizontal scroll, no console errors, and working nav, forms and tools. Look at the screenshots rather than assuming.
3. **Accessibility (WCAG 2.2 AA):** run axe if available, then complete section 12 of `playbook-design.md`, including keyboard and `prefers-reduced-motion` checks.
4. **Speed:** run Lighthouse on home and the heaviest page, mobile preset. Targets: 90+ in all categories, LCP under 2.5s, CLS under 0.1, INP under 200ms.
5. **Security:** `npm audit --omit=dev` shows no high or critical issues. No secrets in the repo or built output. User input is validated and escaped. Security headers (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`) are set in `vercel.ts` or `vercel.json`.
6. **Slop:** complete the final slop pass in `anti-slop.md`.

Add a GitHub Actions workflow that runs `astro check`, the build, `check-site` and `npm audit` on every push, so later changes can't quietly break these checks. Copy `<skill-dir>/scripts/check-site.mjs` into the project's `scripts/` folder so the workflow can run it. Vercel's GitHub app can handle deployment.

## 8. Launch

Before asking the owner:

- Add privacy-friendly analytics. Default to Vercel Web Analytics (`@vercel/analytics`) and track the main goal as an event.
- Generate the full favicon set from a logo or simple mark, plus `site.webmanifest`.
- Run `vercel deploy` for a preview, then rerun the browser check on the preview URL.

Then ask the owner to approve production, giving them the preview URL and any open items. After approval:

- Run `vercel deploy --prod` and connect the domain if there is one.
- Rerun `check-site` against the build and open the live home page to confirm it loads.
- Tell the owner what only they can do: verify in Google Search Console, submit the sitemap there and in Bing Webmaster Tools.
- Submit URLs through IndexNow if a key is set up.

## 9. Handoff

Send the owner a short report:

- Live URL, repo location and what was built.
- Results of each quality gate, as measured.
- Needs from owner, in order of importance.
- The next three things likely to grow the site.
