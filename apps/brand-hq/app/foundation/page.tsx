import { marked } from "marked";
import { readFile } from "@/lib/store";
import { PageHead } from "@/components/ui";

function between(md: string, startHeading: string): string {
  const i = md.indexOf(startHeading);
  if (i < 0) return "";
  const rest = md.slice(i + startHeading.length);
  const j = rest.search(/\n## /);
  return startHeading + (j >= 0 ? rest.slice(0, j) : rest);
}

export default async function Foundation() {
  const voice = (await readFile("docs/brand-hq/VOICE.md"))?.content || "_VOICE.md not found._";
  const plan = (await readFile("docs/BRAND-HQ-PLAN.md"))?.content || "";
  const found = between(plan, "## Personal Brand Foundation") || "_Foundation section not found in BRAND-HQ-PLAN.md._";
  const measures = between(plan, "## Success measures");
  return (
    <div className="stack">
      <PageHead title="Foundation & voice" sub="The source of truth every agent writes from. Edit these files in the repo and the agents follow on their next run." />
      <div className="found-grid">
        <section className="card md" dangerouslySetInnerHTML={{ __html: marked.parse(found) as string }} />
        <section className="card md" dangerouslySetInnerHTML={{ __html: marked.parse(measures || "") as string }} />
      </div>
      <section className="card md" dangerouslySetInnerHTML={{ __html: marked.parse(voice) as string }} />
    </div>
  );
}
