import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";

const Layout = ({ children }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const history = useHistory();
  
  const isRouter = (routerNames = []) => {
    return routerNames.includes(history.location.pathname);
  }

  const getAction = () => {
    if (!isRouter([ROUTER.CONTACT])) {
      return (
        <>
          <div className="back-to-top body_text" onClick={() => { scrollToTop() }}>Back to top</div>
          <Link to="/contact" className="get-in-touch body_text">Get in touch</Link>
        </>
      )
    }
    return <></>
  }

  return (
    <div className="page">
      <Header />
      <div className={`page-body-wrapper ${!isRouter([ROUTER.CONTACT, ROUTER.CAKE, ROUTER.ALIO, ROUTER.AGURI, ROUTER.FASHION]) ? 'page-body-with-nav' : ''}`}>
        {children}
      </div>
      <Footer />
      {getAction()}
    </div>
  )
}

export default Layout;