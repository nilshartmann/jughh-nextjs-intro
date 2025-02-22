"use client";

import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Marquee } from "@/components/Marquee";

interface BreakingProps {
  children: ReactNode;
}

const Breaking: React.FC<BreakingProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const buttonClassName = twMerge("cursor", visible ? "ms-4" : "rounded-lg");

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
      <button className={buttonClassName} onClick={() => setVisible(!visible)}>
        {visible ? (
          <i className="fa-regular fa-circle-xmark" />
        ) : (
          <i className="fa-solid fa-otter" />
        )}
      </button>
    </div>
  );
};

export default Breaking;
