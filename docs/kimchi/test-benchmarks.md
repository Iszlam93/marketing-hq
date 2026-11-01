# Kimchi LinkedIn test: benchmarks and budget worked example

Compiled 2026-10-24 from public web sources only. Every number below has a source and date. Where a source was only seen in a search-result summary (page not opened), it is marked "snippet only". Where I calculated something, it is marked "my calculation".

Reading guide: almost all LinkedIn cost benchmarks are published by agencies and software vendors, in USD, and mostly not split by industry or region. Treat them as planning ranges, not facts. The only way to get real numbers is the first 1 to 2 weeks of your own spend.

---

## 1. Benchmarks table

| Metric | Value / range | Audience / region | Source | Date |
|---|---|---|---|---|
| CTR, all formats | UK 0.55%; US 0.52%; Netherlands 0.72% (medians) | B2B, 29 countries, 211 companies, 161,256 ads, $5.5M spend, pulled from Campaign Manager | [ZenABM benchmarks](https://zenabm.com/blog/linkedin-ads-benchmarks-2026) | 2026-02-16 |
| CPC | UK $9.16; US $8.99; Netherlands $6.40 (medians) | Same dataset | ZenABM (above) | 2026-02-16 |
| CPM | UK $56.62; US $62.67; Netherlands $50.08 (medians) | Same dataset | ZenABM (above) | 2026-02-16 |
| CTR / CPC / CPM by format | Single image: 0.42% / $13.23 / $59.15. Document ads: 0.43% CTR. Thought Leader ads: 2.68% / $2.29 / $49.37. Video: 0.24% / $15.61 / $38.94 | Same dataset, all countries | ZenABM (above) | 2026-02-16 |
| CTR and CPC over time | CTR 0.82% (Q1) to 0.96% (Q3); CPC $10.48 (Q1) to $15.72 (Q3) | 70+ B2B SaaS, $28M spend over 3 years, region not given, data year unclear | [HockeyStack](https://www.hockeystack.com/lab-blog-posts/linkedin-ads-benchmarks) | 2025-12-15 |
| CPL by region | Europe $120 to $150; North America $200 to $250 | B2B, "typical range"; method for CPL not stated | ZenABM (above) | 2026-02-16 |
| Lead gen form completion | About 10% average; 15%+ high performers; forms give 20 to 30% lower CPL than external landing pages | B2B, all regions | ZenABM (above) | 2026-02-16 |
| Lead gen form conversion (finance) | 6 to 10%, about double landing pages | FinTech, global; cited from CloselyHQ 2025 | [Web Tonic FinTech stats](https://www.webtonic.io/blog/fintech-linkedin-ads-statistics) (secondary) | updated 2026-10-09 |
| Finance CPC | $7 to $15 (MetadataONE, 64,000 ads); $7.80 to $15.20 (Ryze, no method given) | Financial services / FinTech, global, mostly US | Web Tonic (above), citing those sources | 2026 |
| Finance CPL | $148 to $200 (Ryze, no method given); article's own table says $125 to $300 | Financial services / FinTech, global | Web Tonic (above) | 2026 |
| Finance CTR | 0.35 to 0.52% (Ryze); 0.30 to 0.55% (Stackmatix); 0.74% (Datavinity) | Financial services / FinTech | Web Tonic (above) | 2026 |
| UK CPC in GBP | Technology services targeting IT decision makers £4 to £7; C-suite / director in competitive sectors £15 to £25 | UK | Profiletree (snippet only) | undated |
| Europe SaaS CPC | About €4 to €5 vs $8 to $12 North America; the page itself flags the data as unverified | Europe | Searchlab.nl roundup (snippet only) | 2026 |
| Offer-type conversion | High-commitment offers (demo, meeting) 2 to 5%; low-friction content offers 10 to 15% | B2B, all regions; not clear if landing page or form | ZenABM (above) | 2026-02-16 |
| Generic B2B SaaS landing page | Median 3.8%; top 10% 8 to 15% | B2B SaaS, not dev-tool specific | Unbounce 2025 report via a secondary summary (snippet only) | 2025 |
| Page type | Demo request pages 1.5 to 4%; content pages 0.5 to 2%; self-serve product pages 4 to 10% | B2B SaaS, not dev-tool specific | Secondary summary of 2026 estimates (snippet only) | 2026 |
| Visitor to demo request | Under 1% once a site has more than 25,000 visitors | 100 B2B software sites | Study via a search summary (snippet only) | 2025 |
| Qualified lead to booked meeting | Median 62%; top 10% 78%+; enterprise 70% but 71% disqualified | 1M+ inbound B2B SaaS form submissions | [RevenueHero](https://www.revenuehero.io/blog/demo-form-conversion-benchmarks-for-b2b-saas) | 2026-04-08 |

Dev tools and dev infra: I found no benchmark for gated-content or demo-request rates specific to developer tools or dev infrastructure. The RevenueHero page says plainly it has no developer-tool figures. The generic B2B SaaS numbers above are the closest.

### Other cheap channels (for comparison only)

| Channel | Cost range | Source | Date | Confidence |
|---|---|---|---|---|
| Reddit ads, B2B | CPC $0.50 to $4.00; tech/developer subreddits average about $1.80 (range $1 to $3); CPM $5 to $15 for developer subreddits | Directive Consulting and Benly (snippets only); [GrowthSpree](https://www.growthspreeofficial.com/blogs/developer-ad-channel-benchmarks-2026) for the CPM | 2025 to 2026 | Low. No r/devops-specific data exists in what I found. Reddit reach for UK financial-services leaders is unknown. |
| TLDR newsletter | About $3,500 to $15,000+ per send, depending on placement. TLDR publishes no price list. | GrowthSpree (above); Product Hunt comparison guide gave $6K to $24K for top slot, snippet only | 2026-09-26 | Low. Third-party. Request the media kit. |
| Niche developer newsletters | About $100 to $2,000 per placement; dev-tool CPMs $35 to $150 | GrowthSpree (above) | 2026-09-26 | Low. |
| Pragmatic Engineer newsletter | Not available. The author states the newsletter takes no sponsorships. | [Pragmatic Engineer sponsor page](https://blog.pragmaticengineer.com/sponsor/) | undated | High. Drop it from the options. |
| Cold email outbound | Reply rate about 3.4% to 5.8%; meetings about 1 to 2 per 100 emails sent; SaaS often under 3% reply. No cost-per-meeting found. | Belkins 2024 (16.5M emails) and Instantly 2026, both via snippet from [Digital Bloom](https://thedigitalbloom.com/learn/cold-outbound-reply-rate-benchmarks/) | 2024 to 2026 | Medium on rates, none on cost. |

Note on comparability: GrowthSpree is an agency page that says it contains "no original data" and calls its figures "planning ranges to validate with a test".

---

## 2. LinkedIn official rules

| Rule | Value | Link |
|---|---|---|
| Minimum audience size | 300 member accounts per ad set | [Audience size help](https://www.linkedin.com/help/lms/answer/a423690) |
| Recommended audience size | At least 50,000 to drive results; at least 300,000 for Sponsored Content and Sponsored Messaging; text ads 60,000 to 400,000. LinkedIn adds there is no one-size-fits-all figure. | Same page |
| EEA / Switzerland note | Matched Audience size may be limited because only members who opt in are matched | Same page |
| Minimum daily budget | $10 for any ad format | [Maximize your budget](https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget) |
| Minimum lifetime budget | $100 for a new campaign; after launch, $10 times scheduled days | Same page |
| Default daily budget | $25 for new advertisers; $50 to $100 suggested for existing USD advertisers | Same page |
| Spend overrun | Daily spend can run up to 50% above the daily budget; weekly spend capped at 7 times daily | [Campaign and ad set budgets](https://www.linkedin.com/help/linkedin/answer/a422101) |
| Minimum schedule | 7 days | [Campaign setup best practices](https://www.linkedin.com/help/linkedin/answer/a422123) |
| Creatives per ad set | At least 4 recommended | Same page |
| Targeting | At least 4 attributes in INCLUDE; set up 48 hours before start to allow ad review | Same page |
| Learning phase | None of the LinkedIn pages I opened mention a learning phase or give a duration. The "50 conversions a month" figure that circulates comes from third-party blogs and is unverified. | n/a |
| Longer budget guidance | LinkedIn's website-visits guide suggests about $100 a day and at least 4 weeks (seen in a search snippet, not opened) | [LinkedIn CX hub](https://business.linkedin.com/marketing-solutions/cx/24/09/customer-success-hub/website-visits) |

### LinkedIn A/B test feature

| Rule | Value | Link |
|---|---|---|
| Duration | Minimum 2 weeks, maximum 90 days. Results first appear 2 days after start. "Let both campaigns run for at least two weeks." | [Create an A/B test (ad variable)](https://www.linkedin.com/help/lms/answer/a1376579); [LinkedIn blog](https://www.linkedin.com/business/marketing/blog/linkedin-ads/how-to-create-an-a-b-testing-strategy-for-your-linkedin-ads) |
| How a result is called | "Duplicate winner" button appears = clear winner. Without it the result is directional or inconclusive; you can extend by 2 weeks. No numeric threshold is given on the help page. | [Review results](https://www.linkedin.com/help/lms/answer/a1449372) |
| Confidence level | The API lets you set 51 to 99%; LinkedIn recommends at least 90% | [A/B Testing API docs](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/experimentation/ab-testing/ab-testing?view=li-lms-2025-01) (page updated 2025-10-16) |
| Test setup | Creates two ad sets; equal audiences and budgets; test one variable; budgets proportional to traffic weights | API docs (above) |
| Recommended budget | API warning text: "increasing your test budget to $5,000" improves the chance of a conclusive result | API docs (above) |
| Recommended duration | API warning text: "at least 3 weeks" | API docs (above) |
| Audience requirement | API error text: each variant must have an audience of at least 1,000,000 | API docs (above) |
| Things that bias the test | Audience Expansion on; campaign group dynamic budget optimization on; unequal budgets; pausing longer than 1 week | API docs; [Pause an A/B test](https://www.linkedin.com/help/lms/answer/a1465053) (snippet) |
| Guarantee | LinkedIn does not guarantee a conclusive result | [LinkedIn testing page](https://business.linkedin.com/marketing-solutions/testing) |

Important for Kimchi: the 1,000,000-per-variant audience requirement is in the API documentation. It may not apply identically in the Campaign Manager screens (the help pages I opened state no audience minimum), but if it does, the native A/B test tool will be blocked for a niche audience of platform / AI leads at UK and EU financial firms. Verify this in Campaign Manager before planning around the tool. The fallback is to run the angles as separate ad sets with equal budgets and the same targeting, and compare them yourself.

---

## 3. A/B test sample size guidance

Official: nothing numeric beyond "2 weeks minimum", "3 weeks recommended", "90% confidence", and "$5,000 test budget" (above).

Practitioner rules of thumb (weak sources):

- [B2Linked](https://b2linked.com/blog/a-guide-to-proper-a-b-testing-strategy-on-linkedin-ads): test two variants; change one variable; its example uses about 10,000 impressions per ad; with 100 impressions per ad "the next 100 impressions could drastically change" the result. No numeric rule on clicks or budget. Up to 4 ads by duplicating each variant once; frequency caps at 5 in 48 hours.
- I found no source with a firm "N clicks per variant" rule that I could verify. Do not treat any such number you see elsewhere as established.

My calculation (standard two-proportion sample size, 90% confidence, 80% power; z = 1.645 and 0.84, so (z1+z2)^2 = 6.18):

- To tell a 0.55% CTR (UK median) from 0.80% CTR (a 45% relative lift): n = 6.18 x (0.0055x0.9945 + 0.008x0.992) / (0.0025)^2 = 6.18 x 0.013406 / 0.00000625 = about 13,300 impressions per variant (about 73 clicks).
- To tell 0.55% from 0.70% (a 27% lift): n = 6.18 x 0.012421 / 0.00000225 = about 34,100 impressions per variant (about 190 clicks).
- Smaller differences than that need much more spend. Lead-level differences (form fills, demo requests) need far more: at 73 clicks a variant and a 10% form rate you get about 7 leads, which cannot separate two angles.

So: judge angles on CTR and cost per click; treat leads as a sanity check only.

---

## 4. Worked example: 4 audience groups x 3 angles

### Assumptions (marked A)

- A1. Cells = 4 groups x 3 angles = 12 ad sets, one creative per angle per group (LinkedIn recommends 4 creatives per ad set; you would deviate on purpose to keep one variable).
- A2. CPM = $56.62 (UK median, ZenABM). Range tested: $45 to $95 (finance range seen in snippet; low confidence).
- A3. CTR = 0.55% (UK median). Cross-check: CPC implied = 56.62 / (0.0055 x 1000) = $10.29, close to the reported UK $9.16 median.
- A4. Readout metric is CTR / CPC, at 90% confidence, able to detect 0.55% vs 0.80% (see section 3): 13,300 impressions per cell.
- A5. Landing step: lead gen form at 6 to 10% completion, or an external gated page at 0.5 to 2% (content) or 1.5 to 4% (demo).
- A6. Audience is large enough to absorb about 13,300 impressions per cell over 3 weeks (frequency of a few per person). Audience sizes for these titles are unknown (see section 5). If a cell has well under about 5,000 reachable people, this will not hold.
- A7. Cost-per-click blended UK / EU. EU likely lower (Netherlands $6.40) but only one EU country is in the data.

### Step 1: impressions per cell
13,300 (from section 3).

### Step 2: cost per cell
13,300 / 1,000 x $56.62 = **$753** (round to $750).
Range: $45 CPM = $599; $95 CPM = $1,264.

### Step 3: cost for all 12 cells
12 x $753 = **$9,036**. Range: $7,190 to $15,170.
Clicks: 12 x 73 = 876 clicks. Implied average CPC = 9,036 / 876 = $10.31.

### Step 4: duration and daily budget
LinkedIn minimum for an A/B test is 2 weeks and the API recommends 3. Use 3 weeks = 21 days.
Daily budget = 9,036 / 21 = $430 across all cells, about $36 per cell per day. This clears the $10 per day minimum comfortably.
Add budget headroom: LinkedIn can overspend a day by 50%, but it caps weekly spend at 7x daily, so pacing is safe.

### Step 5: calendar
- Week 0: build, audience checks, ad review (LinkedIn recommends 48 hours before start; allow 5 working days).
- Weeks 1 to 3: run. Do not pause for more than 1 week; no edits other than budget or end date.
- Week 4: wait a few days after end, because LinkedIn says results can keep shifting after the end date. Read results.
- **Total: about 5 weeks from start of build to readout, 3 weeks of spend.**

### Step 6: what leads you can expect (not a readout, a sanity check)
- Form at 6 to 10%: 876 x 0.06 = 53 leads; 876 x 0.10 = 88 leads. CPL = 9,036 / 88 = $103 to 9,036 / 53 = $170. Sits at or above the Europe $120 to $150 range, which is reasonable.
- External content page at 0.5 to 2%: 4 to 18 leads, CPL $500 to $2,260.
- Demo request page at 1.5 to 4%: 13 to 35 requests, cost per request $258 to $695.
- Per cell that is 0 to 7 leads. Not enough to compare angles by leads.

### Three budget options

| Option | Design | Impressions | Cost at $56.62 CPM | Weeks of spend | What you can read |
|---|---|---|---|---|---|
| Lean | 3 angles on one combined audience (all 4 groups merged), 3 ad sets | 13,300 each = 39,900 | 39,900 / 1000 x 56.62 = **$2,259** | 2 to 3 | Which angle has better CTR. No group read. |
| Hybrid | 12 cells, pooled by angle | 5,000 per cell = 60,000 | 60,000 / 1000 x 56.62 = **$3,397** | 3 | Angle winner (20,000 impressions per angle, can detect roughly 0.55% vs 0.90%, my approximation). Group read is directional only. |
| Full | 12 cells each at readable size | 159,600 | **$9,036** (range $7.2k to $15.2k) | 3 | Angle and group CTR differences of about 45% or more. |

Recommendation from the arithmetic (my judgement, not a benchmark): start with Hybrid at about $3.4k, then spend the remaining part of the Full budget on the winning angle in the groups that look best. Reaching the Full design from the start only makes sense if audiences are big enough.

### Suggested success and kill criteria (proposals, derived from the numbers above, not from a source)

- Kill an ad set if, after 5,000 impressions, CTR is under 0.30% (the bottom of the finance range) or CPC is above $20 (above the highest finance figure seen, $15.20).
- Healthy: CTR 0.45% or higher and CPC under about $12.
- Form completion under 5% or no leads after 100 clicks: fix the offer or form before more spend.
- Decision rule on angle: declare a winner only at 90% confidence on CTR (LinkedIn's own recommendation); otherwise call it directional and extend 2 weeks.

---

## 5. Audience size for platform / AI platform titles in UK/EU financial services

No public data found. Searches returned only old total-member counts (UK 20 million members in 2016, via The Drum) and a 2014 count of 374,711 UK "engineers", which is a different category and a decade old. I did not find any published count for "platform engineering" or "AI platform" titles, in the UK, EU or financial services. Do not guess. Get it from Campaign Manager's audience estimate (it shows audience size as you add job title, seniority, industry and location filters), and record it for each of the 4 groups before committing budget. This matters because LinkedIn recommends at least 50,000 for Sponsored Content, and narrow title plus industry plus company-size cuts may fall well below that, with a hard floor of 300.

---

## 6. Limits and weak spots

- Nearly all benchmarks are vendor or agency content with differing, often unstated methods. ZenABM (211 companies, direct from Campaign Manager) and HockeyStack (70+ companies) are the strongest. Web Tonic and GrowthSpree mostly repackage other vendors' numbers, and Web Tonic's own page contradicts itself on CPL ($125 to $300 vs $125 to $220).
- Region: only the UK, US and Netherlands have country medians. Germany, France and the rest of the EU: nothing found. The UK CPC in GBP (Profiletree) and Europe SaaS CPC (Searchlab) are snippet-only.
- Industry: no clean financial-services-plus-UK/EU benchmark. Finance figures are mostly US or global, and FinTech is not the same as banks and insurers buying a governed AI coding platform. One source's "finance and insurance" CPC of about $3 is probably consumer-oriented and I did not use it.
- Seniority: senior targeting (CTO, VP) costs more than the medians. Profiletree's £15 to £25 for C-suite is snippet-only and unverified.
- Dev-tool landing page and demo-request rates: not found. Generic B2B SaaS numbers used instead. Treat them as an upper bound for a gated-content page.
- HockeyStack's report is dated 2025-12-15 but refers to 2023 and 2024 data, so the data year is unclear; it measures SaaS in general.
- LinkedIn's learning phase: not documented on the pages I opened. The 1,000,000 audience rule for A/B tests comes from API documentation and may not match the UI.
- Newsletter prices are third-party estimates; TLDR publishes no rate card. Pragmatic Engineer takes no newsletter sponsorships.
- Cold outbound: reply and meeting rates only; no cost per meeting found.
- Prices are in USD at 2026 levels; no currency conversion applied. LinkedIn costs have been rising year on year (HockeyStack Q1 to Q3 CPC +50%; one vendor says average CPC rose 8% from 2025 to 2026).
- Sample size calculations in section 3 and the options in section 4 are mine, based on standard formulas and the assumptions listed.
