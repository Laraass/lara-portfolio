import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`min-h-screen max-w-6xl mx-auto px-4 sm:px-0 py-4 ${className}`}
    >
      {children}
    </section>
  );
}
