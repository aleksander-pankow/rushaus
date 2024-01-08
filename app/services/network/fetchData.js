import { ApolloQueryResult } from '@apollo/client';
import { client } from '@/app/lib/apollo-client';
import {GET_EVENT} from "../api/queries";

export async function getEventBySlug(slug: string) {
    const { data }: ApolloQueryResult<any> = await client.query({
        query: GET_EVENT, // Use the named query here
        variables: {
            slug,
        },
    });

    return data.event; // Return the event data
}