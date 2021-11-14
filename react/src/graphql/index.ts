import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloclient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
  cache: new InMemoryCache()
})

export default apolloclient
