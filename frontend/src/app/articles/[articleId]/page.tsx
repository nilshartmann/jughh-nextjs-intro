import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ArticlePageBanner } from "@/components/articlepage/ArticlePageBanner";
import CommentList from "@/components/articlepage/CommentList";
import { H2 } from "@/components/Heading";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";

type ArticlePageProps = {
  params: Promise<Record<string, string>>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params;

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
          <div className={"border-lg border p-4"}>
            Text is AI-generated and for demo purposes only. It is{" "}
            <span className={"font-bold"}>no real content!</span>
          </div>
        </div>
        <div className={"w-[40%]"}>
          <Sidebar>
            <div className={"flex justify-center"}>
              <H2>What others think</H2>
            </div>
            <Suspense
              fallback={
                <LoadingIndicator>Loading comments...</LoadingIndicator>
              }
            >
              <CommentList articleId={article.id} />
            </Suspense>
            {/*<Suspense*/}
            {/*  fallback={*/}
            {/*    <LoadingIndicator>Loading feedback...</LoadingIndicator>*/}
            {/*  }*/}
            {/*>*/}
            {/*  <FeedbackListLoader recipeId={recipe.id} />*/}
            {/*</Suspense>*/}
            {/*<AddFeedbackForm recipeId={recipe.id} />*/}
          </Sidebar>
        </div>
      </div>
    </>
  );
}
