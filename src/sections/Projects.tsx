import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "XP FEED",
    githubLink: "https://github.com/chas-academy/u09-business-project-team-sl",
    projectLink: "https://xpfeed.netlify.app/",
    description: (
      <>
        XP Feed is a fullstack application that lets users discover games via
        the RAWG.io API, create custom game lists, and manage their collections.
        It features Google OAuth authentication and a responsive UI built with
        React and Tailwind CSS.
      </>
    ),
    skills: [
      {
        icon: <Icon icon="flowbite:react-solid" className="size-6" />,
        skill: "React",
      },
      {
        icon: <Icon icon="lineicons:typescript" className="size-6" />,
        skill: "TypeScript",
      },
      {
        icon: <Icon icon="mdi:tailwind" className="size-6" />,
        skill: "Tailwind CSS",
      },
      {
        icon: <Icon icon="akar-icons:node-fill" className="size-6" />,
        skill: "Node.js",
      },
      {
        icon: <Icon icon="flowbite:mongo-db-solid" className="size-6" />,
        skill: "Mongo DB",
      },
    ],
  },
  {
    title: "CLOCK IT",
    githubLink: "https://github.com/Laraass/clockit",
    projectLink: "https://clockit-app.vercel.app/login",
    description: (
      <>
        Clock IT is a time-tracking app with an Angular frontend and a RESTful
        API backend developed by me using Node.js, Express, MongoDB, and
        TypeScript. It enables efficient tracking and managing of work hours by
        project, featuring user registration, JWT authentication, and full CRUD
        operations on detailed time reports.
      </>
    ),
    skills: [
      {
        icon: <Icon icon="mdi:angular" className="size-6" />,
        skill: "Angular",
      },
      {
        icon: <Icon icon="lineicons:typescript" className="size-6" />,
        skill: "TypeScript",
      },
      {
        icon: <Icon icon="mdi:tailwind" className="size-6" />,
        skill: "Tailwind CSS",
      },
      {
        icon: <Icon icon="akar-icons:node-fill" className="size-6" />,
        skill: "Node.js",
      },
      {
        icon: <Icon icon="flowbite:mongo-db-solid" className="size-6" />,
        skill: "Mongo DB",
      },
    ],
  },
];

export default function Projects() {
  return (
    <Section className="flex flex-col items-center justify-center gap-6 px-6 sm:px-6 md:px-12 lg:px-24">
      <h2 className="font-display text-8xl">PROJECTS</h2>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          githubLink={project.githubLink}
          projectLink={project.projectLink}
          description={project.description}
          skills={project.skills}
        />
      ))}
    </Section>
  );
}
