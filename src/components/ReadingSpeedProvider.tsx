"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type IReadingSpeedContext = {
  readingSpeed: number;
  update: (amount: number) => void;
};

const ReadingSpeedContext = createContext<IReadingSpeedContext>({
  readingSpeed: 100,
  update: () => {},
});

type ReadingSpeedProviderProps = {
  children: ReactNode;
};

export default function ReadingSpeedProvider({
  children,
}: ReadingSpeedProviderProps) {
  const [readingSpeed, setReadingSpeed] = useState(100);

  const update = (amount: number) => setReadingSpeed((a) => a + amount);

  return (
    <ReadingSpeedContext value={{ readingSpeed, update }}>
      {children}
    </ReadingSpeedContext>
  );
}

export function useReadingSpeed() {
  const ctx = useContext(ReadingSpeedContext);
  return ctx;
}
