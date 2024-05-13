import React, { useRef, useEffect, useState } from "react";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

  // //Hover NavDropdown
  // const [isOpen, setIsOpen] = useState(false);
  // const timeoutRef = useRef(null);
  // const history = useHistory();
  //
  // const handleMouseEnter = () => {
  //   clearTimeout(timeoutRef.current); // Clear any previous timeout
  //   setIsOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   // Add a slight delay before closing the dropdown
  //   timeoutRef.current = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 40);
  // };
  // const handleDropdownClick = () => {
  //   // Navigate to ROUTER.DESIGNS when the dropdown is clicked
  //   history.push(ROUTER.DESIGNS);
  // };
  // const handleItemClick = () => {
  //   setIsOpen(false); // Hide the dropdown when an item is clicked
  // };

  // const [show, setShow] = useState(false)
  // const controlNavbar = () => {
  //   if (window.scrollY > 300 ) {
  //     setShow(true)
  //   }else{
  //     setShow(false)
  //   }
  // }
  //
  // useEffect(() => {
  //   window.addEventListener('scroll', controlNavbar)
  //   return () => {
  //     window.removeEventListener('scroll', controlNavbar)
  //   }
  // }, [])
  //
  // //Change color of header - Designs page
  // const [showw, setShoww] = useState(false)
  // const uniElement = [ROUTER.DESIGNS];
  // const { pathname } = useLocation();
  // const ctlNavbar = () => {
  //   if (uniElement.some((route) => pathname.includes(route))) {
  //     setShoww(true)
  //   }
  //   else {
  //     setShoww(false);
  //   }
  // }
  // useEffect(() => {
  //   // Call ctlNavbar whenever the pathname changes
  //   ctlNavbar();
  // }, [pathname]);

  return (
    <div className="">
      <nav className="border-b border-solid border-ccc">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/*Mobile menu button*/}
              <button type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/*Icon when menu is closed.*/}

                {/*Menu open: "hidden", Menu closed: "block"*/}

                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {/*Icon when menu is open.*/}

                {/*Menu open: "block", Menu closed: "hidden"*/}

                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="my-header flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden w-full md:block">
                <div className="flex space-x-4 justify-center w-full">
                  {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                  <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-4 text-sm font-medium" aria-current="page">Home</Link>
                  <Link to={ROUTER.ABOUT} className="text-gray-300 hover:text-white rounded-md px-3 py-4 text-sm font-medium">
                    About
                  </Link>
                  {/* Dropdown menu */}
                  <div className="header-nav-item relative header-navdrop">
                    <div className="navdrop-title z-50 text-gray-300 hover:text-gray rounded-md pr-3 py-4">
                      <Link to={ROUTER.DESIGNS} className="text-sm font-medium dark:text-white flex nav-link"><span className="nav-text">Projects</span>
                        
                      </Link>
                    </div>
                    <div className="navdrop-inner absolute left-30 w-48 py-1 border-solid border-x border-b border-ccc">
                      <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                        <Link to={ROUTER.AGURI} className="body_text nav-link">Jewelry Website</Link>
                      </div>
                      <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                        <Link to={ROUTER.ALIO} className="body_text nav-link">Yoga App & Website</Link>
                      </div>
                      <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                        <Link to={ROUTER.CAKE} className="body_text nav-link">Cake Blog</Link>
                      </div>
                      <div className="sub-menu block px-4 py-2 text-sm text-gray-700">
                        <Link to={ROUTER.FASHION} className="body_text nav-link">Fashion Brand App</Link>
                      </div>
                    </div>
                  </div>

                  <Link to={ROUTER.CONTACT} className="text-gray-300 hover:text-white rounded-md px-3 py-4 text-sm font-medium">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Mobile menu, show/hide based on menu state.*/}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page">Dashboard</a>
            <a href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header;