---
name: launch-plan
description: Build a go-to-market launch plan with phases, owners, channels, assets and success measures, using the 7-step loop (evidence, target, message, test, run, review, scale). Use for gtm-launch requests, after ICP and positioning exist.
---

# Launch plan

## When to use
- A product or a new segment is going to market and a dated plan is needed.
- Positioning (and usually ICP research) is done or in review.
- Not for a single campaign. Use campaign-plan for that.

## Inputs
- Positioning asset and ICP research asset (`dependsOn`).
- Product file.
- Brief: dates, budget, region, team size, constraints.

## Method
1. **Restate the bet** in three lines from the upstream assets: segment, message, why now. Do not change it here. If it looks wrong, flag it in Open items.
2. **Set the launch goal** with a number, a date and a source for the number. Split it into one primary measure and up to three supporting measures. Mark each as target or guess. Do not promise revenue unless the brief gives a base rate.
3. **Lay out the 7-step loop as phases** with dates and gates:
   1. Evidence (done or what is missing)
   2. Target (tiers: who gets one-to-one, who gets scaled, who is the control)
   3. Message (headline, proof, the asset set needed)
   4. Test (link to ab-test-design, with the decision rule)
   5. Run (channels, budget split, cadence, owners)
   6. Review (what is checked each week; the stop and go rule)
   7. Scale (what is scaled if the test wins; what is dropped if not)
4. **Tier the targets.** Tier 1: a small named list for one-to-one work with custom assets. Tier 2: look-alikes with a generic asset. Tier 3: a control group. Use the ICP asset for the lists. Never invent a company name.
5. **List the assets needed** (one-pagers, ads, emails, a landing page) with an owner and a due date. Map each to a content skill (custom-one-pager, email-sequence, content-piece, battlecard).
6. **Budget and timeline.** Show the arithmetic: spend per channel, per week, and cost per expected result. Use public benchmarks with sources, and mark them as planning ranges. Include a check after the first one to two weeks to replace benchmarks with the real numbers.
7. **Risks and dependencies.** Top five, each with a trigger and a response. Include things outside the PMM's control (product gaps, legal, sales readiness).
8. **Decision table.** For each outcome (win, lose, inconclusive) write what happens next. The brief must show a decision for inconclusive.
9. **What I am not doing.** List exclusions and why.

## Output template
```
# Launch plan: <product>, <segment>

## Summary
<Three sentences.>

## The bet (from upstream)
Segment ... Message ... Why now ...

## Goal and measures
| Measure | Target | Status (target/guess) | Source |

## Phases (7-step loop)
| Step | What happens | Dates | Owner | Gate to pass |

## Targets by tier
| Tier | Who (from ICP asset) | Asset | Channel |

## Assets needed
| Asset | Skill | Owner | Due |

## Budget and timeline
<Arithmetic shown. Benchmarks with sources.>

## Risks
| Risk | Trigger | Response |

## Decisions after the test
| Outcome | Next step |
| Win | |
| Lose | |
| Inconclusive | |

## Not doing
## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] The goal has a number, a date and a source for the number, or `**[add: ...]**`.
- [ ] All seven loop steps appear with a gate.
- [ ] Tiers use names from the ICP asset only.
- [ ] Budget arithmetic is shown and benchmarks are cited and flagged as planning ranges.
- [ ] There is a decision for win, lose and inconclusive.
- [ ] Every needed asset has an owner and a skill.
- [ ] No promise of revenue or ROI.
- [ ] Exclusions are listed.

## Worked example (Kimchi, Oct 2026; example only)
Seven weeks and about $5k. Tier 1: seven firms one-to-one. Tier 2: about 300 finance look-alikes. Tier 3: about 300 tech accounts as a control showing one ad. Impact target: three or more technical calls from three firms, and one sponsor who agrees to scope a pilot. Source: `docs/kimchi/HANDOFF.md`.

## Why a PMM does this
A launch is a sequence of bets, not a single event. The PMM owns the plan that connects evidence to message to test to scale, and sales and product rely on it. A written decision for each outcome stops the team from arguing about results after the fact.
