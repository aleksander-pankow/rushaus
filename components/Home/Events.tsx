"use client"
import Image from 'next/image';
import React from "react";

export default function Events() {
    return (
        <section className="border border-black border-t-0 p-5">
            <div className="grid md:grid-cols-3 gap-5">
                <div className="md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular lg:text-rhtitle text-center">События</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-red xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                        <div
                            className="flex flex-col justify-between w-full h-full p-[30px] md:aspect-square">
                            <div className={""}>
                                <h4 className="font-gilbold uppercase text-rhregular lg:text-rhtitle mb-2">Городские
                                    сны</h4>
                                <div className={"max-md:line-clamp-2 max-lg:line-clamp-3"}>
                                    <p>Международный арт проект</p>
                                    <p>фотография, живопись, графика, скульптура</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="mt-2 font-gilbold uppercase text-rhregular lg:text-rhtitle">До 30 апреля
                                    2024</h4>
                            </div>
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-red xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
                            <div className="text-base text-white space-y-2">
                                <p>Интенсивные курсы - отличный способ погрузиться в языковую среду. В течение
                                    двухнедельных регулярных занятий с понедельника по пятницу даже начинающие изучают
                                    основы русской грамматики и могут обсуждать на русском языке самые разные темы.</p>
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
                        <div
                            className="flex flex-col justify-between w-full h-full p-[30px] md:aspect-square">
                            <div className={""}>
                                <h4 className="font-gilbold uppercase text-rhregular lg:text-rhtitle mb-2">Городские
                                    сны</h4>
                                <div className={"max-md:line-clamp-2 max-lg:line-clamp-3 max-lg:line-clamp-3max-lg:line-clamp-3"}>
                                    <p>Международный арт проект</p>
                                    <p>фотография, живопись, графика, скульптура</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="mt-2 font-gilbold uppercase text-rhregular lg:text-rhtitle">До 30 апреля
                                    2024</h4>
                            </div>
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-red xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
                            <div className="text-base text-white space-y-2">
                                <p>Интенсивные курсы - отличный способ погрузиться в языковую среду. В течение
                                    двухнедельных регулярных занятий с понедельника по пятницу даже начинающие изучают
                                    основы русской грамматики и могут обсуждать на русском языке самые разные темы.</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"text-base md:text-rhbuttons text-black font-gilbold uppercase mt-5"}>
                <a href={""} title={""} className={"space-x-3 h-full inline-flex px-5"}>
                    <span>→</span>
                    <span>Другие события</span>
                </a>
            </div>
        </section>
    )
}