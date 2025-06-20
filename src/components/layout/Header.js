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


  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <>
      <div ref={headerMobileRef} className={`sticky header-mobile inset-y-0 left-0 flex items-center flex-col w-full border-b border-solid border-ccc ${openMobileMenu ? 'header-mobile-open' : 'header-close'}`}>
        {/*Mobile menu button*/}
        <div
          className="mobile-menu-btn w-full relative inline-flex items-center justify-center rounded-md py-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <div className="section w-full">
            <div className="flex gap-1 w-full justify-between">
              <div>
                <Link to="/" className="nav-text">
                <img className="" src="./images/ntdlg.svg" alt="logo" />
                </Link>
              </div>
              {/* <img className='btn-header-mobile' src="/images/arrow-down.png" alt="" /> */}
              {/*<div className="w-[100vw] flex items-center justify-center absolute">*/}
              {/*  <div className="">Thuy Duong - Product Designer</div>*/}
              {/*</div>*/}
              <div className="header-close-wrp justify-center" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                <div className="header-close header-close-1" ></div>
                <div className="header-close header-close-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col header-mobile-menu py-5" style={{ "--delay": !openMobileMenu ? "450ms" : '0ms' }}>
          <div>
            <div className="section w-full">
              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "500ms" : '0ms' }} className={`text-center header-text f-menu cursor-text-wrp ${currentPath === '/' ? 'nav-active' : ''}`} aria-current="page">
                  <div className="flex justify-center items-baseline">
                    <span className="heading_6 pr-3 text-color-muted">01.</span>
                    <Link to="/" className="nav-text">Home</Link>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "600ms" : '100ms' }} className={`py-3 text-center header-text cursor-text-wrp ${currentPath === ROUTER.ABOUT ? 'nav-active' : ''}`} aria-current="page">
                  <div className="flex justify-center items-baseline">
                    <Link to={ROUTER.ABOUT} className="nav-text">About</Link>
                    <div className="heading_6 pl-3 text-color-muted">02.</div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "600ms" : '100ms' }} className={`pb-3 text-center header-text cursor-text-wrp ${currentPath === ROUTER.DESIGNS ? 'nav-active' : ''}`} aria-current="page">
                  <div className="flex justify-center items-baseline">
                    <span className="heading_6 pr-3 text-color-muted">03.</span>
                    <Link to={ROUTER.DESIGNS} className="nav-text">My Projects</Link>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "800ms" : '300ms' }} className={`text-center header-text cursor-text-wrp ${currentPath === ROUTER.CONTACT ? 'nav-active' : ''}`} aria-current="page">
                  <div className="flex justify-center items-baseline">
                    <Link to={ROUTER.CONTACT} className="nav-text">Contact</Link>
                    <span className="heading_6 pl-3 text-color-muted">04.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-social overflow-hidden">
            <div className="w-full flex justify-center mt-[120px] mb-[10px]" style={{ "--delay": openMobileMenu ? "900ms" : '350ms' }}>
              <div className="heading_4">
                <a className="text-link" target="_blank" href="https://www.instagram.com/nth_d9/">Instagram</a>
              </div>
              <div className="heading_4 mx-5">
                <a className="text-link" target="_blank" href="https://www.behance.net/duongthuy13">Behance</a>
              </div>
              <div className="heading_4">
                <a className="text-link" target="_blank" href="https://www.facebook.com/nthuyduong15113/">Facebook</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Header;