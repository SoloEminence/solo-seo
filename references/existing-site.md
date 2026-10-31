# Working on an existing site

Use this for new tools, pages or features on a site that already exists. The existing site's stack and style replace the new-site defaults, except where the owner asks for a change.

## 1. Learn the site

Before changing anything, read the code and run the site. Find out and record in `SITE.md`:

- Framework, versions, styling, package manager, hosting and deploy method.
- Design: tokens, type, spacing, icon set, and reusable layouts and components.
- Tone of voice, from at least three existing pages.
- Languages, translation setup and hreflang.
- How pages are structured for titles, schema, sitemap, navigation and footer.
- Git branch habits, and whether pushing a branch deploys to production.

If there's no `SITE.md`, create one from the template and fill in only the sections that apply. Check the docs for the versions this project uses, which may be older than the latest.

If the site builds to static files, build it and save an SEO baseline before changing anything: `node <skill-dir>/scripts/check-site.mjs <build-folder> --save-baseline .seo-baseline.json`.

## 2. Plan the change

Write a short plan in `SITE.md`: what's being added, its URL and keyword, the files involved, and the related changes it needs.

Related changes are part of the job, and need no approval:

- Navigation, footer, tool or category listings.
- Internal links to and from related pages.
- Sitemap, schema and `llms.txt` entries.
- Translations for every language the site already supports, with hreflang.

Ask the owner first when the request calls for wider UI or UX changes: restyling existing pages, restructuring navigation, changing URLs, or replacing components. Give the reason and a recommendation. If URLs must change, add redirects.

List other problems you notice under Needs from owner, and leave them unfixed unless they block this work.

## 3. Build it to match

- Refining keeps the site's identity, behaviour and copy, and leaves everything outside the request alone. Redesigning replaces the look but keeps its content and function. Never mix the two, and redesign only when the owner asks.
- Reuse existing components, tokens, icons and patterns. Add a new one only when nothing fits.
- A visitor should not be able to tell the new page was added later.
- Keep to the site's existing language and tone.
- Follow `references/anti-slop.md`. If the existing site has a pattern it flags, match the site and mention it under Needs from owner.
- For a new tool, follow `references/playbook-tools.md` from top to bottom. For other work, use `playbook-content.md` and `playbook-seo.md`, plus the checklists in `references/phases.md` (phases 4 to 7).

## 4. Check it

- Run the project's own lint, type check, tests and build.
- Run `node <skill-dir>/scripts/check-site.mjs <build-folder> --compare .seo-baseline.json` if the site builds to static files. Fix every issue caused by this work, and list older issues under Needs from owner.
- Test the new work in a browser at 375px and 1280px, then check the home page and one related page for regressions.

## 5. Save and ship

- If the project has no git repo, set it up as in the Git section of `SKILL.md`.
- On the default branch, create a feature branch first. Commit after every finished task and push that branch.
- If pushing a branch would deploy to production, commit locally until the owner approves.
- Ask before merging to the default branch or deploying to production, with the preview link and test results.
- Finish with a short report: what changed, test results, and Needs from owner.
