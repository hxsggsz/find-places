import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://find-places-oo0adrl0g-hxsggsz.vercel.app/",
  cache: new InMemoryCache(),
});
