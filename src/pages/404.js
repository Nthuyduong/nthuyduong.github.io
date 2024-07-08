import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";
import { useHistory } from "react-router-dom";

const NotFound = () => {

    // const history = useHistory(); // Initialize useHistory hook

    // useEffect(() => {
    //     history.replace("/404"); // Replace the current URL with "/404"
    // }, [history]);

    return (
        <div className="section lg:pt-7 pt-6">
            <div className="mb-7">
                <div className="bighead mb-3">404</div>
                <div className="heading_3 mb-3">There’s no light in here</div>
                <div className="body_text">“The page were looking for doesn’t exit. You may have mistyped the address or the page may have moved”</div>
            </div>
            <div className="">
                <div className="md:mb-7 mb-6">
                    <div className="flex">
                        <div className="">
                            <Link to={ROUTER.HOME} className="scroll-text md:text-[50px] text-[32px]" data-replace="Back home">
                                <span>
                                    Back home
                                </span>
                            </Link>
                        </div>
                        <div className="ml-1 md:ml-2">
                            <img className="md:h-[80px] h-[60px] w-full" src="./images/icons/arrow-up-right-l.svg" alt="logo" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;

