import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function H1({ children, className }: HeadingProps) {
  return (
    <h1 className={twMerge("font-space text-3xl font-bold", className)}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={twMerge(
        "font-space text-2xl font-bold text-teal-700",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={twMerge(
        "font-space text-lg font-bold text-teal-700",
        className,
      )}
    >
      {children}
    </h3>
  );
}
