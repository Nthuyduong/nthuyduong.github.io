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
    <div id="footer" className="py-[30px] md:pt-[40px] md:pb-[80px] border-t border-solid border-[#ccc]">
      <div className="section">
        <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-12 items-center">
          <div className="text-center sm:text-left col-span-8">
            <p className="body_text">Get in touch for opportunities or just say hi!</p>
            <p className="mail-info body_text"><a href="mailto:Nthduong898@gmail.com">Nthduong898@gmail.com</a></p>
            <div className="pt-5 body_text flex justify-center md:justify-normal">
              <a href="https://www.facebook.com/nthuyduong15113/">
                <div className="body_text text-link">Facebook</div>
              </a>
              <a href="https://www.behance.net/duongthuy13">
                <div className="body_text mx-2 text-link">Behance</div>
              </a>
              <a href="https://www.instagram.com/nth_d9/">
                <div className="body_text text-link">Instagram</div>
              </a>

            </div>
          </div>
          <div className="block sm:hidden border-b border-solid border-[#ccc] w-[30%]"></div>
          <div className="text-center md:text-left col-span-4 body_text cursor-text-wrp sm:text-right">
            I'm an UX/UI designer here to help create intuitive and visually appealing digital interfaces for the best
            possible user experience.<Link className="ml-2 text-link read-more" to={ROUTER.ABOUT}>Read more</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer;