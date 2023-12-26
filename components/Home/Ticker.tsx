"use client"
import {useQuery} from "@apollo/client";
import {BATCH_HOMEPAGE_EVENTS, GET_FEATURED_EVENTS} from "@/app/services/api/requests";
import Link from "next/link";

export default function TickerTop(){
    const {data, loading, error} = useQuery(GET_FEATURED_EVENTS, {
        variables: {count: BATCH_HOMEPAGE_EVENTS, section: 30},
        notifyOnNetworkStatusChange: true,
    });
    if (error) {
        return <p>Sorry, an error has occurred. Please reload the page.</p>;
    }
    if (loading || !data || !data.events.edges.length) {
        return (
            <div>Загрузка...</div>
        );
    }
    const eventsList = data.events.edges.map((edge: any) => {
        const {node: event} = edge;
        return event;
    });
    return(
        <section className="">
            <div className="relative flex overflow-x-hidden border border-black">
                <div className="py-3 animate-marquee whitespace-nowrap">
                    {eventsList.map((event: any) => (
                        <Link key={event.databaseId} href={`/events/${event.slug}`} className="after:content-['•'] hover:after:text-black after:mx-2 hover:text-red-700" title="">{event.title}</Link>
                    ))}
                </div>

                <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
                    {eventsList.map((event: any) => (
                        <Link key={event.databaseId} href={`/events/${event.slug}`} className="after:content-['•'] hover:after:text-black after:mx-2 hover:text-red-700" title="">{event.title}</Link>
                    ))}
                </div>
            </div>

        </section>
    )
}
