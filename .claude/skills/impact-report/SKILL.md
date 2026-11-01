---
name: impact-report
description: Report a campaign's reported outcomes against target with sources, gaps and next decisions, without claiming attribution. Use for impact-report requests when a campaign file holds KPI entries.
---

# Impact report

## When to use
- A campaign has a period, KPIs with targets, and entries Islam recorded with a source.
- A review is due and a decision is needed: continue, change or stop.
- Not for forecasting. Not for proving that the campaign caused a result.

## Inputs
- `marketing-hq/campaigns/<campaignId>.json`: `objective`, `period`, `kpis[]` (target, baseline, entries with `asOf`, `actual`, `source`, `note`), `results[]`.
- Other assets for this campaign: campaign plan, test design, positioning (found through requests with the same `campaignId`).
- The product file for context.

## Method
1. **Read the campaign file and list every KPI.** For each: unit, target, baseline (if any), number of entries, newest entry (`asOf`, `actual`, `source`). The "actual" is the newest entry by `asOf`. Mark the primary KPI.
2. **Check completeness.** A KPI with no entry, no source, or an `asOf` outside or well after the period is flagged. Do not fill gaps with estimates. Write `**[add: actual for <KPI>, as of <date>, with source]**`.
3. **Calculate.** For each KPI: percent of target = actual / target; change from baseline = actual - baseline (and percent, if baseline is non-zero). Show the sum in a visible form. Round sensibly. If a KPI is "lower is better", say so and calculate with that in mind.
4. **Look at the trend** if there are three or more entries: direction and size of change between first and last, and the dates. With fewer than three, say there is no trend yet.
5. **Compare with the test decisions.** If a test design exists, check the result against its winner rule and its decision for win, lose and inconclusive. Report which outcome applies, or that the data is not enough to say.
6. **Say what the numbers cannot tell.** Name other things that could explain movement (timing, other activity, seasonality, small numbers). Never write "the campaign produced" or "because of the campaign". Use "reported outcome".
7. **List what went well, what did not, and what is unknown**, each tied to a number or an entry.
8. **Recommend next decisions.** Two to four, each with the number that triggers it. For example: "If calls booked reaches N by <date>, extend; if not, stop spend on cell C." Offer a request type for follow-up (for example a positioning change or a test redesign).
9. **Write the summary last**, in three sentences: headline result against target, the biggest caveat, the decision wanted.

## Output template
```
# Impact report: <campaign name>, period <start> to <end>

## Summary
<Three sentences. Use "reported outcome".>

## Reported outcomes
| KPI | Unit | Baseline | Target | Actual | As of | % of target | Change vs baseline | Source |

## Trend
<Direction and size, or "not enough entries yet".>

## Against the test rule
<Which outcome applies and why, or "not enough data".>

## What this cannot tell me
- ...

## What went well / what did not / what is unknown
## Decisions for Islam
| Decision | Trigger number | Date |

## Open items
- **[add: ...]**

## Sources
- Campaign file and each KPI source, with `asOf` dates.
```

## Quality checks
- [ ] Every number comes from a recorded entry and names its source and `asOf` date.
- [ ] Missing data is `**[add: ...]**`, not an estimate.
- [ ] Percent-of-target and change-from-baseline are shown with the working.
- [ ] The words "reported outcome" are used. No claim of cause, ROI or attribution.
- [ ] Alternative explanations are named.
- [ ] Comparison with the test decision rule is stated or marked insufficient.
- [ ] Each recommendation has a trigger number.
- [ ] The campaign file was not edited.

## Worked example (Kimchi, Oct 2026; example only)
The campaign's impact target was three or more technical calls from three firms, and one sponsor agreeing to scope a pilot. A report would show calls booked against 3 and firms against 3, each with a recorded source, then say that small counts cannot separate message effects from timing. Source: `docs/kimchi/HANDOFF.md`.

## Why a PMM does this
PMMs are judged on outcomes but rarely control all causes. A report that is clear about what was reported, and what cannot be said, is more useful than one that claims credit. It also turns the numbers into decisions: the PMM's real job after a launch is to say what to do next.
