import { login } from "@/app/actions";

export default async function Login({ searchParams }: { searchParams: Promise<{ err?: string }> }) {
  const sp = await searchParams;
  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <form action={login} className="card stack" style={{ width: "min(360px, 100%)", gap: 12 }}>
        <b style={{ fontSize: 18 }}>Brand HQ</b>
        <label htmlFor="password" className="small muted">Password</label>
        <input id="password" name="password" type="password" className="ta" autoFocus required />
        {sp.err ? <span className="small" style={{ color: "var(--bad)" }}>That password didn’t match.</span> : null}
        <button className="btn primary">Sign in</button>
      </form>
    </div>
  );
}
