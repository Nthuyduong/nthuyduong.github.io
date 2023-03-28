import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  const discardElement = [ROUTER.CONTACT];
  const withoutElement = [ROUTER.CONTACT, ROUTER.ALIO, ROUTER.CAKE, ROUTER.AGURI, ROUTER.FASHION];

  const { pathname } = useLocation();

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
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up icon-up" />
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up icon-up" />
                    <div className="">
                        <div className="body_text position">1/10</div>
                    </div>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down icon-down" />
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