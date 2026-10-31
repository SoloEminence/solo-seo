# Anti-slop standard

Slop is anything that could appear unchanged on a thousand other AI-built sites. Before calling work done, ask of each section: "Could a competitor paste this onto their site with no edits?" If yes, rewrite it around something specific to this site.

## UI

A strong result has:

- A visual idea drawn from the subject: its materials, tools, era or culture. Write that idea in one sentence in `DESIGN.md`.
- A type pairing chosen for this brand, with a clear size hierarchy.
- A palette of one dominant colour, one accent and real neutrals, with every value in the tokens.
- Layouts that vary with the content: sizes, alignment and rhythm change from section to section.
- One premium SVG icon set at a consistent weight and size, tuned to the palette. Phosphor is the default for new sites.
- Real product screenshots or custom SVG and code-built graphics. Use a simple typographic layout when none exist.
- Motion only where it explains something, such as a state change or the result of an action.

Signs of slop to replace: purple-to-blue gradients, gradient headline text, decorative glass and blur, glowing blobs, three equal icon cards, nested cards, centred everything, a small label or pill above every heading, the big-number-and-small-label stats row, 01/02/03 section numbers without a real sequence, thick coloured left borders on cards and alerts, hard offset shadows, mono fonts as a "technical" costume, emoji or Unicode symbols as icons, default shadcn or Tailwind looks, stock people smiling at laptops, fade-up on every scroll.

## UX

A strong result has:

- The main task reachable in one obvious step from the first screen.
- Designed states for loading, empty, error and success, with messages that say what to do next.
- Buttons named for what they do, such as "Download MP3" or "Compare plans".
- Honest interface: real availability, real prices, and no fake counters or countdown timers.
- Controls that follow web conventions and work by keyboard and touch.

Signs of slop to replace: "Get Started" on every button, "Learn more" links, popups on arrival, sign-up walls on free tools, carousels hiding content, fake "trusted by" logos, dead links and buttons left in for looks.

## Content

A strong result has:

- A specific point of view, with examples, numbers, steps or trade-offs from the owner or verified sources.
- Plain words and a mix of sentence lengths, as a knowledgeable person would explain it to a friend.
- First-hand detail where available: what was tested, what broke, what surprised.
- An opening that gets straight to the answer, and an ending that stops when the point is made.

Signs of slop to replace: "in today's fast-paced world", "unlock", "elevate", "seamless", "delve", "game-changer", "leverage", "robust", "it's important to note", "not just X but Y", lists of three by habit, em dashes everywhere, summary paragraphs that repeat the page, headings that promise more than the text delivers.

## SEO

A strong result has:

- Pages that exist because a real search intent needs them, each better than what ranks now in one named way. Note that way in the page map.
- Titles and descriptions written for the person choosing a result, with the page's actual value in them.
- Depth set by the question, so a short answer stays short.
- Internal links placed where a reader would want them, with anchors that describe the destination.
- Author, date and sources that are real.

Signs of slop to replace: keyword-stuffed headings, word-count padding, a "What is X?" section on every page, near-duplicate pages with swapped keywords, mass AI articles without review, invented authors, schema for content not on the page, boilerplate FAQs that nobody asks.

## AEO (answer engines)

A strong result has:

- Real questions from search results, forums and support channels, each answered in the first one or two sentences under its heading.
- Answers that make sense when quoted alone, naming their subject instead of saying "it" or "this".
- Definitions, steps, tables and comparisons in plain HTML.

Signs of slop to replace: questions invented to fit a keyword, answers that restate the question, long intros before the answer, FAQ blocks repeated across pages.

## GEO (AI search citations)

A strong result has:

- Information worth citing: original data, tested results, clear definitions or expert explanation, with the method shown.
- Consistent facts about the brand across the site, so AI systems can identify it.
- Claims linked to primary sources, with visible updated dates that reflect real changes.
- Key content in server-rendered HTML, available to crawlers without JavaScript.
- A short, accurate `llms.txt`, treated as optional support. It doesn't guarantee citations or rankings.

Signs of slop to replace: made-up statistics or quotes, fake expert credentials, text addressed to AI bots, hidden prompts, invented "best X" self-rankings, bumping dates without changing the content.

## Final slop pass

Run this in phase 7, reading the built pages as a first-time visitor:

1. Look at the home page screenshot. Could you tell what makes this brand different with the words blurred?
2. Read the first paragraph of each main page aloud. Fix anything a person wouldn't say.
3. For every claim, name its source. Delete any you can't.
4. For every section, name what it gives the visitor that competitors don't. Cut or rewrite it if there's nothing.
5. Review the `Possible AI phrasing` warnings from `check-site`. Rewrite each one unless the phrase is truly the best wording.
