---
name: logic-tree
description: Break one business objective into a few branches, each with a measurable goal and a test, so a campaign plan has a clear spine. Use at the start of a campaign plan or when a goal is too big to act on.
---

# Logic tree

## When to use
- A campaign or launch request has a broad objective ("win finance customers", "grow pipeline").
- The team disagrees about where to put effort.
- Before campaign-plan and ab-test-design, so the test answers a real question.

## Inputs
- The request brief and, if present, the campaign file (`objective`, KPIs, period).
- Upstream positioning or research assets.
- The product file.

## Method
1. **State the objective once.** One sentence with a number, a date and a place: "Get <N> <outcome> from <segment> by <date>." If the brief has no number, write the missing part as `**[add: target]**` and still draw the tree.
2. **Split into branches that do not overlap and together cover the goal.** Three to five branches. Test each split: could a result sit in two branches (overlap)? Could the goal be met without any branch (gap)? Typical splits for a go-to-market goal: who (segment), what (message), where (channel), how (offer or step). Pick the split that fits the decision at hand.
3. **Give each branch a measurable goal.** Use a leading number I can read within the campaign period (clicks, replies, calls), not only the final outcome. Mark each number as target, benchmark, or guess, and cite the source for benchmarks.
4. **Name one assumption per branch** that, if false, breaks the branch. Write it as a statement that can be wrong.
5. **Attach one test per branch.** The cheapest action that would show the assumption is false. Link to ab-test-design for any test that compares messages.
6. **Choose where to start.** Rank branches by impact on the objective and by how cheap the test is. State the one branch to test first and why. Name what I am deliberately not doing now.
7. **Draw the loop.** Close the tree with the 7-step loop: evidence, target, message, test, run, review, scale. Say which step each branch is in today.
8. **Check the logic.** Read the tree from the bottom up: if every branch goal is met, is the objective met? If not, add or fix a branch.

## Output template
```
# Logic tree: <objective short>

## Objective
<One sentence with number, date, place.>

## Tree
- **Objective:** ...
  - **Branch 1: <name>**
    - Goal: <number> (<target | benchmark | guess>, source)
    - Assumption: ...
    - Test: ...
  - **Branch 2: ...**
  (3 to 5 branches)

## Why this split
<Two sentences: how it covers the goal without overlap.>

## Start here
**Branch:** ... **Why:** ... **Not now:** ...

## The loop
| Step | Branch status |
| Evidence | |
| Target | |
| Message | |
| Test | |
| Run | |
| Review | |
| Scale | |

## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] The objective has a number, a date and a place, or the gap is marked.
- [ ] Three to five branches; no overlap; no gap.
- [ ] Each branch has a measurable goal with the number's status (target, benchmark or guess).
- [ ] Each branch has a falsifiable assumption and one test.
- [ ] One branch is chosen to start, with a reason.
- [ ] The bottom-up check is written.
- [ ] Sources cite every benchmark.

## Worked example (Kimchi, Oct 2026; example only)
Objective: get to a pilot with a financial-services firm. Four branches: the right segment, the right message, the right channel, the in-role loop. Messages were tested first because the segment was already supported by the job-ad funnel. Source: `docs/kimchi/HANDOFF.md` (logic tree link).

## Why a PMM does this
A PMM is asked for "a plan" long before the goal is clear. A tree turns a vague goal into a few parts that can be tested one at a time. Writing the assumption per branch is the key habit. It shows what I believe without proof, and tells the team what to test first.
