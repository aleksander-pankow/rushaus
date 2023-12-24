"use client"
import Slider from "@/components/Home/Slider";
import Ticker from "@/components/Home/Ticker";
import Events from "@/components/Home/Events";
import Categories from "@/components/Home/Categories";
import Social from "@/components/Social";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/app/lib/apollo-client";
import {useEffect, useState} from "react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import SplashScreen from "@/components/SplashScreen";
import styles from "./styles/animations.module.css";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []); // Run only once on component mount
    return (
        <ApolloProvider client={client}>
            {loading ? <SplashScreen className={styles['animate-fadeIn']} /> :
                <Container className={loading ? styles['animate-fadeOut'] : styles['animate-fadeIn']}>
                    <Header/>
                    <Slider/>
                    <Ticker/>
                    <Events/>
                    <Categories/>
                    <Social/>
                </Container>
            }
        </ApolloProvider>
    )
}
