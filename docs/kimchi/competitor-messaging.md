# Competitor messaging scan for Kimchi

Accessed: 24 Oct 2026. Method: WebFetch (which summarises pages through a small model) plus WebSearch. No browser tools. Quotes are kept under 15 words. "Rating" scale: headline = in the hero or among the page's main claims; mentioned = present but secondary; absent = not found on the pages read.

Caveat on method: page text came back as model-generated summaries, not raw HTML, so exact hero wording is only as reliable as that summary. Re-check any quote before using it publicly.

## Important market changes found while checking

- Portkey's homepage now reads "Portkey is now PRISMA AIRS AI Gateway" (Palo Alto Networks). Palo Alto announced intent to acquire on ~30 Apr 2026 (pulse2.com, cybermagazine.com). One source (channeldrive.in) says it completed; I could not confirm a close date.
- tabnine.com now 301-redirects to tricentis.com/products. Tricentis announced the Tabnine acquisition on 30 Jul 2026 (businesswire, sdtimes). I could not read any current Tabnine product page.
- windsurf.com/enterprise now 308-redirects to devin.ai/enterprise (Cognition). The Windsurf brand has no enterprise page of its own.

## Per-competitor tables

### Portkey (now Prisma AIRS AI Gateway)
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Portkey is now PRISMA AIRS AI Gateway". Sub: "Observe, govern, and secure every AI interaction across your enterprise." Page title: "Production Stack for Gen AI Builders" | https://portkey.ai |
| 3 claims | 1) One platform: gateway, observability, guardrails, governance, prompts. 2) 1,600+ LLMs via one API. 3) Central governance: RBAC, budget limits, PII redaction, logs. | https://portkey.ai |
| For whom | GenAI/ML engineering and AI platform teams; startups and "Fortune 500s" | https://portkey.ai |
| Finance / regulated | No finance page. Footer badge "HIPAA COMPLIANT". Pricing page lists SOC2 Type 2, GDPR, HIPAA, ISO 27001 (Enterprise). Only industry reference is a "Fortune 500 Pharma Company" testimonial. DORA not found. | https://portkey.ai ; https://portkey.ai/pricing |
| Spend control | mentioned (real-time cost, budget limits, caching) | https://portkey.ai |
| Governance | headline | https://portkey.ai |
| Data inside | mentioned (Enterprise: private cloud, VPC hosting, data isolation; open-source self-host; hybrid in a testimonial) | https://portkey.ai/pricing |
| ROI | mentioned ("Clear ROI" tag; the extracted stat figures showed as 0%, so unverified) | https://portkey.ai |
| Pricing | Open source free; Developer free; Production $49/month (100K logs); Enterprise custom | https://portkey.ai/pricing |

### LiteLLM (Enterprise)
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Enterprise-grade control for the gateway your org already runs." Sub: governance, security, support on top of open source; "self-hosted or air-gapped" | https://www.litellm.ai/enterprise |
| Homepage headline | "The AI Gateway for platform teams" | https://www.litellm.ai |
| 3 claims | 1) Virtual keys, budgets, rate limits; spend by key/user/team/org. 2) SSO/SCIM, RBAC, JWT. 3) Self-hosted with 24/7 support and SLAs. | https://www.litellm.ai/enterprise |
| For whom | Platform teams; orgs standardising LLM access across "hundreds of engineers" | both |
| Finance / regulated | No finance page or named regulated sector. Copy: "Governance your auditor will accept". Badges: SOC 2 Type 2, ISO 27001. Logos include Zurich, IBM, AT&T. DORA not found. | enterprise page; homepage |
| Spend control | headline ("track who drives spend, cap it"; hard budgets; chargeback) | homepage |
| Governance | headline (audit logs, RBAC, guardrails) | enterprise page |
| Data inside | headline (self-hosted, air-gapped, no telemetry to LiteLLM, MIT licence) | homepage |
| ROI | mentioned (AT&T "coding fell by as much as 56%" cost claim; vendor-published) | homepage |
| Pricing | Open source $0; Enterprise custom; 30-day trial key | enterprise page; homepage |

### Kong AI Gateway
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Govern all AI traffic. Do it with one gateway." Sub: LLM, MCP and agent-to-agent traffic | https://konghq.com/products/kong-ai-gateway |
| 3 claims | 1) LLM governance (access, data leakage, token usage). 2) MCP governance. 3) A2A auth, observability, audit trails. | same |
| For whom | AI teams, platform teams, executives; enterprises; startup programme | same |
| Finance / regulated | Industry pages for financial services, healthcare, insurance, Open Banking. Published a DORA-related Financial Services Addendum (updated 15 Oct 2025). Lombard Odier (Swiss private bank) customer story. No certifications named on the product page. | same; https://konghq.com/legal/financial-services-addendum ; https://konghq.com/customer-stories/egress-ai-gateways-securely-integrating-llms-in-financial-applications (from search; not fetched in full) |
| Spend control | mentioned (token quotas, showback/chargeback, semantic caching) | product page |
| Governance | headline | product page |
| Data inside | absent on the product page (no self-host claim for AI Gateway) | product page |
| ROI | mentioned (AI cost savings calculator link; no figures) | product page |
| Pricing | Not on the page; startup offer "$100k credits & 50% off" | product page |

### Cloudflare AI Gateway
| Item | Finding | Source |
|---|---|---|
| Headline / sub | Docs: "observe and control AI applications". Product page: "AI Application Control Plane"; "manage usage, billing, and logs from one unified gateway" | https://developers.cloudflare.com/ai-gateway/ ; https://www.cloudflare.com/developer-platform/products/ai-gateway/ |
| 3 claims | 1) Analytics and logging. 2) Caching, rate limiting, retries, fallback. 3) One line of code to start. | docs page |
| For whom | Not stated; implies developers building AI apps | both |
| Finance / regulated | None. No compliance claims on these pages. | both |
| Spend control | mentioned (caching "cost savings", unified billing, token counts) | product page |
| Governance | absent (no access policy or audit claims) | product page |
| Data inside | absent | both |
| ROI | absent | both |
| Pricing | "Available on all plans"; details on separate page (not read) | docs page |

### Coder
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Your developers have guardrails. Your AI doesn't." Sub: run AI, agents and development "on your own infrastructure" | https://coder.com |
| 3 claims | 1) Any model or agent, with governance. 2) Central model access, policy environments, audit and usage logs. 3) Self-hosted standard workspaces for developers and agents. | same |
| For whom | Large enterprises; engineering leaders, security teams. Logos: Dropbox, Palantir, Mercedes, KKR | same |
| Finance / regulated | No finance page. KKR logo; US DoD case study; no named frameworks in the body. | same |
| Spend control | absent | same |
| Governance | headline | same |
| Data inside | headline (self-hosted, own infrastructure) | same |
| ROI | mentioned (case-study titles: Dropbox 4x onboarding, J.B. Hunt VDI cost down 90%; not AI ROI) | same |
| Pricing | Not public | same |
| Not loaded | https://coder.com/ai-governance returned 404 | |

### GitHub Copilot Business / Enterprise
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Command your craft". Sub: "Your AI accelerator for every workflow, from the editor to the enterprise." | https://github.com/features/copilot |
| 3 claims | 1) Model choice. 2) Own, custom or third-party agents. 3) Works across GitHub, IDEs, CLI, MCP. | same |
| For whom | Individuals (Free/Pro/Max); organisations with admins (Business/Enterprise) | same |
| Finance / regulated | Dedicated financial-services page: "Transform financial services with a secure, AI-powered solution"; Raiffeisen Bank quote; Societe Generale, Itau logos. Copilot is a secondary link there. Data Protection Agreement (GDPR). Data residency not mentioned. | https://github.com/solutions/industry/financial-services ; copilot page |
| Spend control | mentioned (budget controls, alerts at 75/90/100%, usage limits) | copilot page |
| Governance | mentioned (audit logs, MCP allow lists, policy control plane) | copilot page |
| Data inside | absent (DPA, no training on Business/Enterprise data; no residency or self-host claim) | copilot page |
| ROI | mentioned (vendor claims: "up to 55% more productive" writing code; Grupo Boticario 94%) | copilot page |
| Pricing | Business $19/user/month; Enterprise $39/user/month (per copilot page). The /plans page did not list them. Treat as page-dependent. | copilot page; /plans |

### Cursor (Teams / Enterprise)
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Develop enduring software at scale". Sub: "The choice for ambitious engineering teams." | https://cursor.com/enterprise |
| 3 claims | 1) Built for large codebases and thousands of developers. 2) Teams ship more ambitious products faster. 3) 93% of engineers chose Cursor in head-to-heads. | same |
| For whom | Engineering teams and leaders (CTOs, SVPs Eng, platform heads); "Trusted by 64% of Fortune 500" | same |
| Finance / regulated | No sector page. Customers named: PayPal, Coinbase, Stripe. Badges: SOC 2, ISO 27001, ISO 42001, AIUC-1; GDPR/CCPA. | same |
| Spend control | mentioned (team and user limits; granular spend controls on Enterprise) | same; https://cursor.com/pricing |
| Governance | mentioned (repo/model/MCP allowlists, SSO/SCIM, audit logs) | same; pricing |
| Data inside | absent (Privacy Mode, zero data retention; "On-premises and VPC deployment are not offered" per summary) | enterprise page |
| ROI | mentioned (adoption analytics dashboards; testimonials, no company-wide ROI claim) | enterprise page |
| Pricing | Teams $30+/user/month; Enterprise custom | https://cursor.com/pricing |

### Tabnine
| Item | Finding | Source |
|---|---|---|
| Current messaging | NOT VERIFIED. tabnine.com redirects to tricentis.com/products; the redirected page failed to load ("Parse Error: Header overflow"). | tabnine.com |
| Context | Acquired by Tricentis, announced 30 Jul 2026; Tabnine's Enterprise Context Engine goes into Tricentis's quality-engineering platform. | https://secure.businesswire.com/news/home/20260730388427/en/Tricentis-Acquires-Tabnine-to-Further-Scale-Agentic-Quality-Engineering-for-the-Enterprise |
| Older claims (third-party, unverified) | SaaS, VPC, on-prem, air-gapped options; Gartner Visionary 2025 (press release). A third-party BFSI page claims DORA/EU AI Act compliance; no primary source found. | search results |
| Ratings | Not rated | |

### Amp (Sourcegraph Amp)
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Juggle less" / "Ship more". Sub: "Run agents anywhere and they keep working after you close your laptop." | https://ampcode.com |
| 3 claims | 1) Unattended agents in remote "orbs". 2) No local setup. 3) Control from web, terminal, phone; multiplayer. | same |
| For whom | Professional developers and small teams | same |
| Finance / regulated | None. Security page: SOC 2 Type II, annual pentests. | https://ampcode.com/security |
| Spend control | absent (credits and tiers only) | homepage |
| Governance | absent to mentioned (SSO, directory sync, passkeys; admins can disable orbs) | security page |
| Data inside | absent. Homepage says self-hosted orbs "announced"; security page says "Amp doesn't offer self-hosted deployments". Conflict between two pages. | homepage; security |
| ROI | absent | homepage |
| Pricing | Tiers incl. Ultra; no figures on homepage | homepage |
| Note | Amp's brand is now ampcode.com; I did not confirm its current relation to Sourcegraph. | |

### Windsurf / Cognition (Devin enterprise)
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Meet Devin, the AI software engineer built for the entire software lifecycle". Sub: "Understand, plan, code, review, and automate all within one platform." | https://devin.ai/enterprise (redirect from windsurf.com/enterprise) |
| 3 claims | 1) Multiple frontier models, one contract, "up to 60% less cost". 2) Forward-deployed engineers. 3) Outcome dashboards backed by a "$10M AI Productivity Guarantee". | same |
| For whom | Engineering teams in large enterprises | same |
| Finance / regulated | Logos: Citi, Itau, Goldman Sachs; no finance use-case copy. Badges: SOC 2, ISO 27001, FedRAMP High. | same |
| Spend control | mentioned (cost reduction claim; no budget controls described) | same |
| Governance | mentioned (audit logs, RBAC, SSO, SCIM, zero data retention) | same |
| Data inside | mentioned ("private networking", "custom deployment regions"; self-host not stated) | same |
| ROI | headline (productivity guarantee, "productive engineering hours per session") | same |
| Pricing | Not public; "Book a demo" | same |

### Spend / AI-ROI tools

#### DX
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Delivery intelligence for the AI era". Sub: "DX gives R&D leaders a common picture of the delivery lifecycle..." | https://getdx.com |
| 3 claims | Unified delivery view; where to invest and AI impact; proactive AI-assistant insights | same |
| For whom | R&D leaders; developer experience and AI enablement | same |
| Finance / regulated | Not mentioned. No certifications on the page. | same |
| Spend / Governance / Data / ROI | Spend absent; governance absent; data absent; ROI headline-ish (AI measurement by commit, PR, agent; "utilization, impact, and ROI" in a resource) | same |
| Pricing | Not listed ("Get a demo") | same |

#### Jellyfish
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "Engineering Intelligence for Your AI-Native SDLC". Sub: "See how your people and agents really build software" | https://jellyfish.co |
| 3 claims | AI usage, cost and capacity tied to outcomes; "More code isn't the same as more value"; where AI creates value and what each outcome costs | same |
| For whom | Engineering leadership; finance teams and developers also named | same |
| Finance / regulated | Finance function addressed ("questions from finance and the board", DevFinOps, software capitalisation). Regulated industries not mentioned. Badges: SOC 1 and SOC 2 Type II, GDPR, CCPA, CSA STAR. | same |
| Spend control | headline (spend "across every vendor, team, and model"; token cost management). Measures spend; does not cap it. | same |
| Governance | absent (RBAC only) | same |
| Data inside | absent | same |
| ROI | headline | same |
| Pricing | Not stated | same |

#### LinearB
| Item | Finding | Source |
|---|---|---|
| Headline / sub | "The engineering productivity platform". Sub: "Turn context into outcomes and automations for AI agents, teams, and managers" | https://linearb.io |
| 3 claims | "Prove whether AI is improving throughput"; keep delivery reliable; automate workflows | same |
| For whom | Engineering leaders and managers | same |
| Finance / regulated | No sector. "Audit-ready reports" for cost capitalisation. Badges: SOC 1/2 Type II, GDPR, ISO 27001. | same |
| Spend control | mentioned (engineering cost incl. AI tied to results) | same |
| Governance | mentioned (policy-based PR workflows; a different meaning of governance) | same |
| Data inside | absent ("zero code access" in nav) | same |
| ROI | headline | same |
| Pricing | Essentials $29; Enterprise $59 (unit not stated) | same |

## Summary grid

| Competitor | Spend control | Governance | Data inside | Proving ROI |
|---|---|---|---|---|
| Portkey / Prisma AIRS | mentioned | headline | mentioned | mentioned |
| LiteLLM (Enterprise) | headline | headline | headline | mentioned |
| Kong AI Gateway | mentioned | headline | absent | mentioned |
| Cloudflare AI Gateway | mentioned | absent | absent | absent |
| Coder | absent | headline | headline | mentioned (not AI) |
| GitHub Copilot Bus/Ent | mentioned | mentioned | absent | mentioned |
| Cursor Teams/Ent | mentioned | mentioned | absent | mentioned |
| Tabnine | not verified | not verified | not verified | not verified |
| Amp | absent | absent | absent (conflicting) | absent |
| Windsurf / Devin (Cognition) | mentioned | mentioned | mentioned | headline |
| DX | absent | absent | absent | headline |
| Jellyfish | headline (measures) | absent | absent | headline |
| LinearB | mentioned | mentioned (workflow) | absent | headline |

## Unclaimed or weakly claimed

Facts with evidence. These are observations from the pages read, not proof that nobody claims them elsewhere.

1. Nobody combines all four themes in one message. The widest coverage is LiteLLM (three headline themes: spend, governance, data inside; ROI only mentioned) and Windsurf/Devin (ROI headline, others mentioned). The ROI tools (DX, Jellyfish, LinearB) lead with ROI and carry no governance or data-inside claims. Evidence: grid above.
2. Spend control that is enforced at the gateway is only led by LiteLLM, and it addresses "platform teams". Portkey and Kong mention it as secondary. The coding-tool vendors (Copilot, Cursor) frame spend as seat plus usage limits. Jellyfish leads on spend visibility but measures after the fact; no page I read says it caps spend.
3. No gateway or governance vendor leads with proving what AI spend delivers. LiteLLM, Portkey and Kong either mention ROI lightly (AT&T cost claim, "Clear ROI" tag, a calculator link) or not at all; Cloudflare is absent. The vendors that lead with ROI (DX, Jellyfish, LinearB) do not enforce policy or keep data inside. Control plus ROI in one product is a gap in this set; Devin is the nearest (productivity guarantee) but it is its own agent, not a layer across other agents.
4. Finance as a persona: no competitor addresses an AI platform or enablement lead at a financial firm with a dedicated page. Financial-services pages exist at GitHub (aimed at the platform and developers, Copilot secondary) and Kong (industry page; DORA addendum; one private-bank story). Jellyfish speaks to finance teams but about R&D budgeting, not regulated firms. LiteLLM, Portkey, Cursor, Coder, Cloudflare and Amp have no financial-services page found.
5. UK/EU framing: DORA appears only in Kong's contract addendum. I found no DORA, FCA, PRA, EBA or EU AI Act claim on the product pages of any competitor. Data residency by region is not claimed by Copilot (page does not mention it), Cursor (regions not specified) or Cloudflare. Devin mentions "custom deployment regions" only briefly. Portkey and LiteLLM offer self-host or private cloud but do not say EU or UK residency.
6. Data inside is led only by LiteLLM and Coder, both through self-hosting. Cursor says it offers no on-prem or VPC; Amp says no self-hosting; Copilot is silent. A governed tool that keeps data inside and speaks to coding agents specifically is led by nobody; Coder is closest but does not mention spend.
7. Category noise: Portkey is being absorbed into a security vendor (Prisma AIRS) and Tabnine into a testing vendor (Tricentis). Their messaging is moving to security and quality engineering, which leaves coding-agent governance for finance teams less contested from those two. This is an inference from the acquisitions; positioning after integration is unverified.

## Limits

- Tabnine: current homepage unreadable (redirect to Tricentis, then a parse error). Ratings left unrated. Older claims are from third-party review sites and one unreliable BFSI page.
- https://coder.com/ai-governance and https://konghq.com/solutions/financial-services returned 404. I used search results for Kong's financial services material and did not fetch the Kong DORA addendum or the Lombard Odier story in full.
- Not read: dedicated enterprise or trust pages for Cloudflare, Copilot (trust centre), Cursor security, and separate pricing pages for Kong, Cloudflare, Coder, Amp, Devin. Pricing for those is "not found", not "not public".
- Copilot Business/Enterprise prices ($19, $39) came from the features page; the /plans page did not show them.
- Portkey's stat figures extracted as 0%, so they are not used. Portkey acquisition close status unconfirmed.
- LiteLLM benchmark (0.66 ms), Copilot productivity numbers, AT&T 56% and Devin's guarantee are vendor claims and not verified.
- All content came through summarising fetches, not raw page text, and was read once on 24 Oct 2026. Pages with A/B tests or regional variants may differ. I did not check UK-specific page versions.
- The amplitude.com/blog fetch in my log was a stray call unrelated to this task; nothing from it is used.
