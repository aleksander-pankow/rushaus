import React from 'react';
import { GET_EVENT, GET_EVENT_SLUGS } from '@/app/services/api/requests';
import { ApolloQueryResult } from '@apollo/client';
import { client } from '@/app/lib/apollo-client';

import Head from 'next/head';
import parse from 'html-react-parser';

import '@/app/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import ClientOnly from '@/components/ClientOnly';
import Social from '@/components/Social';
import BannerList from '@/components/BannerList';
import PostHeader from '@/components/Post/PostHeader';
import PostMeta from '@/components/Post/PostMeta';
import PostMedia from '@/components/Post/PostMedia';

//Model
import { EventModel, EventFields } from '@/app/models/EventModel'; // Update the path

interface PostProps {
    event: EventModel<EventFields>;
}

const transformEventData = (eventFields: EventFields) => {
    const { date, time, excerpt, place, video, photo } = eventFields || {};
    const images = photo && photo.edges && photo.edges.length > 0
        ? photo.edges.map((image) => image.node.sourceUrl || '/images/test/thumb.png')
        : ['/images/test/thumb.png']; // Default image path

    return {
        date: date || null,
        time: time || null,
        excerpt: excerpt || null,
        place: place || null,
        video: video || null,
        photo: images,
    };
};

const Post: React.FC<PostProps> = ({ event }) => {
    const { title, content, eventFields } = event;
    const transformedEventData = transformEventData(eventFields);
    const { date, time, excerpt, place, video, photo } = transformedEventData;

    return (
        <>
            {/* Head, Header, and other common components */}
            <Head>
                <title>{title} | #RUSHAUS</title>
            </Head>
            <Header />
            <Container className="">
                <article>
                    {/* Title section */}
                    <PostHeader title={title} />

                    {/* Content section */}
                    <section className="flex flex-col lg:flex-row border border-black border-t-0">
                        {/* Main content */}
                        <div className="basis-full lg:basis-3/4 border-black border-r">
                            <PostMedia photo={photo} />
                            <PostMeta date={date} place={place} time={time} />
                            <ClientOnly className="space-y-2 p-5">{parse(content)}</ClientOnly>
                        </div>

                        {/* Banner links section */}
                        <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                            <BannerList />
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

export async function getStaticPaths() {
    const slugs: string[] = await getSlugs();
    const paths = slugs.map((slug: string) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
}

async function getSlugs() {
    const { data } = await client.query({
        query: GET_EVENT_SLUGS,
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

export default Post;
