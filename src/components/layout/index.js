import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"

const Layout = ({ children }) => {
  // Scroll button function
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    const newPosition = scrollPosition - 800; // adjust the number of pixels to scroll up/down
    setScrollPosition(newPosition);
    window.scrollTo({ top: newPosition, behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const newPosition = scrollPosition + 800; // adjust the number of pixels to scroll up/down
    setScrollPosition(newPosition);
    window.scrollTo({ top: newPosition, behavior: 'smooth' });
  };

  //Back-to-top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  //Hide and Display side nav bar
  const discardElement = [ROUTER.CONTACT];
  const withoutElement = [ROUTER.CONTACT, ROUTER.ALIO, ROUTER.CAKE, ROUTER.AGURI, ROUTER.FASHION];

  const { pathname } = useLocation();
  //Hide Side Nav
  if (discardElement.some((route) => pathname.includes(route))) {
        return (
            <div className="page">
                <Header />
                <div className={`page-body-wrapper`}>
                    {children}
                </div>
                <Footer />
            </div>
        );
    }
  //Display Side Nav
  if (withoutElement.some((route) => pathname.includes(route))) {
        return (
            <div className="page">
                <Header />
                <div className={`page-body-wrapper`}>
                    {children}
                </div>
                <Footer />

                <div className="back-to-top btt2 body_text" onClick={() => { scrollToTop() }}>Back to top</div>
                <div className="top-to-btm">
                    <div className="body_text icon-up" onClick={handleScrollUp}>Scroll top</div>
                    {/*<FontAwesomeIcon icon="fa-solid fa-arrow-up icon-up" />*/}
                    <div className="">
                        <div className="body_text position">1/10</div>
                    </div>
                    {/*<FontAwesomeIcon icon="fa-solid fa-arrow-down icon-down" />*/}
                    <div className="body_text icon-down" onClick={handleScrollDown}>Scroll bottom</div>
                </div>
            </div>
        );
  }

  return (
    <div className="page">
      <Header />
      <div className={`page-body-wrapper`}>
        {children}
      </div>
      <Footer />
        <div className="back-to-top body_text" onClick={() => { scrollToTop() }}>Back to top</div>
        <Link to="/contact" className="get-in-touch body_text">Get in touch</Link>
    </div>
  )
}

export default Layout;