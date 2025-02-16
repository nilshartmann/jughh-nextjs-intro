import { notFound } from "next/navigation";
import { Suspense } from "react";

import ArticlePage from "@/components/articlepage/ArticlePage";
import CommentList from "@/components/articlepage/CommentList";
import RelatedArticles from "@/components/articlepage/RelatedArticles";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";
import { fetchArticle, fetchRelatedArticles } from "@/queries/queries";

type ArticleRouteProps = {
  params: Promise<Record<string, string>>;
};
// Makes this route to a static route with pre-rendered
//   pages during build time
// export async function generateStaticParams() {
//   return [
//     {
//       articleId: "A_1",
//     },
//   ];
// }

/**
 * Makes this route a static route, so that they can be cached
 *
 * Note that a static route will only be delivered complete "at all"
 * to the client. Means, Suspense Boundaries does not have an effect
 * actually
 *
 * - Dynmic routes on the other hand are not cached at all.
 */
// export const dynamic = "error";

export default async function ArticleRoutePage({ params }: ArticleRouteProps) {
  const { articleId } = await params;
  console.log("Rendering Article ", articleId);

  const relatedArticles = fetchRelatedArticles(articleId);
  const article = await fetchArticle(articleId);

  if (!article) {
    notFound();
  }

  return (
    <ArticlePage article={article}>
      <Sidebar>
        <SidebarBox title={"Related Articles"}>
          <Suspense fallback={<LoadingIndicator />}>
            <RelatedArticles articlesPromise={relatedArticles} />
          </Suspense>
        </SidebarBox>

        <SidebarBox title={"What others think"}>
          <Suspense
            fallback={<LoadingIndicator>Loading comments...</LoadingIndicator>}
          >
            <CommentList articleId={article.id} />
          </Suspense>
        </SidebarBox>
      </Sidebar>
    </ArticlePage>
  );
}
