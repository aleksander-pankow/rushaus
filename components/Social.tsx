import React from 'react';

function Social() {
    return (
        <section>
            <div className="flex flex-col sm:flex-row border border-black border-t-0 p-5 gap-4">
                <div className="w-full sm:w-1/2">
                        <div className="flex items-center justify-center gap-4">
                            <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black group/item" title="">
                                <img
                                    src="/images/social/Instagram.svg"
                                    alt="My Image"
                                    className="h-[50px] lg:h-[75px] w-auto group-hover/item:hidden"
                                />
                                <img
                                    src="/images/social/Instagram_color.svg"
                                    alt="My Image"
                                    className="h-[50px] lg:h-[75px] w-auto hidden group-hover/item:inline-block"
                                />
                            </a>
                            <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black group/item" title="">
                                        <img
                                            src="/images/social/telegram.svg"
                                            alt="My Image"
                                            className="h-[50px] lg:h-[75px] w-auto group-hover/item:hidden"
                                        />
                                <img
                                    src="/images/social/telegram_color.svg"
                                    alt="My Image"
                                    className="h-[50px] lg:h-[75px] w-auto hidden group-hover/item:inline-block"
                                />
                            </a>
                            <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black group/item" title="">
                                        <img
                                            src="/images/social/facebook.svg"
                                            alt="My Image"
                                            className="h-[50px] lg:h-[75px] w-auto group-hover/item:hidden"
                                        />
                                <img
                                    src="/images/social/facebook_color.svg"
                                    alt="My Image"
                                    className="h-[50px] lg:h-[75px] w-auto hidden group-hover/item:inline-block"
                                />
                            </a>
                        </div>
                </div>
                <div className="w-full  sm:w-1/2">
                    <div className="flex items-center justify-center gap-4">
                        <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black group/item" title="">
                            <img
                                src="/images/social/youtube.svg"
                                alt="My Image"
                                className="h-[50px] lg:h-[75px] w-auto group-hover/item:hidden"
                            />
                            <img
                                src="/images/social/youtube_color.svg"
                                alt="My Image"
                                className="h-[50px] lg:h-[75px] w-auto hidden group-hover/item:inline-block"
                            />
                        </a>
                        <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black group/item" title="">
                            <img
                                src="/images/social/odnoklassniki.svg"
                                alt="My Image"
                                className="h-[50px] lg:h-[75px] w-auto group-hover/item:hidden"
                            />
                            <img
                                src="/images/social/odnoklassniki_color.svg"
                                alt="My Image"
                                className="h-[50px] lg:h-[75px] w-auto hidden group-hover/item:inline-block"
                            />
                        </a>
                        <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black group/item" title="">
                            <img
                                src="/images/social/vk.svg"
                                alt="My Image"
                                className="h-[50px] lg:h-[75px] w-auto group-hover/item:hidden"
                            />
                            <img
                                src="/images/social/vk_color.svg"
                                alt="My Image"
                                className="h-[50px] lg:h-[75px] w-auto hidden group-hover/item:inline-block"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Social;