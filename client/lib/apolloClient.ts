import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = () => {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
};

const _createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_VENDURE_GRAPHQL,
      useGETForQueries: false,
    }),
    cache: new InMemoryCache(),
  });
};
