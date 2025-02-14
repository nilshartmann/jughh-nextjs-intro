/**
 * Can be used to artifically delay single GraphQL requests
 * to simulate slow response times from the backend
 *
 * !!! Each key in this Record must match the name of a GraphQL
 * !!! Operation.
 * !!! The operation is delayed by the amount of milliseconds
 * !!! used as value here. Use 0 to not delay.
 *
 */
export const demoSlowdown: Record<string, number> = {
  /** query on /articles */
  GetArticles: 0,
};
