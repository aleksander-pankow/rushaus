"use client"
import {Alert} from "flowbite-react"
import Slider from "@/components/Slider";
import Ticker from "@/components/Ticker";
import Events from "@/components/Events";

export default function Home() {
    return (
        <section className="">
            <Slider/>
            <Ticker/>
            <Events/>
        </section>
    )
}
