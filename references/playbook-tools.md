# Free tool playbook

The one-pass recipe for building a free tool, combining design, SEO, AEO, GEO, content and testing. Follow it from top to bottom for each new tool, whether it's a new site or an addition. Open the other playbooks only for detail.

## 1. Score the idea

Before building, rate each factor from 1 to 5. Treat a total of 25 or more as strong, 15 to 24 as promising, and anything lower as a reason to rethink. Skip this if the owner has already decided.

| Factor | Question |
|---|---|
| Demand | Do people search for this? |
| Audience | Are these the visitors the site wants? |
| Uniqueness | Can it clearly beat what exists? |
| Link potential | Would people recommend or link to it? |
| Shareability | Would someone send it to a friend? |
| Feasibility | Can a focused version ship quickly? |
| Upkeep | Is it free of scrapers and fragile APIs? |
| Fit | Does it lead naturally to the site's other tools or offer? |

Tools come in common types: calculators, generators, converters, analyzers, testers, libraries and interactive learning tools. Build one job that works well, and leave accounts, saved history and extra features for later.

## 2. Define the tool

Record in `SITE.md`:

- Primary keyword and search intent, checked against the live results. If the top results aren't tools, rethink the page type.
- URL, in the form `/tools/<name>/` or the pattern the site already uses.
- Inputs, outputs, limits and edge cases.
- What top competitors do badly: ads, sign-ups, speed, mobile, limits.
- The one thing this tool will do better.
- Keyword variants that need their own page, and those that belong on this one.

## 3. Page layout

1. **Header:** `h1` with the keyword, and one sentence saying what it does.
2. **Tool:** working in the first screen on phone and desktop.
3. **Result:** appears on the same screen with copy or download.
4. **How to use it:** three or four real steps.
5. **Examples:** real input and output.
6. **Explanation:** a direct "X is..." answer, then why and when to use it.
7. **FAQ:** real questions with short, standalone answers.
8. **Related tools:** three to five links with descriptive anchors.

## 4. Build it

- Render the page as static HTML, with the tool as an island. Use `client:load` for a first-screen tool, so it's usable right away.
- Keep the tool's HTML visible before JS loads, so crawlers and slow connections see real content.
- Do the work in the browser when possible. Move heavy processing to a Web Worker so typing stays smooth.
- Process input instantly when it's cheap. Add a clear action button when it's slow.
- Keep the tool's JS small, with vanilla TS by default.
- Put state in the URL when sharing a result is useful, and keep the canonical on the clean URL.
- Support paste, drag and drop for files, and a clear or reset button.
- Use `aria-live` to announce results.

### If a server is needed

- Validate everything, and set size limits.
- Rate-limit every route.
- For URL-fetching tools, allow only the expected hosts, block private network addresses (SSRF), and limit redirects and response size.
- Vercel Functions limit request and response bodies to 4.5 MB. Send large files directly to storage or the browser.
- Keep API keys on the server.
- Say what's stored and for how long, and delete files after processing.

### Downloader and scraper tools

Check the platform's terms first and tell the owner about the risk. Stick to public content, and skip DRM or login-protected media.

## 5. Design it

- The tool is an Operate page in `playbook-design.md`, with dials of layout 4, motion 3 and density 5.
- Make the tool the visual focus, with familiar controls and no decorative hero above it. Style it precisely rather than inventing new interactions.
- Give results a quick response. Don't animate actions people repeat, such as typing or copying again.
- Use a two-panel layout on desktop if input and output sit side by side, then stack them on phones.
- Build every state: empty with a working example, typing, processing, success, error, too-large input and unsupported input.
- Show small confirmations, such as "Copied", without moving the layout.

## 6. Write it

- Follow `playbook-content.md`, and write about this specific tool only.
- Use tested examples from the real tool, never made-up output.
- Say honestly what it can't do, and state real limits.
- Make the privacy claim only if the code supports it. "Files stay on your device" must be true.

## 7. Mark it up

- Title and description written for this tool, saying what it does best. Avoid one repeated pattern across all tool pages.
- Schema: `WebApplication` with a free offer and `BreadcrumbList`. Leave out ratings unless they're real, and skip `FAQPage`, which no longer earns a Google rich result.
- Add the tool to navigation, the tools hub, sitemap, `llms.txt` and related tool blocks.
- Add at least two links from existing pages.
- If the site has several languages, add this page to each with hreflang.

## 8. Test it

Use the tool as a visitor would, in a real browser at 375px and 1280px:

- [ ] Normal input gives correct output, checked against a known answer
- [ ] The bad data in section 10 of `playbook-design.md` works or fails clearly, including empty, huge, emoji and pasted input
- [ ] Wrong file types and oversized files show a helpful message
- [ ] Copy and download buttons work, and downloaded files open
- [ ] Keyboard-only use works, with visible focus
- [ ] No console errors, no horizontal scroll, no layout shift
- [ ] Works with slow CPU and network throttling
- [ ] Unit tests cover the core logic and edge cases
- [ ] `check-site` passes, and Lighthouse reaches the targets in `phases.md`

## 9. Grow it

Once the tool works:

- Add variant pages only where the intent and output are truly different. Near-duplicate pages for every query variation won't help.
- Support the tool with useful articles for "how to" and "what is" searches, linked back to it.
- Track completed uses and shares, not just visits.
- Keep it working: check any API or scraper on a schedule.
- Check Search Console for queries the page could answer better.
- Add monetization only when the owner asks, and keep ads away from the tool controls.
