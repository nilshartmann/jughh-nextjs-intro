import { notFound } from "next/navigation";

import { ArticlePageBanner } from "@/components/articlepage/ArticlePageBanner";
import CommentList, { Comment } from "@/components/articlepage/CommentList";
import { H2 } from "@/components/Heading";
import { Sidebar } from "@/components/Sidebar";
import { fetchArticle } from "@/queries/queries";

type ArticlePageProps = {
  params: Promise<Record<string, string>>;
};

const comments: Comment[] = [
  {
    id: "1",
    comment: "Lorem ipsum diliri",
    commenter: "Paul",
  },
  {
    id: "2",
    comment: "Green gray blue fasdfasdf",
    commenter: "Toni",
  },
  {
    id: "3",
    comment: "Lorem ipsum diliri",
    commenter: "Sarah",
  },
  {
    id: "4",
    comment: "Lorem ipsum diliri",
    commenter: "Maja",
  },
];

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
            <CommentList articleId={article.id} />
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
