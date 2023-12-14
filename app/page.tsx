"use client"
import Slider from "@/components/Home/Slider";
import Ticker from "@/components/Home/Ticker";
import Events from "@/components/Home/Events";
import Categories from "@/components/Home/Categories";
import Social from "@/components/Social";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/app/lib/apollo-client";

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Slider/>
            <Ticker/>
            <Events/>
            <Categories/>
            <Social/>
        </ApolloProvider>
    )
}
