import { twMerge } from "tailwind-merge";

type FooterProps = {
  variant?: "light" | "solid";
};
export default function Footer({ variant = "solid" }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "h-12 font-inter text-sm text-teal-50",
        variant === "solid" ? "bg-teal-700" : "bg-teal-600/60",
      )}
    >
      <div
        className={
          "container mx-auto flex h-full items-center justify-center space-x-8"
        }
      >
        <p>Dummy content only! 👮‍</p>
        <p>
          <a className={"hover:underline"} href="https://nilshartmann.net">
            https://nilshartmann.net
          </a>
        </p>
      </div>
    </footer>
  );
}
