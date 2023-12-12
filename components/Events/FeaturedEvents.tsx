import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_FEATURED_EVENTS } from "@/app/services/api/requests";

export default function FeaturedEvents() {
    const { data, loading, error} = useQuery(GET_FEATURED_EVENTS);
    if (error) {
        return <p>Sorry, an error has occurred. Please reload the page.</p>;
    }

    if (!data && loading) {
        return <p>Loading...</p>;
    }
    if (!data?.events.edges.length) {
        return <p>No posts have been published.</p>;
    }
    const featuredEvents = data.events.edges.map((edge: { node: any; }) => edge.node);

    return (
        <ul>
            {featuredEvents.map((event: { databaseId: any; title: string; slug: string; }) => {
                const { databaseId, title, slug } = event;
                return (
                    <li
                        key={databaseId}
                        style={{
                            border: "2px solid #ededed",
                            borderRadius: "10px",
                            padding: "2rem",
                            listStyle: "none",
                            marginBottom: "1rem",
                        }}
                    >
                        <Link href={`/events/${slug}`}>
                            {title}
                        </Link>
                    </li>
                );
            })}

        </ul>
    );
}