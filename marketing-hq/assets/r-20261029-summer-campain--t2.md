---
id: r-20261029-summer-campain--t2
requestId: r-20261029-summer-campain
taskId: t2
title: Logic tree for LATAM mid-size finance visibility
agentId: strategy
skillIds: logic-tree
version: 1
status: in_review
notionPageId: 40b265ea-4dd8-81b6-be87-e3501bd9ab5b
notionUrl: https://app.notion.com/p/40b265ea4dd881b6be87e3501bd9ab5b
updatedAt: 2026-11-01T14:29:00Z
---

# Logic tree: be seen by mid-size finance firms in LATAM

This is an exploratory tree. LATAM is outside the locked UK/EU bet (`marketing-hq/products/kimchi.md`, Audience). The brief gives no KPI, target, budget, dates or channels (`marketing-hq/requests/r-20261029-summer-campain.json`, plan.rationale). I mark each gap and still draw the tree, so Islam can see which part to fill or challenge.

## Objective
The brief says: "to be seen in the mid size finance companies in LATAM" (request JSON, brief). "To be seen" has no number, so I turn it into something I can count.

**Objective (proposed):** Get **[add: target number, Islam]** engaged accounts among mid-size (up to 5,000 staff) finance firms in Mexico and Brazil by **[add: end date, Islam; "summer" is December to February in the southern hemisphere and June to August in Mexico]**.

- **Engaged account (my definition, Inferred):** a firm where at least one person in the buyer role (the AI or ML platform owner) takes a visible action: clicks an ad, replies to a note, or books a call. Islam can record each one by hand with a source. **[add: Islam to confirm this definition of "seen", or name another one]**
- **Why Mexico and Brazil only (Observed):** the 3 tier-1 firms (dLocal, Konfío, EBANX) and the 2 tier-2 firms (Clara, Alianza Fiduciaria) come from Mexico, Brazil and Colombia; Colombia gave 1 finance card of 60 (`r-20261029-summer-campain--t1`, Funnel and Tiered accounts).
- **Why up to 5,000 staff (Observed):** t1 used the UK/EU limit because the brief gave none (`r-20261029-summer-campain--t1`, Summary). **[add: Islam to confirm the "mid-size" limit]**
- Budget: **[add: budget, Islam]**. Channels: **[add: allowed channels, Islam]**.

## Tree
The split is a chain. Engaged accounts = firms on the list x share of them reached x share of those reached who act. Branch 4 covers the step they act on.

- **Objective:** **[add: N]** engaged accounts at mid-size finance firms in Mexico and Brazil by **[add: date]**.
  - **Branch 1: Who. Enough target firms exist with the trigger.**
    - Goal: 10 or more named firms in Mexico and Brazil, up to 5,000 staff, each with a live ad for a platform or AI-rollout role, before any spend (**guess**; my number. The t1 tier-1 aim was 5 to 10 firms and it found 3, `r-20261029-summer-campain--t1`, Tiered accounts). Today: 3 tier-1 and 2 tier-2 firms (Observed, same source).
    - Assumption: Mid-size finance firms in Mexico and Brazil are rolling out coding agents to their own developers now, not only building AI products. (Can be wrong: only 1 of 10 ads read named a coding-agent tool, and that was a Clara business-operations role, `r-20261029-summer-campain--t1`, What the ads say.)
    - Test: Run the four search terms t1 did not run (`AI enablement`, `AI adoption`, `developer productivity`, `coding agents`, plus `Copilot`) on the same Mexico and Brazil public pages. Count finance employers the same way, and read 10 or more more ads. The assumption is false if fewer than 3 more firms name developer tooling or coding agents (**guess** threshold). Cost: desk time only. Source for the method and the missing terms: `r-20261029-summer-campain--t1`, Searches and Open items.
  - **Branch 2: Where. I can reach the buyer at those firms.**
    - Goal: a paid audience of at least 300 matched members per ad set (LinkedIn minimum, **benchmark/platform rule**, `docs/kimchi/test-benchmarks.md` section 2), and a named buyer contact at each tier-1 firm (**target**, my proposal). Today: buyer title unknown at Konfío and dLocal (Observed, `r-20261029-summer-campain--t1`, Open items).
    - Assumption: LinkedIn (or another channel Islam allows) can target AI or ML platform roles at mid-size Mexican and Brazilian finance firms with an audience large enough to deliver.
    - Test: Build the audience as a draft in Campaign Manager with no spend and read the forecast size. Islam does this; I do not touch any ad account. False if the forecast is under 300 members (`docs/kimchi/test-benchmarks.md` section 2). Note: the LinkedIn A/B tool may need 1,000,000 members per variant (API docs, `docs/kimchi/test-benchmarks.md` section 2), so a niche audience will likely need separate equal ad sets instead (Inferred).
  - **Branch 3: What. The message makes them act.**
    - Goal: ad click-through rate above a floor of 0.30% to 0.55% (**benchmark**, financial services and fintech CTR, global, secondary source; `docs/kimchi/test-benchmarks.md` section 1, Web Tonic citing Ryze and Stackmatix). No LATAM benchmark exists in the repo. **[add: a LATAM LinkedIn CTR and CPM benchmark, Research]**
    - Assumption: A message about control set before agents run, using the approved line "Autonomous agents. Limits set before they start." (`marketing-hq/products/kimchi.md`, Approved claims), earns clicks above the floor from these buyers. (Can be wrong: in t1, compliance or security appeared in 6 of 10 ads and governance in 3 of 10, but a hard spend limit in 0 of 10, and one ad mentions "maximizing an unlimited token budget", `r-20261029-summer-campain--t1`, What the ads say.)
    - Test: Compare the limits framing with a compliance and control framing in one test, one variable, designed in t4 with ab-test-design. Messages come from the positioning task t3 only. Before that, a free check: count how many of the new Branch 1 ads name a cap, quota or budget versus compliance.
  - **Branch 4: How. The step they are asked to take is one they will take.**
    - Goal: a reply rate on one-to-one notes to tier-1 buyers in the range 3.4% to 5.8% (**benchmark**, cold email, all regions, snippet only; `docs/kimchi/test-benchmarks.md`, Other cheap channels). With 3 tier-1 firms this range cannot be read as a rate; it is a sanity check only (Inferred: 3 notes x 5% is 0.15 expected replies).
    - Assumption: A buyer at a tier-1 firm will act on a short, specific, low-effort step (read a note, reply, click) written in their own language (Spanish or Portuguese).
    - Test: Islam (not me) sends one-to-one notes to the named buyer at each tier-1 firm once Branch 2 finds them, with one clear ask. False if none of the tier-1 buyers act within **[add: wait period, Islam]**. Language is a **Hypothesis**: the ads I relied on were written in Portuguese, Spanish and English (`r-20261029-summer-campain--t1`, quotes).

## Why this split
Engaged accounts are the product of list size, reach and action, so every engaged account passes through all four branches and no result sits in two of them. If any branch is zero (no firms, no reach, no click, no step taken) the objective is zero, so none can be dropped.

## Start here
**Branch:** 1, Who.

**Why:** It has the most impact and the cheapest test. If mid-size LATAM finance firms are not rolling out coding agents, Branches 2 to 4 measure attention from people with no reason to buy. The evidence for fit is thin: 1 of 10 ads named a coding-agent tool, and most platform roles are about building AI products (`r-20261029-summer-campain--t1`, Inferred). The test is desk research with no spend and no contact. Today the list also caps the objective: with 3 verified tier-1 firms and 2 tier-2 firms, at most 5 accounts can be "engaged", whatever the budget (calculation: 3 + 2 = 5, `r-20261029-summer-campain--t1`, Tiered accounts).

**Not now:**
- No paid ads and no A/B test until Branch 1 passes and Islam sets a budget and dates.
- No large banks (Itaú, Banorte, Santander México): likely above 5,000 staff, sizes unverified (`r-20261029-summer-campain--t1`, Exclusions). Itaú stays only as a wording benchmark.
- No Colombia, Chile, Argentina, Peru or Uruguay spend: Colombia showed 1 finance card in 60, and the others were not searched (same source).
- No outsourcing firms, finance software vendors or individual developers: suppliers or not the buyer (same source; `marketing-hq/products/kimchi.md`, Audience).
- No pipeline, revenue or ROI target: the brief asks for visibility, and the product file bars ROI claims (`marketing-hq/products/kimchi.md`, Claims to avoid).
- No change to the UK/EU bet. This tree does not take budget or effort from it unless Islam says so. **[add: Islam to confirm LATAM is an exploration alongside UK/EU, not a replacement]**

## The loop
| Step | Branch status |
|---|---|
| Evidence | Branch 1 partial: t1 in review, 3 firms, small sample (`r-20261029-summer-campain--t1`). Branch 3 partial: ad wording counts from the same 10 ads. Branches 2 and 4: none yet. |
| Target | Branch 1 here today: tiers drafted in t1, not enough firms. Branch 2: buyer titles unknown. |
| Message | Branch 3: waiting on positioning task t3 (in progress, request JSON). |
| Test | Branch 3: to be designed in t4 (pending). Branches 1 and 2 have free tests ready to run. |
| Run | No branch. |
| Review | No branch. |
| Scale | No branch. |

## Bottom-up check
- If Branch 1 is met, there are 10 or more firms with the trigger. If Branch 2 is met, their buyers can be reached. If Branch 3 is met, enough reached buyers click. If Branch 4 is met, the step they are asked to take gets taken. Then each firm with at least one action counts as an engaged account, which is the objective.
- Gap: I cannot say whether the objective is met, because the target N is missing. If N is above the number of firms Branch 1 finds, the tree cannot reach it, and Islam should lower N or widen the countries. **[add: N, Islam]**
- Gap: I have no LATAM benchmark for reach or click rate, so I cannot forecast how many engaged accounts a given budget buys. Branch 2 and 3 tests will give the first real numbers.

## Confidence and what would change my mind
- Split (four branches): **high**. It follows from how an engaged account is counted. It would change if Islam defines "seen" as reach only (impressions), in which case Branches 3 and 4 drop out of the objective.
- Start with Branch 1: **medium**. It rests on t1's small sample (one search term, 60 cards per country, 10 ads). If the extra searches show many mid-size firms rolling out coding agents, I would move to Branch 3 next.
- Branch goals: **low**. Most are guesses or non-LATAM benchmarks.

## Open items
- **[add: target number of engaged accounts, Islam]**
- **[add: campaign dates and which "summer" is meant, Islam]**
- **[add: budget, Islam]**
- **[add: allowed channels, Islam]**
- **[add: confirm the definition of "seen" (engaged account), Islam]**
- **[add: confirm "mid-size" means up to 5,000 staff, Islam]**
- **[add: confirm LATAM is an exploration alongside the locked UK/EU bet, Islam]**
- **[add: LATAM LinkedIn CTR, CPC and CPM benchmarks, Research]**
- **[add: Branch 1 extra searches and 10 or more more ads, Research]**
- **[add: buyer job titles at dLocal and Konfío, Research]**
- **[add: wait period for the Branch 4 test, Islam]**
- **[add: Islam to confirm the locked line "Autonomous agents. Limits set before they start." is still current (open in the product file)]**

## Sources
- Request and plan rationale: `marketing-hq/requests/r-20261029-summer-campain.json` (accessed 2026-11-01)
- Upstream ICP research: `r-20261029-summer-campain--t1` (`marketing-hq/assets/r-20261029-summer-campain--t1.md`, version 1, in review; accessed 2026-11-01). Its ad and search URLs are listed in that asset's Sources.
- Product file (audience, approved claims, claims to avoid): `marketing-hq/products/kimchi.md` (accessed 2026-11-01)
- Benchmarks and LinkedIn platform rules: `docs/kimchi/test-benchmarks.md` (compiled 2026-10-24; accessed 2026-11-01), citing https://www.webtonic.io/blog/fintech-linkedin-ads-statistics , https://thedigitalbloom.com/learn/cold-outbound-reply-rate-benchmarks/ (snippet only), https://www.linkedin.com/help/lms/answer/a423690 , https://learn.microsoft.com/en-us/linkedin/marketing/integrations/experimentation/ab-testing/ab-testing?view=li-lms-2025-01
- Skill: `.claude/skills/logic-tree/SKILL.md` (accessed 2026-11-01)
