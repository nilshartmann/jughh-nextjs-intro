"use client";

import React, { useState, useTransition } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";
import { subscribeToNewsletter } from "@/components/newsly-actions";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

//⚠️ Diese Komponente funktioniert nur, wenn
//   JavaScript eingeschaltet ist
export function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"Subscribed!" | null>(null);

  const [isRequestRunning, startTransition] = useTransition();

  const handleEmailChange = (e: string) => {
    setStatus(null);
    setEmail(e);
  };

  const handleSubmit = () => {
    startTransition(async () => {
      await subscribeToNewsletter(email);
      setStatus("Subscribed!");
    });
  };

  const saveDisabled = email.length < 1 || isRequestRunning;

  const [d, setD] = useState(false);

  return (
    <div
      className={"max-w-1/4 font-barlow flex items-center space-x-4 pe-2 ps-2"}
    >
      <div>Don't miss latest news. Subscribe to newsletter</div>
      <div className={"max-w-64"}>
        <Input
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          disabled={isRequestRunning}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button disabled={d} checked={status === "Subscribed!"}>
          {isRequestRunning ? (
            <LoadingIndicator secondary />
          ) : (
            <button onClick={() => setD(!d)}>Subscribe</button>
          )}
        </Button>
      </div>
      <div>{status === "Subscribed!" && "Subscribed!"}</div>
    </div>
  );
}
