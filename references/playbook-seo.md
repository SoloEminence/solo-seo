# SEO, AEO and GEO playbook

Complete instructions for search work, so no other SEO skill is needed. Search rules change, so confirm anything time-sensitive in Google Search Central before relying on it.

## Keyword research

Use the best source available, in this order:

1. Keywords or exports the owner provides. If they mention having a list or a tool, ask for it once.
2. A connected paid tool: Semrush, Ahrefs or DataForSEO. If the owner has one but it isn't connected, ask for an export.
3. Google Search Console for a live site. Find queries with many impressions and few clicks.
4. Free methods: Google autocomplete, People Also Ask, related searches, the live top 10, Google Trends, Reddit and support forums.

If the owner says to handle it yourself, use whatever is available without asking. Label free research as estimates, with no invented volumes or difficulty scores.

For each keyword, read the live results before planning a page. The result types show the intent: tools, guides, lists, products or videos. Build the page type Google already rewards. New sites should start with specific long-tail terms that have weak results, then move up to broader terms.

## Site structure

- Plan one page per intent. Merge pages that would rank for the same query.
- Keep URLs lowercase, hyphenated, short and free of parameters. Use subfolders, not subdomains.
- Use one trailing-slash style across the site.
- Use hub pages that link to related pages, with those pages linking back and to each other.
- Keep every important page within 3 clicks of home, with no orphan pages.
- Use descriptive anchor text. Give each new page links from at least 2 existing pages.

## On-page checklist

- Title under 60 characters: main keyword early, brand at the end.
- Meta description of 140 to 160 characters that states the page's value honestly.
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

Limits to remember:

- Google no longer shows HowTo rich results or the sitelinks search box.
- FAQ rich results are limited to well-known health and government sites. `FAQPage` markup may still help machines read the page, so add it only for real, visible FAQs.
- Software rating stars need genuine ratings or reviews. Skip them rather than invent any.
- Skip self-serving reviews on your own organization or product.

## AEO: being the quoted answer

- Collect real questions from People Also Ask, forums and support channels.
- Use a question as the heading, then answer directly in the first 40 to 60 words.
- Write each answer to make sense alone. Name the subject, because "it" and "this" lose meaning when quoted.
- Follow the short answer with detail, examples and edge cases.
- Use real HTML lists, steps and tables for steps and comparisons.
- Open tool and concept pages with a plain "X is..." definition.

## GEO: being cited by AI search

No signal here is guaranteed. These are the habits with the best evidence:

- Rank in normal search first. AI Overviews mainly draw on pages that already rank well.
- Publish things worth citing: original data, tests, clear definitions and unique tools.
- Keep key sections self-contained. About 130 to 170 words is a good length, but never pad to reach it.
- Attribute claims to primary sources, and show real authors and updated dates.
- Serve main content without JavaScript. Many AI crawlers don't run it.
- Keep brand facts consistent, and use `sameAs` links to real profiles.
- Be present where AI systems look: Reddit, YouTube, Wikipedia, LinkedIn and review sites. This needs real participation, so list opportunities for the owner instead of faking mentions.
- `llms.txt` is optional and unproven. Spend five minutes on it and no more.

### AI crawlers in robots.txt

Allow search crawlers so the site can be cited. Blocking training crawlers is the owner's choice.

| Crawler | Used for |
|---|---|
| Googlebot | Google Search and AI Overviews |
| Bingbot | Bing and Copilot |
| OAI-SearchBot, ChatGPT-User | ChatGPT search and live fetching |
| GPTBot | OpenAI model training |
| PerplexityBot, Perplexity-User | Perplexity search and fetching |
| Claude-SearchBot, Claude-User | Claude search and fetching |
| ClaudeBot | Anthropic model training |
| Google-Extended | Gemini training only. It has no effect on Search |

Crawler names change, so check each vendor's docs before writing rules.

## Pages at scale

Use this for tool variants, directories, comparisons, locations and glossaries.

- **Standalone test:** would this page be worth publishing if no similar page existed?
- **Unique content:** aim for 40% or more unique to each page. Stop and fix anything under 30%.
- **Thin page rule:** review pages under 300 words, and merge or `noindex` them if they lack value.
- **Data:** each record needs enough real attributes to fill the page. Hide sections with missing data.
- **Stronger data wins:** your own data beats user data, which beats licensed data, which beats public data.
- **Rollout:** publish 50 to 100 pages, review a 5 to 10% sample, watch indexing for 2 to 4 weeks, then expand. Get the owner's approval before publishing more than 500.
- **Risky patterns:** swapped city names, "[competitor] alternative" without real comparisons, and unreviewed AI pages. Google treats these as scaled content abuse.

## After launch

- In Search Console, check indexed pages, queries and Core Web Vitals.
- Use IndexNow for Bing and others. It has no effect on Google.
- Update pages that sit in positions 5 to 15, because they're the quickest wins.
- Fix cannibalization by merging or redirecting pages competing for one query.
