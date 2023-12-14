import '@/app/globals.css';
import Link from "next/link";
import Head from "next/head";
import parse from "html-react-parser";
import { gql } from "@apollo/client";
import { client } from "@/app/lib/apollo-client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ClientOnly from "@/components/ClientOnly";
import Social from "@/components/Social";
import React from "react";

interface EventProps {
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
            };
        };
    };
}
const Event: React.FC<EventProps> = ({ event }) => {
    const { title, content, event_fields } = event;
    const { dateAndTime, excerpt, place, video, photo } = event_fields || {};
    // @ts-ignore
    const image = photo[0].sourceUrl;
    return (
        <>
            <Head>
                <title>{parse(title)} | Pagination Station</title>
            </Head>
            <Header />
            <Container>
                <article>
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10 text-center"}>
                        <h1>{title}</h1>
                    </section>
                    <section className={"flex flex-col lg:flex-row border border-black border-t-0"}>
                        <div className="basis-full lg:basis-3/4 p-5 border-black border-r">
                            <div className={"border-black border-b pb-5 mb-5"}>
                                {photo && <img src={image} className={"w-full aspect-[2.39/1] object-cover"} alt={""} />} {/* Assuming photo exists */}
                            </div>
                            <ClientOnly className={"space-y-2"}>
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
    const slugs = await getSlugs();
    const paths = slugs.map((slug: string) => {
        return {params: {slug}};
    });

    return {
        paths,
        fallback: false,
    };
}

async function getSlugs() {
    const {data} = await client.query({
        query: gql`
      query getPosts {
        events(first: 100) {
          nodes {
            slug
          }
        }
      }
    `,
    });

    return data.events.nodes.map((node: { slug: string; }) => node.slug);
}

const GET_EVENT = gql`
    query getEvent($slug: ID!) {
        event(id: $slug, idType: SLUG) {
            databaseId
            title
            content
            slug
            event_fields {
                dateAndTime
                excerpt
                place
                video
                photo {
                    sourceUrl(size: LARGE)
                }
            }
        }
    }
`;

export async function getStaticProps(context: any) {
    const { data } = await client.query({
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

export default Event;