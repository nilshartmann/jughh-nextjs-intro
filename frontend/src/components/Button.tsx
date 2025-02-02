import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

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
        "font-barlow inline-flex transform items-center justify-center rounded px-4 py-2 font-normal text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:underline",
        // size === "lg" &&
        //   "border-red bg-red hover:border-red hover:bg-orange_2 hover:shadow-red mb-2 mt-2 border-2 p-4 text-2xl hover:shadow-2xl",
        size === "regular" && "mb-2 mt-2",
        size === "regular" && "bg-amber-600 p-2 hover:bg-amber-500",
        size === "regular" &&
          checked &&
          "bg-green hover:bg-green hover:cursor-default hover:no-underline",
        disabled &&
          "cursor-default bg-orange-200 hover:cursor-default hover:bg-orange-200",
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
    "font-barlow inline-flex h-12 w-12 items-center justify-center rounded px-4 py-2 text-white",
    state === "selectable" &&
      "bg-orange_2 hover:bg-orange_2-500 hover:underline",
    state === "active" && "bg-green hover:bg-green underline",
    state === "disabled" && "bg-gray-300",
  );
  return <span className={buttonClassName}>{label}</span>;
}
