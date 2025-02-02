"use client";
import { twMerge } from "tailwind-merge";
import { useActionState } from "react";
import { BaseStory } from "@/types";
import { LikeIndicator } from "@/components/LoadingIndicator";

type LikesWidgetProps = {
  story: BaseStory;
};

export function LikesWidget({ story }: LikesWidgetProps) {
  // const [state, action, pending] = useActionState(likeRecipeAction, {
  //   recipeId: recipe.id,
  //   likes: recipe.likes,
  // });
  const pending = false;

  return (
    <form className={"inline-block"}>
      <button
        type={"submit"}
        disabled={pending}
        className={twMerge(
          "flex space-x-2 rounded border border-teal-900 p-1 text-[15px] hover:cursor-pointer hover:bg-teal-900 hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
        )}
      >
        <span>{story.likes}</span>
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
