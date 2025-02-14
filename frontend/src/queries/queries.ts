import {
  G_ArticleOrderBy,
  GetArticleDocument,
  GetArticleListDocument,
  GetCommentListDocument,
} from "@/_generated-graphql-types";
import { query } from "@/graphql-client";

export async function fetchArticleList(
  page: string | number | undefined | null = 1,
  orderBy: string | undefined | null = "DATE",
) {
  const { data } = await query({
    query: GetArticleListDocument,
    variables: {
      orderBy: getValidOrderBy(orderBy),
      page: getValidPage(page),
    },
  });

  return data;
}

export async function fetchArticle(articleId: string) {
  const { data } = await query({
    query: GetArticleDocument,
    variables: {
      articleId,
    },
  });

  return data.article;
}

export async function fetchComments(articleId: string) {
  const { data } = await query({
    query: GetCommentListDocument,
    variables: {
      articleId,
    },
  });

  return data.article?.comments || [];
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
