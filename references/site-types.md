# Site types

Read the section for this site's type. A site can combine types, such as a free tool with a blog.

## Free tool site

Follow `playbook-tools.md`, which covers everything from research to testing for each tool. Add a tools hub page that lists every tool by category.

## Landing page

- Build one page around one action. Remove anything that doesn't support it, including extra navigation.
- Section order: hero with promise and CTA, proof, how it works, benefits, objections or FAQ, final CTA. Skip proof if there is none real yet.
- Keep the CTA visible on a phone without scrolling.
- Keep forms to the fewest fields possible, with inline validation and a clear success state.
- Send form submissions somewhere real and test that one arrives. Ask the owner where if the brief doesn't say.
- Schema: `Organization`, plus `Product` or `SoftwareApplication` if it applies.

## Content site or blog

- Use Astro content collections with a typed schema (title, description, date, updated, author, tags, image).
- Plan topic clusters: one pillar page linking to supporting articles and back.
- Generate an RSS feed, tag or category pages, and a related-posts block.
- Show author and updated date on articles. Use real people and credentials only.
- Add `noindex` to thin tag pages with fewer than three posts.
- Schema: `Article` or `BlogPosting`, and `BreadcrumbList`.

## Directory or programmatic pages

- Keep data in a structured file or database, and generate pages from one template.
- Each page needs enough unique value to stand alone: its own data, comparisons, or written notes. Swapping a keyword into the same text doesn't count.
- Set a minimum data rule, and `noindex` or skip pages that fall below it.
- Include filters, category hubs and breadcrumbs, so every page has internal links.
- Launch in batches: start with the best 50 to 100 pages, check indexing, then expand.
- Schema: `ItemList` on hubs, `BreadcrumbList` everywhere, and the matching item type on detail pages.

## Comparison and alternatives pages

Follow Comparison pages in `playbook-seo.md`.

## Monetization

Add this only when the owner asks, usually after the site is built.

- **Display ads:** reserve fixed space for each slot to prevent layout shift, load the ad script after the main content, and keep ads away from tool controls. Add an `ads.txt` and rerun the speed check.
- **Affiliate links:** add a clear disclosure near the links, use `rel="sponsored"`, and recommend only what the page can honestly support.
