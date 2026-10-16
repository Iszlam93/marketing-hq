"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Today", group: "This week" },
  { href: "/review", label: "Review", group: "This week", badge: true },
  { href: "/plan", label: "30-day plan", group: "This week" },
  { href: "/foundation", label: "Foundation & voice", group: "Brand" },
  { href: "/history", label: "History & results", group: "Brand" },
];

export default function Nav({ pending }: { pending: number }) {
  const path = usePathname();
  let lastGroup = "";
  return (
    <nav className="nav" aria-label="Main">
      {ITEMS.map((it) => {
        const active = it.href === "/" ? path === "/" : path.startsWith(it.href);
        const header = it.group !== lastGroup ? <div className="nav-label">{it.group}</div> : null;
        lastGroup = it.group;
        return (
          <div key={it.href} style={{ display: "contents" }}>
            {header}
            <Link href={it.href} aria-current={active ? "page" : undefined} className="nav-link">
              {it.label}
              {it.badge && pending > 0 ? <span className="badge">{pending}</span> : null}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
