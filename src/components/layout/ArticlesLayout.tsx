import { ReactNode } from "react";

import ArticlesRouteHeader from "@/components/layout/ArticlesRouteHeader";
import Footer from "@/components/layout/Footer";

type ArticlesLayoutProps = {
  children: ReactNode;
};

export default function ArticlesLayout({ children }: ArticlesLayoutProps) {
  return (
    <main className={"ArticlesLayout flex flex-grow flex-col justify-between"}>
      <div className={"space-y-4"}>
        <ArticlesRouteHeader />
        {children}
      </div>
      <Footer />
    </main>
  );
}
