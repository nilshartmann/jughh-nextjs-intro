import MinusButton from "@/components/MinusButton";
import PlusButton from "@/components/PlusButton";

export default function ReadingSpeedChooser() {
  // todo
  // useReadingSpeed();
  // ctx.update(-50)
  // disabled ctx.readingSpeed <= 50

  return (
    <div className={"flex gap-x-2 font-normal"}>
      <MinusButton />
      Reading speed <span className={"font-bold"}>100</span> wpm
      <PlusButton />
    </div>
  );
}
