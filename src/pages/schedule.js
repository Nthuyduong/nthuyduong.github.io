import React, { useState, useEffect } from "react";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";

const Schedule = () => {
    return (
        <div className="cake-page">
            <div className="container-fluid">
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/schedule01.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/schedule-abt.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100 w-full" src="./images/Pj08_schedule/problem.webp" alt="#"
                                 loading="lazy" height={500} width={500}/>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100 w-full" src="./images/Pj08_schedule/goal.webp" alt="#"
                                 loading="eager" height={500} width={500}/>
                        </div>
                    </div>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100 w-full" src="./images/Pj08_schedule/feature-l.webp" alt="#"
                                 loading="lazy"/>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100 w-full" src="./images/Pj08_schedule/feature-r.webp" alt="#"
                                 loading="eager" height={500} width={500}/>
                        </div>
                    </div>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/persona.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/journey-map.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/schedule02.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100" src="./images/Pj08_schedule/sitemap-l.webp" alt="#" loading="lazy"/>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100 w-full" src="./images/Pj08_schedule/sitemap-r.webp" alt="#"
                                 loading="eager" height={500} width={500}/>
                        </div>
                    </div>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/user-flow.png" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/wireframe.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/app-flow.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/typography.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/Color-palette.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/schedule-mockup.webp" loading="lazy"/>
                </div>
                <div className="project-item md:pb-6 pb-4">
                    <img className="w-100" src="./images/Pj08_schedule/web-mockup.webp" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}
export default Schedule;