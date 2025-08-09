import React from "react";
import Skill from "./Skill";
import { Icon } from "@iconify/react";

interface ProjectCardProps {
  title: string;
  githubLink: string;
  projectLink: string;
  description: React.ReactNode;
  skills: { icon: React.ReactNode; skill: string }[];
}

export default function ProjectCard({
  title,
  githubLink,
  projectLink,
  description,
  skills,
}: ProjectCardProps) {
  return (
    <div
      className="
        p-3 gap-3 flex flex-col
        border border-[var(--color-secondary-bold)]
        text-[var(--text)] cursor-default
        bg-[var(--background)]
        transition-shadow duration-300
        hover:shadow-[0_0_10px_1px_#bc9156cc]
      "
    >
      {/* Header: title + icons */}
      <div className="flex items-center justify-between font-display">
        <h2 className="text-3xl ">{title}</h2>

        <div className="flex gap-1">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="hover:text-[var(--color-secondary)] transition-colors"
          >
            <Icon icon="mdi:github" className="size-7" />
          </a>

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Project website"
            className="hover:text-[var(--color-secondary)] transition-colors"
          >
            <Icon icon="pepicons-pop:open" className="size-7" />
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="text-base font-medium">{description}</div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map(({ icon, skill }, i) => (
          <Skill key={i} icon={icon} skill={skill} />
        ))}
      </div>
    </div>
  );
}
