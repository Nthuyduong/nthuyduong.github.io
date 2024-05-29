import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Scroller from "../components/common/scroller";
import CardSlider from "../components/common/CardSlider";


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
    }, 1000);
  }, [currentText])

  return (
    <div className="home-page">

      {/* NEW banner */}
      <div className="bg-background pt-6 pb-7">
        <div className="section relative">
          <div className="md:grid md:grid-cols-12">
            <div className="col-span-8 md:flex">
              <img className="h-[90px] md:block hidden main-logo mr-4" src="./images/home/logo-icon.svg" alt="logo" loading="lazy" />
              <div className="info-content medium_text cursor-text-wrp">
                Hello, My name is
                <div className="ntd-name sm:mt-3 heading_3 cursor-text-wrp">
                  Nguyen Thuy Duong
                </div>
              </div>
            </div>
            {/* <div className="sm:hidden showcase-img"></div> */}
            <div className="col-span-4 body_text text-right border-b border-[#ccc] sm:border-none">
              <div className="mt-3 md:mt-0 mb-3 cursor-text-wrp text-center sm:text-left">
                “Hello and welcome to my Portfolio. I’m a Junior UX/UI Designer. I'm creative, open-minded and a fast learner. I have a strong desire to know, to understand, to grow,
                to create, to transform, to improve and to share. My dream is to improve people's lives through my designs”
              </div>
              {/* <div className="text-right hidden sm:block">
                <a className="" href="https://www.behance.net/gallery/174317119/Thuy-Duongs-Portfolio/modules/984307513" target="_blank">SEE PORTFOLIO ON BEHANCE?</a>
              </div> */}
            </div>
          </div>
          <div className="flex justify-center mt-5 z-20">
            <img className="h-[320px] img-smile" src="./images/bannerhome.svg" alt="smile" loading="lazy" />
          </div>
          <div className="flex justify-center mt-5">
            <img className="h-[130px] img-smile" src="./images/bannertext.svg" alt="smile" loading="lazy" />
          </div>
        </div>
        <div className="absolute top-[90%] md:top-[35%] z-10">
          <img className="img-smile" src="./images/Sunflowers.svg" alt="smile" loading="lazy" />
        </div>
      </div>

      {/* <div className="section page-element home-info"> */}
        {/* <div className="md:grid md:grid-cols-12">
          <div className="col-span-8 md:flex">
            <img className="md:block hidden main-logo" src="./images/home/logo-icon.svg" alt="logo" loading="lazy" />
            <div className="info-content medium_text cursor-text-wrp">
              Hello, My name is
              <div className="ntd-name sm:mt-3 heading_3 cursor-text-wrp">
                Nguyen Thuy Duong
              </div>
            </div>
          </div>
          <div className="sm:hidden showcase-img"></div>
          <div className="col-span-4 body_text text-right border-b border-[#ccc] sm:border-none">
            <div className="mt-3 md:mt-0 mb-3 cursor-text-wrp text-center sm:text-left">
              “I'm creative, open-minded and a fast learner. I have a strong desire to know, to understand, to grow,
              to create, to transform, to improve and to share. My dream is to improve people's lives through my designs”
            </div>
            <div className="text-right hidden sm:block">
              <a className="" href="https://www.behance.net/gallery/174317119/Thuy-Duongs-Portfolio/modules/984307513" target="_blank">SEE PORTFOLIO ON BEHANCE?</a>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <div className="section ntd-showcase hidden sm:block">
        {/* <div className="showcase-img">
          <div className="sentence-container">
            <CardSlider
              configs={{
                vertical: true,
                width: 1000,
                heigh: 0,
                isText: true,
                duration: 3000,
                // background: '/img/homedecor.png',
              }}
            >
              <div className="slide-card-item">
                <div className="flex">
                  <div className="heading_3 text-center text-white">Hello. Welcome to my creative world!</div>
                  <div><img className="img-smile" src="./images/icons/smile.svg" alt="smile" loading="lazy" /></div>
                </div>
              </div>
              <div className="slide-card-item heading_1 text-center">
                <div className="heading_3 text-center text-white">"I'm delighted to share my portfolio with you!"</div>
              </div>
              <div className="slide-card-item heading_1 text-center">
                <div className="heading_3 text-center text-white">"I'm delighted to share my portfolio with you!"</div>
              </div> */}
        {/* </CardSlider> */}
        {/* <span className="heading_5 text-white">Hello</span><span><img className="img-smile" src="./images/icons/smile.svg" alt="smile" loading="lazy"/></span>
              <span><img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/></span><span className="heading_5 text-white">Welcome to my website.</span>
              <span><img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/></span><span className="heading_5 text-white">I'm delighted to share my portfolio with you!</span> */}
        {/* </div>
        </div> */}
      </div>
      {/* <div className="section mt-2 mb-4 md:mt-5 md:mb-7">
        <div className="md:grid md:grid-cols-12 gap-4">
          <div className="col-span-5 d-flex">
            <div className="info-content body_text flex sm:block justify-between items-center">
              19/08/1998
              <div className="heading_4 sm:mt-3 cursor-text-wrp hidden sm:block">
                I’m UX/UI Designer
              </div>
              <div className="cursor-text-wrp block sm:hidden">
                I’m UX/UI Designer
              </div>
            </div>
          </div>
          <div className="col-span-1  body_text hidden sm:block">
            April/2023
          </div>
          <div className="col-span-6 text-right body_text cursor-text-wrp hidden sm:block">
            Don't just imagine, create
          </div>
        </div>
      </div> */}
      <div className="section-full page-element bg-tertiary">
        <div className="home-info3 pb-7 m-w">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6 child1">
              <div>
                <div className="heading_2 cursor-text-wrp">
                  Let’s Create
                </div>
                <div className="text-large">
                  {currentText}
                </div>
                <div className="flex">
                  <div className="col-span-3 brands-left">
                    <img className="w-full" src="./images/home/Rectangle35.webp" alt="Rectangle35" loading="lazy" />
                  </div>
                  <div className="col-span-3 brands heading_2">
                    Brands <span className="brands-line hidden sm:block"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 child2">
              <img className="w-full" src="./images/design-section2.png" alt="Rectangle35" loading="lazy" />
            </div>
            <div className="col-span-2 child3">
              <div className="img-box">
                <img className="w-full" src="./images/home/Rectangle34.webp" alt="Rectangle35" loading="lazy" />
              </div>
            </div>
          </div>
          {/* <div className="row row-bt hidden sm:block">
            <div className="col-6"></div>
            <div className="col-6 small-img child4">
              <img className="" src="./images/home/Rectangle440.webp" alt="Rectangle35" loading="lazy" />
            </div>
          </div> */}
        </div>
      </div>
      {/* New section */}
      {/* <div className="relative md:py-9 bg-tertiary">
        <div className="section">
          <div className="grid grid-cols-12 gap-5 mb-3">
            <div className="col-span-1"></div>
            <div className="col-span-4 self-center">
              <div className="text-large-2 cursor-text-wrp">Let's Create</div>
            </div>
            <div className="col-span-2">
              <img className="img-ellipe-bl" src="./images/design-section1.png" alt="smile" loading="lazy" />
            </div>
            <div className="col-span-4">
              <img className="img-ellipe-bl" src="./images/design-section2.png" alt="smile" loading="lazy" />
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="absolute top-[50%]">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-pan-1"></div>
              <div className="col-span-10">
                <div className="flex items-center">
                  <div className="text-[180px] leading-[100px] mr-3">
                    *
                  </div>
                  <div className="text-large">
                    {currentText}
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-3">
            <div className="col-span-2">

            </div>
            <div className="col-span-4">
              <div>
                If you like my work and want to work with me. Just contact me and we will agree on cooperation
              </div>
            </div>
            <div className="col-span-1">

            </div>
            <div className="col-span-5">
              <div className="text-large-2 cursor-text-wrp">Brand</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="section">
        <div className="my-design">
          <div className="">
            <div className="grid grid-cols-12 my-des-title">
              <div className="col-span-10 sm:col-span-6">
                <div className="flex">
                  <div className="text-large-2 cursor-text-wrp">My</div>
                  <div className="dot-bl">
                    <img className="img-ellipe-bl mx-1 sm:mx-4" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy" />
                  </div>
                  <div className="heading_1 cursor-text-wrp">DESIGNS</div>
                </div>
                <div className="flex">
                  <div className="text-large-2">for</div>
                  <div className="line decor-line mx-1 sm:mx-3"></div>
                  <div className="heading_1 cursor-text-wrp">UNIQUE</div>
                </div>
                <div className="flex">
                  <div className="heading_1 cursor-text-wrp">&</div>
                  <div className="text-large-2 mx-1 sm:mx-4 cursor-text-wrp">soulful</div>
                  <div className="heading_1 cursor-text-wrp">BRANDS</div>
                </div>
              </div>
              <div className="col-span-2 hidden sm:block"></div>
              <div className="col-span-10 sm:col-span-4 hidden sm:block">
                <div className="byme">
                  <div className="flex">
                    <div className="text-large-2 byme2 cursor-text-wrp">By</div>
                    <div className="dot-bl">
                      <img className="img-ellipe-99 mx-4" src="./images/icons/ellipse-99.svg" alt="smile" loading="lazy" />
                    </div>
                    <div className="heading_1 myname byme2 cursor-text-wrp">NthDuong</div>
                    <div></div>
                  </div>
                </div>
                <div className="body_text text-right mt-4 cursor-text-wrp">
                  "Step into the world of a passionate UI designer's portfolio. Witness the evolution of my skills as I
                  create intuitive interfaces and explore the realm of captivating design."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="my-project">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 sm:col-span-3 project-odd">
                <div className="heading_3 mb-2 cursor-text-wrp">01.</div>

                <Link to={ROUTER.CAKE}>
                  <img
                    className="w-full project-img" src="./images/design/des-1.png"
                    alt="logo"
                    loading="lazy"
                  />
                </Link>
                <div className="heading_6 mt-3 cursor-text-wrp">
                  <Link to={ROUTER.CAKE}>
                    Season Cake Blog
                  </Link>
                </div>
                <div className="body_text w-full mt-2 cursor-text-wrp hidden sm:block">
                  Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 project-even">
                <div className="heading_3 mb-2 cursor-text-wrp">02.</div>

                <Link to={ROUTER.AGURI}>
                  <img
                    className="w-full project-img"
                    src="./images/design/des-2.png"
                    alt="logo"
                    loading="lazy"
                  />
                </Link>

                <div className="heading_6 mt-3 cursor-text-wrp">
                  <Link to={ROUTER.AGURI}>
                    Aguri Jewellery Website
                  </Link>
                </div>
                <div className="body_text w-full mt-2 cursor-text-wrp hidden sm:block">
                  Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 project-odd">
                <div className="heading_3 mb-2 cursor-text-wrp">03.</div>
                <Link to={ROUTER.FASHION}>
                  <img className="w-full project-img" src="./images/design/des-3.png" alt="logo" loading="lazy" />
                </Link>
                <div className="heading_6 mt-3 cursor-text-wrp">
                  <Link to={ROUTER.FASHION}>Fashion App</Link>
                </div>
                <div className="body_text w-full mt-2 cursor-text-wrp hidden sm:block">
                  Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 project-even">
                <div className="heading_3 mb-2 cursor-text-wrp">04.</div>
                <Link to={ROUTER.ALIO}>
                  <img className="w-full project-img" src="./images/design/des-4.png" alt="logo" loading="lazy" />
                </Link>
                <div className="heading_6 mt-3 cursor-text-wrp">
                  <Link to={ROUTER.ALIO}>
                    Alio Yoga Website & App
                  </Link>
                </div>
                <div className="body_text w-full mt-2 cursor-text-wrp hidden sm:block">
                  Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-services">
          <div className="services container-fluid ">
            <div className="py-7 border-solid border-y border-ccc">
              <div className="heading_1">MY SERVICE</div>
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
        </div> */}
      {/*My service*/}
      {/* <div className="contact-info">
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
          </div>
        </div> */}
      {/*DECOR TEXT*/}
      <div className="section-full scroll-container text-decor mt-5 md:mt-8 py-0 md:py-3">
        <Scroller>
          <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
          <div className="heading_4 cursor-text-wrp">HELLO MY NAME IS NGUYEN THUY DUONG</div>
          <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
          <div className="heading_4 cursor-text-wrp">WELCOME TO MY PORTFOLIO!</div>
          <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
          <div className="heading_4 cursor-text-wrp">LET'S CONTACT WITH ME</div>

        </Scroller>
      </div>
      {/*Contact me*/}
      <div className="section send_message mt-5 md:mt-8">
        <div className="">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-4 flex flex-row-reverse sm:flex-col gap-2">
              <div className="flex flex-col-reverse sm:flex-row gap-4 w-full">
                <div className="col-span-3">
                  <div className="body_text cursor-text-wrp">
                    “I welcome any potential recruiters to contact me regarding job opportunities that match my skillset and
                    interests. I am excited to explore new opportunities and connect with professionals in my field”
                  </div>
                </div>
                <div className="flex justify-end sm:block">
                  <img className="w-[50%] sm:w-full" src="./images/home/home-contact2.png" alt="logo" loading="lazy" />
                </div>
              </div>
              <div className="flex flex-col-reverse gap-4 sm:mt-4 justify-end sm:flex-row sm:justify-between w-full">
                <div className="col-span-2 w-full">
                  <img className="w-full" src="./images/home/contact-home.png" alt="logo" loading="lazy" />
                </div>
                <div className="col-span-2 flex sm:self-end w-full">
                  <div className="w-full sm:text-right">
                    <div className="small_text cursor-text-wrp">From Nth.Duong</div>
                    <div className="small_text cursor-text-wrp">Portfolio 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-12 sm:col-span-7 contact-form">
              {/*<form className="contact-form" onSubmit={sendEmail}>*/}
              <div className="md:grid md:grid-cols-12 gap-4 first-line-contact">
                <div className="mb-4 md:mb-0 col-span-6 customer-name contact_field">
                  <label className="mb-1 cursor-text-wrp">Your Name *</label>
                  <input className="border-solid border-b border-ccc focus:outline-none focus:border-b focus:border-333" type="text" required />
                </div>
                <div className="col-span-6 customer-phone contact_field">
                  <label className="mb-1 cursor-text-wrp">Phone number *</label>
                  <input className="border-solid border-b border-ccc focus:outline-none focus:border-b focus:border-333" type="text" required />
                </div>
              </div>
              <div className="customer-email contact_field">
                <label className="mb-1 cursor-text-wrp">Email address *</label>
                <input className="border-solid border-b border-ccc focus:outline-none focus:border-b focus:border-333" type="text" required />
              </div>
              <div className="customer-mess contact_field">
                <label className="mb-1 cursor-text-wrp">Message *</label>
                <textarea className="border-solid border-b border-ccc focus:outline-none focus:border-b focus:border-333" rows="4" required></textarea>
              </div>
              <div className="heading_3 send-msg-btn mt-6">
                <button type="submit cursor-text-wrp">Send Message</button>
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