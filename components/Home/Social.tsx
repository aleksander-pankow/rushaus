import React from 'react';

function Social() {
    return (
        <section>
            <div className="flex flex-col xl:flex-row p-8 pb-4 gap-4">
                <div className="w-1/2 sm:max-md:w-full">
                        <div className="flex items-center justify-center gap-4">
                            <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black" title="">
                                <img
                                    src="/images/social/Instagram.svg"
                                    alt="My Image"
                                    className="h-14 w-auto"
                                />
                            </a>
                            <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black" title="">
                                        <img
                                            src="/images/social/telegram.svg"
                                            alt="My Image"
                                            className="h-14 w-auto"
                                        />
                            </a>
                            <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black" title="">
                                        <img
                                            src="/images/social/facebook.svg"
                                            alt="My Image"
                                            className="h-14 w-auto"
                                        />
                            </a>
                        </div>
                </div>
                <div className="w-1/2 sm:max-md:w-full">
                    <div className="flex items-center justify-center gap-4">
                        <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black" title="">
                            <img
                                src="/images/social/youtube.svg"
                                alt="My Image"
                                className="h-14 w-auto"
                            />
                        </a>
                        <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black" title="">
                            <img
                                src="/images/social/odnoklassniki.svg"
                                alt="My Image"
                                className="h-14 w-auto"
                            />
                        </a>
                        <a href=" " className="w-1/3 aspect-square flex items-center justify-center bg-theme-gray/10 hover:bg-transparent hover:border border-black" title="">
                            <img
                                src="/images/social/vk.svg"
                                alt="My Image"
                                className="h-14 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Social;