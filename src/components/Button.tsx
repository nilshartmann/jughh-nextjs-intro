import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  size?: "regular" | "lg";
  checked?: boolean;
  children: ReactNode;
  disabled?: boolean;
};

export function Button({
  size = "regular",
  checked,
  children,
  disabled,
}: ButtonProps) {
  return (
    <span
      className={twMerge(
        "inline-flex transform items-center justify-center rounded px-4 py-2 font-barlow font-normal text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:underline",
        "border-teal-700 bg-teal-600 hover:bg-teal-700",
        size === "lg" &&
          "mb-2 mt-2 rounded-xl border-2 p-4 text-2xl underline-offset-8 hover:drop-shadow-2xl",
        size === "regular" && "mb-2 mt-2",
        // size === "regular" && "bg-amber-600 p-2 hover:bg-amber-500",
        size === "regular" &&
          checked &&
          "hover:bg-border-teal-900 bg-teal-900 hover:cursor-default hover:no-underline",
        disabled &&
          "cursor-default bg-stone-300 hover:cursor-default hover:bg-stone-300 hover:no-underline",
      )}
    >
      {children}
    </span>
  );
}

type CheckLabelProps = {
  children: React.ReactNode;
  checked: boolean;
  enabled?: boolean;
  style?: "circle" | "square";
};

export function CheckLabel({
  children,
  checked,
  enabled,
  style = "circle",
}: CheckLabelProps) {
  const iconClassName = twMerge(
    "fa-regular",
    checked
      ? style === "circle"
        ? "fa-circle-check"
        : "fa-square-check"
      : style === "circle"
        ? "fa-circle"
        : "fa-square",
    checked && !enabled
      ? "underline-none cursor-default text-white no-underline hover:no-underline"
      : "text-gray-200",
  );

  const labelClassName = twMerge(
    "ms-2",
    checked ? "hover:no-underline" : "hover:underline",
  );

  return (
    <>
      <i className={iconClassName}></i>
      <span className={labelClassName}>{children}</span>
    </>
  );
}

type PageButtonState = {
  state: "active" | "disabled" | "selectable";
  label: string;
};

type PageButtonProps = {
  state: PageButtonState;
};
export function PageButton({ state: { state, label } }: PageButtonProps) {
  const buttonClassName = twMerge(
    "inline-flex h-12 w-12 items-center justify-center rounded px-4 py-2 font-barlow text-white underline-offset-4 transition-all duration-500 ease-in-out",
    state === "selectable" &&
      "cursor-pointer bg-teal-600 hover:bg-teal-700 hover:underline",
    state === "active" && "bg-teal-900 underline hover:bg-teal-900",
    state === "disabled" && "bg-stone-300",
  );
  return <span className={buttonClassName}>{label}</span>;
}

type ArrowButtonProps = {
  disabled?: boolean;
  direction: "left" | "right";
};
export function ArrowButton({ direction, disabled }: ArrowButtonProps) {
  const buttonClassName = twMerge(
    "inline-flex items-center justify-center rounded-full px-2 py-2 text-white transition-all duration-500 ease-in-out",
    disabled
      ? "cursor-default bg-stone-300 hover:bg-stone-300"
      : "cursor-pointer bg-teal-600 hover:bg-teal-700",
  );
  return (
    <span className={buttonClassName}>
      {direction === "left" ? (
        <i className="fa-solid fa-arrow-left"></i>
      ) : (
        <i className="fa-solid fa-arrow-right"></i>
      )}
    </span>
  );
}
