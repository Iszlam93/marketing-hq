// Single-user password gate. The session cookie holds a SHA-256 digest of the password,
// so changing APP_PASSWORD signs every device out.
export const COOKIE = "bhq_session";

export async function sessionValue(password: string): Promise<string> {
  const data = new TextEncoder().encode(`brand-hq:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export const authEnabled = () => Boolean(process.env.APP_PASSWORD);
