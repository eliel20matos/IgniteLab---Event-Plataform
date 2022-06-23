import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q9pqny3t5u01z443z5fjw1/master',
    cache: new InMemoryCache()
})