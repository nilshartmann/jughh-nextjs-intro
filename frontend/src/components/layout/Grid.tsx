import { ReactNode } from "react";

type GridLayoutProps = {
  children: ReactNode;
};

export default function GridLayout({ children }: GridLayoutProps) {
  return (
    <div className={"container mx-auto"}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
