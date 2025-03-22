"use client";

import MinusButton from "@/components/MinusButton";
import PlusButton from "@/components/PlusButton";
import { useReadingSpeed } from "@/components/ReadingSpeedProvider";

export default function ReadingSpeedChooser() {
  const ctx = useReadingSpeed();

  return (
    <div className={"flex gap-x-2 font-normal"}>
      <MinusButton
        disabled={ctx.readingSpeed <= 50}
        onClick={() => ctx.update(-50)}
      />
      Reading speed <span className={"font-bold"}>{ctx.readingSpeed}</span> wpm
      <PlusButton onClick={() => ctx.update(50)} />
    </div>
  );
}
