import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { GET_EVENTS, BATCH_SIZE } from "@/app/services/api/requests";
import DateComponent from "@/components/Date/Date";

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

    const transformEventData = (event: any) => {
        const {event_fields: fields, ...rest} = event;
        return {
            ...rest,
            image: fields.photo?.[0]?.sourceUrl || null,
            date: fields.date || null,
            time: fields.time || null,
            excerpt: fields.excerpt || null,
            place: fields.place || null,
            video: fields.video || null,
            type: "event",
        };
    };

    const events = data.events.edges.map((edge: any) => {
        const {node: event} = edge;
        return transformEventData(event);
    });
    const haveMoreEvents = Boolean(data.events?.pageInfo?.hasNextPage);

    return (
            <InfiniteScroll
                dataLength={events.length}
                next={fetchMoreEvents}
                hasMore={haveMoreEvents}
                loader={<p>Loading...</p>}
                endMessage={<p>✅ All posts loaded.</p>}
            >
                {events.map((event: any) => {
                    return (
                        <div key={event.databaseId} className={"flex flex-col border border-black mb-5"}>
                            <div className={"flex flex-col lg:flex-row"}>
                                <div className={"inline-flex basis-1/2"} >
                                    <img src={event.image} alt={event.title} className={"object-cover aspect-[16/9]"} />
                                </div>
                                <div className={"inline-flex basis-1/2 flex-col p-5 space-y-5"} >
                                    <h4 className={"text-2xl uppercase font-gilbold"}>{event.title}</h4>
                                    <p>{event.excerpt}</p>
                                </div>
                            </div>
                            <div className={"flex flex-col lg:flex-row border-t border-black uppercase font-gilbold"}>
                                <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                                    </svg>
                                    {event.date}
                                </div>
                                <div className={"inline-flex flex-1 px-5 py-3 gap-3 border-x border-black"}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    {event.time}
                                </div>
                                <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                            <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
                                        </g>
                                    </svg>
                                    {event.place}
                                </div>
                                <a href={"/events/"+event.slug} title={""} className={"inline-flex flex-none  px-5 py-3 border-l border-black gap-3 hover:bg-theme-red hover:text-white"}>
                                    <span>→</span>
                                    <span>Подробнее</span>
                                </a>
                            </div>

                        </div>
                    );
                })}
            </InfiniteScroll>
    );
}