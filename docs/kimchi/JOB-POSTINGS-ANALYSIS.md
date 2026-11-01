# Which industries are scaling AI agents? Job postings count

Collected 23 Oct 2026 from LinkedIn Jobs (public search, in Islam's logged-in browser), **posted in the past month**, first 3 pages per search. Raw lists are in [jobs-raw/eu](jobs-raw/eu/), [jobs-raw/us](jobs-raw/us/) and [jobs-raw/uk](jobs-raw/uk/).

## Why these regions
Only regions where Kimchi shows public signals were checked:
- **US:** most customer logos on kimchi.dev (Akamai, Cisco, Roku, WeWork, Yotpo); pricing in USD; Cast AI HQ in Miami.
- **EU:** Cast AI's large team in Vilnius; Swisscom logo; Kimchi job posting "Product Manager, Kimchi AI Coding Platform, Europe" (found in this data).
- **UK:** Kimchi job posting "Founding Business Development Representative" in the UK (found in this data).
- **Middle East: not checked.** No Kimchi signal found (no customers, press, team or hiring there).

## Method
1. **Four fixed searches per region:** "AI platform engineer", "AI enablement", "developer productivity" AI, "coding agents". 12 searches, **899 postings**.
2. **The same fixed filter for every posting:**
   - **Keep** only titles about rolling out AI inside the company or as a shared platform. Keywords: AI Platform, AI Enablement, Internal AI, AI Productivity, AI Gateway, Development Tools, Software Delivery, AI Tooling, Agent Engineering, Developer Productivity, Copilot Lead, AI Adoption Lead, AI Operations Engineer.
   - **Drop** business-side roles (marketing, GTM, CX, sales, commercial, CRM).
   - **Drop** companies that sell AI, consult on it, or recruit for it. They are vendors, not buyers.
   - **Drop** duplicates.
3. **Industry label** per company: assigned by me from public company information. It can be checked on each company's LinkedIn page. Uncertain labels are marked "?".

| Region | Postings collected | Kept after filter |
|---|---|---|
| EU | 299 | 38 |
| US | 300 | 19 |
| UK | 300 | 22 |
| **Total** | **899** | **79** |

## Correction: unique jobs (24 Oct 2026)
5 jobs appear in two region lists and should count once: Kraken, ElevenLabs, Esko and n8n (EU + UK), and Duck Creek (US + UK). **Unique jobs: 74** (tech 28 = 38%, finance 22 = 30%). Finance by region: EU 9 (Kraken counted here), UK 9, US 4. UK + EU = 18 of 22 (82%). The table below shows listings before this correction.

UK/EU finance **companies** (16) by LinkedIn size: 10,000+ = 8 (50%); 5,001–10,000 = 1; 1,001–5,000 = 3 (SIX, Kraken, Shine); 501–1,000 = 2 (Raisin, 9fin); under 500 = 1 (Macro Hive); not shown = 1 (Accelerant). **Up to 5,000 = 6 of 16 (38%).**

## Result by industry (listings, before de-duplication)

| Industry | EU | US | UK | **Total** | Strict data / vendor rules? |
|---|---|---|---|---|---|
| **Tech / software** | 14 | 9 | 9 | **32** | Mostly no (GDPR only) |
| **Finance** (banks, insurance, asset managers, exchanges, financial data) | 9 | 4 | 10 | **23** | **Yes** (DORA in EU/UK-facing firms, PCI DSS, US bank third-party risk rules) |
| Industrial / manufacturing | 5 | 0 | 0 | 5 | Partly |
| Healthcare / pharma | 3 | 0 | 1 | 4 | Yes |
| Retail / consumer | 2 | 0 | 0 | 2 | No |
| Telecom | 0 | 1 | 0 | 1 | Partly |
| Legal / professional services | 0 | 2 | 1 | 3 | Partly |
| Other / unclear | 5 | 3 | 1 | 9 | n/a |
| **Total** | **38** | **19** | **22** | **79** | |

**Finance companies counted:**
- EU: Commerzbank, Nordea, LSEG, SIX, If Insurance, Raisin, Shine, Ayvens, Kraken?
- US: State Street, Charles Schwab, OneMain Financial, Arrowstreet Capital
- UK: Barclays, JPMorganChase, Invesco, Bloomberg (2), 9fin (2), Accelerant, Macro Hive, Kraken?

**Tech companies counted:**
- EU: 8COM, ABC Fitness, CatalystOne, Collibra, CoreView, ElevenLabs, Esko, Okta, Personio, Riskified, Rydoo, Scurri, Xensam, n8n
- US: Duck Creek, Klaviyo, Ladders, Navan, Pindrop, Retool, Ridgeline, TeamViewer, Whip Around
- UK: Actian, Duck Creek, ElevenLabs, Esko, Legora, Phorest, Preply, Taktile, n8n

**Other / unclear:**
- EU: Maersk (logistics), Tibber (energy), Transcom (services), VMN media, TechTree?
- US: Acuity?, Liminal?, The Aspen Group?
- UK: Environment Bank (environmental services, not a bank)

## What it says
1. **Tech (32) and finance (23) are the two industries clearly scaling AI rollout roles.** Together they're 70% of all kept postings, and the order is the same in the EU and the US.
2. **Finance is the only one of the two with strict data and vendor rules.** That puts it in box A (scaling agents + strict rules). Tech sits in box B (scaling agents, looser rules), where spend-tracking tools already compete.
3. **Healthcare and telecom are too thin to bet on** (4 and 1 postings).
4. **The finance signal is strongest in the UK and EU** (19 of 23 finance postings). In the UK, finance leads tech (10 vs 9).
5. **The postings that name coding agents or AI governance explicitly are mostly European finance:** SIX ("Development Tools (Claude Code)"), Commerzbank ("Agent Engineering"), Nordea ("AI Gateway"), Kraken ("Enablement and Governance"). The one non-finance example is Atlas Copco ("Software Delivery").

## Limits
- 79 postings is a small sample, and one month is a snapshot.
- LinkedIn's AI-powered search is loose; the filter removed about 90%.
- The filter reads job titles only, not full descriptions.
- Industry labels are mine. Check them.
- Job postings show intent, not purchases.
- **In the role, scale this up:** a LinkedIn jobs scraper (e.g. Apify) would give full descriptions and LinkedIn's own industry field, re-run monthly as a market signal. Note that scraping LinkedIn is against its terms of use.
