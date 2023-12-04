import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { GET_EVENTS, BATCH_SIZE } from "@/app/services/api/requests";

export default function InfiniteScrollList() {
    const { data, loading, error, fetchMore } = useQuery(GET_EVENTS, {
        variables: { first: BATCH_SIZE, after: null },
        notifyOnNetworkStatusChange: true,
    });

    function fetchMoreEvents() {
        fetchMore({ variables: { after: data.events.pageInfo.endCursor } });
    }

    if (error) {
        return <p>Sorry, an error has occurred. Please reload the page.</p>;
    }

    if (!data && loading) {
        return <p>Loading...</p>;
    }

    if (!data?.events.edges.length) {
        return <p>No posts have been published.</p>;
    }

    const events = data.events.edges.map((edge) => edge.node);
    const haveMoreEvents = Boolean(data.events?.pageInfo?.hasNextPage);

    return (
        <ul style={{ padding: "0" }}>
            <InfiniteScroll
                dataLength={events.length}
                next={fetchMoreEvents}
                hasMore={haveMoreEvents}
                loader={<p>Loading...</p>}
                endMessage={<p>✅ All posts loaded.</p>}
            >
                {events.map((event) => {
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
            </InfiniteScroll>
        </ul>
    );
}