// Import statements...
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
import DateComponent from "@/components/Date/Date";
interface EventFields {
    excerpt: string | null;
    date: string | null;
    time: string | null;
    place: string | null;
    video: string | null;
    photo: {
        edges: {
            node: {
                sourceUrl: string | null;
                altText: string | null;
            };
        }[];
    };
}

interface Event {
    title: string;
    content: string;
    eventFields: EventFields;
}

interface PageProps {
    event: Event;
}

const transformEventData = (eventFields: EventFields) => {
    const { date, time, excerpt, place, video, photo } = eventFields || {};

    let images: string[] = [];

    if (photo && photo.edges && photo.edges.length > 0) {
        images = photo.edges.map((image) => image.node.sourceUrl || "/images/test/thumb.png");
    } else {
        images = ["/images/test/thumb.png"]; // Default image path
    }

    return {
        date: date || null,
        time: time || null,
        excerpt: excerpt || null,
        place: place || null,
        video: video || null,
        photo: images,
    };
};

const renderBannerLinks = () => {
    // Render banner links
    return(
        <>
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
        </>
    );
};

const Page: React.FC<PageProps> = ({ event }) => {
    const { title, content, eventFields } = event;
    const transformedEventData = transformEventData(eventFields);
    const { date, time, excerpt, place, video, photo } = transformedEventData;

    return (
        <>
            {/* Head, Header, and other common components */}
            <Head>
                <title>{parse(title)} | Pagination Station</title>
            </Head>
            <Header />

            <Container>
                <article>
                    {/* Title section */}
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10"}>
                        <h1>{title}</h1>
                    </section>
                    {/* Content section */}
                    <section className="flex flex-col lg:flex-row border border-black border-t-0">
                        {/* Main content */}
                        <div className="basis-full lg:basis-3/4 border-black border-r">
                            <div className="relative border-black border-b">
                                {photo && photo.length > 0 && (
                                    <img src={photo[0]} className="w-full aspect-[2.39/1] object-cover p-5" alt="" />
                                )}
                                <div className="absolute flex left-0 bottom-10 p-5 mx-5 w-auto z-10 backdrop-blur-md bg-white/30">
                                    <div className="date">{date && <DateComponent dateString={date} formatString={'d MMMM yyyy'} />}</div>
                                    <div className="place">{place}</div>
                                </div>
                            </div>
                            <ClientOnly className="space-y-2 p-5">{parse(content)}</ClientOnly>
                        </div>

                        {/* Banner links section */}
                        <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                            {renderBannerLinks()}
                        </div>
                    </section>
                </article>

                {/* Social, Footer */}
                <Social />
            </Container>
            <Footer />
        </>
    );
};

// Remaining code for getStaticPaths and getStaticProps remains the same
// Ensure you maintain the logic for fetching slugs and event data
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
