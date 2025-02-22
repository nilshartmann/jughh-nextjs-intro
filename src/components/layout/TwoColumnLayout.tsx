import { ReactNode } from "react";

type TwoColumnLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export default function TwoColumnLayout({
  children,
  sidebar,
}: TwoColumnLayoutProps) {
  return (
    <div className={"container mx-auto flex gap-x-24"}>
      <div className={"w-[60%]"}>{children}</div>
      <div className={"w-[40%]"}>{sidebar}</div>
    </div>
  );
}
