import React, { useRef, useEffect, useState } from "react";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Naviga = () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const headerRef = useRef(null);
    const headerMobileRef = useRef(null);
    

    const projects = [
        ROUTER.AGURI,
        ROUTER.ALIO,
        ROUTER.CAKE,
        ROUTER.FASHION,
        ROUTER.BEAUTYBLOG,
    ]

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openNavDropdown, setOpenNavDropdown] = useState(false);

    useEffect(() => {
        setOpenMobileMenu(false);
        setOpenNavDropdown(false);
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


    let prevScrollpos = 0;

    const controlNavbar = () => {
        var currentScrollPos = window.pageYOffset;
        if (headerRef.current) {
            if (prevScrollpos > currentScrollPos) {
                headerRef.current.style.top = "0";
                headerMobileRef.current.style.top = "0";
            } else {
                headerRef.current.style.top = "-75px";
                headerMobileRef.current.style.top = "-105px";
                setOpenMobileMenu(false);
                setOpenNavDropdown(false);
            }
            prevScrollpos = currentScrollPos;
        }
    }

    const nextProject = () => {
        const naviga = document.querySelector('.naviga-wrp');
        const index = projects.indexOf(pathname);
        naviga.setAttribute('data-action', 'next');
        if (index >= 0 && index < projects.length - 1) {
            history.push(projects[index + 1]);
        } else {
            history.push(projects[0]);
        }
    }

    const prevProject = () => {
        const naviga = document.querySelector('.naviga-wrp');
        naviga.setAttribute('data-action', 'prev');
        const index = projects.indexOf(pathname);
        if (index > 0) {
            history.push(projects[index - 1]);
        } else {
            history.push(projects[projects.length - 1]);
        }
    }

    return (
        <>
            <div ref={headerMobileRef} className={`sticky header-mobile inset-y-0 left-0 flex items-center md:hidden flex-col w-full ${openMobileMenu ? 'header-mobile-open' : ''}`}>
                {/*Mobile menu button*/}
                <div className="w-full flex flex-col header-mobile-menu py-4">
                    <Link to="/" className="cursor-text-wrp text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 text-4xl font-medium" aria-current="page">Home</Link>
                </div>
            </div>
            <div ref={headerRef} className="naviga-wrp container-fluid my-header sticky flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden w-full md:block">
                    <div className="flex items-center justify-center w-full">
                        <div onClick={prevProject}><img className="icon-ssm img-smile" src="./images/icons/previous-page.svg" alt="smile" loading="lazy" /></div>
                        <div className="mx-auto px-4 py-4">
                            <Link to={ROUTER.DESIGNS} className="cursor-text-wrp text-sm scroll-text" data-replace="BACK TO ALL RPOJECTS" aria-current="page">
                                <span className="">BACK TO ALL PROJECTS
                                </span>
                            </Link>
                        </div>
                        <div onClick={nextProject}><img className="icon-ssm img-smile" src="./images/icons/next-page.svg" alt="smile" loading="lazy" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Naviga;