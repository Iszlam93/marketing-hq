# Final check: pages 1–2 (Claude), 28 Oct 2026

Checked against the brief (`brief-text.md`) and the evidence files in `docs/kimchi/`. Every number on pages 1–2 was recomputed.

## Numbers: what checks out
- 998 → 73 jobs; tech 29 (40%), finance 21 (29%), other 23 (31%): matches `finance-size-check.md`.
- Finance vs tech: governance 11/15 = 73% vs 7/17 = 41%; spend 5/15 = 33% vs 6/17 = 35%; value 6/15 = 40% vs 12/17 = 71%; pace incl. weak 9/15 = 60% vs 14/17 = 82%; evaluate tools 7/15 and 8/17. All match `icp-lens1b-tech-vs-finance.md`.
- Dots 6 / 4 / 4 / 3 / 2: match `value-tally.md`. Discord ~1,800 and Gartner $20–100 → $2,000–5,000: match `EVIDENCE.md`.
- Budget: 46,200 impressions × $70 per 1,000 = $3,234; 15,400 × $70 per 1,000 = $1,078; $500 + $120–360 = $620–860; total $4,930–5,170; held back about $2,156. Arithmetic is right.
- 0.55% (UK median CTR) and 10–15% vs 2–5% (offer conversion): match `test-benchmarks.md` (ZenABM, Feb 2026).
- 11 firms: the 11 finance firms of up to 5,000 staff in the 90-day funnel (11 of 18, 61%).

## Must fix before sending (in priority order)

1. **"None limits it before" is wrong as a product statement.** Claude Code, Copilot and Devin all have spend limits; Devin shipped limits that rise automatically "up to a ceiling admins set" on 19 Oct. Product and engineering leaders will know this. What holds is the *messaging*: their ads talk about spend after it happens. Reword in step 3 and the gap line: "In their ads, they all talk about spend after it happens. None leads with limits set before the work runs."
2. **Footer says "Full links in the appendix", but the appendix has no sources list.** Either add a short sources section (appendix E) or change it to "Sources listed on request".
3. **"Time: __ hours" is still blank, and both headers say "Draft".** Fill in the hours; remove "Draft".
4. **The tile "73% of finance firms have 1,000+ staff" fights the segment "up to 5,000 staff".** That 73% comes from the 15 ads read in full, which include big banks (Barclays, Nordea, LSEG) that the bet excludes. Replace it with the funnel number that matches the segment: "11 of 18 finance firms hiring are up to 5,000 staff (61%)". Those 11 are cell 1, so it also links page 1 to page 2.
5. **The positioning says "Unlike Claude Code or Cursor, it covers the whole team".** Claude Code Teams and Cursor Teams also cover the whole team. The real difference, which an earlier draft had, is "which limit only their own tool". Put it back.

## Should fix (quick)
6. **Lede:** "You set budgets, models and where they run, per team, developer and agent" implies you choose where it runs per agent. Reword: "You set budgets per team, developer and agent, choose the models, and decide where they run, before they start."
7. **"In our cloud or yours" has no caveat on pages 1–2.** Self-hosting needs a Cast AI-connected cluster (docs), and an engineering panel may ask. Add three words to "I used Kimchi": "Own cloud needs Cast AI."
8. **Page 2, step 3, starts with "After 'Compare notes'"** but "Compare notes" isn't explained on the page. Reword: "A 30-minute 'compare notes' call, then a free view of their Claude Code usage…"
9. **Ad C says "Tests the reason Kimchi's one customer quote gives",** but pages 1–2 never show the quote, only "Assumes" mentions it. Reword: "Tests routing, the reason Kimchi's only customer quote gives."
10. **The "18 of 22" region figure comes from the one-month UK, EU and US search,** not the 90-day UK and EU one. Label it "18 of 22 finance ads in a UK, EU and US search".

## Brief fit
All required parts are there: one segment, a positioning statement, a primary message, evidence with shows/assumes/confidence, exclusions (segments, claims, channels) with what brings them back, one test with channel, 3 angles, targeting, budget, timeline, success and stop rules, a decision per outcome including inconclusive, and AI use. Missing: the actual hours. The 7-week length is fine; the brief asks for a test, not a 4-week limit.

## Risk to prepare for in the room
Devin's 19 Oct post says a blanket usage cap is "a hiring freeze in disguise". A panelist could say "limits set before" sounds like that. Answer: "Not one company cap: limits per team, developer and agent, set before the work runs, and smart budgets next."

## Verdict
Strong evidence chain and honest confidence. The two fixes that matter most are #1 (an engineering panel will catch it) and #4 (the size tile contradicts the segment). All ten fixes take about 20 minutes together.
