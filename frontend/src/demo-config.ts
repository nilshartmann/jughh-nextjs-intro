/**
 * Can be used to artifically delay single GraphQL requests
 * to simulate slow response times from the backend
 *
 */
export const demoConfig: Record<string, number> = {
  /** query on /articles
   *
   * - must match the name of the GraphQL Operation!
   **/
  GetArticles: 0,
  SubscribeNewsletter: 150,
};
