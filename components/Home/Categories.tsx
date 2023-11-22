import React from 'react';

function Categories() {
    return (
        <section className="border border-black border-t-0 p-5">
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-5">
                <div className="md:aspect-square">
                    <div className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">Образовательный центр</h4>
                        <div className="group/details flex justify-between flex-col invisible hover:bg-theme-blue xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                        <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] p-4 md:p-[30px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">Интенсивные курсы русского
                                    языка</h4>
                            </div>
                            <div>
                                <p className="md:max-xl:hidden text-base max-md:text-sm max-md:line-clamp-3">Отличный способ погрузиться в языковую среду в течении
                                    регулярных двухнедельных занятий</p>
                            </div>
                        </div>
                        <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)+0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/urok.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-blue xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                        <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] p-4 md:p-[30px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">Интенсивные курсы русского
                                    языка</h4>
                            </div>
                            <div>
                                <p className="md:max-xl:hidden text-base max-md:text-sm max-md:line-clamp-3">Отличный способ погрузиться в языковую среду в течении
                                    регулярных двухнедельных занятий</p>
                            </div>
                        </div>
                        <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)+0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/urok.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-blue xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                    <div
                        className="relative flex h-full border border-black group/item p-4 sm:p-[30px] group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">Художественная мастерская</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-yellow xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                    <div className="relative h-full border border-black group/item">
                        <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] p-4 md:p-[30px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">Класс керамики</h4>
                            </div>
                            <div>
                                <p className="md:max-xl:hidden text-base max-md:text-sm max-md:line-clamp-3">Опытные мастера-керамисты научат всех желающих гончарному
                                    ремеслу, ручной лепке, техникам росписи керамических изделий.</p>
                            </div>
                        </div>
                        <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)+0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/keramika.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-yellow xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                    <div className="relative h-full border border-black group/item">
                        <div className="flex flex-col justify-between h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)-0.8rem)] p-4 md:p-[30px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle mb-2">Класс керамики</h4>
                            </div>
                            <div>
                                <p className="md:max-xl:hidden text-base max-md:text-sm max-md:line-clamp-3">Опытные мастера-керамисты научат всех желающих гончарному
                                    ремеслу, ручной лепке, техникам росписи керамических изделий.</p>
                            </div>
                        </div>
                        <div className="h-auto sm:h-[calc(50%)] lg:h-[calc((100%/2)+0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/keramika.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-yellow xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">Студии и клубы</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-green xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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
                        <h4 className="font-gilbold uppercase text-rhregular/[20px] lg:text-rhtitle text-center">О нас</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible group-hover/item:bg-theme-gray xl:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-0">
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