# ICP lens 1: what UK/EU finance companies hiring AI rollout roles actually ask for

Source: full LinkedIn job descriptions, read 23 Oct 2026. Industry and size are **LinkedIn's own labels**. Quotes are short extracts.

| # | Company | LinkedIn industry · size | Role | Tools named | What the role must do | Sits in |
|---|---|---|---|---|---|---|
| 1 | SIX (Swiss exchange & payments) | Financial Services · 1,001–5,000 | AI Solutions Lead – Development Tools (Claude Code) | Claude Code, agent frameworks | Own AI roadmap for the whole software lifecycle; "evaluate, benchmark" AI tools; run pilots; "rollout Claude Code for the Developers"; "tracking measurable adoption outcomes" | Software Engineering Practice team |
| 2 | Nordea | Banking · 10,001+ | AI Gateway Product Owner | LLMs via AWS Bedrock + GCP Gemini, MCP, A2A agents, Kong | "Translate regulatory requirements—including the EU AI Act, DORA, and GDPR—into concrete platform capabilities"; securely expose LLMs, MCP and agents across the bank; track "adoption, governance coverage" | Group Technology, Data Mesh & AI Platforms |
| 3 | LSEG | Financial Services · 10,001+ | Senior Manager, AI Productivity | ChatGPT, Claude, Microsoft Copilot, MCP connectors | Own "governance, and lifecycle management" of AI platforms; "policy enforcement"; "vendor risk management", "auditability"; KPIs on "adoption, time saved, cost optimisation and business impact" | Infrastructure & Cloud, Digital Operations |
| 4 | If Insurance | Insurance · 10,001+ | AI Productivity Lead | Not named | Move "from experimentation to enterprise-scale adoption"; "safe, responsible, and scalable AI adoption"; success measured by "faster adoption, stronger governance and scalable platform capabilities". Workplace AI, not coding-specific | Digital Workplace |
| 5 | Commerzbank (Digital Technology Centre Bulgaria) | IT Services · 501–1,000 (the tech centre; the bank itself is far larger) | AI Enablement & Agent Engineering Specialist | Not named | "Driving the adoption and effective use of AI across the organization"; "hands-on development of AI agents"; "measurement and coordination of AI transformation" | Dialog Systems team |
| 6 | Raisin | Financial Services · 501–1,000 | AI Platform Engineer | Not named | "Governed access to AI models and tools… authentication, routing across providers, usage limits, guardrails, and audit logging"; "the visibility teams need to run AI reliably and cost-effectively"; "from AI-assisted coding to agentic workflows"; "because Raisin operates in regulated financial services, security and compliance are core" | AI Enablement (internal AI platform) |
| 7 | Shine | IT Services · 1,001–5,000 | Head of AI Enablement (CEO Office) | Not named | Build AI tools and agents for business teams (finance, HR, sales, support). **Not engineering-focused** | CEO office |
| 8 | Kraken (crypto exchange) | Financial Services · 1,001–5,000 | AI Platform Engineer, Enablement and Governance Operations | Not named | "Tiered spend controls are live, a governed integration gateway is in production"; "configure and operate tiered spend controls… set caps by role and tier, build alerting"; "evaluation harnesses for model changes"; inventory "against real regulatory obligations" | Enterprise Transformation (internal AI platform) |
| 9 | Ayvens (Société Générale group) | Financial Services · 10,001+ | Experienced AI Adoption Lead | Copilot Chat, Copilot Studio | Company-wide adoption and training; "ensure all AI initiatives comply with SG/Ayvens frameworks". **Business AI, not coding** | AI programme |
| 10 | Barclays | Banking · 10,001+ (not shown on the card) | AI Platform Engineer | Kubernetes, AWS/Azure, Amazon Bedrock | "Deploying and operating AI agents or LLM-based services… monitoring, governance"; "enabling development teams through modern self-service tooling" | AI platform team |
| 11 | Invesco | Financial Services · 5,001–10,000 | Principal AI Platform Infrastructure Engineer | Terraform, identity and gateway services | Platform "that enables enterprise adoption of agentic AI"; "gateway services, and policy enforcement"; let app teams adopt AI "while meeting security, governance, and operational standards" | AI platform team |
| 12 | Bloomberg | Financial Services · 10,001+ | Senior GenAI Platform Engineer | LLMs, vector DBs | Managed GenAI development lifecycle for **customer-facing products** (400+ AI practitioners). Less about governing internal coding agents | Engineering AI / CTO |
| 13 | 9fin | Financial Services · 501–1,000 | Senior AI Platform Engineer | Not named | Build the "core AI platform that enables Generative AI, Agentic AI" across the business, "move quickly, safely, and at scale". Early-stage platform, mostly product-facing | AI Engineering |
| 14 | Accelerant (insurance risk exchange) | Insurance · size not shown | AI Platform Engineer | n8n | "Build production AI agents"; "support development teams"; "AI-driven development initiatives"; "establish AI observability, monitoring, and cost tracking"; works with Compliance | AI Guild / platform |
| 15 | Macro Hive (BGC Group) | Financial Services · 11–50 | AI Platform Engineer | LLM APIs | Owns "agent runtime infrastructure", "authentication, permissions, logging", "model/tool orchestration", "usage, cost and error tracking", "review queues and audit trails". Small firm | Platform |

**Not read:** JPMorganChase (client-facing strategy role), Bloomberg "AI Enablement Lead, External Relations" (external-facing), 9fin's second role (same team as #13). Kraken appeared in both the EU and UK lists; it's the same role, counted once.

## What the 15 have in common (counts)

| Pattern | Count | Which |
|---|---|---|
| **Engineering / platform role** (not business-AI adoption) | 11 of 15 | all except If, Shine, Ayvens, Commerzbank (mixed) |
| **Governance, policy or compliance named as a core duty** | 11 of 15 | SIX?, Nordea, LSEG, If, Raisin, Kraken, Ayvens, Barclays, Invesco, Accelerant, Macro Hive |
| **Spend, cost or usage tracking named** | 5 of 15 | LSEG, Raisin, Kraken, Accelerant, Macro Hive |
| **Gateway / routing across several models or vendors** | 5 of 15 | Nordea (Bedrock + Gemini), LSEG (ChatGPT + Claude + Copilot), Raisin, Kraken, Invesco |
| **AI coding / agents for developers named explicitly** | 5 of 15 | SIX (Claude Code), Raisin, Barclays, Accelerant, Kraken (agent scaffolding) |
| **Measuring adoption or value named** | 6 of 15 | SIX, Nordea, LSEG, If, Commerzbank, Ayvens |
| **Regulation named in the ad** | 4 of 15 | Nordea (EU AI Act, DORA, GDPR), Raisin, Kraken, LSEG |
| **Size 1,000+ employees** | 11 of 15 | small ones: Raisin, 9fin, Macro Hive (501–1,000 or fewer), Accelerant unknown |
| **Already a dedicated internal AI platform / enablement team** | 9 of 15 | Nordea, LSEG, Raisin, Kraken, Barclays, Invesco, 9fin, SIX, Accelerant |
