import React from "react";
import { ROUTER } from "../../utils/constants";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect } from 'react';

const Footer = () => {

  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="py-[30px] md:pt-[40px] md:pb-[80px] border-t border-solid border-[#ccc]">
      <div className="section">
        <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-12 items-center">
          <div className="text-center sm:text-left col-span-8">
            <p className="body_text">Get in touch for opportunities or just say hi!</p>
            <p className="mail-info body_text"><a href="mailto:Nthduong898@gmail.com">Nthduong898@gmail.com</a></p>
            <div className="pt-5 body_text flex">
              <Link to="/">
                <div className="body_text text-link">Home</div>
              </Link>
              <Link to={ROUTER.ABOUT}>
                <div className="body_text mx-2 text-link">About</div>
              </Link>
              <Link to={ROUTER.DESIGNS}>
                <div className="body_text text-link">My Projects</div>
              </Link>
              <Link to={ROUTER.CONTACT}>
                <div className="body_text ml-2 text-link">Contact</div>
              </Link>
            </div>
          </div>
          <div className="block sm:hidden border-b border-solid border-[#ccc] w-[30%]"></div>
          <div className="text-center md:text-left col-span-4 body_text cursor-text-wrp sm:text-right">
            I'm an UX/UI designer here to help create intuitive and visually appealing digital interfaces for the best
            possible user experience.<Link className="ml-2 text-link read-more" to={ROUTER.ABOUT}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;