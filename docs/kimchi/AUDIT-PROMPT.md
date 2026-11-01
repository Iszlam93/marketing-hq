# Audit prompt for Codex

Paste everything below the line into Codex, with this folder (docs/kimchi) open as the workspace.

---

You are auditing a go-to-market plan for a Senior PMM interview exercise. The plan is in `PLAN.md` in this folder, and the working evidence files sit next to it.

**The brief, as summarised by the author:**
- Pick ONE segment to target first, with a positioning statement and a primary message.
- Show the evidence: public signals, gaps, confidence, citations, what the evidence shows vs what it assumes, and what was excluded and what would bring each exclusion back.
- Design a test: channel, 2–3 message angles, targeting, budget, timeline, success and kill criteria, and a decision per outcome, including an inconclusive one.
- Public sources only, about 4 hours, maximum 2 pages.
- It will be presented to Kimchi's product and engineering leadership.

**Do not edit any files.** Write your audit to `AUDIT-codex.md` in this folder. Check:

1. **Numbers.** Recompute every count and percentage in PLAN.md against the source files:
   - `finance-size-check.md`, `JOB-POSTINGS-ANALYSIS.md` and `tier1-accounts.md`
   - the raw lists in `jobs-raw-90d/`
   - the budget arithmetic against `test-benchmarks.md`

   List each mismatch with the file and line.
2. **Claims vs evidence.** Flag any claim in PLAN.md that its source files don't support, or that overstates them. Pay particular attention to the product claims (`product-walkthrough.md`) and the competitor claims (`competitor-messaging.md`).
3. **Logic.** Check:
   - Does the ICP follow from the evidence?
   - Are the exclusions consistent?
   - Does the test isolate one variable per comparison?
   - Are the success and kill thresholds coherent and measurable at the planned sample sizes, especially the account-level rules with only 7 accounts?
4. **Brief fit.** What does the brief ask for that is missing or weak? What in PLAN.md goes beyond the brief and should be cut from the 2-page version?
5. **Panel risk.** Give the 10 hardest questions a product or engineering leader at Kimchi would ask, and say where the plan is weakest for each one.
6. **Verdict.** Give the top 5 fixes, ranked by impact.

Be specific and terse. Cite file names and line numbers. Don't rewrite the plan.
