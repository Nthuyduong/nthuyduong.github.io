import React, { useRef, useEffect, useState } from "react";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {
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
    if (headerMobileRef.current) {
      if (prevScrollpos > currentScrollPos) {
        headerMobileRef.current.style.top = "0";
      } else {
        headerMobileRef.current.style.top = "-105px";
        setOpenMobileMenu(false);
        setOpenNavDropdown(false);
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
    <>
      <div ref={headerMobileRef} className={`sticky header-mobile inset-y-0 left-0 flex items-center flex-col w-full border-b border-ccc border-solid ${openMobileMenu ? 'header-mobile-open' : ''}`}>
        {/*Mobile menu button*/}
        <div
          className="mobile-menu-btn w-full relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <div className="section w-full">
            <div className="flex gap-1 w-full justify-between">
              <span>Menu</span>
              {/* <img className='btn-header-mobile' src="/images/arrow-down.png" alt="" /> */}
              <div className="header-close-wrp justify-center">
                <div className="header-close header-close-1" ></div>
                <div className="header-close header-close-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col header-mobile-menu py-6" style={{"--delay" : !openMobileMenu ? "450ms" : '0ms'}}>
          <div className="section w-full">
            <div className="overflow-hidden">
              <div style={{"--delay" : openMobileMenu ? "500ms": '0ms'}} className="header-text cursor-text-wrp text-gray-300 hover:bg-gray-700 rounded-md text-4xl font-medium" aria-current="page">
                <Link to="/">Home</Link>
              </div>
            </div>
            <div className="overflow-hidden">
              <div style={{"--delay" : openMobileMenu ? "600ms": '100ms'}} className="header-text cursor-text-wrp text-gray-300 hover:bg-gray-700 rounded-md text-4xl font-medium" aria-current="page">
                <Link to={ROUTER.ABOUT}>About</Link>
              </div>
            </div>
            <div className="overflow-hidden">
              <div style={{"--delay" : openMobileMenu ? "600ms": '100ms'}} className="header-text cursor-text-wrp text-gray-300 hover:bg-gray-700 rounded-md text-4xl font-medium" aria-current="page">
                <Link to={ROUTER.DESIGNS}>Projects</Link>
              </div>
            </div>
            {/* <div className="overflow-hidden">
              <div style={{"--delay" : openMobileMenu ? "700ms": '200ms'}} className="header-text header-nav-item relative header-mobile-navdrop px-3">
                <div
                  className="navdrop-title z-50 text-gray-300 hover:text-gray rounded-md pr-3 flex w-full"
                  onClick={() => setOpenNavDropdown(!openNavDropdown)}
                >
                  <Link to={ROUTER.DESIGNS} className="text-4xl font-medium flex nav-link"><span className="nav-text">Projects</span></Link>
                  <span className="w-full">(04)</span>
                </div>
                <div className={`navdrop-mobile-inner left-30 w-48 ${openNavDropdown ? 'navdrop-mobile-inner-open' : ''}`}>
                  <div className="sub-menu block px-4 text-xl text-gray-700">
                    <Link to={ROUTER.AGURI} className="nav-link">Jewelry Website</Link>
                  </div>
                  <div className="sub-menu block px-4 text-xl text-gray-700">
                    <Link to={ROUTER.ALIO} className="nav-link">Yoga App & Website</Link>
                  </div>
                  <div className="sub-menu block px-4 text-xl text-gray-700">
                    <Link to={ROUTER.CAKE} className="nav-link">Cake Blog</Link>
                  </div>
                  <div className="sub-menu block px-4 text-xl text-gray-700">
                    <Link to={ROUTER.FASHION} className="nav-link">Fashion Brand App</Link>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="overflow-hidden">
              <div style={{"--delay" : openMobileMenu ? "800ms": '300ms'}} className="header-text cursor-text-wrp text-gray-300 hover:bg-gray-700 rounded-md text-4xl font-medium" aria-current="page">
                <Link to={ROUTER.CONTACT}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div ref={headerRef} className="my-header sticky flex flex-1 items-center justify-center sm:items-stretch sm:justify-start border-b border-ccc border-solid">
        <div className="hidden w-full md:block">
          <div className="flex space-x-4 justify-center w-full">
            <div className="px-4 py-4">
              <Link to="/" className="cursor-text-wrp text-sm scroll-text" data-replace="HOME" aria-current="page">
                <span className="">HOME
                </span>
              </Link>
            </div>
            <div className="px-4 py-4">
              <Link to={ROUTER.ABOUT} className="navdrop-title cursor-text-wrp rounded-md text-sm scroll-text" data-replace="ABOUT">
                <span className="">ABOUT</span>
              </Link>
            </div>
            <div className="header-nav-item relative header-navdrop">
              <div className="navdrop-title z-50 rounded-md pr-4 py-4">
                <Link to={ROUTER.DESIGNS} className="text-sm flex nav-link scroll-text" data-replace="PROJECTS">
                  <span className="nav-text">PROJECTS</span>
                </Link>
              </div>
              <div className="navdrop-inner absolute left-30 w-48 py-1 border-solid border-x border-b border-ccc">
                <div className="sub-menu block px-4 py-2 text-sm">
                  <Link to={ROUTER.AGURI} className="body_text nav-link">Jewelry Website</Link>
                </div>
                <div className="sub-menu block px-4 py-2 text-sm text-white">
                  <Link to={ROUTER.BEAUTYBLOG} className="body_text nav-link">Beauty Blog</Link>
                </div>
                <div className="sub-menu block px-4 py-2 text-sm text-white">
                  <Link to={ROUTER.ALIO} className="body_text nav-link">Yoga App & Website</Link>
                </div>
                <div className="sub-menu block px-4 py-2 text-sm text-white">
                  <Link to={ROUTER.CAKE} className="body_text nav-link">Cake Blog</Link>
                </div>
                <div className="sub-menu block px-4 py-2 text-sm text-white">
                  <Link to={ROUTER.FASHION} className="body_text nav-link">Fashion Brand App</Link>
                </div>
              </div> 
            </div>
            <div className="px-3 py-4">
              <Link to={ROUTER.CONTACT} className="rounded-md text-sm cursor-text-wrp scroll-text" data-replace="CONTACT">
                <span className="">
                  CONTACT
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  )
}

export default Header;