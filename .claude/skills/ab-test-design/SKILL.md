---
name: ab-test-design
description: Design an A/B or multi-ad message test with honest statistics: sample size per pairwise comparison, a benchmark floor, a winner rule, false-winner risk and decisions for win, lose and inconclusive. Use whenever a campaign compares two or more messages.
---

# A/B test design with honest statistics

## When to use
- A campaign will compare messages, audiences or offers.
- A team needs to know how much budget the test needs before it starts.
- Before anyone says "this ad won".

## Inputs
- Campaign plan or logic tree (cells, variable, budget).
- Benchmarks for the metric (cited): click-through rate (CTR), cost per thousand impressions (CPM), cost per click (CPC).
- Brief: budget, duration, number of variants.

## Method
1. **State the question and the single variable.** "Does message B get a higher click-through rate than control A, among <audience>?" Change one thing only. Name the control.
2. **Pick the metric that can be read in time.** Use CTR or CPC to judge messages. Lead and meeting counts are too small in a short test to separate two messages. Treat them as a sanity check only. Show the arithmetic if you claim this (for example, 73 clicks at a 10% form rate is about 7 leads, which cannot separate two angles).
3. **Set the benchmark floor.** A winner must also beat a published benchmark for the audience (for example a median CTR for the region, with source). Without a floor, the best of three weak ads gets called a winner.
4. **Set the minimum effect to detect.** Choose the smallest relative lift worth acting on (for example 45% higher CTR). Smaller lifts need far more spend; say so.
5. **Compute the sample size per variant** with the standard two-proportion formula at 90% confidence and 80% power (z1 = 1.645 for the confidence, z2 = 0.84 for the power, so (z1+z2)^2 = 6.18):
   n per variant = 6.18 x (p1(1-p1) + p2(1-p2)) / (p2 - p1)^2
   where p1 is the baseline CTR and p2 is the CTR with the minimum lift. Show the working. Convert to clicks (n x p) and cost (n / 1000 x CPM).
6. **Count the pairwise comparisons.** With k variants, each compared with the control there are k-1 comparisons, and comparing every pair there are k(k-1)/2. Each comparison needs the sample size above, and each adds a chance of a false winner. Say how many comparisons the design makes. Keep k small (three ads is a good ceiling for a small budget).
7. **State the false-winner risk.** At 90% confidence, each comparison has about a 10% chance that a gap this big happens by luck. With several comparisons the chance that at least one looks like a winner by luck is higher (about 1-(0.9)^m for m independent comparisons). Name this number. If it is too high, cut comparisons or raise the bar.
8. **Write the winner rule in plain numbers.** For example: "A variant wins if it leads the control by at least N clicks at equal impressions, and its CTR is above the benchmark floor." Derive N from the sample size and the baseline. Re-simulate if you can: say how often a real winner of the chosen lift would be caught under this rule (the power in practice).
9. **Fix the stopping rule before launch.** Minimum duration (platform minimum, usually two weeks), the impressions target per variant, and no peeking-based early calls. Check the first one to two weeks only for delivery and cost, not for winners.
10. **Decisions per outcome.** Write what happens on win, lose and inconclusive. Inconclusive is the common one: say what to do (extend, drop the variable, move to a stronger lever), and that it is a valid answer.
11. **Control for the audience.** Show the same control to a second audience (for example a different segment) to learn whether the audience, not the message, explains the result.

## Output template
```
# Test design: <name>

## Question and variable
## Metric and benchmark floor
| Metric | Baseline | Floor | Source |

## Sample size
<Formula, inputs, working, result per variant, clicks, cost.>

## Comparisons and false-winner risk
<k variants, m comparisons, risk number, how reduced.>

## Winner rule (plain numbers)
## Stopping rule
## Decisions after the test
| Outcome | Rule | Next step |
| Win | | |
| Lose | | |
| Inconclusive | | |

## Assumptions
| # | Assumption | Source or "guess" |

## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] One variable and a named control.
- [ ] Metric is CTR or CPC; leads are not used to pick the winner.
- [ ] A benchmark floor is stated and cited.
- [ ] Sample size working is shown with the formula and its inputs; z values are stated.
- [ ] The number of comparisons and the false-winner risk are written down.
- [ ] The winner rule is in plain numbers.
- [ ] Stopping rule is fixed before launch.
- [ ] A decision exists for win, lose and inconclusive.
- [ ] Every assumption is labelled as sourced or guess.
- [ ] No claim of a winner or proof appears; the design says what the test can and cannot show.

## Worked example (Kimchi, Oct 2026; example only)
Baseline UK CTR 0.55% (ZenABM median). To tell 0.55% from 0.80% needs about 13,300 impressions per variant (about 73 clicks) at 90% confidence and 80% power. The submitted test used 15,400 impressions per ad and three ads. The rule: a variant wins if it is about 21 or more clicks ahead and its CTR is above 0.55%. At that rule a real clear winner is caught about two times in three (re-simulated), and the first two weeks only check delivery. Source: `docs/kimchi/test-benchmarks.md`, `docs/kimchi/HANDOFF.md`.

## Why a PMM does this
PMMs are often asked "which message won?" with too little data. A PMM who knows the sample size, the floor and the false-winner risk can say "not yet" or "inconclusive" with reasons, which builds trust. Deciding the rule before the test is what makes the result mean something. It also protects the PMM from the human habit of finding a winner in noise.
