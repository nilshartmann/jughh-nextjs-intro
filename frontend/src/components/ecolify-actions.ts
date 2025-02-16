"use server";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

import { demoConfig } from "@/demo-config";
import { mutateArticleLikes } from "@/queries/queries";

type NewsletterFormState = {
  email: string;
  requestId: string;
  status: "Subscribed!" | "Error" | null;
};

function uniqueId() {
  return crypto.randomUUID();
}

export async function subscribeToNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  // SIMULATE A SLOW REQUEST
  //  No real backend is involved here
  //  This example doesn't care about error handling etc.

  await new Promise((res) =>
    setTimeout(() => res("Subscribed"), demoConfig.SubscribeNewsletter),
  );

  const email = formData.get("email") as string;

  console.log("SUBSCRIBED E-MAIL", email);

  if (email.length < 4) {
    return {
      requestId: uniqueId(),
      email,
      status: "Error",
    };
  }

  return {
    requestId: uniqueId(),
    email: "",
    status: "Subscribed!",
  };
}

type AddLikeState = {
  articleId: string;
  likes: number;
};

export async function saveLike(state: AddLikeState): Promise<AddLikeState> {
  const articleId = state.articleId;

  console.log("SAVE LIKE", articleId);
  const newLikes = await mutateArticleLikes(articleId);
  if (newLikes === null) {
    // error
    return state;
  }

  revalidatePath("/articles");
  const path = `/articles/${articleId}`;
  console.log("Revalidating path", path, "newLikes", newLikes);
  revalidatePath(path);

  return {
    ...state,
    likes: newLikes,
  };
}
