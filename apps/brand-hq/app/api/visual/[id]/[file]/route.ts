import { readBinary } from "@/lib/store";

// Serves rendered post visuals from brand-hq/design/out/<id>/<file> (protected by the password middleware).
export async function GET(_req: Request, ctx: { params: Promise<{ id: string; file: string }> }) {
  const { id, file } = await ctx.params;
  if (!/^[\w-]+$/.test(id) || !/^[\w-]+\.(png|pdf)$/.test(file)) return new Response("Bad request", { status: 400 });
  const data = await readBinary(`brand-hq/design/out/${id}/${file}`);
  if (!data) return new Response("Not found", { status: 404 });
  const type = file.endsWith(".pdf") ? "application/pdf" : "image/png";
  return new Response(new Uint8Array(data), {
    headers: { "Content-Type": type, "Cache-Control": "private, max-age=300", ...(file.endsWith(".pdf") ? { "Content-Disposition": `inline; filename="${id}.pdf"` } : {}) },
  });
}
