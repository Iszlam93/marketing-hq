---
id: r-20261029-summer-campain--t3
requestId: r-20261029-summer-campain
taskId: t3
title: Positioning: Kimchi for LATAM mid-size fintech AI platform owners
agentId: strategy
skillIds: positioning
version: 1
status: draft
notionPageId:
notionUrl:
updatedAt: 2026-11-01T14:26:58Z
---
# Positioning: Kimchi for mid-size fintech and payments firms in Mexico and Brazil

**Read this first.** This is an exploratory positioning for a region outside the locked UK/EU bet (`marketing-hq/requests/r-20261029-summer-campain.json`, plan rationale). It rests on one LATAM evidence group: 10 job ads, read in `r-20261029-summer-campain--t1`. That asset is still in review. Its own confidence is low to medium. Every LATAM-specific choice below is as strong as those 10 ads and no stronger. Kimchi is the subject product. It is not the voice: no published page carries Kimchi branding (`marketing-hq/products/kimchi.md`).

## Summary
The buyer is the person who owns the AI or ML platform at a Mexican or Brazilian fintech or payments firm with up to 5,000 staff. The firm is hiring platform or MLOps engineers now. The message is that the platform team can set and see what AI coding agents cost per team, developer and key, with a hard stop at the limit, before the spend happens. Why now (Inferred): these firms are building their AI platforms right now, and their own ads ask that platform to track cost and stay compliant (cost in 5 of 10 ads, security or compliance in 6 of 10, `r-20261029-summer-campain--t1`). But I have not shown that these buyers are rolling out coding agents. That is the weakest link.

## Target
- **Segment:** fintech and payments firms based in Mexico and Brazil with up to 5,000 staff. **Observed:** 180 LinkedIn cards in three countries gave 11 at LATAM finance employers. 7 fit the role. 6 came from 3 firms with a verified size up to 5,000: dLocal, Konfío, EBANX. All 3 are in Mexico or Brazil. Colombia gave 1 finance card (`r-20261029-summer-campain--t1`, Funnel and Tiered accounts).
- **Buyer:** the owner of the AI or ML platform. In the ads this is a staff-level or specialist platform role, for example dLocal's "AI/ML Staff Engineer" and EBANX's "Machine Learning Engineering Specialist" (`r-20261029-summer-campain--t1`). **Observed:** the ads describe the work, not the manager. The buyer's exact title is **[add: buyer title at dLocal and Konfío; Research supplies it from company pages or a deeper search]**.
- **Trigger:** the firm is hiring an AI or ML platform engineer, so it is building its AI platform under financial regulation and cost pressure now (`r-20261029-summer-campain--t1`, Trigger). **Hypothesis:** this platform also has to run AI coding agents. Only 1 of 10 ads names a coding agent tool (Clara: "Claude Code/Codex"), and that is a business role (`r-20261029-summer-campain--t1`). In the UK/EU bet, the trigger was a role whose job is to roll coding agents out (`marketing-hq/products/kimchi.md`). That has not been seen in LATAM.
- **Not for:**
  - **Large banks such as Itaú, Banorte and Santander México.** They are likely above 5,000 staff. Their size is not yet verified. Itaú is kept only as a wording benchmark and a test control (`r-20261029-summer-campain--t1`, Exclusions).
  - **Outsourcing and staffing firms** (BairesDev, FullStack, AgileEngine). They filled 77 of 180 cards (42.8%), but they supply engineers. They are not buyers (`r-20261029-summer-campain--t1`).
  - **Finance software vendors and global firms hiring remotely in LATAM** (FactSet, Solera, Kraken). They are not LATAM-based finance buyers (`r-20261029-summer-campain--t1`).
  - **Colombia, Chile, Argentina, Peru, Uruguay, for now.** Colombia gave one finance card. The others were not searched (`r-20261029-summer-campain--t1`, Open items). This is a gap in the evidence, not a judgement on those markets.
  - **The individual developer.** Individual users who left cared about price and credits (`marketing-hq/products/kimchi.md`; `docs/kimchi/competitor-summary.md`).
  - **Firms whose first need is self-hosting outside a Cast AI-connected Kubernetes cluster.** It is unconfirmed (`marketing-hq/products/kimchi.md`, Claims to avoid).
  - **Firms that want an "AI engineer" sold on outcomes.** Devin owns that ground, and its customer pages list LATAM finance names: Itaú, Nubank and EBANX (`docs/kimchi/competitor-summary.md`; `docs/kimchi/icp-lens2-adjacent-customers.md`, citing https://devin.ai/customers/ebanx). EBANX is a tier 1 account in t1. See Open items.

## Alternatives the buyer has today
| Alternative | Why they use it | Where it falls short (source) |
|---|---|---|
| **Do nothing:** let teams use agents with no cap | No project, no new vendor. One LATAM ad points this way: "maximizing an unlimited token budget" (Clara, `r-20261029-summer-campain--t1`) | Spend surprises in the UK/EU evidence: "$4k in a week unnoticed", a bill doubling to $60k (`docs/kimchi/value-tally.md`). **Not observed in LATAM.** **[add: LATAM voice-of-customer on AI spend surprises; Research supplies it]** |
| **Build it:** the platform team builds its own quotas, cost tracking and access control | **Observed:** this is what the LATAM ads hire for. Konfío: "cuotas y costo por interacción". dLocal: "Set and maintain technical standards for model/data access control", plus FinOps (`r-20261029-summer-campain--t1`) | **Inferred:** in-house gateways govern the model call, not what a coding agent does (`docs/kimchi/EVIDENCE.md` section 6, as summarised in `r-20261029-generic-one-pager-for-uk-and-eu-finance-platform--t1`). Building it also takes the engineers the firm is now trying to hire. This is a Hypothesis for LATAM. |
| **Each coding tool's own limits** (Claude Code, Codex, Copilot consoles) | Already bought and in use | Each tool limits only itself (`docs/kimchi/competitor-summary.md`, "Limits set before spend: yes, for their own tool only") |
| **An "AI engineer" vendor** (Devin) | Sold to banks on outcomes, with LATAM finance proof (Itaú, Nubank, EBANX) | It sets usage limits on Devin only (`docs/kimchi/competitor-summary.md`). It is sold on outcomes, which Kimchi must not claim (`marketing-hq/products/kimchi.md`, no ROI) |
| **Measurement tools** (DX, Jellyfish) | Show AI spend to leadership | They report spend after it happens (`docs/kimchi/value-tally.md`). Their presence in LATAM is **[add: not checked]** |

## Value evidence
**Observed.** The LATAM evidence is one group: 10 job ads (`r-20261029-summer-campain--t1`, What the ads say). The other groups in the UK/EU tally (Reddit/HN, reviews, Discord, analysts, rival ads) were not gathered for LATAM. Rivals are taken from `docs/kimchi/competitor-summary.md`, `docs/kimchi/value-tally.md` and `docs/kimchi/ad-library-reviews.md`. None of them is LATAM-specific except Devin's customer pages.

| Value | LATAM job ads (of 10) | UK/EU tally, for reference (`docs/kimchi/value-tally.md`) | Rivals owning it | Approved claim to back it |
|---|---|---|---|---|
| Names a model or vendor stack | 7 | Model choice: 4 of 6 groups; 5 of 15 ads | Kilo owns "any model" | None usable. "open models" / "any model" is on the avoid list |
| Security, privacy or compliance as a duty | **6** | Data stays inside: 3 of 6; 4 of 15 ads | Devin (Itaú "security backlog" ad); GitHub's finance page ("secure", Itaú logo) (`docs/kimchi/ad-library-reviews.md`, `docs/kimchi/competitor-messaging.md`) | One, not tested: agents never see credentials |
| Train, enable or elevate others | 6 | Not counted | Claude Code, Codex, Copilot own personal productivity (`docs/kimchi/competitor-summary.md`) | None specific |
| Cost to track or cut | **5** | Control of spend: **6 of 6**; 5 of 15 ads | Everyone talks spend, but **after the fact** (Cognition: "What happens to AI costs when usage doubles?") | Hard budget limits per org, team, user, key; cost reports by model, provider, team, developer |
| Governance, guardrails or audit | 3 | Control of use: 5 of 6; **11 of 15** ads | Kong only | Budgets; credential injection (not tested) |
| A hard limit on spend | **0** (quotas: 1, Konfío) | Part of control of spend | Nobody says "enforced before the spend" | Hard budget limits |
| Data location | 0 | 3 of 6 | None | Not usable (self-hosting unconfirmed; draft-v3 sovereignty bet rejected) |

**Chosen value:** cost the platform team sets and sees up front. That means budgets per team, developer and key, a hard stop at the limit, and one report of cost by model, team and developer.

**Why (Inferred, resting on the table):**
- Cost is the most frequent value I can back with approved claims (5 of 10). It is also the only value that every UK/EU group shows (6 of 6).
- The LATAM ads say "track" and "optimise", and Konfío asks for "quotas" (`r-20261029-summer-campain--t1`). So the open space is the same as in UK/EU, in a local form: quotas set before, not cost reports after. Rivals report afterwards.
- **Rejected: security and compliance (6 of 10).** Buyers raise it more. But in LATAM finance, Devin and GitHub already own it with Itaú proof. I have only one approved security claim, and it is untested. I have none on CNBV, SOC 2 or PCI. Leading there would stretch the claims.
- **Rejected: model stack (7 of 10).** Kilo owns it, and "open models" / "any model" is on the avoid list.
- **Rejected: enablement (6 of 10).** It is the big tools' home ground (personal productivity), and the individual developer is excluded.
- **The honest weak point:** a hard limit appears in 0 of 10 LATAM ads. In this region, "limits set before" is my reading of "quotas" and "cost per interaction". It is not the buyers' own phrase. That is why the headline test below puts the locked line against a cost-first line.

## Positioning statement
"For the owner of the AI platform at a Mexican or Brazilian fintech or payments firm with up to 5,000 staff, which is hiring engineers to run AI under financial regulation and cost pressure, Kimchi is a governed AI coding platform that lets the platform team set what coding agents may spend, per team, developer and key, before the work runs. Unlike building quotas in-house, or relying on each coding tool's own limits, which cover only that tool, Kimchi stops a request at the limit and shows cost by model, team and developer in one report. That report already includes Claude Code sessions."

Clause check against approved claims (`marketing-hq/products/kimchi.md`):
- "Mexican or Brazilian fintech … hiring engineers to run AI under financial regulation and cost pressure": segment and trigger from `r-20261029-summer-campain--t1`. That they run *coding agents* is a **Hypothesis** (1 of 10 ads).
- "governed AI coding platform": Kimchi's own tagline, used as the category. It is a vendor phrase, not a fact claim.
- "set what coding agents may spend, per team, developer and key … stops a request at the limit": approved claim 1 (hard stop stated in the docs; Budgets screen seen; not tested with real spend). "Developer" stands for "user".
- "before the work runs": **Inferred** from claim 1. A budget stops further requests at the limit. It is not a cap per run or session. Those are on the avoid list, so no copy may imply a per-run cap.
- "cost by model, team and developer in one report": approved claim 3 (cost by model, provider, team and developer; seen in empty-state reports).
- "already includes Claude Code sessions": approved claim 5. This is reporting through OpenTelemetry only. It is never "controls" or "covers" Claude Code.
- "Unlike building quotas in-house": **Observed** that the ads hire for this (Konfío, dLocal). That Kimchi is the better choice than building is a **Hypothesis**. The copy must describe it, not claim it is better.
- "each coding tool's own limits, which cover only that tool": `docs/kimchi/competitor-summary.md`.

## Message house
- **Headline (test this): A vs C.** Both are under 13 words. Neither uses hype words.

  | | Line | Words | Source | My read |
  |---|---|---|---|---|
  | **A (control)** | "Autonomous agents. Limits set before they start." | 7 | Locked by Islam on 27 Oct 2026, flagged for him to confirm (`marketing-hq/products/kimchi.md`) | Names the open space ("before"). Risk: LATAM ads never say "limit" (0 of 10). "Autonomous" may worry a compliance reader. |
  | **C (challenger)** | "Set and see what AI coding agents cost, per team." | 10 | Built from approved claims 1 and 3; words from the LATAM ads ("cost", "quotas", `r-20261029-summer-campain--t1`) | Uses the buyers' own frame (cost, tracked). Risk: "see cost" is closer to the after-the-fact ground that rivals hold. |
  | B (not tested here) | "Roll out coding agents across engineering. Stay in control." | 9 | `docs/kimchi/HANDOFF.md` (26 Oct) | Rejected for LATAM. It names a rollout trigger that I have not seen in LATAM ads (1 of 10 names a coding tool). |

  **Why test A vs C (Inferred):** both carry the chosen value. The one open question is whether this buyer responds to "limits before" (the locked line) or to "cost, per team" (the LATAM ads' words). That is a single variable. If Islam does not confirm A as current, C runs against whichever line he confirms. The test design belongs to t4 (`ab-test-design`).
- **Language:** the LATAM ads are in Portuguese, Spanish and English (`r-20261029-summer-campain--t1`). **[add: Islam to decide the ad language per country; a native speaker translates and checks A and C. Translation adds a variable, so each country runs one language only.]**
- **Proof 1 (lead):** hard budget limits can be set per org, team, user and API key, and a request fails with "budget exhausted" at the limit. Source: `docs/kimchi/step1-product-truth.md`, via `marketing-hq/products/kimchi.md` (screen seen 24 Oct 2026; hard stop in the docs; not tested with real spend). **Why first:** it is the "quota" Konfío's ad asks the platform to build.
- **Proof 2:** reports show cost by model, provider, team and developer. Claude Code and OpenCode sessions can appear in the same reports through OpenTelemetry, as reporting only. Source: `docs/kimchi/product-walkthrough.md`, via `marketing-hq/products/kimchi.md`. **Why second:** it meets "track cost" (5 of 10 ads) without asking teams to drop the tools they use.
- **Proof 3:** budgets can be set on service keys, so an automated job's key can be capped. Source: `docs/kimchi/step1-product-truth.md`, via `marketing-hq/products/kimchi.md`. **Why third:** dLocal's ad asks for standards on "model/data access control" (`r-20261029-summer-campain--t1`). A capped key per job is the closest approved claim.
- **Reserve proof (only if a security reader asks, never the lead):** agents never see credentials; they are injected at the gateway. Source: `docs/kimchi/step1-product-truth.md` (docs, not tested).
- **Call to action:** the brief's objective is "to be seen", so this is awareness, not a sales stage (`marketing-hq/requests/r-20261029-summer-campain.json`). The CTA should be low-commitment: "See how a team budget stops agent spend at the limit." It links to a short walkthrough page. **Hypothesis:** this fits an awareness buyer better than a meeting request. It does not point to a free trial, because the free plan cannot complete a task without the user's own key or a paid plan (`marketing-hq/products/kimchi.md`). **[add: whether a walkthrough page or video exists, and in which languages; Content or Islam supplies it]**
- **What I will not say:**
  - "open models" or "any model"; "better than Claude"; "cheaper" or "2.5x" as a lead; "AI engineer".
  - That it "controls" or "covers" Claude Code. Only that it "reports on Claude Code".
  - ROI, business value or productivity gains; "see what every merged PR costs" as if complete.
  - A cap per session or per run, automatic budgets, or a budget reset period.
  - That it meets CNBV, SOC 2, PCI, DORA or any regulator's rule. No approved claim exists (`marketing-hq/products/kimchi.md`).
  - Data residency, self-hosting outside a Cast AI cluster, or the rejected sovereignty and one-budget bets.
  - Named logos (dLocal, Konfío, EBANX or others) as customers. They are prospects found in job ads.
  - That the free plan completes a task.
- **Honest limits line (for any page):** "Budgets cap spend per org, team, developer and key. They are not a cap on a single run. Claude Code usage is reported, not controlled." Source: `docs/kimchi/step1-product-truth.md`, `docs/kimchi/product-walkthrough.md`.

## Top objection and answer
**Objection (from the evidence):** "I don't want to cap AI use. I want my teams to use more of it." **Observed:** Clara's ad frames the work as "maximizing an unlimited token budget" (`r-20261029-summer-campain--t1`).
**Answer:** "A budget does not have to be small. You set it per team, developer and key, so one team can have a large budget while an automated job's key is capped. The report shows cost by model, team and developer, so you raise a budget based on what the team spent." Sources: approved claims 1, 2 and 3 (`marketing-hq/products/kimchi.md`). The answer must not promise automatic budgets, a reset period or a per-run cap.

**Second objection to prepare for (not on the page):** "Does it meet our regulator's rules, and which models run our code?" There is no approved compliance claim. The default models are mostly Chinese-origin (Kimi, MiniMax) (`docs/kimchi/research-q4-chinese-models.md`). **Inferred:** a fintech security reviewer under CNBV or the Brazilian central bank will ask both questions early. **[add: Kimchi's approved answer on compliance posture and model routing for regulated LATAM buyers (for example Claude or GPT on the firm's own key); until then, the page stays silent on models and compliance]**

## Confidence and the test that would change it
**Confidence: low.**
- **Weakest link 1: coding-agent fit.** Only 1 of 10 LATAM ads names a coding agent tool. Most platform roles build AI products (`r-20261029-summer-campain--t1`). If these buyers do not run coding agents, the whole positioning points at the wrong job. **Cheap test (Research, no spend):** run `coding agents`, `Copilot`, `developer productivity` and `AI enablement` on the same Mexico and Brazil pages. Read 10 or more further ads, and count how many name a coding agent tool. **What would change my mind:** if fewer than 2 of 10 more ads name a coding tool, I would stop and tell Islam that this segment does not show the trigger. I would not run ads on this positioning. That threshold is my judgement, not a benchmark.
- **Weakest link 2: the value wording.** A hard limit is named in 0 of 10 ads. **Cheap test:** headline A vs C to the same Mexico and Brazil fintech audience, designed in t4 with `ab-test-design`. **What would change my mind:** if C beats A clearly, this buyer reacts to cost visibility more than to "before". Then I would lead with cost per team and keep "limits" as Proof 1. If neither clears the benchmark floor, I would question the segment, not just the words. If A wins, the locked line travels to LATAM unchanged.
- **Weakest link 3: the hard stop is untested with real spend** (`docs/kimchi/step1-product-truth.md`). If it fails, Proof 1 comes off, and the positioning needs rework in both regions. **[add: result of a real-spend budget test]**
- **Weakest link 4: the sample.** It is 10 ads, one search term and 3 firms in tier 1 (`r-20261029-summer-campain--t1`). Medium confidence would need at least the extra search terms and a second evidence group, such as LATAM engineering forums or reviews.

## Open items
- **[add: Islam to confirm the locked line "Autonomous agents. Limits set before they start." is still current; it is control A in the test]**
- **[add: Research to run `coding agents`, `Copilot`, `developer productivity`, `AI enablement` in Mexico and Brazil and read 10+ more ads; this settles the coding-agent fit]**
- **[add: buyer job title at dLocal and Konfío; Research supplies it]**
- **[add: Islam to decide the ad language per country; a native speaker translates and checks A and C]**
- **[add: whether a walkthrough page or video exists for the CTA, and in which languages; Content or Islam supplies it]**
- **[add: Kimchi's approved answer on compliance (CNBV, Brazilian central bank, SOC 2, PCI) and model routing for regulated buyers]**
- **[add: Islam's call on EBANX. Devin's customer page lists it (`docs/kimchi/icp-lens2-adjacent-customers.md`). Keep it in tier 1 with a "reports on Claude Code" angle only, or move it out]**
- **[add: a LATAM voice-of-customer source on AI spend (forums, reviews), to test whether "do nothing" actually hurts here]**
- **[add: result of a real-spend test of the "budget exhausted" hard stop]**
- **[add: confirm "mid-size" means up to 5,000 staff, and the campaign timing; southern-hemisphere summer is December to February (`marketing-hq/requests/r-20261029-summer-campain.json`)]**
- Prices are not used here. If any asset adds them, re-check https://kimchi.dev/pricing first (last recorded 23 Oct 2026).

## Sources
- `r-20261029-summer-campain--t1` (`marketing-hq/assets/r-20261029-summer-campain--t1.md`): LATAM ICP research from job ads, in review, read 2026-11-01. The LATAM counts, quotes, firms, exclusions and trigger come from here. The underlying LinkedIn and Greenhouse URLs are cited in that asset (accessed 2026-11-01).
- `marketing-hq/requests/r-20261029-summer-campain.json`: brief, plan rationale, task t3, read 2026-11-01.
- `marketing-hq/products/kimchi.md`: approved claims, claims to avoid, audience and locked positioning line, updated 2026-10-29, read 2026-11-01.
- `r-20261029-generic-one-pager-for-uk-and-eu-finance-platform--t1`: UK/EU positioning, in review. Used for reference only (structure, the build alternative and the honest limits line). It was not copied as LATAM evidence. Read 2026-11-01.
- `docs/kimchi/value-tally.md`: UK/EU value tally and the after-the-fact rival ads, 27 Oct 2026, read 2026-11-01.
- `docs/kimchi/competitor-summary.md`: rivals, where Kimchi can't win, and Devin in Latin American finance, 27 Oct 2026, read 2026-11-01.
- `docs/kimchi/icp-lens2-adjacent-customers.md`: Devin customer pages listing Itaú, Nubank and EBANX (https://devin.ai/customers/ebanx, https://devin.ai/customers/itau, https://devin.ai/customers/nubank, as recorded in that file), read 2026-11-01.
- `docs/kimchi/ad-library-reviews.md` and `docs/kimchi/competitor-messaging.md`: Cognition's Itaú security ad and GitHub's finance page with the Itaú logo, read 2026-11-01 (via grep).
- `docs/kimchi/research-q4-chinese-models.md`: default model origin, read 2026-11-01.
- `docs/kimchi/step1-product-truth.md`, `docs/kimchi/product-walkthrough.md`, `docs/kimchi/EVIDENCE.md`, `docs/kimchi/HANDOFF.md`: cited through the approved claims in `marketing-hq/products/kimchi.md`. I did not re-read these files for this asset.
- `.claude/skills/positioning/SKILL.md`: method, template and quality checks.
