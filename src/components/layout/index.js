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
      return routerNames.includes(routerNames, history.location.pathname);
  }

  const getNavbar = () => {
      const excludeRouter = [ROUTER.CONTACT, ROUTER.CAKE, ROUTER.ALIO, ROUTER.AGURI, ROUTER.FASHION];
      if (!isRouter(excludeRouter)) {
          return (<Header />)
      } else {
          return '';
      }
  }

  return (
    <div className="page">
      <Header />
      {getNavbar()}
      <div className={`page-body-wrapper ${!isRouter([ROUTER.CONTACT, ROUTER.CAKE, ROUTER.ALIO, ROUTER.AGURI, ROUTER.FASHION]) ? 'page-body-with-nav' : ''}`}>
        {children}
      </div>
      <Footer />
      <div className="back-to-top body_text" onClick={() => { scrollToTop() }}>Back to top</div>
      <Link to="/contact" className="get-in-touch body_text">Get in touch</Link>
    </div>
  )
}

export default Layout;