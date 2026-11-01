---
name: forum-voice-of-customer
description: Collect and code what buyers say about a problem in public forums such as Reddit and Hacker News. Use when positioning or messaging needs the buyer's own words, pains and objections, or to check whether job-ad themes match what practitioners say.
---

# Forum voice of customer

## When to use
- A positioning or message request needs real wording, not the team's guess.
- I need to check which pain is loudest, and which objections a buyer raises.
- A research request asks "what do people say about X".

Not a replacement for interviews. It shows what is said in public, by people who post.

## Inputs
- Product file (what it does, audience, claims to avoid).
- The brief: the problem area, the buyer role, any competitors named.
- Optional: job-ad themes from an icp-discovery-job-ads asset to cross-check.

## Method
1. **Define the question** in one line: "What do <buyer role> say about <problem>?" List 3 to 6 themes to code before reading (for example cost surprise, policy and audit, proof of value, data location, lock-in, trust in output). Add new themes while reading, but mark them as added.
2. **Choose the places.** Reddit (relevant subreddits) and Hacker News, plus one or two others if the problem lives elsewhere. Use public pages and public search only. No accounts, no posting, no voting, no DMs.
3. **Fix the searches.** Write 4 to 8 queries with the buyer's words, not the product's. Record each query, place, date and sort order. Read the top results by relevance and by recency.
4. **Select threads.** Take 10 to 20 threads. Prefer threads where the author is the buyer role (a lead, platform owner, manager) over individual users. Skip threads that are promotions or obvious ads. Record how many you screened and how many you kept.
5. **Extract.** For each thread, note: link, date, score or comment count, who is speaking (role, if stated), and 1 to 3 short quotes (under 15 words each). Tag each with a theme. Note the exact words used for the problem. Those words are the raw material for messages.
6. **Count honestly.** Count the number of threads that show each theme and the number of distinct speakers. Report "N of M threads", never "customers say". Mark a theme weak if it appears in fewer than three threads.
7. **Separate voices.** Buyers (decide and pay), users (do the work) and onlookers. Do not mix their counts.
8. **Find the objections.** List what people say against the category or against the product type. These become the "answer this first" list for positioning.
9. **Cross-check.** If job-ad themes are available, compare in a small table: themes in both, only in ads, only in forums. A theme in both is stronger evidence.
10. **Conclude.** Say which pain is loudest and which words to reuse. State confidence and what the sample cannot show (people who do not post).

## Output template
```
# Voice of customer: <topic>

## Summary
<Three sentences: the loudest pain, the words used, my confidence.>

## Question and method
<The question, themes, places, queries with date, threads screened/kept.>

## What people say
| Theme | Threads (N of M) | Speakers | Strength | Example quote (link) |

## Words to reuse
- "<short phrase>" (link): <the problem it names>

## Objections
- <objection>: <threads>, <what it means for the message>

## Cross-check with other evidence
<Table or "none available".>

## Limits
<Who is missing; weak themes; sample size.>

## Open items
- **[add: ...]**

## Sources
- <thread title, URL, date, access date>
```

## Quality checks
- [ ] Queries and dates are recorded; screened vs kept counts are given.
- [ ] 10 or more threads, or the shortfall is stated.
- [ ] Every quote is under 15 words, has a link, and is word-for-word.
- [ ] Counts are "N of M threads", with no "customers say" claims.
- [ ] Buyer, user and onlooker voices are separated.
- [ ] Themes with fewer than three threads are marked weak.
- [ ] Observed and inferred are labelled.
- [ ] Usernames are not collected beyond what is visible in a link. No contact was made.

## Worked example (Kimchi, Oct 2026; example only)
Reddit and Hacker News threads from engineering leaders showed the same story: cost surprise ("a bill doubling", a few thousand dollars unnoticed in a week) and rollout without controls ("code generation scaled faster than the controls"). Individual developers argued about price and model choice. Separating the two voices mattered: leaders asked for limits and policy, users for cheaper credits. Source: `docs/kimchi/EVIDENCE.md`, `docs/kimchi/value-tally.md`.

## Why a PMM does this
A PMM translates between the market and the product team. The best messages reuse the words buyers already say, so listening comes before writing. Counting how many threads show a theme keeps me honest about how loud a pain really is. Separating buyers from users stops me writing for the wrong person.
