import {
  G_ArticleOrderBy,
  GetArticlesDocument,
} from "@/_generated-graphql-types";
import { query } from "@/graphql-client";

export async function fetchArticles(
  page: string | number | undefined | null = 1,
  orderBy: string | undefined | null = "DATE",
) {
  const { data } = await query({
    query: GetArticlesDocument,
    variables: {
      orderBy: getValidOrderBy(orderBy),
      page: getValidPage(page),
    },
  });

  return data;
}

function getValidPage(p: string | number | undefined | null): number {
  if (!p) {
    return 1;
  }

  if (typeof p === "number") {
    return p;
  }

  try {
    return parseInt(p) || 1;
  } catch (e) {
    console.warn(`Invalid page search param '${p}'`, e);
  }

  return 1;
}

function getValidOrderBy(a: string | undefined | null): G_ArticleOrderBy {
  if (!a) {
    return "DATE";
  }
  const o = a.toUpperCase();

  if (o === "DATE" || o === "CATEGORY" || o === "LIKES") {
    return o;
  }

  console.warn("Order by invalid: ", o);

  return "DATE";
}
