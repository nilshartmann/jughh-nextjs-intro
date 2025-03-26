import Link from "next/link";
import React from "react";

import { NewsletterRegistration } from "@/components/NewsletterRegistration";

export default function GlobalHeader() {
  return (
    <div
      className={
        "mx-auto flex w-full max-w-screen-lg items-center justify-between"
      }
    >
      <Link
        href={"/"}
        prefetch={false}
        className={
          "cursor-pointer text-teal-600 transition-all duration-500 ease-in-out hover:text-teal-700"
        }
      >
        <i className="fa-solid fa-house"></i>
      </Link>
      <NewsletterRegistration />
    </div>
  );
}
