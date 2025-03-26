import { twMerge } from "tailwind-merge";

type PlusButtonProps = {
  disabled?: boolean;
  onClick?(): void;
};
export default function PlusButton({ disabled, onClick }: PlusButtonProps) {
  return (
    <button
      className={twMerge(
        "fa-solid fa-circle-plus",
        disabled
          ? "cursor-auto text-stone-500 hover:text-stone-500"
          : "cursor-pointer text-teal-700 hover:text-teal-600",
      )}
      disabled={disabled}
      onClick={onClick}
    />
  );
}
