# Finance companies hiring AI-rollout roles: size check (90-day, UK + EU)

Collected 24 Oct 2026 from LinkedIn Jobs (logged-in session, read-only). Purpose: widen the base from the earlier 16-company one-month search and see how finance companies split by LinkedIn company-size bucket.

## 1. Method

**Searches (8).** Four keyword searches, each run for the EU (geoId 91000000) and the UK (geoId 101165590), all with "past 3 months" (f_TPR=r7776000):

1. `AI platform engineer`
2. `AI enablement`
3. `"developer productivity" AI`
4. `coding agents`

**The industry filter could not be applied.** The brief asked for f_I=43,41,42,46,129,45 (finance industries). LinkedIn now redirects /jobs/search/ to its "AI-powered job search" layout (/jobs/search-results/), which silently drops f_I. The banner on the page says "Some filters may no longer be available". The "All filters" panel in the new layout has no Industry filter (it offers Date posted, Easy Apply, Under 10 applicants, In my network, Verified, Experience level, Employment type, Company). The guest search endpoint returned no usable cards. On instruction from the coordinator, the 8 searches were therefore run with **no industry filter**, and each kept company's industry was labelled afterwards from LinkedIn's own "About the company" section on its job page.

**Paging.** The new layout still pages at 25 results per page via `start=0,25,50,75,100`, so 5 pages per search (up to 125 results). Every search returned full pages (one page had 24 cards after de-duplicating card ids). Results are LinkedIn's relevance order, and the new layout mixes in loosely matching roles (LinkedIn's AI search is fuzzy).

**Raw lists.** Saved to `docs/kimchi/jobs-raw-90d/{eu,uk}/<term-slug>.txt` (same format as `jobs-raw/uk/coding-agents.txt`: header line, then `search | company | job title | jobId`).

**Filter.** `filter_jobs.py` run unchanged on each region folder (keeps AI-rollout titles, drops business roles, vendors, consultancies, recruiters and duplicates). The jobId ends up inside the title column; de-duplication below is on company + title (case-insensitive), then across EU and UK.

**Company labels.** For every unique kept company, one of its job pages (`/jobs/view/<id>/`) was opened and the industry and employee-count bucket were read from "About the company". Nothing was clicked (no follow, save or apply). Classification as finance uses LinkedIn's label (Financial Services, Banking, Insurance, Investment Management, Capital Markets, Investment Banking), with judgement calls marked.

## 2. Funnel

| Stage | EU | UK | Total |
|---|---|---|---|
| Postings collected (8 searches x up to 5 pages) | 498 | 500 | 998 |
| Kept after `filter_jobs.py` | 72 | 37 | 109 |
| Unique jobs (company + title, then across regions) | 40 EU only | 28 UK only | 73 (incl. 5 jobs posted in both) |
| Unique companies | 37 EU only | 24 UK only | 67 (6 in both: Optasia, Taktile, ElevenLabs, n8n, FDJ UNITED, IQVIA) |
| of which finance companies (base definition) | 8 EU only (+2 in both) | 8 UK only (+2 in both) | 18 |

Notes on the funnel: 109 kept postings collapse to 73 unique jobs because the same role is posted many times (n8n 11 postings of one title, Kraken 6, ElevenLabs 6, and so on). Five company + title pairs appear in both regions (ElevenLabs, FDJ UNITED, Optasia, Taktile, n8n); each is a separate posting in a different country (for example Optasia Athens and London) and is counted once. Company + title matching also merged "Skin Analytics" with "SKIN ANALYTICS LTD", and merged two bunch titles that differ only in capitalisation. One kept row had LinkedIn's company field mis-parsed (the company shown was the job title); opening the job showed it is Actian. Region = the region of the search that returned the job (location lines on the job pages matched in all pages opened).

## 3. Industry split across all kept companies (67)

LinkedIn's industry labels, grouped. The finance group is the 18 finance companies defined in section 4.

| Group | Companies | % of 67 | Unique jobs | % of 73 |
|---|---|---|---|---|
| Tech / software / IT services | 28 | 41.8% | 29 | 39.7% |
| Finance | 18 | 26.9% | 21 | 28.8% |
| Healthcare / pharma | 7 | 10.4% | 9 | 12.3% |
| Retail / consumer | 5 | 7.5% | 5 | 6.8% |
| Industrial / transport / agri / defence | 5 | 7.5% | 5 | 6.8% |
| Other services (gambling, outsourcing, media, environmental) | 4 | 6.0% | 4 | 5.5% |

For comparison with the earlier one-month run (74 unique jobs: tech 38%, finance 30%): by unique jobs this run gives tech 39.7% and finance 28.8%, so the split is very close.

Grouping rules and judgement calls: "Tech" = Software Development, IT Services and IT Consulting, Information Technology & Services, Technology/Information/Internet, Computer and Network Security, plus ElevenLabs (LinkedIn label "Research Services", an AI company; judgement). The two captive IT arms (Allianz Technology, Commerzbank Digital Technology Centre Bulgaria) are in Tech here because LinkedIn labels them IT Services; see section 4 for the sensitivity. Riskified (LinkedIn: Software Development; e-commerce fraud prevention) is counted as Tech, not finance (borderline fintech, judgement).

## 4. Finance companies: unique list (18)

Finance = LinkedIn label Financial Services, Banking or Insurance (17 companies), plus Shine (1 judgement call, below). Size = LinkedIn's bucket as shown on the company section of the job page.

| Company | Region | LinkedIn industry | LinkedIn size | Job title(s) kept | Job URL |
|---|---|---|---|---|---|
| 9fin | UK | Financial Services | 501-1,000 | AI Engineering Lead, GenAI Platform; Senior AI Platform Engineer | https://www.linkedin.com/jobs/view/4471519627/ |
| Accelerant | UK | Insurance | 501-1,000 | AI Platform Engineer | https://www.linkedin.com/jobs/view/4475234570/ |
| Ayvens | EU | Financial Services | 10,001+ | Experienced AI adoption Lead | https://www.linkedin.com/jobs/view/4471755942/ |
| Barclays | UK | Financial Services | 10,001+ | AI Platform Engineer | https://www.linkedin.com/jobs/view/4468595728/ |
| Bloomberg | UK | Financial Services | 10,001+ | AI Enablement Lead, External Relations; Senior GenAI Platform Engineer - Artificial Intelligence | https://www.linkedin.com/jobs/view/4452864024/ |
| bunch | EU | Financial Services | 51-200 | Senior Applied AI Engineer, AI Platform; Senior Applied AI Engineer, AI Platform (f/m/d) | https://www.linkedin.com/jobs/view/4468219494/ |
| If Insurance | EU | Insurance | 10,001+ | AI Productivity Lead | https://www.linkedin.com/jobs/view/4473335625/ |
| Invesco | UK | Financial Services | 5,001-10,000 | Principal AI Platform Infrastructure Engineer | https://www.linkedin.com/jobs/view/4458528141/ |
| JPMorganChase | UK | Financial Services | 10,001+ | Strategy Senior Associate - AI Enablement: Solutions & Client Enablement | https://www.linkedin.com/jobs/view/4418477986/ |
| Kraken | EU | Financial Services | 1,001-5,000 | AI Platform Engineer, Enablement and Governance Operations | https://www.linkedin.com/jobs/view/4467546957/ |
| LSEG | EU | Financial Services | 10,001+ | Senior Manager, AI Productivity | https://www.linkedin.com/jobs/view/4401473242/ |
| Macro Hive | UK | Financial Services | 11-50 | AI Platform Engineer | https://www.linkedin.com/jobs/view/4464875479/ |
| National Wealth Fund | UK | Banking | 201-500 | AI Enablement & Product Manager | https://www.linkedin.com/jobs/view/4477806936/ |
| Optasia | EU + UK | Financial Services | 201-500 | AI Enablement & Adoption Lead | https://www.linkedin.com/jobs/view/4468603190/ |
| Raisin | EU | Financial Services | 501-1,000 | AI Platform Engineer (m/f/d) | https://www.linkedin.com/jobs/view/4475234224/ |
| Shine | EU | Information Technology & Services | 1,001-5,000 | Head of AI Enablement (CEO Office) | https://www.linkedin.com/jobs/view/4463048973/ |
| SIX | EU | Financial Services | 1,001-5,000 | AI Solutions Lead - Development Tools (Claude Code) | https://www.linkedin.com/jobs/view/4479849435/ |
| Taktile | EU + UK | Financial Services | 201-500 | Senior AI Enablement Engineer | https://www.linkedin.com/jobs/view/4474311519/ |

**Judgement call, counted as finance:** Shine. LinkedIn labels it "Information Technology & Services", but its own About text describes a "financial copilot" for 1 million+ European entrepreneurs combining invoicing, accounting, banking, payroll and financing (a clear fintech).

**Judgement call, NOT counted in the 18 (captive tech arms of finance groups).** LinkedIn labels both IT Services and IT Consulting, and the employer on the posting is the tech subsidiary, not the bank or insurer:

| Company | Region | LinkedIn industry | LinkedIn size | Job title(s) kept | Job URL |
|---|---|---|---|---|---|
| Allianz Technology | EU | IT Services and IT Consulting | 10,001+ | AI Platform Engineer | https://www.linkedin.com/jobs/view/4480981045/ |
| Commerzbank Digital Technology Centre Bulgaria | EU | IT Services and IT Consulting | 501-1,000 | AI Enablement & Agent Engineering Specialist | https://www.linkedin.com/jobs/view/4463432735/ |

Including these two would give 20 finance-linked companies (sensitivity figures in section 5).

### Non-finance companies (47 of the 67; excluded)

Includes the industry-filter leakage that the no-filter run exposes (software, pharma, retail, and so on). LinkedIn's own label shown.

| Company | Region | LinkedIn industry | LinkedIn size | Job title(s) kept | Job URL |
|---|---|---|---|---|---|
| 8COM Cyber Security | EU | IT Services and IT Consulting | 51-200 | AI Productivity & Orchestration Specialist (m/w/d) | https://www.linkedin.com/jobs/view/4467096402/ |
| A.P. Moller - Maersk | EU | Transportation, Logistics, Supply Chain and Storage | 10,001+ | Senior AI Platform Engineer | https://www.linkedin.com/jobs/view/4464904423/ |
| ABC Fitness | EU | Wellness and Fitness Services | 1,001-5,000 | Senior AI Platform Engineer | https://www.linkedin.com/jobs/view/4481686624/ |
| ACENSI | EU | IT Services and IT Consulting | 1,001-5,000 | AGENTIC AI ENABLEMENT CONSULTANT | https://www.linkedin.com/jobs/view/4467746479/ |
| Actian | UK | Software Development | 501-1,000 | AI Enablement Lead [gn] Data Intelligence | https://www.linkedin.com/jobs/view/4472188157/ |
| ALK | EU | Pharmaceutical Manufacturing | 1,001-5,000 | Senior AI Adoption Lead | https://www.linkedin.com/jobs/view/4479522614/ |
| Aquablu | EU | Food & Beverages | 51-200 | Senior AI Platform Engineer | https://www.linkedin.com/jobs/view/4468560319/ |
| ASOS.com | UK | Retail Apparel and Fashion | 1,001-5,000 | Senior AI Engineer (AI Platform) | https://www.linkedin.com/jobs/view/4472614486/ |
| Atlas Copco Group | EU | Machinery Manufacturing | 10,001+ | AI Adoption Lead - Software Delivery | https://www.linkedin.com/jobs/view/4477508916/ |
| CatalystOne Solutions | EU | Software Development | 201-500 | AI Operations Engineer | https://www.linkedin.com/jobs/view/4469753487/ |
| Collibra | EU | Software Development | 1,001-5,000 | AI Enablement Manager | https://www.linkedin.com/jobs/view/4475010593/ |
| CoreView | EU | Software Development | 51-200 | AI Operations Engineer | https://www.linkedin.com/jobs/view/4474198614/ |
| CreateFuture | UK | IT Services and IT Consulting | 501-1,000 | Principal AI Platform Engineer | https://www.linkedin.com/jobs/view/4481159493/ |
| Duck Creek Technologies | UK | Software Development | 1,001-5,000 | Senior Product Manager - Agentic AI Platform - Remote | https://www.linkedin.com/jobs/view/4460978646/ |
| ElevenLabs | EU + UK | Research Services | 501-1,000 | Engineering - Internal AI Transformation | https://www.linkedin.com/jobs/view/4474353944/ |
| Environment Bank | UK | Environmental Services | 51-200 | AI Enablement Lead | https://www.linkedin.com/jobs/view/4471708039/ |
| Esko | UK | Software Development | 1,001-5,000 | Senior AI Platform Engineer - Knowledge & Reasoning | https://www.linkedin.com/jobs/view/4475832354/ |
| FDJ UNITED | EU + UK | Gambling Facilities and Casinos | 1,001-5,000 | AI Enablement Lead | https://www.linkedin.com/jobs/view/4475538519/ |
| HCLTech | UK | IT Services and IT Consulting | 10,001+ | AI Platform Engineer | https://www.linkedin.com/jobs/view/4472768446/ |
| IFS | UK | Software Development | 5,001-10,000 | AI Platform Engineer, Agentic Interfaces | https://www.linkedin.com/jobs/view/4476006866/ |
| IQVIA | EU + UK | Hospitals and Health Care | 10,001+ | Enterprise AI Enablement Manager; Senior AI Platform Engineer | https://www.linkedin.com/jobs/view/4461683261/ |
| Kemppi | EU | Appliances, Electrical, and Electronics Manufacturing | 501-1,000 | AI Enablement Manager | https://www.linkedin.com/jobs/view/4477093020/ |
| Legora | UK | Software Development | 501-1,000 | AI Enablement Lead | https://www.linkedin.com/jobs/view/4456510477/ |
| LocalStack | UK | Software Development | 51-200 | AI Enablement Engineer | https://www.linkedin.com/jobs/view/4462031906/ |
| Merck Healthcare | EU | Pharmaceutical Manufacturing | 10,001+ | Agentic AI Platform Architect | https://www.linkedin.com/jobs/view/4461089404/ |
| n8n | EU + UK | Software Development | 51-200 | Internal AI Enablement Lead | https://www.linkedin.com/jobs/view/4479018985/ |
| Novonesis | EU | Biotechnology Research | 10,001+ | Global Digital & AI adoption Lead, Food & Beverage Biosolutions, Novonesis | https://www.linkedin.com/jobs/view/4476296534/ |
| Okta | EU | Computer and Network Security | 5,001-10,000 | Staff Product Manager - Developer Productivity | https://www.linkedin.com/jobs/view/4473158593/ |
| Pandora | EU | Retail Luxury Goods and Jewelry | 10,001+ | Lead Engineer, AI Platform | https://www.linkedin.com/jobs/view/4472678701/ |
| Personio | EU | Software Development | 1,001-5,000 | Senior Product Manager - Internal AI (d/f/m) | https://www.linkedin.com/jobs/view/4421182639/ |
| Pfizer | UK | Pharmaceutical Manufacturing | 10,001+ | Staff Platform Engineer, AI & Agentic AI Platform Engineering | https://www.linkedin.com/jobs/view/4480395806/ |
| Phorest Software | UK | Software Development | 201-500 | AI Enablement Engineer | https://www.linkedin.com/jobs/view/4476187134/ |
| Picnic Technologies | EU | Retail | 5,001-10,000 | AI Platform Engineer | https://www.linkedin.com/jobs/view/4479573260/ |
| Preply | UK | Technology, Information and Internet | 501-1,000 | Senior ML Platform Engineer (GenAI Platform) | https://www.linkedin.com/jobs/view/4478162018/ |
| Riskified | EU | Software Development | 501-1,000 | Senior AI Platform Engineer | https://www.linkedin.com/jobs/view/4476566751/ |
| Robin Radar Systems | EU | Defense and Space Manufacturing | 51-200 | AI Enablement Engineer | https://www.linkedin.com/jobs/view/4473502122/ |
| Rydoo | EU | Software Development | 201-500 | AI Transformation Engineer | https://www.linkedin.com/jobs/view/4466316335/ |
| Schuberg Philis | EU | Information Technology & Services | 201-500 | AI Platform Engineer | https://www.linkedin.com/jobs/view/4482894865/ |
| ScreenPoint Medical | EU | Hospitals and Health Care | 51-200 | AI Enablement Engineer | https://www.linkedin.com/jobs/view/4474712292/ |
| Skin Analytics | UK | Hospitals and Health Care | 51-200 | AI Enablement Engineer; AI Enablement Engineering Lead | https://www.linkedin.com/jobs/view/4459165658/ |
| Syngenta | UK | Farming | 10,001+ | Lead AI Enablement Technology | https://www.linkedin.com/jobs/view/4454070429/ |
| TechTree | EU | Software Development | 11-50 | AI Platform Lead | https://www.linkedin.com/jobs/view/4473145870/ |
| Transcom | EU | Outsourcing and Offshoring Consulting | 10,001+ | Workplace AI Enablement Lead | https://www.linkedin.com/jobs/view/4477368199/ |
| Usercentrics | EU | Software Development | 201-500 | AI Enablement Engineer; Staff AI Enablement Engineer | https://www.linkedin.com/jobs/view/4469108812/ |
| VMN media | EU | Media Production | 201-500 | AI Tooling Lead | https://www.linkedin.com/jobs/view/4481717858/ |
| VOIS | UK | IT Services and IT Consulting | 10,001+ | AI Platform Engineer | https://www.linkedin.com/jobs/view/4451234424/ |
| Xensam | EU | Software Development | 51-200 | AI Enablement Engineer | https://www.linkedin.com/jobs/view/4442748781/ |

## 5. Size distribution, finance companies only

Based on the 18 finance companies; all 18 had a size shown (none "not shown").

| LinkedIn size bucket | Companies | % of 18 |
|---|---|---|
| Under 500 (1-10, 11-50, 51-200, 201-500) | 5 (bunch, Macro Hive, National Wealth Fund, Optasia, Taktile) | 27.8% |
| 501-1,000 | 3 (9fin, Accelerant, Raisin) | 16.7% |
| 1,001-5,000 | 3 (Kraken, SIX, Shine) | 16.7% |
| 5,001-10,000 | 1 (Invesco) | 5.6% |
| 10,001+ | 6 (Ayvens, Barclays, Bloomberg, If Insurance, JPMorganChase, LSEG) | 33.3% |
| Not shown | 0 | 0% |
| **Up to 5,000 (all buckets up to 1,001-5,000)** | **11** | **61.1%** |

Sensitivity, adding the two captive IT arms (20 companies): under 500 = 5 (25.0%), 501-1,000 = 4 (20.0%), 1,001-5,000 = 3 (15.0%), 5,001-10,000 = 1 (5.0%), 10,001+ = 7 (35.0%); up to 5,000 = 12 (60.0%).

Sensitivity, excluding Shine (17 companies, strict LinkedIn label): up to 5,000 = 10 (58.8%); the other buckets lose one 1,001-5,000 company.

## 6. Overlap with the earlier 16 companies

**Reappear (15 of 16, as kept companies):** SIX, Kraken, Shine, Raisin, 9fin, Macro Hive, Accelerant, LSEG, If (If Insurance), Ayvens, Barclays, JPMorganChase, Invesco, Bloomberg, and Commerzbank (appears here as "Commerzbank Digital Technology Centre Bulgaria", which is in the captive-arm list, not in the 18).

**Did not reappear as a kept company (1):** Nordea. Three Nordea postings were collected (EU `AI platform engineer` and `"developer productivity" AI` searches: "AI Specialist to Service Fulfilment & Operations", "Expert Agentic Business Engineer", "Expert AI Specialist ..."), but their titles do not match the fixed filter, so they were dropped. This is a filter effect, not a search gap.

**New finance companies not among the earlier 16 (4):** bunch (EU, 51-200), National Wealth Fund (UK, 201-500), Optasia (EU + UK, 201-500), Taktile (EU + UK, 201-500). All four are in the under-500 bucket, so widening the base added only small finance companies; the large-company share of the finance set (10,001+ = 6 companies) is made up entirely of names already in the earlier 16.

Other new names in the captive-arm list: Allianz Technology.

## 7. Limits and anything odd

- **No industry filter.** The 18-finance figure comes from labelling 67 companies after the fact, not from a finance-filtered search. A finance-filtered search would surface more finance companies that rank below position 125 in an unfiltered search; the 18 is therefore a floor for the top 125 results per search, not the full finance population.
- **Fuzzy results.** LinkedIn's new AI search returns many loosely matching roles (marketing, GTM, product manager). The fixed filter removed about 89% of postings ("no match" 768 of 998; 4 business roles; 16 vendors; 101 duplicates).
- **Filter drops some finance roles.** The unchanged filter's business-role rule (it matches "Partner") dropped, for example, Janus Henderson Investors "AI Enablement Partner" (EU and UK). It also drops roles at finance firms whose titles do not use the include terms (for example Nordea, flatexDEGIRO "Senior AI Solutions & Delivery Manager", Northern Trust "AI Program Manager", Citi, Generali, Worldpay, Standard Life "Lead AI & Automation Engineer", HSBC "Head of Productivity Suite Engineering Lead - AI", Lloyds). If these were allowed, the finance share would be higher. Not changed, as instructed.
- **Parsing quirks.** A few cards were parsed with the title in the company column (for example "Forward Deployed Engineer", "AI Product Manager", "Agentic AI Solution Specialist", "Senior ServiceNow Developer"); all are dropped by the filter or resolved above (Actian). One UK title containing pipe characters was written with slashes in the raw file. A zero-width space was removed from "8COM Cyber Security".
- **One page returned 24 cards** (EU `AI platform engineer`, page 2); all other pages returned 25.
- **Sizes and industries are LinkedIn's labels at the time of reading** (24 Oct 2026). The size for each company comes from the page of one of its jobs. For companies with several postings, only one posting's company section was opened.
- **Region** is the search region. Companies operating in both regions are listed as EU + UK only when kept postings exist in both.
- **FDJ UNITED** (LinkedIn: Gambling Facilities and Casinos) is not finance by LinkedIn's label; it is the only clear "leak" of a regulated-adjacent sector.
- No CAPTCHA, login wall or security check appeared. One browser-batch call timed out once (a 5-page batch); it was retried with smaller batches, no data lost.
