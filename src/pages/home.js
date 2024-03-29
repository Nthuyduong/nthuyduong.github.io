import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Scroller from "../components/common/scroller";


const Home = () => {
  // const sentence1 = "HELLO MY NAME IS NGUYEN THUY DUONG.";
  // const sentence2 = "WELCOME TO MY PORTFOLIO!";
  // const sentence3 = "LET'S CONTACT WITH ME";
  // const sentences = [
  //   "HELLO MY NAME IS NGUYEN THUY DUONG.",
  //   "WELCOME TO MY PORTFOLIO.",
  //   "LET'S CONTACT WITH ME"
  // ];
  // const [content, setContent] = useState(sentences.join(" "));
  // useEffect(() => {
  //   const container = document.getElementById("scroll-container");
  //
  //   if (container) {
  //     const scrollWidth = container.scrollWidth;
  //     const containerWidth = container.clientWidth;
  //
  //     const scroll = () => {
  //       if (container.scrollLeft <= 0) {
  //         container.scrollLeft = scrollWidth;
  //       } else {
  //         container.scrollLeft -= 1;
  //       }
  //     };
  //
  //     const scrollInterval = setInterval(scroll, 20);
  //
  //     return () => {
  //       clearInterval(scrollInterval);
  //     };
  //   }
  // }, []);


  //Change text
  const texts = [
    "MEANINGFUL",
    "BEAUTIFUL",
    "RESPONSIBLE",
  ]

  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[index]);

  useEffect(() => {
    setCurrentText(texts[index])
  }, [index])

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex(index === texts.length - 1 ? 0 : index + 1)
    }, 2000);
  }, [currentText])

  return (
      <div className="home-page">
        <div className="page-element home-info container-fluid">
          <div className="grid grid-cols-12">
            <div className="col-span-8 flex">
              <img className="main-logo" src="./images/home/logo-icon.svg" alt="logo" loading="lazy"/>
              <div className="info-content medium_text">
                Hello, My name is
                <div className="mt-3 heading_3">
                  Nguyen Thuy Duong
                </div>
              </div>
            </div>
            <div className="col-span-4 body_text text-right">
              <div className="mb-3">
                “I'm creative, open-minded and a fast learner. I have a strong desire to know, to understand, to grow,
                to create, to transform, to improve and to share. My dream is to improve people's lives through my designs”
              </div>
              <div className="text-right">
                <a className="" href="https://www.behance.net/gallery/174317119/Thuy-Duongs-Portfolio/modules/984307513" target="_blank">SEE PORTFOLIO ON BEHANCE?</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ntd-showcase">
          <div className="showcase-img">
            <div className="sentence-container">
              <span className="heading_5 text-white">Hello</span><span><img className="img-smile" src="./images/icons/smile.svg" alt="smile" loading="lazy"/></span>
              <span><img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/></span><span className="heading_5 text-white">Welcome to my website.</span>
              <span><img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/></span><span className="heading_5 text-white">I'm delighted to share my portfolio with you!</span>
            </div>
          </div>
        </div>
        <div>

        </div>
        <div className="container-fluid mt-5 mb-7">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 d-flex">
              <div className="info-content body_text">
                19/08/1998 __________
                <div className="heading_4 mt-3">
                  I’m UX/UI Designer
                </div>
              </div>
            </div>
            <div className="col-span-1  body_text">
              April/2023
            </div>
            <div className="col-span-6 text-right body_text">
              Don't just imagine, create
            </div>
          </div>
        </div>
        <div className="page-element">
          <div className="container-fluid home-info3">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 child1">
                <div>
                  <div className="heading_2">
                    Let’s Create
                  </div>
                  <div className="text-large">
                    {currentText}
                  </div>
                  <div className="flex">
                    <div className="col-span-3 brands-left">
                      <img className="w-full" src="./images/home/Rectangle35.webp" alt="Rectangle35" loading="lazy"/>
                    </div>
                    <div className="col-span-3 brands heading_2">
                      Brands <span className="brands-line"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 child2">
                <img className="w-full" src="./images/home/Rectangle36.webp" alt="Rectangle35" loading="lazy"/>
              </div>
              <div className="col-span-2 child3">
                <div className="img-box">
                  <img className="w-full" src="./images/home/Rectangle34.webp" alt="Rectangle35" loading="lazy"/>
                </div>
              </div>
            </div>
            <div className="row row-bt">
              <div className="col-6"></div>
              <div className="col-6 small-img">
                <img className="" src="./images/home/Rectangle440.webp" alt="Rectangle35" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-design">
            <div className="container-fluid">
              <div className="grid grid-cols-12 my-des-title">
                <div className="col-span-6">
                  <div className="flex">
                    <div className="text-large-2">My</div>
                    <div className="dot-bl">
                      <img className="img-ellipe-bl mx-4" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="heading_1">DESIGNS</div>
                  </div>
                  <div className="flex">
                    <div className="text-large-2">for</div>
                    <div className="line decor-line mx-3"></div>
                    <div className="heading_1">UNIQUE</div>
                  </div>
                  <div className="flex">
                    <div className="heading_1">&</div>
                    <div className="text-large-2 mx-4">soulful</div>
                    <div className="heading_1">BRANDS</div>
                  </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-4">
                  <div className="byme">
                    <div className="flex">
                      <div className="text-large-2 byme2">By</div>
                      <div className="dot-bl">
                        <img className="img-ellipe-99 mx-4" src="./images/icons/ellipse-99.svg" alt="smile" loading="lazy"/>
                      </div>
                      <div className="heading_1 myname byme2">NthDuong</div>
                      <div></div>
                    </div>
                  </div>
                  <div className="body_text text-right mt-4">
                    "Step into the world of a passionate UI designer's portfolio. Witness the evolution of my skills as I
                    create intuitive interfaces and explore the realm of captivating design."
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-project">
            <div className="">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 project-odd">
                  <div className="heading_2 mb-2">01/</div>

                  <Link to={ROUTER.CAKE}>
                    <img
                        className="w-full project-img" src="./images/design/des-1.webp"
                        alt="logo"
                        loading="lazy"
                    />
                  </Link>
                  <div className="medium_text mt-3">
                    <Link to={ROUTER.CAKE}>
                      Season Cake Blog
                    </Link>
                  </div>
                  <div className="body_text w-full mt-2">
                    Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                  </div>
                </div>
                <div className="col-span-3 project-even">
                  <div className="heading_2 mb-2">02/</div>

                  <Link to={ROUTER.AGURI}>
                    <img
                        className="w-full project-img"
                        src="./images/design/des-2.webp"
                        alt="logo"
                        loading="lazy"
                    />
                  </Link>

                  <div className="medium_text mt-3">
                    <Link to={ROUTER.AGURI}>
                      Aguri Jewellery Website
                    </Link>
                  </div>
                  <div className="body_text w-full mt-2">
                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                  </div>
                </div>
                <div className="col-span-3 project-odd">
                  <div className="heading_2 mb-2">03/</div>
                  <Link to={ROUTER.FASHION}>
                    <img className="w-full project-img" src="./images/design/des-3.webp" alt="logo" loading="lazy"/>
                  </Link>
                  <div className="medium_text mt-3">
                    <Link to={ROUTER.FASHION}>Fashion App</Link>
                  </div>
                  <div className="body_text w-full mt-2">
                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                  </div>
                </div>
                <div className="col-span-3 project-even">
                  <div className="heading_2 mb-2">04/</div>
                  <Link to={ROUTER.ALIO}>
                    <img className="w-full project-img" src="./images/design/des-4.webp" alt="logo" loading="lazy"/>
                  </Link>
                  <div className="medium_text mt-3">
                    <Link to={ROUTER.ALIO}>
                      Alio Yoga Website & App
                    </Link>
                  </div>
                  <div className="body_text w-full mt-2">
                    Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-services">
          <div className="services container-fluid ">
            <div className="py-7 border-solid border-y border-ccc">
              {/*<div className="heading_1">MY SERVICE</div>*/}
              <div className="grid grid-cols-12">
                <div className="col-span-6">
                  <div className="uxsv my_svc">
                    <div className="heading_2 text-white">UX/UI Design</div>
                    <div className="svc-list">
                      <ul className="text-white list-main">
                        <li>User Research</li>
                        <li>Wireframe & Prototype</li>
                        <li>UI for Website</li>
                        <li>UI for Mobile</li>
                      </ul>
                    </div>
                    <div className="">
                      <div className="heading_5 text-white">From $4.000</div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="graphicsv my_svc">
                      <div className="heading_2">Graphic Design</div>
                      <div className="svc-list">
                        <ul className="list-main">
                          <li>Logo Design</li>
                          <li>Brand Identity</li>
                          <li>Packaging Design</li>
                          <li>Banner Design</li>
                          <li>Brand Book</li>
                        </ul>
                      </div>
                      <div className="">
                        <div className="heading_5">From $6.000</div>
                        <div></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*My service*/}
        <div className="contact-info">
          <div className="container-fluid">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <div className="contact-title">My Email addres</div>
                <div>Nthduong898@gmail.com</div>
              </div>
              <div className="col-span-4">
                <div className="contact-title">Phone Number</div>
                <div>(84) 336256655</div>
              </div>
              <div className="col-span-4">
                <div className="contact-title">My Email Addres</div>
                <div>Gemek Tower, Le Trong Tan, An Khanh, Ha Noi</div>
              </div>
            </div>
            {/*<div className="heading_1 lets-contact">Let's Contact</div>*/}
            {/*<div className="heading_1 with-me">With Me</div>*/}
          </div>
        </div>
        {/*DECOR TEXT*/}
        <div className="scroll-container text-decor">
          <Scroller>
            <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy"/>
            <div className="heading_4">HELLO MY NAME IS NGUYEN THUY DUONG</div>
            <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy"/>
            <div className="heading_4">WELCOME TO MY PORTFOLIO!</div>
            <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy"/>
            <div className="heading_4">LET'S CONTACT WITH ME</div>

          </Scroller>
        </div>
        {/*Contact me*/}
        <div className="send_message">
          <div className="container-fluid">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <div className="body_text">
                  “I welcome any potential recruiters to contact me regarding job opportunities that match my skillset and
                  interests. I am excited to explore new opportunities and connect with professionals in my field”
                </div>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-7 contact-form">
                {/*<form className="contact-form" onSubmit={sendEmail}>*/}
                <div className="grid grid-cols-12 gap-4 first-line-contact">
                  <div className="col-span-6 customer-name contact_field">
                    <label>Your Name *</label>
                    <input className="border-solid border-b border-ccc" type="text" required/>
                  </div>
                  <div className="col-span-6 customer-phone contact_field">
                    <label>Phone number *</label>
                    <input className="border-solid border-b border-ccc" type="text" required/>
                  </div>
                </div>
                <div className="customer-email contact_field">
                  <label>Email address *</label>
                  <input className="border-solid border-b border-ccc" type="text" required/>
                </div>
                <div className="customer-mess contact_field">
                  <label>Message *</label>
                  <textarea className="border-solid border-b border-ccc" rows="4" required></textarea>
                </div>
                <div className="heading_3 send-msg-btn mt-6">
                  <button type="submit">Send Message</button>
                </div>
                {/*</form>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;