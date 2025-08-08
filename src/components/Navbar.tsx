import { Icon } from "@iconify/react";
import ThemeToggle from "./ThemeToggle";

interface Props {
  theme: "light" | "dark";
  isMobile: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ theme, isMobile, toggleTheme }: Props) {
  const baseClasses = `flex flex-row justify-between items-center w-full backdrop-blur-md`;
  const bgClasses = `bg-[var(--bg)] bg-opacity-80`;
  const paddingClasses = isMobile ? "px-3 py-4" : "p-6";
  const strokeTop = isMobile ? `border-t border-t-secondary` : "";

  const positionClasses = isMobile
    ? "fixed bottom-0 left-0 w-full z-50"
    : "sticky top-0 left-0 w-full z-50";

  const iconClasses = `
    text-[var(--icon-color)]
    hover:text-[var(--icon-hover)]
    transition-colors
    duration-300
  `;

  return (
  <nav
    className={`${baseClasses} ${bgClasses} ${paddingClasses} ${strokeTop} ${positionClasses}`}
    style={{ WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }}
  >
    <a href="/" className="font-bold text-[var(--text)]">
      Lara Salman
    </a>

    {isMobile ? (
      <div className="flex flex-row gap-6 items-center">
        {/* Socials */}
        <a href="https://www.linkedin.com/in/lara-salman-00224b1b2/" target="_blank" rel="noopener noreferrer" className={iconClasses}>
          <Icon icon="ri:linkedin-fill" className="size-6" />
        </a>
        <a href="https://github.com/Laraass" target="_blank" rel="noopener noreferrer" className={iconClasses}>
          <Icon icon="mdi:github" className="size-6" />
        </a>
        {/* add cv later! */}
        <a href="/" target="_blank" rel="noopener noreferrer" className={iconClasses}>
          <Icon icon="tabler:file-cv-filled" className="size-6" />
        </a>

        {/* ThemeToggle */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    ) : (
      <>
        <div className="flex flex-row gap-4">
          <a href="https://www.linkedin.com/in/lara-salman-00224b1b2/" target="_blank" rel="noopener noreferrer" className={iconClasses}>
            <Icon icon="ri:linkedin-fill" className="size-6" />
          </a>
          <a href="https://github.com/ditt-användarnamn" target="_blank" rel="noopener noreferrer" className={iconClasses}>
            <Icon icon="mdi:github" className="size-6" />
          </a>
          {/* add cv later! */}
          <a href="/" target="_blank" rel="noopener noreferrer" className={iconClasses}> 
            <Icon icon="tabler:file-cv-filled" className="size-6" />
          </a>
        </div>

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </>
    )}
  </nav>
);
}