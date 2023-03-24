import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";

const Layout = ({ children }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="page">
      <Header />
      <div className={`page-body-wrapper`}>
        {children}
      </div>
      <Footer />
      <div className="back-to-top" onClick={() => { scrollToTop() }}>Back to top</div>
      <Link to="/contact" className="get-in-touch">Get in touch</Link>
    </div>
  )
}

export default Layout;