---
id: r-20261029-generic-one-pager-for-uk-and-eu-finance-platform--t2
requestId: r-20261029-generic-one-pager-for-uk-and-eu-finance-platform
taskId: t2
title: One-pager: generic page for UK and EU finance platform owners
agentId: content
skillIds: custom-one-pager
version: 1
status: in_review
notionPageId: 408265ea-4dd8-81f4-910d-fc836958369a
notionUrl: https://app.notion.com/p/408265ea4dd881f4910dfc836958369a
updatedAt: 2026-10-29T18:17:05Z
---
# One-pager: generic, UK and EU financial-services platform owners

## Type
Generic (tier 2). Reader: the platform owner at a UK or EU financial-services firm (up to 5,000 staff) that is hiring someone to roll out AI coding agents. A seller sends it after a first call.

## Page copy
**Headline (A, shown):** Autonomous agents. Limits set before they start.
*Alternative B, if Islam picks it: "Roll out coding agents across engineering. Stay in control."*

**Why this page for you:** Your firm is hiring someone to roll out AI coding agents. In 11 of 15 such job ads I read in full, governance or policy is part of the role. 5 name spend or usage limits. These counts come from public job ads, not from your firm.

**What I do about it:**
- Set hard budget limits per org, team, user and API key. At the limit, a request fails with "budget exhausted".
- Cap an automated job by putting a budget on its service key.
- Report cost by model, provider, team and developer. Claude Code and OpenCode sessions appear in the same reports, so you keep the tools your teams already use.

**In your week:**
- Before: teams use agents on their own accounts. You learn what it cost when the bill arrives.
- After: you set a budget for one pilot team before they start. Spend stops at that limit. The reports show who spent what, on which model.

**What it does not do:** Budgets cap spend per org, team, developer and key. They are not a cap on a single run. Claude Code usage is reported, not controlled. The hard stop is stated in Kimchi's docs and I have seen the Budgets screen, but I have not tested it with real spend.

**Next step:** Book a technical session with your platform team. I set budgets for one pilot team with you and walk through the reports. **[add: length and format of the session]**

## Layout notes
One A4 page, in this order: headline (largest type, B not shown); one-line "why this page" with the two counts in bold; three proof bullets with the first words of each in bold (limit, cap, report); two-line before/after in a two-column strip; the limits line in a lighter grey box so it reads as honest, not hidden; the next step as the only button-style line at the foot. No chart. No logos, no prices, no customer names. Small footer: "Counts from public UK and EU finance job ads, 90 days to Oct 2026."

## Claim map
| Sentence | Source |
|---|---|
| "Autonomous agents. Limits set before they start." | Headline A, locked by Islam 27 Oct 2026 (`marketing-hq/products/kimchi.md`); open item: confirm still current |
| Alternative B headline | `docs/kimchi/HANDOFF.md` (26 Oct 2026), via t1 message house |
| Firm is hiring someone to roll out AI coding agents | Segment trigger, t1 Target; `marketing-hq/products/kimchi.md` Audience |
| 11 of 15 job ads name governance or policy; 5 name spend or usage limits | `docs/kimchi/value-tally.md`, via t1 and product file Audience |
| Counts are from public job ads, not the reader's firm | Skill method step 2; t1 Target |
| Hard budget limits per org, team, user and API key; "budget exhausted" at the limit | Approved claim 1 (`docs/kimchi/step1-product-truth.md`) |
| Budget on a service key caps an automated job | Approved claim 2 (`docs/kimchi/step1-product-truth.md`) |
| Cost by model, provider, team and developer | Approved claim 3 (`docs/kimchi/product-walkthrough.md`) |
| Claude Code and OpenCode sessions appear in the same reports | Approved claim 5 (OpenTelemetry, reporting only) |
| "You keep the tools your teams already use" | Inferred from claim 5; t1 Proof 3 |
| Before: teams on their own accounts, bill arrives later | Alternatives table, t1 (`docs/kimchi/value-tally.md` Reddit/HN group). Illustrative, not a measured figure |
| After: pilot-team budget set before they start; spend stops at the limit | Inferred from approved claim 1; no cap per run implied |
| Reports show who spent what, on which model | Approved claim 3 |
| Budgets are not a cap on a single run; Claude Code reported, not controlled | t1 honest limits line; Claims to avoid |
| Hard stop stated in docs, Budgets screen seen, not tested with real spend | Approved claim 1 caveat |
| Technical session: I set budgets for one pilot team and walk through the reports | t1 call to action (`docs/kimchi/product-walkthrough.md` observation 1: free plan cannot finish a task, so a guided pilot) |

## Open items
- **[add: Islam to confirm which headline is current, A or B. Page shows A.]**
- **[add: length and format of the technical session the seller offers]**
- **[add: result of a real-spend test of the "budget exhausted" hard stop]** If the test fails, the first proof and the "After" line come off the page.
- **[add: a cited customer or quote]** None is approved, so the page has no customer proof. The page is silent on which models run the code; the seller answers that live (t1 open item).
- **[add: link to the job ads behind the 11 of 15 and 5 of 15 counts, if the seller wants them to hand]**
- No prices on this page. If added, re-check https://kimchi.dev/pricing first.
- Word count: page copy is about 300 words. Footer line not counted.

## Sources
- `marketing-hq/assets/r-20261029-generic-one-pager-for-uk-and-eu-finance-platform--t1.md` (message house, proof order, call to action, "What I will not say", honest limits line), version 1, in review
- `marketing-hq/products/kimchi.md` (approved claims 1, 2, 3, 5; claims to avoid; headline A), updated 29 Oct 2026
- `marketing-hq/requests/r-20261029-generic-one-pager-for-uk-and-eu-finance-platform.json` (brief, task t2), read 29 Oct 2026
- `docs/kimchi/value-tally.md` (job-ad counts 11 of 15 and 5 of 15; buyer spend-surprise quotes), via t1
- `docs/kimchi/step1-product-truth.md` (budgets, service keys, hard stop caveat), via the product file
- `docs/kimchi/product-walkthrough.md` (reports, Claude Code telemetry, free-plan limit), via the product file
- `docs/kimchi/HANDOFF.md` (headline B), via t1
- `.claude/skills/custom-one-pager/SKILL.md` (method, template, quality checks)
