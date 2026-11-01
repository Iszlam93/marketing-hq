# Marketing HQ slice 1: team log

## Team

| Role | Model | Why |
|---|---|---|
| CTO | Claude Opus 5.5 | Owns the architecture, the data contract, integration and final QA, and holds the full context of the Kimchi work |
| Product Owner | Codex, gpt-6-sol | Writes the PRD and runs the acceptance review. An independent vendor challenges the plan rather than echoing it |
| Content author | Claude Sonnet | Turns the Kimchi evidence files into the app's data and the "why a PMM does this" lessons; strong at long reading and summarising |
| Frontend engineer | Claude Opus | Builds the Next.js app; UI quality and code judgement matter most |
| Code reviewer | Codex, gpt-6-sol | Reviews the code from a second vendor |

## Timeline

1. **CTO:** wrote [DATA-CONTRACT.md](DATA-CONTRACT.md), which defines the data source, the 7-step engine and the JSON shape.
   - Data decision: the app reads repo JSON, as Brand HQ does. Notion is a mirror, so no API key is needed from the user.
2. **Running in parallel:**
   - Product Owner (Codex): writing the slice-1 PRD.
   - Content author (Sonnet): writing `marketing-hq/projects/kimchi.json`.
3. **Product Owner (Codex, high reasoning)** delivered [PRD-slice1.md](PRD-slice1.md).
   - 3 screens: Home, a step walkthrough with deep links, and the decision loop.
   - 11 user stories with Given/When/Then, non-functional requirements, non-goals, a roadmap and a definition of done.
   - Notable call: steps 5–7 must never read as results that happened.
   - Notable call: no separate glossary screen; terms sit next to the step that uses them.
4. **Frontend engineer (Claude Opus)** started on the PRD, the contract and Brand HQ's patterns. Port 3200; server-rendered.
5. **Content author (Sonnet)** delivered `marketing-hq/projects/kimchi.json`.
   - 7 steps, 6 loop outcomes, and a full "why a PMM does this" layer.
   - It flagged 7 facts it was unsure about.
6. **CTO review** of those flags:
   - Fixed the source for the Kraken claim. It comes from Kraken's own job ad ("Tiered spend controls are live", tier1-accounts.md), which the author had missed.
   - Aligned the 0.55% wording with the submission: it is both the UK median and the top of the finance range.
   - Tier 3 is A4, not A1.
   - "day 7" corrected to "week 7".
7. **CTO built the Notion mirror** (Notion MCP), as a private page "Marketing HQ": https://app.notion.com/p/407265ea4dd8819e9d65fb5b3cec46e5
   - **Projects** database (`collection://ac8cb6eb-ff01-4ca6-a25e-f69d418e79b0`) with the Kimchi row.
   - **Steps** database (`collection://0119d4ed-3afb-4efe-8669-a47b899da729`) with 7 rows linked to the project. Each row's page body holds did / found / metrics / output / why-a-PMM, and steps 5–7 are labelled "What I will do".
8. **Frontend engineer (Opus)** delivered `apps/marketing-hq`.
   - 3 screens plus a 404, all server-rendered, with runtime validation of the contract.
   - Read-only source routes, allow-listed to linked files only.
   - Typecheck and build pass. Routes and edge states were checked with curl.
9. **CTO visual QA** (headless Edge screenshots of Home, step 1, step 6, the loop and a narrow width):
   - The layout, the rail, the "Planned, not yet run" banner and the learning panel are all correct.
   - The narrow-width clipping is a headless-renderer limit (it renders at a 500px minimum). The CSS uses minmax grids with 640/900px breakpoints, so this is not an app bug.
   - CTO fix: planned steps now say "What I will do" instead of "What I did".
10. **Product Owner (Codex)** is running the acceptance and code review.
11. **Product Owner (Codex) acceptance: REJECT**, see [ACCEPTANCE-codex.md](ACCEPTANCE-codex.md).
    - 8 of 11 stories pass.
    - It failed: "trace a number", "separate plan from results", "handle missing data".
    - Must-fix list:
      - The source routes could serve active content (HTML/SVG, unsanitised markdown, symlinks).
      - Past-tense wording on steps that haven't run.
      - "4 searches" should be 8 (4 terms × 2 regions).
      - Over-strong product, budget, buyer and statistics claims.
      - Read errors shown as "No projects yet".
    - CTO agreed with all 5 and split the work:
      - code fixes → frontend engineer (Opus)
      - data fixes → content author (Sonnet)
      - both resumed with their full context, running in parallel
12. **Fix round done, in parallel:**
    - **Content author (Sonnet):** 8 data fixes. The CTO then corrected 2 of its citations: the $500 and $2.1k figures come from the submission's budget table, not PANEL-RESCORE or HANDOFF.
    - **Frontend engineer (Opus):** a single allow-list check (`servablePath`) on both source routes, realpath confinement (tested with an NTFS junction), markdown sanitising (script, onerror and javascript: are neutralised), and only PDF and images on /raw with nosniff. Read errors now show as errors, not "No projects yet". The loop label is now "Then". Every probe for a forbidden path, including `.env`, traversal, encoded traversal and HTML, returns 404.
13. **Product Owner (Codex): second acceptance review** started.
14. **Product Owner (Codex): second acceptance review: still REJECT**, see [ACCEPTANCE-2-codex.md](ACCEPTANCE-2-codex.md).
    - 1 item closed, 4 partial.
    - It found one new real risk: GitHub's Contents API follows symlinks.
15. **CTO closed the last 4 items directly** (too small to justify another delegation round):
    - GitHub mode now confirms the entry type in the parent folder listing, so symlinks are refused.
    - "Then I" is restored, as the PRD specifies, with each action rewritten to read after it.
    - Sources were added next to every number in the "found" bullets.
    - A missing projects folder is now an error; an empty folder still shows "No projects yet".
    - Typecheck and build pass. Routes re-verified: /, steps 1 and 5, loop → 200; unknown project, `.env` → 404.
    - Not yet done: a third Codex review of these last fixes.
16. **Ran the app** locally on port 3200.

## Who did what, by the numbers

| Member | Model | Delivered |
|---|---|---|
| CTO | Claude Opus 5.5 | Data contract, the data decision, review of content facts (4 corrections), Notion mirror (3 databases/pages, 8 rows), visual QA, the final fixes, integration |
| Product Owner | Codex gpt-6-sol | PRD (3 screens, 11 stories, definition of done), 2 acceptance reviews (it rejected twice, which caught a security gap and 3 accuracy issues) |
| Content author | Claude Sonnet | kimchi.json (7 steps, 6 outcomes, the learning layer), then 8 accuracy fixes |
| Frontend engineer | Claude Opus | apps/marketing-hq: 3 screens, contract validation, secure read-only source routes, error states; then the security hardening |
