import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import Skill from "../components/Skill";
import { Icon } from "@iconify/react";

export default function Skills() {
  return (
    <Section className="flex flex-col items-center gap-12 px-6 sm:px-6 md:px-12 lg:px-24">
      <h2 className="font-display text-8xl">TECHNICAL SKILLS</h2>

      <SkillCard title="Frontend">
        <Skill
          icon={<Icon icon="flowbite:css-solid" className="size-6" />}
          skill="CSS"
        />
        <Skill
          icon={<Icon icon="mdi:tailwind" className="size-6" />}
          skill="Tailwind CSS"
        />
        <Skill
          icon={<Icon icon="mdi:sass" className="size-6" />}
          skill="Sass"
        />
        <Skill
          icon={<Icon icon="flowbite:react-solid" className="size-6" />}
          skill="React"
        />
        <Skill
          icon={<Icon icon="mdi:angular" className="size-6" />}
          skill="Angular"
        />
      </SkillCard>

      <SkillCard title="Backend">
        <Skill
          icon={<Icon icon="ri:html5-fill" className="size-6" />}
          skill="HTML"
        />
        <Skill
          icon={<Icon icon="arcticons:sqlite-editor" className="size-6" />}
          skill="SQL"
        />
        <Skill icon={<Icon icon="cib:php" className="size-6" />} skill="PHP" />
        <Skill
          icon={<Icon icon="flowbite:laravel-solid" className="size-6" />}
          skill="Laravel"
        />
        <Skill
          icon={<Icon icon="fluent:javascript-16-filled" className="size-6" />}
          skill="JavaScript"
        />
        <Skill
          icon={<Icon icon="lineicons:typescript" className="size-6" />}
          skill="TypeScript"
        />
        <Skill
          icon={<Icon icon="akar-icons:node-fill" className="size-6" />}
          skill="Node.js"
        />
        <Skill
          icon={<Icon icon="flowbite:mongo-db-solid" className="size-6" />}
          skill="Mongo DB"
        />
      </SkillCard>

      <SkillCard title="Tools">
        <Skill
          icon={<Icon icon="solar:figma-bold-duotone" className="size-6" />}
          skill="Figma"
        />
        <Skill
          icon={<Icon icon="codicon:vscode" className="size-6" />}
          skill="VS Code"
        />
        <Skill
          icon={<Icon icon="mdi:github" className="size-6" />}
          skill="Github"
        />
        <Skill
          icon={<Icon icon="ri:gitlab-fill" className="size-6" />}
          skill="GitLab"
        />
        <Skill
          icon={<Icon icon="mdi:docker" className="size-6" />}
          skill="Docker"
        />
        <Skill
          icon={<Icon icon="simple-icons:adminer" className="size-6" />}
          skill="Adminer"
        />
        <Skill
          icon={<Icon icon="simple-icons:insomnia" className="size-6" />}
          skill="Insomnia"
        />
      </SkillCard>
    </Section>
  );
}
