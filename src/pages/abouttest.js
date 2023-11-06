import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ROUTER} from "../utils/constants";
import Aguri from "./aguri";

const  Abouttest = () => {
    return (
        <div className="new-about pt-4">
            <div className="welcome-abt">
                <div className="container-fluid welcome-abt-inner">
                    <div className="row my-row">
                        <div className="col-6 raw-col about-banner-left">
                            <div className="heading_1 my-h">WELCOME</div>
                            <div className="row">
                                <div className="set-columns col-2"></div>
                                <div className="set-columns col-10">
                                    <div className="d-flex mt-2">
                                        <div className="my-h text-large-2 mr-4">my</div>
                                        <div className="my-h heading_1">CREATIVE</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="set-columns col-4 d-flex">
                                    <div className="f-left">
                                        <img className="w-100" src="./images/about/welcome3.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                </div>
                                <div className="set-columns col-8">
                                    <div className="mt-4">
                                        <img className="w-100" src="./images/about/welcome1.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 raw-col about-banner-right">
                            <div className="row my-row">
                                <div className="set-columns col-6">
                                    <div>
                                        <div className="my-h text-large-2 ml-4">to</div>
                                        <div className="my-h heading_1 ml-4 my-3">DESIGN</div>
                                        <div className="my-h heading_1 ml-4">WORLD</div>
                                    </div>
                                </div>
                                <div className="set-columns col-6 f-right">
                                    <div className="img-inner">
                                        <img className="" src="./images/about/welcome2.png" alt="smile" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-row abt-banner-right-bt">
                                <div className="set-columns col-6">
                                    <div className="col-8">
                                        <div>
                                            <img className="w-100" src="./images/about/welcome4.jpg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                    </div>
                                </div>
                                <div className="col-6 my-content">
                                    <div className="content-inner">"Hello and welcome to my website! I'm eager to share
                                        with you some of my UX/UI design projects and experiences. As an aspiring professional,
                                        I'm dedicated to continuous learning and growth in this field. If you're a recruiter
                                        or hiring manager interested in my skills and experience, I'd love to connect with you.
                                        Please feel free to reach out if you have any questions or if you'd like to discuss
                                        potential opportunities. Thank you for visiting my portfolio!"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-row">
                        {/*<div className="set-columns col-2">*/}
                        {/*    /!*<div>*!/*/}
                        {/*    /!*    <img className="w-100" src="./images/about/welcome3.jpg" alt="smile" loading="lazy"/>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}
                        {/*<div className="set-columns col-4">*/}
                        {/*    /!*<div className="d-flex">*!/*/}
                        {/*    /!*    <div className="text-large-2 mr-4">my</div>*!/*/}
                        {/*    /!*    <div className="heading_1">CREATIVE</div>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*    /!*<div className="mt-4">*!/*/}
                        {/*    /!*    <img className="w-100" src="./images/about/welcome1.jpg" alt="smile" loading="lazy"/>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}
                        <div className="set-columns col-6">
                            <div className="row">
                                {/*<div className="set-columns col-6">*/}
                                {/*    <div className="heading_1 ml-4">DESIGN</div>*/}
                                {/*    <div className="heading_1 ml-4">WORLD</div>*/}
                                {/*</div>*/}
                                {/*<div className="set-columns col-6 welcome-img2">*/}
                                {/*    <div className="img-inner">*/}
                                {/*        <img className="" src="./images/about/welcome2.png" alt="smile" loading="lazy"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            {/*<div className="row my-row welcome-content">*/}
                            {/*    <div className="set-columns col-4">*/}
                            {/*        <div>*/}
                            {/*            <img className="w-100" src="./images/about/welcome4.jpg" alt="smile" loading="lazy"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    /!*<div className="set-columns col-8 my-content">*!/*/}
                            {/*    /!*    <div className="content-inner">At just 24 years old, I was always driven to find my true passion in life. After*!/*/}
                            {/*    /!*        trying a few different jobs, I discovered UX/UI design and suddenly everything*!/*/}
                            {/*    /!*        fell into place. I realized that this was my true passion and I was determined*!/*/}
                            {/*    /!*        to pursue a career in this field. Although I am relatively new to this industry,*!/*/}
                            {/*    /!*        I have worked hard to learn a lot during the past 2 years.*!/*/}
                            {/*    /!*    </div>*!/*/}
                            {/*    /!*</div>*!/*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Abouttest;