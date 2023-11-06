"use client"
import Image from 'next/image';
import React from "react";

export default function Events() {

    let items=['Item 1','Item 2','Item 3','Item 4'];
    let itemList=items.map((item,index)=>{
        return (
            <div key={index} className="w-1/2
                    max-sm:w-full max-sm:first:mt-4 max-sm:my-2 max-sm:h-32 sm:max-md:h-44 md:max-xl:h-52
                    sm:odd:pr-2.5 sm:even:pl-2.5 md:max-xl:odd:pr-5
                    sm:[&:nth-child(1)]:pb-5 sm:[&:nth-child(2)]:pb-5
                    xl:odd:px-5 md:even:pl-5
                    md:[&:nth-child(1)]:border-b
                    md:[&:nth-child(2)]:border-b md:[&:nth-child(2)]:border-l [&:nth-child(2)]:border-black
                    md:[&:nth-child(3)]:pt-5
                    md:[&:nth-child(4)]:pt-5 md:[&:nth-child(4)]:border-l [&:nth-child(4)]:border-black
                    border-black lg:w-1/2 sm:aspect-square">
                <div className="relative h-full">
                    <img
                        src="/images/test/test-event-picture.png"
                        alt="My Image"
                        className="object-fill h-full w-full"
                    />
                    <div className="flex flex-col justify-between content absolute backdrop-blur-md bg-white/20 w-full h-full left-0 top-0 p-[30px] text-white pb-5">
                        <div>
                            <h4 className="font-gilbold uppercase text-xl lg:text-rhtitle mb-2">07.11.2023</h4>
                        </div>
                        <div className="link text-rhregular font-gilbold uppercase">
                            <a href="" title="" className="flex flex-row items-end justify-between w-full"><span>Старик Хоттабыч</span><span className="ml-5 text-[40px] align-baseline">»</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        )
        })

    return (
        <section className="border border-black border-t-0 p-5">
            <div className="flex flex-col xl:flex-row">
                <div className="relative w-full xl:w-1/2 h-auto group/item lg:pr-5">
                        <div className="flex flex-col justify-between h-[calc(50%)] lg:h-[calc((100%/2)-1.5rem)] p-[30px] border border-black">
                            <div className={"text-base"}>
                                <h4 className="font-gilbold uppercase text-xl md:text-rhtitle mb-2">Городские сны</h4>
                                <p>Международный арт проект</p>
                                <p>фотография, живопись, графика, скульптура</p>
                            </div>
                            <div>
                                <h4 className="max-md:mt-4 font-gilbold uppercase text-xl lg:text-rhtitle">До 30 апреля 2024</h4>
                            </div>
                        </div>
                        <div className="h-[calc(50%)] lg:h-[calc((100%/2)+1.5rem)] bg-blue-900">
                            <img
                                src="/images/test/test-event-picture.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div className="group/details flex justify-between flex-col invisible md:group-hover/item:bg-theme-red md:group-hover/item:visible w-full xl:w-[calc((100%)-20px)] h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">

                                <div className="text-rhregular text-white space-y-5 max-h-[calc(90%)] ">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>

                                <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет выполнять
                                    важные задания по разработке соответствующий условий активизации. Равным образом дальнейшее
                                    развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                    развития.</p>


                                </div>

                                <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                    <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span> <span>Подробнее</span></a>
                                </div>

                        </div>
                    </div>
                <div className="w-full h-auto flex flex-wrap border-black max-sm:mt-0 max-xl:mt-5 xl:border-l xl:w-1/2">
                    {itemList}
                    <div className="pl-5 pt-5 w-full xl:w-1/2 text-xl md:text-rhbuttons text-black font-gilbold uppercase flex max-xl:items-center max-xl:justify-center">
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