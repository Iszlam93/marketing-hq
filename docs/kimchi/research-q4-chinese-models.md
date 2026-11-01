# Q4: Who uses Chinese-origin open-weight models in governed hosting, and what do regulated buyers think?

Researched 2026-10-26. Public sources only. Searches were run through a search tool that returns summaries, so several items below are marked "secondary" or "not verified at source". Gaps are stated plainly. "Shows" = sourced evidence. "Assumes" = my judgement.

## 1. Which models Kimchi serves, and their origin

| Model | Origin | Evidence |
|---|---|---|
| Kimi K2.6 (`kimchi-dev/kimi-k2.6`) | China (Moonshot AI) | Default for orchestrator, planner, builder, reviewer, researcher in the CLI repo, github.com/getkimchi/kimchi |
| MiniMax M2.7 | China (MiniMax) | Same repo; default for builder and reviewer |
| MiniMax M3 | China (MiniMax) | Cast AI says it is the default builder model; IT Brief UK, 18 Jun 2026, itbrief.co.uk/story/cast-ai-adds-minimax-m3-to-kimchi-coding-as-default-model. Cast AI claims 59% on SWE-bench Pro (vendor claim) |
| Kimi K3, MiniMax M3 | China | kimchi.dev homepage Inference section lists "kimi-k3 · minimax-m3 · +6 more"; the other six are not named |
| GLM-5 (fp8) | China (Zhipu / Z.ai) | Search summary of Cast AI docs lists glm-5-fp8 for reasoning/planning; I could not re-fetch that doc (docs.cast.ai page returned 404). Treat as likely, not confirmed |
| Kimi K2.5 | China | Same search summary of Cast AI docs; same caveat |
| Nemotron 3 Ultra (fp4) | US (NVIDIA) | Repo default for the "explorer" role |
| Claude Sonnet 4.5 | US (Anthropic) | Repo example in builder/reviewer pools, not a default; any `provider/model-id` can be assigned |
| Llama, Mistral, GPT-OSS, Qwen, DeepSeek | Unknown | Not named in anything I could read |

Shows: every default role model I could verify is either Chinese-origin (Kimi, MiniMax) or NVIDIA's Nemotron. The model list is fetched at startup from a metadata service, so the full list is not public in the repo.

Kimchi claims, none independently verified:
- "2.5x cheaper": from Cast AI's own shadow-mode tests against a commercial-models-only baseline. The release gives no sample size, tasks or period (cast.ai/press-release/kimchi-coding-hits-general-availability, 15 Jul 2026).
- "88%": CORRECTED 26 Oct by the reviewer. The agent missed it. kimchi.dev/enterprise, "Use the right model for every task" section, says "~88% of requests" run as self-hosted execution on the customer's GPUs, and "~12%" go to policy-approved planning models. The page gives no method for how the shares were measured. The same page names GLM 5, MiniMax M2.7 and Kimi K2.5 as the self-hosted models, so GLM 5 and Kimi K2.5 are confirmed as Kimchi models (all Chinese-origin).
- Hosting: serverless on Cast AI's inference cloud, or inside the customer's AWS, GCP, Azure or on-prem environment, including air-gapped. The release also claims ISO 27001, SOC 2 Type II and GDPR compliance. docs.kimchi.dev states no region.
- Important: the homepage says the platform can "keep model data inside" in either mode. The docs also say requests can route to external providers (AWS Bedrock named) with a surcharge. A buyer will want to know which route a given request takes.

Assumes: the release names no models at all, so the Chinese origin of the default models is visible only in the repo and homepage. A regulated buyer will find it in minutes.

## 2. Named examples of Chinese-origin open models in use

Strength of evidence varies. I found no bank among them.

| Who | What | Use | Source and date | Strength |
|---|---|---|---|---|
| Cursor (Anysphere) | Composer 2 started from Kimi K2.5. Cursor admitted this on 20 Mar 2026 after a developer spotted the model ID. Cursor said about a quarter of final compute came from the base. Moonshot said use was an authorised commercial partnership via Fireworks AI | Coding | venturebeat.com/technology/cursors-composer-2-was-secretly-built-on-a-chinese-ai-model-and-it-exposes-a ; tech.yahoo.com/ai/copilot/articles/cursor-admits-coding-model-built-184109599.html (Mar 2026) | Multiple outlets, Cursor quotes. Strong |
| Cursor Composer 2.5 on Kimi K2.5 | Same | Coding | Italian/Spanish blog only, May 2026 | Weak, not verified |
| Airbnb | Chesky reportedly said Qwen is one of 13 models behind its customer-service agent: "fast and cheap" | Customer service, not coding | tech.az, 23 Oct 2025 (secondary; I did not find Airbnb's primary transcript) | Medium |
| AWS Bedrock | Fully managed Qwen3 and DeepSeek-V3.1 (Sep 2025); more open-weight models added Dec 2025 | Hosting platform | siliconangle.com/2025/09/18/aws-adds-fully-managed-ai-models-qwen3-and-deepseek-v3-1/ ; aws.amazon.com/about-aws/whats-new/2025/12/amazon-bedrock-fully-managed-open-weight-models | Strong |
| Microsoft Foundry / Azure | DeepSeek R1 on Azure AI Foundry (early 2025, secondary blog). Kimi K3 via Fireworks on Foundry, 30 Jul 2026, handled with Microsoft procurement, identity and governance | Hosting platform | technode.com/2026/07/30/moonshot-ais-kimi-k3-reaches-enterprise-users-through-fireworks-on-microsoft-foundry/ | Strong for K3; medium for R1 |
| Fireworks AI | Kimi K3 with "US-hosted inference and zero data retention options" (vendor statement) | Hosting platform | tipranks.com/news/private-companies/fireworks-ai-highlights-enterprise-focused-launch-of-kimi-k3-model (2026) | Vendor claim |
| Together AI, Baseten | List Kimi K3 | Hosting platform | beri.net comparison, Oct 2026 | Weak, single blog |
| Perplexity | R1-1776: DeepSeek-R1 post-trained to remove CCP-aligned censorship, MIT weights on Hugging Face, released 19 Feb 2025 | Search/Q&A | huggingface.co/perplexity-ai/r1-1776 | Strong that it exists; where it was hosted is unclear |
| Cognition (Windsurf) SWE-1.5 | Built on an unnamed "leading open-source base model", served on Cerebras. I could not confirm it is Chinese | Coding | simonwillison.net/b/9098, 29 Oct 2025 | Origin not confirmed. Do not claim it |
| Chinese banks | Bank of Beijing, Bank of Chongqing, Bank of Jiangsu, Postal Savings Bank of China and others adopted DeepSeek-R1 | Banking, inside China | yicaiglobal.com/news/integrating-deepseek-is-cost-effective-solution-for-small-medium-banks-insiders-believe (early 2025) | Medium; not a UK/EU comparator |
| Cloudflare, Vercel, Hugging Face, Google Vertex | Not verified in my searches | n/a | n/a | Not included |

Banks in the West: Shows nothing. Evident (evidentinsights.com/bankingbrief/what-deepseek-really-means-for-business) says open-source use in banking is rare and points to Goldman Sachs, Capital One and Ally using open models, but the snippet does not name the model family, so it does not show they use Chinese ones. Risk.net (risk.net/risk-management/7961265/deepseek-success-spurs-banks-to-consider-do-it-yourself-ai) says DeepSeek made banks consider building their own models. I found no named Western bank running Qwen, DeepSeek, Kimi, GLM or MiniMax in production. State this plainly if asked.

Pattern (Assumes): users are cost-driven AI-native software companies and hyperscaler marketplaces. Even Cursor was criticised for not disclosing the base.

## 3. Regulated-buyer view

Shows:
- Italy: data regulator blocked the DeepSeek app in January 2025 over unclear personal-data handling.
- Germany: Berlin commissioner called transfers of user data to China unlawful under GDPR and asked Apple and Google to review the app (2025).
- South Korea: PIPC suspended new downloads in February 2025.
- Australia: banned DeepSeek on federal government devices in February 2025.
- Sources: silicon.co.uk, heise.de/-10284153, finance.yahoo.com Reuters factbox (all 2025).
- All of these target the vendor's app/API, where data goes to China. None bans open weights run elsewhere.
- NIST CAISI, 30 Sep 2025: DeepSeek models lag US models on performance, cost and security, and censorship may pose risks (nist.gov/node/1898176). Secondary reports quote 12x more likely to be hijacked than US models; I did not confirm that figure at NIST.
- NIST CAISI on Kimi K2 Thinking (nist.gov/node/1900996, date not captured): SWE-bench Verified 56.2 versus 63.0 for GPT-5 and 66.7 for Claude Opus 4 in CAISI's runs. Heavily censored in Chinese, much less in English (about 7%).
- CrowdStrike, Nov 2025 (crowdstrike.com/en-us/blog/crowdstrike-researchers-identify-hidden-vulnerabilities-ai-coded-software/): DeepSeek-R1 produced code with severe vulnerabilities up to 50% more often when prompts contained topics sensitive to the CCP. Baseline vulnerable-code rate 19%. It is not claimed to be deliberate. No independent replication found. It tests DeepSeek-R1, not Kimi or MiniMax.
- Commentary (secondary, July 2026, intuitionlabs.ai; German law-firm analysis at compound.law): self-hosted open weights carry a materially different risk to the hosted API, but still need normal validation and vendor due diligence. Not banking-specific.
- EU AI Act (secondary commentary, qovery.com): a deployer running these internally has narrow duties unless the use is Annex III (for example credit scoring). Commission enforcement against GPAI providers began 2 Aug 2026. Not an official Commission statement.

Not found: any FCA, PRA, EBA, ECB or BaFin statement that specifically addresses Chinese open-weight models (my search returned nothing relevant). US model-risk guidance (SR 26-2, April 2026) excludes generative AI but expects broader risk principles to apply. DORA third-party-risk rules apply to any ICT provider, which would include Kimchi and Cast AI, but I found no source tying them to Chinese-origin models. Someone should check those regulator sites directly.

Remaining concerns once weights run inside your VPC (Assumes, informed by the above):
1. Provenance and backdoors: weights cannot be fully audited, and the CrowdStrike result is the type of finding that worries security teams.
2. Alignment and censorship: behaviour on politically sensitive content, and possible quality drift in code.
3. Licences: Moonshot publicly questioned Cursor's licence compliance, so check the terms for each model.
4. Supply chain: update cadence, and whether a future US restriction could remove access.
5. Reputation: customers and the board asking "why is a Chinese model touching our code?".
6. Hosting route: "data stays inside" holds only if the request is not routed to an external provider.

## 4. Coding quality and cost versus US frontier models

- Moonshot (vendor), Kimi K2 Thinking, late 2025: SWE-bench Verified 71.3 versus GPT-5 (high) 74.9 and Claude Sonnet 4.5 77.2 (huggingface.co/moonshotai/Kimi-K2-Thinking). Vendor claim, with some baselines re-run by the vendor.
- NIST CAISI (government, independent): 56.2 versus 63.0 and 66.7 for the same model class. Different harness, so do not merge the two. It also says Kimi K2 Thinking is below leading US models on agentic cyber and software tasks (nist.gov/node/1900996).
- Cast AI: MiniMax M3 scores 59% on SWE-bench Pro, a vendor claim. Kimchi "matches or exceeds" a commercial-only baseline at 2.5x lower cost, from internal tests.
- I did not find an independent 2026 comparison of current Chinese open models against current Claude or GPT versions. Newer models (K2.5, K3, M3) post higher vendor numbers than the ones CAISI tested.
- Cost: open-weight inference is cheaper by design (Cursor and Airbnb both cite cost), but I have no independent per-token figures to cite.

Shows: independent evaluators found a gap of roughly 7 to 10 points on SWE-bench Verified for the models they tested. Assumes: the gap is narrower on newer models but unproven.

## 5. Balanced summary

Who and why (Shows): AI-native software firms (Cursor, Airbnb) and cloud marketplaces (AWS, Microsoft with Fireworks) use Chinese-origin open models mainly for cost and speed, usually fine-tuned or hosted in the US. Regulators have acted against the Chinese vendor's own app and API. I found no Western bank on record using these models.

What a UK/EU financial-services platform lead would worry about (Assumes):
- Can I show an auditor where the data goes and which model touched it?
- Model provenance and the CrowdStrike-style hidden-behaviour question.
- Third-party and concentration risk under DORA/PRA expectations for Cast AI itself.
- Board or customer reaction to the origin of the model.
- Whether the "88%" and "2.5x" numbers will survive a procurement challenge.

How a PMM should frame it (Assumes):
- Do not avoid or hide it. The origin is easy to find, and Cursor was criticised for non-disclosure.
- Turn it into a risk the buyer controls: name the models and origin up front; separate "weights in your VPC" from "vendor API in China"; offer a model allow-list/deny-list by origin or by name so a bank can run only US or EU models (policy-enforced routing is already a Kimchi theme); show the audit trail of which model handled which request; be explicit on the external-routing path.
- Back claims with evidence: publish the shadow-test method behind 2.5x, drop or source 88%, and cite independent figures such as the CAISI gap rather than only vendor ones.
- Do not claim "compliant" or "approved by regulators". No regulator statement supports that.
- Position the honest limit: for the strictest buyers, the answer is a non-Chinese-only policy setting, which also shrinks the cost saving. Say how much.

## Plain-English summary (10 lines)

1. Kimchi mostly sends work to Chinese-made open models, mainly Kimi and MiniMax, plus one NVIDIA model.
2. Its own press release names no models, but the code repository and website do.
3. Cursor built its Composer 2 coding model on Kimi, and only admitted it after a developer found out.
4. Airbnb reportedly uses Qwen for customer service, and Amazon and Microsoft host Qwen, DeepSeek and Kimi for customers.
5. I found no Western bank on record using these models, and I will not pretend otherwise.
6. Regulators in Italy, Germany, South Korea and Australia acted against DeepSeek's own app, because user data goes to China.
7. Running the model yourself keeps data inside your environment, which experts say is a different and lower risk, but it does not remove worries about hidden behaviour, censorship, licences and reputation.
8. A US government test found these models trail US ones on coding by roughly 7 to 10 points, though newer models may have closed some of that.
9. Kimchi's "2.5x cheaper" is its own test, and I could not find the "88%" figure anywhere.
10. Best framing: be upfront about origin, give banks control to pick or block models, show the audit trail and publish the evidence.
