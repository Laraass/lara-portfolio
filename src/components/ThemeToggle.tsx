import { Icon } from "@iconify/react";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: Props) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="transition flex items-center justify-center"
    >
      {theme === "light" ? (
        <Icon
          icon="stash:moon-solid"
          className="size-6 text-[var(--color-primary)] hover:text-[var(--color-primary-subtle)] transition-colors cursor-pointer"
        />
      ) : (
        <Icon
          icon="mingcute:sun-fill"
          className="size-6 text-[var(--color-secondary)] hover:text-[var(--color-secondary-bold)] transition-colors cursor-pointer"
        />
      )}
    </button>
  );
}
