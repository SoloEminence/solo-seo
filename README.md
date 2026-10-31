# Solo SEO

A complete website-building skill for AI coding agents. Say what you want in one line, and the agent handles research, design, copy, build, SEO, testing and launch.

```text
Use Solo SEO to build a free PDF merger site
Use Solo SEO to add a word counter tool to my site
```

It merges the best open-source SEO, design, content and testing skills into one set of playbooks, so agents have clear instructions without loading dozens of other skills.

## What it does

- **New sites:** a ten-phase process, stopping only to approve the brief, the look and the production deploy.
- **Existing sites:** reads the site first, matches its style, stack and language, and updates internal links and navigation.
- **Free tools:** a one-pass recipe covering design, SEO, content and testing.
- **Search:** SEO, AEO and GEO guidance, with corrections for retired rich results.
- **No AI slop:** a standard for UI, UX, content and search, plus automatic checks for AI phrasing and emoji.
- **Proof before done:** real browser checks, plus a launch checker for broken links, missing tags, schema errors and placeholder text.
- **Memory:** a `SITE.md` file lets any agent continue the work in any session.
- **Current docs:** agents check official docs for the versions in use.

## Default stack

Astro, Tailwind CSS and Vercel, with Supabase only when needed and Phosphor icons. Existing sites keep their own stack. Change the defaults table in `SKILL.md` to suit you.

## Install

Using the [skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add SoloEminence/solo-seo
```

Or install it by hand:

```bash
git clone https://github.com/SoloEminence/solo-seo ~/.agents/skills/solo-seo
node ~/.agents/skills/solo-seo/scripts/install.mjs
```

`install.mjs` links the skill into Claude Code, Cursor, OpenCode and Copilot CLI if they're installed. Codex and Gemini CLI read `~/.agents/skills` directly. To update a hand install, run `git pull` in that folder.

## Files

| File | Purpose |
|---|---|
| `SKILL.md` | Entry point: rules, defaults and phases |
| `references/phases.md` | Checklist for each phase |
| `references/existing-site.md` | Process for adding to a site |
| `references/playbook-seo.md` | SEO, AEO, GEO, schema and pages at scale |
| `references/playbook-design.md` | UI, UX, accessibility and speed |
| `references/playbook-content.md` | Copy, articles, conversion and AI writing tells |
| `references/playbook-tools.md` | One-pass free tool recipe |
| `references/site-types.md` | Landing page, content, directory and monetization notes |
| `references/anti-slop.md` | The quality standard |
| `scripts/check-site.mjs` | Launch checker, with no dependencies |
| `assets/SITE.template.md` | Project memory template |

## Run the checker alone

```bash
node scripts/check-site.mjs dist
```

## Credits

Built on the work listed in [CREDITS.md](CREDITS.md). Licensed under [MIT](LICENSE).
