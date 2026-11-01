# Marketing HQ: data contract (slice 1)

Owner: CTO (Claude Opus 5.5). Everyone builds against this contract. Change it only through the CTO.

## Where data lives

- **App source:** `marketing-hq/projects/<id>.json` at the repo root, one file per project.
  - The app reads it the same way Brand HQ does: local disk in development, the GitHub Contents API in production.
- **Notion:** a mirror, under a private "Marketing HQ" page, with a Projects database and a Steps database. Later, a Claude Code routine keeps Notion and the JSON in sync.

## The engine: the 7-step PMM cycle

| n | key | Title | Phase |
|---|---|---|---|
| 1 | evidence | Evidence | prepared |
| 2 | target | Target | prepared |
| 3 | message | Message | prepared |
| 4 | test | Design the test | prepared |
| 5 | run | Run the test | in_role |
| 6 | review | Review results | in_role |
| 7 | scale | Scale | in_role |

Project modes:
- `discover`: no ICP yet. Start at step 1.
- `icp_exists`: validate an existing ICP. Start at step 2, with step 1 as a light check.

## JSON shape (TypeScript)

```ts
type Link = { label: string; href: string };            // href: https URL or repo-relative path

type Metric = { label: string; value: string; source: string };

type Step = {
  n: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  key: "evidence" | "target" | "message" | "test" | "run" | "review" | "scale";
  title: string;                  // e.g. "Evidence"
  question: string;               // the question this step answers, e.g. "Is the pain real, and where?"
  phase: "prepared" | "in_role";
  status: "done" | "in_progress" | "next" | "not_started";
  did: string[];                  // what I did, 3-6 short bullets, first person "I"
  found: string[];                // what I found, 2-5 bullets, with numbers where they exist
  metrics: Metric[];              // 0-4 headline numbers, each with a source
  output: { summary: string; links: Link[] };   // what this step produced
  decision: string;               // the decision taken at the end of the step
  confidence?: "high" | "medium" | "low";
  caveats: string[];              // honest limits (0-3), e.g. "forum posts are a signal, not proof"
  learn: {                        // the learning layer: why a PMM does this
    why: string;                  // 2-3 sentences, plain English
    doneWell: string[];           // 2-3 signs it was done well
    mistakes: string[];           // 2-3 common mistakes
    terms: { term: string; meaning: string }[];  // 0-4 glossary items (e.g. ICP, DORA, CTR)
  };
};

type Outcome = {
  if: string;                     // e.g. "Ads weak, but 1:1 accounts engage"
  then: string;                   // e.g. "Write new messages in their words"
  reopens: 1 | 2 | 3 | 4 | 5 | 6 | 7;   // the step it sends you back to
  tone: "win" | "loop" | "wait";
};

type Project = {
  id: string;                     // "kimchi"
  name: string;                   // "Kimchi: first EMEA bet"
  product: string;                // "Kimchi (Cast AI), AI coding platform"
  mode: "discover" | "icp_exists";
  objective: string;
  status: "active" | "paused" | "done";
  currentStep: number;
  updated: string;                // YYYY-MM-DD
  summary: { segment: string; buyer: string; trigger: string; headline: string; budget: string; timeline: string };
  links: Link[];                  // key artifacts
  steps: Step[];                  // exactly 7, in order
  loop: Outcome[];                // the in-role decision loop (5-6 items)
};
```

## Rules

- Write in the first person ("I"), in plain English, with short sentences. No "we".
- Every number carries a `source`.
- No Kimchi or Cast AI logos or branding in the app. Kimchi is the subject data only.
- Facts come only from `docs/kimchi/*` and the published artifacts. Never invent numbers.
