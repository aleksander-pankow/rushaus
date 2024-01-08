import '../app/globals.css'
import { ApolloProvider } from "@apollo/client";
import { client } from "../app/lib/apollo-client";
import {ThemeProvider} from "next-themes";

function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;