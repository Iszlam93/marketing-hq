---
id: r-20261029-generic-one-pager-for-uk-and-eu-finance-platform--t1
requestId: r-20261029-generic-one-pager-for-uk-and-eu-finance-platform
taskId: t1
title: Positioning: Kimchi for UK and EU finance platform owners
agentId: strategy
skillIds: positioning
version: 1
status: in_review
notionPageId: 408265ea-4dd8-819d-b3d0-c91cf7fb4b44
notionUrl: https://app.notion.com/p/408265ea4dd8819db3d0c91cf7fb4b44
updatedAt: 2026-10-29T18:14:22Z
---
# Positioning: Kimchi for UK and EU financial-services platform owners

## Summary
The buyer is the platform owner at a UK or EU financial-services firm with up to 5,000 staff, at the moment the firm hires someone to roll AI coding agents out. Kimchi lets that owner put hard spending limits on coding agents before the work runs, and shows what the work cost by team, developer and model. Now matters because the firm has just committed to a rollout, and 11 of 15 such job ads make governance a core duty of the role.

This asset feeds t2, the tier 2 one-pager a seller sends after a first call. The brief's decision is answered in the message house: lead with the hard budget stop, then caps on automated jobs, then reporting that includes Claude Code. The call to action is a scoped technical session, not a self-serve trial.

## Target
- **Segment:** UK and EU financial-services firms with up to 5,000 staff. **Observed:** 4 LinkedIn searches (UK and EU, 90 days) gave 998 postings, 73 AI-rollout jobs, 21 at finance firms (29%), and 11 firms with 5,000 staff or fewer (`docs/kimchi/finance-size-check.md`).
- **Buyer:** the current platform owner (the person who will own the agents once the new hire arrives) (`docs/kimchi/HANDOFF.md`, `marketing-hq/products/kimchi.md`).
- **Trigger:** the firm is hiring an AI-rollout role. **Observed:** of 15 such job ads read in full, 11 name governance or policy and 5 name spend or usage limits, for example Raisin "usage limits" and Kraken "set caps by role and tier" (`docs/kimchi/value-tally.md`).
- **Not for:**
  - The individual developer. Kimchi's individual users who left cared about price and credits, and the big model vendors own personal productivity (`docs/kimchi/competitor-summary.md`).
  - Firms that want an "AI engineer" sold on outcomes. Devin owns that ground with bank proof (`docs/kimchi/competitor-summary.md`).
  - Firms whose first requirement is self-hosting outside a Cast AI-connected Kubernetes cluster. That is unconfirmed, so I would not lead there (`docs/kimchi/step1-product-truth.md`).
  - Firms above 5,000 staff, and non-finance tech firms. They sit outside this page's segment, not outside the market (`docs/kimchi/HANDOFF.md`).

## Alternatives the buyer has today
| Alternative | Why they use it | Where it falls short (source) |
|---|---|---|
| Do nothing: let teams use agents on personal or team accounts | No new vendor, no project | Spend surprises: "$4k in a week unnoticed", a bill doubling to $60k (`docs/kimchi/value-tally.md`, Reddit/HN group) |
| Each vendor's own limits (Claude Code, Codex consoles) | Already bought, already in use | Each tool limits only itself. Claude Code's docs send cross-provider attribution to gateways or OpenTelemetry (`docs/kimchi/competitor-summary.md`; `docs/kimchi/research-q3-why-kimchi.md`, citing code.claude.com/docs/en/costs) |
| Build it: an in-house or open-source AI gateway (LiteLLM, Portkey, a bank-controlled gateway) | Budgets and virtual keys on the model call; full ownership | Gateways govern the model call, not what the agent does; LiteLLM had a supply-chain incident in March 2026 (`docs/kimchi/EVIDENCE.md` section 6, citing futureagi.com; VirtusLab bank pattern in section 5) |
| Measurement tools (DX, Jellyfish) | Show adoption and spend to leadership | They report spend after it happens. The ad-library check found no rival saying budgets are enforced before the spend (`docs/kimchi/value-tally.md`, `docs/kimchi/ad-library-reviews.md`) |

## Value evidence
Tally from `docs/kimchi/value-tally.md` (6 source groups: buyers' job ads, Reddit/HN, reviews of adjacent tools, Kimchi Discord, analysts, competitor ads).

| Value | Evidence groups showing it | Rivals owning it |
|---|---|---|
| Control of spend (limits, no surprises) | **6 of 6**; job ads 5 of 15 | Everyone talks spend, but measured after the fact |
| Control of use (policy, access, audit) | 5 of 6; job ads **11 of 15** | Kong only |
| Proving value | 4 of 6; job ads 6 of 15 | Crowded: Jellyfish, DX, Tabnine, Cognition |
| Model choice / no lock-in | 4 of 6; job ads 5 of 15 | Kilo owns it |
| Data stays inside | 3 of 6; job ads 4 of 15 | None, but Kimchi's support is unconfirmed outside Cast AI clusters |
| Price | 2 of 6 | Kilo, Cursor |

**Chosen value:** control before the work runs: hard limits on what coding agents can spend, set by the platform owner, not reports afterwards.
**Why (Inferred, resting on the tally above):** control is the only value every source group shows, and buyers raise it most (11 of 15 ads name governance). Inside it, "before, not after" is the open space: rivals report spend afterwards, and Kimchi's budgets are a documented hard stop. I rejected "proving value" (crowded, and ROI claims are banned), "model choice" (Kilo's ground, and "open models" is on the avoid list), "data stays inside" (unconfirmed outside Cast AI clusters; also the rejected draft-v3 sovereignty bet) and price (individuals, and banned as a lead).

## Positioning statement
"For the platform owner at a UK or EU financial-services firm that is hiring someone to roll out AI coding agents, Kimchi is a governed AI coding platform that lets you set hard spending limits on coding agents before they run. Unlike measurement tools that report AI spend after it happens, or each vendor's own limits that cover only that vendor's tool, Kimchi stops a request at the limit, per org, team, developer and key, and it already reports on Claude Code."

Clause check against approved claims (`marketing-hq/products/kimchi.md`):
- "governed AI coding platform": Kimchi's own tagline, used as a category description, not a fact claim. OK.
- "hard spending limits … per org, team, developer and key … stops a request at the limit": approved claim 1 (hard stop stated in docs; Budgets screen seen; not tested with real spend). OK.
- "before they run": Inferred from claim 1. A budget stops further requests at the limit; it is not a per-run cap (that is on the avoid list). The one-pager must not imply a cap per run.
- "already reports on Claude Code": approved claim 5, telemetry only, worded exactly as required. OK.
- "measurement tools report after": Observed in rivals' ads (`docs/kimchi/value-tally.md`). OK as a description of the market, not a named attack.

## Message house
- **Headline (test this): not final. Islam to choose.** The product file has two lines and Islam has not confirmed which is current.

  | | Line | Words | Source | My read |
  |---|---|---|---|---|
  | **A (I recommend)** | "Autonomous agents. Limits set before they start." | 7 | Locked by Islam 27 Oct 2026 (`marketing-hq/products/kimchi.md`) | Names the open space ("before") directly. Risk: "autonomous" may worry a regulated reader without the proof beneath it. |
  | B | "Roll out coding agents across engineering. Stay in control." | 9 | `docs/kimchi/HANDOFF.md` (26 Oct) | Speaks the trigger ("roll out") in the buyer's words. Risk: "control" is generic; every rival can say it. |

  **Why A (Inferred):** the chosen value is "before, not after", and only A says it. B is the stronger fallback for this page if Islam wants the trigger in the headline, because a one-pager is read after a first call where the rollout is already the topic. If the A/B test in the campaign is still to run, the one-pager should carry whichever line wins, so t2 should not lock the headline either.
- **Alternatives (subheads for t2, not headlines):** "Hard spend limits on coding agents, set by the platform team." (9 words). "Cap agent spend per team, developer and key." (8 words).
- **Proof 1 (lead):** Hard budget limits per org, team, user and API key; a request fails with "budget exhausted" at the limit. Source: `docs/kimchi/step1-product-truth.md` (Budgets screen seen 24 Oct 2026; hard stop stated in Kimchi's docs; not tested with real spend). **Why first:** it answers the job ads directly (Kraken: "set caps by role and tier").
- **Proof 2:** Budgets can be set on service keys, so an automated job's key can be capped. Source: `docs/kimchi/step1-product-truth.md` (Kimchi docs). **Why second:** the agent can build a larger task milestone by milestone after one plan approval (`/ferment`, same source), and unattended work is where spend risk grows (`docs/kimchi/product-walkthrough.md`, observation 6).
- **Proof 3:** Reports show cost by model, provider, team and developer, and Claude Code and OpenCode sessions appear in the same reports through OpenTelemetry (reporting only). Source: `docs/kimchi/product-walkthrough.md`. **Why third:** the buyer keeps the tools teams already use and sees them in one place, which answers the "we already have Claude Code" objection.
- **Reserve proof (for a security reader, not the lead):** agents never see credentials; they are injected at the gateway. Source: `docs/kimchi/step1-product-truth.md` (Kimchi docs, not tested).
- **Call to action (after a first call):** "Book a technical session with your platform team: I set budgets for one pilot team with you and walk through the reports." **Why:** the free plan cannot complete a task without the user's own key, so the finance hook must be a guided pilot, not self-serve (`docs/kimchi/product-walkthrough.md`, observation 1). It matches the campaign's success measure of technical calls and a scoped pilot (`docs/kimchi/HANDOFF.md`). Session length: **[add: length and format the seller offers]**.
- **What I will not say:**
  - "open models" or "any model"; "better than Claude"; "cheaper" or "2.5x" as a lead; "AI engineer".
  - "covers" or "controls" Claude Code. Only "reports on Claude Code".
  - ROI, business value, or "see what every merged PR costs" as complete (PR cost reporting is turned on per developer).
  - A cap per session or per run, automatic budgets, or a budget reset period.
  - DORA coverage, SIEM audit of every prompt, "88% on open models", self-hosting outside a Cast AI cluster.
  - Named logos as Kimchi customers; that the free plan completes a task.
  - The rejected bets: one budget over many tools (draft v2) and Europe sovereignty (draft v3).
- **Honest limits line (for the page):** "Budgets cap spend per org, team, developer and key; they are not a cap on a single run. Claude Code usage is reported, not controlled." Source: `docs/kimchi/step1-product-truth.md`, `docs/kimchi/product-walkthrough.md`.

## Top objection and answer
**Objection:** "We already use Claude Code, and it has its own spend limits."
**Answer:** "Keep it. Its limits cover Claude Code only, and its own docs point to a gateway or OpenTelemetry for anything wider. Kimchi already reports on Claude Code sessions next to your other agents, and puts hard limits on the agents and keys that run through it."
Sources: `docs/kimchi/competitor-summary.md` ("limits set before spend: yes, for their own tool only"), `docs/kimchi/research-q3-why-kimchi.md` (citing code.claude.com/docs/en/costs), approved claims 1 and 5. The answer must not say Kimchi caps Claude Code.

**Second objection to prepare for (not on the page):** "Which models run our code?" Kimchi's default models are mostly Chinese-origin (Kimi, MiniMax, GLM), visible in the public repo and the enterprise page (`docs/kimchi/research-q4-chinese-models.md`). **Inferred:** a regulated security reviewer will find this quickly. **[add: an approved answer from Kimchi on model routing for regulated buyers, e.g. Claude or GPT on the firm's own key; until then the seller handles it live and the page stays silent on models.]**

## Confidence and the test that would change it
**Confidence: medium.**
- **High** on the segment and value: a counted funnel and a 6-group tally, with buyers' own words (`docs/kimchi/finance-size-check.md`, `docs/kimchi/value-tally.md`).
- **Weakest link 1:** the hard stop is stated in docs and the screen was seen, but it was not tested with real spend (`docs/kimchi/step1-product-truth.md`). Cheap check: run one task on a paid key against a tiny budget and confirm "budget exhausted". **[add: result of a real-spend budget test]**
- **Weakest link 2:** whether platform owners respond to "before they start" more than to the generic "stay in control". Cheap test: headline A vs B as ads to the same finance audience, designed with `ab-test-design`; the campaign design in `docs/kimchi/HANDOFF.md` already runs a control ad and a winner rule.
- **What would change my mind:** if B beats A clearly, the "before" angle is not what this buyer reacts to, and the page should lead with the rollout. If neither beats the benchmark floor, I would re-check the segment, not just the words. If the real-spend test shows no hard stop, Proof 1 comes off the page and the positioning needs rework.
- **Weakest link 3:** proof of Kimchi customers is weak; the logos may be Cast AI customers (`docs/kimchi/competitor-summary.md`, `docs/kimchi/step1-product-truth.md`). The page has no customer proof to cite.

## Open items
- **[add: Islam to confirm which headline is current, A ("Autonomous agents. Limits set before they start.", locked 27 Oct) or B ("Roll out coding agents across engineering. Stay in control.", HANDOFF 26 Oct). I recommend A.]**
- **[add: result of a real-spend test of the "budget exhausted" hard stop]**
- **[add: length and format of the technical session the seller offers]**
- **[add: Kimchi's approved answer on model origin and routing for regulated buyers]**
- **[add: a named Kimchi customer or quote that can be cited; none is approved today]**
- Prices are not used on this page. If t2 adds them, re-check https://kimchi.dev/pricing first (last recorded 23 Oct 2026).

## Sources
- `marketing-hq/requests/r-20261029-generic-one-pager-for-uk-and-eu-finance-platform.json` (brief, task t1), read 29 Oct 2026
- `marketing-hq/products/kimchi.md` (approved claims, claims to avoid), updated 29 Oct 2026
- `docs/kimchi/HANDOFF.md` (bet, headline B, campaign design, impact measure), 26 Oct 2026
- `docs/kimchi/value-tally.md` (value tally, job-ad quotes, after-the-fact rival ads), 27 Oct 2026
- `docs/kimchi/finance-size-check.md` (90-day job-ad funnel)
- `docs/kimchi/competitor-summary.md` (alternatives, where Kimchi can't win, avoid list), 27 Oct 2026
- `docs/kimchi/step1-product-truth.md` (product truth with T/D/C/X tags), 26 Oct 2026
- `docs/kimchi/product-walkthrough.md` (first-hand walkthrough), 24 Oct 2026
- `docs/kimchi/EVIDENCE.md` sections 5 and 6 (bank gateway pattern, AI gateways), gathered 23 Oct 2026; cites https://virtuslab.com/blog/ai/how-banks-govern-autonomous-ai-software-development and https://futureagi.com/blog/portkey-alternatives-2026
- `docs/kimchi/research-q3-why-kimchi.md` (Claude Code limits and gateways), citing https://code.claude.com/docs/en/costs and https://code.claude.com/docs/en/llm-gateway
- `docs/kimchi/research-q4-chinese-models.md` (default model origin), 26 Oct 2026
- `docs/kimchi/ad-library-reviews.md` (no rival claims enforcement before spend), via `docs/kimchi/value-tally.md`
- `.claude/skills/positioning/SKILL.md` (method and template)
