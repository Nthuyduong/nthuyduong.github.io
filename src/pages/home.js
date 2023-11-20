import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";

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
  const sentences = [
    "HELLO MY NAME IS NGUYEN THUY DUONG.",
    "WELCOME TO MY PORTFOLIO.",
    "LET'S CONTACT WITH ME"
  ];
  const [content, setContent] = useState(sentences.join(" "));

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const content = document.getElementById("scroll-content");

    if (container && content) {
      const scrollWidth = content.scrollWidth;
      const containerWidth = container.clientWidth;

      const scroll = () => {
        if (content.scrollLeft >= content.scrollWidth / 2) {
          content.scrollLeft = 0;
        } else {
          content.scrollLeft += 1;
        }
      };

      const scrollInterval = setInterval(scroll, 20);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, []);
  // const [content, setContent] = useState(sentences.join(""));
  //
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
  //     const scrollInterval = setInterval(scroll, 10);
  //
  //     return () => {
  //       clearInterval(scrollInterval);
  //     };
  //   }
  // }, []);
  //dynamically moving sentence
  // const sentenceRef = useRef(null);

  // useEffect(() => {
  //     const sentenceWidth = sentenceRef.current.getBoundingClientRect().width;
  //     const containerWidth = sentenceRef.current.parentElement.offsetWidth;
  //     const travelDistance = sentenceWidth + containerWidth;
  //
  //       const animation = sentenceRef.current.animate(
  //           [{transform: `translateX(${containerWidth}px)`}, {transform: `translateX(-${travelDistance}px)`}],
  //           {
  //             duration: 8000, // Adjust the duration as needed
  //             iterations: Infinity,
  //             easing: 'linear'
  //           }
  //       )
  //     }
  // )

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
          <div className="row">
            <div className="col-8 d-flex">
              <img className="main-logo" src="./images/home/logo-icon.svg" alt="logo" loading="lazy"/>
              <div className="info-content medium_text">
                Hello, My name is
                <div className="info-name heading_3">
                  Nguyen Thuy Duong
                </div>
              </div>
            </div>
            <div className="col-4 body_text text-right">
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
              <span className="heading_5 text-light">Hello</span><span><img className="img-smile" src="./images/icons/smile.svg" alt="smile" loading="lazy"/></span>
              <span><img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/></span><span className="heading_5 text-light">Welcome to my website.</span>
              <span><img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/></span><span className="heading_5 text-light">I'm delighted to share my portfolio with you!</span>
            </div>
          </div>
        </div>
        <div>

        </div>
        <div className="page-element home-info2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 d-flex">
                <div className="info-content body_text">
                  19/08/1998 __________
                  <div className="heading_4 mt-3">
                    I’m UX/UI Designer
                  </div>
                </div>
              </div>
              <div className="col-1  body_text">
                April/2023
              </div>
              <div className="col-6 text-right body_text">
                Don't just imagine, create
              </div>
            </div>
          </div>
        </div>
        <div className="page-element">
          <div className="container-fluid home-info3">
            <div className="row">
              <div className="col-6 child1">
                <div className="heading_2">
                  Let’s Create
                </div>
                <div className="text-large">
                  {currentText}
                </div>
                <div className="d-flex">
                  <div className="col-6 brands-left">
                    <img className="w-100" src="./images/home/Rectangle35.webp" alt="Rectangle35" loading="lazy"/>
                  </div>
                  <div className="col-6 brands heading_2">
                    Brands <span className="brands-line"></span>
                  </div>
                </div>
              </div>
              <div className="col-4 child2">
                <img className="w-100" src="./images/home/Rectangle36.webp" alt="Rectangle35" loading="lazy"/>
              </div>
              <div className="col-2 child3">
                <div className="img-box">
                  <img className="w-100" src="./images/home/Rectangle34.webp" alt="Rectangle35" loading="lazy"/>
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
              <div className="row my-des-title">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="text-large-2">My</div>
                    <div className="dot-bl">
                      <img className="img-ellipe-bl mx-4" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="heading_1">DESIGNS</div>
                  </div>
                  <div className="d-flex">
                    <div className="text-large-2">for</div>
                    <div className="line decor-line mx-3"></div>
                    <div className="heading_1">UNIQUE</div>
                  </div>
                  <div className="d-flex">
                    <div className="heading_1">&</div>
                    <div className="text-large-2 mx-4">soulful</div>
                    <div className="heading_1">BRANDS</div>
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                  <div className="byme">
                    <div className="d-flex">
                      <div className="text-large-2 byme2">By</div>
                      <div className="dot-bl">
                        <img className="img-ellipe-99 mx-4" src="./images/icons/ellipse-99.svg" alt="smile" loading="lazy"/>
                      </div>
                      <div className="heading_1 myname byme2">NthDuong</div>
                      <div></div>
                    </div>
                  </div>
                  <div className="body_text text-right mydes-content">
                    "Step into the world of a passionate UI designer's portfolio. Witness the evolution of my skills as I
                    create intuitive interfaces and explore the realm of captivating design."
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-project">
            <div className="">
              <div className="row">
                <div className="col-3 project-odd">
                  <div className="heading_2 mb-2">01</div>

                  <Link to={ROUTER.CAKE}>
                    <img
                        className="w-100 project-img" src="./images/design/des-1.webp"
                        alt="logo"
                        loading="lazy"
                    />
                  </Link>
                  <div className="medium_text mt-3">
                    <Link to={ROUTER.CAKE}>
                      Season Cake Blog
                    </Link>
                  </div>
                  <div className="body_text w-100 mt-2">
                    Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                  </div>
                </div>
                <div className="col-3 project-even">
                  <div className="heading_2 mb-2">02</div>

                  <Link to={ROUTER.AGURI}>
                    <img
                        className="w-100 project-img"
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
                  <div className="body_text w-100 mt-2">
                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                  </div>
                </div>
                <div className="col-3 project-odd">
                  <div className="heading_2 mb-2">03</div>
                  <Link to={ROUTER.FASHION}>
                    <img className="w-100 project-img" src="./images/design/des-3.webp" alt="logo" loading="lazy"/>
                  </Link>
                  <div className="medium_text mt-3">
                    <Link to={ROUTER.FASHION}>Fashion App</Link>
                  </div>
                  <div className="body_text w-100 mt-2">
                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                  </div>
                </div>
                <div className="col-3 project-even">
                  <div className="heading_2 mb-2">04</div>
                  <Link to={ROUTER.ALIO}>
                    <img className="w-100 project-img" src="./images/design/des-4.webp" alt="logo" loading="lazy"/>
                  </Link>
                  <div className="medium_text mt-3">
                    <Link to={ROUTER.ALIO}>
                      Alio Yoga Website & App
                    </Link>
                  </div>
                  <div className="body_text w-100 mt-2">
                    Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="my-services">*/}
        {/*  <div className="services">*/}
        {/*    <div className="container-fluid">*/}
        {/*      /!*<div className="heading_1">MY SERVICE</div>*!/*/}
        {/*      <div className="row">*/}
        {/*        <div className="col-6">*/}
        {/*          <div className="uxsv my_svc">*/}
        {/*            <div className="heading_2 text-light">UX/UI Design</div>*/}
        {/*            <div className="svc-list">*/}
        {/*              <ul className="text-light list-main">*/}
        {/*                <li>User Research</li>*/}
        {/*                <li>Wireframe & Prototype</li>*/}
        {/*                <li>UI for Website</li>*/}
        {/*                <li>UI for Mobile</li>*/}
        {/*              </ul>*/}
        {/*            </div>*/}
        {/*            <div className="svc-price">*/}
        {/*              <div className="heading_5 text-light">From $4.000</div>*/}
        {/*              <div></div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col-6">*/}
        {/*          <div className="graphicsv my_svc">*/}
        {/*              <div className="heading_2">Graphic Design</div>*/}
        {/*              <div className="svc-list">*/}
        {/*                <ul className="list-main">*/}
        {/*                  <li>Logo Design</li>*/}
        {/*                  <li>Brand Identity</li>*/}
        {/*                  <li>Packaging Design</li>*/}
        {/*                  <li>Banner Design</li>*/}
        {/*                  <li>Brand Book</li>*/}
        {/*                </ul>*/}
        {/*              </div>*/}
        {/*              <div className="svc-price">*/}
        {/*                <div className="heading_5">From $6.000</div>*/}
        {/*                <div></div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!*My service*!/*/}
        {/*<div className="contact-info">*/}
        {/*  <div className="container-fluid">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-4">*/}
        {/*        <div className="contact-title">My Email addres</div>*/}
        {/*        <div>Nthduong898@gmail.com</div>*/}
        {/*      </div>*/}
        {/*      <div className="col-4">*/}
        {/*        <div className="contact-title">My Email Addres</div>*/}
        {/*        <div>Gemek Tower, Le Trong Tan, An Khanh, Ha Noi</div>*/}
        {/*      </div>*/}
        {/*      <div className="col-4">*/}
        {/*        <div className="contact-title">Phone Number</div>*/}
        {/*        <div>(84) 336256655</div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    /!*<div className="heading_1 lets-contact">Let's Contact</div>*!/*/}
        {/*    /!*<div className="heading_1 with-me">With Me</div>*!/*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!*DECOR TEXT*!/*/}
        {/*<div className="scroll-container text-decor">*/}
        {/*  <div className="scroll-content">*/}
        {/*    <div className="scroll-text">*/}
        {/*      <span className="sentence-run">{sentences[0]}</span>*/}
        {/*      <span className="sentence-spacing"> </span>*/}
        {/*      <span className="sentence-run">{sentences[1]}</span>*/}
        {/*      <span className="sentence-spacing"> </span>*/}
        {/*      <span className="sentence-run">{sentences[2]}</span>*/}
        {/*      <span className="sentence-spacing"> </span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!*Contact me*!/*/}
        {/*<div className="send_message">*/}
        {/*  <div className="container-fluid">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-4">*/}
        {/*        <div className="body_text">*/}
        {/*          “I welcome any potential recruiters to contact me regarding job opportunities that match my skillset and*/}
        {/*          interests. I am excited to explore new opportunities and connect with professionals in my field”*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col"></div>*/}
        {/*      <div className="col-7 contact-form">*/}
        {/*        /!*<form className="contact-form" onSubmit={sendEmail}>*!/*/}
        {/*        <div className="row first-line-contact">*/}
        {/*          <div className="col-6 customer-name contact_field">*/}
        {/*            <label>Your Name *</label>*/}
        {/*            <input className="inpu" type="text" required/>*/}
        {/*          </div>*/}
        {/*          <div className="col-6 customer-phone contact_field">*/}
        {/*            <label>Phone number *</label>*/}
        {/*            <input className="inpu" type="text" required/>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="customer-email contact_field">*/}
        {/*          <label>Email address *</label>*/}
        {/*          <input className="inpu" type="text" required/>*/}
        {/*        </div>*/}
        {/*        <div className="customer-mess contact_field">*/}
        {/*          <label>Message *</label>*/}
        {/*          <textarea className="inpu" rows="4" required></textarea>*/}
        {/*        </div>*/}
        {/*        <div className="heading_2 send-msg-btn">*/}
        {/*          <button type="submit">Send Message</button>*/}
        {/*        </div>*/}
        {/*        /!*</form>*!/*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="page-element">*/}
        {/*  <div className="container-fluid">*/}
        {/*    <div className="row mydes-title">*/}
        {/*      <div className="col-3"></div>*/}
        {/*      <div className="col-6">*/}
        {/*        <div className="heading_2 text-center mb-4">My Designs</div>*/}
        {/*        <div className="body_text text-center">*/}
        {/*          Step into the world of a passionate UI designer's portfolio.*/}
        {/*          Witness the evolution of my skills as I create intuitive interfaces and explore the realm of captivating design.*/}
        {/*        </div>*/}
        {/*      <div className="col-3"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="row des_r1">*/}
        {/*      <div className="col-lg-5 col-sm-12">*/}
        {/*        <div className="des_card img-des">*/}
        {/*          <Link to={ROUTER.CAKE}>*/}
        {/*            <img className="w-100" src="./images/home/mydes_1.png" alt="logo" loading="lazy"/>*/}
        {/*          </Link>*/}
        {/*          <div className="d-flex mt-3 mb-2">*/}
        {/*            <div className="heading_5 mr-2">01/</div>*/}
        {/*            <div className="medium_text pj_name">Season Cake Blog</div>*/}
        {/*            <div className="small_text ml-auto">Finished</div>*/}
        {/*          </div>*/}
        {/*          <div className="body_text w-100 pj_intro">*/}
        {/*            User testing was an iterative process that was conducted at every milestone of the project to identify*/}
        {/*            the biggest pain points in the current version.*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-1"/>*/}
        {/*      <div className="col-lg-6 col-sm-12">*/}
        {/*        <div className="des_card img-des">*/}
        {/*          <Link to={ROUTER.AGURI}>*/}
        {/*            <img className="w-100" src="./images/home/mydes_2.png" alt="logo" loading="lazy"/>*/}
        {/*          </Link>*/}
        {/*          <div className="d-flex mt-3 mb-2">*/}
        {/*            <div className="heading_5 mr-2">02/</div>*/}
        {/*            <div className="medium_text pj_name">Aguri Jewellery Website</div>*/}
        {/*            <div className="small_text ml-auto">Finished</div>*/}
        {/*          </div>*/}
        {/*          <div className="w-100 body_text pj_intro">*/}
        {/*            User testing was an iterative process that was conducted at every milestone of the project to identify*/}
        {/*            the biggest pain points in the current version.*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-lg-6 col-sm-12">*/}
        {/*        <div className="des_card img-des">*/}
        {/*          <Link to={ROUTER.ALIO}>*/}
        {/*            <img className="w-100" src="./images/home/mydes_3.png" alt="logo" loading="lazy"/>*/}
        {/*          </Link>*/}
        {/*          <div className="d-flex mt-3 mb-2">*/}
        {/*            <div className="heading_5 mr-2">03/</div>*/}
        {/*            <div className="medium_text pj_name">Alio Yoga Website & App</div>*/}
        {/*            <div className="small_text ml-auto">Finished</div>*/}
        {/*          </div>*/}
        {/*          <div className="w-100 body_text pj_intro">*/}
        {/*            Unwind with our UI design project for a yoga, Pilates, and meditation website. Immerse yourself in*/}
        {/*            serene interfaces that inspire tranquility*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-1"/>*/}
        {/*      <div className="col-lg-5 col-sm-12">*/}
        {/*        <div className="des_card img-des">*/}
        {/*          <Link to={ROUTER.FASHION}>*/}
        {/*            <img className="w-100" src="./images/home/mydes_4.png" alt="logo" loading="lazy"/>*/}
        {/*          </Link>*/}
        {/*          <div className="d-flex mt-3 mb-2">*/}
        {/*            <div className="heading_5 mr-2">04/</div>*/}
        {/*            <div className="medium_text pj_name">Vérité Luxury Fashion App</div>*/}
        {/*            <div className="body_text ml-auto">Finished</div>*/}
        {/*          </div>*/}
        {/*          <div className="w-100 body_text pj_intro">*/}
        {/*            User testing was an iterative process that was conducted at every milestone of the project to identify*/}
        {/*            the biggest pain points in the current version.*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
  )
}

export default Home;