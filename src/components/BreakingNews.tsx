"use client";

import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Marquee } from "@/components/Marquee";

interface BreakingNewsProps {
  children: ReactNode;
}

export default function BreakingNews({ children }: BreakingNewsProps) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className={"flex"}>
      {visible && (
        <Marquee
          pauseOnHover={true}
          className="tracking-wide [--duration:20s] motion-reduce:overflow-auto" // pass class to change gap or speed
          innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
        >
          {children}
        </Marquee>
      )}
      <button
        className={twMerge("cursor", visible ? "ms-4" : "rounded-lg")}
        onClick={toggleVisibility}
      >
        {visible ? (
          <i className="fa-regular fa-circle-xmark" />
        ) : (
          <i className="fa-solid fa-otter" />
        )}
      </button>
    </div>
  );
}
