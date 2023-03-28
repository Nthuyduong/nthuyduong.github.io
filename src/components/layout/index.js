import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const withoutElement = [ROUTER.CONTACT, ROUTER.ALIO, ROUTER.CAKE, ROUTER.AGURI, ROUTER.FASHION];

  const { pathname } = useLocation();

  if (withoutElement.some((route) => pathname.includes(route))) {
        return (
            <div className="page">
                <Header />
                <div className={`page-body-wrapper`}>
                    {children}
                </div>
                <Footer />
                <div className="backtotop body_text" onClick={() => { scrollToTop() }}>Back to top</div>
                <div className></div>
                <Link to="/contact" className="get-in-touch body_text">Get in touch</Link>
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