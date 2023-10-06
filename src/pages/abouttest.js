import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ROUTER} from "../utils/constants";
import Aguri from "./aguri";

const  Abouttest = () => {
    return (
        <div className="new-about">
            <div className="welcome-abt">
                <div className="container-fluid welcome-abt-inner">
                    <div className="row">
                        <div className="col-6">
                            <div className="heading_1">WELCOME</div>
                        </div>
                        <div className="col-6">
                            <div className="text-large-2 ml-4">to</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div className="d-flex">
                                <div className="text-large-2 mr-4">my</div>
                                <div className="heading_1">CREATIVE</div>
                            </div>
                            <div className="mt-4">
                                <img className="w-100" src="./images/about/welcome1.png" alt="smile" loading="lazy"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="heading_1 ml-4">DESIGN</div>
                                    <div className="heading_1 ml-4">WORLD</div>
                                </div>
                                <div className="col-6 welcome-img2">
                                    <div className="img-inner">
                                        <img className="" src="./images/about/welcome2.png" alt="smile" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row welcome-content">
                                <div className="col-4"></div>
                                <div className="col-8 my-content">
                                    <div className="content-inner">At just 24 years old, I was always driven to find my true passion in life. After
                                        trying a few different jobs, I discovered UX/UI design and suddenly everything
                                        fell into place. I realized that this was my true passion and I was determined
                                        to pursue a career in this field. Although I am relatively new to this industry,
                                        I have worked hard to learn a lot during the past 2 years.
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
export default Abouttest;