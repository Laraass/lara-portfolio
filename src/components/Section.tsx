import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen max-w-6xl mx-auto px-4 sm:px-0 py-4 pt-16 sm:pt-0 cursor-default ${className}`}
    >
      {children}
    </section>
  );
}
