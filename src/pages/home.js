import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Scroller from "../components/common/scroller";
import CardSlider from "../components/common/CardSlider";
import Slider from "../components/common/slider";
import { sendContactForm } from "../services/app";
import Loading from "../components/common/loading";
import LoadingMail from "../components/common/loadingMail";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const emojis = [
  '<img src="./images/fl1.svg"/>',
  '<img src="./images/fl2.svg"/>',
  '<img src="./images/fl3.svg"/>',
  '<img src="./images/fl4.svg"/>',
  '<img src="./images/fl5.svg"/>'
  
];

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePhone = (phone) => {
    const re = /^[0-9\b]+$/;
    return re.test(phone);
  }

  const handleSubmit = async (e) => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    // return;
    if (success) return;
    e.preventDefault();
    let isError = false;
    let tmpError = { name: '', phone: '', email: '', message: '' };
    if (!name) {
      tmpError.name = 'Name is required';
      isError = true;
    }
    if (!phone || !validatePhone(phone) || phone.length < 10 || phone.length > 11) {
      tmpError.phone = 'Phone is required';
      isError = true;
    }
    if (!email || !validateEmail(email)) {
      tmpError.email = 'Email is required';
      isError = true;
    }
    if (!message) {
      tmpError.message = 'Message is required';
      isError = true;
    }

    if (isError) {
      setError(tmpError);
      return;
    }
    setLoading(true);
    const res = await sendContactForm({ name, phone, email, message });
    setLoading(false);
    if (res.status) {
      setSuccess(true);
    }
  }

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

  useLayoutEffect(() => {
    const test1Height = document.querySelector(".test-pr").offsetHeight;
    var tl = gsap.to('.test-pr', {
      yPercent: -100,
      ease: "power2",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".test-pr",
        scrub: true,
        // pin: true,
        start: `top ${200 + test1Height * 0}`,
        end: "+=" + test1Height,
        markers: true,
      }
    });
    const test2Height = document.querySelector(".test-pr-1").offsetHeight;
    var tl1 = gsap.to('.test-pr-1', {
      yPercent: -100,
      ease: "power2",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".test-pr-1",
        scrub: true,
        // pin: true,
        start: `top ${200 + test2Height * 1}`,
        end: "+=" + test2Height * 2,
        markers: true,
      }
    });
    const test3Height = document.querySelector(".test-pr-2").offsetHeight;
    var tl2 = gsap.to('.test-pr-2', {
      yPercent: -100,
      ease: "power2",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".test-pr-2",
        scrub: true,
        // pin: true,
        start: `top ${200 + test3Height * 2}`,
        end: "+=" + test3Height * 3,
        markers: true,
      }
    });
    const test4Height = document.querySelector(".test-pr-3").offsetHeight;
    var tl3 = gsap.to('.test-pr-3', {
      yPercent: -100,
      ease: "power2",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".test-pr-3",
        scrub: true,
        // pin: true,
        start: `top ${200 + test4Height * 3}`,
        end: "+=" + test4Height * 4,
        markers: true,
      }
    });
  }, [])

  function changeEmoji() {
    const currentEmojis = document.querySelectorAll(".emoji");
    currentEmojis.forEach((emoji) => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.innerHTML = '<div className="px-4">' + randomEmoji + '</div>';
    });
  }

  return (
    <div className="home-page">

      {/* NEW banner */}
      <div className="homep-banner pt-4 md:pt-6 pb-5 md:pb-7">
        <div className="section relative">
          <div className="md:grid md:grid-cols-12">
            <div className="col-span-8 md:flex">
              <img className="h-[90px] md:block hidden main-logo mr-4" src="./images/home/logo-icon.svg" alt="logo" loading="lazy" />
              <div className="info-content heading_6 text-center md:text-left cursor-text-wrp">
                Hello, My name is
                <div className="ntd-name md:mt-3 mt-2 text-center md:text-left heading_3 cursor-text-wrp mt-1 md:mt-0">
                  Nguyen Thuy Duong
                </div>
              </div>
            </div>
            {/* <div className="sm:hidden showcase-img"></div> */}
            <div className="col-span-4 body_text text-right border-b border-[#ccc] sm:border-none">
              <div className="mt-3 md:mt-0 md:mb-3 mb-5 cursor-text-wrp text-center sm:text-left">
                “I am a creative, open-minded, and fast learner with a strong desire to know, understand, grow, create, transform, improve, and share. My ultimate dream is to enhance people's lives through my designs.”
              </div>
              {/* <div className="text-right hidden sm:block">
                <a className="" href="https://www.behance.net/gallery/174317119/Thuy-Duongs-Portfolio/modules/984307513" target="_blank">SEE PORTFOLIO ON BEHANCE?</a>
              </div> */}
            </div>
          </div>
          <div className="md:flex justify-center mt-5 z-20 hidden animate slideInUp animate--delay-fast">
            <img className="h-[200px] md:h-[320px] img-smile" src="./images/bannerhome.svg" alt="smile" loading="lazy" />
          </div>
          <div className="flex justify-center mt-5 z-20 md:hidden">
            <img className="h-[200px] md:h-[320px] img-smile" src="./images/bannerhome2.png" alt="smile" loading="lazy" />
          </div>
          <div className="flex justify-center mt-2 md:mt-6 animate slideInUp animate--delay-fast">
            <img className="h-[80px] md:h-[130px] img-smile" src="./images/bannertext.svg" alt="smile" loading="lazy" />
          </div>
        </div>
        <div className="absolute top-[55%] md:top-[40%] z-10">
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

      {/* Let's create responsive design */}
      {/* <div className="section-full page-element">
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
                    Brands
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
          </div> */}
      {/* <div className="row row-bt hidden sm:block">
            <div className="col-6"></div>
            <div className="col-6 small-img child4">
              <img className="" src="./images/home/Rectangle440.webp" alt="Rectangle35" loading="lazy" />
            </div>
          </div> */}
      {/* </div>
      </div> */}

      {/*DECOR TEXT*/}
      {/* <div className="px-0 section-full scroll-container text-decor py-0 md:py-3">
        <Scroller>
          <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
          <div className="heading_3 cursor-text-wrp">HELLO MY NAME IS NGUYEN THUY DUONG</div>
          <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
          <div className="heading_3 cursor-text-wrp">WELCOME TO MY PORTFOLIO!</div>
          <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
          <div className="heading_3 cursor-text-wrp">LET'S CONTACT WITH ME</div>

        </Scroller>
      </div> */}



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

      {/* ABOUT ME */}
      <div className="section">
        <div className="md:grid grid-cols-12 gap-5 pt-6 md:pt-7">
          <div className="col-span-12 lg:col-span-5"></div>
          <div className="col-span-12 lg:col-span-7">
            
            <div className="heading_2 md:mb-6 mb-4">
              Welcome to my portfolio! Excited to share UX/UI design projects and
              experiences here. Always ready to embrace new opportunities and challenges
              for continuous growth.
            </div>

            {/* animation button */}
            <Link to={ROUTER.ABOUT}>
              <div id="container">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text medium_text">MORE ABOUT ME</span>
                </button>
              </div>
            </Link>

            {/* <div className="flex items-center mt-6">
              <div className="bg-black mr-2 p-1 rounded-full">
                <img className="" src="./images/icons/arrow-up-right.svg" alt="logo" loading="lazy" />
              </div>
              <div className="scroll-text medium_text" data-replace="MORE ABOUT ME">
                <span>MORE ABOUT ME</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="test bg-[#ccc] h-[50vh] flex justify-center items-center">
        <div className="flex flex-col gap-[2px] items-center">
          <div className="overflow-hidden relative">
            <div className="test-pr">
              <div className="heading_1 test-text byme2 cursor-text-wrp text-[black] w-fit">
                NthDuong
              </div>
              <div className="heading_1 test-text-2 byme2 cursor-text-wrp text-[black] w-fit">
                NthDuong
              </div>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <div className="test-pr-1">
              <div className="heading_1 test-text byme2 cursor-text-wrp text-[black] w-fit">
                NtGiang
              </div>
              <div className="heading_1 test-text-2 byme2 cursor-text-wrp text-[black] w-fit">
                NtGiang
              </div>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <div className="test-pr-2">
              <div className="heading_1 test-text byme2 cursor-text-wrp text-[black] w-fit">
                NthDuong + NtGiang
              </div>
              <div className="heading_1 test-text-2 byme2 cursor-text-wrp text-[black] w-fit">
                NthDuong + NtGiang
              </div>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <div className="test-pr-3">
              <div className="heading_1 test-text byme2 cursor-text-wrp text-[black] w-fit">
                NtGiang + NthDuong
              </div>
              <div className="heading_1 test-text-2 byme2 cursor-text-wrp text-[black] w-fit">
                NtGiang + NthDuong
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/*DECOR TEXT*/}

      <div
        className="home-contact-scroller px-0 section-full scroll-container text-decor mt-5 md:mt-8 py-0 md:py-3"
        onMouseEnter={changeEmoji}
      >

        <div className="bg-purple px-0 section-full scroll-container text-decor py-0 md:py-2">
          <Scroller>
            <Link to='/contact' className="flex">
              <div className="emoji flex items-center px-4">
              <img className="w-full" src="./images/fl1.svg" alt="logo" loading="lazy" />
              </div>
              {/* <div className="heading_3 cursor-text-wrp">HELLO</div> */}

              <div className="heading_1 cursor-text-wrp scroll-txt">WELCOME TO MY PORTFOLIO!</div>
              <div className="emoji flex items-center px-4">
                <img className="w-full" src="./images/fl2.svg" alt="logo" loading="lazy" />
              </div>
              <div className="heading_1 cursor-text-wrp home-contact-scroller-text scroll-txt">LET'S CONTACT WITH ME</div>
              {/* <div className="emoji flex items-center">
                <img className="w-full px-4" src="./images/design/star.svg" alt="logo" loading="lazy" />
              </div> */}
            </Link>
          </Scroller>
        </div>
      </div>

      {/* My design  */}
      <div className="section md:my-7 my-5">
        <div className="md:mb-7 ml:mb-8 mb-6">
          <div className="">
            <div className="grid grid-cols-12 my-des-title">
              <div className="col-span-10 sm:col-span-6 animate slideInUp">
                <div className="flex">
                  <div className="text-large-2 cursor-text-wrp">My</div>
                  <div className="dot-bl">
                    <img className="img-ellipe-bl mx-2 md:mx-2 lg:mx-3" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy" />
                  </div>
                  <div className="heading_design heading_1 cursor-text-wrp">DESIGNS</div>
                </div>
                <div className="flex">
                  <div className="text-large-2">for</div>
                  <div className="line decor-line mx-2 md:mx-3"></div>
                  <div className="heading_1 heading_design cursor-text-wrp">UNIQUE</div>
                </div>
                <div className="flex">
                  <div className="heading_1 heading_design cursor-text-wrp">&</div>
                  <div className="text-large-2 mx-2 md:mx-2 lg:mx-3 cursor-text-wrp">soulful</div>
                  <div className="heading_1 heading_design cursor-text-wrp">BRANDS</div>
                </div>
              </div>
              <div className="col-span-2 hidden sm:block"></div>
              <div className="col-span-10 sm:col-span-4 hidden md:block animate slideInUp">
                <div className="byme">
                  <div className="flex justify-end">
                    <div className="text-large-2 byme2 cursor-text-wrp">By</div>
                    <div className="dot-bl w-[50px] flex justify-center">
                      <img className="img-ellipe-bl mx-2 md:mx-2 lg:mx-3" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy" />
                    </div>
                    <div className="heading_1 myname byme2 cursor-text-wrp">NthDuong</div>
                    <div></div>
                  </div>
                </div>
                <div className="body_text text-right mt-4 cursor-text-wrp mb-5">
                  "Explore a passionate UI designer's evolving portfolio showcasing intuitive interfaces and captivating design."
                </div>
                {/* animation button */}
                <div className="md:flex justify-end">
                  <div className="">
                    <Link to={ROUTER.DESIGNS} className="text-link heading_6" >
                      <span>
                        VIEW ALL PROJECTS
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="animate slideInUp animate--delay-fast">
          <div className="my-project">
            <Slider
              configs={{
                sliderPerRow: 4.25,
                sliderPerRowMobile: 1.25,
                allowDrag: true,
                duration: 400,
                auto: false,
                autoDuration: 1000,
                gap: 30,
                gapMobile: 10,
                // process: true,
                paginate: false,
                navigator: false,
                active: 0
              }}
            >
              <div className="project-odd">
                <div className="heading_4 mb-2 cursor-text-wrp">01.</div>
                <Link to={ROUTER.CAKE}>
                  <img
                    className="w-full project-img" src="./images/design/cakemain.png"
                    alt="logo"
                    loading="lazy"
                  />
                </Link>
                <div className="medium_text mt-3 cursor-text-wrp">
                  <Link to={ROUTER.CAKE}>
                    Season Cake Blog
                  </Link>
                </div>
                <div className="body_text w-full mt-4 cursor-text-wrp text-color-muted">
                  Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                </div>
              </div>
              <div className="project-even">
                <div className="heading_4 mb-2 cursor-text-wrp">02.</div>
                <Link to={ROUTER.BEAUTYBLOG}>
                  <img
                    className="w-full project-img"
                    src="./images/design/beautymain.png"
                    alt="logo"
                    loading="lazy"
                  />
                </Link>

                <div className="medium_text mt-3 cursor-text-wrp">
                  <Link to={ROUTER.BEAUTYBLOG}>
                    Beauty Blog
                  </Link>
                </div>
                <div className="body_text w-full mt-4 cursor-text-wrp text-color-muted">
                  Welcome to my Beauty Blog! Find skincare tips, makeup tutorials, and the latest beauty trends for radiant skin.
                </div>
              </div>
              <div className="project-odd">
                <div className="heading_4 mb-2 cursor-text-wrp">03.</div>
                <Link to={ROUTER.FASHION}>
                  <img className="w-full project-img" src="./images/design/fashionmain.png" alt="logo" loading="lazy" />
                </Link>
                <div className="medium_text mt-3 cursor-text-wrp">
                  <Link to={ROUTER.FASHION}>Fashion App</Link>
                </div>
                <div className="body_text w-full mt-4 cursor-text-wrp text-color-muted">
                  Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                </div>
              </div>

              <div className="project-even">
                <div className="heading_4 mb-2 cursor-text-wrp">04.</div>

                <Link to={ROUTER.AGURI}>
                  <img
                    className="w-full project-img"
                    src="./images/design/agurimain.png"
                    alt="logo"
                    loading="lazy"
                  />
                </Link>

                <div className="medium_text mt-3 cursor-text-wrp">
                  <Link to={ROUTER.AGURI}>
                    Aguri Jewellery Website
                  </Link>
                </div>
                <div className="body_text w-full mt-4 cursor-text-wrp text-color-muted">
                  Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                </div>
              </div>
              <div className="project-even">
                <div className="heading_4 mb-2 cursor-text-wrp">05.</div>
                <Link to={ROUTER.ALIO}>
                  <img className="w-full project-img" src="./images/design/aliomain.png" alt="logo" loading="lazy" />
                </Link>
                <div className="medium_text mt-3 cursor-text-wrp">
                  <Link to={ROUTER.ALIO}>
                    Alio Yoga Website & App
                  </Link>
                </div>
                <div className="body_text w-full mt-4 cursor-text-wrp text-color-muted">
                  Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
                </div>
              </div>
            </Slider>
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

      {/*Contact me*/}
      {/* <div className="section send_message mt-5 md:mt-8">
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

                <div className="md:grid md:grid-cols-12 gap-4 first-line-contact">
                  <div className="relative mb-4 md:mb-0 col-span-6 customer-name contact_field">
                    <label className="mb-1 cursor-text-wrp">Your Name *</label>
                    <input
                      className={`input-form ${error?.name ? 'border-[red]' : ''}`}
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="relative col-span-6 customer-phone contact_field">
                    <label className="mb-1 cursor-text-wrp">Phone number *</label>

                    <input
                      className={`input-form ${error?.phone ? 'border-[red]' : ''}`}
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="relative my-[32px] contact_field">
                  <label className=" mb-1 cursor-text-wrp">Email address *</label>
                  <input
                    className={`input-form ${error?.email ? 'border-[red]' : ''}`}
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="relative customer-mess contact_field">
                  <label className="mb-1 cursor-text-wrp">Message *</label>
                  <textarea
                    className={`input-form ${error?.message ? 'border-[red]' : ''}`}
                    rows="4"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <span className="focus-border"></span>
                </div>
                <div className="heading_3 send-msg-btn mt-6 flex float-right">
                  <button
                    type="submit"
                    className={`relative cursor-pointer cursor-text-wrp flex gap-2 btn-contact ${loading ? 'btn-wrp-loading' : ''}`}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    <div className="btn-loading"><LoadingMail /></div>
                    <div className="btn-contact-text flex items-center">Send Message <img className="h-[50px]" src="./images/icons/arrow-up-right-l.svg" alt="logo" loading="lazy" /></div>

                  </button>
                </div>

              </div>
            </div>
          </div>
        </div> */}
    </div>
  )
}
export default Home;