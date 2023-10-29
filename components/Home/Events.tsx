"use client"
import Image from 'next/image';
import React from "react";

export default function Events() {
    return (
        <section>
            <div className="flex flex-col xl:flex-row p-8 pb-4 gap-4">
                <div className="relative w-full xl:w-[calc((100%/2)-0.5rem)] h-auto group/item border border-black hover:border-white">
                        <div className="flex flex-col justify-between h-[calc((100%/2)-0.8rem)] p-8">
                            <div>
                                <h4 className="font-gilbold uppercase text-2xl mb-2">Городские сны</h4>
                                <p className="font-gilregular">Международный арт проект</p>
                                <p className="font-gilregular">фотография, живопись, графика, скульптура</p>
                            </div>
                            <div>
                                <h4 className="font-gilbold uppercase text-2xl">До 30 апреля 2024</h4>
                            </div>
                        </div>
                        <div className="h-[calc((100%/2)+0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div className="group/details flex justify-between flex-col invisible hover:bg-theme-red group-hover/item:visible w-full h-full top-0 left-0 absolute p-8 transition ease-in duration-75">

                                <div className="text-white space-y-5 max-h-[calc(90%)] ">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>

                                <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет выполнять
                                    важные задания по разработке соответствующий условий активизации. Равным образом дальнейшее
                                    развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                    развития.</p>


                                </div>

                                <div className="link text-xl text-white font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span> <span>Подробнее</span></a>
                                </div>

                        </div>
                    </div>
                <div className="w-full xl:w-[calc((100%/2)+0.5rem)] h-auto flex flex-wrap border-black border-l ">
                    <div className="w-1/2
                    max-sm:w-full
                    odd:px-4
                    even:pl-4
                    [&:nth-child(1)]:pb-4 [&:nth-child(1)]:border-b
                    [&:nth-child(2)]:pb-4 [&:nth-child(2)]:border-b [&:nth-child(2)]:border-l [&:nth-child(2)]:border-black
                    [&:nth-child(3)]:pt-4
                    [&:nth-child(4)]:pt-4 [&:nth-child(4)]:border-l [&:nth-child(4)]:border-black
                    border-black lg:w-1/2 aspect-square">
                        <div className="relative h-full">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase lg:text-2xl xl:text-3xl mb-2">07.11.2023</h4>
                                </div>
                                <div className="link lg:text-lg xl:text-xl font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Старик Хоттабыч</span><span className="ml-4 text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2
                    max-sm:w-full
                    odd:px-4
                    even:pl-4
                    [&:nth-child(1)]:pb-4 [&:nth-child(1)]:border-b
                    [&:nth-child(2)]:pb-4 [&:nth-child(2)]:border-b [&:nth-child(2)]:border-l [&:nth-child(2)]:border-black
                    [&:nth-child(3)]:pt-4
                    [&:nth-child(4)]:pt-4 [&:nth-child(4)]:border-l [&:nth-child(4)]:border-black
                    border-black lg:w-1/2 aspect-square">
                        <div className="relative h-full">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase lg:text-2xl xl:text-3xl mb-2">10.11.2023</h4>
                                </div>
                                <div className="link lg:text-lg xl:text-xl font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Чебурашка</span><span className="ml-4 text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2
                    max-sm:w-full
                    odd:px-4
                    even:pl-4
                    [&:nth-child(1)]:pb-4 [&:nth-child(1)]:border-b
                    [&:nth-child(2)]:pb-4 [&:nth-child(2)]:border-b [&:nth-child(2)]:border-l [&:nth-child(2)]:border-black
                    [&:nth-child(3)]:pt-4
                    [&:nth-child(4)]:pt-4 [&:nth-child(4)]:border-l [&:nth-child(4)]:border-black
                    border-black lg:w-1/2 aspect-square">
                        <div className="relative h-full">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase lg:text-2xl xl:text-3xl mb-2">16.11.2023</h4>
                                </div>
                                <div className="link lg:text-lg xl:text-xl font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Женитьба Бальзаминовна</span><span className="ml-4 text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2
                    max-sm:w-full
                    odd:px-4
                    even:pl-4
                    [&:nth-child(1)]:pb-4 [&:nth-child(1)]:border-b
                    [&:nth-child(2)]:pb-4 [&:nth-child(2)]:border-b [&:nth-child(2)]:border-l [&:nth-child(2)]:border-black
                    [&:nth-child(3)]:pt-4
                    [&:nth-child(4)]:pt-4 [&:nth-child(4)]:border-l [&:nth-child(4)]:border-black
                    border-black lg:w-1/2 aspect-square">
                        <div className="relative h-full">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase lg:text-2xl xl:text-3xl mb-2">22.11.2023</h4>
                                </div>
                                <div className="link lg:text-lg xl:text-xl font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Большое путешествие специальная доставка</span><span className="ml-4 text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-4 pt-4 sm:w-full  md:w-full lg:w-1/2 text-xl text-black font-gilbold uppercase">
                        <a href="" className="space-x-3" title="">
                            <span>→</span>
                            <span>Другие события</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}