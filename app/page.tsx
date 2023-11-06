"use client"
import {Alert} from "flowbite-react"
import Slider from "@/components/Home/Slider";
import Ticker from "@/components/Home/Ticker";
import Events from "@/components/Home/Events";
import Categories from "@/components/Home/Categories";
import Social from "@/components/Home/Social";

export default function Home() {
    return (
        <section className="container mx-auto">
            <Slider/>
            <Ticker/>
            <Events/>
            <Categories/>
            <Social/>
        </section>
    )
}
