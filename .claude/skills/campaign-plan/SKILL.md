---
name: campaign-plan
description: Turn a logic tree and positioning into a runnable campaign plan with audiences, ads or assets, budget, schedule, KPIs and a review cadence. Use for campaign-plan requests and as the run plan inside a launch.
---

# Campaign plan

## When to use
- A single campaign (a paid test, an ABM push, an email programme) needs a concrete plan.
- A logic tree exists, or the objective is clear enough to write one first.
- Pair it with ab-test-design in the same task whenever more than one message is being compared.

## Inputs
- Logic-tree asset and positioning asset, if present (`dependsOn`).
- The campaign file (`marketing-hq/campaigns/<campaignId>.json`), if the request has a `campaignId`: objective, period, KPIs. Read only.
- Product file; the brief (budget, dates, channels, region).

## Method
1. **Copy the objective and the KPIs.** If a campaign file exists, use its objective, period and KPI names, units and targets exactly. Say which KPI is primary. If none exists, propose one outcome KPI with a target and mark it `**[add: confirm target]**`. The KPI must be something Islam can enter by hand with a source, such as calls booked, replies, pilots scoped.
2. **Define audiences.** From the ICP asset: tier 1, tier 2, control. Give each an estimated reachable size with a source, or mark it unknown. Do not plan a cell whose reachable audience is smaller than the impressions it needs.
3. **Define the cells.** A cell is audience x message. Keep one variable per test. List each cell with its ad or asset, the headline and the call to action. Messages come from the positioning asset only.
4. **Choose channels** that reach the buyer where they already are. Say why each channel, and what is excluded.
5. **Budget.** Show the arithmetic: impressions needed per cell (from ab-test-design) x cost per thousand impressions (benchmark with source) = cost per cell; sum = total. Compare with the brief's budget. If it does not fit, cut cells, not rigour. Mark benchmarks as planning ranges.
6. **Schedule.** A week-by-week table with set-up, launch, check points and close. Include a stop rule (for example stop a cell that spends past a set share with no clicks) and the earliest read-out date. The first one to two weeks replace benchmarks with real numbers.
7. **Leading and lagging measures.** Leading: click-through rate, cost per click, replies. Lagging: calls, pilots. Say which measures decide the test (the leading ones) and which show impact (the lagging ones). Do not call a lagging number a campaign result without the "reported outcome" label and its source.
8. **Roles and approvals.** Who builds assets, who reviews, who presses publish. In this system the agent never publishes; Islam does.
9. **Risks and what is not in scope.**
10. **Review cadence.** What is reviewed weekly, who decides, and what happens on win, lose or inconclusive (copy from ab-test-design).

## Output template
```
# Campaign plan: <name>

## Summary
<Three sentences.>

## Objective and KPIs
| KPI | Unit | Target | Baseline | Primary | Source |

## Audiences
| Audience | Tier | Size (source) | Notes |

## Cells (audience x message)
| Cell | Audience | Message / asset | CTA | Variable under test |

## Channels and why
## Budget
<Arithmetic table. Benchmarks with sources.>

## Schedule
| Week | Action | Check |

## Stop and review rules
## Roles
## Risks and out of scope
## Decisions per outcome
(See ab-test-design.)
## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] KPIs match the campaign file when one exists; exactly one is primary.
- [ ] Each cell has one variable, a message from the positioning asset, and a reachable audience.
- [ ] Budget arithmetic is shown, benchmarks are cited and labelled as ranges.
- [ ] The schedule has a first-check week and a read-out date.
- [ ] A stop rule exists.
- [ ] Decisions per outcome include inconclusive.
- [ ] No outcome is described as caused by the campaign.

## Worked example (Kimchi, Oct 2026; example only)
About $5k over seven weeks; four ads (a control, a cost-per-PR ad, a security ad, and the control shown to a tech audience); three tiers; 15,400 impressions per ad. Impact KPI: three or more technical calls from three firms, plus one sponsor agreeing to scope a pilot. Source: `docs/kimchi/HANDOFF.md`, `docs/kimchi/test-benchmarks.md`.

## Why a PMM does this
A campaign plan is where strategy meets money and a calendar. A PMM who can show the arithmetic is trusted with budget. Writing the review rule before launch protects against two common errors: stopping early because a number looks good, and running on because a number looks bad.
