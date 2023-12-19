import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_FEATURED_LESSONS } from "@/app/services/api/requests";
import Card from "@/components/Card/Card";
import Link from "next/link";

interface Lesson {
    databaseId: string;
    title: string;
    content: string;
    slug: string;
    lesson_fields: {
        date: string;
        time: string;
        excerpt: string;
        place: string;
        video: string;
        photo: {
            sourceUrl: string;
        }[];
    };
}

interface Edge {
    node: Lesson;
    // Add other fields as needed
}

interface LessonsData {
    lessons: {
        edges: Edge[];
    };
    // Add other fields as needed
}
const Categories: React.FC = () => {
    const { data: centerData, loading: centerLoading, error: centerError } = useQuery<LessonsData>(GET_FEATURED_LESSONS, {
        variables: { count: 2, chapter: 'center' },
        notifyOnNetworkStatusChange: true,
    });

    const { data: workshopData, loading: workshopLoading, error: workshopError } = useQuery<LessonsData>(GET_FEATURED_LESSONS, {
        variables: { count: 2, chapter: 'workshop' },
        notifyOnNetworkStatusChange: true,
    });

    const transformLessonData = (lesson: Lesson) => {
        const { lesson_fields: fields, ...rest } = lesson;
        return {
            ...rest,
            image: fields.photo?.[0]?.sourceUrl,
            date: fields.date,
            time: fields.time,
            excerpt: fields.excerpt,
            place: fields.place,
            video: fields.video,
        };
    };

    const renderContent = (data: LessonsData | undefined, loading: boolean, error: any, chapter: string) => {
        if (error) {
            return <p>Sorry, an error has occurred for {chapter} chapter. Please reload the page.</p>;
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

        const featuredLessons = data.lessons.edges.map((edge) => {
            const {node: lesson} = edge;
            return transformLessonData(lesson);
        });

        return (
            <>
            {
                featuredLessons.map((lesson, index) => (
                    <div className="md:aspect-square" key={`${chapter}_${index}`}>
                        <Card
                            key={lesson.databaseId}
                            title={lesson.title}
                            description={lesson.excerpt}
                            image={lesson.image}
                            slug={lesson.slug}
                            date={lesson.date}
                            type="lesson"
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
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">Образовательный
                            центр</h4>
                        <div
                            className="group/details flex justify-between flex-col  hover:bg-theme-blue transition ease-in-out duration-300 opacity-0 xl:group-hover/item:opacity-100 w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
                            <div className="text-base text-white space-y-2">
                                <p>Русский колледж открыт для детей и подростков, которые хотят научиться чему-то
                                    новому, узнать больше о русской культуре. Все материалы и методики разработаны
                                    педагогами, чтобы обеспечить максимальную эффективность обучения.</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {renderContent(centerData, centerLoading, centerError, 'center')}
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">Художественная
                            мастерская</h4>
                        <div
                            className="group/details flex justify-between flex-col  group-hover/item:bg-theme-yellow transition ease-in-out duration-300 opacity-0 xl:group-hover/item:opacity-100 w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                {renderContent(workshopData, workshopLoading, workshopError, 'workshop')}
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