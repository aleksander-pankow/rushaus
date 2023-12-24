import {useQuery} from "@apollo/client";
import {GET_FEATURED_LESSONS} from "@/app/services/api/requests";
import Card from "@/components/Card/Card";
import Link from "next/link";
import {LessonModel, LessonFields, ChapterInfo} from "@/app/models/LessonModel"
const Categories = () => {
    const {data: centerData, loading: centerLoading, error: centerError} = useQuery(GET_FEATURED_LESSONS, {
        variables: {count: 2, chapter: 25},
        notifyOnNetworkStatusChange: true,
    });

    const {data: workshopData, loading: workshopLoading, error: workshopError} = useQuery(GET_FEATURED_LESSONS, {
        variables: {count: 2, chapter: 13},
        notifyOnNetworkStatusChange: true,
    });

    const renderContent = (data: any, loading: any, error: any, chapter: any) => {
        if (error) {
            return <p>Sorry, an error has occurred for  chapter. Please reload the page.</p>;
        }

        if (loading || !data || !data.lessons.edges.length) {
            return (
                <>
                    {/* Placeholder for loading state */}
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="md:aspect-square">
                            <div
                                className="animate-pulse relative flex h-full border border-black items-center justify-center max-sm:hover:bg-theme-red max-sm:focus:bg-theme-red"
                            >
                                <div className="w-full h-full bg-gray-200"></div>
                            </div>
                        </div>
                    ))}
                </>
            );
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

        const lessons = data.lessons.edges.map((edge: any) => {
            const {node: lesson} = edge;
            return transformLessonData(lesson);
        });

        return (
            <>
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">{chapter.name}</h4>
                        <div
                            className="group/details flex justify-between flex-col  group-hover/item:bg-theme-yellow transition ease-in-out duration-300 opacity-0 xl:group-hover/item:opacity-100 w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
                            <div className="text-base text-white space-y-2">
                                <p>{chapter.description}</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <Link href="" title=""
                                   className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    lessons.map((lesson: any, index: any) => (

                            <div className="md:aspect-square" key={`${chapter.id}_${index}`}>
                                <Card
                                    key={lesson.databaseId}
                                    title={lesson.title}
                                    description={lesson.excerpt}
                                    image={lesson.image}
                                    slug={lesson.slug}
                                    date={lesson.date}
                                    type={lesson.type}
                                />
                            </div>
                    ))
                }
            </>
        );
    };


    return (
        <section className="border border-black border-t-0 p-5 pt-0">
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-5">
                {renderContent(centerData, centerLoading, centerError, centerData?.chapter)}
                {renderContent(workshopData, workshopLoading, workshopError, workshopData?.chapter)}
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center ">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">Студии
                            и клубы</h4>
                        <div
                            className="group/details flex justify-between flex-col  group-hover/item:bg-theme-green transition ease-in-out duration-300 opacity-0 xl:group-hover/item:opacity-100 w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
                            <div className="text-base text-white space-y-2">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center ">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">О
                            нас</h4>
                        <div
                            className="group/details flex justify-between flex-col  group-hover/item:bg-theme-gray transition ease-in-out duration-300 opacity-0 xl:group-hover/item:opacity-100 w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
                            <div className="text-base text-white space-y-2">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;