---
name: market-bet
description: Turn a vague go-to-market brief into one defensible bet (segment, buyer, trigger, message) and an executable test with a decision for win, lose and inconclusive. Use for any "who should we go after and how do we prove it" request, a new market or product with no ICP, a senior PMM case study, or a take-home with a page limit. It runs the loop brief, listen, narrow, count and calls the other skills as sub-steps.
---

# Market bet

## When to use
- The ask is open: "find us a segment", "where should we focus", "build a GTM plan for X", "what would you test first".
- There is a product and a goal, but no agreed segment, message or test.
- I must defend the choice to someone sceptical (a leader, a panel, a board), often under a page or time limit.
- Not for: a single asset (use custom-one-pager or battlecard), an already-chosen segment that only needs copy (use positioning), or reporting results (use impact-report).

## The loop
**Brief, listen, narrow, count.** Each step has an output that the next step needs. If a step has no output, I stop and fix it before moving on.

## Inputs
- The brief or request text, word for word.
- Product file (`marketing-hq/products/<id>.md`): what it is, approved claims, claims to avoid.
- Hard limits: pages, hours, budget, regions, sources allowed.
- Optional: any existing ICP, positioning, or data.

## Method

### 1. Brief: read it like a contract
1. Copy the ask into a short list: **deliverables** (what must exist), **limits** (pages, hours, budget, region, public sources only), **judged on** (what a reader will score). If the brief says "one bet", I give one bet.
2. Write the goal as one measurable sentence ("book 3 technical calls from 3 firms in 7 weeks"), or write `**[add: goal]**` and propose one. A bet without a goal cannot be tested.
3. Write **Not evidence**: things I may mention but the bet must not rest on (my own experience, a private conversation, a competitor's claim about itself). Declare this before I collect anything.

### 2. Listen: collect evidence before forming a view
1. Set the **source classes** I will check, and fix them before looking: buyer behaviour (job ads, hiring, spend), buyer voice (forums, reviews, public threads), vendor claims (product pages, pricing, docs), market and regulation (analysts, rules), competitors (messaging, ads), the product's own community. Skip a class only with a reason.
2. For each class, run the matching skill instead of improvising:
   - hiring signals: **icp-discovery-job-ads**
   - buyer words and objections: **forum-voice-of-customer**
   - competitor claims and gaps: **competitive-research**
3. Log every finding on one line as **Shows** (what the source says, with link and date) or **Assumes** (my inference). Vendor pages are the vendor's claim, not fact.
4. Run a **disconfirm pass**: search once for evidence that my emerging view is wrong. Write what I found, including "found nothing, searched X and Y".
5. Write **What is missing**: what I could not check and how that limits the bet.

### 3. Narrow: choose, and show the rejects
1. List 3 to 5 candidate segments (industry, size, region, role). Do not stop at the first one.
2. Score each on the same fixed rubric, 1 to 5, scores shown: **has the problem now** (a trigger I can see), **can pay** (size, budget line), **reason to act** (rule, deadline, incident), **reachable** (a named buyer role I can find), **fit with what the product does today**. Add a **proof** column: the count behind the score, with denominator.
3. Show the **funnel** as one line with counts and percentages: `A observed -> B truly on trigger -> C in segment -> D right size`.
4. Pick **one** segment. Write why it beat the next best in one sentence, and name the single score that decided it.
5. Write the **buyer** (role, what they own, what they are told to do), the **trigger** ("a firm hiring for X has problem Y now") and the **message**: run **positioning** for this one segment, then write a headline a buyer would recognise as their own problem.
6. Write **Exclusions**: who I am not going after and why (each with evidence). Name one near-miss and why it is out.
7. Write **confidence**: high, medium or low for segment, buyer and message separately, with the reason and the **weakest link**. A single blended confidence hides the weak part.

### 4. Count: make it a test, not a plan
1. State the **hypothesis** in one sentence: "If I say M to segment S, then outcome O, measured by K."
2. Design the comparison with **ab-test-design**: variants, control, audience size, sample size per comparison, benchmark floor, winner rule. Show the arithmetic and every assumption (baseline rate, minimum difference, confidence level).
3. Add a **control that teaches**: the same message to a segment I excluded, so I learn whether the segment mattered or only the message.
4. Set **budget and timeline** that match the sample size. If the budget cannot reach the sample size, say so and shrink the claim, not the maths.
5. Write the **decision table**, one row per outcome. Inconclusive is a real row with a real action:

   | Outcome | What I saw | What I do next |
   |---|---|---|
   | Win | rule met | scale to tier 2, keep the control running |
   | Lose | clear loss against the floor | drop the message, test the next message on the same segment |
   | Inconclusive | between the floor and the rule | extend by a fixed time or change one variable, never declare a winner |

6. Set the **leading signal** that tells me by the midpoint whether the test is alive (for example cost per click, reply rate), and a **stop rule** for a broken test.
7. Write the **business outcome** separately from the test result: what a real success looks like (calls booked, pilot scoped), labelled as **reported outcome**, not proof that the message caused it.

### 5. Red team (before I hand it over)
1. Write the **three hardest questions** a sceptical reader would ask, then answer each in two sentences with the evidence line. Typical ones: "why not the bigger segment", "what if the numbers are noise", "what would make you stop".
2. Run a **pre-mortem**: "it is week 7 and the bet failed; the most likely reason is ...". Put the top reason into the weakest link.
3. If there is a page or time limit, cut to fit by dropping detail, never by dropping an exclusion, a confidence line or an inconclusive row. Move detail to an appendix.

## Output template
```
# Market bet: <product> for <region or market>

## The bet in three sentences
<Segment. Buyer and trigger. Message. Confidence.>

## Brief
- Deliverables: ...
- Limits: ...
- Judged on: ...
- Goal: <one measurable sentence>
- Not evidence: ...

## Evidence (listen)
| Source class | What I checked | Shows | Assumes | Link, date |
**Disconfirm pass:** <what I looked for, what I found>
**What is missing:** ...

## Choice (narrow)
Funnel: A -> B -> C -> D (with %)
| Candidate segment | Problem now | Can pay | Reason to act | Reachable | Fit | Proof (count) |
**Pick:** <segment>, because <deciding score>.
**Buyer:** ... **Trigger:** ... **Message:** <headline> + <proof line>
**Exclusions:** - <who, why, evidence>
**Confidence:** segment <H/M/L, why> | buyer <...> | message <...>
**Weakest link:** ...

## Test (count)
Hypothesis: ...
Design: <variants, audience, sample size with working, benchmark floor, winner rule>
Budget and timeline: ...
Leading signal and stop rule: ...
| Outcome | What I saw | What I do next |
Business outcome (reported, not attributed): ...

## Hardest questions
1. Q -> A (evidence line)
2. ...
3. ...

## Pre-mortem
<Most likely reason it fails, and what I would do in week 1 about it.>

## Open items
- **[add: ...]**

## Sources
- <link or file, access date>
```

## Quality checks
- [ ] The goal is one measurable sentence, and the limits from the brief are met.
- [ ] "Not evidence" was written before the evidence.
- [ ] Every finding is labelled Shows or Assumes and has a link and a date.
- [ ] I ran a disconfirm pass and wrote the result.
- [ ] At least three candidate segments were scored with the same rubric and the scores are shown.
- [ ] Every percentage has its denominator.
- [ ] There is exactly one bet. Rejected options appear only as rejects with a reason.
- [ ] Exclusions are named and each has evidence.
- [ ] Confidence is given per part (segment, buyer, message) with a weakest link.
- [ ] The test has a sample size with the working shown and assumptions listed.
- [ ] The decision table has win, lose and inconclusive, each with an action.
- [ ] Business outcome is labelled reported, not proven.
- [ ] Three hard questions and a pre-mortem are present.
- [ ] No claim from "Claims to avoid". No ROI or causation claim. Nothing was contacted, posted or sent.

## Common mistakes
- **Choosing the segment first, then collecting evidence for it.** Fix the searches and the rubric before I look.
- **A funnel with no denominators.** "11 firms" means nothing without "of 73".
- **Blending confidence.** High on the buyer and low on the message is useful. "Medium" overall is not.
- **A test with no inconclusive row.** Most small tests end there. Without a plan, people declare a winner anyway.
- **Treating community noise as the buyer.** A loud public forum may be the audience the company is moving away from. Check who is speaking.
- **Fitting the page limit by cutting the weak parts.** Cut detail, keep the weak parts visible.

## How to start (the short version, for someone new)
1. Write the goal and what I may not use as evidence.
2. Pick the one signal that shows a buyer has the problem today (a job ad, a public complaint, a rule with a date). Fix three searches. Count.
3. Score three segments the same way. Choose one. Write who is out.
4. Write what I would do if the test wins, loses, or says nothing.

## Worked example (illustrative numbers, labelled as examples)
Product: a tool that reports and caps spend on AI coding agents. Goal (example): 3 technical calls from 3 firms in 7 weeks. Trigger: a firm hiring a role to roll out coding agents across engineering. Fixed searches: 4, region and window set. Funnel (example): 1,000 postings -> 70 on trigger (7%) -> 20 in finance (29% of 70) -> 10 inside the size limit. Pick: finance, because it scored highest on "reason to act" (a rule with a deadline), not on size. Excluded: individual developers (price-led, churn when credits stop). Test: three headlines, equal budget, a tech-audience control, winner rule set before launch, with an explicit inconclusive row. Confidence: buyer high (named in the ads), message low (untested), which is why the test targets the message.

## Why a PMM does this
A senior PMM is paid to choose, and to show the choice can be checked. Writing the limits, the exclusions and the inconclusive row before the work starts is what separates a bet from a plan. It lets a leader disagree with one specific step instead of rejecting the whole thing, and it stops me from fitting the evidence to the answer.
