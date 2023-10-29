import React from "react";

export default function Footer() {
    return (

        <footer className="px-4 mx-8 mt-4 bg-theme-gray dark:bg-gray-900">
            <div className="w-full">
                <div className="items-start grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4 font-gilregular text-white">
                    <div>
                        <p>FriedrichstraBe 176-179</p>
                        <p>10117 Berlin</p>
                        <p>+49 30/20 30 22 52</p>
                        <p>info@russisches-haus.de</p>
                    </div>
                    <div>
                        <p>Дом открыт для посетителей:</p>
                        <p>Ежедневно 09:00 -19:00</p>
                        <p>Выходной: воскресенье</p>
                    </div>
                    <div>
                        <p>Билетная касса работает:</p>
                        <p>Ежедневно 12:00-14:00, 15:00-19:00</p>
                        <p>Выходной: воскресенье</p>
                    </div>
                    <div className="flex justify-end">
                        <img
                            src="/images/logo_vertical_white.png"
                            alt="My Image"
                            className="h-40 w-auto"
                        />
                    </div>
                </div>
                <div className="text-sm py-6 bg-theme-gray text-white border-t border-white dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <div className="md:flex md:items-center md:justify-between gap-8">
                        <span className="">© 2023 Русский дом в Берлине</span>
                        <a href="#" className="">Политика приватности</a>
                        <a href="#" className="">Правила и условия</a>
                    </div>

                    <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                        <a href="#" className="">Разработка сайта: A.P.</a>
                    </div>
                </div>
            </div>
        </footer>


    )
}