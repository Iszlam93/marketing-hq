# Final audit — 28 October 2026

**Verdict:** Plausible bet, but fix the claims, test rules and citations before sending. Scores (1–5): brief fit **3**, evidence **4**, positioning/message **3**, test design **2**, honesty about confidence **3**, seniority **3**.

## Brief fit and claims

- **“Time: __ hours.”** The brief requires actual time spent; this is blank. **Fix:** enter the real number, including research and production time. Keep the two-page claim only if the appendix is clearly optional.
- **“Full links in the appendix.”** The supplied HTML appendix has no source links. The page lists source categories, not citations readers can check. **Fix:** add a compact numbered source list or direct links for the job search, product docs, Gartner, ad library and benchmark claims. The appendix can hold details, but page 1 must point to them accurately.
- **“AI: research agents and drafting; the decisions were mine.”** Appendix B helps. **Fix:** name the human decisions: segment, coding rules, positioning and test. AI summaries of job ads were not checked word-for-word against originals.
- **“Limits set before anyone starts”; “budgets per team, developer and agent”; “cost per PR on day one.”** Kimchi docs support hard stops at org/team/user/API-key level; the author saw settings but did not test a stop with spend. An agent-level budget is inferred from a service key, and PR-cost reporting needs developer setup. **Fix:** say “Set team and developer spend limits before rollout; see billed cost per merged PR once reporting is enabled.” Do not imply a cap on each agent run.
- **“the right model per task, in our cloud or yours”; “Frontier-quality code on every task.”** Routing is documented but quality equivalence is not independently shown. Customer-cloud deployment needs a Cast AI-connected Kubernetes cluster. **Fix:** say “Kimchi routes model requests by task; customer-cloud deployment is available subject to setup.” Change C to “Use frontier models where quality matters; route routine work to lower-cost models.”
- **“a free view of their Claude Code usage per team and model, in a day. Then a 30-day pilot whose credits are a hard Kimchi budget.”** Reporting is documented; this service and credited pilot are not. Community needs the buyer’s key. **Fix:** label these proposed, conditional on product/sales approval and funded credits.
- **“product confirms a per-run cap” / “no per-run cap yet.”** No cap was found, but absence was not confirmed. **Fix:** “Ask product whether per-run caps exist.” Appendix D certificates are at Cast AI Group level; credential injection was not tested firsthand.

## Numbers checked

The 90-day funnel is **998 collected → 109 kept → 73 unique jobs**: tech **29/73=40%**, finance **21/73=29%**, other **23/73=31%**. **18 of 22** UK/EU finance jobs comes from an earlier, separate search. The 11 target firms are **11 of 18** finance companies at ≤5,000 staff. The ~300-firm lists have no sourced inventory or reach estimate.

The 15/17 ad coding supports governance **11/15=73% vs 7/17=41%**; spend **5/15=33% vs 6/17=35%**; value **6/15=40% vs 12/17=71%**; pace **9/15=60% vs 14/17=82%**, **including weak mentions** (strict: 5/15, 8/17). Vendor evaluation: **7/15** finance, **8/17** tech. Size ≥1,000: **11/15=73% vs 4/17=24%**. These include non-coding roles. Taktile changes category between samples.

The value tally supports spend control **6/6**, use control **5/6**, value and model choice **4/6** each, data location **3/6**, price **2/6**. The five dots omit use control; add counts. Discord **~1,800** is no buyer sample; “mostly individuals who left” overgeneralizes. Gartner **$20–100 to $2,000–5,000** is a secondhand forecast.

Budget arithmetic checks: 3×15,400×$70/1,000 = **$3,234**; tech = **$1,078**; plus $620–860 = **$4,932–5,172**. The **$2,150** reserve is outside that total: maximum **$7,082–7,322**. CPM and account costs are assumptions. ZenABM supports **0.55%** UK median CTR and generic-offer **10–15% vs 2–5%**, not this offer’s result; **0.3%** is a proposed stop rule. At 15,400 impressions, **0.55% ≈85 clicks**; 21 more means **≈0.69%**, insufficient alone for a 90%-confidence three-angle win. **Fix:** call it directional; specify a confidence check. Say “impressions,” not “views.”

## Competitive logic and test execution

- **“They all report spend after it happens. None limits it before.”** This contradicts the research: Claude Code, Codex, Copilot and Devin have their own spend/usage limits; Devin added automatically rising limits under an admin ceiling on 19 October. Kilo has admin model/provider rules and prepaid balances. The ad scan saw no *advertised* cross-tool, pre-spend enforcement; truncated ad snippets cannot prove absence. **Fix:** “Incumbents offer controls within their own tools. In the ads reviewed, I did not see a cross-tool, team-level hard-budget story.” Keep A as configurable team/developer control, not blanket caps. Devin’s “blanket cap” argument and Citi proof are direct objections.
- Finance is defensible on governance, but tech supplies more jobs and value/pace language. **“Finance beats tech” is an assumption.** Eight of 11 target firms are under 1,000, while governance skews large. **Fix:** justify small firms’ agent use and budget.
- A (control), B (pace/build), C (routing/cost) test distinct motives. **“only the headline changes, so any difference comes from the message”** ignores delivery and account mix. **Fix:** equal budgets/audiences, mutually exclusive delivery, recorded reach/frequency. “Frontier-quality” is unverified.
- **“If tech responds better than finance”** mixes tech ad-only with finance ad-plus-email. **Fix:** compare A ad-only CTR/form rate; assess outreach separately. Check reach: the 11-firm account-ad cell may miss LinkedIn’s minimum.
- **“40%+ … buy”; “Under 15%”; “3+ technical calls… 2+ teams connect… 1 pilot”; “No calls at all.”** Small samples destabilize percentages; success needs all three buying signals, kill only zero calls. **Fix:** set a response minimum and rule precedence. Three calls without a pilot are inconclusive. **“No clear winner → test a different offer”** is premature when underpowered. Extend for uncertain results; investigate audience/channel if all ads fail. Do not scale from clicks alone.
- **“3 emails”** for every UK/EU firm conflicts with **“Cold email in Germany · strict rules.”** **Fix:** exclude Germany from cold email or specify a compliant channel. “1:1 outreach” also needs owner, contact criteria and the exact sequence to be executable.

## Five hard panel questions

1. **What does Kimchi enforce across Claude Code/Codex versus merely report?** Page conflates them; show the product matrix.
2. **Why buy instead of build on LiteLLM or use Claude’s controls?** Risk identified; no cost/time or security proof yet.
3. **Why finance under 5,000?** Job ads show needs, not buying or reach. Explain the size cut.
4. **Can a bank approve models, hosting and certificates?** Page omits cluster dependency, model origin and group-level certificates.
5. **What result changes the segment or message?** Current thresholds mix clicks and sales. Bring a decision hierarchy.

## Top five edits today

1. Fill actual hours and add working source links.
2. Replace “none limits it before” and soften the blanket-cap copy.
3. Mark free usage view/pilot and per-run cap as proposals or unknowns.
4. Repair the CTR winner rule, reserve total and finance/tech comparison.
5. Tighten the buy/build and no-winner decision branches; exclude German cold email.
