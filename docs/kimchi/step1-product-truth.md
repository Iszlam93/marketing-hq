# Step 1: What Kimchi is, for sure

26 Oct 2026. Built only from sources already checked: my own use of Kimchi (24 Oct), docs.kimchi.dev, kimchi.dev pages, the trust centre and GitHub. No new research.

**Tags:** **T** = I tested it in the product · **D** = stated in Kimchi's docs · **C** = Kimchi's marketing claim only · **X** = missing or not found

## In one sentence

Kimchi lets developers hand coding tasks to AI agents that work on their own, while the company sets hard spending limits, chooses which models run and where, and sees what the work cost.

## What it does, by job

### 1. Hand off the work (the agent)
| What | Tag | Note |
|---|---|---|
| Coding agent in the terminal, open source (Apache-2.0) | T, D | Installed it, v1.21.0 |
| `/ferment`: approve a plan once, the agent builds milestone by milestone and opens a PR | D | Can run headless (no person watching) |
| A separate "judge" model grades each milestone A to F | D | Its accuracy is unproven |
| Teleport: move a running session to the cloud and come back later | D | |
| Workspaces: cloud dev machines from admin templates, with restricted internet access | D | Marked "New" |
| Studio: desktop board where each card is a live agent session | C | Download available; Design mode "coming soon" |
| Code Review bot for PRs, $15/user/month add-on | C | Score scale undocumented |
| Imports an existing Claude Code setup | T | Saw the "skill conflicts" message |
| Works well on big tasks | X | Independent (sponsored) reviewer says `/ferment` struggles on large tasks |

### 2. Control the spend
| What | Tag | Note |
|---|---|---|
| Budgets per org, team, user and API key | T, D | Saw the Budgets screen; didn't test with real spend |
| Hard stop: requests fail with "budget exhausted" | D | |
| Budgets on service keys (for automated jobs) | D | So a CI job's key can be capped |
| Stuck-loop block after 3 failed starts | D | |
| A cap per session or per run | **X** | Not in the docs |
| Budgets set automatically from usage, or set by API | **X** | Manual in the console only |
| Budget reset period | **X** | Undocumented |

### 3. Choose the model and where it runs
| What | Tag | Note |
|---|---|---|
| Router picks a model per step ("auto") | D | |
| Most work on open models: GLM 5, MiniMax, Kimi (all Chinese-origin) | C | Model names differ page to page |
| "~88% of requests" on open models, "~12%" on stronger ones | C | No method given |
| Frontier models (Claude, OpenAI) on your own key, plus a surcharge | D | $0.20 in / $0.30 out per 1M tokens |
| Run models in your own cluster or VPC; on-prem and air-gapped claimed | D, C | **Needs a Cast AI-connected Kubernetes cluster** |
| Serverless GPUs in France, Israel, US | C | Trust centre |
| "2.5x cheaper" | C | Cast AI's own shadow test, unnamed baseline |

### 4. See what it cost and delivered
| What | Tag | Note |
|---|---|---|
| Cost by model, provider, team, developer | T | Empty-state reports seen |
| Cost per merged PR, "from billed spend" | T | Activity metric, not business value |
| Claude Code and OpenCode usage in the same reports (OpenTelemetry) | T, D | Reporting only, no control |
| Sits in front of Claude Code, Cursor, Codex as a proxy | D | Some Cursor features bypass it |
| Audit of every prompt and tool call, sent to a SIEM | C | Docs show workspace audit only; tool-call view is "roadmap" |

### 5. Trust and security
| What | Tag | Note |
|---|---|---|
| SOC 2 Type II (audited), ISO 27001, PCI DSS attestation | C | **Cast AI Group level**, covering Kimchi; reports under NDA |
| HIPAA-ready, BAA on request | C | Not a certification |
| Agents never see credentials (injected at the gateway) | D | |
| SSO, SAML, SCIM | C | Docs show only three coarse roles |

## Plans
Open source free (bring your own model key) · Coder $20/mo · Teams $35/seat (adds Studio, team budgets) · Enterprise custom · Code Review +$15/user.

## Gaps I saw myself (24 Oct)
- The free plan can't run a task without your own key, despite the "free" headline.
- The console greets everyone as a developer; Governance sits in the side menu.
- PR cost reporting is turned on per developer, so it's unclear whether an admin can enforce it.
- The CLI auto-updates by default, and a regulated buyer will want that controlled.

## What's still unknown (questions for the panel)
1. Can a budget stop one run, or only the monthly total?
2. Who are the paying customers today? Are the homepage logos Kimchi users or Cast AI users?
3. Does self-hosting work outside a Cast AI-connected cluster?
4. Can an admin enforce PR-cost reporting for every developer?
</content>
</invoke>
