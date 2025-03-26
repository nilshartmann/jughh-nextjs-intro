import { twMerge } from "tailwind-merge";

type MinusButtonProps = {
  disabled?: boolean;
  onClick?(): void;
};
export default function MinusButton({ disabled, onClick }: MinusButtonProps) {
  return (
    <button
      className={twMerge(
        "fa-solid fa-circle-minus",
        disabled
          ? "cursor-auto text-stone-500 hover:text-stone-500"
          : "cursor-pointer text-teal-700 hover:text-teal-600",
      )}
      disabled={disabled}
      onClick={onClick}
    />
  );
}
