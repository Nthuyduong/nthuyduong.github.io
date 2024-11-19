import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";

const Architec = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj07_architec/archi-home.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="product-item md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src="./images/Pj07_architec/home.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end bg-[#FFFDF8]">
                                <div className="p-7">
                                    <div className="heading_4 mb-6">About</div>
                                    <div className="body_text mb-2">
                                        Welcome to ArchiHub, your premier architectural design company. We specialize in
                                        innovative and sustainable designs that
                                        transform spaces and enhance lifestyles. Our experienced team is dedicated to
                                        bringing
                                        your vision to life across residential, commercial, and public projects,
                                        ensuring that
                                        each design balances functionality with aesthetics.
                                    </div>
                                    <div className="body_text">
                                        At ArchiHub, we believe great architecture goes beyond buildings; it creates
                                        inspiring environments that foster
                                        connection. Explore our portfolio to see our diverse projects, and discover
                                        how we can partner with you to turn your dreams into reality and create spaces
                                        that resonate with beauty and purpose.
                                    </div>
                                    {/* <div className="small_text text-right font-italic">
                                        <a href="https://nthuyduong.github.io/CakeBlog/#/" target="_blank">Comming soon: https://nthuyduong.github.io/CakeBlog/#/</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-item md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src="./images/Pj07_architec/archi-phone.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end bg-[#FFFDF8]">
                                <img className="w-100" src="./images/Pj07_architec/archi-pic.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj07_architec/archi-project.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj07_architec/archi-abt.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="project-item">
                        <img className="w-100" src="./images/Pj07_architec/archi-mobi.png" alt="#" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="more-project md:mb-8 mb-4">
                <div className="container-fluid">
                    <Slider
                        configs={{
                            sliderPerRow: 3.5,
                            sliderPerRowMobile: 1.25,
                            allowDrag: true,
                            duration: 400,
                            auto: false,
                            autoDuration: 1000,
                            gap: 30,
                            gapMobile: 10,
                            process: false,
                            paginate: false,
                            navigator: false,
                            active: 0
                        }}
                    >
                        <div className="more-1">
                            <div className="img-des">
                                <Link to={ROUTER.AGURI}>
                                    <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.AGURI}>
                                            Aguri Jewellery Website
                                        </Link>
                                    </div>
                                    {/* <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} /> */}
                                </div>
                                <div className="w-full body_text pj_intro text-color-muted mt-4">
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite
                                    craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.WORKOUT}>
                                    <img className="w-100" src="./images/home/more-6.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.WORKOUT}>
                                            Workout Clothes Website
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Explore our workout clothes designed for comfort, performance, and effortless style.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.FASHION}>
                                    <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.FASHION}>Verite Fashion App</Link>
                                    </div>
                                </div>
                                <div className="w-full body_text pj_intro text-color-muted mt-4">
                                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and
                                    sophistication.
                                </div>
                            </div>
                        </div>
                        <div className="more-2">
                            <div className="img-des">
                                <Link to={ROUTER.ALIO}>
                                    <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.ALIO}>Alio Yoga Website</Link>
                                    </div>

                                </div>
                                <div className=" w-full body_text pj_intro text-color-muted mt-4">
                                    Discover a serene oasis at our Yoga, Pilates, and Meditation website, where
                                    tranquility awaits.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.BEAUTYBLOG}>
                                    <img className="w-100" src="./images/home/more-5.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.BEAUTYBLOG}>
                                            Beauty Blog
                                        </Link>
                                    </div>
                                    {/* <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} /> */}
                                </div>
                                <div className="w-full body_text pj_intro text-color-muted mt-4">
                                    Welcome to my Beauty Blog! Find skincare tips, makeup tutorials, and the latest
                                    beauty trends for radiant skin.
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    )
}
export default Architec;