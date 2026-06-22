import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "ANALYSIS VIEW FOR SPÅRSBILDEN",
    description: (
      <>
        Built an analysis view to automate comparison of projects across releases 
        in Traton's internal DAG-based system <i>Spårsbilden</i>. Added functionality to 
        extract project information from unstructured Jira descriptions using 
        rule-based parsing and regular expressions.
      </>
    ),
    skills: [
      {
        icon: <Icon icon="bxl:c-sharp" className="size-6" />,
        skill: "C#",
      },
      {
        icon: <Icon icon="mdi:dot-net" className="size-6" />,
        skill: ".NET",
      },
      {
        icon: <Icon icon="simple-icons:jira" className="size-6" />,
        skill: "Jira",
      },
    ],
  },
  {
    title: "RECURIO",
    githubLink: "https://github.com/Laraass/recurio",
    projectLink: "https://recurio-app.vercel.app/",
    description: (
      <>
        Recurio is a subscription management web application. It allows users to
        search, track and add subscriptions to monitor their monthly expenses.
        Admin users can manage all users by editing roles, deleting users and
        send e-mail summaries.
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
        icon: <Icon icon="devicon-plain:fastify" className="size-6" />,
        skill: "Fastify",
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
        icon: <Icon icon="simple-icons:express" className="size-6" />,
        skill: "Express",
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
