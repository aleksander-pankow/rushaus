import Head from 'next/head';

import Slider from "@/components/Home/Slider";
import Ticker from "@/components/Home/Ticker";
import Events from "@/components/Home/Events";
import Categories from "@/components/Home/Categories";
import Social from "@/components/Social";
import {useEffect, useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SplashScreen from "@/components/SplashScreen";
import styles from "@/app/styles/animations.module.css";
import '@/app/globals.css'

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []); // Run only once on component mount
    return (
        <>
            <Head>
                <title>i18n News Reader</title>
            </Head>

            {loading ? <SplashScreen className={styles['animate-fadeIn']} /> : <></> }
            <Header/>
            <Container className={loading ? styles['animate-fadeOut'] : styles['animate-fadeIn']}>
                <Slider/>
                <Ticker/>
                <Events/>
                <Categories/>
                <Social/>
            </Container>
            <Footer />
        </>
    );
}