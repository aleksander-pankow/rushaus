import React from "react";
import DateComponent from "@/components/Date/Date"; // Ensure correct path to DateComponent

interface PostMetaProps {
    date: string | null;
    time: string | null;
    place: string | null;
}

const PostMeta: React.FC<PostMetaProps> = ({ date, time, place }) => {
    return (
        <div className="flex w-full border-black border-t-0 border-x-0 border uppercase font-gilbold">
            <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    {/* SVG path for date */}
                    <path d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {date && <DateComponent dateString={date} formatString={"d MMMM yyyy"} />}
            </div>
            <div className={"inline-flex flex-1 px-5 py-3 gap-3 border-x border-black"}>
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    {/* SVG path for time */}
                    <path d="M10 12a2 2 0 100-4 2 2 0 0 0 0 4ZM19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {time && <span>{time}</span>}
            </div>
            <div className={"inline-flex flex-1 px-5 py-3 gap-3"}>
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 21"
                >
                    {/* SVG path for place */}
                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                    </g>
                </svg>
                {place && <span>{place}</span>}
            </div>
        </div>
    );
};

export default PostMeta;
