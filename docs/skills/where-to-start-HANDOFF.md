# where-to-start: handoff for a new session

Read this first. Written 13 Nov 2026 from the session "PMM app status check".

## What Islam wants
A **strong, open-source Claude skill** for the moment every product marketer hits: **"Where do I start?"** (also "who should we go after first?", "pipeline is flat, who do we focus on?"). It should be the first skill in a public GitHub library of skills for product marketers, alongside `competitor-ads`. Nothing gets published until Islam has seen and approved it.

## How Islam wants to work
- **Plain, easy English.** He found earlier versions confusing. Explain in simple steps with a concrete example before going deep.
- **Show, then build.** Show the idea or the change, wait for his OK, then edit.
- **Strong, not quick:** check every claim, especially tools, prices and what a connector can really do. Search the Claude connector directory before naming a connector.
- **No polls or interviews.** He considers the "where do I start" problem already proven; don't propose validating it.
- **No take-home or interview material** in anything public: no Kimchi, Cast AI or the real numbers from that exercise. Examples must be fictional and labelled.
- **Never publish** (public repo, posts) without his explicit OK. Cloud sessions cannot create GitHub repos: Islam creates an empty repo, then a session attaches it and pushes.

## Where the skill stands (in this repo)
`.claude/skills/where-to-start/` (option A: one folder, one install, "skills inside the skill"):
- `SKILL.md`: the 5 steps in plain words: 1 write down the question, 2 look at the facts, 3 pick one group, 4 test it, 5 learn and adjust.
- `research/your-customers.md` (2a), `buying-signals.md` (2b), `buyer-voice.md` (2c), `competitors.md` (2d).
- `test/test-design.md` (step 4: size, rules, Works / Fails / Unclear / Broken table).
- `reference/one-page-output.md` (the final page and checklist).
- Review notes from the earlier version: `docs/skills/market-bet-REVIEW.md` (the skill used to be called `market-bet`).

## Agreed but NOT done yet
1. **Buyer voice (2c), three layers:**
   - Layer 1, inside the company first: sales calls, support tickets, lost-deal notes, cancellation reasons.
   - Layer 2, find where this buyer talks before listening: a table by buyer type (software buyers: Reddit, Hacker News; business owners and trades: Facebook groups, trade forums, Google reviews; office roles: LinkedIn, Slack communities), with **reviews of competitors** (G2, Capterra, Trustpilot, Google, app stores) as the hidden gold. Claude proposes the places and asks Islam to confirm.
   - Layer 3, be honest about what needs a login (private groups, LinkedIn, Slack): Claude says what to look for and the user reads it.
2. **Competitors (2d):** add their reviews, your lost deals and their job ads as sources; ads are now covered by the separate `competitor-ads` skill (already linked).
3. **A tool ladder in every research file:** free (Claude, public pages, the user looking) → low cost (Apify free plan, Apollo free plan) → paid (ZoomInfo, Semrush and similar). Mark each tool optional, with cost and who can use it. Facts found: Apify free about $5 a month of credits; Apollo free about 75 credits a month, its Claude connector may need a paid Claude plan; start with Claude because it is cheaper.
4. **Check connectors before naming them:** confirmed in the directory search: Apollo.io, ZoomInfo, Clay, Crunchbase, Salesforce (beta), HubSpot, Semrush, Ahrefs, Similarweb, Firecrawl, Vibe Prospecting. Not found: Gong, Apify (Apify may offer its own connector; unconfirmed).

## Open questions for Islam
- Is the 5-step structure right, or does it still feel too heavy?
- What should the first public release contain: `where-to-start` alone, or with the two follow-on moments ("who exactly is the customer?" → `find-your-icp`, "how do I get leads?" → `first-leads`)?
- Repo name for the public library, and whether `competitor-ads` lives in it or stays separate (a package is ready in `open-source/competitor-ads-skill/`, waiting for an empty public repo).
- A test run on a real public company before publishing.

## Related
- `competitor-ads` skill: `.claude/skills/competitor-ads/` (asks platforms, country and time period; findings; saves to computer or Notion).
- LinkedIn post drafts on the method: `docs/linkedin-drafts/market-bet-method-posts.md`.
