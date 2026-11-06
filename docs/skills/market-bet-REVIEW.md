# market-bet skill: review before open-sourcing

Reviewed 6 Nov 2026 against three questions: would a senior PMM trust it? Is the statistics advice right? Can a stranger use it straight from GitHub, with nothing private in it?

**Verdict on v1: not ready.** **v2 (rewritten in this pass): ready to publish**, once the licence and repo name are agreed (see the end).

## Must-fix findings (all fixed in v2)

| # | Finding | Why it mattered | Fix |
|---|---|---|---|
| 1 | **The worked example was the take-home in disguise.** It used an AI-coding spend tool, finance as the segment, "individual developers churn when credits stop", and a funnel of 1,000 → 70 → 20 → 10 (29%), close to the real 998 → 73 → 21 → 11. | Interview material must not be published, and anyone who saw the submission would recognise it. | Replaced with a fictional field-service scheduling example: a different product, market, segment and numbers. |
| 2 | **The same leak was in the posts.** Post 1's funnel, Post 2's "15,000 views" (the real plan had 15,400 impressions) and Post 3's "spend limits in 5 of 15" (the real count) were all real take-home figures. | The same issue, but in public posts. | Replaced with neutral example numbers in the drafts file and on the Notion cards. |
| 3 | **Post 2's sample size was wrong as stated.** "About 15,000 views to spot 0.5% → 0.7%" holds only at 90% one-sided. At the usual 95% two-sided with 80% power, it is about 23,400. | A statistics post with an unstated, loose assumption invites the wrong kind of comment. | The post now says about 23,000 and shows its assumptions. The skill shows both figures. |
| 4 | **It wasn't standalone.** It called 5 sibling skills that won't ship with it (icp-discovery-job-ads, forum-voice-of-customer, competitive-research, positioning, ab-test-design) and a private path (`marketing-hq/products/<id>.md`). | A stranger hits dead ends at Steps 2 to 4. | Each sub-step now has its compact method built in. "Product facts" is a plain input. |
| 5 | **No sample-size method.** v1 said "show the arithmetic" but gave none. | Users would skip it or get it wrong. | Added the formula, default settings, a calibration example, the multiple-comparisons rule and the unit-of-analysis warning (repeated impressions to a few hundred accounts are not independent). |
| 6 | **"Extend if inconclusive" was a peeking problem.** Extending because a result is close inflates the chance of a false winner. | This is the classic way small tests produce fake winners. | The one extension is now set before launch. Added a "Broken" row and a no-early-winner rule. |
| 7 | **Confidence levels were undefined.** High, medium and low meant whatever the author felt. | Unverifiable. | Defined: High = 2+ independent source types agree, with counts. Medium = one type or under about 10 items. Low = inference only, or sources disagree. |
| 8 | **The rubric had no weighting rule or proof rule.** | Scores could be tuned after the fact. | Weights are fixed before scoring. Every score cites proof, and a score without proof counts as 1. Added "Right to win" (what the product does today). |
| 9 | **The disconfirm step was weak** ("search once"). | It was easy to skip. | Now: write the strongest case for the segment I'm leaning against, and search for evidence against my favoured view. |
| 10 | **It was called a loop but nothing looped back.** | Results never updated the bet. | Added Step 5, Learn: test results go back into the evidence log as Shows lines, update confidence, and Step 3 is rerun. |
| 11 | **The description named "a take-home with a page limit".** | It signals the origin and narrows triggering. | Rewritten around the real job: an open GTM focus question. |

## Should-fix findings (also done)
- Added **Owners and asks**. A senior reader asks who runs what, and a bet nobody owns doesn't run.
- Added **ethics rules**: public sources only, no gated data, no contacting people.
- Added a **two-page version** that maps the template to a page limit.
- Added **buyer-voice hygiene**: check who is actually speaking before treating a community as the buyer.
- The message now has five parts: headline, proof line, why now, alternatives, claims to avoid. Each must trace back to product facts.

## Left as is, on purpose
- **First-person voice ("I")** in examples. It reads as a practitioner's method, which fits the brand.
- **British spelling.** It's consistent throughout.
- **Length (about 250 lines).** It's long, but each section has one job, and the two-page version keeps the output short.

## Internal compatibility
- The Strategy agent still has `market-bet` assigned, and its own `**[add: ...]**` gap marker still applies. The skill now says "or your team's own gap marker".
- The private sibling skills are unchanged. **Don't** publish `icp-discovery-job-ads`: its worked example holds real take-home numbers.

## Checks run
- Recomputed every sample size in the skill and posts (normal approximation, two proportions):
  - 0.5% → 0.7% at 95%/80%: 23,402 per variant
  - the same at 90% one-sided: 13,441
  - 0.8% → 1.3% at 95%/80%: 6,520
- Searched the skill and posts for "Kimchi", "Cast AI", "Islam", "take-home", "interview", repo paths and the real take-home figures. None remain in the skill. The posts keep only "Islam" in internal notes, which are not post copy.

## Before publishing (your decisions)
1. **Licence:** MIT (recommended; already set in the front matter) or CC BY 4.0.
2. **Where:** a new public repo, for example `Iszlam93/pmm-skills`, holding `market-bet/SKILL.md`, a README and a LICENSE. Don't make this private repo public: it holds take-home and private material.
3. **README wording:** I'll draft it in your brand voice for your OK.
