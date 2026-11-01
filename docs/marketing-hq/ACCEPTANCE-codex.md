## Verdict: REJECT

The seven-step walkthrough is largely implemented, and a read-only type-check passed. Acceptance is blocked by misleading planned-step copy, unsourced numbers in prose, an incorrect search count, and source routes that can serve active content.

### Acceptance review

| PRD user story | Result | Code and data evidence |
|---|---|---|
| 1. Find a project | PASS | Home renders objective, status, current step and link: `apps/marketing-hq/app/page.tsx:47–78`; Kimchi is `active`, step 5: `marketing-hq/projects/kimchi.json:6–9`. |
| 2. Understand scope | PASS | Read-only example and no running AI team are explicit: `apps/marketing-hq/app/page.tsx:86–89`. |
| 3. Follow the cycle | PASS | Seven ordered steps are validated and linked in the rail and pager: `apps/marketing-hq/lib/projects.ts:63–71,191–193`; `apps/marketing-hq/components/ui.tsx:132–159`; `apps/marketing-hq/app/projects/[id]/steps/[n]/page.tsx:205–218`. |
| 4. Share a step | PASS | The route selects the step from its URL: `apps/marketing-hq/app/projects/[id]/steps/[n]/page.tsx:23–42`. |
| 5. Explain reasoning | PASS | Question and required sections appear in order: `apps/marketing-hq/app/projects/[id]/steps/[n]/page.tsx:63–202`. |
| 6. Trace a number | FAIL | Metric sources are visible (`steps/[n]/page.tsx:117–125`), but numbered findings such as the scores and statistical claims have no source beside them: `marketing-hq/projects/kimchi.json:106–108,227–230`. |
| 7. Open the work | CANNOT VERIFY FROM CODE | Repo files are checked before linking and missing ones are labelled: `apps/marketing-hq/lib/projects.ts:256–275`. Availability of the external Claude artifacts and deployed GitHub links needs a live check. |
| 8. Learn the role | PASS | Why, good work, mistakes and terms render for each step: `steps/[n]/page.tsx:163–201`; required fields are validated: `apps/marketing-hq/lib/projects.ts:138–145`. |
| 9. Separate plan from results | FAIL | The banner is clear (`steps/[n]/page.tsx:69–77`), but step 5 still heads planned actions **“What I did”** (`:81–84`), while its learning text says audiences “were checked” and calls “were logged”; step 7 says a next test “is already queued”: `marketing-hq/projects/kimchi.json:304–307,399–402`. These can read as completed work. |
| 10. Use the loop | PASS | Six conditional outcomes have text tones and step links: `apps/marketing-hq/app/projects/[id]/loop/page.tsx:38–48,68–99`; `marketing-hq/projects/kimchi.json:417–424`. |
| 11. Handle missing data | FAIL | Unknown IDs, invalid steps and invalid required fields have routes or errors (`steps/[n]/page.tsx:25–35`; `apps/marketing-hq/lib/projects.ts:171–207`). But a missing or inaccessible project directory, or a GitHub 404, becomes an empty list and displays “No projects yet”: `apps/marketing-hq/lib/store.ts:44–60`; `apps/marketing-hq/app/page.tsx:30–35`. |

The screen-level structure is otherwise present: Home’s project row (`app/page.tsx:9–89`), the project header, bet and artifact list (`components/ui.tsx:73–129`), zero-metric and zero-link states (`steps/[n]/page.tsx:113–138`), the loop’s unavailable state (`loop/page.tsx:55–62`), and the 404 (`app/not-found.tsx:5–19`). The current step heading remains a specific exception to the PRD’s plan/results requirement.

**Definition of done:** FAIL on every displayed number carrying a source, unmistakable planned versus actual work, and reliable Home error states, for the reasons above. PASS on exactly seven ordered steps and six contract-shaped outcomes (`lib/projects.ts:63–71,150–160`; `kimchi.json:26–425`), and on server-rendered JSON with no client project fetch or paid API (`lib/store.ts:44–80`; `app/page.tsx:5–6`; `steps/[n]/page.tsx:23–40`). A read-only `tsc --noEmit --incremental false` passed. Local startup, production build, live links, phone-width layout, keyboard operation and contrast are **CANNOT VERIFY FROM CODE**; the CSS and markup provide focus styles, text status labels, responsive grids and theme persistence (`app/globals.css:15–43,81–90,221–242`; `components/ThemeToggle.tsx:6–26`), but those need runtime review.

### Data and code findings

The JSON has seven steps, six outcomes, and a `source` on every **Metric** object (`kimchi.json:48–52,111–115,171–175,232–237`). The `did` bullets use “I” and no “we” appears. The loop’s imperative `then` strings, however, render awkwardly after “Then I” (“Then I Scale it”): `kimchi.json:418–423`; `loop/page.tsx:87–90`.

Claims needing correction or qualification:

- **Search count:** `kimchi.json:37,49` says four searches across UK and EU; the underlying record says four terms run in each region, **eight searches**: `docs/kimchi/finance-size-check.md:5–14,28`.
- **Product verification:** “Budget caps and cost attribution are real” (`kimchi.json:44`) overstates first-hand evidence. The limit-setting screen was seen without spend testing, and reporting was observed in an empty state: `docs/kimchi/product-walkthrough.md:3,9–12`.
- **Buyer inference:** “where one platform owner can still decide” (`kimchi.json:100`) is an assumption; the cited size buckets establish company size, not decision authority: `docs/kimchi/finance-size-check.md:143–155`.
- **Budget inference:** a job ad as a sign that “someone has budget” (`kimchi.json:72`) is unsupported and conflicts with the project’s own hiring-versus-buying caveat (`:127`).
- **Statistical wording:** “90% sure the gap is not luck” (`kimchi.json:228`) is itself called an overstatement in the caveat (`:249`). State the model assumption and limitation together.

Path traversal using `..` is lexically blocked (`lib/projects.ts:246–252`; `lib/store.ts:36–42`). Two security gaps remain: local reads follow symlinks, so the resolved file is not confined by real path (`lib/store.ts:63–69,83–90`); and any repo path added to project links becomes eligible for `/source` or `/raw`, including sensitive files (`lib/projects.ts:232–243`; `source/[...path]/page.tsx:12–15`; `raw/[...path]/route.ts:17–23`). Markdown is injected without sanitization (`source/[...path]/page.tsx:36–38`), while linked HTML and SVG are served as active, same-origin content (`raw/[...path]/route.ts:5–15,24–26`). No current Kimchi link points to a sensitive file; the route policy permits one to be introduced.

### Must-fix, ranked

1. **Confine and neutralize served files.** In `apps/marketing-hq/lib/projects.ts:232–252`, `lib/store.ts:36–42`, `app/source/[...path]/page.tsx:36–38`, and `app/raw/[...path]/route.ts:5–26`, restrict source paths to approved public artifact directories and file types, verify local real paths after symlink resolution, sanitize Markdown, and serve HTML/SVG as downloads or sandboxed content.
2. **Make unrun steps consistently future-tense.** In `apps/marketing-hq/app/projects/[id]/steps/[n]/page.tsx:81–84` use “What I will do” for planned steps. Rewrite `marketing-hq/projects/kimchi.json:304–307,399–402` as criteria or future actions; change `loop:418–423` so each value reads grammatically after “Then I.”
3. **Repair source fidelity.** In `marketing-hq/projects/kimchi.json:37,44,72,100,228`, correct the eight-search count and qualify the product, budget, buyer and statistical claims against the cited research.
4. **Source every quantified claim at its point of display.** In `marketing-hq/projects/kimchi.json`, add attributable source text for numbers in `found`, `did`, summaries and caveats, or move them into sourced metrics; update `apps/marketing-hq/app/projects/[id]/steps/[n]/page.tsx` to display those sources.
5. **Distinguish empty data from read failures.** In `apps/marketing-hq/lib/store.ts:44–60` and `lib/projects.ts:210–223`, surface inaccessible local directories and GitHub repo/branch failures as errors. On Vercel without a usable `GITHUB_TOKEN`, the current local-root fallback can otherwise show a false empty Home.