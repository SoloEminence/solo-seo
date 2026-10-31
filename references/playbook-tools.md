# Free tool playbook

The one-pass recipe for building a free tool, combining design, SEO, AEO, GEO, content and testing. Follow it from top to bottom for each new tool, whether it's a new site or an addition. Open the other playbooks only for detail.

## 1. Define the tool

Record in `SITE.md`:

- Primary keyword and search intent, checked against the live results.
- URL, in the form `/tools/<name>/` or the pattern the site already uses.
- Inputs, outputs, limits and edge cases.
- What top competitors do badly: ads, sign-ups, speed, mobile, limits.
- The one thing this tool will do better.
- Keyword variants that need their own page, and those that belong on this one.

## 2. Page layout

1. **Header:** `h1` with the keyword, and one sentence saying what it does.
2. **Tool:** working in the first screen on phone and desktop.
3. **Result:** appears on the same screen with copy or download.
4. **How to use it:** three or four real steps.
5. **Examples:** real input and output.
6. **Explanation:** a direct "X is..." answer, then why and when to use it.
7. **FAQ:** real questions with short, standalone answers.
8. **Related tools:** three to five links with descriptive anchors.

## 3. Build it

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

## 4. Design it

- Set dials from `playbook-design.md`: layout 4, motion 3, density 5.
- Make the tool the visual focus, with its own distinctive interface and no decorative hero above it.
- Use a two-panel layout on desktop if input and output sit side by side, then stack them on phones.
- Build every state: empty with a working example, typing, processing, success, error, too-large input and unsupported input.
- Show small confirmations, such as "Copied", without moving the layout.

## 5. Write it

- Follow `playbook-content.md`, and write about this specific tool only.
- Use tested examples from the real tool, never made-up output.
- Say honestly what it can't do, and state real limits.
- Make the privacy claim only if the code supports it. "Files stay on your device" must be true.

## 6. Mark it up

- Title: `<Keyword> - Free Online Tool | <Brand>`, varied so it doesn't match other tool pages.
- Schema: `WebApplication` with a free offer and `BreadcrumbList`. Add `FAQPage` only for visible FAQs. Leave out ratings unless they're real.
- Add the tool to navigation, the tools hub, sitemap, `llms.txt` and related tool blocks.
- Add at least two links from existing pages.
- If the site has several languages, add this page to each with hreflang.

## 7. Test it

Use the tool as a visitor would, in a real browser at 375px and 1280px:

- [ ] Normal input gives correct output, checked against a known answer
- [ ] Empty input, huge input, Unicode, emoji and pasted formatting all work or fail clearly
- [ ] Wrong file types and oversized files show a helpful message
- [ ] Copy and download buttons work, and downloaded files open
- [ ] Keyboard-only use works, with visible focus
- [ ] No console errors, no horizontal scroll, no layout shift
- [ ] Works with slow CPU and network throttling
- [ ] Unit tests cover the core logic and edge cases
- [ ] `check-site` passes, and Lighthouse reaches the targets in `phases.md`

## 8. Grow it

Once the tool works:

- Add variant pages only where the intent and output are truly different.
- Check Search Console for queries the page could answer better.
- Add monetization only when the owner asks, and keep ads away from the tool controls.
