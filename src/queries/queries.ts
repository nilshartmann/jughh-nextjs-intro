import {
  AddLikeDocument,
  G_ArticleOrderBy,
  GetArticleDocument,
  GetArticleListDocument,
  GetCommentListDocument,
  GetRelatedArticlesDocument,
} from "@/_generated-graphql-types";
import { getClient, query } from "@/graphql-client";
import { Article, Comment, RelatedArticle } from "@/types";

type FetchArticleListParams = {
  page?: string | number | undefined | null;
  orderBy?: string | undefined | null;
};

export async function fetchArticleList({
  page = 1,
  orderBy = "DATE",
}: FetchArticleListParams = {}) {
  const { data } = await query({
    query: GetArticleListDocument,
    variables: {
      orderBy: getValidOrderBy(orderBy),
      page: getValidPage(page),
    },
  });

  return data.articleList;
}

export async function fetchArticle(
  articleId: string,
): Promise<Article | undefined> {
  const { data } = await query({
    query: GetArticleDocument,
    variables: {
      articleId,
    },
  });

  return data.article;
}

export async function fetchComments(articleId: string): Promise<Comment[]> {
  const { data } = await query({
    query: GetCommentListDocument,
    variables: {
      articleId,
    },
  });

  return data.article?.comments || [];
}

export async function fetchRelatedArticles(
  articleId: string,
): Promise<RelatedArticle[]> {
  const { data } = await query({
    query: GetRelatedArticlesDocument,
    variables: {
      articleId,
    },
  });

  return data.article?.relatedArticles || [];
}

export async function mutateArticleLikes(
  articleId: string,
): Promise<number | null> {
  const apolloClient = getClient();
  const { data } = await apolloClient.mutate({
    mutation: AddLikeDocument,
    variables: {
      articleId,
    },
  });

  if (data && "likedArticle" in data.addLike) {
    return data.addLike.likedArticle.likes;
  }

  // error case
  return null;
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
