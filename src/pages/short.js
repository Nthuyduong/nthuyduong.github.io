import React, { useState, useEffect } from "react";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";

const Short = () => {
    return (
        <div>
            <div className="">
                <div className="container-fluid">
                    <div className="project-item alio1 md:mb-6 mb-4">
                        <img className="w-100 w-full" src="./images/Pj09_shortlink.webp" loading="lazy" />
                    </div>
                    
                    <div className="project-item md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src="./images/test/deerly.webp" alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end bg-[#FFFDF8]">
                                <div className="p-7">
                                    <div className="heading_4 mb-4">About website</div>
                                    <div className="body_text">
                                        Welcome to The Deerly, a carefully curated online store
                                        designed with both style and functionality in mind. As a UX/UI designer, I’ve focused on creating a seamless and visually appealing shopping experience. Our collection features unique, high-quality products that bring a touch of elegance to your home. From décor to accessories, each item is selected for its craftsmanship and beauty. Explore and shop with ease, and let us help you
                                        transform your space into something truly special.
                                    </div>
                                    {/* <div className="small_text text-right font-italic">
                                        <a href="https://nthuyduong.github.io/CakeBlog/#/" target="_blank">Comming soon: https://nthuyduong.github.io/CakeBlog/#/</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:pb-6 pb-4 text-center">
                        <div className="mb-2 heading_6">VIEW THE WEBSITE</div>
                        <a className="text-link" href="https://thedeerly.com/" target="_blank">https://thedeerly.com/</a>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100 w-full" src="./images/test/deerly-mobile.webp" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Short;