"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);
  const set = (t: string) => {
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("bhq-theme", t);
    } catch {}
    setTheme(t);
  };
  return (
    <div className="theme" role="group" aria-label="Theme">
      <button aria-pressed={theme === "light"} onClick={() => set("light")}>☀ Day</button>
      <button aria-pressed={theme === "dark"} onClick={() => set("dark")}>☾ Night</button>
    </div>
  );
}
