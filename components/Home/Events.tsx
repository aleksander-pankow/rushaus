"use client"
import React from "react";
import Card from "@/components/Card/Card";

export default function Events() {
    return (
        <section className="border border-black border-t-0 border-b-0 p-5">
            <div className="grid md:grid-cols-3 gap-5">
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular lg:text-rhtitle text-center">Культура</h4>
                        <div
                            className="group/details flex justify-between flex-col transition ease-in-out duration-300 opacity-0 xl:group-hover/item:opacity-100 hover:bg-theme-red w-full h-full top-0 left-0 absolute p-[30px]">
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
                <div className="md:aspect-square">
                    <div className="relative h-full border border-black group/item">
                        <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)+0.8rem)] p-[30px] md:max-xl:p-[25px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">Городские сны</h4>
                            </div>
                            <div className={"text-base max-md:text-sm max-xl:line-clamp-2"}>
                                <p>Международный арт проект: фотография, живопись, графика, скульптура</p>
                            </div>
                            <div>
                                <h4 className="max-md:mt-2 font-gilbold uppercase text-rhregular lg:text-rhtitle">До 30 апреля
                                    2024</h4>
                            </div>
                        </div>
                        <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] bg-blue-900 overflow-hidden">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-cover h-full w-full group group-hover/item:scale-125 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:aspect-square">
                    <div className="relative h-full border border-black group/item">
                        <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)+0.8rem)] p-[30px] md:max-xl:p-[25px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">Городские сны</h4>
                            </div>
                            <div className={"text-base max-md:text-sm max-xl:line-clamp-2"}>
                                <p>Международный арт проект: фотография, живопись, графика, скульптура</p>
                            </div>
                            <div>
                                <h4 className="max-md:mt-2 font-gilbold uppercase text-rhregular lg:text-rhtitle">До 30 апреля
                                    2024</h4>
                            </div>
                        </div>
                        <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] bg-blue-900 overflow-hidden">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-cover h-full w-full group grayscale group-hover/item:grayscale-0 group-hover/item:scale-125 transition duration-500 "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex text-base md:text-rhbuttons text-black font-gilbold uppercase mt-5 justify-center md:justify-end"}>
                <a href={"/events"} title={"Мероприятия"} className={"space-x-3 h-full inline-flex px-5 "}>
                    <span>→</span>
                    <span>Другие события</span>
                </a>
            </div>
        </section>
    )
}