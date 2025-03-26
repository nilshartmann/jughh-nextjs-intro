import { notFound } from "next/navigation";
import { Suspense } from "react";

import ArticleBody from "@/components/articlepage/ArticleBody";
import RelatedArticleSlider from "@/components/articlepage/RelatedArticleSlider";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";
import { fetchArticle, fetchRelatedArticles } from "@/queries/queries";

type ArticlePageProps = {
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params;

  const relatedArticlesPromise = fetchRelatedArticles(articleId);
  const article = await fetchArticle(articleId);

  if (!article) {
    return notFound();
  }

  return (
    <TwoColumnLayout
      sidebar={
        <Sidebar>
          <SidebarBox title={"Related Articles"}>
            <Suspense fallback={<LoadingIndicator />}>
              <RelatedArticleSlider articlesPromise={relatedArticlesPromise} />
            </Suspense>
          </SidebarBox>
        </Sidebar>
      }
    >
      <ArticleBody body={article.body} />
    </TwoColumnLayout>
  );
}
