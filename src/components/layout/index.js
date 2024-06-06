import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
import {faArrowDown, faArrowRight, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { throttle } from "../../utils/common";

let isAction = false;
const Layout = ({ children }) => {

    //SCROLL TO DIV AND COUNT THE NUMBER
    //count scroll behavior
    const [countdown, setCountdown] = useState(1);
    const [countup, setCountup] = useState(1);
    const scrollDistance = 800;
  // Scroll button function
  const [scrollPosition, setScrollPosition] = useState(0);


  const [active, setActive] = useState(0);

  const [total, setTotal] = useState(0);

  const { pathname } = useLocation();

  useEffect(() => {
    const items = document.querySelectorAll('.project-item');
    setTotal(items.length);
    setActive(0);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  const handleScroll = () => {
    if (isAction) return;
    const scrollY = window.scrollY;
    const items = document.querySelectorAll('.project-item');

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemHeight = item.clientHeight;
      if (item.offsetTop <= scrollY + itemHeight / 2 && item.offsetTop + itemHeight > scrollY + itemHeight / 2) {
        setActive(i);
        return;
      }
      setActive(items.length - 1);
    }
  }

  //scroll up a new position
  const handleScrollUp = () => {
    if (isAction) return;
    isAction = true;
    const items = document.querySelectorAll('.project-item');
    let prev = active - 1;
    if (prev >= 0) {
      items[prev].scrollIntoView({ behavior: 'smooth' });
      setActive(prev);
    }
    setTimeout(() => {
      isAction = false;
    }, 300);
  };

  //scroll down a new position
  const handleScrollDown = () => {
    if (isAction) return;
    isAction = true;
    const items = document.querySelectorAll('.project-item');
    let next = active + 1;
    if (next < items.length) {
      items[next].scrollIntoView({ behavior: 'smooth' });
      setActive(next);
    }
    setTimeout(() => {
      isAction = false;
    }, 300);
    
  };

  //Back-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

<<<<<<< Updated upstream
  const withoutElement = [ROUTER.ALIO, ROUTER.CAKE, ROUTER.AGURI, ROUTER.FASHION];

=======
  //Hide and Display side nav bar
  const discardElement = [ROUTER.CONTACT];
  const withoutElement = [ROUTER.ALIO, ROUTER.CAKE, ROUTER.AGURI, ROUTER.FASHION];

  const { pathname } = useLocation();

  // Hide Footer
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
>>>>>>> Stashed changes
  if (withoutElement.some((route) => pathname.includes(route))) {
    return (
      <div className="page">
        <Header />
        <div className={`page-body-wrapper`}>
          {children}
        </div>
        <Footer />

        <div className="back-to-top btt2 body_text hidden md:block" onClick={() => { scrollToTop() }}>Back to top</div>
        <div className="top-to-btm hidden md:block">
          <button onClick={handleScrollUp}>
            <FontAwesomeIcon className="icon-up" icon={faArrowUp} />
          </button>
          
          <div className="">
            <div className="body_text position">{active + 1}/{total}</div>
          </div>
          <button onClick={handleScrollDown}>
            <FontAwesomeIcon className="icon-down" icon={faArrowDown} />
          </button>
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
        <div className="md:block hidden back-to-top body_text" onClick={() => { scrollToTop() }}>Back to top</div>
        <Link to="/contact" className="md:block hidden get-in-touch body_text">Get in touch</Link>
    </div>
  )
}

export default Layout;