import { ReactNode } from "react";

import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { Article } from "@/types";

type ArticlePageProps = {
  article: Article;
  /** Use children for the Sidebar content */
  children: ReactNode;
};

export default function ArticlePage({ article, children }: ArticlePageProps) {
  return (
    <>
      <ArticleBanner article={article} />
      <TwoColumnLayout sidebar={children}>
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
    </>
  );
}
