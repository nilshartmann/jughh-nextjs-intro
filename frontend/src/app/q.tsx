"use client";

import { useSuspenseQuery } from "@apollo/client";

import { GetSingleStoryDocument } from "@/app/__generated__/graphql";

export function MyQuery() {
  useSuspenseQuery(GetSingleStoryDocument, {
    variables: {
      huhu: "fasdfasdf",
    },
  });
}
