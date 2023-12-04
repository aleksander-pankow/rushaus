"use client"
import Slider from "@/components/Home/Slider";
import Ticker from "@/components/Home/Ticker";
import Events from "@/components/Home/Events";
import Categories from "@/components/Home/Categories";
import Social from "@/components/Social";
import Container from "@/components/Container";

export default function Home() {
    return (
        <Container>
            <Slider/>
            <Ticker/>
            <Events/>
            <Categories/>
            <Social/>
        </Container>
    )
}
