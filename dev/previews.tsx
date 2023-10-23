import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import Home from "@/app/page";
import Header from "@/components/Header";
import RootLayout from "@/app/layout";
import Slider from "@/components/Slider";
import TickerTop from "@/components/Ticker";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/RootLayout">
                <RootLayout/>
            </ComponentPreview>
            <ComponentPreview path="/Slider">
                <Slider/>
            </ComponentPreview>
            <ComponentPreview path="/TickerTop">
                <TickerTop/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;