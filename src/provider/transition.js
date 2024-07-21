import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";

export const AnimationContext = createContext();

export const TransitionProvider = ({ children }) => {

    const location = useLocation();

    const handleTransitionSlideEnter = (node) => {
        
        const naviga = document.querySelector('.naviga-wrp');
        let moveX = -100;
        if (naviga) {
            const action = naviga.getAttribute('data-action');
            if (action === 'prev') {
                moveX = 100;
            }
        }
        
        gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: moveX });
        gsap
            .timeline({ paused: true })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.5 })
            .to(node, { scale: 1, duration: 0.25 })
            .play();
        const transitionWrp = document.querySelector('.transition-wrp');
        if (transitionWrp) {
            transitionWrp.style.overflow = 'unset';
            transitionWrp.style.height = 'auto';
        }
    }

    const handleTransitionSlideExit = (node) => {
        const transitionWrp = document.querySelector('.transition-wrp');
        if (transitionWrp) {
            transitionWrp.style.overflow = 'hidden';
            transitionWrp.style.height = 'calc(100vh - 72px)';
        }
        const naviga = document.querySelector('.naviga-wrp');
        let moveX = 100;
        if (naviga) {
            const action = naviga.getAttribute('data-action');
            if (action === 'prev') {
                moveX = -100;
            }
        }
        gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.8, duration: 0.2 })
            .to(node, { xPercent: moveX, autoAlpha: 0, duration: 0.5 })
            .play();
    }

    return (
        <AnimationContext.Provider value={{}}>
            <SwitchTransition>
                <Transition
                    key={location.pathname}
                    timeout={500}
                    onEnter={(node) => {
                        handleTransitionSlideEnter(node);
                    }}
                    onExit={(node) => {
                        handleTransitionSlideExit(node);
                    }}
                >
                    <div className="transition-wrp">
                        {children}
                    </div>
                </Transition>
            </SwitchTransition>
        </AnimationContext.Provider>
    )
};