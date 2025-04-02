import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";
import gsap from "gsap";

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

    // MY TABS
    const tabItems = ['UX/UI DESIGN (6)', 'SHOPIFY & APP (2)', 'GRAPHIC DESIGN (1)', 'PERSONAL ART (2)'];
    const [activeTab, setActiveTab] = useState(tabItems[0]);

    const handleActive = (item) => {
        setActiveTab(item);
    };

    return (
        <div className="project-page">
            <div className="design-banner">
                <img className="design-banner-bg h-full w-full object-cover object object-bottom" src="/images/design/banner-design.png" alt="design-banner2" />
                <div className="design-banner-content flex justify-center items-center px-2">
                    <div className="flex m-w gap-2 sm:items-center flex-col sm:flex-row">
                        {/* <img className="mr-7 w-[200px] h-[200px] md:w-[100px] md:h-[100px]" src="./images/flower-icon.png" alt="logo" loading="lazy" /> */}
                        <div className="text-white w-full flex flex-col gap-2 sm:gap-0">
                            <div className="">
                                <div className="flex justify-center items-center">
                                    <div className="ml:text-[160px] md:text-[100px] text-[34px]">LET'S</div>
                                    <img className="project-flower ml:h-[110px] md:h-[90px] h-[40px] ml:mx-5 md:mx-3 mx-2" src="./images/sao.svg" alt="logo" />
                                    <div className="ml:text-[160px] md:text-[100px] text-[34px]">CREATE</div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="ml:text-[150px] md:text-[100px] bighead text-[34px]">STAND</div>
                                    {/* <div className="ellip ml-4 relative">
                        <div className="absolute heading_5 text-ellipse">2024</div>
                    </div> */}
                                    <img className="ml:h-[150px] md:h-[110px] h-[50px] ml:ml-5 md:ml-3 ml-2" src="./images/ellipse.svg" alt="logo" />
                                    <div className="ml:text-[150px] md:text-[100px] bighead ml:mr-5 md:mr-3 mr-2 text-[34px]">UT</div>
                                    <div className="ml:text-[150px] md:text-[100px] bighead text-[34px]">BRAND</div>
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

            {/* MY TABS */}
            <div className="section my-tabs mt-5 lg:mt-6 lg:flex justify-center">
                <div className="w-full">
                    <ul className="tab-list w-full lg:flex">
                        {tabItems.map((item) => (
                            <li
                                key={item}
                                className={`lg:mb-0 mb-3 w-full text-center tab-list-item ${activeTab === item ? 'tabactive' : ''}`}
                                onClick={() => handleActive(item)}
                            >
                                <div className="scroll-text" data-replace={item}>
                                    <span>{item}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content lg:pt-5 lg:pb-8 py-5">
                        {/* {activeTab === 'UX/UI DESIGN (6)' && */}
                        <div className={`content-tab ${activeTab === 'UX/UI DESIGN (6)' ? 'content-active' : ''}`}>
                            <div className="lg:mt-6 border-b border-solid border-ccc md:pb-0 pb-5">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">01</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes8.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">March 2025</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.SCHEDULE}>
                                                    <div className="heading_3 cursor-text-wrp">Family Schedule App
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.SCHEDULE}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img h-full w-auto object-cover"
                                                    src="./images/design/mydes8.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.SCHEDULE}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">02</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes2.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">Apr 2023</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.BEAUTYBLOG}>
                                                    <div className="heading_3 cursor-text-wrp">Beauty Blog</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.BEAUTYBLOG}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img w-auto h-full object-cover"
                                                    src="./images/design/mydes2.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.BEAUTYBLOG}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">03</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes4.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">Apr 2024</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.AGURI}>
                                                    <div className="heading_3 cursor-text-wrp">Aguri Jewelry Website
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.AGURI}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img h-full w-auto object-cover"
                                                    src="./images/design/mydes4.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.AGURI}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">04</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes1.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">Apr 2023</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.CAKE}>
                                                    <div className="heading_3 cursor-text-wrp">Season Cake Blog</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.CAKE}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img w-auto h-full object-cover"
                                                    src="./images/design/mydes1.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.CAKE}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">05</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes5.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">Apr 2023</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.ALIO}>
                                                    <div className="heading_3 cursor-text-wrp">Yoga App & Website</div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.ALIO}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img w-auto h-full object-cover"
                                                    src="./images/design/mydes5.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.ALIO}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-solid border-ccc">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 cursor-text-wrp hidden lg:block">06</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes3.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">Apr 2024</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.FASHION}>
                                                    <div className="heading_3 mb-3 cursor-text-wrp">Fashion Brand App
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.FASHION}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img w-auto h-full object-cover"
                                                    src="./images/design/mydes3.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.FASHION}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="md:pb-0 pb-7 mb-7">
                                <div className="design-scale-out md:flex flex-row gap-6">
                                    <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                        <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">07</div>
                                        <img
                                            className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                            src="./images/design/mydes7.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                        <div className="sm:pt-0 pt-4">
                                            <div className="flex">
                                                <div
                                                    className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                    Design
                                                </div>
                                                <div className="cursor-text-wrp body_text">Nov 2024</div>
                                            </div>
                                            <div>
                                                <Link to={ROUTER.ARCHITEC}>
                                                    <div className="heading_3 cursor-text-wrp">Architecture Website
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                        <Link to={ROUTER.ARCHITEC}>
                                            <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                <img
                                                    className="design-scale-img w-auto h-full object-cover"
                                                    src="./images/design/mydes7.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <Link className="py-5" to={ROUTER.ARCHITEC}>
                                            <div className="flex items-center">
                                                <div className="mr-2">Explore now</div>
                                                <div>
                                                    <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                        loading="lazy" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* } */}
                        {/* {activeTab === 'E - COMMERCE (0)' && */}
                        <div className={`content-tab ${activeTab === 'SHOPIFY & APP (2)' ? 'content-active' : ''}`}>
                            <div className="lg:mt-6 md:pb-0 pb-5">
                            <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                                    <div className="design-scale-out md:flex flex-row gap-6">
                                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">01</div>
                                            <img
                                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                                src="./images/design/mydes4.png"
                                                alt="logo"
                                                loading="lazy"
                                            />
                                            <div className="sm:pt-0 pt-4">
                                                <div className="flex">
                                                    <div
                                                        className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                        Design
                                                    </div>
                                                    <div className="cursor-text-wrp body_text">March 2025</div>
                                                </div>
                                                <div>
                                                    <Link >
                                                        <div className="heading_3 cursor-text-wrp">Link Shortener Service comming...
                                                        
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div
                                            className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                            <Link >
                                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                    <img
                                                        className="design-scale-img h-full w-auto object-cover"
                                                        src="./images/design/mydes6.png"
                                                        alt="logo"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </Link>
                                            <Link className="py-5" >
                                                <div className="flex items-center">
                                                    <div className="mr-2">Explore now</div>
                                                    <div>
                                                        <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                            loading="lazy" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                                    <div className="design-scale-out md:flex flex-row gap-6">
                                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">02</div>
                                            <img
                                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                                src="./images/design/mydes4.png"
                                                alt="logo"
                                                loading="lazy"
                                            />
                                            <div className="sm:pt-0 pt-4">
                                                <div className="flex">
                                                    <div
                                                        className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                        Design
                                                    </div>
                                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                                </div>
                                                <div>
                                                    <Link to={ROUTER.WORKOUT}>
                                                        <div className="heading_3 cursor-text-wrp">Workout Clothes
                                                            Website
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div
                                            className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                            <Link to={ROUTER.TEST}>
                                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                    <img
                                                        className="design-scale-img h-full w-auto object-cover"
                                                        src="./images/design/mydes6.png"
                                                        alt="logo"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </Link>
                                            <Link className="py-5" to={ROUTER.WORKOUT}>
                                                <div className="flex items-center">
                                                    <div className="mr-2">Explore now</div>
                                                    <div>
                                                        <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                            loading="lazy" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:pb-0 pb-5 mb-7">
                                    <div className="design-scale-out md:flex flex-row gap-6">
                                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">03</div>
                                            <img
                                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]"
                                                src="./images/design/mydes10.png"
                                                alt="logo"
                                                loading="lazy"
                                            />
                                            <div className="sm:pt-0 pt-4">
                                                <div className="flex">
                                                    <div
                                                        className="mb-1 cursor-text-wrp body_text pr-2 mr-2 border-r border-solid border-999">UX/UI
                                                        Design
                                                    </div>
                                                    <div className="cursor-text-wrp body_text">Apr 2024</div>
                                                </div>
                                                <div>
                                                    <Link to={ROUTER.TEST}>
                                                        <div className="heading_3 cursor-text-wrp">Clothes Brand
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div
                                            className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                                            <Link to={ROUTER.TEST}>
                                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                                    <img
                                                        className="design-scale-img h-full w-auto object-cover"
                                                        src="./images/design/mydes10.png"
                                                        alt="logo"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </Link>
                                            <Link className="py-5" to={ROUTER.TEST}>
                                                <div className="flex items-center">
                                                    <div className="mr-2">Explore now</div>
                                                    <div>
                                                        <img className="" src="./images/icons/arrow.svg" alt="smile"
                                                            loading="lazy" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* } */}
                        {/* {activeTab === 'GRAPHIC DESIGN (0)' && */}
                        <div className={`content-tab ${activeTab === 'GRAPHIC DESIGN (1)' ? 'content-active' : ''}`}>
                            <div className="lg:pt-7 text-center">
                                <div className="my-graphic grid grid-cols-4 gap-1">

                                    <div className="col-span-2 graphic">
                                        <a className="lightbox" href="#graphic1">
                                            <img
                                                className="" src="./images/design/graphic1.png"
                                                alt="logo"
                                                loading="lazy"
                                            />
                                        </a>
                                        <div className="lightbox-target" id="graphic1">
                                            <img
                                                className="" src="./images/design/graphic1.png"
                                                alt="logo"
                                                loading="lazy"
                                            />
                                            <a className="lightbox-close" href="#"></a>
                                        </div>
                                    </div>
                                    <div className="col-span-2 graphic">
                                        <a className="lightbox" href="#graphic2">
                                            {/*<img*/}
                                            {/*    className="" src="./images/design/graphic1.png"*/}
                                            {/*    alt="logo"*/}
                                            {/*    loading="lazy"*/}
                                            {/*/>*/}
                                        </a>
                                        <div className="lightbox-target" id="graphic2">
                                            {/*<img*/}
                                            {/*    className="" src="./images/design/graphic1.png"*/}
                                            {/*    alt="logo"*/}
                                            {/*    loading="lazy"*/}
                                            {/*/>*/}
                                            <a className="lightbox-close" href="#"></a>
                                        </div>
                                    </div>
                                    <div className="col-span-2 graphic">
                                        <a className="lightbox" href="#graphic3">
                                            {/*<img*/}
                                            {/*    className="" src="./images/design/graphic1.png"*/}
                                            {/*    alt="logo"*/}
                                            {/*    loading="lazy"*/}
                                            {/*/>*/}
                                        </a>
                                        <div className="lightbox-target" id="graphic3">
                                            {/*<img*/}
                                            {/*    className="" src="./images/design/graphic1.png"*/}
                                            {/*    alt="logo"*/}
                                            {/*    loading="lazy"*/}
                                            {/*/>*/}
                                            <a className="lightbox-close" href="#"></a>
                                        </div>
                                    </div>
                                    <div className="col-span-2 graphic">
                                        <a className="lightbox" href="#graphic4">
                                            {/*<img*/}
                                            {/*    className="" src="./images/design/graphic1.png"*/}
                                            {/*    alt="logo"*/}
                                            {/*    loading="lazy"*/}
                                            {/*/>*/}
                                        </a>
                                        <div className="lightbox-target" id="graphic4">
                                            {/*<img*/}
                                            {/*    className="" src="./images/design/graphic1.png"*/}
                                            {/*    alt="logo"*/}
                                            {/*    loading="lazy"*/}
                                            {/*/>*/}
                                            <a className="lightbox-close" href="#"></a>
                                        </div>
                                    </div>

                                </div>
                                {/*<div className="mb-2 heading_3">Come Back Soon</div>*/}
                                {/*<div>I'm getting ready to upload my designs</div>*/}
                            </div>
                        </div>
                        {/* } */}
                        {/* {activeTab === 'PERSONAL ART (0)' && */}
                        <div className={`content-tab ${activeTab === 'PERSONAL ART (2)' ? 'content-active' : ''}`}>
                            <div className="lg:pt-7">
                                <div className="my-gallery">
                                    <div className="one gallery-item">
                                        {/* One */}
                                    </div>
                                    <div className="two gallery-item">
                                        <img
                                            className="" src="./images/design/art1.png"
                                            alt="logo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="three gallery-item">
                                        {/* Three */}
                                    </div>
                                    <div className="four gallery-item">
                                        <div className="top-img">
                                            <img
                                                className="top" src="./images/design/art2.png"
                                                alt="logo"
                                                loading="lazy"
                                            />
                                            {/* <div className="bottom-img">
                                                <img
                                                    className="bottom" src="./images/design/art1.png"
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                            </div> */}
                                        </div>

                                    </div>
                                    <div className="five gallery-item">
                                        {/* Five */}
                                    </div>
                                    <div className="six gallery-item">
                                        {/* Six */}
                                    </div>
                                    <div className="seven gallery-item">
                                        {/* Seven */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* } */}
                    </div>
                </div>
            </div>

            {/* All project here */}

            {/* <div className="section md:py-5 lg:py-8 py-4">
                <div className="border-b border-solid border-ccc md:pb-0 pb-5">
                    <div className="design-scale-out md:flex flex-row gap-6">
                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">01</div>
                            <img
                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]" src="./images/design/des-1.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div className="sm:pt-0 pt-4">
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
                        <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                            <Link to={ROUTER.AGURI}>
                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                    <img
                                        className="design-scale-img h-full w-auto object-cover" src="./images/design/mydes4.png"
                                        alt="logo"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
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
                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">02</div>
                            <img
                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]" src="./images/design/mydes2.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div className="sm:pt-0 pt-4">
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
                        <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                            <Link to={ROUTER.BEAUTYBLOG}>
                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                    <img
                                        className="design-scale-img w-auto h-full object-cover" src="./images/design/mydes2.png"
                                        alt="logo"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
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
                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">03</div>
                            <img
                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]" src="./images/design/mydes1.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div className="sm:pt-0 pt-4">
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

                        <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                            <Link to={ROUTER.CAKE}>
                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                    <img
                                        className="design-scale-img w-auto h-full object-cover" src="./images/design/mydes1.png"
                                        alt="logo"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
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
                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                            <div className="heading_3 mb-3 cursor-text-wrp hidden lg:block">04</div>
                            <img
                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]" src="./images/design/des-1.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div className="sm:pt-0 pt-4">
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

                        <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                            <Link to={ROUTER.ALIO}>
                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                    <img
                                        className="design-scale-img w-auto h-full object-cover" src="./images/design/des-1.png"
                                        alt="logo"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
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
                        <div className="md:flex flex-row gap-5 lg:gap-6 w-full py-5">
                            <div className="heading_3 cursor-text-wrp hidden lg:block">05</div>
                            <img
                                className="w-full md:w-[50%] block lg:hidden md:max-w-[214px]" src="./images/design/mydes3.png"
                                alt="logo"
                                loading="lazy"
                            />
                            <div className="sm:pt-0 pt-4">
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

                        <div className="md:flex flex-row justify-end relative w-[40%] sm:w-[25%] lg:w-full">
                            <Link to={ROUTER.FASHION}>
                                <div className="design-scale-wrp absolute h-full hidden lg:block">
                                    <img
                                        className="design-scale-img w-auto h-full object-cover" src="./images/design/mydes3.png"
                                        alt="logo"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
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
            </div> */}

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
            <div class="colorDiv py-7 w-full justify-center flex">
                <div className="lg:w-[50%]">

                    <div className="text-[60px] leading-[130%] mb-4">Unleashing My Potential</div>
                    <div class="body_text">If you are a recruiter or hiring manager, I would love to connect with you! Please feel free to reach out with any questions or potential opportunities.</div>
                    <div className="flex justify-center w-full">
                        <div className="mt-6 bg-black py-2 px-6 rounded-[60px] text-white">
                            <Link to={ROUTER.CONTACT} className="scroll-text" data-replace="CONTACT WITH ME">
                                <span>
                                    CONTACT WITH ME
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Designs;