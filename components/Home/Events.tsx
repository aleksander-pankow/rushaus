import {useQuery} from "@apollo/client";
import {BATCH_HOMEPAGE_EVENTS, GET_FEATURED_EVENTS} from "@/app/services/api/queries";
import Card from "@/components/Card/Card";
import Link from "next/link";
import { EventModel, EventFields } from "@/app/models/EventModel";

const Events = () => {
    const {data, loading, error} = useQuery(GET_FEATURED_EVENTS, {
        variables: {count: BATCH_HOMEPAGE_EVENTS, section: 30},
        notifyOnNetworkStatusChange: true,
    });

    if (error) {
        return <p>Sorry, an error has occurred. Please reload the page.</p>;
    }

    if (loading || !data || !data.events.edges.length) {
        return (
            <section className="border border-black border-t-0 border-b-0 p-5">
                <div className="grid md:grid-cols-3 gap-5">
                    {/* Placeholder for loading state */}
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="md:aspect-square">
                            <div
                                className="animate-pulse relative flex h-full border border-black items-center justify-center max-sm:hover:bg-theme-red max-sm:focus:bg-theme-red"
                            >
                                <div className="w-full h-full bg-gray-200"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="animate-pulse flex text-base md:text-rhbuttons text-black font-gilbold uppercase mt-5 justify-center md:justify-end">
                    <span>→</span>
                    <span>Другие события</span>
                </div>
            </section>
        );
    }

    const DEFAULT_IMAGE_URL = '/images/test/thumb.png';
    const transformEventData = (event: EventModel<EventFields>) => {
        const { eventFields: fields, ...rest } = event;
        let image = DEFAULT_IMAGE_URL;

        if (
            fields.photo &&
            fields.photo.edges &&
            fields.photo.edges.length > 0 &&
            fields.photo.edges[0].node.sourceUrl
        ) {
            image = fields.photo.edges[0].node.sourceUrl;
        }

        return {
            ...rest,
            image,
            date: fields.date || null,
            time: fields.time || null,
            excerpt: fields.excerpt || null,
            place: fields.place || null,
            video: fields.video || null,
            type: "event",
        };
    };

    const featuredEventsWithSourceUrl = data.events.edges.map((edge: any) => {
        const {node: event} = edge;
        return transformEventData(event);
    });
    return (
        <section className="border border-black border-t-0 border-b-0 p-5">
            <div className="grid md:grid-cols-3 gap-5">
                {/* Your first static content div */}
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center max-sm:hover:bg-theme-red max-sm:focus:bg-theme-red">
                        <h4 className="font-gilbold uppercase text-rhregular lg:text-rhtitle text-center">{data.section.name}</h4>
                        <div
                            className="group/details flex justify-between flex-col transition ease-in-out duration-300 opacity-0 lg:group-hover/item:opacity-100 hover:bg-theme-red w-full h-full top-0 left-0 absolute p-[30px]">
                            <div className="text-base text-white space-y-2">
                                <p>{data.section.description}</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <Link href="/events/" className="flex flex-row items-center space-x-3">
                                    <span>→</span>
                                    <span>Подробная информация</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mapping through featuredEventsWithSourceUrl */}
                {featuredEventsWithSourceUrl.slice(0, 2).map((event: any) => (
                    <Card
                        key={event.databaseId}
                        title={event.title}
                        description={event.excerpt}
                        image={event.image}
                        slug={event.slug}
                        date={event.date}
                        type={event.type}
                    ></Card>
                ))}
            </div>
            <div
                className="flex text-base md:text-rhbuttons text-black font-gilbold uppercase mt-5 justify-center md:justify-end">
                <Link href="/events" className="space-x-3 h-full inline-flex px-5">
                    <span>→</span>
                    <span>Другие события</span>
                </Link>
            </div>
        </section>
    );
};

export default Events
