import {useEffect, useState} from 'react'
import Link from "next/link";
import {Dropdown} from 'flowbite-react';
import {HiOutlineX} from "react-icons/hi";
import {useTheme} from "next-themes";
import Container from "@/components/Container";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'light' ? systemTheme : theme;

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100; // Change 100 to your preferred scroll position
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function Menu() {
        return (
            <div className="navbar-mobile fixed top-0 left-0 w-full h-full bg-white z-10 p-5">
                <div className="flex items-start flex-col gap-4 font-gilbold uppercase text-base">
                    <div className={"flex justify-between w-full content-center mb-5"}>
                        <Link href="/" className="flex flex-none items-center" onClick={toggleMenu}>
                            <img src={"/images/rushaus-logo.svg"} className="h-4 mr-3 inline-block" alt=""/>
                        </Link>
                        <button data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-default" aria-expanded="false"
                                onClick={toggleMenu}>
                            <span className="sr-only">Close main menu</span>
                            <HiOutlineX className={"w-6 h-6 text-black"}/>
                        </button>
                    </div>

                    <Link href="/events/"
                          className="text-center block dark:text-white md:dark:text-blue-500"
                    >Культура</Link>
                    <Dropdown label="ОБРАЗОВАНИЕ" inline>
                        <Dropdown.Item as="a" href="/lessons/">
                            Образовательный центр
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="#">
                            Художественная мастерская
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="#">
                            Студии и Клубы
                        </Dropdown.Item>
                    </Dropdown>
                    <Link href="/about"
                          className="text-center block dark:text-white md:dark:text-blue-500"
                    >О нас</Link>
                </div>


            </div>
        )
    }

    return (
        <nav
            className={`w-full z-20 px-5 bg-white border-gray-200 dark:backdrop-blur-md dark:bg-gray-900/80 py-3 ${
                scrolled ? 'fixed top-0 left-0 right-0 z-50' : 'static'
            }`}
        >
            <Container className={""}>
                <div className="flex flex-wrap justify-between mx-auto">
                <div className={"inline-flex"}>
                    <Link href={""} title={""}
                          className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-5 h-5 text-gray-500 dark:text-white">
                            <path
                                d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"/>
                        </svg>
                    </Link>
                    <Link href={""} title={""}
                          className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}>
                        <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/>
                        </svg>
                    </Link>

                </div>
                <Link href="/" className="flex flex-none items-center">
                    <svg id="Layer_1" className={`h-4 mr-3 inline-block ${theme === 'dark' ? 'fill-white' : 'fill-black'}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.67 34.94">
                        <path className="cls-1"
                              d="M23.84,14.38l-.77,5.22H26.4v5.88H22.1l-1.44,9.17H14l1.5-9.17H9.94L8.49,34.65H1.88l1.45-9.17H0V19.6H4.3l.77-5.22H1.69V8.54H6L7.34,0H14L12.6,8.54h5.6L19.55,0h6.56l-1.3,8.54h3.33v5.84Zm-12.16,0-.82,5.22h5.6l.77-5.22Z"/>
                        <path className="cls-1"
                              d="M52.22,34.65,45.51,21H40.68v13.7H34V.29H47.44c7,0,11.15,4.78,11.15,10.52a9.26,9.26,0,0,1-6.28,9L60,34.65ZM47,6.27H40.68v9.08H47c3,0,4.88-1.88,4.88-4.54S50,6.27,47,6.27Z"/>
                        <path className="cls-1"
                              d="M77.16,34.94c-7,0-12.64-4.77-12.64-12.06V.29h6.71V22.64c0,3.95,2.31,6.32,5.93,6.32s6-2.37,6-6.32V.29h6.66V22.88C89.81,30.17,84.21,34.94,77.16,34.94Z"/>
                        <path className="cls-1"
                              d="M106.26,34.94c-5.21,0-9.17-1.11-12.55-4.53l4.35-4.35c2.17,2.17,5.11,2.9,8.3,2.9,4,0,6.08-1.5,6.08-4.25a3.81,3.81,0,0,0-1.06-2.89,5.11,5.11,0,0,0-3-1.21L104.19,20a11.57,11.57,0,0,1-6.66-2.85,9.08,9.08,0,0,1-2.46-6.76C95.07,4.3,99.6,0,107,0c4.72,0,8.15,1.16,11.1,4l-4.25,4.2c-2.17-2.08-4.78-2.37-7-2.37-3.57,0-5.31,2-5.31,4.34a3.32,3.32,0,0,0,1,2.47A6,6,0,0,0,105.73,14l4.06.58c3.13.43,5.11,1.3,6.56,2.65C118.18,19,119,21.48,119,24.52,119,31.18,113.45,34.94,106.26,34.94Z"/>
                        <path className="cls-1"
                              d="M143.18,34.65V20.27H131.55V34.65h-6.71V.29h6.71v14h11.63V.29h6.71V34.65Z"/>
                        <path className="cls-1"
                              d="M177,34.65l-2-6.08H162.72l-2.07,6.08h-7L166.15.29h5.26L184,34.65Zm-8-24.23L164.6,22.93h8.55Z"/>
                        <path className="cls-1"
                              d="M199.83,34.94c-7,0-12.64-4.77-12.64-12.06V.29h6.7V22.64c0,3.95,2.32,6.32,5.94,6.32s6-2.37,6-6.32V.29h6.66V22.88C212.48,30.17,206.88,34.94,199.83,34.94Z"/>
                        <path className="cls-1"
                              d="M228.93,34.94c-5.21,0-9.17-1.11-12.55-4.53l4.35-4.35c2.17,2.17,5.11,2.9,8.3,2.9,3.95,0,6.08-1.5,6.08-4.25a3.81,3.81,0,0,0-1.06-2.89,5.11,5.11,0,0,0-3-1.21L226.85,20a11.63,11.63,0,0,1-6.66-2.85,9.08,9.08,0,0,1-2.46-6.76c0-6.12,4.54-10.42,12-10.42,4.73,0,8.16,1.16,11.1,4l-4.24,4.2a9.56,9.56,0,0,0-7.05-2.37c-3.57,0-5.31,2-5.31,4.34a3.35,3.35,0,0,0,1,2.47A6.05,6.05,0,0,0,228.4,14l4,.58c3.14.43,5.12,1.3,6.57,2.65,1.83,1.74,2.65,4.25,2.65,7.29C241.67,31.18,236.12,34.94,228.93,34.94Z"/>
                    </svg>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false"
                        onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {isMenuOpen && <Menu/>}
                <div className="hidden lg:block  flex-auto" id="navbar-default">
                    <ul className="font-gilbold text-base uppercase text-black flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent ">
                        <li className="flex-1">
                            <Link href="#"
                                  className="text-center block py-2 px-2 border-r-0  hover:text-white hover:bg-theme-red border border-black dark:border-white dark:text-white md:dark:text-blue-500"
                                  aria-current="page">Культура</Link>
                        </li>
                        <li className="flex-1 relative group">
                            <Link href="#"
                                  className="text-center block py-2 px-2 border-r-0  hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                  aria-current="page">Образование</Link>
                            <div
                                className={"dropdown z-10 absolute bg-white w-[calc(100%+1px)] hidden group-hover:block transition ease-in-out duration-300"}>
                                <ul>
                                    <li className="flex-1">
                                        <Link href="#"
                                              className="text-center block py-2 px-2 border-t-0 border-b-0 hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                              aria-current="page">Образовательный центр</Link>
                                    </li>
                                    <li className="flex-1">
                                        <Link href="#"
                                              className="text-center block py-2 px-2  hover:text-white hover:bg-theme-yellow border border-black dark:text-white md:dark:text-blue-500"
                                              aria-current="page">Художественная мастерская</Link>
                                    </li>
                                    <li className="flex-1">
                                        <Link href="#"
                                              className="text-center block py-2 px-2 border-t-0  hover:text-white hover:bg-theme-green border border-black dark:text-white md:dark:text-blue-500"
                                              aria-current="page">Студии и Клубы</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="flex-1">
                            <Link href="/about"
                                  className="text-center block py-2 px-2 hover:text-white hover:bg-theme-gray border border-black dark:text-white md:dark:text-blue-500"
                                  aria-current="page">О нас</Link>
                        </li>
                        <li className="flex-none relative group">
                            <Link href="#"
                                  className="text-center block py-2 px-2  hover:text-white hover:bg-theme-yellow border border-black border-x-0 dark:text-white md:dark:text-blue-500"
                                  aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6 text-black dark:text-white">
                                    <path
                                        d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"/>
                                </svg>
                            </Link>
                            <div
                                className={"dropdown absolute bg-white w-[calc(100%+2px)] left-[-1px] hidden group-hover:block transition ease-in-out duration-300"}>
                                <ul>
                                    <li className="flex-1">
                                        <Link href="#"
                                              className="text-center block py-2 px-2 border-t-0 border-b-0 hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                              aria-current="page">РУ</Link>
                                    </li>
                                    <li className="flex-1">
                                        <Link href="#"
                                              className="text-center block py-2 px-2  hover:text-white hover:bg-theme-blue border border-black dark:text-white md:dark:text-blue-500"
                                              aria-current="page">DE</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex-none">
                            <button
                                onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
                                className="text-center block py-2 px-2 hover:text-white hover:bg-theme-yellow border border-black dark:text-white"
                            >
                                {theme === 'dark' ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                                    </svg>
                                )}
                            </button>


                        </li>
                    </ul>

                </div>
            </div>
            </Container>
        </nav>
    )
}

