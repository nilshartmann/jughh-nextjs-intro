import { fetchComments } from "@/queries/queries";

type CommentListProps = {
  articleId: string;
};
export default async function CommentList({ articleId }: CommentListProps) {
  const comments = await fetchComments(articleId);

  return (
    <>
      {comments.map((f) => {
        return (
          <div
            key={f.id}
            className={"mb-4 rounded-lg border border-slate-200 bg-white p-4"}
          >
            <span className={"font-inter text-teal-800"}>
              <div className={"flex items-end justify-between"}>
                {/*<div className={"font-medium"}>{f.commenter} </div>*/}
                {/*<div className={"text-sm"}>{formatDate(f.createdAt)}</div>*/}
              </div>
              {/*<div className={"mt-1 text-orange_2"}>*/}
              {/*  <RatingStars rating={f.rating} />*/}
              {/*</div>*/}
              <div className={"leading-7"}>
                <span className={"font-bold"}>{f.writer}</span> says:{" "}
                <span className={""}>{f.text}</span>
              </div>
            </span>
          </div>
        );
      })}
    </>
  );
}
