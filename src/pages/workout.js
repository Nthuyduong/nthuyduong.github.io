import React, { useState, useEffect } from "react";
import { ROUTER } from "../utils/constants";

const Workout = () => {
    return (
        <div className="container-fluid">
            <div>
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
                
            </div>
        </div>
    )
}
export default Workout;