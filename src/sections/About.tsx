import React, { useState } from "react";
import Section from "../components/Section";
import AboutCard from "../components/AboutCard";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

const About: React.FC = () => {
  const aboutCards = [
    {
      title: "ABOUT ME",
      text: `I’m an aspiring Fullstack Developer graduating in 2026, with a strong foundation in both frontend and backend development.

I’m currently seeking a LIA position for the fall of 2025, where I can apply my skills, grow, and contribute to projects.`,
    },
    {
      title: "EDUCATION",
      text: `I'm studying Full-Stack Open Source Development at CHAS Academy, where I’m learning both frontend and backend technologies. From building responsive UIs to developing robust APIs. I started in September 2024 and will graduate in June 2026, aiming to contribute to the open-source community.`,
    },
    {
      title: "TEAMWORK",
      text: `I enjoy working with others and believe teamwork is important for success. I primarily use GitHub for version control and follow good project management methods. I adapt quickly to new challenges and help keep the team organized and efficient.`,
    },
    {
      title: "UX/UI DESIGN",
      text: `I create intuitive and visually appealing user interfaces by blending design principles with an understanding of user behavior. By sketching wireframes, building prototypes, and testing with real users, I refine every detail. My goal is a smooth experience and a clean, consistent design throughout.`,
    },
    {
      title: "FRONTEND",
      text: `I build interactive, user-friendly and responsive websites with a focus on writing clean and maintainable code to enhance functionality and aesthetics. My approach ensures that websites are not only functional but also enjoyable to use.`,
    },
    {
      title: "BACKEND",
      text: `I build secure and robust backend systems, focusing on efficient APIs and database optimization. I handle authentication, data management, and ensure efficiency and security through clean, maintainable code and best practices.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % aboutCards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? aboutCards.length - 1 : prev - 1));
  };

  const currentCard = aboutCards[currentIndex];

  return (
    <Section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 sm:px-6 md:px-12 lg:px-24">
      {/* Picture */}
      <div className="relative flex-shrink-0">
        <img
          src="/me.png"
          alt="Lara Salman"
          className="w-64 md:w-90 object-cover border-2 border-secondary-bold"
        />
      </div>

      {/* Content container */}
      <div className="flex flex-col w-full max-w-3xl items-center gap-2">
        <div className="relative w-full flex flex-col gap-2 md:flex-row items-center md:items-stretch justify-center">
          {/* Chevron left (desktop) */}
          <Icon
            icon="ix:chevron-left"
            className="hidden md:block size-12 cursor-pointer text-secondary hover:text-secondary-bold transition-colors duration-300 hover:scale-110 active:scale-95 self-center"
            onClick={handlePrev}
          />

          {/* Animate card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <AboutCard title={currentCard.title} text={currentCard.text} />
            </motion.div>
          </AnimatePresence>

          {/* Chevron right (desktop) */}
          <Icon
            icon="ix:chevron-right"
            className="hidden md:block size-12 cursor-pointer text-secondary hover:text-secondary-bold transition-colors duration-300 hover:scale-110 active:scale-95 self-center"
            onClick={handleNext}
          />
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-4 w-full max-w-xs">
          {aboutCards.map((_, idx) => (
            <Icon
              key={idx}
              icon="lucide:dot"
              className={`size-6 cursor-pointer transition-colors duration-300 ${
                idx === currentIndex
                  ? "text-[var(--color-secondary-bold)]"
                  : "text-[var(--text)]"
              }`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-center items-center gap-4">
          {/* Chevron left */}
          <Icon
            icon="ix:chevron-left"
            className="size-10 cursor-pointer text-[var(--text)] hover:text-secondary transition-colors duration-300 active:scale-95 active:text-secondary"
            onClick={handlePrev}
          />

          {/* Dots */}
          <div className="flex gap-2">
            {aboutCards.map((_, idx) => (
              <Icon
                key={idx}
                icon="lucide:dot"
                className={`size-6 cursor-pointer transition-colors duration-300 ${
                  idx === currentIndex
                    ? "text-[var(--color-secondary-bold)]"
                    : "text-[var(--text)]"
                }`}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>

          {/* Chevron right */}
          <Icon
            icon="ix:chevron-right"
            className="size-10 cursor-pointer text-[var(--text)] hover:text-secondary transition-colors duration-300 active:scale-95 active:text-secondary"
            onClick={handleNext}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
