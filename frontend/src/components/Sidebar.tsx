import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  return (
    <div
      className={
        "border-1 bg-goldgray w-full space-y-8 rounded-2xl bg-slate-50 px-4 py-8 md:mt-0"
      }
    >
      {children}
    </div>
  );
}
