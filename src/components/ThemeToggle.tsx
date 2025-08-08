import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle dark/light mode"
      className="
         transition
        flex items-center justify-center
      "
    >
      {theme === "light" ? (
        <Icon
          icon="stash:moon-solid"
          className="w-6 h-6 text-[var(--color-primary)] hover:text-[var(--color-primary-subtle)] transition-colors cursor-pointer"
        />
      ) : (
        <Icon
          icon="mingcute:sun-fill"
          className="w-6 h-6 text-[var(--color-secondary)] hover:text-[var(--color-secondary-bold)] transition-colors cursor-pointer"
        />
      )}
    </button>
  );
}
