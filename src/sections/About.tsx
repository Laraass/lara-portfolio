import React from "react";
import Section from "../components/Section";

const About: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-24">
      
      {/* Picture */}
      <div className="relative flex-shrink-0">
        <img
          src="/me.png"
          alt="Lara Salman"
          className="w-64 md:w-90 object-cover border-2 border-secondary-bold"
        />
      </div>

      {/* Text card here */}
      
    </Section>
  );
};

export default About;
