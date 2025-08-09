import React from "react";

interface SkillProps {
  icon: React.ReactNode;
  skill: string;
}

export default function Skill({ icon, skill }: SkillProps) {
  return (
    <div
      className="
    flex flex-row items-center justify-center cursor-default px-3 py-1 rounded-2xl text-[var(--text)]
    transition-filter duration-300 hover:shadow-[0_0_5px_1px_#bc9156cc]
    border border-[var(--color-secondary-bold)]
  "
    >
      <span className="flex items-center justify-center text-[var(--color-secondary-bold)]">
        {icon}
      </span>
      <span className="text-base font-medium">{skill}</span>
    </div>
  );
}
