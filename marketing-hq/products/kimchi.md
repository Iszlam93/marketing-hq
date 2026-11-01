---
id: kimchi
name: Kimchi
updated: 2026-10-29
---

## Description
Kimchi is an AI coding platform from Cast AI. Developers hand coding tasks to AI agents that work on their own. The company sets hard spending limits, chooses which models run and where, and sees what the work cost. It is sold as "the governed AI coding platform" (Kimchi's own tagline). The coding agent is a terminal tool (open source, Apache-2.0). The console has Governance (budgets) and Reporting sections. Plans: Open Source (free, bring your own model key), Coder $20/month, Teams $35/seat, Enterprise (custom), Code Review add-on $15/user/month.

Sources: `docs/kimchi/step1-product-truth.md`, `docs/kimchi/EVIDENCE.md` (section 1), https://kimchi.dev/pricing (as recorded in EVIDENCE.md, 23 Oct 2026).

Note: Kimchi is the sample product for Marketing HQ. This file is subject data only. Do not use Kimchi branding on any published page.

## Audience
- **Segment (the bet):** UK and EU financial-services firms with up to 5,000 staff. Source: `docs/kimchi/HANDOFF.md`.
- **Buyer:** the current platform owner, in a firm that is hiring an AI-rollout role (the trigger). Source: `docs/kimchi/HANDOFF.md`.
- **Evidence for the segment:** four LinkedIn searches, UK and EU, 90 days, gave 998 postings, 73 AI-rollout jobs, 21 at finance firms (29%), and 11 firms with 5,000 staff or fewer. Source: `docs/kimchi/finance-size-check.md`.
- **What the buyer is told to do:** of 15 job ads read in full, 11 name governance or policy and 5 name spend or usage limits. Source: `docs/kimchi/value-tally.md`.
- **Not the target:** the individual developer. Individual users who left cared about price and credits. Source: `docs/kimchi/competitor-summary.md`, `docs/kimchi/value-tally.md`.

## Approved claims
- Hard budget limits can be set per org, team, user and API key, and a request fails with "budget exhausted" at the limit — source: `docs/kimchi/step1-product-truth.md` (Budgets screen seen in the product on 24 Oct 2026; hard stop stated in Kimchi's docs; not tested with real spend).
- Budgets can be set on service keys, so an automated job's key can be capped — source: `docs/kimchi/step1-product-truth.md` (Kimchi docs).
- Reports show cost by model, provider, team and developer — source: `docs/kimchi/product-walkthrough.md` (seen in the product, empty-state reports).
- Reports show the cost of merged pull requests "from billed spend", plus PRs and commits attributed to AI agents — source: `docs/kimchi/product-walkthrough.md`. This measures activity and cost, not business outcomes.
- Claude Code and OpenCode sessions can appear in the same reports through OpenTelemetry. This is reporting (telemetry) only, not control — source: `docs/kimchi/product-walkthrough.md`, `docs/kimchi/step1-product-truth.md`.
- The agent can build a larger task milestone by milestone after a plan is approved once (`/ferment`) — source: `docs/kimchi/step1-product-truth.md` (Kimchi docs).
- The coding agent installs from the command line and imports an existing Claude Code setup — source: `docs/kimchi/product-walkthrough.md` (observed, CLI v1.21.0, 24 Oct 2026).
- Agents never see credentials; they are injected at the gateway — source: `docs/kimchi/step1-product-truth.md` (Kimchi docs, not tested).
- Prices as listed: Open Source free, Coder $20/month, Teams $35/seat, Code Review $15/user/month — source: https://kimchi.dev/pricing as recorded in `docs/kimchi/EVIDENCE.md` (23 Oct 2026). Re-check before use.
- Positioning line, locked by Islam on 27 Oct 2026: "Autonomous agents. Limits set before they start." — source: Islam's decision, recorded in the memory notes and `docs/kimchi/HANDOFF.md`. Value evidence: `docs/kimchi/value-tally.md`. **[add: Islam to confirm this is still current; HANDOFF (26 Oct) still shows the earlier line "Roll out coding agents across engineering. Stay in control."]**
- Kimchi's own words (vendor claims, to be quoted as theirs and not as fact): "The governed AI coding platform"; "2.5x cheaper" (Cast AI's own shadow test, unnamed baseline) — source: https://kimchi.dev/ and https://itbrief.co.uk/story/cast-ai-launches-kimchi-coding-with-production-support, as recorded in `docs/kimchi/EVIDENCE.md`.

## Claims to avoid
- Do not use the phrase "open models", or "any model" as a headline. Buyers read "open" negatively, and the model-choice ground belongs to a rival — source: `docs/kimchi/competitor-summary.md`; memory note of 27 Oct 2026.
- Do not present the Claude Code integration as more than telemetry. It reports; it does not control or "cover" Claude Code. Say "reports on Claude Code" — source: `docs/kimchi/HANDOFF.md`, `docs/kimchi/product-walkthrough.md`.
- Do not claim ROI or business value. Cost per merged PR is an activity and cost measure — source: `docs/kimchi/product-walkthrough.md`, `docs/kimchi/AUDIT-codex.md`.
- Do not say "see what every merged PR costs" as complete. PR cost reporting is turned on per developer, and central enforcement is unconfirmed — source: `docs/kimchi/product-walkthrough.md`.
- Do not say Kimchi is better than Claude, or compare model quality. Do not lead with price or "cheaper", and do not call it an "AI engineer" — source: `docs/kimchi/competitor-summary.md`.
- Do not claim a cap per session or per run, automatic budgets from usage, or a budget reset period. These are not in the docs — source: `docs/kimchi/step1-product-truth.md`.
- Do not claim self-hosting works outside a Cast AI-connected Kubernetes cluster; this is unconfirmed — source: `docs/kimchi/step1-product-truth.md`.
- Do not claim DORA coverage, SIEM audit of every prompt, or "88% of requests on open models" as fact. These are vendor claims with no method or product evidence — source: `docs/kimchi/step1-product-truth.md`, `docs/kimchi/EVIDENCE.md`.
- Do not claim the free plan lets a user complete a task. It needs the user's own API key or a paid plan — source: `docs/kimchi/product-walkthrough.md`.
- Do not state that named logos (for example Akamai) are Kimchi customers. They may be Cast AI customers — source: `docs/kimchi/step1-product-truth.md`.
- Do not use the draft-v2 bet (one budget over many tools) or the draft-v3 bet (Europe sovereignty). Islam rejected both — source: memory note of 26 Oct 2026.
- Never say "we" for Islam. He writes "I".

## Evidence links
- Product truth: `docs/kimchi/step1-product-truth.md`
- First-hand walkthrough (24 Oct 2026): `docs/kimchi/product-walkthrough.md`
- Evidence pack (public sources, 23 Oct 2026): `docs/kimchi/EVIDENCE.md`
- Job-ad funnel and company list: `docs/kimchi/finance-size-check.md`
- Account scoring: `docs/kimchi/tier1-accounts.md`
- Value tally across sources: `docs/kimchi/value-tally.md`
- Competitor messaging: `docs/kimchi/competitor-messaging.md`, `docs/kimchi/competitor-summary.md`, `docs/kimchi/ad-library-reviews.md`
- Test benchmarks and budget example: `docs/kimchi/test-benchmarks.md`
- News fact-check: `docs/kimchi/news-factcheck.md`
- Assignment handoff: `docs/kimchi/HANDOFF.md`
- Public site: https://kimchi.dev/ ; pricing: https://kimchi.dev/pricing ; enterprise: https://kimchi.dev/enterprise ; docs: https://docs.kimchi.dev
