# Output formats

## 1. The findings (shown in the chat)
Short enough to read in one minute.

```
**<Competitor> is mostly advertising about <theme>.**

**What they talk about**
1. <Theme>: <N> of <total> ads. Example: "<headline>"
2. <Theme>: <N> of <total> ads. Example: "<headline>"
3. <Theme>: <N> of <total> ads. Example: "<headline>"

**Their offers:** <offer> (<N>), <offer> (<N>), <offer> (<N>)

**What stands out**
- Long runner: "<headline>", running since <date> on <platform>
- New push: <N> new ads in the last 4 weeks about <theme>
- Testing: <N> versions of "<idea>"
- By platform: <for example, LinkedIn is all demos; Meta is all free trials>

**What nobody mentions:** <one or two lines, or leave out>

Checked: <platforms>, <country>, <time period>, on <date>. Read <N> ads. <Platform that could not be read or could not cover the period, and why.>

Do you want to see all the ads? I can save them to your computer or to Notion.
```

## 2. Saved to the computer
Folder `competitor-ads/<competitor>-<YYYY-MM-DD>/`:
- `summary.md`: the findings above
- `ads.csv`: one row per ad, with these columns:
  `competitor, platform, country, period, checked_on, ad_link, format, headline, about, problem, speaks_to, proof, offer, call_to_action, started, still_running, versions`
- `screenshots/`: one image per ad, named `<platform>-<number>.png`, if you have them

## 3. Saved to Notion
One database, reused for every competitor, called **Competitor ads**:

| Column | Type |
|---|---|
| Headline | title |
| Competitor | select |
| Platform | select: LinkedIn, Google, Meta, TikTok, Microsoft, X, Pinterest, Snapchat |
| Country | select |
| Period | select: Running now, Last 30 days, Last 90 days, Last 12 months |
| Checked on | date |
| About | select (the theme label) |
| Offer | select: Demo, Free trial, Download, Webinar, Event, Discount, Other |
| Format | select: Image, Video, Carousel, Text, Other |
| Started | date |
| Still running | checkbox |
| Versions | number |
| Problem named | text |
| Speaks to | text |
| Proof | text |
| Call to action | text |
| Ad link | URL |

Plus one page per check, **"<Competitor> ads, <date>"**, with the findings and a link to the database filtered to that competitor and date. If screenshots exist, attach each one to its row.

Before creating the database, search Notion for an existing **Competitor ads** database and reuse it, so every check lands in the same place.
