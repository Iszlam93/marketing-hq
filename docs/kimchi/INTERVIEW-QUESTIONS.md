# Kimchi panel: interview questions and rehearsal notes

For Islam, rehearsing for the 60-minute panel on the take-home (due Wed 28 Oct 2026).
Built 25 Oct 2026 from the 2-page submission, the campaign appendix, the overview and the evidence files in `docs/kimchi/`.

How to read each question:
- **Why:** why they'd ask it.
- **Weak spot:** the part of the submission it attacks (section name in brackets).
- **Answer outline:** what to say, in your own words. The file or number behind it is in brackets.
- **Likelihood:** high, medium or low.

A few words used below:
- **CTR (click rate):** clicks divided by views.
- **ICP (ideal customer profile):** the type of company you sell to first.
- **ABM (account-based marketing):** marketing aimed at a named list of companies, not a broad audience.
- **OpenTelemetry:** a standard way for software tools to send usage data to another tool. Kimchi uses it to *see* what Claude Code does. Seeing is not the same as controlling.
- **Gateway:** a checkpoint that every request to an AI model passes through. Whoever runs it can cap, log or block requests.

---

## 1. The 5 questions most likely to come first

These are the openers. Have a 60-second answer for each.

### 1.1 "Walk us through your bet in two minutes. Why mid-size UK and EU finance?"
- **Why:** Every panel starts here. They want to hear if you can tell the story without the slides.
- **Weak spot:** All of it, but mostly "1 The bet" and "2 How I chose". The chain has many steps, and it's easy to get lost in the numbers.
- **Answer outline:**
  - "I started from Kimchi's own promise and asked who feels that pain enough to pay. The public Discord (~1,800 members) told me individuals came for free credits, so I targeted companies." (EVIDENCE.md 6b: "credits" 526 search results vs "governance" 2)
  - "Then I counted job ads. A company hiring an AI-rollout role is building what Kimchi sells. Out of 998 postings, 73 were real AI-rollout jobs. Finance was 29%, second to tech." (finance-size-check.md, section 2–3)
  - "Finance is the one of the two with strict data and vendor rules. So it needs everything Kimchi does, not just a cost tracker." (2x2, box A)
  - "I capped size at 5,000 staff because the giant banks build their own or buy direct, like Barclays with Claude Code. That left 11 firms. 7 of them are my 1:1 accounts." (news-factcheck.md claim 1; tier1-accounts.md)
- **Likelihood:** high

### 1.2 "How confident are you, and what's the weakest link?"
- **Why:** They're testing honesty. A senior PMM knows where the bet can break.
- **Weak spot:** "3 The evidence", the Shows / Assumes line. Job ads show hiring, not buying.
- **Answer outline:**
  - "Medium confidence. The test is the proof." (overview, "Confidence: medium")
  - "The weakest link is the step from 'they're hiring' to 'they'll buy'. A company hiring a platform engineer might be hiring to *build* this, not to buy it."
  - "Second weak link: I have no customer data and no interviews. That's why weeks 1–2 are 5–8 calls with platform leads before any money goes out."
  - "Third: competitors' customer stories show finance at only 12% and tech at 26%. That's a signal against me, and I put it on the page on purpose." (icp-lens2-adjacent-customers.md, 10 of 84 stories)
- **Likelihood:** high

### 1.3 "Why not tech? It's the biggest group hiring."
- **Why:** Tech is 40% of the jobs vs finance 29%. And Kimchi's current logos (Akamai, Cisco, Roku, Hugging Face) are mostly tech.
- **Weak spot:** "Left out: Tech companies" and the 2x2 box B.
- **Answer outline:**
  - "Tech is bigger, but it mostly needs spend visibility only. Cheap trackers like Vantage and pointfive already do that. So tech would push Kimchi into a price fight." (EVIDENCE.md section 4)
  - "Finance needs spend control *and* governance *and* data rules at the same time. That's where Kimchi's full product is a reason to buy, not a nice extra."
  - "I'm not ignoring tech. Tier 3 is 300 tech firms seeing the same control ad, so I get a read on finance vs tech for about $1,080." (appendix budget table)
  - "If tech clearly wins, I don't switch on one result. I run a focused finance vs tech test first." (submission, decision table row 2)
- **Likelihood:** high

### 1.4 "Your test measures clicks. Why should we care about clicks?"
- **Why:** Leadership cares about pipeline, pilots and revenue. A click on a guide is curiosity.
- **Weak spot:** "4 The test", "Rules, set before launch". The only properly measured thing is click rate.
- **Answer outline:**
  - "For $5k, I can measure one thing properly. I picked the least certain part: which message makes this buyer act. Clicks are the earliest signal I can measure with enough volume." (test-benchmarks.md section 3: lead-level differences need far more spend; ~7 leads per ad can't separate angles)
  - "Clicks don't decide the bet on their own. The 1:1 accounts are measured on replies, form fills and meetings. And I only scale when a message wins 2 rounds with 5+ meetings and 2+ pilots." (submission, section 5)
  - "If ads are weak but the 1:1 accounts engage, I don't kill the segment. I rewrite the messages in their words." (decision table row 3)
- **Likelihood:** high

### 1.5 "Is Kimchi actually able to do what your ads promise?"
- **Why:** Product and engineering are in the room. They know what's real.
- **Weak spot:** "3 The evidence", Product row ("Enforcement not tested"), and the ad copy in "4 The test".
- **Answer outline:**
  - "I signed up, installed the CLI and opened the console. I saw budget settings per team, user and API key, and a 'PR costs' report: what merged PRs cost, from billed spend." (product-walkthrough.md)
  - "What I didn't test: a cap actually stopping spend. The free plan has no Kimchi inference, so I couldn't run a task."
  - "I also saw that Claude Code shows up in the *reporting*. I didn't see controls over Claude Code."
  - "That's why the first two weeks include product confirming every claim before any ad goes live. If a claim isn't confirmed, that ad changes." (submission, Weeks 1–2)
- **Likelihood:** high

---

## 2. Questions by interviewer

### 2A. CMO / VP Marketing

#### A1. "Why LinkedIn ads as the test channel? Our buyers are engineers."
- **Why:** Engineers are known to ignore LinkedIn ads. They want to see you considered other channels.
- **Weak spot:** "4 The test", channel choice. No other channel is compared on the page.
- **Answer outline:**
  - "LinkedIn is the only paid channel where I can target by company list, industry, size and job title together. That's the only way to show the ad to 'platform leads at UK/EU finance firms up to 5,000 staff'."
  - "I looked at others. Reddit developer ads are cheap ($1–3 a click) but I can't target finance leaders. TLDR is $3,500–15,000 a send with no targeting. Pragmatic Engineer takes no sponsors." (test-benchmarks.md, "Other cheap channels")
  - "The 1:1 track (LinkedIn notes plus email) is the channel I trust most for 7 accounts. The ads are mainly for the message read."
- **Likelihood:** high

#### A2. "Your success rule says 'above the finance average (~0.55%)'. Where does 0.55% come from?"
- **Why:** A sharp marketer checks benchmarks.
- **Weak spot:** "Rules, set before launch", the Success column. **This number is mislabelled.** 0.55% is the UK *all-industry* median (ZenABM). The finance ranges are 0.35–0.52% and 0.30–0.55%. So 0.55% is the *top* of the finance range, not its average.
- **Answer outline:**
  - "Good catch. 0.55% is the UK median across all industries. For finance, the published ranges are 0.30–0.55%. So my bar is the top of the finance range, which is a high bar, not the average." (test-benchmarks.md, benchmarks table)
  - "I'd keep a high bar on purpose: a winning message should beat a normal finance ad, not just match it. But I'd relabel it 'top of the finance range'."
  - "My sample-size check assumes a normal ad gets about 0.4% and a clearly better one 0.6%. So a 0.6% winner clears both rules." (appendix, "the luck check")
- **Likelihood:** medium (high if someone reads the benchmarks file)

#### A3. "Why gate the guide? Gating kills reach."
- **Why:** A classic marketing debate.
- **Weak spot:** "The ABM campaign", Tier 2 flow (ads → gated guide → 3 emails).
- **Answer outline:**
  - "LinkedIn lead forms give 20–30% lower cost per lead than landing pages, and finance forms convert at about 6–10%." (test-benchmarks.md, lead gen rows)
  - "I need to know which *firms* engage, so a tier 2 firm can move up to tier 1 when 2+ people engage. Without a form, I can't do that."
  - "But the test reads click rate, which happens before the gate. So the gate doesn't bias the message test."
- **Likelihood:** medium

#### A4. "7 weeks for 7 accounts and $5k. How does this scale to a real EMEA pipeline?"
- **Why:** A CMO wants a growth path, not a science project.
- **Weak spot:** "5 How I'd keep it running if hired".
- **Answer outline:**
  - "This is round one of a loop, not a campaign. Each round answers one question: where does the funnel break? I only change the part that broke." (submission section 5)
  - "Scale when it repeats: a winning message for 2 rounds, 5+ meetings, 2+ pilots. Then the winning message goes on the website, ads and sales emails, and budget goes up on the tier that worked." (overview, "Scale what worked")
  - "The monthly job-ad refresh keeps feeding new hiring firms into tier 1."
- **Likelihood:** high

#### A5. Hard follow-up: "And if none of the three messages wins?"
- **Why:** Testing what you do with a muddy result.
- **Weak spot:** Decision table, "Good response, no winner" and "Inconclusive".
- **Answer outline:**
  - "Two different cases. If I didn't reach 15,400 views each, it's inconclusive. I extend the top 2 ads for about $2,150, then decide." (appendix, held-back budget: 2 × 15,400 × $70/1,000)
  - "If I did reach the views and response is good but no gap, the messages are about equally good. So the message isn't the problem. I test the offer next: a pilot vs a spend review."
  - "Honest limit: my test can only spot a *clearly* better message, about 50% better. A 20–30% better message would read as 'no winner'. Finding that needs about $10k." (appendix, "certainty dial")
- **Likelihood:** high

#### A6. Hard follow-up: "How do you know the click difference isn't just LinkedIn showing one ad more?"
- **Why:** LinkedIn's delivery system favours ads that perform early. That breaks a fair test.
- **Weak spot:** "4 The test". The submission says A1–A3 go to the same 300 firms, but doesn't say how views are kept equal. **Not covered in the submission.**
- **Answer outline:**
  - "I'd run each message as its own ad set with the same budget, audience and dates, not three ads in one set. That stops LinkedIn picking a favourite." (test-benchmarks.md section 2: fallback when the native A/B tool is blocked)
  - "LinkedIn's own A/B tool may need 1 million people per version, which my audience won't reach. So I'd check that in Campaign Manager first, and use separate ad sets if blocked." (test-benchmarks.md, "Important for Kimchi")
  - "I'd also switch off Audience Expansion, which LinkedIn lists as a bias."
- **Likelihood:** medium

---

### 2B. Head of Product, Kimchi

#### B1. "You lead with 'Cap the spend.' Your own evidence says hard caps backfire. Why lead with it?"
- **Why:** They'll have read the evidence pack, or they know their users.
- **Weak spot:** Primary message, page 1 hero. EVIDENCE.md 4b: on Hacker News, hard monthly caps "just move spend to the last week of the month" and a visible budget gauge works better. A Discord developer hit a $200 cap and was "back to manual coding until end of the month".
- **Answer outline:**
  - "Fair. The buyer and the developer feel caps differently. The platform lead's pain is a bill that doubles monthly with no owner. The Reddit thread shows that: a $4,000 week nobody noticed, $40k a month in shadow spend." (EVIDENCE.md 6a)
  - "'Cap' speaks to the buyer's fear. In the product story, I'd show caps per team with alerts, not one hard wall per developer."
  - "And it's a test. A2, 'See what every merged PR costs', has no cap in it. If it beats A1, that tells me buyers want visibility more than limits."
- **Likelihood:** medium

#### B2. "Can an admin turn on PR cost reporting for 200 developers, or does each developer do it?"
- **Why:** Product knows this is a real gap.
- **Weak spot:** Primary message "See what every merged PR costs". The walkthrough shows `/pr-reporting on` is set per developer on their own machine unless SaaS telemetry is on.
- **Answer outline:**
  - "I don't know. That's one of my open questions for you." (product-walkthrough.md, observation 3)
  - "It matters for the message. 'Every merged PR' is only true if the admin can switch it on for everyone. If not, I'd change the copy to 'See what your merged PRs cost'."
  - "It's also product feedback: a platform lead rolling out to 200 people will ask this in the first demo."
- **Likelihood:** high

#### B3. "What did you see in the product that worried you?"
- **Why:** They want a PMM who brings product feedback, not just copy.
- **Weak spot:** Not on the 2 pages. In product-walkthrough.md and EVIDENCE.md 6c.
- **Answer outline:**
  - "The console greets everyone as a developer. The first screen is 'Install CLI'. The platform lead's value, Governance and Reporting, is in the side menu." (product-walkthrough.md, observation 2)
  - "'Start coding for free' contradicts the sidebar and the CLI. The free tier needs your own API key. So the finance hook has to be a guided pilot, not self-serve."
  - "The CLI auto-updates by default. A regulated buyer will want versions controlled centrally."
  - "And a public GitHub issue, #1242, says setup-tools exposes credentials and changes Claude config without backup. That's a trust problem for a governance message." (EVIDENCE.md 6c)
- **Likelihood:** high

#### B4. "'Coding agents your regulator can live with.' Can we say that?"
- **Why:** Legal and product risk. A3 makes a regulatory promise.
- **Weak spot:** A3 in "4 The test". DORA readiness isn't confirmed. Kimchi's site says "designed around DORA", which is a vendor claim. There's no blanket EU data-residency rule; DORA works through vendor contracts. (EVIDENCE.md section 5)
- **Answer outline:**
  - "Not until product and legal confirm it. The plan says that: weeks 1–2, product confirms claims before any ad goes live." (submission, Weeks 1–2)
  - "If it can't be confirmed, I'd soften it to something provable, like 'Keep agent traffic inside your own cloud', if the VPC option is real."
  - "I'd also not lean on 'sovereignty'. In EU finance the sharper hook is DORA's exit strategy and vendor register." (EVIDENCE.md section 5, Assumes)
- **Likelihood:** high

#### B5. "Kimchi's logos are mostly tech. Doesn't the product already have product-market fit there?"
- **Why:** They'll push back on leaving tech out.
- **Weak spot:** "Left out: Tech companies".
- **Answer outline:**
  - "Logos on the site are Akamai, WeWork, Roku, Hugging Face, Cisco, Yotpo, Swisscom. But there are no public case studies or outcome numbers, so I couldn't tell what they bought or why." (EVIDENCE.md section 1)
  - "Most are US. My brief is EMEA."
  - "If you have usage data showing tech teams pay and stay, that changes my bet. It's exactly the kind of internal data I didn't have." 
- **Likelihood:** medium

#### B6. Hard follow-up: "If product says caps only work when traffic routes through Kimchi, not on Claude Code direct, what happens to your message?"
- **Why:** This is likely the real technical answer, and it changes A1.
- **Weak spot:** Positioning statement ("puts budgets, policy and cost-per-PR reporting over the coding agents their developers use") and A1 ("Every coding agent. Spend capped. Fully audited.").
- **Answer outline:**
  - "Then A1 is overclaiming and I'd rewrite it before launch. 'Every coding agent' becomes 'every agent that runs through Kimchi'."
  - "The message would split: control for traffic through Kimchi, visibility for Claude Code. That's still a real story, but a smaller one."
  - "It might also mean A2, the PR cost line, becomes the lead, because it's the one I could verify." (product-walkthrough.md, "Effect on positioning")
- **Likelihood:** medium

---

### 2C. VP Engineering / CTO

#### C1. "Your target accounts are hiring engineers to *build* this. Why would they buy?"
- **Why:** Engineers like building. This is the core build-vs-buy risk.
- **Weak spot:** "3 The evidence", Assumes ("mid-size firms buy rather than build"). 7 of 11 accounts are hiring a platform builder. (tier1-accounts.md, Patterns)
- **Answer outline:**
  - "That's the biggest assumption, and I wrote it down as one. The job ad is the spec. So the one-pager asks: 'Your spec: build it or switch it on?'" (appendix, account one-pager)
  - "A mid-size firm has one or two platform engineers. Building gateways, caps, audit and reporting across agents is months of their time. A bank like Barclays has the staff to build or buy direct."
  - "If calls in weeks 1–2 say 'we're building it, full stop', that's my signal the assumption is wrong. I'd change the lead before spending."
- **Likelihood:** high

#### C2. "Kraken's ad says tiered spend controls are already live and a gateway is in production. Why is Kraken a top account?"
- **Why:** This is in his own file. Kraken has already built the thing.
- **Weak spot:** Tier 1 list and the page 1 quote "Kraken: tiered spend controls". The full ad says "Tiered spend controls are live, a governed integration gateway is in production". (icp-lens1-job-descriptions.md, row 8)
- **Answer outline:**
  - "True. Kraken is hiring someone to *operate* controls it built. So Kraken is not a buy-instead-of-build account. It's a replace-or-extend account."
  - "I'd keep it in tier 1 as a learning account. Their reaction tells me whether firms that already built something still want a ready product."
  - "I'd change its one-pager angle: not 'switch it on', but 'what it costs you to keep running your own'."
- **Likelihood:** medium (high if they read the ads)

#### C3. "How is Kimchi different from LiteLLM or Portkey with a budget plugin?"
- **Why:** The "general AI gateway" is the competitor in your positioning.
- **Weak spot:** Positioning ("Unlike building in-house or a general AI gateway, it's ready on day one") and the 12 competitor sites row.
- **Answer outline:**
  - "A gateway controls the call to the model. It doesn't know what the agent is doing in the code. Kimchi ties spend to the agent's work: sessions, commits, merged PRs." (EVIDENCE.md section 6; product-walkthrough.md)
  - "In my scan, LiteLLM leads on spend, governance and data inside, but only mentions value. The value tools (DX, Jellyfish, LinearB) lead on value but don't enforce anything. Nobody in the 12 sites combined both." (competitor-messaging.md, summary grid)
  - "Honest limit: that's from the pages I read, not a feature test. And 'ready on day one' isn't something I proved."
- **Likelihood:** high

#### C4. "What does 'cost per merged PR' really tell me? Is a cheap PR a good PR?"
- **Why:** Engineers distrust activity metrics.
- **Weak spot:** A2 and "Proving value" in "2 How I chose".
- **Answer outline:**
  - "It doesn't tell you a PR was good. It tells you what the agent work that got merged cost. That's a step up from 'we spent $60k and don't know on what'." (EVIDENCE.md 6a: "cost per accepted change, not cost per developer")
  - "I deliberately don't claim ROI anywhere. The walkthrough note says: measures activity and cost per merged PR, not business outcomes." (product-walkthrough.md)
- **Likelihood:** medium

#### C5. "Explain how Kimchi sees Claude Code usage. What did you actually verify?"
- **Why:** Checking you know the line between what you saw and what you assume.
- **Weak spot:** Product row, "covers Claude Code too".
- **Answer outline:**
  - "Reporting → Productivity tracks sessions across Claude Code, Kimchi and OpenCode through OpenTelemetry. That's a standard way for a tool to send usage data out." (product-walkthrough.md)
  - "So I verified *visibility* of Claude Code. I didn't verify *control* of it. 'Covers Claude Code' on my page means reporting. I'd say that plainly."
  - "I didn't run a task. The free plan has no Kimchi inference."
- **Likelihood:** high

#### C6. Hard follow-up: "Your one-pager names each firm's regulator. What's bunch's regulator? Taktile's? 9fin's?"
- **Why:** The whole bet rests on "strict rules". Three of the seven tier-1 firms have no confirmed regulator.
- **Weak spot:** Tier 1 list and the appendix one-pager ("their regulator (BaFin, FCA, FINMA)"). In tier1-accounts.md: bunch "Not found", 9fin "Not found (no FCA permission stated)", Taktile "Not found (vendor)". SIX is Swiss (FINMA), so it's not UK or EU and DORA doesn't apply directly.
- **Answer outline:**
  - "Fair hit. For bunch, 9fin and Taktile I found no regulator in public sources. Taktile sells to banks, so its rules come through its bank customers' vendor checks."
  - "That's why I wouldn't put a regulator on their one-pagers. I'd use their own job-ad words instead, like 'governed access' and 'usage limits'."
  - "And I'd check every regulator on the official register before any outbound. My notes flag that none were checked on FCA or BaFin registers yet." (tier1-accounts.md, Limits)
- **Likelihood:** medium

---

### 2D. CEO / founder

#### D1. "11 firms isn't a market. How big is this?"
- **Why:** CEOs think in revenue.
- **Weak spot:** "3 The evidence" (998 → 73 → 11 firms). **Market size isn't covered in the submission.**
- **Answer outline:**
  - "The 11 aren't the market. They're the proof that the pain exists, in buyers' own words. The market for the test is the 300 look-alike finance firms in tier 2."
  - "The 18 finance firms are a floor. LinkedIn only showed the top 125 results per search and removed its industry filter. My filter also dropped finance roles at Nordea, HSBC, Lloyds and others." (finance-size-check.md, section 7)
  - "I didn't size revenue. A rough check would be firms × developers × seat price ($35 Teams, Enterprise custom). That's a number I'd build with sales data in the role." (EVIDENCE.md section 1, pricing)
- **Likelihood:** high

#### D2. "Cast AI has about 2,100 customers. Why aren't you starting there?"
- **Why:** The warmest audience is the installed base. The submission leaves it out.
- **Weak spot:** Not in the 2 pages. The appendix even *excludes* current customers from tier 2. The overview only says "Warmest, if data allows: existing Cast AI customers in finance."
- **Answer outline:**
  - "Because I had no access to the customer list and the brief was public sources only. In the role, it's the first thing I'd ask sales: which Cast AI customers are UK/EU finance firms?" (overview, "Questions for Kimchi's team")
  - "I'd treat them as a separate warm track, not mix them into the test, because they'd click more for reasons unrelated to the message."
  - "One caution: Cast AI's buyer is platform engineering and FinOps. That's close to, but not the same as, the person who owns AI coding tools." (EVIDENCE.md section 2, Assumes)
- **Likelihood:** high

#### D3. "Kimchi launched with a free-credits story and the community turned on it. Are we telling two stories?"
- **Why:** The brief warns they can't afford two stories.
- **Weak spot:** Not on the 2 pages directly. EVIDENCE.md section 1 (Assumes) and 6b.
- **Answer outline:**
  - "Yes, today the site carries both: the launch-era cheap-credits story and the newer governance story." (EVIDENCE.md section 1)
  - "The Discord shows what happened. When free credits ended, people called it 'betrayal' and moved to cheaper tools. That's why I left individuals out and kept price out of the message." (EVIDENCE.md 6b)
  - "My bet picks one story: governed and provable. The free CLI can stay as a door for developers, but it isn't the pitch."
- **Likelihood:** medium

#### D4. "Why spend $5k and 7 weeks? Why not just have the BDR call these 7 firms tomorrow?"
- **Why:** Speed. Founders hate slow.
- **Weak spot:** "4 The test", timeline.
- **Answer outline:**
  - "The BDR calling them is in the plan. Week 1 starts the 1:1 track: a one-pager from their own job ad, a LinkedIn note, then email." (appendix, Tier 1 week by week)
  - "The $5k answers a different question: which message to put on the website and in every sales email. Seven calls can't tell me that."
  - "Most of it is held until weeks 3–6. If the first 2 weeks of calls contradict the plan, I change course before spending."
- **Likelihood:** medium

#### D5. Hard follow-up: "What would make you kill finance completely?"
- **Why:** A founder wants to know you'll stop, not keep spending.
- **Weak spot:** "5 How I'd keep it running if hired" and decision row 1.
- **Answer outline:**
  - "Three rounds, about a quarter, with no pilots. Then finance stops and the next bet starts." (submission section 5)
  - "After one round, 'no response anywhere' doesn't kill it straight away. It sends me back to check pain, buyer and channel, using the call notes."
  - "Next bets are already ranked: tech with a cost message, Middle East finance, healthcare, then large finance."
- **Likelihood:** medium

---

### 2E. Hiring manager (ICP → test → scale)

#### E1. "Walk me through how you found the ICP. What would you do differently with real data?"
- **Why:** This is what they care about most.
- **Weak spot:** "2 How I chose".
- **Answer outline:**
  - "Four steps: product promise → who doesn't fit (Discord) → is the pain real (Reddit, HN, GitHub, analysts) → who feels it most (2x2, then job ads)." (submission section 2)
  - "I set a rule before looking: a theme counts only if 3 of 4 source groups show it. Spend control plus proving value passed." (PLAN.md step 4)
  - "With real data, I'd add three things: Cast AI's CRM for finance accounts, Kimchi's product usage by company, and lost-deal reasons from sales."
  - "I also changed my mind once. I started thinking the pain was 'security forces Copilot-only'. The sources didn't support it, so I dropped it." (EVIDENCE.md 4b, Correction)
- **Likelihood:** high

#### E2. "Why 5,000 staff? Your one-month run said only 38% of finance firms were under 5,000."
- **Why:** The size rule flips depending on which search you use.
- **Weak spot:** "1 The bet", Size. One-month run: up to 5,000 = 6 of 16 (38%). 90-day run: 11 of 18 (61%). The jump comes from 4 new small firms, all under 500 staff. (JOB-POSTINGS-ANALYSIS.md; finance-size-check.md section 6)
- **Answer outline:**
  - "Right. The 61% isn't the reason for the cap. The reason is that big banks build their own or buy direct. Barclays is rolling Claude Code out with Anthropic; Goldman piloted Devin; MUFG built its own." (news-factcheck.md)
  - "Mid-size firms have the same rules but not the staff to build. That's the gap Kimchi fills."
  - "The size rule is a hypothesis too. The test has 3 size tiers, so I'll see which responds." 
- **Likelihood:** high

#### E3. "How do you know hiring-now firms are better targets than look-alikes?"
- **Why:** The trigger ("hiring an AI-rollout role") is the core of the ICP.
- **Weak spot:** "1 The bet", Trigger, and "Read as clues". Tier 1 vs tier 2 changes many things at once (hiring signal, 1:1 outreach, custom one-pagers), so it can't isolate timing.
- **Answer outline:**
  - "I don't know yet, and the test won't prove it. Tier 1 gets custom work, so it'll do better for that reason alone. I treat it as a clue, not proof."
  - "If the clue holds, the monthly job-ad search becomes how I find accounts. If not, I target by company profile and keep job ads as research." (overview, H3)
- **Likelihood:** medium

#### E4. "3 of 7 accounts engaging is your bar. Isn't that one firm either way?"
- **Why:** Small numbers swing.
- **Weak spot:** "Rules, set before launch", Clues row. One account changes the rate by 14 points.
- **Answer outline:**
  - "Yes. 3 of 7 is a learning signal, not proof. That's why it's in the 'clues' row, not 'measured properly'."
  - "Engage is defined: a reply, a form fill or a meeting. In scaling, I use stronger bars: 5+ meetings and 2+ pilots per round." (submission sections 4–5)
- **Likelihood:** medium

#### E5. Hard follow-up: "Your tier 1 includes SIX, which scored weak. Your appendix says all 7 scored 3+ of 6. Which is it?"
- **Why:** Testing consistency.
- **Weak spot:** Appendix, Tier 1 row ("scored 3+ of 6 on fit"). In tier1-accounts.md, SIX scored 1 (weak).
- **Answer outline:**
  - "The appendix is wrong there. Six of the seven scored 3+. SIX scored 1, and I kept it on purpose."
  - "The score rewards ads that name governance and spend. SIX's ad is the only one that names Claude Code and a developer rollout. That's exactly the use case, so I made it an exception." (tier1-accounts.md, summary note)
- **Likelihood:** medium

#### E6. Hard follow-up: "You plan a monthly job-ad refresh. How, at scale?"
- **Why:** Repeatability is the "scale" part.
- **Weak spot:** "5 How I'd keep it running", Rhythm.
- **Answer outline:**
  - "The same 4 searches, same filter, same labelling. It took me one session to run." (finance-size-check.md, method)
  - "I'd not use a scraper. Scraping LinkedIn is against its terms. I'd use a licensed data source or a manual monthly run." (JOB-POSTINGS-ANALYSIS.md, Limits)
  - "The output is simple: new hiring firms become next month's tier 1."
- **Likelihood:** low

---

## 3. Traps: where the submission can be challenged

I checked numbers against the evidence files, claims against the product walkthrough, and wording. Ranked by danger.

### T1. "Time spent: [to fill] hours" is still a placeholder
- **Where:** Page 2, last line.
- **Problem:** A blank in the final document looks careless. They will also ask how far over 4 hours you went.
- **Fix before sending:** Fill in the real number. Say it plainly: "I spent about X hours, over the guide, mostly on the job-ad evidence. I chose depth on the evidence over polish."

### T2. Ad copy and positioning still promise more than you verified
- **Where:** A1 "Every coding agent. Spend capped. Fully audited." and the positioning line "puts budgets, policy and cost-per-PR reporting over the coding agents their developers use … ready on day one".
- **Check against product-walkthrough.md:**
  - "Every coding agent": only Claude Code, Kimchi and OpenCode, and only in *reporting*.
  - "Spend capped": you saw the setting, didn't test a cap stopping spend.
  - "Fully audited": an Audit tab exists; SIEM export wasn't seen.
  - "Ready on day one": PR reporting is set up per developer; there's no enterprise trial (EVIDENCE.md 6b, 2 Oct); the free tier needs your own key.
- **Status:** The Codex audit flagged this as fix #1. The page now says "Enforcement not tested", but the ad copy itself wasn't softened.
- **Say:** "These are test headlines. None goes live until product confirms the claim in weeks 1–2."

### T3. Three of the seven tier-1 firms have no confirmed regulator, and one isn't in the UK or EU
- **Where:** Tier 1 list; appendix one-pager ("their regulator (BaFin, FCA, FINMA)").
- **Check against tier1-accounts.md:** bunch, 9fin, Taktile: regulator "Not found". SIX: Switzerland (FINMA), not EU, so DORA doesn't apply directly. Kraken's HQ is the US (Payward), and its FCA licence is from a secondary source. Only 3 of 11 ads are clearly developer-facing (Raisin, Accelerant, SIX).
- **Why it matters:** The bet's reason for being is "strict data and vendor rules". If half the accounts aren't clearly regulated, the "why finance" story weakens.

### T4. Kraken has already built what you're selling
- **Where:** Page 1 evidence quote "Kraken: tiered spend controls"; Kraken is a "strong" tier-1 account.
- **Check against icp-lens1-job-descriptions.md:** the ad says "Tiered spend controls are live, a governed integration gateway is in production".
- **Why it matters:** Your best quote is from a firm that chose to build. A CTO will spot it.

### T5. "Finance average (~0.55%)" is the wrong label
- **Where:** "Rules, set before launch", Success row.
- **Check against test-benchmarks.md:** 0.55% is the UK all-industry median (ZenABM). Finance ranges are 0.35–0.52% and 0.30–0.55%. Your own simulation assumes a normal finance ad gets ~0.4%.
- **Say:** "That's the top of the finance range, not the average. I set the bar high on purpose."

### T6. The 61% size figure depends on which search you use
- **Where:** "3 The evidence", "Up to 5,000 staff (61%)".
- **Check:** The one-month run gave 38% (6 of 16). The 90-day run gave 61% only because 4 new small firms joined. (JOB-POSTINGS-ANALYSIS.md; finance-size-check.md section 6)
- **Say:** "The cap rests on the build-vs-buy logic, not on the 61%."

### T7. The appendix says all tier-1 firms scored 3+ of 6; SIX scored 1
- **Where:** Appendix, Tier 1 row.
- **Check:** tier1-accounts.md summary table.
- **Say:** "Six did; SIX is a deliberate exception because it's the only Claude Code rollout."

### T8. The $500 tier-1 company ads may not deliver
- **Where:** Budget, "Tier 1 company ads, 4 weeks $500, ~7,000 views".
- **Check against test-benchmarks.md:** LinkedIn needs at least 300 members per ad set, and EEA/Swiss matching is limited to members who opt in. Seven mid-size firms' engineering staff (bunch has 51–200 staff in total) may fall under that.
- **Status:** The Codex audit flagged this (question 8). Still unresolved on the page.
- **Say:** "I'd check the audience size in Campaign Manager first. If it's under 300, I'd drop the company ads and put the $500 into the 1:1 track."

### "We" wording check
- **Submission:** clean. No "we", "our" or "us" (the only hit is "the US").
- **Appendix:** clean.
- **Overview (kimchi-plan-overview.html):** still full of "we" ("What we say", "How we'll check it", "we counted those jobs"). PLAN.md too. Don't share either as-is, and don't read from them in the room.

---

## 4. AI-use questions

The page says: "Claude for research agents, analysis and drafting; Codex for an independent audit. The segment, exclusions, size rule, message and test design are my decisions." Be ready to prove each part.

### AI1. "How exactly did you use AI?"
- **Answer outline:**
  - "Claude ran the collection work as research agents: reading job ads, competitor pages, Discord and Reddit threads, and benchmark sources. Each one came back with sources and a 'Shows / Assumes' split." (EVIDENCE.md header)
  - "I used it to check maths, like the sample size and budget lines, and to draft the pages."
  - "I used Codex as a second, independent reviewer to audit the plan, the way a colleague would." (AUDIT-codex.md)
- **Likelihood:** high

### AI2. "Which decisions were yours, not the AI's?"
- **Answer outline:**
  - "The segment and the reason for it: finance, because it needs the whole product, not just tracking."
  - "The exclusions and what brings each back. The 5,000-staff cap. Picking Reddit threads to read." (EVIDENCE.md 6a: "threads picked by Islam")
  - "The message, and the choice to test 3 angles instead of guessing."
  - "The trade-off in the test: measure one thing properly, read the rest as clues."
  - Have one concrete moment ready, e.g. dropping the "Copilot-only" idea when the evidence didn't back it (EVIDENCE.md 4b).
- **Likelihood:** high

### AI3. "How did you check the AI wasn't making things up?"
- **Answer outline:**
  - "I fact-checked every news claim. Two were wrong in the first draft. The Citi '40,000 developers on Devin' was really the Copilot headcount. The MUFG story was Risk.net, not Waters Technology." (news-factcheck.md)
  - "I opened the product myself. That's how I found the 'free' contradiction and the per-developer PR reporting." (product-walkthrough.md)
  - "The Codex audit caught real errors: my first success rule asked for a 25% lift when the budget could only detect 50%, and one duplicate count was mislabelled. I fixed both." (AUDIT-codex.md section 1)
  - "The competitor scan came through page summaries, so I'd re-check any quote before using it publicly." (competitor-messaging.md, caveat)
- **Likelihood:** high

### AI4. Hard follow-up: "If AI did the research, what's left for a PMM?"
- **Answer outline:**
  - "AI made collection faster. It didn't choose the bet. Every source came back with a 'Shows' and an 'Assumes'. Deciding what to believe was my job."
  - "It also didn't know what to leave out. The page is 2 pages because I cut most of it."
  - "In the role, that's the point: one PMM can do the research of a small team, and spend the saved time with sales and customers."
- **Likelihood:** medium

### AI5. Hard follow-up: "Did AI write your positioning statement?"
- **Answer outline:**
  - Be honest about drafting help. Then: "The structure is the classic For / Who / Is / That / Unlike. The choices inside it are mine: the buyer, the 'without spending a quarter building it' pain, and 'build in-house' as the real competitor, because 7 of 11 ads hire someone to build."
- **Likelihood:** medium

---

## 5. Questions Islam should ask them

1. **"Of Cast AI's current customers, how many are UK or EU financial firms, and does anyone there already use Kimchi?"**
   This tests your biggest unknown and shows you'd start warm.
2. **"Can caps be enforced on Claude Code traffic that goes direct to Anthropic, or only on traffic through Kimchi?"**
   The answer decides whether A1 is true. Product and engineering will respect it.
3. **"When a finance deal stalls today, where does it stall: security review, procurement, or 'we'll build it'?"**
   This tells you which part of the funnel to fix first.
4. **"How do you want the free CLI and the enterprise story to sit together? Is the developer door still part of the plan?"**
   Shows you saw the two-story problem without lecturing them.
5. **"What does a good first quarter look like for this role: pipeline, pilots, or a proven message?"**
   Ties your test to their success measure, and helps you calibrate.

---

## 6. The top 3 things to rehearse out loud

1. **The 2-minute story, with one honest weakness at the end.**
   Promise → Discord says companies → job ads (998 → 73 → finance 29% → 11 firms) → why finance not tech → why under 5,000 → message → test. End with: "My weakest link is hiring vs buying, which is why weeks 1–2 are calls."

2. **"What I saw vs what I assumed" in the product.**
   Say clearly: I saw budget settings, a PR cost report, and Claude Code in reporting. I didn't see a cap stop spend, central PR reporting, SIEM export or DORA proof. Then say which ad copy changes if each one fails. This defuses the product and engineering questions (1.5, B2, B6, C5, T2).

3. **The test in plain numbers, including its limits.**
   "15,400 views per ad. A winner is ~21+ clicks ahead. That catches a clearly better message 8 times in 10, with a 1-in-10 chance of luck. It can't spot a small difference; that would need about $10k." Practise the inconclusive branch and the kill rule (3 rounds, no pilots) until they come out without notes.
