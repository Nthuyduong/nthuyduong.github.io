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
        const images = document.querySelectorAll('.design-scale-out');
        images.forEach((image) => {
            image.addEventListener('mousemove', (e) => handleHoverImage(e, image));
        });
        return () => {
            images.forEach((image) => {
                image.removeEventListener('mousemove', (e) => handleHoverImage(e, image));
            });
        }
    }, []);

    const handleHoverImage = (e, wpr) => {
        const { offsetX, offsetY, target } = e;

        if (!wpr) return;
        const x = Math.min(Math.min(offsetX / window.innerWidth * 50, 70), 15);
        const y = offsetY / window.innerHeight * 100 - 5;
        wpr.style.setProperty('--image-x', `${x}%`);
        wpr.style.setProperty('--image-y', `${y}%`);
    }

    return (
        <div className="project-page">
            <div className="design-banner">
                <img className="design-banner-bg" src="/images/design/banner-design.png" alt="design-banner2" />
                <div className="design-banner-content flex justify-center items-center px-2">
                    <div className="flex m-w gap-2 sm:items-center flex-col sm:flex-row">
                        {/* <img className="mr-7 w-[200px] h-[200px] md:w-[100px] md:h-[100px]" src="./images/flower-icon.png" alt="logo" loading="lazy" /> */}
                        <div className="text-white w-full flex flex-col gap-2 sm:gap-0">
                            <div className="">
                                <div className="flex justify-center items-center">
                                    <div className="ml:text-[120px] md:text-[80px] text-[34px]">LET'S</div>
                                    <img className="ml:h-[110px] md:h-[70px] h-[30px] ml:mx-5 md:mx-3 mx-2" src="./images/sao.svg" alt="logo" />
                                    <div className="ml:text-[120px] md:text-[80px] text-[34px]">CREATE</div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="ml:text-[125px] md:text-[80px] bighead text-[34px]">STAND</div>
                                    {/* <div className="ellip ml-4 relative">
                        <div className="absolute heading_5 text-ellipse">2024</div>
                    </div> */}
                                    <img className="ml:h-[150px] md:h-[90px] h-[50px] ml:ml-5 md:ml-3 ml-2" src="./images/ellipse.svg" alt="logo" />
                                    <div className="ml:text-[125px] md:text-[80px] bighead ml:mr-5 md:mr-3 mr-2 text-[34px]">UT</div>
                                    <div className="ml:text-[125px] md:text-[80px] bighead text-[34px]">BRAND</div>
                                </div>
                            </div>
                            {/* <div className="text-2xl sm:text-3xl">Welcome to my</div> */}
                            {/* <img className="sm:mt-3 sm:mb-6 sm:w-2/3" src="./images/Creative Place.png" alt="logo" /> */}
                            {/* <div className="text-base sm:text-xl">“May the flowers remind us why the rain was so necessary”</div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW BANNER */}
            {/* <div className="">
                <div className="md:flex justify-center items-center">
                    <div className="md:text-[120px]">LET'S</div>
                    <img className="h-[110px] mx-5" src="./images/sao.svg" alt="logo" />
                    <div className="md:text-[120px]">CREATE</div>
                </div>
                <div className="md:flex justify-center items-center">
                    <div className="md:text-[120px] bighead">STAND</div> */}
            {/* <div className="ellip ml-4 relative">
                        <div className="absolute heading_5 text-ellipse">2024</div>
                    </div> */}
            {/* <img className="h-[160px] ml-5" src="./images/ellipse.svg" alt="logo" />
                    <div className="md:text-[120px] bighead mr-5">UT</div>
                    <div className="md:text-[120px] bighead">BRAND</div>
                </div>
            </div> */}

            <div></div>
            {/* All project here */}

            <div className="section md:py-7 py-4">
                <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                    <div className="design-scale-out md:flex flex-row gap-6">
                        <div className="md:flex flex-row gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">01</div>
                            <img
                                className="md:w-[50%] block lg:hidden" src="./images/design/des-1.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div>
                                <div className="flex">
                                    <div className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI Design</div>
                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                </div>
                                <div>
                                    <Link to={ROUTER.AGURI}>
                                        <div className="heading_3 cursor-text-wrp">Aguri Jewelry Website</div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:flex flex-row justify-end relative">
                            <div className="design-scale-wrp absolute h-full">
                                <img
                                    className="design-scale-img w-full h-full w-auto object-cover" src="./images/design/des-1.png"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </div>
                            <Link className="py-5" to={ROUTER.AGURI}>
                                <div className="flex items-center">
                                    <div className="mr-2">Explore now</div>
                                    <div>
                                        <img className="" src="./images/icons/arrow.svg" alt="smile" loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                    <div className="design-scale-out md:flex flex-row gap-6">
                        <div className="md:flex flex-row gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">02</div>
                            <img
                                className="md:w-[50%] block lg:hidden" src="./images/design/mydes2.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div>
                                <div className="flex">
                                    <div className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI Design</div>
                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                </div>
                                <div>
                                    <Link to={ROUTER.BEAUTYBLOG}>
                                        <div className="heading_3 cursor-text-wrp">Beauty Blog</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:flex flex-row justify-end relative">
                            <div className="design-scale-wrp absolute h-full">
                                <img
                                    className="design-scale-img w-full w-auto h-full object-cover" src="./images/design/mydes2.png"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </div>
                            <Link className="py-5" to={ROUTER.AGURI}>
                                <div className="flex items-center">
                                    <div className="mr-2">Explore now</div>
                                    <div>
                                        <img className="" src="./images/icons/arrow.svg" alt="smile" loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                    <div className="design-scale-out md:flex flex-row gap-6">
                        <div className="md:flex flex-row gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">03</div>
                            <img
                                className="w-[50%] block lg:hidden" src="./images/design/mydes1.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div>
                                <div className="flex">
                                    <div className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI Design</div>
                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                </div>
                                <div>
                                    <Link to={ROUTER.CAKE}>
                                        <div className="heading_3 cursor-text-wrp">Season Cake Blog</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:flex flex-row justify-end relative">
                            <div className="design-scale-wrp absolute h-full">
                                <img
                                    className="design-scale-img w-full w-auto h-full object-cover" src="./images/design/mydes1.png"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </div>
                            <Link className="py-5" to={ROUTER.AGURI}>
                                <div className="flex items-center">
                                    <div className="mr-2">Explore now</div>
                                    <div>
                                        <img className="" src="./images/icons/arrow.svg" alt="smile" loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                    <div className="design-scale-out md:flex flex-row gap-6">
                        <div className="md:flex flex-row gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">04</div>
                            <img
                                className="block lg:hidden w-[50%]" src="./images/design/des-1.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div>
                                <div className="flex">
                                    <div className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI Design</div>
                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                </div>
                                <div>
                                    <Link to={ROUTER.ALIO}>
                                        <div className="heading_3 cursor-text-wrp">Yoga App & Website</div>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="w-full md:flex flex-row justify-end relative">
                            <div className="design-scale-wrp absolute h-full">
                                <img
                                    className="design-scale-img w-full w-auto h-full object-cover" src="./images/design/des-1.png"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </div>
                            <Link className="py-5" to={ROUTER.AGURI}>
                                <div className="flex items-center">
                                    <div className="mr-2">Explore now</div>
                                    <div>
                                        <img className="" src="./images/icons/arrow.svg" alt="smile" loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:pb-0 pb-5">
                    <div className="design-scale-out md:flex flex-row gap-6">
                        <div className="md:flex flex-row gap-6 w-full py-5">
                            <div className="heading_3 cursor-text-wrp hidden lg:block">05</div>
                            <img
                                className="block lg:hidden w-[50%]" src="./images/design/mydes3.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div>
                                <div className="flex">
                                    <div className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI Design</div>
                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                </div>
                                <div>
                                    <Link to={ROUTER.FASHION}>
                                        <div className="heading_3 mb-3 cursor-text-wrp">Fashion Brand App</div>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="w-full md:flex flex-row justify-end relative">
                            <div className="design-scale-wrp absolute h-full">
                                <img
                                    className="design-scale-img w-full w-auto h-full object-cover" src="./images/design/mydes3.png"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </div>
                            <Link className="py-5" to={ROUTER.AGURI}>
                                <div className="flex items-center">
                                    <div className="mr-2">Explore now</div>
                                    <div>
                                        <img className="" src="./images/icons/arrow.svg" alt="smile" loading="lazy" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="section">
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
                            <div className="project-inner py-5 design-item">
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
            </div> */}

            {/* Contact section */}
            {/* <div class="colorDiv border-y border-solid border-ccc py-7 w-full md:mt-7 mt-5 ">
                <div>

                    <div className="text-[60px] leading-[130%]">Unleashing The Potential Of Your Brand</div>
                    <div className="flex justify-center w-full">
                        <div className="mt-6 bg-black py-2 px-6 rounded-[60px] text-white">
                            <Link className="scroll-text" data-replace="CONTACT WITH ME">
                                <span>
                                    CONTACT WITH ME
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )

}
export default Designs;