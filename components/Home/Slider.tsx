"use client"
import Image from 'next/image';
export default function Slider(){
    return(
        <section className="w-full border-[#0086cb] border-b-[6px] relative">
                <span className={"absolute top-1/4 sm:top-1/3 left-0 pl-5 uppercase font-gilmedium text-rhtitle sm:text-[40px] text-theme-blue"}>Место Встречи</span>
                <div className={"slider-content h-3/5 xl:h-2/5 pt-5 mx-auto xl:!w-4/6 w-full"}>
                    <Image
                        src="/images/mesto-vstrechi.png"
                        alt="My Image"
                        width={100}
                        height={100}
                        loading="lazy"
                        layout="responsive"
                        className={"mx-auto"}
                    />
                </div>
        </section>
    )
}