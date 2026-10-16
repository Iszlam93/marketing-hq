import { NextResponse, type NextRequest } from "next/server";
import { COOKIE, sessionValue } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const pw = process.env.APP_PASSWORD;
  if (!pw) return NextResponse.next(); // local development without a password
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/login") || pathname.startsWith("/api/telegram")) return NextResponse.next();
  const ok = req.cookies.get(COOKIE)?.value === (await sessionValue(pw));
  if (ok) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
