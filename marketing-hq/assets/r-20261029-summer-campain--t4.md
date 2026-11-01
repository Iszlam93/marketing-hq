---
id: r-20261029-summer-campain--t4
requestId: r-20261029-summer-campain
taskId: t4
title: LATAM summer visibility campaign plan with headline test A vs C
agentId: strategy
skillIds: campaign-plan, ab-test-design
version: 1
status: in_review
notionPageId: 40b265ea-4dd8-81a1-8c54-f1c8e88cf53d
notionUrl: https://app.notion.com/p/40b265ea4dd881a18c54f1c8e88cf53d
updatedAt: 2026-11-01T14:40:00Z
---

# Campaign plan: LATAM mid-size finance visibility, headline test A vs C

**Read this first.** This is an exploratory plan. LATAM is outside the locked UK/EU bet (`marketing-hq/products/kimchi.md`, Audience; request plan rationale). The brief gives no KPI target, budget, dates or channels (`marketing-hq/requests/r-20261029-summer-campain.json`). The logic tree says no paid spend until Branch 1 ("Who") passes (`r-20261029-summer-campain--t2`, Start here). So this plan is **gated**: nothing is spent until Gate 0 (Who) and Gate 1 (audience size) pass and Islam fills the gaps. Every cost number below is a **planning range from non-LATAM benchmarks**. No LATAM LinkedIn benchmark exists in the repo (`docs/kimchi/test-benchmarks.md`, sections 1 and 6). Kimchi is the subject product, not the voice. The product file says no published page carries Kimchi branding (`marketing-hq/products/kimchi.md`, Description note).

## Summary
The bet: once the Who gate passes, run one LinkedIn test in Mexico and Brazil that shows two headlines from the positioning (A, the locked line, vs C, a cost-per-team line) to AI and ML platform owners at fintech and payments firms with up to 5,000 staff. Their click-through rate (CTR) decides which line this buyer reacts to, and the impressions count toward being seen. At a CTR floor of 0.42% and a 45% minimum lift, the test needs about 17,700 impressions per headline. That costs about $2,100 for the two test cells, or about $3,100 with an audience control cell. The range is $1,600 to $5,000, from non-LATAM benchmarks. If the reachable audience is too small for that, I cut the comparison, not the rigour: I run one headline for visibility only and claim nothing about which message is better.

## Objective and KPIs
No campaign file exists (request has no `campaignId`). I take the objective from the logic tree: **[add: N, Islam]** engaged accounts at mid-size finance firms in Mexico and Brazil by **[add: end date, Islam]** (`r-20261029-summer-campain--t2`, Objective). An engaged account is a firm where at least one person in the buyer role clicks, replies or books a call. This is the logic tree's definition, still to be confirmed by Islam (same source).

| KPI | Unit | Target | Baseline | Primary | Source |
|---|---|---|---|---|---|
| Engaged accounts (named firms on the target list with at least one recorded click, reply or call) | accounts | **[add: confirm target, Islam]**. Ceiling today is 5 named firms (3 tier 1 + 2 tier 2). | None recorded. **[add: confirm no prior LATAM activity, Islam]** | **Yes** (outcome) | `r-20261029-summer-campain--t2` (Objective, Start here); `r-20261029-summer-campain--t1` (Tiered accounts) |
| Impressions delivered to the test audience | impressions | Plan figure, not a target: 35,400 (2 x 17,700, see Test design) | 0 | No (leading, visibility) | My calculation, below |
| CTR per headline | % | Floor 0.42% (benchmark, non-LATAM) | 0.42% planning baseline (benchmark) | No (leading; **decides the test**) | `docs/kimchi/test-benchmarks.md` s.1 (ZenABM, single image, 29 countries) |
| Cost per click (CPC) | USD | Planning check $14.08 (my calculation: $59.15 CPM / (0.42% x 1,000)); finance range $7 to $15 | none | No (leading; cost check) | `docs/kimchi/test-benchmarks.md` s.1 (ZenABM; Web Tonic citing MetadataONE and Ryze) |
| Replies to one-to-one notes, tier 1 | replies | None set. 3 notes cannot give a rate | none | No (sanity check) | `r-20261029-summer-campain--t2` Branch 4 |
| Technical calls booked | calls | None set | none | No (lagging; **reported outcome** only) | Islam's own record |

**How Islam records the primary KPI.** By hand, one row per firm, with the source of each action: an ad click, a reply or a call. **[add: whether Islam's LinkedIn reporting shows which companies clicked; if not, only replies and calls can be tied to a named firm. Islam checks in Campaign Manager.]**

**Observed:** the brief says "to be seen" with no number (request JSON). **Inferred:** engaged accounts is the closest count Islam can enter by hand. Impressions alone would show reach, not that the buyer noticed. **Confidence: low.** The target is missing and the ceiling is 5 firms. **What would change my mind:** if Islam defines "seen" as reach only, the primary KPI becomes impressions to the target audience, and the A/B test becomes optional (`r-20261029-summer-campain--t2`, Confidence).

## Audiences
| Audience | Tier | Size (source) | Notes |
|---|---|---|---|
| Named accounts: dLocal (BR), Konfío (MX), EBANX (BR) | 1 | 3 firms (`r-20261029-summer-campain--t1`, Tiered accounts). Buyer contacts: unknown | Get one-to-one notes from Islam **after** the test closes, so the notes do not mix into the ad test. EBANX is listed as a Devin customer (`r-20261029-summer-campain--t3`, Not for). **[add: Islam's call on EBANX]** |
| Named accounts: Clara (MX), Alianza Fiduciaria (CO) | 2 | 2 firms (`r-20261029-summer-campain--t1`) | Alianza is in Colombia. The paid test covers Mexico and Brazil only (`r-20261029-summer-campain--t2`, Not now), so Alianza gets no ads. It stays on the list for later. |
| **Test audience:** AI, ML and platform engineering roles at financial services and fintech firms with up to 5,000 staff in Mexico and Brazil | 2 (paid, look-alike) | **Unknown.** No public count exists for these titles (`docs/kimchi/test-benchmarks.md` s.5). Islam reads it from a no-spend draft forecast in Campaign Manager (`r-20261029-summer-campain--t2`, Branch 2 test) | Gate 1: the forecast must be at least **10,000** members (calculation below). Tier 1 firms sit inside this audience. |
| **Control audience:** the same roles at financial firms in Mexico and Brazil with **more than** 5,000 staff (for example Itaú) | 3 (control) | **Unknown.** Same forecast method | It sees headline A only. It tells me whether the audience, not the message, explains the CTR. t1 and t3 keep Itaú as a "test control" only, not a target (`r-20261029-summer-campain--t1`, Tiered accounts; `r-20261029-summer-campain--t3`, Not for). |

**Why 10,000 (my calculation, guess-based).** Each headline needs 17,700 impressions (Test design). A and C run as separate ad sets with the same targeting, so they share one pool. 2 x 17,700 = 35,400 impressions / 10,000 members = about 3.5 impressions per member over 3 weeks. The benchmark file warns that a cell with "well under about 5,000 reachable people" will not absorb about 13,300 impressions (`docs/kimchi/test-benchmarks.md` s.4, A6). I apply the same idea: at least 5,000 per headline, so 10,000 for the shared pool. The control audience needs at least 5,000 for its single cell. The hard floor is 300 members per ad set (`docs/kimchi/test-benchmarks.md` s.2). LinkedIn recommends 50,000 or more (same source). 5,000 per cell is a planning guess, not a rule.

**Not targeted, and why.** Outsourcing and staffing firms (BairesDev, FullStack, AgileEngine) are suppliers, not buyers. Finance software vendors and global firms hiring remotely (FactSet, Solera, Kraken) are not LATAM-based buyers. Colombia, Chile, Argentina, Peru and Uruguay are either thin or not searched. Individual developers are not the buyer. Large banks are targets only as the control. Sources: `r-20261029-summer-campain--t1` (Exclusions), `r-20261029-summer-campain--t2` (Not now), `marketing-hq/products/kimchi.md` (Audience).

**Confidence: low.** Only 3 firms are verified for tier 1, and the paid audience size is unknown. **What would change my mind:** a forecast above 10,000 for the test audience would make the full test runnable. Branch 1 searches finding 10 or more firms would also raise confidence (`r-20261029-summer-campain--t2`, Branch 1 goal).

## Cells (audience x message)
| Cell | Audience | Message / asset | CTA | Variable under test |
|---|---|---|---|---|
| A-test | Test audience (MX ad set in Spanish, BR ad set in Portuguese, equal split of the cell's budget) | Headline **A (control):** "Autonomous agents. Limits set before they start." Single image ad. | "See how a team budget stops agent spend at the limit." Goes to a short walkthrough page | Headline (A) |
| C-test | Test audience (same two ad sets, same split) | Headline **C (challenger):** "Set and see what AI coding agents cost, per team." Same image, body and CTA as A | Same | Headline (C) |
| A-control | Control audience (MX and BR ad sets, same languages) | Headline A, identical to A-test | Same | Audience (not message) |

- All headlines and the CTA come from `r-20261029-summer-campain--t3` (Message house). Line A is the locked line, still waiting for Islam to confirm it (`marketing-hq/products/kimchi.md`, Approved claims). If he names a different current line, it replaces A, and C runs against it (`r-20261029-summer-campain--t3`).
- **One variable.** Only the headline differs between A-test and C-test. Image, body, CTA, format, bid, budget, targeting and dates are the same. Each country runs one language, and that language is the same for A and C, so language is balanced across the two headlines. Then I pool MX and BR per headline. Translation of A and C into Spanish and Portuguese: **[add: native speaker, named by Islam]**. The translated lines are new copy and need Islam's approval before use.
- **Body copy** may use proof 1 to 3 only, and must include the honest limits line from t3: "Budgets cap spend per org, team, developer and key. They are not a cap on a single run. Claude Code usage is reported, not controlled." (`r-20261029-summer-campain--t3`, Message house). Nothing from "Claims to avoid" (`marketing-hq/products/kimchi.md`).
- One creative per ad set on purpose, against LinkedIn's advice of 4, to keep one variable (`docs/kimchi/test-benchmarks.md` s.2 and s.4, A1).
- **Brand on the ad.** **[add: Islam to say which name and logo appear on the ad and the landing page; the product file bars Kimchi branding on published pages]**
- **Landing page.** **[add: whether a walkthrough page or video exists, and in which languages; Content or Islam supplies it]** (`r-20261029-summer-campain--t3`, Open items). Without it there is no CTA, and the test cannot launch.

**Confidence: medium on the design, low on the inputs.** A vs C is the single open message question in t3. **What would change my mind:** if Branch 1 shows the buyers are not rolling out coding agents, both headlines speak to the wrong job. Then the test does not run at all (Gate 0).

## Channels and why
- **LinkedIn Sponsored Content, single image (proposed; [add: Islam to confirm allowed channels]).** **Observed:** every LATAM target firm in t1 was found through LinkedIn job pages, and the logic tree's reach branch assumes LinkedIn (`r-20261029-summer-campain--t1`, Searches; `r-20261029-summer-campain--t2`, Branch 2). **Inferred:** buyers whose firms hire on LinkedIn can be targeted there by role, industry, size and country. Single image is the format with a multi-country CTR and CPM median in the repo (`docs/kimchi/test-benchmarks.md` s.1). **Not the native A/B tool.** The API docs say each variant needs an audience of 1,000,000 (`docs/kimchi/test-benchmarks.md` s.2), and this audience will be far smaller (Inferred). So I use separate ad sets with equal budgets and compare them myself, as the benchmark file advises.
- **One-to-one notes to tier 1 buyers (Islam sends, after the test).** These cover the three named firms directly (`r-20261029-summer-campain--t2`, Branch 4). They are a sanity check, not a test: 3 notes x 5% is 0.15 expected replies (same source).
- **Excluded:**
  - Thought Leader ads. CTR 2.68% vs 0.42% for single image (`docs/kimchi/test-benchmarks.md` s.1). They need a person's post, and mixing formats adds a variable.
  - Reddit and developer newsletters. They have no LATAM data and target developers, not the platform owner (`docs/kimchi/test-benchmarks.md`, Other cheap channels).
  - Cold email at scale. There is no named contact list, and no cost data (same source).
  - Lead-gen forms. The CTA is a walkthrough, not a gated offer, and leads are not used to judge messages (`.claude/skills/ab-test-design/SKILL.md`, step 2).

**Confidence: medium.** **What would change my mind:** a Campaign Manager forecast under 300 members per ad set would mean LinkedIn cannot reach this buyer by targeting at all. Then I would drop paid and keep only the one-to-one track.

## Budget
**Labels.** All benchmarks are planning ranges. None is LATAM-specific. ZenABM's single-image figures are medians across 29 countries, and the repo does not say whether LATAM is among them. The $45 to $95 CPM range comes from a finance snippet with low confidence. USD, 2026 levels. LinkedIn costs have been rising year on year. Sources: `docs/kimchi/test-benchmarks.md` s.1, s.4 (A2), s.6.

| Line | Impressions | x CPM | = Cost (planning) | Low ($45) | High ($95) |
|---|---|---|---|---|---|
| A-test | 17,700 | $59.15 (ZenABM single image) | $1,047 | $797 | $1,682 |
| C-test | 17,700 | $59.15 | $1,047 | $797 | $1,682 |
| **Two test cells (minimum design)** | 35,400 | | **$2,094** | $1,593 | $3,363 |
| A-control | 17,700 | $59.15 | $1,047 | $797 | $1,682 |
| **Three cells (full design)** | 53,100 | | **$3,141** | $2,390 | $5,045 |

- Working: 17,700 / 1,000 x $59.15 = $1,047 per cell. 2 x $1,047 = $2,094. 3 x $1,047 = $3,141.
- **Sensitivity (if the real CTR is lower).** If the real baseline CTR is 0.30% (the bottom of the finance range), each cell needs about 24,800 impressions (Test design). Three cells then cost about $4,406 at $59.15. LinkedIn's API text suggests a $5,000 test budget for a conclusive result (`docs/kimchi/test-benchmarks.md` s.2).
- **Pacing.** 21 days. Three cells: $3,141 / 21 = about $150 a day across 6 ad sets (3 cells x 2 countries) = about $25 per ad set per day. Two cells: $2,094 / 21 = about $100 a day across 4 ad sets = about $25 per ad set per day. Both clear the $10 daily minimum. The $100 lifetime minimum also holds (`docs/kimchi/test-benchmarks.md` s.2).
- **Compare with the brief:** the brief has no budget. **[add: budget, Islam]**. If the budget is under the two-cell figure, I do not shrink the test below 17,700 impressions per headline. I drop the comparison and run one headline for visibility only (Decisions per outcome). If it fits two cells but not three, I cut A-control first.
- **Week 2 re-forecast.** After 1 to 2 weeks I replace $59.15 and 0.42% with the real CPM and CTR, and recompute the cost to reach 17,700 per cell (`docs/kimchi/test-benchmarks.md`, Reading guide).
- **Not in the budget:** translation, the landing page, design time. **[add: who supplies these and at what cost, Islam]**

## Schedule
Weeks are relative to launch (week 1). Calendar dates: **[add: dates and which "summer", Islam]**. Southern-hemisphere summer is December to February. Mexico's is June to August (`r-20261029-summer-campain--t2`, Objective).

| Week | Action | Check |
|---|---|---|
| G0 (before any build) | Research runs the Branch 1 searches (`coding agents`, `Copilot`, `developer productivity`, `AI enablement`, `AI adoption`) on the Mexico and Brazil pages and reads 10 or more further ads | **Gate 0 passes if** at least 2 of 10 further ads name a coding-agent tool (t3 threshold), **and** at least 3 more firms name developer tooling or coding agents (t2 threshold). Both thresholds are guesses from the upstream assets. |
| G0 | Islam fills: budget, dates, channel, primary KPI target, line A confirmed, brand name on the ad, EBANX call | All **[add]** items in Open items that block launch are closed |
| G1 (week -2) | Islam builds a no-spend draft audience in Campaign Manager for the test and control audiences and records the forecast. I never touch an ad account. | **Gate 1 passes if** test audience is at least 10,000 and control is at least 5,000 (Audiences). If the test audience is 300 to 9,999, use the one-headline fallback. If it is under 300, there is no paid channel. |
| Week -1 | Content writes the ad copy and the walkthrough page from t3. A native speaker translates. Islam reviews and approves. Islam builds the 4 or 6 ad sets at least 48 hours before start, allowing 5 working days for review | Copy has no "Claims to avoid" wording; A and C differ only in the headline; budgets are equal; Audience Expansion and dynamic budget optimisation are off (`docs/kimchi/test-benchmarks.md` s.2, biases) |
| Week 1 | Islam launches | Delivery only: every ad set is spending, ads are approved, CPM is inside $45 to $95. **No reading of A vs C.** |
| Week 2 | Run | Replace benchmarks with real CPM and CTR. Re-forecast the cost to reach 17,700 per cell. Apply stop rules. Still no winner call. |
| Week 3 | Run to 17,700 impressions per cell, or day 21, whichever is later, up to the budget cap | No edits other than budget or end date. No pause longer than 1 week (`docs/kimchi/test-benchmarks.md` s.2) |
| Week 4 | Wait a few days after end, because results can still shift (`docs/kimchi/test-benchmarks.md` s.4, step 5). **Earliest read-out: week 4.** Apply the winner rule | Read-out written by me, decided by Islam |
| Week 4 to 5 | Islam sends one-to-one notes to tier 1 buyers using the line the read-out supports. Islam records engaged accounts. | Primary KPI recorded with a source per firm |

## Stop and review rules
- **Delivery stop (per ad set):** if an ad set spends 50% of its budget with zero clicks, pause it. Then check targeting and approval, and pause its paired ad set too, so A and C stay equal. Fix it and restart both, or end the test as inconclusive. The 50% share is my guess, not a benchmark.
- **Cost stop (whole test):** if the real CPM after week 1 is above $95, the top of the planning range (`docs/kimchi/test-benchmarks.md` s.4, A2), pause and ask Islam whether to raise the budget or switch to the fallback. Never cut impressions per cell.
- **Floor futility stop (whole test, pre-set):** if, when each cell passes 8,850 impressions (half of 17,700), **both** A-test and C-test are under 0.30% CTR (the bottom of the finance range, `docs/kimchi/test-benchmarks.md` s.1), stop the test. This compares each headline to the floor, not A to C, so it is not a peek at the winner. It points at the segment or the channel, not the words (`r-20261029-summer-campain--t3`, Confidence).
- **No early winner.** A vs C is not read before both cells reach 17,700 impressions and the 2-week minimum has passed (`docs/kimchi/test-benchmarks.md` s.2).
- **Weekly review:** I write a short note each week covering spend, impressions, CPM, CPC, delivery issues and any stop rule hit. Islam decides on any stop.

## Roles
| Role | Who | What |
|---|---|---|
| Plan and test design, read-out | Strategy agent (me) | This plan; the week-4 read-out against the rules here |
| Branch 1 searches, buyer titles, LATAM benchmarks | Research agent | Gate 0 inputs (`icp-discovery-job-ads`) |
| Ad copy, walkthrough page | Content agent | From t3 only (`content-piece` for the page). Islam reviews. |
| Translation (ES, PT) | **[add: native speaker, named by Islam]** | Translates A, C, body and CTA; checks meaning matches t3 |
| Budget, audience forecast, ad build, **publish**, one-to-one notes, KPI records | Islam | The agent never publishes, posts, sends or touches an ad account. Islam presses publish. |

## Risks and out of scope
| Risk | Trigger | Response |
|---|---|---|
| The buyers are not rolling out coding agents (`r-20261029-summer-campain--t1`, Inferred: 1 of 10 ads names a coding tool) | Gate 0 fails | No paid spend. Report to Islam that the segment does not show the trigger. |
| The audience is too small for the test | Gate 1 forecast under 10,000 | Run the one-headline fallback, or none. Do not run a smaller test and call a winner. |
| A and C ad sets overlap in one pool, so the same people see both | Always, with manual ad sets | **Inferred:** overlap makes the two CTRs more alike, so it pushes toward "inconclusive", not toward a false winner. I note it in the read-out. |
| Translation changes the meaning of a headline | Native speaker flags a mismatch | Fix the copy before launch. A and C use the same translator. |
| The real CTR is lower than 0.42% | Week 2 real CTR near 0.30% | Power falls to about 52% (Test design). Ask Islam whether to extend toward 24,800 impressions per cell or accept a likely inconclusive result. |
| The hard stop is untested with real spend (`r-20261029-summer-campain--t3`, weakest link 3) | A real-spend test fails | Remove proof 1 from the body copy. Pause before launch if it is not yet tested. **[add: result]** |
| A compliance or model question comes from a regulated buyer (`r-20261029-summer-campain--t3`, second objection) | Reply or comment asks it | No public answer. Islam answers one-to-one once there is an approved answer. **[add: approved answer]** |
| Line A is no longer current | Islam does not confirm it | Replace A with the line he confirms (t3 rule) |

**Out of scope:** UK/EU budget and work (unless Islam says otherwise, `r-20261029-summer-campain--t2`). Countries other than Mexico and Brazil for paid. Large banks as targets. Revenue, pipeline or ROI targets (`marketing-hq/products/kimchi.md`, Claims to avoid). Lead-gen forms. Any claim that the campaign caused a call or an engaged account.

## Decisions per outcome
The A vs C decisions are in Test design, Decisions after the test. Campaign-level gates:

| Outcome | Next step |
|---|---|
| Gate 0 fails (fit not shown) | No ads. I write to Islam: "The segment does not show the trigger." Research widens the search or Islam drops LATAM for now. |
| Gate 1 gives 300 to 9,999 | **Fallback:** one headline (A, or the line Islam confirms) to the test audience for visibility only, at least 2 weeks. I read reach and CTR against the 0.42% floor only. No message claim. The A vs C question moves to the replies from one-to-one notes, which are qualitative. |
| Gate 1 gives under 300 | No paid channel. One-to-one notes to tier 1 only. |
| Both gates pass, budget fits | Run the full test below. |

---

## Test design: headline A vs C for LATAM fintech platform owners

### Question and variable
"Does headline C get a higher CTR than headline A (control) among AI, ML and platform roles at fintech and payments firms with up to 5,000 staff in Mexico and Brazil?" The headline is the only change. The control is A, the locked line (`marketing-hq/products/kimchi.md`; `r-20261029-summer-campain--t3`). A second read shows A to large financial firms (A-control) to see whether the audience explains the CTR (ab-test-design step 11).

### Metric and benchmark floor
| Metric | Baseline | Floor | Source |
|---|---|---|---|
| CTR (decides) | 0.42% (planning baseline) | **0.42%**: a winner must be above it | ZenABM, single image, median of 29 countries, B2B (`docs/kimchi/test-benchmarks.md` s.1). **Non-LATAM-specific planning range.** |
| CTR (futility check) | n/a | 0.30% | Stackmatix finance range 0.30% to 0.55%, global, via Web Tonic (`docs/kimchi/test-benchmarks.md` s.1). Non-LATAM. |
| CPC (cost check only) | $14.08 implied | none | My calculation: $59.15 / (0.0042 x 1,000). Finance CPC $7 to $15 (`docs/kimchi/test-benchmarks.md` s.1) |

**Why not leads or calls (calculation).** About 74 clicks per headline (17,700 x 0.42%). Even at the 2% to 5% high-commitment offer rate (ZenABM, `docs/kimchi/test-benchmarks.md` s.1), that is about 1.5 to 3.7 calls per headline. That cannot separate two headlines. Calls are a sanity check and a reported outcome only.

**Why 0.42% and not the finance range as the floor.** It matches the format I use (single image). It also sits inside the finance range (0.30% to 0.55%). It is a judgement call. If Islam prefers 0.55% (top of the finance range), each cell needs about 13,500 impressions at that baseline, but the floor gets harder to clear.

### Sample size
Formula, at 90% confidence and 80% power: z1 = 1.645, z2 = 0.84, (z1 + z2)^2 = 6.18.
n per variant = 6.18 x (p1(1 - p1) + p2(1 - p2)) / (p2 - p1)^2

- Minimum effect: a **45% relative lift**. It is the lift used in the repo's worked example (`docs/kimchi/test-benchmarks.md` s.3). Smaller lifts cost far more: a 27% lift needs about 2.5 times the impressions (same source, 13,300 vs 34,100 at 0.55%).
- p1 = 0.0042. p2 = 0.0042 x 1.45 = 0.00609.
- p1(1 - p1) = 0.0042 x 0.9958 = 0.0041824
- p2(1 - p2) = 0.00609 x 0.99391 = 0.0060529
- Sum = 0.0102353. (p2 - p1)^2 = (0.00189)^2 = 0.000003572
- n = 6.18 x 0.0102353 / 0.000003572 = **about 17,700 impressions per variant**
- Clicks: 17,700 x 0.42% = about 74 (A at baseline); 17,700 x 0.609% = about 108 (C at the lift).
- Cost: 17,700 / 1,000 x $59.15 = about $1,047 per variant (range $797 to $1,682 at $45 to $95 CPM).

Sensitivity (same formula, my calculation):
| Baseline p1 | p2 (+45%) | n per variant | Cost per variant at $59.15 |
|---|---|---|---|
| 0.30% | 0.435% | about 24,800 | about $1,469 |
| **0.42%** | **0.609%** | **about 17,700** | **about $1,047** |
| 0.55% | 0.797% | about 13,500 | about $799 |

### Comparisons and false-winner risk
- k = 2 message variants (A, C), so m = 1 message comparison. A-control is a second comparison: A to mid-size vs A to large firms. That one is about the audience.
- One comparison at 90% confidence: about a **10%** chance of a luck winner. Exact binomial check at 17,700 impressions each, both at 0.42%, with the rule below: about 5.3% that C looks like a winner by luck, and about 10.7% that either one does (my calculation).
- If both comparisons count: 1 - (0.9)^2 = **19%** chance that at least one gap is luck.
- **How I reduce it:** only the A vs C comparison drives a message decision. The audience read is descriptive. It can lead to a follow-up test, never on its own to a change of segment. I keep k at 2. B (the HANDOFF line) stays out, as t3 rejected it for LATAM (`r-20261029-summer-campain--t3`, Message house).

### Winner rule (plain numbers)
At equal impressions (within 5%, each at least 17,700):
- **C wins** if C has **20 or more clicks more than A**, and C's CTR is **above 0.42%** (75 or more clicks at 17,700).
- **A wins** if A has 20 or more clicks more than C, and A's CTR is above 0.42%.
- Anything else is **inconclusive**.
- Derivation: at p1 = 0.42% and n = 17,700, A expects about 74 clicks. The standard error of the click gap is about sqrt(2 x 74) = 12.2. 1.645 x 12.2 = 20.0, so 20 clicks.
- **Power in practice** (exact binomial calculation, my working, not a simulation): if C is truly 0.609% and A is 0.42%, this rule names C the winner about **85%** of the time. If the true rates are 0.30% and 0.435%, it does so about **52%** of the time, mostly because the 0.42% floor blocks it. At a 27% lift (0.42% to 0.533%) it does so about **52%** of the time. So a real but smaller gain will often come out inconclusive.
- If impressions are unequal by more than 5%, compare CTRs instead, at the same threshold scaled: gap in CTR of at least 20 / 17,700 = 0.113 percentage points.

**What this test can and cannot show.** It can show which headline earns more clicks from this audience on LinkedIn, if the gap is large. It cannot show that either line gets more calls, pilots or revenue. It cannot show that the campaign caused any engaged account. It cannot show anything about other countries or channels.

### Stopping rule
- Minimum 2 weeks (LinkedIn), planned 21 days (the API recommends at least 3 weeks), and at least 17,700 impressions per variant (`docs/kimchi/test-benchmarks.md` s.2).
- Weeks 1 and 2: delivery and cost only. No early calls based on peeking.
- If 17,700 is not reached by day 21, extend once by up to 2 weeks within budget (the LinkedIn A/B extension pattern, same source). If it is still short, call it inconclusive.
- The only early stops are the delivery, cost and floor-futility rules in Stop and review rules.

### Decisions after the test
| Outcome | Rule | Next step |
|---|---|---|
| Win (C) | C leads A by 20 or more clicks and C's CTR is above 0.42% | Lead LATAM copy with the cost-per-team line. Keep "limits" as proof 1 (`r-20261029-summer-campain--t3`, Confidence). Islam sends tier 1 notes with C. Any further spend goes to C only, after Islam sets a new budget. The result applies to LinkedIn in MX and BR only. |
| Win (A) | A leads C by 20 or more clicks and A's CTR is above 0.42% | The locked line travels to LATAM unchanged (t3). Tier 1 notes use A. |
| Lose | Neither is above 0.42%, or the futility stop fires | I question the segment and the channel, not only the words (t3). No more paid spend. I go back to Branch 1 and 2 with Research. |
| Inconclusive | Both above or near the floor, gap under 20 clicks | **This is a valid answer and the likely one.** The difference between the two lines is smaller than a 45% lift. I keep A, the locked line, for consistency with UK/EU. I do not extend for a smaller lift, because a 27% lift needs about 2.5 times the spend. I move to a stronger lever: the segment or the offer. |
| Audience read (A-control) | A's CTR in large firms vs mid-size, same rule | Descriptive only. If large firms click far more, I flag to Islam that the size limit may be the wrong cut. Any change needs its own test. |

### Assumptions
| # | Assumption | Source or "guess" |
|---|---|---|
| 1 | Baseline CTR 0.42% applies to this LATAM audience | Benchmark, non-LATAM (ZenABM, `docs/kimchi/test-benchmarks.md` s.1). The LATAM fit is a **guess**. |
| 2 | CPM $59.15, range $45 to $95 | ZenABM single image. Range from a finance snippet, low confidence (`docs/kimchi/test-benchmarks.md` s.1, s.4). Non-LATAM. |
| 3 | A 45% lift is the smallest worth acting on | **Guess**, taken from the repo's worked example (`docs/kimchi/test-benchmarks.md` s.3) |
| 4 | 90% confidence, 80% power | Skill standard (`.claude/skills/ab-test-design/SKILL.md`). LinkedIn recommends at least 90% (`docs/kimchi/test-benchmarks.md` s.2). |
| 5 | 5,000 reachable members per cell, 10,000 for the shared pool | **Guess**, adapted from `docs/kimchi/test-benchmarks.md` s.4 A6 |
| 6 | Pooling MX and BR per headline keeps one variable, because each country has one language for both headlines | **Guess** (my design) |
| 7 | Overlap between A and C ad sets biases toward inconclusive, not toward a false winner | **Guess** (Inferred) |
| 8 | 21 days of spend; 50% spend with zero clicks as a delivery stop | 21 days: LinkedIn API recommendation (`docs/kimchi/test-benchmarks.md` s.2). 50%: **guess**. |
| 9 | Messages A and C are approved for LATAM use once translated | **Guess** until Islam confirms A and approves the translations |

---

## Open items
Blocking launch:
- **[add: budget, Islam]**
- **[add: campaign dates and which "summer" is meant, Islam]**
- **[add: allowed channels; LinkedIn is proposed, Islam]**
- **[add: target number of engaged accounts, and confirm the definition of "seen", Islam]**
- **[add: confirm line A "Autonomous agents. Limits set before they start." is current, Islam]**
- **[add: Gate 0 result: Branch 1 searches and 10+ further ads, Research]**
- **[add: Gate 1 result: Campaign Manager audience forecasts for test and control audiences, Islam]**
- **[add: brand name and logo for the ad and landing page, given the product file bars Kimchi branding on published pages, Islam]**
- **[add: walkthrough page or video for the CTA, in Spanish and Portuguese, Content or Islam]**
- **[add: native-speaker translator for ES and PT, named by Islam]**
- **[add: result of a real-spend test of the "budget exhausted" hard stop, before proof 1 runs]**

Not blocking:
- **[add: whether LinkedIn reporting shows which companies clicked, Islam]**
- **[add: Islam's call on EBANX (Devin customer page)]**
- **[add: LATAM LinkedIn CTR, CPC and CPM benchmarks, Research]**
- **[add: buyer job titles at dLocal and Konfío, Research]**
- **[add: approved answer on compliance and model routing for regulated LATAM buyers]**
- **[add: confirm "mid-size" means up to 5,000 staff, Islam]**
- **[add: confirm LATAM is an exploration alongside UK/EU, not a replacement, Islam]**
- **[add: cost of translation, page and design, Islam]**

## Sources
- `r-20261029-summer-campain--t1` (`marketing-hq/assets/r-20261029-summer-campain--t1.md`, v1, in review): LATAM ICP research, tiers, exclusions, ad counts. Read 2026-11-01. Its LinkedIn and Greenhouse URLs are cited in that asset (accessed 2026-11-01).
- `r-20261029-summer-campain--t2` (`marketing-hq/assets/r-20261029-summer-campain--t2.md`, v1, in review): objective, engaged-account definition, branches, Gate 0 threshold, no-spend rule. Read 2026-11-01.
- `r-20261029-summer-campain--t3` (`marketing-hq/assets/r-20261029-summer-campain--t3.md`, v1, in review): headlines A and C, CTA, proof points, honest limits line, confidence and decision on test outcomes. Read 2026-11-01.
- `marketing-hq/requests/r-20261029-summer-campain.json`: brief and plan rationale. Read 2026-11-01.
- `marketing-hq/products/kimchi.md`: audience, approved claims, claims to avoid, branding note. Updated 2026-10-29, read 2026-11-01.
- `docs/kimchi/test-benchmarks.md` (compiled 2026-10-24, read 2026-11-01): CTR, CPC and CPM benchmarks, LinkedIn rules, sample-size method. It cites https://zenabm.com/blog/linkedin-ads-benchmarks-2026 (2026-02-16), https://www.webtonic.io/blog/fintech-linkedin-ads-statistics (updated 2026-10-09), https://www.linkedin.com/help/lms/answer/a423690 , https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget , https://www.linkedin.com/help/lms/answer/a1376579 , https://learn.microsoft.com/en-us/linkedin/marketing/integrations/experimentation/ab-testing/ab-testing?view=li-lms-2025-01 , https://thedigitalbloom.com/learn/cold-outbound-reply-rate-benchmarks/ (as recorded in that file; I did not re-open these URLs).
- `.claude/skills/campaign-plan/SKILL.md` and `.claude/skills/ab-test-design/SKILL.md`: method, templates, quality checks. Read 2026-11-01.
- `docs/marketing-hq/v2/DATA-CONTRACT.md`: asset front matter. Read 2026-11-01.
- My calculations (sample sizes, costs, the 20-click threshold, exact binomial power and false-winner rates): done 2026-11-01 from the inputs above.
