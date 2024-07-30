import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { ROUTER } from "../utils/constants";

const AnimationContext = createContext();
const router = [ROUTER.ABOUT, ROUTER.ABOUTTEST, ROUTER.HOME, ROUTER.CONTACT]

export const AnimationProvider = ({ children }) => {
    
    const { pathname } = useLocation();

    useEffect(() => {
        const handleAccordion = () => {
            const arrcordions = document.querySelectorAll('.my-collapse');

            arrcordions.forEach((accordion) => {
                if (accordion.classList.contains('expanded')) {
                    const content = accordion.querySelector('.content-container');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }

                accordion.addEventListener('click', function(e) {
                    const parent = e.target.closest('.my-collapse');
                    
                    if (parent) {
                        const content = parent.querySelector('.content-container');
                        if (parent.classList.contains('expanded')) { 
                            parent.classList.remove('expanded');
                            content.style.maxHeight = '0px';
                        } else {
                            arrcordions.forEach((collapse, i) => {
                                collapse.classList.remove('expanded');
                                collapse.querySelector('.content-container').style.maxHeight = '0px';
                            });
                            parent.classList.add('expanded');
                            content.style.maxHeight = content.scrollHeight + 'px';
                        }
                    }
                });
            });
        }
        handleAccordion();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Force a reflow
                    void entry.target.offsetWidth;
                    entry.target.classList.add('animated');
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        let animates = document.querySelectorAll('.animate');
        animates.forEach((animate) => {
            observer.observe(animate);
        })
        let loop;
        if (showCursor()) {
            loop = handleCursor();
        }
        
        return () => {
            animates.forEach((animate) => {
                observer.unobserve(animate);
            });
            if (showCursor()) {
                clearInterval(loop);
                var cursor = document.getElementById('custom-cursor');
                var follower = document.getElementById('custom-follow');
                cursor.classList.add('hidden-cursor');
                follower.classList.add('hidden-cursor');
            }
        }
    }, [pathname]);

    const handleCursor = () => {

        var cursor = document.getElementById('custom-cursor');
        var follower = document.getElementById('custom-follow');



        var mouseX = window.innerWidth / 2;
        var mouseY = window.innerHeight / 2;

        if (!cursor) return;

        document.addEventListener('mousemove', moveCursor);

        function moveCursor(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

            if (cursor.classList.contains('hidden-cursor')) {
                cursor.classList.remove('hidden-cursor');
                follower.classList.remove('hidden-cursor');
            }
        }

        var xp = window.innerWidth / 2, yp = window.innerHeight / 2;

        var loop = setInterval(function(){
            // change 12 to alter damping higher is slower
            xp += (mouseX - xp) / 5;
            yp += (mouseY - yp) / 5;
            follower.style.left = xp + 'px';
            follower.style.top = yp + 'px';
        }, 20);

        var text = Array.from(document.querySelectorAll('p, span, body_text, .cursor-text-wrp'));  

        text.forEach(text => {
            text.addEventListener('mousemove', function() {
                cursor.classList.add('custom-cursor-hidden');
                follower.classList.add('cursor-text');
            })
            text.addEventListener('mouseleave', function () {
                cursor.classList.remove('custom-cursor-hidden');
                follower.classList.remove('cursor-text');
            })
        })

        var images = Array.from(document.querySelectorAll('img'));
        images.forEach(image => {
            image.addEventListener('mousemove', function () {
                cursor.classList.add('custom-cursor-hidden');
                follower.classList.add('cursor-img');
            })

            image.addEventListener('mouseleave', function () {
                cursor.classList.remove('custom-cursor-hidden');
                follower.classList.remove('cursor-img');
            })
        })

        var images = Array.from(document.querySelectorAll('input'));
        images.forEach(image => {
            image.addEventListener('mousemove', function () {
                cursor.classList.add('custom-cursor-hidden');
                follower.classList.add('cursor-input');
            })

            image.addEventListener('mouseleave', function () {
                cursor.classList.remove('custom-cursor-hidden');
                follower.classList.remove('cursor-input');
            })
        })

        // var drags = Array.from(document.querySelectorAll('.drag'));
        // drags.forEach(drag => {
        //     drag.addEventListener('mousemove', function () {
        //         cursor.classList.add('custom-cursor-hidden');
        //         follower.classList.add('cursor-drag');
        //     })

        //     drag.addEventListener('mouseleave', function () {
        //         cursor.classList.remove('custom-cursor-hidden');
        //         follower.classList.remove('cursor-drag');
        //     })
        // })

        return loop;
    }
    const showCursor = () => {
        return true;
    }
    return (
        <AnimationContext.Provider value={null}>
            {showCursor() ? (
                <div className="animation-wrp">
                    {children}
                    <div
                        id="custom-cursor"
                        className="custom-cursor hidden-cursor"
                        style={{ left: '50%', top: "50%" }}
                    ></div>
                    <div
                        id="custom-follow"
                        className="custom-follow hidden-cursor"
                        style={{ left: '50%', top: "50%" }}
                    ></div>
                </div>
            ) : (
                <>{children}</>
            )}
            
        </AnimationContext.Provider>
    )
};

export const useAnimationContext = () => useContext(AnimationContext);