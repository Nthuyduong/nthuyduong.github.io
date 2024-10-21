import React, { useState, useEffect } from "react";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";

const Workout = () => {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="project-item alio1">
                    <img className="w-100" src="./images/Pj06_workout/workout-banner.png" loading="lazy" />
                </div>
                <div className="project-item md:pb-8 pb-4 bg-black md:mb-6 mb-4">
                    <div className="md:px-8 px-4 md:py-6 py-4">
                        <div className="heading_1 text-white pb-7">
                            <div>FITNIXY — stylish, durable workout gear for women who push limits!</div>
                        </div>
                        <div className="grid grid-cols-12 gap-3 text-white">
                            <div className="col-span-12 md:col-span-3">
                                <div className="small_text">E-Commerce Website</div>
                                <div className="small_text py-2">Designer Duong Thuy</div>
                                <div className="small_text">Year 2024</div>
                            </div>
                            <div className="col-span-12 md:col-span-9">
                                <div className="grid grid-cols-8 gap-7">
                                    <div className="col-span-8 md:col-span-4">
                                        <div className="body_text">
                                            Welcome to FITNIXY, where performance meets style in women's workout wear. Our goal is to empower women to feel confident and unstoppable, offering high-quality, durable clothing for any active lifestyle. Whether you're lifting weights, practicing yoga, or going for a run, FITNIXY stylish designs have you covered.
                                        </div>
                                    </div>
                                    <div className="col-span-8 md:col-span-4">
                                        <div className="body_text">
                                            Each piece is crafted for comfort, breathability, and durability, so you can focus on pushing your limits. At FITNIXY, we believe workout clothes should inspire you to move, combining function and fashion effortlessly. Explore our collection and find your new favorite workout gear today!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-item alio3 md:pb-6 pb-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 r3-left mb-4 md:mb-0 relative">
                            <img className="w-100" src="./images/Pj06_workout/workoutbg.png" loading="lazy" />
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <img className="w-full" src="./images/Pj06_workout/fitnixy-white.png" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 r3-right flex items-end bg-primary">
                            <div className="p-5 md:p-7">
                                <div className="heading_4 mb-3 md:mb-6">The Logotype</div>
                                <div className="body_text">
                                    The FITNIXY logo artfully combines a sleek 'F' with the infinity symbol, representing limitless potential and endurance. This design embodies our mission to empower women to push past boundaries, embracing their strength both physically and mentally. The infinity symbol reflects the idea of continuous growth and relentless pursuit of personal goals. FITNIXY is more than just workout gear—it's a celebration of resilience, empowerment, and the endless possibilities that come with pushing beyond limits.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-item alio3 md:pb-6 pb-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6">
                            <img className="w-100" src="./images/Pj06_workout/logo1.png" loading="lazy" />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <img className="w-100" src="./images/Pj06_workout/logo2.png" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="project-item alio3 md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj06_workout/workout-img1.png" loading="lazy" />
                </div>
                <div className="project-item alio3">
                    <img className="w-100" src="./images/Pj06_workout/product.webp" loading="lazy" />
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
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.BEAUTYBLOG}>
                                    <img className="w-100" src="./images/home/more-5.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.BEAUTYBLOG}>
                                            Beauty Blog
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                Welcome to my Beauty Blog! Find skincare tips, makeup tutorials, and the latest beauty trends for radiant skin.
                                </div>
                            </div>
                        </div>
                        <div className="more-1">
                            <div className="img-des">
                                <Link to={ROUTER.AGURI}>
                                    <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.AGURI}>
                                            Aguri Jewellery Website
                                        </Link>
                                    </div>

                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.FASHION}>
                                    <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.FASHION}>
                                            Verite Fashion App
                                        </Link>
                                    </div>

                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                                </div>
                            </div>
                        </div>
                        <div className=" more-2">
                            <div className="img-des">
                                <Link to={ROUTER.CAKE}>
                                    <img className="w-100" src="./images/home/more-4.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.CAKE}>
                                            Season Cake Blog
                                        </Link>
                                    </div>

                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Workout;