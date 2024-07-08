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
        <div className="section">
            <div className="md:text-[120px] bighead">404</div>
        </div>
    )
}

export default NotFound;

