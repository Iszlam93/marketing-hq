"""Print an asset's body (no front matter) in Notion-flavoured Markdown.

Pipe tables become Notion <table> blocks; everything else passes through.
Usage: python marketing-hq/scripts/notion_body.py marketing-hq/assets/<id>.md
"""
import html
import re
import sys


def cells(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def convert(text):
    lines, out, i = text.split("\n"), [], 0
    while i < len(lines):
        line = lines[i]
        is_table = (
            line.lstrip().startswith("|")
            and i + 1 < len(lines)
            and re.match(r"^\s*\|?\s*:?-{3,}", lines[i + 1])
        )
        if not is_table:
            out.append(line)
            i += 1
            continue
        indent = ""  # tables nested under list items fail in Notion; lift them to top level
        rows = [cells(line)]
        i += 2
        while i < len(lines) and lines[i].lstrip().startswith("|"):
            rows.append(cells(lines[i]))
            i += 1
        out.append(f'{indent}<table header-row="true">')
        for row in rows:
            out.append(f"{indent}<tr>")
            out.extend(f"{indent}<td>{html.escape(c, quote=False)}</td>" for c in row)
            out.append(f"{indent}</tr>")
        out.append(f"{indent}</table>")
    return "\n".join(out)


def body(path):
    raw = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n.*?\n---\n", raw, re.S)
    return raw[m.end():] if m else raw


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    print(convert(body(sys.argv[1])).strip())
