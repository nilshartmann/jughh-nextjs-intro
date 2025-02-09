import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: "http://localhost:20080/graphql",
  // you can disable result caching here if you want to
  // (this does not work if you are rendering your page with
  // `export const dynamic = "force-static"`)
  // fetchOptions: { cache: "no-store" },
  fetchOptions: { cache: "force-cache" },
});

const authLink = setContext((_request, currentContext) => {
  console.log("EXECUTING OPERATION ", _request.operationName);
  return {
    ...currentContext,
    headers: {
      ...currentContext.headers,
    },
  };
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
