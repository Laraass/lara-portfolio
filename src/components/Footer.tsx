import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        px-3 py-4 gap-3 border-t border-[var(--color-secondary)] 
        text-base text-[var(--text)] dark:text-[var(--text)] 
        flex justify-center items-center
      "
    >
      © {year} | Lara Salman
    </footer>
  );
};

export default Footer;
