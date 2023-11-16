"use client"
import Image from 'next/image';
export default function Slider(){
    return(
        <section className="w-full border-[#0086cb] border-b-[6px]">
            <div className={"h-3/5 xl:h-2/5 table mx-auto"}>
                <Image
                    src="/images/mesto-vstrechi.png"
                    alt="My Image"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
        </section>
    )
}