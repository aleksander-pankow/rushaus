import React from 'react';
import { GET_LESSON, GET_LESSON_SLUGS } from '@/app/services/api/queries';
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
import {LessonFields, LessonModel} from "@/app/models/LessonModel"; // Update the path

interface PostProps {
    lesson: LessonModel<LessonFields>;
}

const transformLessonData = (lesson: LessonModel<LessonFields>) => {
    const {lessonFields: fields, ...rest} = lesson;
    let image = '/images/test/thumb.png';

    if (fields.photo && fields.photo.edges && fields.photo.edges.length > 0 && fields.photo.edges[0].node.sourceUrl) {
        image = fields.photo.edges[0].node.sourceUrl;
    }

    // Process other fields if needed...

    return {
        ...rest,
        image,
        days: fields.day || [], // Assuming day is an array of strings
        excerpt: fields.excerpt || null,
        place: fields.place || null,
        time: fields.time || null,
        video: fields.video || null,
        type: 'lesson',
    };
};



const Post: React.FC<PostProps> = ({ lesson }) => {
    const { title, content, lessonFields } = lesson;
    const { days, time, excerpt, place, video, image } = transformLessonData(lesson);

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
                            <PostMedia photo={[image]} />
                            <PostMeta days={days} place={place} time={time} />
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
        query: GET_LESSON_SLUGS,
    });

    return data.lessons.nodes.map((node: { slug: string }) => node.slug);
}

export async function getStaticProps(context: { params: { slug: string } }) {
    const { data }: ApolloQueryResult<any> = await client.query({
        query: GET_LESSON,
        variables: {
            slug: context.params.slug,
        },
    });

    return {
        props: {
            lesson: data.lesson,
        },
    };
}

export default Post;
