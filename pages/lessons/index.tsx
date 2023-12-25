import '@/app/globals.css'
import React from "react";
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ClientOnly from "@/components/ClientOnly";
import Social from "@/components/Social";
import BannerList from "@/components/BannerList";
import Lessons from "@/components/Lessons/Lessons";


export default function Events() {
    return (
        <>
            <Head>
                <title>Образовательный центр</title>
                <meta name="description"
                      content="Do you want people to click on your search result? Learn how to write the best meta description. Including 7 characteristics and examples!"/>
            </Head>
            <Header/>
            <Container className={""}>
                <article>
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10"}>
                        <h1>Образовательный центр</h1>
                    </section>
                    <section className={"flex flex-col lg:flex-row border border-black border-t-0"}>
                        <div className="basis-full lg:basis-3/4 p-5">
                            <ClientOnly>
                                <Lessons/>
                            </ClientOnly>
                        </div>
                        <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                            <BannerList/>
                        </div>
                    </section>
                </article>
                <Social/>
            </Container>
            <Footer/>
        </>
    )

}