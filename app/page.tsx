"use client"
import {Alert} from "flowbite-react"
import Slider from "@/components/Home/Slider";
import Ticker from "@/components/Home/Ticker";
import Events from "@/components/Home/Events";
import Categories from "@/components/Home/Categories";

export default function Home() {
    return (
        <section className="">
            <Slider/>
            <Ticker/>
            <Events/>
            <Categories/>
        </section>
    )
}
