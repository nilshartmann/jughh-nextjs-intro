"use server";

import { revalidatePath } from "next/cache";

import { mutateArticleLikes } from "@/queries/queries";

type AddLikeState = {
  likes: number;
};

export async function saveLikeAction(
  state: AddLikeState,
  formData: FormData,
): Promise<AddLikeState> {
  const articleId = formData.get("articleId") as string;

  const newLikes = await mutateArticleLikes(articleId);
  if (newLikes === null) {
    // error
    return state;
  }

  revalidatePath("/articles");
  revalidatePath(`/articles/${articleId}`);

  return {
    likes: newLikes,
  };
}
