import React, { useRef, useEffect, useState } from "react";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Naviga = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const headerMobileRef = useRef(null);

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

    return (
        <>
            <div ref={headerMobileRef} className={`sticky header-mobile inset-y-0 left-0 flex items-center md:hidden flex-col w-full ${openMobileMenu ? 'header-mobile-open' : ''}`}>
                {/*Mobile menu button*/}

                <div className="w-full flex flex-col header-mobile-menu py-4">
                    <Link to="/" className="cursor-text-wrp text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 text-4xl font-medium" aria-current="page">Home</Link>
                </div>
            </div>
            <div ref={headerRef} className="container-fluid my-header sticky flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden w-full md:block">
                    <div className="flex items-center justify-center w-full">

                        <div><img className="icon-ssm img-smile" src="./images/icons/previous-page.svg" alt="smile" loading="lazy" /></div>

                        <div className="mx-auto px-4 py-4">
                            <Link to="/" className="cursor-text-wrp text-sm scroll-text" data-replace="BACK HOME" aria-current="page">
                                <span className="">BACK HOME
                                </span>
                            </Link>
                        </div>

                        <div><img className="icon-ssm img-smile" src="./images/icons/next-page.svg" alt="smile" loading="lazy" /></div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Naviga;