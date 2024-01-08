import '@/app/globals.css'
import React from "react";
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Social from "@/components/Social";
import BannerList from "@/components/BannerList";
import PostHeader from "@/components/Post/PostHeader";
import ClientOnly from "@/components/ClientOnly";
import parse from "html-react-parser";

import {GET_ABOUT_US} from '@/app/services/api/queries';
import {ApolloQueryResult} from '@apollo/client';
import {client} from '@/app/lib/apollo-client';

//Model
import {PostModel} from '@/app/models/PostModel';

interface PostProps {
    post: PostModel<any>;
}

const Post: React.FC<PostProps> = ({post}) => {
    const {title, content} = post;
    return (
        <>
            {/* Head, Header, and other common components */}
            <Head>
                <title>{title} | #RUSHAUS</title>
            </Head>
            <Header/>
            <Container className="">
                <article>
                    {/* Title section */}
                    <PostHeader title={title}/>

                    {/* Content section */}
                    <section className="flex flex-col lg:flex-row border border-black border-t-0">
                        {/* Main content */}
                        <div className="basis-full lg:basis-3/4 border-black border-r">
                            <ClientOnly className="space-y-2 p-5">{parse(content)}</ClientOnly>
                        </div>

                        {/* Banner links section */}
                        <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                            <BannerList/>
                        </div>
                    </section>
                </article>

                {/* Social, Footer */}
                <Social/>
            </Container>
            <Footer/>
        </>
    );
}
export async function getStaticProps(context: { params: { slug: string } }) {
    const {data}: ApolloQueryResult<any> = await client.query({
        query: GET_ABOUT_US
    });

    return {
        props: {
            post: data.post,
        },
    };
}

export default Post