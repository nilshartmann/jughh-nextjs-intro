"use client";
import { twMerge } from "tailwind-merge";

import { LikeIndicator } from "@/components/LoadingIndicator";
import { BaseArticle } from "@/types";

type LikesWidgetProps = {
  article: BaseArticle;
  style?: "white" | "teal";
};

export function LikesWidget({ article, style = "teal" }: LikesWidgetProps) {
  // const [state, action, pending] = useActionState(likeRecipeAction, {
  //   recipeId: recipe.id,
  //   likes: recipe.likes,
  // });
  const pending = false;
  // "rounded border   p-2 tracking-wide "
  return (
    <form className={"inline-block"}>
      <button
        type={"submit"}
        disabled={pending}
        className={twMerge(
          "flex space-x-2 rounded border px-2 py-1 text-[15px] text-teal-700 hover:cursor-pointer hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
          style === "teal"
            ? "border-slate-200 bg-slate-50"
            : "border-teal-700 bg-white",
        )}
      >
        <span className={"ms-2"}>{article.likes}</span>
        {pending ? (
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
