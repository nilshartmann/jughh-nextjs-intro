/**
 * Can be used to artifically delay single GraphQL requests
 * to simulate slow response times from the backend
 *
 */
export const demoConfig: Record<string, number> = {
  // Article-List on `/articles`
  GetArticleList: 0,

  // Single Article on `/articles/[articleId]`
  GetArticle: 0,

  // Submitting the Newsletter form
  SubscribeNewsletter: 150,

  // Reading comments on `/articles/[articleId]`
  GetCommentList: 0,

  // Reading related articles on `/articles/[articleId]`,
  GetRelatedArticles: 2400,

  // Delay the response in LikesWidget
  AddLike: 2400,
};
