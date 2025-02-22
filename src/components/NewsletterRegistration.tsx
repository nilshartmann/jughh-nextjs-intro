"use client";

import React, { useActionState, useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import LoadingIndicator from "@/components/LoadingIndicator";
import { subscribeToNewsletter } from "@/components/newsletter-actions";

// "progressive enhancement" form:
//  - without enabled or loaded JS, this form is submitted as a "regular" form
//    with full page refresh
//  - with javascript only the data is submitted and the form is updated, but
//    not the whole ui
//    also with js there the user message is removed after user changes the
//    email address
export function NewsletterRegistration() {
  const [formState, action, isPending] = useActionState(subscribeToNewsletter, {
    requestId: "initial",
    email: "",
    status: null,
  });

  const [changedRequestId, setChangedRequestId] = useState<
    string | undefined
  >();

  const handleEmailChange = () => {
    setChangedRequestId(formState.requestId);
  };

  // when undefined is very first rendering OR on server
  // if NO js is in the browser, changed will never be set to
  // anything else than 'undefined'.
  // in this case we have to show the message (if there is any)
  //  and can never remove it
  // but if THERE IS js in the browser on first keystroke
  //  changed will be set to the current request Id
  //  - when the server then sends a new form (after submitting)
  //    with a new request id, requestId in local state and in form/action state
  //    differ and the message will be displayed, until
  //    there is the next keystroke, that again "aligns" form/action state
  //    and local state
  const shouldShowMessage =
    changedRequestId === undefined
      ? true
      : formState.requestId !== changedRequestId;

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
          onChange={handleEmailChange}
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
              onClick={() => setChangedRequestId(formState.requestId)}
            >
              Subscribe
            </button>
          )}
        </Button>
      </div>

      <div>
        {formState.status === "Subscribed!" &&
          shouldShowMessage &&
          "Subscribed!"}
        {formState.status === "Error" && shouldShowMessage && "Error!"}
      </div>
    </form>
  );
}
