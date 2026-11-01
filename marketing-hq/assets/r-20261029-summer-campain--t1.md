---
id: r-20261029-summer-campain--t1
requestId: r-20261029-summer-campain
taskId: t1
title: LATAM mid-size finance ICPs from public job ads
agentId: research
skillIds: icp-discovery-job-ads
version: 1
status: in_review
notionPageId: 40b265ea-4dd8-8163-99d1-d83e8c71fb00
notionUrl: https://app.notion.com/p/40b265ea4dd8816399d1d83e8c71fb00
updatedAt: 2026-11-01T14:26:30Z
---

# ICP discovery: LATAM mid-size finance (exploratory, small sample)

## Summary
The best-supported segment is Mexican and Brazilian fintech and payments firms of roughly 400 to 1,000 staff. The buyer is the owner of the AI or ML platform, in a firm that is hiring platform or MLOps engineers now. Confidence is low to medium: I read 10 ads and sampled 180 postings from one search term in three countries, so this shows where to look. It does not size the market.

"Mid-size" here means up to 5,000 staff, the same limit as the UK/EU bet (`marketing-hq/products/kimchi.md`). The brief gave no limit. Sizes below are LinkedIn's company-page buckets, read on 2026-11-01.

## Trigger
A firm that is hiring an AI or ML platform engineer has the problem of running AI systems in production under financial regulation and cost pressure now.

## Searches (fixed before looking)
Limits first. Full paging of a job board was not possible. Public LinkedIn country pages show 60 cards and then a "see more" button that needs a login, and I did not log in. So the depth is 60 cards per country, not five pages. Three exploratory web searches (rows E1 to E3) ran before I fixed the list, to test what is reachable. They are not in the funnel.

| # | Search terms | Region | Window | Site | Date run |
|---|---|---|---|---|---|
| S1 | `AI platform engineer`, public page https://br.linkedin.com/jobs/ai-platform-engineer-vagas (first 60 cards) | Brazil | Not filterable. Cards showed 1 day to 7 months old | LinkedIn public jobs page, no login | 2026-11-01 |
| S2 | `AI platform engineer`, https://mx.linkedin.com/jobs/ai-platform-engineer-empleos (first 60 cards) | Mexico | same | same | 2026-11-01 |
| S3 | `AI platform engineer`, https://co.linkedin.com/jobs/ai-platform-engineer-empleos (first 60 cards) | Colombia | same | same | 2026-11-01 |
| E1 | `"AI enablement" OR "AI platform engineer" banco vaga Brasil Itaú OR Bradesco OR Nubank OR BTG` | Brazil | none | Web search | 2026-11-01 |
| E2 | `"AI enablement" OR "AI adoption" engineer job banco OR seguros OR fintech México OR Colombia OR Chile OR Argentina 2026` | Mexico, Colombia, Chile, Argentina | none | Web search | 2026-11-01 |
| E3 | `vaga "plataforma de IA" OR "AI platform" engenheiro banco OR seguradora OR fintech Brasil gupy OR greenhouse OR lever 2026` | Brazil | none | Web search | 2026-11-01 |

Not run: Chile, Argentina, Peru, Uruguay on the job board; the other search terms I would have used (`AI enablement`, `AI adoption`, `developer productivity`, `coding agents`). **[add: run these on a board that allows deeper paging]**

Caveat on method: the card lists and the ad readings came through a fetch tool that summarises pages. I did not check each card by eye. Treat counts as +/- a few cards.

## Funnel
Cards in S1 to S3 only. Template order changed: I filtered by employer first, because judging role fit on 180 cards was not reliable.

`180 cards -> 11 at LATAM finance employers (6.1% of 180) -> 7 truly about the trigger role (63.6% of 11; 3.9% of 180) -> 6 from firms with a verified size up to 5,000 (85.7% of 7; 3.3% of 180)`

Counts behind this:
- By country, finance-employer cards: Mexico 7 of 60 (11.7%), Brazil 3 of 60 (5.0%), Colombia 1 of 60 (1.7%).
- The 11: Konfío 5 (MX), Clara 2 (MX), Itaú 1, EBANX 1, dLocal 1 (BR), Alianza Fiduciaria 1 (CO). 6 firms.
- Role fit, judged on title (and ad where read): Itaú 1, EBANX 1, dLocal 1, Konfío 4 = 7. Dropped: Konfío "AI Engineer" (builder role), Clara x2 (entry-level new-grad builders), Alianza Fiduciaria (data and Azure architect).
- Size verified up to 5,000: Konfío 4, EBANX 1, dLocal 1 = 6 cards, 3 firms. Itaú size not read from a source.
- Not counted as LATAM finance employers: Kraken 4 cards (remote roles in BR and MX; global crypto exchange; AI compute infrastructure), FactSet 2 (data vendor), Solera 1 (insurance software vendor), Mercado Libre 2 (commerce first).
- Three outsourcing firms filled 77 of 180 cards (42.8%): BairesDev 36, FullStack 22, AgileEngine 19.
- Many Konfío cards are near-duplicates posted by one team, so firms matter more than cards.

## What the ads say
Read in full: 10 ads. Eight came from LinkedIn public pages: Itaú (BR), EBANX (BR), dLocal (BR), Konfío x3 (MX), Clara (MX), Alianza Fiduciaria (CO). Two LinkedIn fetches returned HTTP 429 and I did not work around it. For the other two I went to a public ATS board, outside the S1 to S3 funnel and not counted in it: Clara's Greenhouse board, "AI Growth Automation Engineer" and "AI Business Operations Expert" (both Mexico City). Konfío 4474842694 and 4475999334 read as the same text; I count them as 2 ads, one team.

Other pages tried for the extra ads, and why each did not give a new ad:
- EBANX Greenhouse board (https://job-boards.greenhouse.io/ebanx): 40 roles listed, one AI role, the Machine Learning Engineering Specialist. Its text matches the LinkedIn EBANX ad, so it is the same role, not a new ad.
- dLocal Greenhouse board (https://job-boards.greenhouse.io/dlocal): HTTP 404.
- dLocal careers site (https://careers.dlocal.com/): host did not resolve from this session (outside allowed network domains).
- Konfío careers page (https://konfio.mx/carreras): HTTP 402.
- Clara on Lever (https://jobs.lever.co/clara): HTTP 404. Clara's Greenhouse board worked. Its other 11 AI-titled roles are business or growth roles, so I read only the two above.
- I did not try Gupy or any other ATS.

Both added Clara ads are business or growth AI roles, not platform roles. They lift the count to 10 but add little on the trigger. Their posted dates are not shown on the pages.

**Observed (counts are of 10 ads):**
- Security, privacy or regulatory compliance named as a duty: 6 of 10 (Itaú, EBANX, dLocal, Konfío x3). The other four do not ask for it as a duty. Alianza lists regulated-sector experience as desirable only.
- Governance, guardrails or audit named: 3 of 10 (Itaú, dLocal, Konfío 4484856167).
- Cost named as something to track or cut: 5 of 10 (Itaú, dLocal, Konfío x3).
- A hard limit on spend: 0 of 10. Quotas and cost per interaction: 1 of 10 (Konfío 4484856167). One Clara ad points the other way: "maximizing an unlimited token budget".
- Names a model or vendor stack: 7 of 10 (Itaú, Konfío x3, Alianza, and both Clara ads).
- Names a coding agent tool: 1 of 10 (Clara AI Business Operations Expert: "Claude Code/Codex").
- Asks the person to train, enable or elevate others: 6 of 10 (Konfío x2, EBANX, Clara x3). For Clara it is mostly a line about "elevate others" or adoption.
- Data location: 0 of 10.

Short quotes (all from ads I opened, 2026-11-01):
- Itaú: "Garantir governança, compliance e segurança dos modelos, pipelines e dados" (https://br.linkedin.com/jobs/view/analista-de-engenharia-de-machine-learning-senior-at-ita%C3%BA-unibanco-4483044118)
- dLocal: "Set and maintain technical standards for model/data access control" (https://br.linkedin.com/jobs/view/ai-ml-staff-engineer-at-dlocal-4484871031)
- Konfío: "ensure regulatory compliance (CNBV, SOC 2, PCI)" (https://mx.linkedin.com/jobs/view/4474842694)
- Konfío: "cuotas y costo por interacción" (https://mx.linkedin.com/jobs/view/4484856167)
- EBANX: "especially in the financial context" (https://br.linkedin.com/jobs/view/machine-learning-engineering-specialist-at-ebanx-4469255271)
- Clara: "maximizing an unlimited token budget" (https://job-boards.greenhouse.io/clara/jobs/5223307007)

**Inferred:**
- The buyer is told to build the platform and keep it compliant. Control and compliance appear more often than spend limits, which echoes the UK/EU pattern (11 of 15 governance, 5 of 15 limits, `docs/kimchi/value-tally.md`). With 10 ads, this is a hint, not a finding.
- Cost shows as "optimise" and "track", not as a hard cap, and Clara's ad suggests no cap at all. Whether a pre-set limit is a felt need here is open.
- Most platform roles are about building AI products. The UK/EU trigger was rolling out coding agents to developers. Only Konfío mentions enabling autonomous deployments, and only 1 of the 10 (Clara) names a coding agent tool. Fit with a coding-agent product is not shown. **[add: search `coding agents`, `Copilot`, `developer productivity` in LATAM]**

## Segment comparison
| Segment | Cards (of 180) | Observed | Inferred |
|---|---|---|---|
| LATAM finance employers | 11 (6.1%) | 6 firms; 7 cards fit the role | Has the regulation reason to buy (CNBV named once) |
| Outsourcing and staffing (BairesDev, FullStack, AgileEngine) | 77 (42.8%) | Most AI platform cards in LATAM are from them | Not buyers; they are suppliers of engineers |
| Other (other employers, vendors, consultancies) | 92 (51.1%) | Not classified | Not compared by industry; **[add: tech vs finance split]** |
| Compare: UK/EU finance | n/a | 21 of 73 unique jobs (28.8%), `docs/kimchi/finance-size-check.md` | Different method (8 searches, 998 postings); not like for like |

The two numbers (6.1% of cards here vs 28.8% of unique jobs there) cannot be compared directly. Unit, search count and depth differ.

## Tiered accounts
Scores 1 to 5 on: Fit with the trigger / Named problem in the ad / Size inside the limit / Reachable buyer role / Reason to act now. My judgement. Only 3 firms qualify for tier 1, short of the 5 to 10 target.

| Tier | Company (country) | Score (F/P/S/B/N = total) | Why | Link to ad |
|---|---|---|---|---|
| 1 | dLocal (Brazil ad) | 4/5/4/4/5 = 22 | Staff-level platform owner role. Names access control, audit, guardrails, FinOps. LinkedIn bucket 501-1,000 (page also shows 1,401 employees). Ad posted "2 days" ago. Ad's sector field says IT services; the company page says Financial Services. | https://br.linkedin.com/jobs/view/ai-ml-staff-engineer-at-dlocal-4484871031 |
| 1 | Konfío (Mexico) | 4/4/4/3/5 = 20 | At least 5 AI roles in sample, 1 day to 2 months old. Names CNBV compliance, cost, quotas. Bucket 501-1,000 (page also shows about 1,500 employees). Buyer title not shown. | https://mx.linkedin.com/jobs/view/4474842694 ; https://mx.linkedin.com/jobs/view/4484856167 |
| 1 | EBANX (Brazil) | 3/3/4/3/5 = 18 | MLOps role, compliance "in the financial context". Bucket 501-1,000. Posted "1 day" ago. Thinner problem statement. | https://br.linkedin.com/jobs/view/machine-learning-engineering-specialist-at-ebanx-4469255271 |
| 2 | Alianza Fiduciaria (Colombia) | 3/2/3/3/5 = 16 | Financial sector, Azure OpenAI components, regulated-sector experience wanted. Size not verified, scored 3 as a neutral placeholder. | https://co.linkedin.com/jobs/view/4485657951 |
| 2 | Clara (Mexico) | 3/2/5/2/3 = 15 | About 400 staff (the ad says "~400 people"). Ops ad names Claude Code/Codex and an unlimited token budget, a possible coding-agent trigger. No platform owner role seen; roles are growth, ops and new-grad. LinkedIn lists it as technology. | https://mx.linkedin.com/jobs/view/4475074728 ; https://job-boards.greenhouse.io/clara/jobs/5223307007 ; https://job-boards.greenhouse.io/clara/jobs/5224993007 |
| 3 | Itaú Unibanco (Brazil) | 5/5/1/4/5 = 20 | Best statement of the governance problem, but a large bank. Size not read from a source, scored 1 provisionally. Kept as a wording benchmark and test control, not an outreach target. | https://br.linkedin.com/jobs/view/analista-de-engenharia-de-machine-learning-senior-at-ita%C3%BA-unibanco-4483044118 |

Tier 2 look-alikes at scale: **[add: none counted. Needs a wider search of LATAM fintechs and insurers]**.

## Exclusions
- Itaú, other large banks: outside the 5,000 limit (size to verify). Itaú is the case that does not fit cleanly. It matches the trigger best, so I keep it only as tier 3.
- Kraken: global firm with remote roles open to LATAM staff; not a LATAM-based buyer, and its roles are AI compute infrastructure. Its 1,001-5,000 size comes from `docs/kimchi/finance-size-check.md` (24 Oct 2026).
- BairesDev, AgileEngine, FullStack, Modus Create, consultancies and staffing: suppliers, not buyers.
- FactSet, Solera: finance software vendors, not finance firms.
- Banorte and Santander México: seen only in a web-search summary (a Glassdoor listing and a repost of a LinkedIn post). I did not open an ad, so I do not call them targets. Both are likely large. **[add: ad links and sizes]**
- Individual developers: not the buyer (`marketing-hq/products/kimchi.md`).

## Confidence and weakest link
Low to medium. Mexico and Brazil show finance employers hiring platform roles, with 3 verified mid-size firms. The weakest link is the sample: one search term, 60 cards per country, 10 ads read, and no check that these roles are about coding-agent rollout. What would change my mind: a deeper search showing few mid-size finance firms, or ads that never mention developers or agents. One cheap test: run `AI enablement`, `coding agents` and `developer productivity` on the same three country pages, plus Chile, and count finance employers the same way. Then read 10 or more further ads.

## Open items
- **[add: size and a source for Itaú, Alianza Fiduciaria, Banorte, Santander México]**
- **[add: Chile, Argentina, Peru, Uruguay searches]**
- **[add: the remaining 4 search terms; the 90-day window cannot be filtered on public pages]**
- **[add: more platform-role ads. The 10 read include 2 Clara business or growth roles; Konfío 4477318474 returned HTTP 429; EBANX, dLocal, Konfío and Lever pages failed as listed in "What the ads say"]**
- **[add: buyer job title at Konfío and dLocal (ads name the work, not the manager)]**
- **[add: confirm "mid-size" limit with Islam; I used up to 5,000]**
- **[add: Islam's call on timing. Summer in the southern hemisphere is December to February]**
- Sizes: LinkedIn buckets disagree with the headcounts on the same pages (Konfío, dLocal). Both firms are inside 5,000 either way, but this is not checked beyond the page.

## Sources
- LinkedIn public jobs page, Brazil, "AI platform engineer": https://br.linkedin.com/jobs/ai-platform-engineer-vagas (accessed 2026-11-01)
- LinkedIn public jobs page, Mexico: https://mx.linkedin.com/jobs/ai-platform-engineer-empleos (accessed 2026-11-01)
- LinkedIn public jobs page, Colombia: https://co.linkedin.com/jobs/ai-platform-engineer-empleos (accessed 2026-11-01)
- Itaú ad: https://br.linkedin.com/jobs/view/analista-de-engenharia-de-machine-learning-senior-at-ita%C3%BA-unibanco-4483044118 (2026-11-01)
- EBANX ad: https://br.linkedin.com/jobs/view/machine-learning-engineering-specialist-at-ebanx-4469255271 (2026-11-01)
- dLocal ad: https://br.linkedin.com/jobs/view/ai-ml-staff-engineer-at-dlocal-4484871031 (2026-11-01)
- Konfío ads: https://mx.linkedin.com/jobs/view/4474842694 ; https://mx.linkedin.com/jobs/view/4475999334 ; https://mx.linkedin.com/jobs/view/4484856167 (2026-11-01)
- Clara ad: https://mx.linkedin.com/jobs/view/4475074728 (2026-11-01)
- Added ads, outside the S1 to S3 funnel (Clara Greenhouse board): https://job-boards.greenhouse.io/clara/jobs/5224993007 ; https://job-boards.greenhouse.io/clara/jobs/5223307007 ; board index https://job-boards.greenhouse.io/clara (2026-11-01)
- Pages tried that gave no new ad: https://job-boards.greenhouse.io/ebanx ; https://job-boards.greenhouse.io/ebanx/jobs/7566662003 ; https://job-boards.greenhouse.io/dlocal (404) ; https://careers.dlocal.com/ (not resolved) ; https://konfio.mx/carreras (402) ; https://jobs.lever.co/clara (404) (2026-11-01)
- Alianza Fiduciaria ad: https://co.linkedin.com/jobs/view/4485657951 (2026-11-01)
- LinkedIn company pages for size: https://www.linkedin.com/company/konfio/ ; https://www.linkedin.com/company/ebanx/ ; https://www.linkedin.com/company/dlocal/ (2026-11-01)
- Web search summaries E1 to E3 (queries above; snippets only, no pages opened): Glassdoor Mexico listing https://static.glassdoor.com.mx/Job/inf-jobs-SRCH_KO0,3.htm (Banorte, not opened) (2026-11-01)
- Product file: `marketing-hq/products/kimchi.md` (2026-11-01)
- UK/EU comparison: `docs/kimchi/finance-size-check.md`, `docs/kimchi/value-tally.md` (2026-11-01)
- Request: `marketing-hq/requests/r-20261029-summer-campain.json` (2026-11-01)
