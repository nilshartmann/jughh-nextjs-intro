"use client";
import { useActionState } from "react";
import { twMerge } from "tailwind-merge";

import { saveLike } from "@/components/ecolify-actions";
import { LikeIndicator } from "@/components/LoadingIndicator";
import { BaseArticle } from "@/types";

type LikesWidgetProps = {
  article: BaseArticle;
  style?: "white" | "teal";
};

export function LikesWidget({ article, style = "teal" }: LikesWidgetProps) {
  const [state, action, isPending] = useActionState(saveLike, {
    articleId: article.id,
    likes: article.likes,
  });

  return (
    <form className={"inline-block"} action={action}>
      <button
        type={"submit"}
        disabled={isPending}
        className={twMerge(
          "flex space-x-2 rounded border px-2 py-1 text-[15px] text-teal-700 hover:cursor-pointer hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600",
          style === "teal"
            ? "border-slate-200 bg-slate-50"
            : "border-teal-700 bg-white",
        )}
      >
        <span className={"ms-2"}>{state.likes}</span>
        {isPending ? (
          <LikeIndicator />
        ) : (
          <span>
            <i className="fa-regular fa-heart mr-2"></i>
          </span>
        )}
      </button>
    </form>
  );
}
