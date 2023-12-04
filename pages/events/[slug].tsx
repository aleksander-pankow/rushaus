import Link from "next/link";
import Head from "next/head";
import parse from "html-react-parser";
import { gql } from "@apollo/client";
import { client } from "@/app/lib/apollo-client";

// @ts-ignore
export default function Event({ event }) {
    const { title, content, previousPost, nextPost } = event;

    return (
        <>
            <Head>
                <title>{parse(title)} | Pagination Station</title>
            </Head>
            <main>
                <article>
                    <header>
                        <h1>{title}</h1>

                    </header>
                    
                    <div>{parse(content)}</div>

                </article>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const slugs = await getSlugs();
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
    }
  }
`;

export async function getStaticProps(context: { params: { slug: string; }; }) {
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