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
                            <img className="w-100" src="./images/Pj08_schedule/feature-l.webp" alt="#" loading="lazy"/>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <img className="w-100 w-full" src="./images/Pj08_schedule/feature-r.webp" alt="#"
                                 loading="eager" height={500} width={500}/>
                        </div>
                    </div>
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
            </div>
        </div>
    )
}
export default Schedule;