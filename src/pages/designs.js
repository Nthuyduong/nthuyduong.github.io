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
        <div className="project-page pb-8">
            <div className="design-banner">
                <img src="/images/design/banner-design.png" alt="design-banner2" />
                <div className="design-banner-content flex justify-center items-center">
                    <div className="flex m-w gap-2 items-center">
                        <img style={{width: '120px', height: '120px'}} src="./images/flower-icon.png" alt="logo" loading="lazy" />
                        <div className="text-white w-full">
                            <div className="body_text">Welcome to my</div>
                            <img className="m-2" src="./images/Creative Place.png" alt="logo" />
                            <div className="body_text">“May the flowers remind us why the rain was so necessary”</div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
            {/* All project here */}
            <div className="all-my-projects">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-8">
                        <div className="project-section mt-6">
                            <div className="project-inner py-5 border-y border-solid border-ccc">
                                <div className="grid grid-cols-8 gap-5">
                                    <div className="col-span-2 flex">
                                        <div className="heading_5 mr-auto cursor-text-wrp">01.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp">UX/UI Design</div>
                                            <div className="cursor-text-wrp">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <img
                                            className="w-full" src="./images/design/des-1.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <div>
                                            <div className="heading_4 mb-3 cursor-text-wrp">Aguri Jewelry Website</div>
                                            <div className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </div>
                                        </div>
                                        <div>View the project</div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-inner py-5 border-b border-solid border-ccc">
                                <div className="grid grid-cols-8 gap-5">
                                    <div className="col-span-2 flex">
                                        <div className="heading_5 mr-auto cursor-text-wrp">01.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp">UX/UI Design</div>
                                            <div className="cursor-text-wrp">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <img
                                            className="w-full" src="./images/design/des-1.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <div>
                                            <div className="heading_4 mb-3 cursor-text-wrp">Aguri Jewelry Website</div>
                                            <div className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </div>
                                        </div>
                                        <div>View the project</div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-inner py-5 border-b border-solid border-ccc">
                                <div className="grid grid-cols-8 gap-5">
                                    <div className="col-span-2 flex">
                                        <div className="heading_5 mr-auto cursor-text-wrp">01.</div>
                                        <div>
                                            <div className="mb-1 cursor-text-wrp">UX/UI Design</div>
                                            <div className="cursor-text-wrp">Apr 2024</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <img
                                            className="w-full" src="./images/design/des-1.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <div>
                                            <div className="heading_4 mb-3 cursor-text-wrp">Aguri Jewelry Website</div>
                                            <div className="body_text cursor-text-wrp">
                                                User testing was an iterative process that was conducted at every milestone of the project to identify the
                                            </div>
                                        </div>
                                        <div>View the project</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                </div>
            </div>

        </div>
    )

}
export default Designs;