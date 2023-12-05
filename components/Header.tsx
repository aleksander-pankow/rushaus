"use client"
import {useState} from 'react'

export default function Header() {

    const [state, setState] = useState(false)

    return (
        <nav className="px-5 container mx-auto bg-white border-gray-200 dark:bg-gray-900 pt-5">

            <div className="flex flex-wrap justify-between mx-auto">
                <a hrefLang={""} title={""}
                   className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}>
                    <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/>
                    </svg>
                </a>
                <a href="/" className="flex flex-none items-center">
                    <img src="images/rushaus-logo.svg" className="h-4 mr-3 inline-block" alt=""/>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden lg:block  flex-auto" id="navbar-default">
                    <ul className="font-gilbold 2xl:text-base text-sm uppercase text-black flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="flex-1">
                            <a href="#"
                               className="text-center block py-2 px-2 border-r-0  hover:text-white hover:bg-theme-red border border-black dark:text-white md:dark:text-blue-500"
                               aria-current="page">Культура</a>
                        </li>
                        <li className="flex-1 relative group">
                            <a href="#"
                               className="text-center block py-2 px-2 border-r-0  hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                               aria-current="page">Образование</a>
                            <div
                                className={"dropdown absolute bg-white w-[calc(100%+1px)] hidden group-hover:block transition ease-in-out duration-300"}>
                                <ul>
                                    <li className="flex-1">
                                        <a href="#"
                                           className="text-center block py-2 px-2 border-t-0 border-b-0 hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                           aria-current="page">Образовательный центр</a>
                                    </li>
                                    <li className="flex-1">
                                        <a href="#"
                                           className="text-center block py-2 px-2  hover:text-white hover:bg-theme-yellow border border-black dark:text-white md:dark:text-blue-500"
                                           aria-current="page">Художественная мастерская</a>
                                    </li>
                                    <li className="flex-1">
                                        <a href="#"
                                           className="text-center block py-2 px-2 border-t-0  hover:text-white hover:bg-theme-green border border-black dark:text-white md:dark:text-blue-500"
                                           aria-current="page">Студии и Клубы</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="flex-1">
                            <a href="#"
                               className="text-center block py-2 px-2 hover:text-white hover:bg-theme-gray border border-black dark:text-white md:dark:text-blue-500"
                               aria-current="page">О нас</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}