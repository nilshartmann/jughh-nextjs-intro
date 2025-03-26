"use server";
import crypto from "crypto";

import { delayConfig } from "@/demo-config";

function uniqueId() {
  return crypto.randomUUID();
}

type NewsletterFormState = {
  email?: string;
  requestId?: string;
  status?: "Subscribed!" | "Error" | null;
};

export async function subscribeToNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  // SIMULATE A SLOW REQUEST
  //  No real backend is involved here
  //  This example doesn't care about error handling etc.

  await new Promise((res) =>
    setTimeout(() => res("Subscribed"), delayConfig.SubscribeNewsletter),
  );

  const email = formData.get("email") as string;

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
