"use client";

import React, { useActionState, useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import LoadingIndicator from "@/components/LoadingIndicator";
import { subscribeToNewsletter } from "@/components/newsletter-actions";

// 🕵️‍♂️ "progressive enhancement" form:
//    - WITHOUT enabled or loaded JS, this form is submitted as a "regular" form
//      with full page refresh
//    - WITH javascript only the data is submitted and the form is updated, but
//      not the whole ui
//    - with javascript we have a loading indicator
//    - also with js there the message is removed after user changes the
//      email address
export function NewsletterRegistration() {
  const [formState, action, isPending] = useActionState(subscribeToNewsletter, {
    email: "",
  });

  const [changedRequestId, setChangedRequestId] = useState("");

  return (
    <form
      action={action}
      className={"max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"}
    >
      <div>Don't miss latest news. Subscribe to newsletter</div>

      <div className={"max-w-64"}>
        <Input
          name={"email"}
          defaultValue={formState.email}
          onChange={() => setChangedRequestId(formState.requestId || "")}
          disabled={isPending}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button>
          {isPending ? (
            <LoadingIndicator secondary />
          ) : (
            <button
              type={"submit"}
              onClick={() => setChangedRequestId(formState.requestId || "")}
            >
              Subscribe
            </button>
          )}
        </Button>
      </div>

      <div>
        {changedRequestId === undefined
          ? true
          : formState.requestId !== changedRequestId && formState.status}
      </div>
    </form>
  );
}
