import { GetArticlesDocument } from "@/_generated-graphql-types";
import { query } from "@/graphql-client";

export async function fetchArticles(
  page: number = 1,
  orderBy: "CATEGORY" = "CATEGORY",
) {
  const { data } = await query({
    query: GetArticlesDocument,
    variables: {
      orderBy: orderBy,
      page: page,
    },
  });

  return data;
}
