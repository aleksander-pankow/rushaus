import React from "react";
import "./Card.css";

export default function Card() {
    return (
        <div className={"card"}>
            <div className={"relative"}>
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
                <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] bg-blue-900">
                    <img
                        src="/images/test/test-event-picture.png"
                        alt="My Image"
                        className="object-fill h-full w-full"
                    />
                </div>
                <div
                    className="group/details flex justify-between flex-col transition ease-in-out duration-300 opacity-0 lg:group-hover/item:opacity-100 group-hover/item:bg-theme-red w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
    )
}