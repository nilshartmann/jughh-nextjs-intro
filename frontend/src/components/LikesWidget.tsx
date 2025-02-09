"use client";
import { twMerge } from "tailwind-merge";

import { LikeIndicator } from "@/components/LoadingIndicator";
import { BaseStory } from "@/types";

type LikesWidgetProps = {
  story: BaseStory;
};

export function LikesWidget({ story }: LikesWidgetProps) {
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
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-pointer hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
        )}
      >
        <span className={"ms-2"}>{story.likes}</span>
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
