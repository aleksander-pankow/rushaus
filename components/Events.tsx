"use client"
import Image from 'next/image';

export default function Events() {
    return (
        <section>
            <div className="relative grid grid-cols-4 grid-rows-5 auto-rows-max gap-8 mt-8">
                <div className="relative group/item col-span-2 row-span-5 border border-black hover:border-white max-h-[calc(100%-190px)]">
                    <div className="flex flex-col justify-between h-[calc(100%/2)] p-8">
                        <div>
                            <h4 className="font-gilbold uppercase text-2xl mb-2">Городские сны</h4>
                            <p className="font-gilregular">Международный арт проект</p>
                            <p className="font-gilregular">фотография, живопись, графика, скульптура</p>
                        </div>
                        <div>
                            <h4 className="font-gilbold uppercase text-2xl">До 30 апреля 2024</h4>
                        </div>
                    </div>
                    <div className="h-[calc(100%/2)] bg-blue-900">
                        <img
                            src="/images/test/test-event-picture.png"
                            alt="My Image"
                            className="object-none h-full w-full"
                        />
                    </div>
                    <div className="group/details flex justify-between flex-col invisible hover:bg-red-700 group-hover/item:visible w-full h-full top-0 left-0 absolute p-8 transition ease-in duration-75">
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
                            <a href="" title="" className="flex flex-row items-center space-x-3">
                                <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg><span>Подробнее</span></a>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 col-start-3 bg-gray-500 h-0 pb-full">2</div>
                <div className="row-span-2 col-start-4 bg-gray-600 h-0 pb-full">3</div>
                <div className="row-span-2 col-start-3 row-start-3 bg-gray-500 h-0 pb-full">4</div>
                <div className="row-span-2 col-start-4 row-start-3 bg-gray-400 h-0 pb-full">5</div>
                <div className="col-start-3 row-start-5 text-xl text-black font-gilbold uppercase h-14">
                    <a href="" title="" className="flex flex-row items-center space-x-3">
                        <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg><span>Другие события</span></a>
                </div>
                {/*<div className="absolute left-[25.4%] bg-black top-[46.9%] h-[1px] w-[calc(50%-1em)] rotate-90"></div>*/}
                {/*<div className="absolute right-0 bg-black top-[46.9%] h-[1px] w-[calc(50%-1em)] rotate-90"></div>*/}
                {/*<div className="absolute right-0 bg-black top-[46.9%] h-[1px] w-1/2"></div>*/}
                {/*<div className="absolute left-0 bg-black bottom-0 w-full h-[1px]"></div>*/}
            </div>
        </section>
    )
}