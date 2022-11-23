import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://find-places.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});
