---
name: where-to-start
description: For the moment a product marketer is asked "where do we start?", "who should we go after first?" or "pipeline is flat, who do we focus on?" and there is no agreed answer. Walks them in 5 steps from that open question to one chosen customer group, the facts behind it, who is left out, and a small test with a decision for every result. Use for a new product, a new market, a stalled pipeline or a choice between several segments. Works with web search alone; uses CRM, prospecting, company-data and web connectors when they are connected. Not for writing a single asset or reporting results.
license: MIT
---

# Where to start

**The moment:** your manager, founder or sales leader asks "where do we start?" or "who should we go after first?". You have little time, a small budget, and no agreed answer.

**What this skill does:** it helps you pick **one** customer group to go after first, and check you were right with a small test.

**What you get at the end:** one page that says who to go after, why (with facts), who is left out, how to test it, and what to do with each result. The template is in `reference/one-page-output.md`.

## The 5 steps

| Step | In plain words | Detail lives in |
|---|---|---|
| 1. Write down the question | What were you asked, what is the goal, what are the limits? | this file |
| 2. Look at the facts | Who already buys, who has the problem now, what buyers say, what competitors claim | `research/` (4 files) |
| 3. Pick one group | Compare 3 to 4 groups the same way, choose one, say who is out | this file |
| 4. Test it | A small test, with what to do if it works, fails or is unclear, decided before you start | `test/test-design.md` |
| 5. Learn and adjust | Add the result to your facts, then keep or change the group | this file |

Do the steps in order. Each step ends with something the next step needs. Open a file in `research/` or `test/` only when you reach that step.

---

## Step 1. Write down the question
1. **The ask:** what must exist at the end, by when, judged by whom.
2. **The goal**, as one measurable sentence with a date. Example: "15 sales meetings in 6 weeks." If there is no goal, propose one and mark it `[PROPOSED]`.
3. **The limits:** time, budget, region, and which sources you may use.
4. **Not evidence:** things you may mention but must not rely on, such as your own opinion, one anecdote, or a competitor's claim about itself. Write this before you collect anything.
5. **Your tools:** which connectors are available (see "Connectors" below), and whether the user can share customer data. Ask once; do not wait on it.

**Done when:** the question, goal, limits, "not evidence" list and tools are written down.

## Step 2. Look at the facts
Write down which of the four research jobs you will do **before** you start. Skip one only with a reason. Do them in this order:

| Order | Research job | The question it answers | File |
|---|---|---|---|
| a | Your customers | Who already buys from us, and who do we lose to? | `research/your-customers.md` |
| b | Buying signals | Which companies show the problem **right now**? | `research/buying-signals.md` |
| c | Buyer voice | What do buyers say about the problem, in their words? | `research/buyer-voice.md` |
| d | Competitors | What do competitors claim, and what does nobody claim? | `research/competitors.md` |

Then two short checks:
- **Argue against yourself.** Write the best case for the group you are leaning **against**, and search once for facts that would prove your favourite wrong. Write down what you found, even "nothing".
- **What is missing.** List what you could not check, and what that means for the decision.

**Done when:** every fact is one line in an evidence log, tagged **Shows** (what the source says, with link or connector and date) or **Assumes** (your inference).

## Step 3. Pick one group
1. **List 3 to 4 possible groups** (industry, company size, region, buyer role). Do not stop at the first good one.
2. **Score each group 1 to 5** on the same five questions. Fix any weighting before you score.

   | Question | What counts as proof |
   |---|---|
   | Do they have the problem **now**? | a count of signals, with "out of how many" |
   | Do they have a reason to act soon? | a deadline, rule, season, incident or budget cycle |
   | Can they pay? | company size, a budget owner |
   | Can we reach the buyer? | a named role, a channel we can use |
   | Can we win today? | what the product does now, or deals we already won in this group |

   Every score cites its proof. A score with no proof counts as 1.
3. **Choose one group.** Say in one sentence why it beat the runner-up, and which question decided it. If two are within one point, pick the one whose weakest score is cheapest to test.
4. **Write the buyer and the trigger.** Buyer: the role, what they own, what they have been asked to do. Trigger: "A company that is `<doing X>` has `<problem>` now."
5. **Write the message:** a headline in the buyer's own words (from Step 2c), one proof line from what the product does today, and why now. List claims you must **not** make yet.
6. **Write who is out**, with a reason for each, and one near-miss and why it lost.
7. **Say how sure you are, separately** for the group, the buyer and the message:
   - **High:** two or more different kinds of source agree, with counts.
   - **Medium:** one kind of source, or fewer than about 10 items.
   - **Low:** your inference only, or the sources disagree.

   The least sure part is your **weakest link**. Step 4 tests it.

**Done when:** one group, the buyer, the trigger, the message, who is out, and how sure you are, are written down.

## Step 4. Test it
Open `test/test-design.md` and follow it. In short:
1. Test the **weakest link** from Step 3, usually the message.
2. Two or three versions, one control, equal budget, a fixed end date.
3. Work out how many people each version must reach **before** you start. If the budget cannot reach it, say the result will only be a hint, or test a bigger difference.
4. Decide now what you will do if it **works**, **fails**, is **unclear**, or **breaks** (tracking or delivery problems).
5. Keep the business result (meetings, pilots) separate from the test result, and do not claim the ad caused it.

**Done when:** the test plan and the four-row decision table are written down, with owners and dates.

## Step 5. Learn and adjust
1. Before you share: write the three hardest questions a sceptic would ask, and answer each in two sentences with a fact from your log.
2. Imagine the test failed. Write the most likely reason. If it is not your weakest link, update the weakest link.
3. After the test: add the result to your evidence log as a new **Shows** line, update how sure you are, and redo Step 3 if the result changed the picture.

**Done when:** the questions, the "if it failed" note and, after the test, the updated log are written down.

---

## Rules for every step
- **Your own data first, then public sources.** Never log in to data you were not given, scrape against a site's rules, or contact people for this research.
- **Shows or Assumes on every fact.** A company's own website only shows what the company claims.
- **Decide the rules before you look:** the searches, the scoring, the test's winner rule. Changing them after seeing results means choosing the answer.
- **Always give "out of how many".** "11 firms" means nothing without "of 73".
- **Mark gaps, do not fill them:** write `[MISSING: what, and what would settle it]`.
- **Do not claim cause or return on investment** from a small test.
- **Never send, post or contact anyone.** This skill researches and plans. People act.

## Connectors (optional)
The skill works with web search alone. Each connector makes one step stronger. If one is missing, fall back and note the gap; never stall.

| Connector type | Examples | Helps with |
|---|---|---|
| CRM | HubSpot, Salesforce | 2a: won and lost deals |
| Product analytics | Amplitude, Fullstory | 2a: who actually uses the product |
| Prospecting and company data | Apollo.io, ZoomInfo, Crunchbase, Clay | 2b and 3: job postings, hiring and funding signals, company counts |
| Search and web data | Semrush, Ahrefs, Similarweb | 2c and 2d: search demand, competitor traffic |
| Web extraction | Firecrawl | 2d: reading competitor sites in bulk |
| Docs and notes | Notion, Google Drive, Microsoft 365 | all steps: one shared place for the log and the page |

- **Ask before spending credits.** Many data tools charge per lookup. Estimate the cost and get an OK.
- **Read only.** Never create, change or delete records in any tool.
- **Personal data stays out** of the shared page. Use company-level data; follow the user's data rules (for example GDPR in the EU).
- **Record the source of every number**, for example "CRM export, 6 Nov" or "Apollo search, filters X, 6 Nov".

## What comes after
This skill ends with one chosen group and a test. The next moments are "who exactly is the customer?" (a full profile and account list) and "how do I get leads from them?". Hand over the outputs of Steps 3 and 4.

## Why this works
The question "where do we start?" is a choice under uncertainty. Writing down the goal, the scoring, who is out and what you will do with each test result **before** the work starts turns a guess into a bet someone can check. A sceptical reader can disagree with one line instead of rejecting the whole thing.
