"use client"
import Image from 'next/image';
export default function Slider(){
    return(
        <section className="h-[500px]">
            <img src={"/images/mesto-vstrechi.png"} alt={""} className={"h-full"} />
        </section>
    )
}