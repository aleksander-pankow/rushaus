"use client"
import Image from 'next/image';
import React from "react";

export default function Events() {
    return (
        <section>
            <div className="flex flex-col md:flex-row p-8 pb-4 gap-4">
                <div className="relative w-full lg:w-[calc((100%/2)-0.5rem)] group/item border border-black hover:border-white">
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
                                className="object-none h-full w-full"
                            />
                        </div>
                        <div className="group/details flex justify-between flex-col invisible hover:bg-theme-red group-hover/item:visible w-full h-full top-0 left-0 absolute p-8 transition ease-in duration-75">
                            <div className="text-white space-y-5">
                            <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                представляет собой интересный эксперимент проверки модели развития. Равным образом
                                укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                дальнейших направлений развития.</p>

                            <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет выполнять
                                важные задания по разработке соответствующий условий активизации. Равным образом дальнейшее
                                развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                развития.</p>

                            <p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности играет
                                важную роль в формировании дальнейших направлений развития. Товарищи! реализация намеченных
                                плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании
                                дальнейших направлений развития. Товарищи! укрепление и развитие структуры требуют от нас
                                анализа форм развития. Равным образом сложившаяся структура организации способствует
                                подготовки и реализации существенных финансовых и административных условий. Идейные
                                соображения высшего порядка, а также начало повседневной работы по формированию позиции
                                позволяет выполнять важные задания по разработке форм развития.</p>

                            <p>Равным образом сложившаяся структура организации представляет собой интересный эксперимент
                                проверки существенных финансовых и административных условий. Равным образом консультация с
                                широким активом способствует подготовки и реализации форм развития. С другой стороны начало
                                повседневной работы по формированию позиции представляет собой интересный эксперимент
                                проверки модели развития. С другой стороны консультация с широким активом требуют
                                определения и уточнения систем массового участия.</p>
                            </div>
                            <div className="link text-xl text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span> <span>Подробнее</span></a>
                            </div>
                        </div>
                    </div>
                <div className="w-full lg:w-[calc((100%/2)+0.5rem)] flex flex-wrap border-black border-l ">
                    <div className="w-1/2 sm:w-full md:w-full
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
                                className="object-none h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase text-3xl mb-2">07.11.2023</h4>
                                </div>
                                <div className="link text-xl  font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Большое путешествие специальная доставка</span><span className="text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-full md:w-full
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
                                className="object-none h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase text-3xl mb-2">07.11.2023</h4>
                                </div>
                                <div className="link text-xl  font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Большое путешествие специальная доставка</span><span className="text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-full md:w-full
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
                                className="object-none h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase text-3xl mb-2">07.11.2023</h4>
                                </div>
                                <div className="link text-xl  font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Большое путешествие специальная доставка</span><span className="text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-full md:w-full
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
                                className="object-none h-full w-full"
                            />
                            <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-8 text-white pb-6">
                                <div>
                                    <h4 className="font-gilbold uppercase text-3xl mb-2">07.11.2023</h4>
                                </div>
                                <div className="link text-xl  font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Большое путешествие специальная доставка</span><span className="text-4xl align-baseline">»</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}