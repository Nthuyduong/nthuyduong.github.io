import React, { useRef, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }) => {

    const ref = useRef(null);

    useLayoutEffect(() => {
        let sections = gsap.utils.toArray(ref.current.children);

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * ( sections.length - 1 ),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-scroll",
                pin: true,
                start: "center center",
                scrub: true,
                end: () =>  "+=" + (ref.current.offsetWidth),
                // markers: true,
                invalidateOnRefresh: true,
            }
        });
    }, [])

    return (
        <div className="horizontal-scroll">
            <div ref={ref} className="flex gap-4">
                {children}
            </div>
        </div>
    )
}

export default HorizontalScroll;