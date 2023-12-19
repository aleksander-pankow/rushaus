import '@/app/globals.css'
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import EventList from "@/components/Events/EventsList";
import ClientOnly from "@/components/ClientOnly";
import Social from "@/components/Social";

import {loadErrorMessages, loadDevMessages} from "@apollo/client/dev";
import React from "react";

loadDevMessages();
loadErrorMessages();
export default function Events() {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="description"
                      content="Do you want people to click on your search result? Learn how to write the best meta description. Including 7 characteristics and examples!"/>
            </Head>
            <Header/>
            <Container>
                <article>
                    <section className={"uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10"}>
                        <h1>Мероприятия</h1>
                    </section>
                    <section className={"flex flex-col lg:flex-row border border-black border-t-0"}>
                            <div className="basis-full lg:basis-3/4 p-5">
                                <ClientOnly>
                                    <EventList/>
                                </ClientOnly>
                                <div className={"flex flex-col border border-black my-10"}>
                                    <div className={"flex flex-row border-b border-black uppercase font-gilbold "}>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                                            </svg>
                                            31 декабря 2023
                                        </div>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3 border-x border-black"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                            18:00
                                        </div>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                    <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
                                                </g>
                                            </svg>
                                            Концертный зал
                                        </div>
                                    </div>
                                    <div className={"relative flex-1 bg-cover bg-no-repeat bg-center bg-[url('/images/test/test-event-picture.png')]"}>
                                        <div className={"backdrop-blur-xl bg-white/70 p-5 w-full h-full space-y-5"} >
                                            <h4 className={"text-2xl uppercase font-gilbold"}>Иван Семенов: Большой поход</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet lectus ut dolor
                                                vestibulum auctor. Morbi quis lacus in odio lacinia vehicula. Sed sed tortor vitae leo dictum accumsan.
                                                Integer a leo in enim pellentesque malesuada sit amet sit amet nisi. Nulla facilisi. Cras at nisl vitae
                                                tortor hendrerit tincidunt sed id libero. Maecenas et quam vel est pharetra luctus eget a diam. Sed congue odio
                                                id congue faucibus. Ut ut ultricies lectus. Quisque fermentum turpis a ipsum volutpat sagittis. </p>
                                        </div>
                                    </div>
                                    <div className={"flex-1 border-t border-black"}>
                                        <a href={""} title={""} className={"inline-flex uppercase font-gilbold px-5 py-3 border-r border-black gap-3"}>
                                            <span>→</span>
                                            <span>Подробнее</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={"flex flex-col border border-black mb-10"}>
                                    <div className={"relative flex-1 bg-cover bg-no-repeat bg-center bg-[url('/images/test/urok.png')]"}>
                                        <div className={"backdrop-blur-xl bg-white/70 p-5 w-full h-full space-y-5"} >
                                            <h4 className={"text-2xl uppercase font-gilbold"}>Иван Семенов: Большой поход</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet lectus ut dolor
                                                vestibulum auctor. Morbi quis lacus in odio lacinia vehicula. Sed sed tortor vitae leo dictum accumsan.
                                                Integer a leo in enim pellentesque malesuada sit amet sit amet nisi. Nulla facilisi. Cras at nisl vitae
                                                tortor hendrerit tincidunt sed id libero. Maecenas et quam vel est pharetra luctus eget a diam. Sed congue odio
                                                id congue faucibus. Ut ut ultricies lectus. Quisque fermentum turpis a ipsum volutpat sagittis. </p>
                                        </div>
                                    </div>
                                    <div className={"flex border-t border-black uppercase font-gilbold"}>
                                        <a href={""} title={""} className={"inline-flex flex-none  px-5 py-3 border-r border-black gap-3"}>
                                            <span>→</span>
                                            <span>Подробнее</span>
                                        </a>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                                            </svg>
                                            31 декабря 2023
                                        </div>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3 border-x border-black"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                            18:00
                                        </div>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                    <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
                                                </g>
                                            </svg>
                                            Концертный зал
                                        </div>
                                    </div>

                                </div>
                                <div className={"flex flex-col border border-black mb-10"}>
                                    <div className={"flex flex-col lg:flex-row"}>
                                        <div className={"inline-flex basis-1/2"} >
                                            <img src={"/images/test/urok.png"} alt={""} className={"object-cover"} />
                                        </div>
                                        <div className={"inline-flex basis-1/2 flex-col p-5 space-y-5"} >
                                            <h4 className={"text-2xl uppercase font-gilbold"}>Иван Семенов: Большой поход</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet lectus ut dolor
                                                vestibulum auctor. Morbi quis lacus in odio lacinia vehicula. Sed sed tortor vitae leo dictum accumsan.
                                                Integer a leo in enim pellentesque malesuada sit amet sit amet nisi. Nulla facilisi. Cras at nisl vitae
                                                tortor hendrerit tincidunt sed id libero. Maecenas et quam vel est pharetra luctus eget a diam. Sed congue odio
                                                id congue faucibus. Ut ut ultricies lectus. Quisque fermentum turpis a ipsum volutpat sagittis. </p>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col lg:flex-row border-t border-black uppercase font-gilbold"}>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                                            </svg>
                                            31 декабря 2023
                                        </div>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3 border-x border-black"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                            18:00
                                        </div>
                                        <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                    <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
                                                </g>
                                            </svg>
                                            Концертный зал
                                        </div>
                                        <a href={""} title={""} className={"inline-flex flex-none  px-5 py-3 border-l border-black gap-3"}>
                                            <span>→</span>
                                            <span>Подробнее</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="basis-full lg:basis-1/4 p-5 space-y-5">
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_1.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_2.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_3.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                                <div className={"relative overflow-hidden"}>
                                    <a hrefLang={""} title={""}>
                                        <img
                                            src="/images/banners/banner_4.png"
                                            alt="My Image"
                                            className="w-full hover:scale-110 transition duration-500"
                                        />
                                    </a>
                                </div>
                            </div>
                    </section>
                </article>
                <Social/>
            </Container>
            <Footer/>
        </>
    )

}