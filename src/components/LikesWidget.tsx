"use client";
import { useState } from "react";

import LikeIcon from "@/components/LikeIcon";
import { LikeIndicator } from "@/components/LoadingIndicator";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {
  const [likes, setLikes] = useState(currentLikes);
  const isPending = false;

  const handleSubmit = () => {
    // todo: startTransition
    //  action: savelikeAction
  };

  return (
    <form className={"inline-block"} action={handleSubmit}>
      <button
        type={"submit"}
        disabled={isPending}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-pointer hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        <span className={"ms-2"}>{likes}</span>
        {isPending ? <LikeIndicator /> : <LikeIcon />}
      </button>
    </form>
  );
}
