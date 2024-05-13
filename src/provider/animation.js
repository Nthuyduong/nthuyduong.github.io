import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { ROUTER } from "../utils/constants";

const AnimationContext = createContext();
const router = [ROUTER.ABOUT, ROUTER.ABOUTTEST, ROUTER.HOME, ROUTER.CONTACT]

export const AnimationProvider = ({ children }) => {
    
    const { pathname } = useLocation();

    useEffect(() => {
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
        if (router.includes(pathname)) {
            handleCursor();
        }
        
        return () => {
            animates.forEach((animate) => {
                observer.unobserve(animate);
            });
            if (router.includes(pathname)) {
                handleCursor();
            }
        }
    }, [pathname]);

    const handleCursor = () => {
        var cursor = document.getElementById('custom-cursor');
        if (!cursor) return;

        document.addEventListener('mouseover', () => {
            cursor.style.opacity = 1;
        })
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = 0;
        })

        document.addEventListener('mousemove', moveCursor)


        function moveCursor(e) {
            let x = e.clientX;
            let y = e.clientY;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        }

        var text = Array.from(document.querySelectorAll('p, span, body_text, .cursor-text-wrp'));
        console.log(text);

        text.forEach(text => {
            text.addEventListener('mousemove', function() {
                cursor.classList.add('cursor-text');
            })
            text.addEventListener('mouseleave', function () {
                cursor.classList.remove('cursor-text');
            })
        })

        var images = Array.from(document.querySelectorAll('img'));
        images.forEach(image => {
            image.addEventListener('mousemove', function () {
                cursor.classList.add('cursor-img');
            })

            image.addEventListener('mouseleave', function () {
                cursor.classList.remove('cursor-img');
            })
        })

        var images = Array.from(document.querySelectorAll('input'));
        images.forEach(image => {
            image.addEventListener('mousemove', function () {
                cursor.classList.add('cursor-input');
            })

            image.addEventListener('mouseleave', function () {
                cursor.classList.remove('cursor-input');
            })
        })
    }

    return (
        <AnimationContext.Provider value={null}>
            {router.includes(pathname) ? (
                <div className="animation-wrp">
                    {children}
                <div id="custom-cursor" className="custom-cursor"></div>
            </div>
            ) : (
                <>{children}</>
            )}
            
        </AnimationContext.Provider>
    )
};

export const useAnimationContext = () => useContext(AnimationContext);