# Competitor ads: a Claude skill

**Say "check HubSpot ads" and Claude tells you what they are advertising about, on the platforms and in the country you choose.**

A free, open-source skill for Claude. It reads a competitor's ads in the public ad libraries (LinkedIn, Google, Meta, TikTok and others), sums up what they talk about, and can save every ad to your computer or to Notion.

Made for product marketers, marketers and founders who want to know what competitors are paying to say, without scrolling through ad libraries for an hour.

---

## Why competitor ads?
A website shows what a company wants to be. Its ads show what it is **paying** to say, to whom, right now. An ad that keeps running for months is probably working, because nobody keeps paying for a bad ad.

## How it works

**1. You ask**
> Check HubSpot ads

**2. Claude asks which platforms and which country**
> Which platforms? LinkedIn · Google · Meta · TikTok · Microsoft · X · Pinterest · Snapchat
> Which country? United Kingdom · United States · another country

**3. Claude tells you what each platform can really show, then asks the time period**
> Meta, United States: only ads running today.
> LinkedIn, United States: ads from the last 12 months.
> TikTok only shows ads in Europe and the UK, so I'll skip it for the US.
>
> Which time period? Running now · the most each platform has

It only offers time periods the platforms can actually cover, so you never wait for something that is not there.

**4. Claude comes back with the findings, readable in one minute**
> **HubSpot is mostly advertising about [theme].**
> - What they talk about: [theme] in 8 of 20 ads, [theme] in 6 of 20 ...
> - Their offers: demo (9), free trial (7), webinar (4)
> - What stands out: one ad running since [date]; 5 new ads this month; LinkedIn is all demos, Meta is all free trials
> - Checked: LinkedIn and Meta, United States, running now, 20 ads
>
> Do you want to see all the ads? I can save them to your computer or to Notion.

*(Example layout only, not real HubSpot data.)*

**5. If you want, Claude saves every ad**
- **To your computer:** a folder with `summary.md`, `ads.csv` (one row per ad) and screenshots.
- **To Notion:** one **Competitor ads** database, reused for every competitor, with one row per ad and a summary page.

---

## What each platform can show

| Platform | Where | Ads running now | Ads that stopped |
|---|---|---|---|
| LinkedIn | all countries | ✅ | up to 12 months |
| Meta (Facebook, Instagram) | Europe and UK | ✅ | up to 12 months |
| Meta (Facebook, Instagram) | all other countries | ✅ | ❌ |
| Google (Search, YouTube, Display) | all countries | ✅ | varies; Claude checks it live |
| TikTok | Europe and UK only | ✅ | up to 12 months |
| Microsoft (Bing), X, Pinterest, Snapchat | Europe only | ✅ | up to 12 months |

"Up to 12 months" comes from the EU's Digital Services Act: ads must stay visible for a year after they last ran. Libraries change, so Claude always checks what each library shows on the day and tells you if it is less. Details and sources are in [`competitor-ads/reference/channels.md`](competitor-ads/reference/channels.md).

---

## Install

**Claude apps (claude.ai, desktop)**
1. Download this repository (green **Code** button → **Download ZIP**) and unzip it.
2. Zip the `competitor-ads` folder on its own.
3. In Claude, go to **Settings → Capabilities → Skills** and upload that zip.

**Claude Code**
Copy the `competitor-ads` folder into `~/.claude/skills/` (for you) or `.claude/skills/` in a project (for your team).

## What you need
- **Best: Claude in Chrome.** Ad libraries block automated visitors, but they load normally in your own browser. With Claude in Chrome, Claude reads them for you. Tested: Meta and LinkedIn open this way.
- **Without it:** Claude gives you the direct links and you paste screenshots or the ad text, about 5 minutes per platform. Claude does the rest.
- **To save to Notion:** the Notion connector in Claude.
- **Optional, for many ads at once:** a scraping tool such as Apify (paid past a small free allowance). Claude asks before spending anything.

## What it does not do
- It does not click, like or comment on ads, or log in to anyone's account.
- It does not guess targeting or results. It reports what the libraries show.
- It is read only. Nothing is posted or bought.

## What's inside
```
competitor-ads/
  SKILL.md                    the steps Claude follows
  reference/
    channels.md               every ad library: link, coverage, history, how to search it
    ad-checklist.md           what Claude notes for each ad
    output.md                 the findings format, the computer folder and the Notion database
```

## Feedback
Found a library that changed, a platform that is missing, or a step that confused Claude? Open an issue or a pull request.

## License
MIT. Free to use, change and share. See [LICENSE](LICENSE).

---

Made by Islam Elsaeed · *Product marketing, rebuilt with AI.*
