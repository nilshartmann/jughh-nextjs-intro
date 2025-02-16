import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

import { delayConfig, graphQlFetchCache } from "@/demo-config";

const fetchOptions =
  graphQlFetchCache === "force-cache" ? { cache: "force-cache" } : undefined;

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: "http://localhost:20080/graphql",
  fetchOptions,
});

const slowdownLink = setContext((_request, currentContext) => {
  const opName = _request.operationName;
  console.log("GraphQL Operation", opName);

  if (!opName) {
    return currentContext;
  }

  const slowdown = delayConfig[opName];
  if (!slowdown) {
    return currentContext;
  }

  console.info("Slowdown GraphQL operation", opName, slowdown + "ms");

  return {
    ...currentContext,
    headers: {
      ...currentContext.headers,
      slowdown,
    },
  };
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: slowdownLink.concat(httpLink),
  });
});
