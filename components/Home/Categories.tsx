import React from 'react';

function Categories() {
    return (
        <section className="border border-black border-t-0 p-5">
            <div className="w-full flex flex-wrap pb-5 gap-4 sm:gap-0">
                <div className="w-full sm:max-md:w-full md:pr-5 md:w-1/2 md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-8 group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-2xl sm:text-rhtitle text-center">Образовательный центр</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-blue sm:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-75">
                            <div className="text-base/[20px] sm:text-rhregular text-white space-y-5">
                                <p>Русский колледж открыт для детей и подростков, которые хотят научиться чему-то
                                    новому, узнать больше о русской культуре. Все материалы и методики разработаны
                                    педагогами, чтобы обеспечить максимальную эффективность обучения.</p>
                                <p>Занятия проводятся в группах по следующим направлениям:</p>
                                <p>- Русский язык</p>
                                <p>- Литературное чтение</p>
                                <p> - Математика</p>
                                <p> - Подготовка к школе</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full sm:max-md:w-full md:pl-5 md:border-l border-black md:w-1/2 aspect-square">
                    <div className="relative h-full border border-black group/item">
                        <div className="flex flex-col justify-between h-[calc(50%)] md:h-[calc((100%/2)-0.8rem)] p-[30px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-2xl sm:text-rhtitle mb-2">Интенсивные курсы русского
                                    языка</h4>
                            </div>
                            <div>
                                <p className="font-gilregular text-rhregular">Отличный способ погрузиться в языковую среду в течении
                                    регулярных двухнедельных занятий</p>
                            </div>
                        </div>
                        <div className="h-[calc(50%)] md:h-[calc((100%/2)+0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/urok.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-blue sm:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-75">
                            <div className="text-base sm:text-rhregular text-white space-y-5">
                                <p>Интенсивные курсы - отличный способ погрузиться в языковую среду. В течение
                                    двухнедельных регулярных занятий с понедельника по пятницу даже начинающие изучают
                                    основы русской грамматики и могут обсуждать на русском языке самые разные темы.</p>
                                <p> Вы уже продвинуты? Тогда вы можете углубить свои языковые навыки на всех уровнях и
                                    открыть для себя новые темы. Наши интенсивные курсы подходят для всех изучающих
                                    русский язык, независимо от того, нужен ли вам русский язык для работы, учебы или в
                                    личных целях.</p>
                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap pb-5 gap-4 sm:gap-0">
                <div className="w-full sm:max-md:w-full md:pr-5 md:w-1/2 md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-8 group/item items-center justify-center">
                        <h4 className="font-gilbold uppercase text-2xl sm:text-rhtitle text-center">Художественная мастерская</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-yellow sm:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-75">
                            <div className="text-white text-base/[20px] sm:text-rhregular space-y-5">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>

                                <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
                                    выполнять
                                    важные задания по разработке соответствующий условий активизации. Равным образом
                                    дальнейшее
                                    развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                    развития.</p>


                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full sm:max-md:w-full md:pl-5 md:border-l border-black md:w-1/2 aspect-square">
                    <div className="relative h-full border border-black group/item">
                        <div className="flex flex-col justify-between h-[calc(50%)] md:h-[calc((100%/2)-0.8rem)] p-[30px]">
                            <div>
                                <h4 className="font-gilbold uppercase text-2xl sm:text-rhtitle mb-2">Класс керамики</h4>
                            </div>
                            <div>
                                <p className="font-gilregular text-rhregular">Опытные мастера-керамисты научат всех желающих гончарному
                                    ремеслу, ручной лепке, техникам росписи керамических изделий.</p>
                            </div>
                        </div>
                        <div className="h-[calc(50%)] md:h-[calc((100%/2)-0.8rem)] bg-blue-900">
                            <img
                                src="/images/test/keramika.png"
                                alt="My Image"
                                className="object-fill h-full w-full"
                            />
                        </div>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-yellow sm:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-75">
                            <div className="text-white text-base/[20px] sm:text-rhregular space-y-5">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>

                                <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
                                    выполнять
                                    важные задания по разработке соответствующий условий активизации. Равным образом
                                    дальнейшее
                                    развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                    развития.</p>


                            </div>
                            <div className="link text-xl text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap sm:pb-5 gap-4 sm:gap-0">
                <div className="w-full sm:max-md:w-full md:pr-5 md:w-1/2 md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-[30px] group/item items-center justify-center ">
                        <h4 className="font-gilbold uppercase text-2xl sm:text-rhtitle text-center">Студии и клубы</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-green sm:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-75">
                            <div className="text-white text-base/[20px] sm:text-rhregular space-y-5">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>

                                <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
                                    выполнять
                                    важные задания по разработке соответствующий условий активизации. Равным образом
                                    дальнейшее
                                    развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                    развития.</p>


                            </div>
                            <div className="link text-rhbuttons text-white font-gilbold uppercase">
                                <a href="" title="" className="flex flex-row items-center space-x-3"><span>→</span>
                                    <span>Подробная информация</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:max-md:w-full md:pr-5 md:w-1/2 md:aspect-square">
                    <div
                        className="relative flex h-full border border-black group/item p-[30px] group/item items-center justify-center ">
                        <h4 className="font-gilbold uppercase text-2xl sm:text-rhtitle text-center">О нас</h4>
                        <div
                            className="group/details flex justify-between flex-col invisible hover:bg-theme-blue sm:group-hover/item:visible w-full h-full top-0 left-0 absolute p-[30px] transition ease-in duration-75">
                            <div className="text-white text-base/[20px] sm:text-rhregular space-y-5">
                                <p>Повседневная практика показывает, что дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки модели развития. Равным образом
                                    укрепление и развитие структуры представляет собой интересный эксперимент проверки
                                    дальнейших направлений развития.</p>

                                <p>Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
                                    выполнять
                                    важные задания по разработке соответствующий условий активизации. Равным образом
                                    дальнейшее
                                    развитие различных форм деятельности требуют от нас анализа дальнейших направлений
                                    развития.</p>


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