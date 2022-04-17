import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
  } from "@apollo/client";

  const cache = new InMemoryCache();
  const link = new createHttpLink({
      uri: "http://localhost:4000/graphql"
  })

  const client = new ApolloClient({
    cache,
    link
  })

  export default client;