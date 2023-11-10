"use client"
import Image from 'next/image';
export default function Slider(){
    return(
        <section className="h-3/5">
            <Image
                src="/images/mesto-vstrechi.png"
                alt="My Image"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
            />
        </section>
    )
}