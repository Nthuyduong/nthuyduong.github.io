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
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <div className="section w-full">
            <div className="flex gap-1 w-full justify-between">
              <div>
                <img className="" src="./images/mylogo.svg" alt="logo" />
              </div>
              {/* <img className='btn-header-mobile' src="/images/arrow-down.png" alt="" /> */}

              <div className="header-close-wrp justify-center">
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
                <div style={{ "--delay": openMobileMenu ? "500ms" : '0ms' }} className="text-center header-text f-menu cursor-text-wrp" aria-current="page">
                  <Link to="/"><span className="heading_6 pr-3">01.</span>Home</Link>
                </div>
              </div>
              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "600ms" : '100ms' }} className={`py-3 text-center header-text cursor-text-wrp ${currentPath === ROUTER.ABOUT ? 'nav-active' : ''}`} aria-current="page">
                  <Link to={ROUTER.ABOUT}>About<span className="heading_6 pl-3">02.</span></Link>
                </div>
              </div>
              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "600ms" : '100ms' }} className={`pb-3 text-center header-text cursor-text-wrp ${currentPath === ROUTER.DESIGNS ? 'nav-active' : ''}`} aria-current="page">
                  <Link to={ROUTER.DESIGNS}><span className="heading_6 pr-3">03.</span>My Projects</Link>
                </div>
              </div>

              <div className="overflow-hidden">
                <div style={{ "--delay": openMobileMenu ? "800ms" : '300ms' }} className={`text-center header-text cursor-text-wrp ${currentPath === ROUTER.CONTACT ? 'nav-active' : ''}`} aria-current="page">
                  <Link to={ROUTER.CONTACT}>Contact<span className="heading_6 pl-3">04.</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center mt-[120px]">
              <div className="heading_4">
                <Link>Instagram</Link>
              </div>
              <div className="heading_4 mx-5">
                <Link>Behance</Link>
              </div>
              <div className="heading_4">
                <Link>Facebook</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Header;