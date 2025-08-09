import React from "react";
import Section from "../components/Section";
import { Icon } from "@iconify/react";

const Home: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Section className="flex flex-col justify-center px-4 sm:px-6">
        <h1
          className="flex flex-row gap-[0.25em] flex-nowrap justify-center"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          {["HELLO", "I'M", "LARA,"].map((word) => (
            <span
              key={word}
              className="font-display text-[var(--text)] hover:text-secondary transition duration-300 cursor-default whitespace-nowrap"
              style={{ minWidth: "max-content" }}
            >
              {word}
            </span>
          ))}
        </h1>

        <span
          className="block h-1 bg-secondary-bold rounded-full"
          style={{
            width: "100%",
            maxWidth: "100%",
            transition: "width 0.3s ease",
          }}
        ></span>

        <h1
          className="flex flex-row gap-[0.25em] flex-nowrap justify-center"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          {["A", "FULLSTACK", "DEVELOPER"].map((word) => (
            <span
              key={word}
              className="font-display text-[var(--text)] hover:text-secondary transition duration-300 cursor-default whitespace-nowrap"
              style={{ minWidth: "max-content" }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className="flex flex-row items-center justify-center">
          <Icon icon="f7:map-pin" className="size-6 text-secondary" />
          <p className="text-xl text-secondary">Stockholm</p>
        </div>

        <div
          className="fixed left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-50 bottom-18 sm:bottom-6 md:bottom-6"
          style={{ animationDuration: "2s" }}
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToNextSection();
            }
          }}
        >
          <Icon
            icon="teenyicons:down-outline"
            className="size-12 text-[var(--text)] hover:text-secondary transition duration-300"
          />
        </div>
      </Section>
    </>
  );
};

export default Home;
