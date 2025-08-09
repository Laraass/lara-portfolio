import React, { useEffect, useRef, useState } from "react";

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.scrollWidth / 6;
    setContentWidth(width);
  }, [children]);

  useEffect(() => {
    if (contentWidth === 0) return;

    const animationDuration = 38;

    const animName = "scrollRight";

    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @keyframes ${animName} {
        0% { transform: translateX(-${contentWidth}px); }
        100% { transform: translateX(0); }
      }
      .animate-scroll {
        animation: ${animName} ${animationDuration}s linear infinite;
        display: inline-flex;
        white-space: nowrap;
      }
      .scroll-container:hover .animate-scroll {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, [contentWidth]);

  // Touch and drag for mobile (pauses scroll when dragging)
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].pageX;
    if (containerRef.current) {
      scrollStartX.current = containerRef.current.scrollLeft;
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const deltaX = dragStartX.current - e.touches[0].pageX;
    containerRef.current.scrollLeft = scrollStartX.current + deltaX;
  };

  const onTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 overflow-hidden">
      {/* Title */}
      <h2 className="font-display text-3xl">{title}</h2>

      {/* Scrolling container */}
      <div
        ref={containerRef}
        className="scroll-container border-t border-b border-[var(--color-secondary)] w-full overflow-x-auto no-scrollbar"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div ref={scrollRef} className="animate-scroll gap-3 px-3 py-6 flex">
          {children}
          {children}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SkillCard;
