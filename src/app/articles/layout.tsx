import { ReactNode } from "react";

import ArticlesRouteHeader from "@/components/layout/ArticlesRouteHeader";
import Footer from "@/components/layout/Footer";

// SHORTCUT: aroute

type ArticlesRouteLayoutProps = {
  children: ReactNode;
};

export default function ArticlesRouteLayout({
  children,
}: ArticlesRouteLayoutProps) {
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
