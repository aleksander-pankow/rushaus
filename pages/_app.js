import { ApolloProvider } from "@apollo/client";
import { client } from "../app/lib/apollo-client";

function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default App;