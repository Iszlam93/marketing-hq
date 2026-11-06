# Step 4: Test design

**The question:** how do I test the bet with a small budget, and know what to do with any result?

Most small tests end with an unclear result. Then people pick the version they like and call it the winner. This file stops that: you decide the size, the rules and every next step **before** the test starts.

## Steps
1. **Write the hypothesis in one sentence,** aimed at the weakest link from Step 3: "If I tell `<group>` `<message>`, then at least `<threshold>` will `<act>`, measured by `<metric>`."
2. **Change one thing only.** Two or three versions plus one control. Same audience, same budget, same dates. More versions need much more traffic.
3. **Add a teaching control:** show the same message to a group you left out. Now you learn whether the group mattered, or only the words.
4. **Pick a metric you can read in time.** Clicks or replies, not leads or meetings: in a short test there are too few leads to tell two messages apart. Show the arithmetic if you rely on this (for example, 70 clicks at a 10% form rate is about 7 leads).
5. **Set a floor:** a published benchmark rate for this channel and audience, with its source. A winner must beat the control **and** the floor; otherwise the best of several weak ads gets called a winner.
6. **Work out the size per version.** For comparing two rates:

   `n ≈ (z1 + z2)² × [p1(1 − p1) + p2(1 − p2)] / (p2 − p1)²`

   - p1 = the baseline rate (from the benchmark), p2 = the smallest improvement worth acting on.
   - Default: 90% confidence (z1 = 1.645) and 80% power (z2 = 0.84). For a high-stakes decision use 95% (z1 = 1.96) and say so.
   - Show the inputs and the result. Turn it into clicks (n × p1) and cost (n ÷ 1,000 × cost per thousand views).
   - Calibration: telling a 0.5% click rate from 0.7% needs about 18,400 views per version at 90%, and about 23,400 at 95%. Small differences on small rates need a lot of traffic.
7. **Count the comparisons.** Each version compared with the control is one comparison, and each one adds a chance of a false winner (at 90%, about 1 − 0.9^m for m comparisons). Write that number down. If it is too high, use fewer versions.
8. **Check the unit.** Views shown again and again to the same people are not independent. With a target list of a few hundred companies, count companies or people, not views, and expect a direction, not a clean winner.
9. **Fit budget and time to the size,** not the other way round. If the budget cannot reach the size, say the result will only be a hint, or test a bigger difference with fewer versions. Never shrink the maths to fit the budget.
10. **Fix the rules before launch:** the winner rule in plain numbers (for example "at least N clicks ahead of the control at equal views, and above the floor"), the end date, and **one** allowed extension (how long, decided now). In the first week or two, check only that ads are delivering and costs are on plan. Never call a winner early.
11. **Write the decision table:**

    | Result | What I saw | What I do next |
    |---|---|---|
    | Works | winner rule met at the end date | use the winner for the whole group; keep the control running to confirm |
    | Fails | every version clearly below the floor | drop the message; test the next one on the same group, or rethink the group if the teaching control did as well |
    | Unclear | between the floor and the winner rule | use the one extension, or change one thing; never declare a winner |
    | Broken | tracking, delivery or audience problem | stop, fix, restart; results so far do not count |

12. **Keep the business result separate.** Meetings booked or pilots agreed are reported results: they show what happened, not that the ad caused it.
13. **Name owners and dates:** who runs the ads, who follows up, who reads the result.

## What to write on the one page
```
Hypothesis: <one sentence>
Design: <versions, control, teaching control, audience, budget per version, end date>
Size: <inputs (p1, p2, confidence, power) → n per version, clicks, cost; comparisons and false-winner chance; unit>
Rules: <winner rule, floor (source), end date, one extension>
Decision table: Works / Fails / Unclear / Broken
Early check: <what you watch in week 1 to 2, and what makes you stop>
Business result (reported, not caused): <...>
Owners: <who, what, when>
```

## Checks
- [ ] One thing changes; there is a named control and a teaching control.
- [ ] The floor is stated with a source.
- [ ] The size working shows inputs, confidence and power.
- [ ] The number of comparisons and the false-winner chance are written down.
- [ ] Rules and the one extension were fixed before launch.
- [ ] All four rows of the decision table have an action.
- [ ] No claim that the ad caused the business result.

## Example (fictional)
Two headlines plus a control, on paid social, to heating and plumbing firms of 5 to 50 staff. Teaching control: the leading headline shown to cleaning firms. Baseline click rate 0.8% (benchmark, cited); the smallest useful lift is to 1.3%. At 90% confidence and 80% power that needs about 5,100 views per version (about 41 clicks), within budget. Two comparisons, so about a 19% chance that one looks like a winner by luck. Unclear → run the one-week extension, then swap the weaker headline.
