---
name: market-bet
description: For the moment a product marketer is asked "where do we start?" or "who should we go after first?" and the page is blank. Takes them from that open question to one evidence-backed bet (segment, buyer, trigger, message) and a test that ends in a decision whether it wins, loses or is unclear. Use for a new product, a new market, a stalled pipeline that needs a new focus, or a choice between several segments. Uses the CRM, prospecting, company-data and web connectors when available; works with web search alone. Not for writing a single asset or reporting results.
license: MIT
---

# Market bet: where do I start?

**The moment:** someone asks "where do we start?", "who should we go after first?" or "build me the go-to-market plan", and there is no agreed answer yet. Every product marketer hits this, usually with little time, little budget and a sceptical audience.

**What you get:** one bet, the evidence behind it, who is out, and a test that ends in a decision whatever the result.

The method runs in five steps: **Brief → Listen → Narrow → Count → Learn**. Each step produces something the next step needs. If a step has no output, stop and fix it before moving on.

## When to use
- The question is open: "where do we start", "where should we focus", "find our first segment", "pipeline is flat, who do we go after now", "what would you test first".
- There is a product and a goal, but no agreed segment, message or test.
- The answer must survive a sceptical reader (a leadership team, a founder, a sales leader), often under a page or time limit.

**Not for:** a single asset for a segment you have already chosen (write positioning or the asset directly); reporting campaign results; forecasting revenue.

**What comes next:** this skill ends with one chosen segment and a test. Turning that segment into a full customer profile and an account list, and then into leads, are the next two moments ("who exactly is the customer?" and "how do I get leads from them?"). If skills for those are installed, hand over to them with the outputs of Steps 3 and 4.

## Inputs
- The brief, word for word.
- Product facts: what the product does **today**, the claims you can prove, and the claims you must not make. If no product facts exist, write them first. Every message claim must trace back to them.
- **Your own customers, if any:** won and lost deals, current customers, trials, sign-ups. This is the strongest evidence you have. A company with no customers yet skips it and says so.
- Hard limits: pages, hours, budget, regions, which sources you may use.
- Anything already agreed: an existing ICP, positioning, data.

## Connectors (optional: each one makes a step stronger)
The skill works with web search alone. At the start, check which connectors are available, list them in the brief box, and use them at the steps below. Never fail or stall because one is missing: fall back and note the gap.

| Step | If connected | Use it for | Without it |
|---|---|---|---|
| 2. Your own customers | **CRM** (HubSpot, Salesforce or similar) | Won vs lost deals by industry, size, region; deal length; who signed | Ask the user for a short export or a list of their best 10 customers |
| 2. Your own customers | **Product analytics** (Amplitude, Fullstory or similar) | Which accounts activate and stay | Skip, mark `[MISSING]` |
| 2. Trigger search | **Prospecting / company data** (Apollo.io, ZoomInfo, Crunchbase, Clay or similar) | Job postings, hiring and funding signals, company counts by size and industry | Search public job boards and news by hand |
| 2. Market interest | **Search and web data** (Semrush, Ahrefs, Similarweb or similar) | Search demand for the problem, competitor traffic and sources | Web search; mark demand as **Assumes** |
| 2. Competitors | **Web extraction** (Firecrawl or similar) | Read competitor sites and pricing pages in bulk | Read the key pages by hand |
| 3. Sizing | **Company data** (as above) | Number of firms per candidate segment | Estimate from public lists; mark as **Assumes** |
| 1-5. Record | **Docs / notes** (Notion, Google Drive, Microsoft 365 or similar) | Keep the evidence log, the bet and test results in one place the team can see | A single document |

**Connector rules:**
- **Ask before spending credits.** Many prospecting and data tools charge per lookup. Estimate the cost first and get the user's OK.
- **Read only.** Never create, update or delete records in a CRM or any tool during this skill.
- **Personal data:** use company-level data for the bet. If contact data is pulled, keep it out of the shared document and follow the user's data rules (for example GDPR for EU contacts).
- **Record the source of every number:** "CRM export, 6 Nov" or "Apollo search, filters X, 6 Nov", the same as a web link.

## Rules that apply to every step
- **Your own data first, then public sources.** Use internal data the user gives you or a connector reads. Never log in to read gated data you were not given, scrape against a site's terms, or contact people as part of the research.
- **Shows / Assumes.** Every finding is one line, tagged **Shows** (what the source says, with link and access date) or **Assumes** (your inference). A vendor page shows only what the vendor claims.
- **Fix it before you look.** Searches, source types, the scoring rubric and its weights, and the test's winner rule are written down before you see the results they apply to. Changing them afterwards means choosing the answer.
- **Denominators always.** "11 firms" means nothing without "of 73".
- **Gaps are marked, not filled.** Write `[MISSING: what, and what would settle it]` (or your team's own gap marker) instead of guessing.
- **No causation or ROI claims** from small tests or reported outcomes.

---

## Step 1. Brief: read it like a contract
1. Split the ask into **Deliverables** (what must exist), **Limits** (pages, hours, budget, region, sources) and **Judged on** (what a reader will score). If the brief says "one bet", deliver one bet.
2. Write the **goal** as one measurable sentence with a date: "3 qualified first meetings from 3 different firms within 7 weeks". If the brief has no goal, propose one and mark it `[PROPOSED]`. A bet without a goal cannot be tested.
3. Write **Not evidence**: things you may mention but the bet must not rest on (your own experience, a private conversation, a competitor's claim about itself, last year's anecdote). Write it before collecting anything.

4. **Check the tools.** List which connectors are available (see "Connectors") and whether the user has customer data to share. Ask for it once if it is not connected; do not wait on it.

**Output:** the brief box (deliverables, limits, judged on, goal, not evidence, connectors and data available).

## Step 2. Listen: collect before you conclude
1. Choose the **source types** to check and write them down before searching. Skip a type only with a reason.

   | Source type | What it tells you | Example sources |
   |---|---|---|
   | Your own customers | who already buys, stays and churns | CRM won/lost deals, customer list, trials, product usage |
   | Buyer behaviour | who has the problem **now** | job ads, hiring pages, procurement notices, public spend |
   | Buyer voice | the buyer's words, pains, objections | forums, reviews, community threads, conference talks |
   | Market and rules | reasons to act, deadlines | regulations, analyst notes, news |
   | Competitors | what is already claimed, what nobody claims | product pages, pricing, ad libraries, docs |
   | The product's own audience | who is already showing up, and whether they are the buyer | community, reviews, GitHub issues |

2. **Your own customers first, if you have any.** Group won and lost deals (or current customers) by industry, size, region and buyer role. For each group write: count, win rate with its denominator, and typical deal length. Look for the pattern you did not expect. Small numbers (under about 10 deals in a group) are a hint, not proof: tag them **Assumes**. With no customers yet, write "no customer data: the bet rests on public evidence" and carry on.
3. **Buyer behaviour: the trigger search.** Name the trigger in one sentence: "A company that is hiring for / buying / subject to `<X>` has `<problem>` now." Fix 3 to 5 searches in the buyer's words (the job or the event, never the product's name), one region and one time window (90 days is a good default). Collect to a fixed depth, then count each filter step. Read at least 10 items in full and count how often each problem theme appears.
4. **Buyer voice.** Read threads where practitioners describe the problem. Quote under 15 words per quote, with a link. Check **who is speaking**: a loud community can be the audience you should exclude, not the buyer.
5. **Competitors.** List what each one claims in its headline and proof. Write the claim **nobody** makes that your product can prove.
6. **Disconfirm.** Write the strongest case for the segment you are leaning **against**, and search specifically for evidence that your favoured view is wrong. Record what you found, including "searched X and Y, found nothing".
7. **What is missing.** List what you could not check and how that limits the bet.

**Output:** the customer pattern (or "no customer data"), the evidence log (one line per finding, tagged Shows or Assumes, with link and date), the trigger funnel, the disconfirm note and the gaps.

## Step 3. Narrow: choose one, and show the rejects
1. List **3 to 5 candidate segments** (industry × size × region × buyer role). Do not stop at the first plausible one.
2. **Fix the rubric and its weights before scoring.** Default criteria, each scored 1 to 5:

   | Criterion | Question | Proof required |
   |---|---|---|
   | Problem now | Can I see a dated trigger in this segment? | trigger count with denominator |
   | Reason to act | Is there a deadline, rule, incident or budget cycle? | source |
   | Can pay | Is there a budget owner and the size to buy? | size band, budget signal |
   | Reachable | Can I name the buyer role and reach it on my channels? | role seen in the evidence, channel |
   | Right to win | Does the product do what this segment needs **today**, and can I prove it? | product fact, or won deals in this segment |

   Equal weights unless you write a reason for different ones **before** scoring. Every score must cite its proof. A score without proof is a 1.
3. Show the **trigger funnel** on one line: `A collected → B truly the trigger → C in segment → D right size`, with each percentage and its denominator.
4. **Pick one segment.** Write why it beat the runner-up in one sentence, and name the criterion that decided it. If two segments are within one point, say so, and pick the one whose weakest score is easiest to test cheaply.
5. Write the **buyer** (role, what they own, what they have been asked to do) and the **trigger** sentence for the chosen segment.
6. Write the **message** for this one segment:
   - **Headline:** the buyer's problem in their words (from Step 2), not your feature.
   - **Proof line:** the one product fact that makes the headline believable.
   - **Why now:** the reason to act from the rubric.
   - **Alternatives:** what the buyer does today instead, and why that falls short.
   - **Claims to avoid:** anything you cannot prove yet.
7. Write **Exclusions**: who you are not going after, and why, each with evidence. Name one near-miss and why it is out.
8. Give **confidence separately** for segment, buyer and message, using these definitions:
   - **High:** two or more independent source types agree, with counts.
   - **Medium:** one source type, or small counts (under about 10 items).
   - **Low:** inference only, or sources disagree.

   Name the **weakest link**: the lowest-confidence part. The test in Step 4 should aim at it.

**Output:** the scored candidate table, the funnel, the pick and why, buyer, trigger, message, exclusions, confidence per part and the weakest link.

## Step 4. Count: a test that ends in a decision
1. **Hypothesis**, one sentence: "If I tell `<segment>` `<message>`, then `<behaviour>` will be at least `<threshold>`, measured by `<metric>`." Point it at the weakest link.
2. **Design.** Variants (2 to 3; more needs more traffic), one control, one audience per cell, equal budget per cell, a fixed end date. Add a **teaching control**: the same message shown to a segment you excluded, so you learn whether the segment mattered or only the words.
3. **Sample size, with the working shown.** For comparing two rates, a standard approximation per variant is:

   `n ≈ (z_α + z_β)² × [p₁(1−p₁) + p₂(1−p₂)] / (p₂ − p₁)²`

   - p₁ = baseline rate (from a benchmark you cite), p₂ = the smallest lift worth acting on.
   - Default to 95% confidence, two-sided (z_α = 1.96) and 80% power (z_β = 0.84). If you relax this, say so and why.
   - **Several variants:** each pairwise comparison needs this sample, and you should tighten α (divide by the number of comparisons) or accept a higher false-winner risk, stated plainly.
   - Example to calibrate: from a 0.5% to a 0.7% click rate at 95%/80% needs about **23,400 impressions per variant**; at 90% one-sided it is about 13,400. Small differences on small rates need a lot of traffic.
   - **Unit of analysis:** impressions shown repeatedly to the same people are not independent. When the audience is a few hundred accounts, count accounts or people, not impressions, and expect a direction, not a statistically clean winner.
4. **Budget and timeline from the sample size**, not the other way round. If the budget cannot reach the sample size, write that, then either test a bigger difference (fewer, bolder variants) or downgrade the claim to "directional read". Never shrink the maths to fit the budget.
5. **Pre-register the rules** before launch: winner rule (for example "at least X points ahead **and** above the benchmark floor at the end date"), the benchmark floor, the end date, and the **one** allowed extension (how long, decided now). No peeking-based early winners.
6. **Decision table.** One row per outcome, each with an action decided now:

   | Outcome | What I saw | What I do next |
   |---|---|---|
   | Win | winner rule met at the end date | roll the winner to the wider segment; keep the control running to confirm |
   | Lose | every variant clearly below the floor | drop the message; test the next message on the same segment, or revisit the segment if the teaching control did as well |
   | Inconclusive | between the floor and the winner rule | use the one pre-set extension, or change one variable; never declare a winner |
   | Broken | delivery, tracking or audience problem | stop, fix, restart; results so far do not count |

7. **Leading signal and stop rule:** what tells you by the midpoint that the test is alive (delivery, cost per click, reply rate), and what makes you stop early (tracking broken, spend far off plan).
8. **Business outcome**, separate from the test result: what real success looks like (meetings booked, pilot scoped). Label it a **reported outcome**: it shows what happened, not that the message caused it.
9. **Owners and asks:** who runs each part (ads, outreach, sales follow-up) and what you need from them, with dates.

**Output:** hypothesis, design, sample-size working, budget and timeline, pre-registered rules, decision table, leading signal, stop rule, business outcome, owners.

## Step 5. Learn: red-team it, then close the loop
1. **Three hardest questions** a sceptical reader would ask, each answered in two sentences with the evidence line. Typical: "why not the bigger segment?", "what if this is noise?", "what would make you stop?".
2. **Pre-mortem:** "It is the end date and the bet failed. The most likely reason is …". If that reason is not already your weakest link, update the weakest link.
3. **Fit the limit by cutting detail**, never by cutting exclusions, confidence, the inconclusive row or the sample-size working. Move detail to an appendix.
4. **After the test:** add the result to the evidence log as a new **Shows** line, update confidence, and rerun Step 3 if the result changed the weakest link. That is what makes it a loop.

**Output:** the three questions and answers, the pre-mortem, and (after the test) the updated evidence log.

---

## Output template
```
# Market bet: <product> in <market>

## The bet in three sentences
<Segment and trigger. Buyer and message. Confidence and weakest link.>

## Brief
- Deliverables:
- Limits:
- Judged on:
- Goal: <measurable, dated>
- Not evidence:
- Connectors available: <list, or "none: web search only">

## Evidence
Customer pattern: <groups, counts, win rates with denominators, or "no customer data">
| # | Source type | Finding | Shows / Assumes | Link or connector + filters | Accessed |
Trigger funnel: A → B → C → D (with % and denominators)
Disconfirm: <what I searched for against my view, what I found>
Missing: <what I could not check, and the effect>

## Choice
Rubric (fixed before scoring; weights and why):
| Segment | Problem now | Reason to act | Can pay | Reachable | Right to win | Total | Proof |
Pick: <segment>, because <deciding criterion>. Runner-up: <segment>, out because <reason>.
Buyer: <role, owns, asked to>   Trigger: <sentence>
Message: Headline / Proof line / Why now / Alternatives / Claims to avoid
Exclusions: - <who, why, evidence>   Near-miss: <who, why out>
Confidence: segment <H/M/L, why> · buyer <...> · message <...>
Weakest link: <...>

## Test
Hypothesis:
Design: <variants, control, teaching control, audience per cell, budget per cell, end date>
Sample size: <formula inputs, result per variant, comparisons, unit of analysis>
Budget and timeline:
Pre-registered rules: <winner rule, floor, end date, one extension>
| Outcome | What I saw | What I do next |   (Win / Lose / Inconclusive / Broken)
Leading signal: <...>   Stop rule: <...>
Business outcome (reported, not attributed):
Owners and asks:

## Red team
1. Q → A (evidence #)
2. Q → A
3. Q → A
Pre-mortem:

## Gaps
- [MISSING: ...]

## Sources
- <link, accessed date>
```

**Two-page version:** page 1 = the bet in three sentences, the funnel, the scored table, message, exclusions and confidence. Page 2 = hypothesis, design, sample-size line, decision table and business outcome. Everything else goes to an appendix.

## Quality checks
- [ ] The goal is measurable and dated; every limit in the brief is met.
- [ ] "Not evidence", the source types, the searches, the rubric weights and the winner rule were all written down **before** the results they apply to.
- [ ] Own customer data was used first, or its absence is stated.
- [ ] Connectors used are listed in the brief box; credits were approved before spending; nothing was written to any tool.
- [ ] Every finding is tagged Shows or Assumes, with a link (or connector and filters) and an access date.
- [ ] Every percentage has its denominator.
- [ ] A disconfirm search was run and its result recorded.
- [ ] At least three segments were scored; every score cites proof.
- [ ] Exactly one bet; rejected segments appear only as rejects with a reason.
- [ ] The message traces to product facts; nothing from "claims to avoid" appears.
- [ ] Exclusions and a near-miss are named, with evidence.
- [ ] Confidence is given per part with the definitions above, and the test targets the weakest link.
- [ ] The sample size shows its inputs, the number of comparisons and the unit of analysis.
- [ ] The decision table has Win, Lose, Inconclusive and Broken rows, each with an action.
- [ ] The business outcome is labelled reported, not caused.
- [ ] Three hard questions, a pre-mortem and owners are present.
- [ ] Nobody was contacted, nothing was posted or sent, no gated data was used, no contact data sits in the shared document.

## Common mistakes
- **Choosing the segment, then collecting evidence for it.** Fix the searches and rubric first.
- **Scoring without proof.** A 4 with no source is a guess with a number on it.
- **Blending confidence.** "High on buyer, low on message" tells you what to test. "Medium overall" tells you nothing.
- **Mistaking the loudest audience for the buyer.** Check who is actually speaking in the community you read.
- **A test the budget cannot power.** Say "directional" or test a bolder difference; do not quietly call a 3-click gap a winner.
- **No inconclusive row.** Most small tests end there. Without a pre-agreed action, people pick the winner they like.
- **Extending a test because it is close.** Allow one extension, decided before launch.
- **Cutting the weak parts to fit the page.** Cut detail instead. The weak parts are what the reader needs to see.

## Worked example (fictional, for illustration only)
**Product:** a scheduling and dispatch tool for small field-service firms. **Brief:** first focused segment in the UK; about £3,000; 6 weeks; public sources; 2 pages. **Goal:** 15 booked demos from firms of 5 to 50 staff within 6 weeks.

- **Own customers:** 22 current customers (fictional). 14 of 22 are heating and plumbing firms; their win rate is 9 of 20 deals vs 5 of 31 elsewhere. Small numbers, so tagged **Assumes**, but it points the search.
- **Connectors:** CRM for the deal export; a company-data tool to count UK trade firms by size (credits approved first). Without them: a customer list from the founder and public trade directories.
- **Trigger:** "A firm hiring a dispatcher or scheduling coordinator has outgrown spreadsheets and phone calls."
- **Funnel (fictional):** 600 job ads collected → 140 truly a dispatch or scheduling role (23%) → 55 at trade firms (39% of 140) → 30 at firms of 5 to 50 staff (55% of 55).
- **Candidates scored:** heating and plumbing, electrical contractors, cleaning services, pest control. Heating and plumbing wins on **reason to act** (seasonal demand peaks before winter); cleaning services scores higher on problem now but lower on can pay.
- **Message:** Headline "Stop losing winter call-outs to a full whiteboard." Proof line: "Jobs reach the engineer's phone in one tap." Claims to avoid: "fewer missed jobs" until a customer can confirm it.
- **Exclusions:** firms under 5 staff (owner schedules on their phone, no budget line); national chains (multi-site procurement, long cycles). Near-miss: electrical contractors (same pain, weaker deadline).
- **Confidence:** segment medium (one source type), buyer high (named in the ads), message low (untested). Weakest link: the message.
- **Test:** two headlines vs. control on paid social to the segment, plus the winning headline shown to cleaning services as the teaching control. Baseline click rate 0.8%, smallest useful lift to 1.3%: about 6,500 impressions per variant at 95%/80%, within budget. Winner rule, floor, end date and one 1-week extension fixed before launch. Inconclusive → run the one extension, then swap the weaker headline.

## Why this works
A focus decision is a choice under uncertainty, so it should be checked, not just trusted. Writing the limits, the rubric, the exclusions and the inconclusive row **before** the work starts is what separates a bet from a plan. It lets a reader disagree with one specific line instead of rejecting the whole thing, and it stops the author fitting the evidence to the answer they wanted.
