import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {ROUTER} from "../utils/constants";
import Slider from "../components/common/slider";

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
    }, []);

    return (
        <div className="project-page p-8">
            <div className="design-banner">
                <img src="/images/design/banner-design.png" alt="design-banner2" />
            </div>
        </div>
    )

}
export default Designs;