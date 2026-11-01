# Q1 Research: What Kimchi offers end to end, and promises not yet made

Date: 2026-10-26. Public sources only, no sign-ups, no paid APIs.
Legend: **Shows** = a source says it. **Assumes** = my inference. Quotes are under 15 words.
Base URLs: K = https://kimchi.dev, D = https://docs.kimchi.dev/docs, GH = https://github.com/getkimchi/kimchi
Prominence: yes = on home/product nav or headline; partly = on a product/enterprise page only; no = only in docs/blog/GitHub.

## 1. Feature inventory

| # | Feature | Plain words | Who benefits | Source | Marketed prominently? | Basis |
|---|---|---|---|---|---|---|
| 1 | Kimchi Coding CLI/TUI (open source, Apache-2.0) | Terminal coding agent that reads files, writes code, runs commands | Developer | GH; D/coding-overview.md | yes | Shows |
| 2 | Multi-model orchestration | One task is split across planner, builder, reviewer, explorer models; cheaper open models do most of the work | Dev, finance | D/coding-overview.md; K/platform | yes | Shows |
| 3 | /ferment autonomous mode | You approve a plan once; agent builds milestone by milestone, opens a PR, resumes across sessions | Developer | D/coding-ferment.md; K/blog/say-hello-to-kimchi | yes | Shows |
| 4 | Independent evaluator / judge | A reasoning model grades each step A to F against your original intent; charter audit at end | Dev, eng lead | D/coding-ferment.md; K/platform | partly | Shows |
| 5 | Kimchi Model Router ("auto") | Send model name `auto`; a small classifier picks the model per request; no markup | Dev, finance | D/model-router.md | partly | Shows |
| 6 | Inference API (serverless open models) | OpenAI/Anthropic-compatible endpoint; pay per token; change base URL | Dev, platform | K/inference; D/model-apis-pricing.md | yes | Shows |
| 7 | External providers via BYOK + flat surcharge | Use Claude/OpenAI etc. through the same gateway; $0.20 in / $0.30 out per 1M tokens extra | Platform, finance | D/model-apis-pricing.md | partly | Shows |
| 8 | Proxy in front of existing tools (Claude Code, Cursor, Cline, Codex, OpenCode, Continue) | Keep your tools; get attribution, budgets, routing | Platform, finance | K/blog/kimchi-proxy-in-front-of-your-stack; D/setup-recipes.md | no (blog + docs) | Shows |
| 9 | Hard budgets (org, team, user, key, model) | Spend stops at the limit; org hard cap overrides all; fallback to open model possible | Finance, platform | D/reporting-budgets.md; K home | yes | Shows |
| 10 | Real-time cost attribution and tags | Spend by developer, team, model, tag/project | Finance, platform | K home; D/coding-tag-sessions.md | yes | Shows |
| 11 | Reporting suite | Adoption, Usage, Productivity (sessions, PRs, commits, lines), Analytics, Teams | Eng lead, finance | D/reporting-overview.md | partly | Shows |
| 12 | OpenTelemetry metrics from Claude Code/OpenCode | Per-developer token, cost, tool activity into the console | Platform, finance | D/claude-code-otel.md | no | Shows |
| 13 | Deployment: serverless, customer VPC (K8s on AWS/GCP/Azure/on-prem), dedicated B300 GPUs | Choose where models run and move later | Security, platform | K/enterprise; Cast AI press release | yes | Shows |
| 14 | Hosted model deployment + autoscaling + scale-to-zero + SaaS fallback | Run open models in your Cast AI-connected cluster; sleeps when idle; external fallback while waking | Platform, finance | D/hosted-model-deployments.md; D/hosted-autoscaling.md | no | Shows |
| 15 | Break-even modeling serverless vs self-hosted | Compare cost using your workloads | Finance | K/enterprise | partly | Shows (no docs page found: Assumes it is a console feature) |
| 16 | No-training / data-sovereignty claims | Prompts, code, outputs not used for training; approved models run without outbound calls | Security | K/security; K/enterprise | yes | Shows |
| 17 | Compliance badges | SOC 2 Type II, ISO 27001, GDPR; PCI DSS AOC; HIPAA-ready with BAA | Security | K/trust-center; K/enterprise | yes | Shows |
| 18 | Identity: SSO/SAML/OIDC, RBAC, SCIM-ready | Enterprise sign-in and roles | Security | K/enterprise; GH release v1.19.0 (Cast AI SSO login) | partly | Shows |
| 19 | Audit: every prompt, completion, tool call to SIEM | Immutable trail | Security | K/enterprise | partly | Shows (docs only show workspace/template audit log: D/coding-audit-log.md) |
| 20 | Skills registry / skills + project rules | Approved catalogue of tools, prompts, skills; SKILL.md on demand | Security, dev | K/enterprise; D/coding-skills.md; GH v1.20.0 skill gating | partly | Shows |
| 21 | MCP gateway / Connections | Org registers MCP servers and OAuth apps once; gateway attaches credentials; agent never sees tokens | Security, platform | D/coding-connections.md | no | Shows |
| 22 | Workspaces (new) | Persistent cloud dev machines from admin templates; egress allowlist; hibernate after 24h idle; quotas | Platform, security | K/workspaces; D/coding-remote-sessions.md | yes (marked New) | Shows |
| 23 | Credential injection at boundary | Secrets attached by gateway on outbound calls; never on disk | Security | K/workspaces; D/coding-remote-credentials.md | partly | Shows |
| 24 | Teleport (/teleport, /remote-sessions, /sync) | Hand a running session to the cloud; reconnect later | Developer | K/teleport | yes | Shows |
| 25 | Web IDE, VS Code extension, ACP (Zed/JetBrains) | Work from browser or editor | Developer | D/coding-web-ide.md; D/coding-vscode.md; D/coding-acp.md | partly | Shows |
| 26 | Kimchi Studio (desktop app) | Visual workspace for parallel agent sessions; Code mode; Design mode "on the way" | Developer, non-engineers (Assumes) | K/studio; D/studio-overview.md | yes | Shows |
| 27 | Code Review (add-on, $15/user/mo) | Bot reviews PRs, inline findings with severity, summary score, per-repo model choice | Dev, eng lead | K/code-reviewer; K/pricing | yes (nav) | Shows |
| 28 | LSP and DAP debugger | Type-aware edits, breakpoints and stepping for the agent | Developer | D/coding-lsp.md; D/coding-dap.md; K/blog/native-debugger-support | no | Shows |
| 29 | Migration import from Claude Code/OpenCode/Cursor | `kimchi setup` brings over MCP servers, skills, config | Developer | K/platform; GH README | partly | Shows |
| 30 | Local Ollama models | Run local models, no API credits | Developer | D/coding-ollama.md | no | Shows |
| 31 | Bundled pptx/pdf/docx/xlsx skills; Jira issue selection | Agent handles office files; links PRs to Jira keys | Dev, PM (Assumes) | GH releases v1.20.0, v1.21.0 | no | Shows |
| 32 | Startup Program | Discount/credits for eligible startups, terms not listed | Founders | K/pricing | no | Shows |
| 33 | Tool-call observability in Workspaces | What agents did and what a session cost | Security, finance | K/workspaces | labelled roadmap | Shows (not shipped) |

Plans (K/pricing): Open source free (CLI, bring your own inference); Coder $20/mo, $25 credits, max 3 seats; Teams $35/seat/mo, $45 credits, max 150 seats, adds Studio, team budgets and RBAC; Enterprise custom; Code Review add-on $15/user/mo. Shows.

Headline claims: "AI Agents, governed at scale" (K home). 2.5x cheaper with matching quality in shadow-mode tests (Cast AI press release, 15 Jul 2026). Harness beat a rival harness by 22 points on one model (K/blog/deepseek-harness-vs-kimchi-terminal-bench). All Shows as vendor claims.

## 2. Cast AI parent strengths Kimchi could inherit but does not state

Kimchi only says "Fermented by the creators of Cast AI" and "backed by Cast AI's security program" (K home, K/inference). Shows.

| Parent strength | What Kimchi could promise | Already mentioned? | Basis |
|---|---|---|---|
| Kubernetes automation (autoscaling, node-level optimisation) | Self-hosted model fleets that right-size themselves | Partly: press says GPU inference "optimizes down to the node"; docs list autoscaling and scale-to-zero | Shows (mechanics) / Assumes (promise) |
| Cloud cost optimisation (FinOps) | One view of AI spend and the infrastructure under it; savings you can prove | Not stated. Docs require a Cast AI-connected cluster in automated mode (D/hosted-model-deployments.md) | Shows (dependency) / Assumes (promise) |
| GPU / inference infra | Capacity and price stability for open models; B300 dedicated option; availability when frontier vendors have outages | B300 mentioned in press only; no capacity or uptime promise | Shows / Assumes |
| Multi-cloud (AWS, GCP, Azure) portability | Avoid cloud lock-in for AI workloads | Implied by "AWS, GCP, or Azure" | Assumes |
| Enterprise security programme and trust centre | Same audited controls covering the AI layer | Yes, as badges | Shows |
| Existing enterprise customers (BMW, Cisco, FICO, etc.) | Cross-sell trust | Press says they use Cast AI, not Kimchi | Shows; not a Kimchi proof point |

## 3. Candidate promises not yet made (or buried)

### (a) Supported by a source

**P1. "Keep the tools you have. Add control in one place."**
- Evidence: proxy post (K/blog/kimchi-proxy-in-front-of-your-stack) and setup recipes (D/setup-recipes.md). Four stages per request: auth, rate limit, budget, routing. Shows.
- Unverified: real adoption; the post says Cursor Tab, Cmd+K and Composer stay on Cursor's backend, 200K context cap, Windsurf only via Roo Code. Production effort.
- Buyer: platform lead, finance. Basis: Shows (evidence), Assumes (that it deserves headline status).

**P2. "Agents never hold your keys."**
- Evidence: credentials injected at the gateway, write-only, per-template egress allowlist (K/workspaces; D/coding-connections.md; D/coding-remote-credentials.md). Shows.
- Unverified: third-party audit; GitHub issue #1242 says `setup-tools` exposes credentials and edits configs without backups (GH/issues). Applies to CLI setup, not workspaces.
- Buyer: security. Basis: Shows (evidence), Assumes (the generalised wording).

**P3. "Your model bill has a ceiling, and the loop that breaks it gets stopped."**
- Evidence: budget precedence with org hard cap (D/reporting-budgets.md); runaway-loop termination (press release); budget-clamped bash timeouts (GH release v1.18.1); stuck-loop block after 3 failed starts (D/coding-ferment.md); ~$150 overnight loop anecdote (proxy post). Shows.
- Unverified: whether budgets reset monthly, how fast spend counts, how pooled team budgets behave (docs silent).
- Buyer: finance, platform. Mostly marketed as "hard caps"; the loop-kill angle is buried. Basis: Shows.

**P4. "Prove which model touched which code."**
- Evidence: proxy records the serving model; aliases not silently swapped; pinned open-weight models when self-hosted (K/blog/12-security-questions-ai-coding-agents). Per-request traces (K/enterprise). Shows.
- Unverified: immutable SIEM export is not documented in the docs index; the blog says retention windows are "documented" but does not give them.
- Buyer: security, compliance (DORA/regulated). Buried in a blog Q&A. Basis: Shows.

**P5. "Quality you can see before merge."**
- Evidence: evaluator scores each milestone; you pick the evaluator model (K/platform); charter audit of met/waived/unmet clauses (D/coding-ferment.md); Code Review with severity and audit storage (K/code-reviewer). Shows.
- Unverified: score scale for Code Review not stated; accuracy of the judge; Terminal-Bench is self-run on one model and does not link its methodology. The independent reviewer found /ferment struggles with large tasks (justingarrison.com/blog/2026-09-08-kimchi/).
- Buyer: engineering leader, developer. Basis: Shows (features), Assumes (the "quality you can see" framing).

**P6. "Spend tied to shipped work."**
- Evidence: tags by project (D/coding-tag-sessions.md); PRs, commits, lines, sessions (D/reporting-productivity.md); Jira key on PRs (GH v1.21.0); phase tags explore/plan/build/review (D/coding-overview.md). Shows.
- Unverified: docs say numbers work "best as trends and ratios" and exclude manual commits; shared keys block per-user views. A true "cost per merged PR" metric is not documented. Basis: Shows (inputs), Assumes (the metric).
- Buyer: finance, VP engineering.

**P7. "Start on our cloud, leave for yours, change one URL."**
- Evidence: switch base URL to private endpoint; start serverless, move to self-hosted (K/enterprise); Apache-2.0 CLI (GH); OpenAI/Anthropic-compatible API (K/inference). Shows.
- Unverified: real migration effort; self-hosting requires a Cast AI-connected cluster in automated mode, only a subset of Ollama models, vLLM-only autoscaling (D/hosted-model-deployments.md, D/hosted-autoscaling.md); reviewer says it would not install on bare metal. So "no lock-in" is true for models and API, softer for infrastructure.
- Buyer: platform lead, procurement, CFO. Partly marketed. Basis: Shows (evidence) with caveat.

### (b) My own judgement (not supported by any source as written)

**P8. "Your AI coding keeps working when a frontier vendor does not."**
- Related evidence: SaaS fallback and budget fallback to an open model (D/hosted-autoscaling.md; proxy post); reviewer says Kimchi models stayed up during provider outages (justingarrison.com). Shows (pieces).
- Unverified: no SLA, uptime figure, or capacity guarantee anywhere. Single anecdote.
- Buyer: engineering leader. Basis: Assumes.

**P9. "Cast AI's GPU efficiency applied to your inference."**
- Related evidence: scale-to-zero, replica scaling, break-even modeling (D/hosted-autoscaling.md; K/enterprise); press line on node-level optimisation. Shows (mechanics).
- Unverified: no measured GPU utilisation or savings numbers for self-hosted inference. Basis: Assumes. Buyer: finance, platform.

## 4. Contradictions and weaknesses

| Issue | Detail | Source | Basis |
|---|---|---|---|
| Model names and prices differ page to page | Home: kimi-k3, minimax-m3. Blog: kimi-k2.6, minimax-m2.7. Platform: kimi-k2.7. Enterprise: GLM 5, MiniMax M2.7, Kimi K2.5. README: nemotron-3-ultra-fp4 | K home; K/blog/say-hello-to-kimchi; K/platform; K/enterprise; GH | Shows |
| "Eight models" vs nine in the table | Inference page | K/inference | Shows |
| Free claims are inconsistent | Home: "No lock-in, no credit card." Blog: $50 free credits. Pricing: Open source free but "No hosted inference." Coder gives $25 credits; docs do not say what happens when credits run out. Reviewer used a referral code for $25 | K home; K/blog/say-hello-to-kimchi; K/pricing; justingarrison.com | Shows |
| "No rate limits" vs rate-limit page | Overview says no rate limits; limits page says Starter limits are dynamic with load, Enterprise custom | D/coding-overview.md; D/model-apis-rate-limits.md | Shows |
| "Open-source only" vs proprietary routing | Blog says open-source only; inference/proxy route to Anthropic, OpenAI with surcharge | K/blog/say-hello-to-kimchi; D/model-apis-pricing.md | Shows |
| Compliance claims conflict | Enterprise and press: ISO 27001, PCI DSS. Security-questions blog: no ISO 27001 or PCI-DSS claims; FedRAMP Moderate in progress. Security page lists no certifications. Trust centre says Cast AI Group level | K/enterprise; K/blog/12-security-questions-ai-coding-agents; K/security; K/trust-center | Shows |
| Region claim vs list | Trust centre: customer picks region per workload. Security page: serverless GPUs in France, Israel, US only | K/trust-center; K/security | Shows |
| Audit scope | Enterprise says every prompt, completion and tool call is logged; docs show audit log for workspaces/templates only; Workspaces page lists tool-call observability as roadmap | K/enterprise; D/coding-audit-log.md; K/workspaces | Shows |
| Identity depth | Enterprise lists SSO, SAML, OIDC, SCIM-ready; user-roles doc has three coarse roles, no SSO/SCIM mention, role changes not audit-logged | K/enterprise; D/user-roles.md | Shows |
| The 88% / 12% split | "~88% self-hosted, ~12% complex" given with no method | K/enterprise | Shows (claim), Assumes (unsupported) |
| Cost evidence is self-reported | 2.5x (shadow mode), 94% price gap (list price, not task cost), 1/13th hackathon, 12x testimonial, 60% internal; no methodology published. Blog also titles "$2,000/month" while body says $500 to $2,000 and cites no source for Microsoft/Uber | Press release; blog posts; Techzine | Shows |
| GA vs early access | Press release says GA but its link invites "join Early Access" | Cast AI press release | Shows |
| Press customers | Cast AI lists BMW, Cisco, FICO etc. as platform users, not Kimchi users; only Akamai quoted on Kimchi | Press release | Shows |
| Docs gaps | Budget reset period and speed undocumented; Code Review score scale and rate limits undocumented; Teleport quotas undocumented; Enterprise "request speed" undefined; per-plan feature checkmarks not readable on pricing | D/reporting-budgets.md; K/code-reviewer; K/teleport; K/pricing | Shows |
| Self-hosting is narrow | Needs Cast AI-connected cluster in automated mode, GPU driver specifics, Ollama subset only, up to 25 min deploy, vLLM-only autoscaling, wake-up 2 to 10 minutes | D/hosted-model-deployments.md; D/hosted-autoscaling.md | Shows |
| Product maturity signals | Reviewer: harness froze his computer, "not enterprise grade", /ferment weak on big tasks, open models trail frontier. GitHub: 12 open issues incl. CPU burn, lost typed message, doc errors; releases ship almost daily (v1.18 to v1.21 in 5 days) | justingarrison.com; GH issues and releases | Shows |
| Reviewer was sponsored | Review disclosed as sponsored by Cast AI | justingarrison.com | Shows |
| Productivity metrics limits | Excludes manual commits; lines come from edit calls not git; shared keys hide users | D/reporting-productivity.md | Shows |
| Open source ambiguity | Press says open source without naming license; repo is Apache-2.0 | Press release; GH | Shows |
| Weak independent coverage | Tech press is rewritten press release; no independent benchmark found | IT Brief, Techzine | Shows |

## 5. Summary in plain English (10 lines)

1. Kimchi is a coding assistant for software teams that runs mostly on cheaper open AI models instead of one expensive model.
2. The pitch is control: you set spending limits, see who spends what, and choose where the AI runs (their cloud or yours).
3. Around the core agent sit extras: a desktop app, a way to hand work to the cloud, cloud workspaces, and a PR review bot.
4. Its strongest proof points (2.5x cheaper, beats a rival on a test) come from Kimchi itself, with no published method.
5. Pages disagree on model names, free credits, rate limits and which security certificates exist, so the story is untidy.
6. Its parent, Cast AI, is expert at cloud and GPU cost savings, but Kimchi barely says so; that is the biggest unclaimed strength.
7. Strong promises that are already supported but hidden: works with the tools you already use; agents never hold your keys; you can see which model did what.
8. Another supported promise: your bill has a ceiling, and runaway agent loops get stopped.
9. A promise tying spend to finished work (PRs, projects) is possible but the numbers are only trend-level today.
10. Two ideas are my own judgement and need proof first: it keeps working when big vendors go down, and Cast AI's GPU savings apply to your own models.
