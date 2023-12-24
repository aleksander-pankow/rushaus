import '@/app/globals.css'
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import EventList from "@/components/Events/EventsList";
import ClientOnly from "@/components/ClientOnly";
import Social from "@/components/Social";

import {loadErrorMessages, loadDevMessages} from "@apollo/client/dev";
import React from "react";

loadDevMessages();
loadErrorMessages();
export default function Events() {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="description"
                      content="Do you want people to click on your search result? Learn how to write the best meta description. Including 7 characteristics and examples!"/>
            </Head>
            <Header/>
            <Container className={""}>
                <article>
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10"}>
                        <h1>Мероприятия</h1>
                    </section>
                    <section className={"flex flex-col lg:flex-row border border-black border-t-0"}>
                            <div className="basis-full lg:basis-3/4 p-5">
                                <ClientOnly>
                                    <EventList/>
                                </ClientOnly>
                            </div>
                            <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_1.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_2.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_3.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_4.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                            </div>
                    </section>
                </article>
                <Social/>
            </Container>
            <Footer/>
        </>
    )

}