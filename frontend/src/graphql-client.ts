import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

import { demoSlowdown } from "@/demo-config";

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: "http://localhost:20080/graphql",
  // you can disable result caching here if you want to
  // (this does not work if you are rendering your page with
  // `export const dynamic = "force-static"`)
  // fetchOptions: { cache: "no-store" },
  // fetchOptions: { cache: "force-cache" },
});

const slowdownLink = setContext((_request, currentContext) => {
  const opName = _request.operationName;
  console.log("GraphQL Operation", opName);

  if (!opName) {
    return currentContext;
  }

  const slowdown = demoSlowdown[opName];
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
