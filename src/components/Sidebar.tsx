import { ReactNode } from "react";

type SidebarProps = {
  children?: ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  return <div className={"flex w-full flex-col space-y-8"}>{children}</div>;
}
