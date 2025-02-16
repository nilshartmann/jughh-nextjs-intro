import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ArticlePageBanner } from "@/components/articlepage/ArticlePageBanner";
import CommentList from "@/components/articlepage/CommentList";
import RelatedArticles from "@/components/articlepage/RelatedArticles";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";
import { fetchArticle, fetchRelatedArticles } from "@/queries/queries";

type ArticlePageProps = {
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params;
  console.log("Rendering Article ", articleId);

  const relatedArticles = fetchRelatedArticles(articleId);
  const article = await fetchArticle(articleId);

  if (!article) {
    notFound();
  }

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
        <div className={"w-[40%]"}>
          <Sidebar>
            <SidebarBox title={"Related Articles"}>
              <Suspense fallback={<LoadingIndicator />}>
                <RelatedArticles articlesPromise={relatedArticles} />
              </Suspense>
            </SidebarBox>

            <SidebarBox title={"What others think"}>
              <Suspense
                fallback={
                  <LoadingIndicator>Loading comments...</LoadingIndicator>
                }
              >
                <CommentList articleId={article.id} />
              </Suspense>
            </SidebarBox>
          </Sidebar>
        </div>
      </div>
    </>
  );
}
