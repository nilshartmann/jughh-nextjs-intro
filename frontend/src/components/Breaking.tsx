"use client";
import { useEffect, useRef, ReactNode } from "react";

interface BreakingProps {
  children: ReactNode;
  speed?: number;
}

const Breaking: React.FC<BreakingProps> = ({ children, speed = 10 }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame: number;
    let start = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - start) / speed;
      marquee.style.transform = `translateX(${-elapsed % marquee.clientWidth}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-gray-800 py-2 text-white">
      <div
        ref={marqueeRef}
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Breaking;
