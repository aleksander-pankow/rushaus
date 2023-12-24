import '@/app/globals.css';
import Link from "next/link";
import Head from "next/head";
import parse from "html-react-parser";
import { gql, ApolloQueryResult } from "@apollo/client";
import { client } from "@/app/lib/apollo-client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ClientOnly from "@/components/ClientOnly";
import Social from "@/components/Social";
import React from "react";
import { GET_EVENT, GET_SLUGS } from "@/app/services/api/requests";

interface PageProps {
    event: {
        title: string;
        content: string;
        event_fields: {
            dateAndTime: string;
            excerpt: string;
            place: string;
            video: string;
            photo: {
                sourceUrl: string;
            }[];
        };
    };
}

const Page: React.FC<PageProps> = ({ event }) => {
    const { title, content, event_fields } = event;
    const { dateAndTime, excerpt, place, video, photo } = event_fields || {};
    console.log(event);
    return (
        <>
            <Head>
                <title>{parse(title)} | Pagination Station</title>
            </Head>
            <Header />
            <Container className={""}>
                <article>
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10"}>
                        <h1>{title}</h1>
                    </section>
                    <section className={"flex flex-col lg:flex-row border border-black border-t-0"}>
                        <div className="basis-full lg:basis-3/4 border-black border-r">
                            <div className={"relative border-black border-b"}>
                                {photo && <img src={photo[0]?.sourceUrl} className={"w-full aspect-[2.39/1] object-cover p-5"} alt={""} />} {/* Assuming photo exists */}
                                <div className={"absolute flex left-0 bottom-10 p-5 mx-5 w-auto z-10 backdrop-blur-md bg-white/30"}>
                                    <div className={"date"}>{dateAndTime}</div>
                                    <div className={"adress"}>Berlin</div>
                                    <div className={"place"}>{place}</div>
                                </div>
                            </div>
                            <ClientOnly className={"space-y-2 p-5"}>
                                {parse(content)}
                            </ClientOnly>
                        </div>
                        <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                            {/* Banner links */}
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
                <Social />
            </Container>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const slugs: string[] = await getSlugs();
    const paths = slugs.map((slug: string) => {
        return { params: { slug } };
    });

    return {
        paths,
        fallback: false,
    };
}

async function getSlugs() {
    const { data } = await client.query({
        query: GET_SLUGS,
    });

    return data.events.nodes.map((node: { slug: string }) => node.slug);
}


export async function getStaticProps(context: { params: { slug: string } }) {
    const { data }: ApolloQueryResult<any> = await client.query({
        query: GET_EVENT,
        variables: {
            slug: context.params.slug,
        },
    });

    return {
        props: {
            event: data.event,
        },
    };
}

export default Page;
