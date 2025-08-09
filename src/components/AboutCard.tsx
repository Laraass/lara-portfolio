import React from "react";

interface AboutCardProps {
  title: string;
  text: string;
  onNext?: () => void;
  onPrev?: () => void;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, text }) => {
  return (
    <div
      className="flex flex-col gap-2 bg-[var(--bg)] text-[var(--text)] rounded-xl p-4 max-w-3xl mx-auto
        shadow-[0_-5px_10px_-3px_#0000001a,_0_10px_20px_-3px_#0000000d,_0_4px_6px_-2px_#0000000d]
"
    >
      {/* Title*/}
      <h2 className="font-display text-5xl text-[var(--text)] text-center">
        {title}
      </h2>

      <div className="flex items-center justify-between border-t border-secondary-bold py-4 text-xl text-[var(--text)]">
        {/* Text */}
        <p className="flex-1 text-center whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
