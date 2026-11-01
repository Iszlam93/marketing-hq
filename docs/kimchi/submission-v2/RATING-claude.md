# Interviewer rating (Claude), 28 Oct 2026

I'm playing the panel: product and engineering leadership at Cast AI. I've read the brief, the two pages (current version) and `script-full.md`.

## A. The submission (1–5)

| | Score | Why |
|---|---|---|
| Brief fit | 4 | Every required part is there, including an inconclusive outcome. The hours are still blank. |
| Evidence | 4 | A clear chain (market → competitors → job ads), each number sourced, shows vs assumes. The samples are small (15 and 17 ads), and the coding went through a summarising tool. |
| Segment choice | 3 | Finance on governance is defensible, but tech is the bigger group, 8 of the 11 target firms are under 1,000 staff, and Devin is entering UK finance now. |
| Positioning and message | 4 | "Limits set before" is a real gap, and the line is short and memorable. Risk: it can be read as the blanket cap Devin attacks. |
| Test design | 3 | Executable, with rules set in advance and a decision per outcome. But the samples are small, the cells use mixed channels, and the 11-firm cell may sit below LinkedIn's audience minimum. |
| Honesty about confidence | 5 | Says "medium", names the weakest assumption, and tests it with one lead-form question. |
| Seniority and insight | 4 | Appendix D (proof doesn't match the headline, "build" is the real rival, the model-origin risk), the smart-budgets ask and the AI process all show judgement beyond the brief. |

## B. The script (1–5)

| | Score | Why |
|---|---|---|
| Structure and flow | 4 | Opening points → bet → how → evidence → cuts → test → close follows the page. |
| Clarity for engineers | 4 | Plain and concrete. One gap: it never says exactly what Kimchi *enforces* for Claude Code versus only *reports*. |
| Time | **2** | **About 1,716 words, roughly 12.3 minutes at a normal pace,** not 10. The section labels underestimate: evidence runs ~3.1 min, the test ~2.8 min, the opening ~1.6 min. |
| Persuasiveness | 4 | Strong opening, honest close ("where you think it breaks"). |
| Handles weak points first | 4 | Buy vs build, routing and the self-hosting caveat are raised before we ask. Model origin isn't. |

## C. Hire signal: **Yes**, if the Q&A holds
The thinking is structured, evidence-led and honest, and appendix D shows the candidate sees things the team may not. What would move me to "strong yes" is crisp answers on what Kimchi enforces, and on why a bank picks Kimchi over Devin now that Devin is in London.

## D. Seven questions I'd ask (hardest first)

1. **"For a team on Claude Code, does Kimchi enforce limits, or only report?"** Strong answer: limits apply to traffic that goes through Kimchi's gateway or keys; for Claude Code that means routing it through Kimchi's proxy, otherwise it's reporting only. *Prepared: partly* (the pages say "covers every agent run through it", but the script doesn't explain this).
2. **"Devin just opened in London to sell to banks, with Citi as proof. Why would a bank pick Kimchi?"** Strong answer: Devin sells its own agent in its cloud; Kimchi governs the agents a team already uses, Claude included, with limits set first and the option to run in your own cloud. Then admit Devin's proof lead and the case-study plan. *Partly.*
3. **"Your default models are Chinese-origin. How do you sell that to a bank?"** Strong answer: say it openly, let buyers approve or block models, frontier models on their own key, and an EU-origin option to push for. *No* (only in appendix D).
4. **"A company hiring an AI-rollout role doesn't have that person yet. Who do you actually reach?"** Strong answer: the leader who opened the role (VP Engineering or CTO) now, and the hire once they start; the one-pager is built for that handover. *No.*
5. **"8 of your 11 firms are under 1,000 staff. Do they have the budget and enough engineers to need team limits?"** *No.*
6. **"How confident is a 21-click lead?"** Strong answer: about 90% for the top two at these numbers; it's directional and confirmed by calls; extend if it's close. *Yes.*
7. **"If ad C wins, what changes?"** Strong answer: lead with routing, keep limits as the proof, and check whether tech fits better. *Yes.*

## E. Top 5 script changes

1. **Cut to about 10 minutes.** Drop opening point two, because it repeats section 3's gap. Replace: "Two: every tool limits its own spend, and competitors' ads talk about spend after it happens…" with nothing, and say "two things" instead of "three". That saves about 50 words.
2. **Section 3, market paragraph:** cut "Proving the value of AI is real too, but Jellyfish and DX already sell exactly that. Model choice is Kilo's message." The dots show it. That saves about 25 words.
3. **Add the enforcement truth to section 1, after the positioning:** "To be precise: Kimchi enforces limits on everything that runs through its gateway, including Claude Code when it's routed through Kimchi. Otherwise it reports usage."
4. **Add to the trigger line in section 1:** "…it's visible on LinkedIn. I reach the leader who opened the role now, and the new hire when they start."
5. **Fix the timing labels** (opening ~1.5, evidence ~2.5, test ~2.5) and rehearse with a timer. Aim for under 11 minutes.
