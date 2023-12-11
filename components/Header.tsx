"use client"
import {useState} from 'react'

export default function Header() {

    const [state, setState] = useState(false)

    return (
        <nav className="px-5 container mx-auto bg-white border-gray-200 dark:bg-gray-900 pt-5">

            <div className="flex flex-wrap justify-between mx-auto">
                <div className={"inline-flex"}>
                    <a hrefLang={""} title={""}
                       className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-5 h-5 text-gray-500 dark:text-white">
                            <path
                                d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"/>
                        </svg>
                    </a>
                    <a hrefLang={""} title={""}
                       className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}>
                        <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/>
                        </svg>
                    </a>
                </div>
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
                    <ul className="font-gilbold text-base uppercase text-black flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                        <li className="flex-none relative group">
                            <a href="#"
                               className="text-center block py-2 px-2  hover:text-white hover:bg-theme-yellow border border-black border-x-0 dark:text-white md:dark:text-blue-500"
                               aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6 text-black dark:text-white">
                                    <path
                                        d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"/>
                                </svg>
                            </a>
                            <div
                                className={"dropdown absolute bg-white w-[calc(100%+2px)] left-[-1px] hidden group-hover:block transition ease-in-out duration-300"}>
                                <ul>
                                    <li className="flex-1">
                                        <a href="#"
                                           className="text-center block py-2 px-2 border-t-0 border-b-0 hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                           aria-current="page">РУ</a>
                                    </li>
                                    <li className="flex-1">
                                        <a href="#"
                                           className="text-center block py-2 px-2  hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                           aria-current="page">DE</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex-none">
                            <a href="#"
                               className="text-center block py-2 px-2 hover:text-white hover:bg-theme-yellow border border-black dark:text-white md:dark:text-blue-500"
                               aria-current="page">
                                <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}