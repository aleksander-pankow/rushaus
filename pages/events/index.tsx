import '@/app/globals.css'
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import EventList from "@/components/Events/EventsList";
import ClientOnly from "@/components/ClientOnly";
import Social from "@/components/Social";

import {loadErrorMessages, loadDevMessages} from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();
export default function Events() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="description"
                      content="Do you want people to click on your search result? Learn how to write the best meta description. Including 7 characteristics and examples!"/>
            </Head>
            <Header/>
            <Container>
                <article>
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10"}>
                        <h1>Мероприятия</h1>
                    </section>
                    <section className={"flex flex-row border border-black border-t-0"}>
                            <div className="basis-4/5 p-5">
                                <ClientOnly>
                                    <EventList/>
                                </ClientOnly>
                            </div>
                            <div className="basis-1/5 p-5">03</div>
                    </section>
                </article>
                <Social/>
            </Container>
            <Footer/>
        </div>
    )

}