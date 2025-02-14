import { ReactNode } from "react";

type ArticleListGridProps = {
  children: ReactNode;
};

export default function ArticleListGrid({ children }: ArticleListGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
