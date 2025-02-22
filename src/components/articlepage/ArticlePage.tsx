import { ReactNode } from "react";

import ArticleBody from "@/components/articlepage/ArticleBody";
import { ArticlePageBanner } from "@/components/articlepage/ArticlePageBanner";
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
      <ArticlePageBanner article={article} />
      <TwoColumnLayout sidebar={children}>
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
    </>
  );
}
