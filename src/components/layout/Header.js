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
      <div ref={headerMobileRef} className={`sticky header-mobile inset-y-0 left-0 flex items-center sm:hidden flex-col w-full border-b border-ccc border-solid ${openMobileMenu ? 'header-mobile-open' : ''}`}>
        {/*Mobile menu button*/}
        <div
          className="mobile-menu-btn w-full relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <div className="flex gap-1">
            Menu
            <img className='btn-header-mobile' src="/images/arrow-down.png" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col header-mobile-menu py-4">
          <Link to="/" className="cursor-text-wrp text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 text-4xl font-medium" aria-current="page">Home</Link>
          <Link to={ROUTER.ABOUT} className="cursor-text-wrp text-gray-300 hover:text-white rounded-md px-3 text-4xl font-medium">About</Link>
          <div className="header-nav-item relative header-mobile-navdrop px-3">
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

          <Link to={ROUTER.CONTACT} className="text-gray-300 hover:text-white rounded-md px-3 text-4xl font-medium cursor-text-wrp">Contact</Link>
        </div>
      </div>
      <div ref={headerRef} className="my-header sticky flex flex-1 items-center justify-center sm:items-stretch sm:justify-start border-b border-ccc border-solid">
        <div className="hidden w-full md:block">
          <div className="flex space-x-4 justify-center w-full">
            {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
            <Link to="/" className="cursor-text-wrp hover:bg-gray-700 rounded-md px-3 py-4 text-sm scroll-text" data-replace="HOME" aria-current="page">HOME</Link>
            <Link to={ROUTER.ABOUT} className="navdrop-title cursor-text-wrp rounded-md px-3 py-4 text-sm scroll-text" data-replace="ABOUT">
              ABOUT
            </Link>
            {/* Dropdown menu */}
            <div className="header-nav-item relative header-navdrop">
              <div className="navdrop-title z-50 rounded-md pr-3 py-4">
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

            <Link to={ROUTER.CONTACT} className="rounded-md px-3 py-4 text-sm cursor-text-wrp">Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;