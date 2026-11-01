---
name: icp-discovery-job-ads
description: Find and rank ideal customer profiles from public job ads. Use when no ICP exists yet or an existing ICP needs checking, and the product is bought by someone who is hiring for a role the product supports (a buying trigger).
---

# ICP discovery from job ads

## When to use
- There is no ICP yet (discover), or there is one and I need to test it (validate and sharpen).
- The buyer's problem is big enough that firms hire a person to own it. Job ads then reveal who has the problem, how big the firm is, and what the buyer is told to do.
- Not for products where nobody is hired for the problem. Use forum-voice-of-customer instead.

## Inputs
- Product file: description, audience, claims.
- The request brief: region, industry hunch (if any), firm size limits (if any).
- Optional: an existing ICP guess to test.

## Method
1. **Name the trigger.** Write one sentence: "A firm that is hiring for <role> has <problem> now." The trigger decides the search terms. Do not search for the product's own name.
2. **Fix the searches before looking at results.** Choose three to five short keyword searches that describe the role in the buyer's words (the job, not the product). Fix the region, the time window (90 days is a good default) and the site. Write them in the asset exactly, so someone else can re-run them. Do not change them after seeing results. Public job boards are read-only: no applying, saving, following or messaging.
3. **Collect.** For each search, page through results to a fixed depth (for example five pages). Record: search, company, title, link, date. Keep the raw lists in `docs/` or paste the counts in the asset. Count everything you collected.
4. **Build the funnel.** Filter in steps and record the count after each: all postings; postings that are truly about the trigger role (drop recruiters, vendors, consultancies, business roles, duplicates); postings in the target industry; postings from firms inside the size limit. Show the counts as one line: `A postings -> B role fits -> C in industry -> D right size`. Show each percentage with its denominator.
5. **Read in full.** Open at least 10 ads (or all if fewer) and note what the ad asks the person to do and the words it uses for the problem. Quote under 15 words per quote, with a link. Count how many ads name each value theme (for example spend control, policy and audit, proving value, data location, model choice). This tells me which problem the buyer is told to solve.
6. **Compare segments.** If the data allows, compare industries side by side (for example finance vs tech). State which segment has the problem more often and which has a reason to buy more (regulation, size). Mark what is observed and what is inferred.
7. **Tier the accounts.** Score each firm 1 to 5 on: fit with the trigger, a named problem in the ad, size inside the limit, a reachable buyer role, and a reason to act now. Tier 1 = a short list for one-to-one outreach (about 5 to 10). Tier 2 = look-alikes for scaled outreach. Tier 3 = a different segment kept only for a test control. Show the scores.
8. **Write the exclusions.** Say who I am not targeting and why (too large, too small, wrong buyer, no trigger). Name one case that does not fit cleanly and keep it only if I can explain why.
9. **State confidence.** For the bet, give high, medium or low with the reason. Name the weakest link and one cheap test that would settle it.

## Output template
```
# ICP discovery: <product or topic>

## Summary
<Three sentences: the segment, the buyer, the trigger, and my confidence.>

## Trigger
<One sentence.>

## Searches (fixed before looking)
| # | Search terms | Region | Window | Site | Date run |

## Funnel
<A -> B -> C -> D with counts and percentages.>

## What the ads say
**Observed:** <value themes with counts, e.g. "5 of 15 ads name spend limits", short quotes with links>
**Inferred:** <what this suggests>

## Segment comparison
<Table of segments with counts. Observed vs inferred.>

## Tiered accounts
| Tier | Company | Score (1-5 per criterion) | Why | Link to ad |

## Exclusions
- <who, why>

## Confidence and weakest link
<High/medium/low, why, what would change my mind, one test.>

## Open items
- **[add: ...]**

## Sources
- <link or file, access date>
```

## Quality checks
- [ ] Searches are written down exactly and were not changed after seeing results.
- [ ] Every funnel step has a count and a denominator.
- [ ] At least 10 ads were read in full, or all of them, and the number is stated.
- [ ] Each quote is under 15 words and has a link.
- [ ] Observed and inferred are labelled apart.
- [ ] Tier scoring is shown, not just the tier.
- [ ] Exclusions and confidence are present.
- [ ] No firm is called a customer or a target of outreach without a link to its ad.
- [ ] Nobody was contacted and no login-only data was used.

## Worked example (Kimchi, Oct 2026; example only)
Four LinkedIn searches, UK and EU, 90 days, gave 998 postings. Of those, 73 were AI-rollout roles. 21 of the 73 (29%) were at finance firms. 11 of those firms had 5,000 staff or fewer. Of 15 ads read in full, 11 named governance or policy and 5 named spend limits. That made "control" the value that appeared most. Seven firms went to tier 1 and about 300 look-alikes to tier 2. Source: `docs/kimchi/finance-size-check.md`.

## Why a PMM does this
A PMM must say who the product is for, and show why. Job ads are public, dated and written by the buyer's own company. They tell me who has the problem right now, which is better than a guess. Fixing the searches first stops me picking the results that please me. A short, scored list also makes the next step obvious: who gets a custom message, and who gets a generic one.
