---
name: solo-seo
description: Use when the user wants to build, create, redo or launch a website, landing page, free online tool, content site, blog or directory, or add a tool, page or feature to an existing site, even from a one-line request like "make a site for X" or "add a tool to my site". Also use when a project has a SITE.md file, the user says "continue the site", or names Solo SEO.
---

# Solo SEO

The owner's standard process for building and growing websites. The owner should only have to say what they want. Everything else is decided here, so don't ask them to repeat it.

## Start here

1. If `SITE.md` exists, read it and resume at the first unchecked item.
2. If the project already contains a site with no `SITE.md`, or the request adds to an existing site, follow `references/existing-site.md`. It replaces the phase table below.
3. Otherwise this is a new site. Copy `assets/SITE.template.md` to `SITE.md` and begin at phase 0.

Reread `SITE.md` at the start of every phase and after any context reset, then tick finished work and log decisions there. This file keeps the work on track and lets any agent, in any session, continue it.

## Defaults for new sites

Use these unless the owner says otherwise. Record any change in `SITE.md`.

| Decision | Default |
|---|---|
| Framework | Astro, static output, zero JS except where a feature needs it |
| Styling | Tailwind CSS with design tokens as CSS variables |
| Interactive parts | Astro islands, using vanilla TS unless a framework clearly pays off |
| Hosting | Vercel |
| Data or login | Add only when the brief needs it. Supabase by default |
| Accounts on free tools | None. The tool works immediately |
| Visual style | Premium and specific to the subject, inferred from the request and site type |
| Icons | Phosphor as inline SVG, regular or duotone weight, one set per site |
| Images | Custom SVG, code-built graphics and real product screenshots |
| Language | Whatever the request or site calls for, English if nothing says otherwise |
| Monetization | None until the owner asks. See `references/site-types.md` |

The owner chooses paid icon or UI kits. If they supply a licence or files, use those. AI images and stock photos are used only when the owner asks for them.

## Git and backup

Commit after every finished task, so no progress is lost.

- **New site:** create `.gitignore` first and confirm no secrets are staged. Then create a private repo once with `gh repo create <name> --private --source . --push`, and push after every commit. If `gh` isn't signed in, keep committing locally and add it to Needs from owner.
- **Existing site:** see `references/existing-site.md`.
- Make a repo public only when the owner asks.

## The playbooks

This skill merges the best SEO, design, content and testing skills into its own playbooks. Work directly from them, without loading other skills. Open the one matching the work:

| Work | Read |
|---|---|
| Keywords, structure, on-page, technical, schema, AEO, GEO, pages at scale | `references/playbook-seo.md` |
| UI, UX, forms, accessibility, front-end speed | `references/playbook-design.md` |
| Copy, articles, conversion, AI writing tells | `references/playbook-content.md` |
| Building a free tool, start to finish | `references/playbook-tools.md` |

Reach for another skill only for a specialist need outside these playbooks, such as local SEO, ecommerce, a database design or a video. If you do, these rules still take priority.

## New site phases

Read the phase's section in `references/phases.md` before starting it. For site-type differences, read `references/site-types.md` once during phase 0. For a free tool, also follow `references/playbook-tools.md` through phases 2 to 7.

| # | Phase | Output | Stop for owner? |
|---|---|---|---|
| 0 | Intake | Site type and goal | Only if unclear (max 3 questions) |
| 1 | Brief | Brief section of `SITE.md` | **Yes: approve brief** |
| 2 | Research | Keywords, competitors, page map | No |
| 3 | Design | `DESIGN.md` and a real homepage preview | **Yes: approve look** |
| 4 | Copy | Final words for every page | No |
| 5 | Build | Working site | No |
| 6 | SEO + AI search | Metadata, schema, sitemap, llms.txt | No |
| 7 | Quality gates | Passing `check-site`, browser, a11y, speed, security, slop checks | No |
| 8 | Launch | Production deploy and indexing | **Yes: approve production deploy** |
| 9 | Handoff | Report to owner | Ends the run |

Between the stops, keep going without asking. Make reasonable calls and log them in `SITE.md` under Decisions. Ask only when a wrong guess would be expensive to undo.

## Standing rules

- **Current docs.** Your memory of a framework or service may be out of date. Before setting up or changing anything in the stack, check the official docs for the version in use, in this order: docs shipped in `node_modules`, a docs tool such as Context7 if the agent has one, then the official website. Follow the docs when they differ from memory. Log versions and docs checked in `SITE.md`.
- **No AI slop.** Read `references/anti-slop.md` before design, copy, SEO and quality work. It sets the standard for UI, UX, content, SEO, AEO and GEO, and it outranks advice from other skills. Use SVG icons everywhere, with no emoji in the interface or content.
- **Proof before done.** Run the site, open the pages in a real browser, use the feature as a visitor would, and check phone and desktop widths. Only then call anything done. Report the actual results, including anything that failed or was skipped.
- **Truthful content.** Use only facts from the owner or from sources you checked. For anything missing (stats, testimonials, customer logos, prices, addresses), leave the claim out and list it in `SITE.md` under Needs from owner.
- **Real keyword data.** Use the owner's keywords or tools when offered, otherwise research with what's available, as set out in `references/playbook-seo.md`. Label estimates as estimates, and give no invented volumes.
- **Secrets.** Keep keys in environment variables, outside the repo and outside client code.

## When a quality check fails

Fix the cause, rerun the failed check, then continue. After three failed attempts at the same check, record it under Needs from owner and tell them at the next stop.
