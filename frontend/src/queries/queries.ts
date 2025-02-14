import { GetStoriesDocument } from "@/_generated-graphql-types";
import { query } from "@/graphql-client";

export async function fetchStories(
  page: number = 1,
  orderBy: "CATEGORY" = "CATEGORY",
) {
  const { data } = await query({
    query: GetStoriesDocument,
    variables: {
      orderBy: orderBy,
      page: page,
    },
  });

  return data;
}
