import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";

const Designs = () => {
    useEffect(() => {
        let banner = document.querySelector('.design-banner');
        if (banner) {
            banner.addEventListener('mousemove', ({ offsetX, offsetY, target }) => {
                const x = offsetX / target.clientWidth * 100;
                const y = offsetY / target.clientHeight * 100;
                banner.style.setProperty('--x1', `${100 - x - 15}%`);
                banner.style.setProperty('--x2', `${(x - 15)}%`);
                banner.style.setProperty('--y2', `${100 - y - 30}%`);
                banner.style.setProperty('--y1', `${(y - 30)}%`);
            });
        }
    }, []);

    return (
        <div className="project-page pb-6">
            <div className="design-banner">
                <img className="design-banner-bg" src="/images/design/banner-design.png" alt="design-banner2" />
                <div className="design-banner-content flex justify-center items-center px-2">
                    <div className="flex m-w gap-2 sm:items-center flex-col sm:flex-row">
                        {/* <img className="mr-7 w-[200px] h-[200px] md:w-[100px] md:h-[100px]" src="./images/flower-icon.png" alt="logo" loading="lazy" /> */}
                        <div className="text-white w-full flex flex-col gap-2 sm:gap-0">
                            <div className="text-2xl sm:text-3xl">Welcome to my</div>
                            <img className="sm:mt-3 sm:mb-6 sm:w-2/3" src="./images/Creative Place.png" alt="logo" />
                            <div className="text-base sm:text-xl">“May the flowers remind us why the rain was so necessary”</div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
            {/* All project here */}
            <div className="all-my-projects">
                <div className="">
                    <div className="">
                        <div className="project-section mt-6">
                            <div className="project-inner py-5 border-b border-solid border-ccc design-item">
                                <div className="sm:flex grid grid-cols-12 gap-2 sm:gap-0">
                                    <div className="col-span-6 flex design-item-1">
                                        <div className="heading_5 mr-auto cursor-text-wrp font-bold">01.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp body_text">UX/UI Design</div>
                                            <div className="cursor-text-wrp body_text">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 design-item-2">
                                        <img
                                            className="w-full h-[160px] object-cover" src="./images/design/des-1.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="col-span-12 design-item-3 flex flex-col justify-between w-full">
                                        <div className="max-w-[500px]">
                                            <Link to={ROUTER.AGURI}>
                                                <div className="heading_4 mb-3 cursor-text-wrp">Aguri Jewelry Website</div>
                                            </Link>
                                            <span className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </span>
                                        </div>
                                        <div className="des-item-view">
                                            <Link className="des-item-view-link" to={ROUTER.AGURI}>View the project</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-inner py-5 design-item">
                                <div className="flex">
                                    <div className="flex design-item-1">
                                        <div className="heading_5 mr-auto cursor-text-wrp font-bold">02.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp body_text">UX/UI Design</div>
                                            <div className="cursor-text-wrp body_text">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="design-item-2">
                                        <img
                                            className="w-full h-[160px] object-cover" src="./images/design/des-2.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="design-item-3 flex flex-col justify-between w-full">
                                        <div className="max-w-[500px]">
                                            <Link to={ROUTER.CAKE}>
                                                <div className="heading_4 mb-3 cursor-text-wrp">Season Cake Blog</div>
                                            </Link>
                                            <span className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </span>
                                        </div>
                                        <div className="des-item-view">
                                            <Link className="des-item-view-link" to={ROUTER.CAKE}>View the project</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-inner py-5 border-y border-solid border-ccc design-item">
                                <div className="flex">
                                    <div className="flex design-item-1">
                                        <div className="heading_5 mr-auto cursor-text-wrp font-bold">03.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp body_text">UX/UI Design</div>
                                            <div className="cursor-text-wrp body_text">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="design-item-2">
                                        <img
                                            className="w-full h-[160px] object-cover" src="./images/design/des-3.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="design-item-3 flex flex-col justify-between w-full">
                                        <div className="max-w-[500px]">
                                            <Link to={ROUTER.FASHION}>
                                                <div className="heading_4 mb-3 cursor-text-wrp">Fashion Brand App</div>
                                            </Link>
                                            <span className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </span>
                                        </div>
                                        <div className="des-item-view">
                                            <Link className="des-item-view-link" to={ROUTER.FASHION}>View the project</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-inner py-5 border-b border-solid border-ccc design-item">
                                <div className="flex">
                                    <div className="flex design-item-1">
                                        <div className="heading_5 mr-auto cursor-text-wrp font-bold">04.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp body_text">UX/UI Design</div>
                                            <div className="cursor-text-wrp body_text">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="design-item-2">
                                        <img
                                            className="w-full h-[160px] object-cover" src="./images/design/des-4.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="design-item-3 flex flex-col justify-between w-full">
                                        <div className="max-w-[500px]">
                                            <Link to={ROUTER.ALIO}>
                                                <div className="heading_5 mb-3 cursor-text-wrp">Yoga App & Website</div>
                                            </Link>
                                            <span className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </span>
                                        </div>
                                        <div className="des-item-view">
                                            <Link className="des-item-view-link" to={ROUTER.ALIO}>View the project</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Designs;