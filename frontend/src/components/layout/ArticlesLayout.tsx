import { ReactNode } from "react";

import ArticlesHeader from "@/components/layout/ArticlesHeader";
import Footer from "@/components/layout/Footer";

type ArticlesLayoutProps = {
  children: ReactNode;
};

export default function ArticlesLayout({ children }: ArticlesLayoutProps) {
  return (
    <main className={"ArticlesLayout flex flex-grow flex-col justify-between"}>
      <div className={"space-y-4"}>
        <ArticlesHeader />
        {children}
      </div>
      <Footer />
    </main>
  );
}
