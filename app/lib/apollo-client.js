import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                posts: relayStylePagination(),
                events: relayStylePagination(),
            },
        },
    },
});

export const client = new ApolloClient({
    uri: "https://rushaus.pankow.digital/graphql",
    cache,
});