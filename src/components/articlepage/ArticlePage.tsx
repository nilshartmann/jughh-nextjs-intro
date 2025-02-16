import { ReactNode } from "react";

import { ArticlePageBanner } from "@/components/articlepage/ArticlePageBanner";
import { Article } from "@/types";

type ArticlePageProps = {
  article: Article;
  /** Use children for the Sidebar content */
  children: ReactNode;
};

export default function ArticlePage({ article, children }: ArticlePageProps) {
  return (
    <>
      <ArticlePageBanner article={article} />
      <div className={"container mx-auto flex gap-x-24"}>
        <div className={"w-[60%]"}>
          <div className={"space-y-2 text-lg leading-8"}>
            {article.body.split("\n").map((p, i) => {
              return <p key={i}>{p}</p>;
            })}
          </div>{" "}
          <div className={"rounded-lg border border-slate-200 bg-stone-50 p-4"}>
            Text is AI-generated and for demo purposes only. It is{" "}
            <span className={"font-bold"}>no real content!</span>
          </div>
        </div>
        <div className={"w-[40%]"}>{children}</div>
      </div>
    </>
  );
}
