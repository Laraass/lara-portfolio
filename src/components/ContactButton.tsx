import React from "react";

const ContactButton: React.FC = () => {
  const email = "Lara.salman01@hotmail.com";

  const getShadowColor = () => {
    return (
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-secondary-bold"
      ) || "#BC9156"
    );
  };

  return (
    <a
      href={`mailto:${email}`}
      className="
        inline-block p-6 border border-[var(--color-secondary)]
        text-xl text-[var(--text)] dark:text-[var(--text)] 
        dark:border-[var(--color-secondary)] 
        transition transform duration-200 ease-in-out 
        hover:scale-105 active:scale-95 select-none cursor-pointer text-center
      "
      style={{
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        const color = getShadowColor().trim();
        (
          e.currentTarget as HTMLElement
        ).style.boxShadow = `0 0 5px 1px ${color}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
      onMouseDown={(e) => {
        const color = getShadowColor().trim();
        (
          e.currentTarget as HTMLElement
        ).style.boxShadow = `0 0 5px 1px ${color}`;
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      Write a message
    </a>
  );
};

export default ContactButton;
