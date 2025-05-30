import React, { useState, useEffect, act, useRef } from "react";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";

const About = () => {

  const skills = [
    {
      title: 'Design Tools',
      skills: ['Figma/Adobe XD', 'Blender','Adobe Illustrator', 'Adobe Photoshop', 'Adobe Indesign', 'Shopify', 'Wordpress']
    },
    {
      title: 'Tech Stack',
      skills: ['HTML/SCSS', 'Tailwind/Bootstrap', 'SQL', 'JavaScript', 'ReactJS', 'Angular', 'PHP/Laravel']
    }
  ]
  const [iconVisible, setIconVisible] = useState(true);

  const handleMouseEnter = () => {
    setIconVisible(false);
  };

  const handleMouseLeave = () => {
    setIconVisible(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cards = entry.target.querySelectorAll('.timeline-card');
        if (entry.isIntersecting) {
          // Force a reflow
          void entry.target.offsetWidth;
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('timeline-active');
            }, index * 1000);
          });
        } else {
          cards.forEach((card) => {
            card.classList.remove('timeline-active');
          });
        }
      });
    }, {
      threshold: 0.1
    });
    let timelineCards = document.querySelectorAll('.timeline');
    timelineCards.forEach((card) => {
      observer.observe(card);
    });

  }, []);

  const ref = useRef();

  const handleScrollToAbout = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
      <div className="about-page">
        <div className="md:my-7 my-4 section-full px-0">
          <div className="section w-full relative">
            <div className="about-hero-title">
            <span
                className="say-hi animate textTyping"
                style={{
                  animationDelay: '0s',
                  animationDuration: '1s',
                  width: '10ch',
                  animationTimingFunction: 'steps(9)',
                }}
            >
              Hi! I'm Thuy
            </span>
              <span
                  className="say-hi animate textTyping"
                  style={{
                    animationDelay: '1s',
                    animationDuration: '0.5s',
                    width: '6ch',
                    animationTimingFunction: 'steps(6)',
                    marginTop: 'clamp(-1.5rem, 1.5vw, -1.5rem)',
                  }}
              >
              Duong.
            </span>
            </div>
            <div className="w-full flex justify-center relative">
              <div className="w-[60%] sm:w-[50%] md:w-[30%] relative">
                <img className="w-100" src="./images/about/me.webp" alt="#" loading="lazy" width="630"
                     height="430"></img>
                <div className="hero-img-small">
                  <img src="./images/fl3.svg" alt="#" loading="lazy" width="100" height="100"></img>
                </div>
              </div>
            </div>
            <div className="hero-des mt-4">
            <span
                className="say-hi animate textTyping"
                style={{
                  animationDelay: '1.5s',
                  animationDuration: '2s',
                  width: '27ch',
                  animationTimingFunction: 'steps(27)',
                }}
            >I'm a Product Designer & Developer.</span>
              <span
                  className="say-hi animate textTyping"
                  style={{
                    animationDelay: '2.5s',
                    animationDuration: '1s',
                    width: '22ch',
                    animationTimingFunction: 'steps(10)',
                  }}
              >Welcome to my portfolio!</span>
            </div>
          </div>
        </div>
        {/* <div className="img-container">
        <img className="w-100" src="./images/about/Showcase.webp" loading="lazy" alt="#"></img>
      </div> */}
        {/* New banner */}

        {/* <div className="section page-element border-b border-solid border-ccc">
        <div className="md:grid grid-cols-12 gap-5 md:py-7 py-4">
          <div className="col-span-6 md:flex flex-col">
            <div className="about-title mb-1 font-medium animate slideInUp cursor-text-wrp">DUONG.NT</div>
            <div className="heading_2 h-full animate slideInUp cursor-text-wrp lg:mb-0 mb-4">HELLO AND WELCOME TO MY UX/UI PORTFOLIO.</div>
            <div className="flex items-center lg:mb-0 md:mb-4 mb-4" onClick={handleScrollToAbout}>
              <div className="bg-black mr-2 p-1 rounded-full arrow-down-hover">
                <img className="" src="./images/icons/arrow-down.svg" alt="logo" loading="lazy" />
              </div>
              <div
                className="medium_text"
              >
                <span>MORE ABOUT ME</span>
              </div>
            </div>

          </div>
          <div className="col-span-6">
            <img className="w-100" src="./images/about/abtme.png" alt="#" loading="lazy" width="630" height="430"></img>
          </div>
        </div>
      </div> */}

        {/* <div className="page-element bg-primary">
        <div className="section about1 md:py-0 py-6">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-1"></div>
            <div className="col-span-4">
              <img className="w-100" src="./images/about/banner-abt.png" alt="#" loading="lazy"></img>
            </div>
            <div className="col-span-6 flex items-center">
              <div className="">
                <div className="md:mt-0 mt-4 heading_4 mb-4 animate slideInUp animate--delay-fast cursor-text-wrp">
                  So glad to see you here!
                </div>
                <div className="mb-3 animate slideInUp animate--delay-slow cursor-text-wrp">Dear all</div>
                <div className="body_text cursor-text-wrp animate slideInUp animate--delay-slow cursor-text-wrp">
                  Hello and welcome to my website! I'm eager to share with you some of my UX/UI design projects and experiences. As an aspiring professional, I'm dedicated to continuous learning and growth in this field. If you're a recruiter or hiring manager interested in my skills and experience, I'd love to connect with you. Please feel free to reach out if you have any questions or if you'd like to discuss potential opportunities. Thank you for visiting my portfolio!
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div> */}

        {/* <div className="page-element">
        <div className="container-fluid about1 py-8">
          <div className="grid grid-cols-12 row-n1">
            <div className="col-span-1"></div>
            <div className="col-span-4"></div>
            <div className="col-span-6">
              <div className="heading_5 mb-4 animate slideInUp animate--delay-fast">
                So glad to see you here!
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="grid grid-cols-12 row-n2">
            <div className="col-span-1"></div>
            <div className="col-span-4 about1-1">
              <p>From: Nguyen Thuy Duong</p>
              <p>To: You</p>
            </div>
            <div className="col-span-6 about1-2">
              <div className="body_text cursor-text-wrp animate slideInUp animate--delay-medium">
                Hello and welcome to my website! I'm eager to share with you some of my UX/UI design projects and experiences. As an aspiring professional, I'm dedicated to continuous learning and growth in this field. If you're a recruiter or hiring manager interested in my skills and experience, I'd love to connect with you. Please feel free to reach out if you have any questions or if you'd like to discuss potential opportunities. Thank you for visiting my portfolio!
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div> */}

        {/* <div className="section" ref={ref}>
        <div className="py-4 md:py-6 md:grid grid-cols-12 gap-5 w-full border-b border-solid border-ccc">
          <div className="col-span-12 lg:col-span-3 md:flex items-center">
            <div className="heading_2 md:pb-0 pb-4 cursor-text-wrp animate slideInUp">ABOUT ME</div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="flex sm:block md:blog lg:flex flex-row gap-6 w-full animate slideInUp">
              <div className="sm:mb-4 mb-0 lg:mb-0">
                <div className="medium_text mb-3 cursor-text-wrp">
                  Basic Information
                </div>
                <div className="block sm:flex md:flex lg:flex items-center md:justify-start gap-5 lg:gap-0 body_text cursor-text-wrp">
                  <div className="md:mb-0 mb-2">BOD: 08/19/1998</div>
                  <img className="md:block hidden lg:mx-3 md:mx-0 about-dot sm:mx-2 mx-0" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  <div className="md:mb-0 mb-2">Nationality: Local Vietnamese</div>
                  <img className="md:block hidden lg:mx-3 md:mx-0 about-dot sm:mx-2 mx-0" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  <div className="md:mb-0 mb-2">Maritality: Single</div>
                  <img className="md:block hidden lg:mx-3 md:mx-0 about-dot sm:mx-2 mx-0" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  <div className="md:mb-0 mb-2">Gender: Female</div>
                </div>
              </div>
              <div className="">
                <div className="medium_text mb-3 cursor-text-wrp">
                  Hobbies
                </div>
                <div className="block sm:flex md:flex lg:flex items-center lg:justify-end pb-0 body_text cursor-text-wrp gap-5 md:gap-0">
                  <div className="md:mb-0 mb-2">Learning</div>
                  <img className="md:block hidden md:mx-3 about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  <div className="md:mb-0 mb-2">Reading</div>
                  <img className="md:block hidden md:mx-3 about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  <div className="md:mb-0 mb-2">Drawing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        {/* ABOUT ME NEW */}
        <div className="mt-5 md:mt-6">
          <div className="section">
            <div className="md:grid grid-cols-12 gap-5 animate slideInUp animate--delay-slow">
              <div className="col-span-1"></div>
              <div className="col-span-2">
                <div className="heading_5 hidden md:block">ABOUT ME</div>
              </div>
              <div className="col-span-4">

                <div className="md:mb-3 mb-3">With 2 years of experience in UX/UI design, I've refined my skills in
                  creating user - centric designs that balance aesthetics
                  and functionality. My journey in the field has given me a strong foundation in diverse design
                  principles and methodologies.
                  Currently, I handle both Designer & Developer tasks, seamlessly blending design and development
                  processes.
                  This dual role enables me to approach projects comprehensively, bridging the gap between design and
                  implementation
                  to ensure that design visions translate effectively into responsive, high-performance digital products
                  that are
                  both functional and visually engaging.
                </div>

              </div>
              <div className="col-span-4">
                <div className="">
                  I am confident in my ability to quickly grasp work, meet all requirements, and ensure timely
                  completion.
                  My approach is holistic, considering both the visual and technical aspects of web development, which
                  helps
                  in delivering cohesive and polished end products. Throughout my career, I have continuously sought to
                  improve my skills and
                  stay updated with industry trends. My commitment to excellence drives me to deliver
                  high-quality work that not only meets but also anticipates user needs.
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>

        </div>

        <div className="additional-info">
          <div className="mt-5 md:mt-7 section">
            <div className="md:grid grid-cols-12 gap-5 py-4 animate slideInUp">
              <div className="md:col-span-1"></div>
              <div className="md:col-span-10">
                <div className="mb-5 heading_5">ADDITIONAL INFORMATIONS</div>
                <div className="md:grid grid-cols-12 py-4 items-center gap-5 border-t border-solid border-ccc">
                  <div className="col-span-2 medium_text cursor-text-wrp md:block hidden">
                    01/
                  </div>
                  <div className="col-span-2 medium_text cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Basic Info
                  </div>
                  <div className="md:hidden block">
                    <div className="medium_text mb-3">01/ Basic Info</div>
                  </div>
                  <div className="col-span-8">
                    <div
                        className="block md:flex lg:flex items-center md:justify-start gap-5 lg:gap-0 body_text cursor-text-wrp">
                      <div className="md:mb-0 mb-2">DOB: August 1998</div>
                      <img className="md:block hidden lg:mx-4 md:mx-0 about-dot sm:mx-2 mx-0"
                           src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Nationality: Local Vietnamese</div>
                      <img className="md:block hidden lg:mx-4 md:mx-0 about-dot sm:mx-2 mx-0"
                           src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Maritality: Single</div>
                      <img className="md:block hidden lg:mx-4 md:mx-0 about-dot sm:mx-2 mx-0"
                           src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Gender: Female</div>
                    </div>
                  </div>
                </div>
                <div className="md:grid grid-cols-12 gap-5 py-4 items-center border-t border-solid border-ccc">
                  <div className="col-span-2 medium_text cursor-text-wrp md:block hidden">
                    02/
                  </div>
                  <div className="col-span-2 medium_text cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Hobbies
                  </div>
                  <div className="md:hidden block">
                    <div className="medium_text mb-3">02/ Hobbies</div>
                  </div>
                  <div className="col-span-8">
                    <div
                        className="block sm:flex md:flex lg:flex items-center lg:justify-start pb-0 body_text cursor-text-wrp gap-5 md:gap-0">
                      <div className="md:mb-0 mb-2">Learning</div>
                      <img className="md:block hidden md:mx-4 about-dot" src="./images/about/Ellipse27.webp" alt="#"
                           loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Reading</div>
                      <img className="md:block hidden md:mx-4 about-dot" src="./images/about/Ellipse27.webp" alt="#"
                           loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Drawing</div>
                      <img className="md:block hidden md:mx-4 about-dot" src="./images/about/Ellipse27.webp" alt="#"
                           loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Playing guitar</div>
                      <img className="md:block hidden md:mx-4 about-dot" src="./images/about/Ellipse27.webp" alt="#"
                           loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Singing</div>
                      <img className="md:block hidden md:mx-4 about-dot" src="./images/about/Ellipse27.webp" alt="#"
                           loading="lazy"></img>
                      <div className="md:mb-0 mb-2">Swimming</div>
                    </div>
                  </div>
                </div>
                <div className="md:grid grid-cols-12 gap-5 pt-4 items-center border-t border-solid border-ccc">
                  <div className="col-span-2 medium_text cursor-text-wrp md:block hidden">
                    03/
                  </div>
                  <div className="col-span-2 medium_text cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Languages
                  </div>
                  <div className="md:hidden block">
                    <div className="medium_text mb-3">03/ Languages</div>
                  </div>
                  <div className="col-span-8">
                    <div
                        className="block sm:flex md:flex lg:flex items-center lg:justify-start pb-0 body_text cursor-text-wrp gap-5 md:gap-0">
                      <div className="md:mb-0 mb-2">Vietnamese (Native language)</div>
                      <img className="md:block hidden md:mx-4 about-dot" src="./images/about/Ellipse27.webp" alt="#"
                           loading="lazy"></img>
                      <div className="md:mb-0 mb-2">English (B2 - Upper Intermediate)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1"></div>
            </div>
          </div>
        </div>

        {/* <div className="page-element section mt-5 md:mt-7">
        <div className="about2">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="lg:col-span-3 md:col-span-6 animate slideInUp">
              <div className="img-container">
                <img className="w-full" src="./images/about/me.webp" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="lg:col-span-1 hidden lg:block">
              <div className="heading_2 md:py-0 py-4 cursor-text-wrp animate slideInUp">Self - Introduce</div>
            </div>

            <div className="lg:col-span-8 md:col-span-6 animate body_text slideInUp cursor-text-wrp md:flex items-end">
              <div className="animate slideInUp">

                <div className="text-[20px] mb-4 md:mb-5 md:mt-0 mt-4">Hello. My name is Duong.</div>
                <div className="grid grid-cols-8 lg:gap-6">
                  <div className="col-span-8 lg:col-span-4">
                    <div className="md:mb-3 mb-3">With 2 years of experience in UX/UI design, I've refined my skills in creating user-centric designs that balance aesthetics
                      and functionality. My journey in the field has given me a strong foundation in diverse design principles and methodologies.
                      Currently, I handle both Designer & Developer tasks, seamlessly blending design and development processes.
                      This dual role enables me to approach projects comprehensively, bridging the gap between design and implementation
                      to ensure that design visions translate effectively into responsive, high-performance digital products that are
                      both functional and visually engaging.
                    </div>
                  </div>
                  <div className="col-span-8 lg:col-span-4">
                    I am confident in my ability to quickly grasp work, meet all requirements, and ensure timely completion.
                    My approach is holistic, considering both the visual and technical aspects of web development, which helps
                    in delivering cohesive and polished end products. Throughout my career, I have continuously sought to improve my skills and
                    stay updated with industry trends. My commitment to excellence drives me to deliver
                    high-quality work that not only meets but also anticipates user needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


        {/* <div className="section">
        <div className="mt-6 md:mt-9">
          <div className="md:grid grid-cols-12 gap-5">
            <div className="col-span-2"></div>
            <div className="col-span-8">
              <div className="flex w-full">
                <div className="mb-4 heading_5 mr-auto">EDUCATIONAL BACKGROUND</div>
              </div>

              <div className="md:grid grid-cols-8 items-center py-4 gap-5 border-t border-solid border-ccc">
                <div className="col-span-3 body_text cursor-text-wrp">
                  Past - 2016
                </div>
                <div className="col-span-5">
                  <div className="mb-1 medium_text">Phung Khac Khoan High School</div>
                  <div className="text-color-muted">Thach That district, Hanoi</div>
                </div>

              </div>
              <div className="md:grid grid-cols-8 gap-5 items-center py-4 border-t border-solid border-ccc">
                <div className="col-span-3 body_text cursor-text-wrp">
                  2016 - JULY 2020
                </div>
                <div className="col-span-5">
                  <div className="mb-1 medium_text">HUNRE (Hanoi University of Natural Resources & Environment)</div>
                  <div className="text-color-muted">Very good degree, GPA 3.4</div>
                </div>
              </div>
              <div className="md:grid grid-cols-8 gap-5 items-center py-4 border-t border-solid border-ccc">
                <div className="col-span-3 body_text cursor-text-wrp">
                  AUGUST 2020 - JANUARY 2022
                </div>
                <div className="col-span-5">
                  <div className="mb-1 medium_text">Arena Multimedia</div>
                  <div className="md:mb-0 text-color-muted">Graphic Design | UX/UI Design</div>
                </div>
              </div>
              <div className="md:grid grid-cols-8 gap-5 items-center py-4 border-t border-solid border-ccc">
                <div className="col-span-3 body_text cursor-text-wrp">
                  MAY 2022 - NOVEMBER 2023
                </div>
                <div className="col-span-5">
                  <div className="mb-1 medium_text">FPT Aptech VietNam</div>
                  <div className="md:mb-0 text-color-muted">Website Developer (FE & BE)</div>
                </div>
              </div>

            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div> */}

        {/* Educational background */}
        <div className="bg-primary">
          <div className="section pt-5 md:pt-8 md:mt-8 mt-6">
            <div className="mb-7 heading_5 mr-auto animate slideInUp">EDUCATIONAL BACKGROUND</div>
          </div>
          <div className="timeline page-element pb-5 md:pb-8">
            <div className="section">
              <div className="flex timeline-wrp cursor-text-wrp">
                <div className="w-full flex flex-col gap-3 timeline-card">
                  <div className="timeline-top small_text cursor-text-wrp">
                    Past - 2016
                  </div>
                  <div className="timeline-line">
                    <div className="timeline-content"></div>
                  </div>
                  <div className="timeline-bottom mt-3">
                    <p className="heading_6 mb-3 cursor-text-wrp">Phung Khac Khoan High School</p>
                    <p className="body_text cursor-text-wrp text-color-muted">Thach That district, Hanoi</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3 timeline-card">
                  <div className="timeline-top small_text cursor-text-wrp">
                    2016 - 7/2020
                  </div>
                  <div className="timeline-line">
                    <div className="timeline-content"></div>
                  </div>
                  <div className="timeline-bottom mt-3">
                    <p className="heading_6 mb-3 cursor-text-wrp">HUNRE</p>
                    <p className="body_text cursor-text-wrp text-color-muted">Very good degree, GPA 3.4</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3 timeline-card">
                  <div className="timeline-top small_text cursor-text-wrp">
                    8/2020 - 2022
                  </div>
                  <div className="timeline-line">
                    <div className="timeline-content"></div>
                  </div>
                  <div className="timeline-bottom mt-3">
                    <p className="heading_6 mb-3 cursor-text-wrp">Arena Multimedia</p>
                    <p className="body_text cursor-text-wrp text-color-muted">Graphic Design | UX/UI Design</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3 timeline-card">
                  <div className="timeline-top small_text cursor-text-wrp">
                    Past - 5/2022 - 2023
                  </div>
                  <div className="timeline-line">
                    <div className="timeline-content"></div>
                  </div>
                  <div className="timeline-bottom mt-3">
                    <p className="heading_6 mb-3 cursor-text-wrp">FPT Aptech VietNam</p>
                    <p className="body_text cursor-text-wrp text-color-muted">Website Developer (FE + BE)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <div className="mt-5 md:mt-7 section">
            <div className="md:grid grid-cols-12 gap-5 py-4 animate slideInUp">
              <div className="md:col-span-1"></div>
              <div className="md:col-span-10">
                <div className="mb-5 heading_5">COURSES & CERTIFICATES</div>
                <div className="md:grid grid-cols-12 py-4 items-center gap-5 border-t border-solid border-ccc">
                  <div className="col-span-2 cursor-text-wrp md:block hidden">
                    2024
                  </div>
                  <div className="col-span-3 cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Coursera
                  </div>
                  <div className="col-span-7 flex">
                    <div
                        className="block medium_text md:flex lg:flex items-center md:justify-start gap-5 lg:gap-0 body_text cursor-text-wrp">
                      Google UX Design Professional Certificate
                    </div>
                    <div className="ml-auto"><a className="text-link" href="https://coursera.org/share/fe7459f88ba159c702df14bd2adfb86d" target="_blank">View detail</a></div>
                  </div>
                </div>
                <div className="md:grid grid-cols-12 py-4 items-center gap-5 border-t border-solid border-ccc">
                  <div className="col-span-2 cursor-text-wrp md:block hidden">
                    2025
                  </div>
                  <div className="col-span-3 cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Udemy
                  </div>
                  <div className="col-span-7">
                    <div
                        className="block md:flex medium_text lg:flex items-center md:justify-start gap-5 lg:gap-0 body_text cursor-text-wrp">
                      Python Complete Course For Beginners
                    </div>
                  </div>
                </div>
                <div className="md:grid grid-cols-12 py-4 items-center gap-5 border-t border-solid border-ccc">
                  <div className="col-span-2 cursor-text-wrp md:block hidden">
                    2023
                  </div>
                  <div className="col-span-3 cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Domestika
                  </div>
                  <div className="col-span-7">
                    <div
                        className="block md:flex medium_text lg:flex items-center md:justify-start gap-5 lg:gap-0 body_text cursor-text-wrp">
                      Introduction to Photoshop for Illustration
                    </div>
                  </div>
                </div>
                <div className="md:grid grid-cols-12 py-4 items-center gap-5 border-t border-solid border-ccc">
                  <div className="col-span-2 cursor-text-wrp md:block hidden">
                    2024
                  </div>
                  <div className="col-span-3 cursor-text-wrp mb-3 md:mb-0 md:block hidden">
                    Art Workout Creative
                  </div>
                  <div className="col-span-7">
                    <div
                        className="block md:flex medium_text lg:flex items-center md:justify-start gap-5 lg:gap-0 body_text cursor-text-wrp">
                      Hand-drawing course for beginners
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1"></div>
            </div>
          </div>
        </div>

        <div className="page-element mt-6 md:mt-6">
          <div className="section pt-4 md:pt-7">
            <div className="md:grid grid-cols-12 gap-6">
              <div className="md:col-span-12 lg:col-span-4 skill-common mb-2 animate slideInUp">
                <div className="heading_5 mb-4 cursor-text-wrp">
                  MY SKILLS
                </div>
                <div className="medium_text mid-text mb-4 cursor-text-wrp">
                  Skills that I have so far, to provide my clients
                </div>
                <div className="body_text cursor-text-wrp text-color-muted md:w-[50%] lg:w-[100%]">
                  “Learning new things brings me joy and satisfaction, as it allows me to grow, become more
                  knowledgeable, and improve myself every day”
                </div>
              </div>

              {skills.map((skill, index) => (
                  <div
                      className="skill-card md:col-span-6 lg:col-span-4 flex flex-col gap-2 md:p-5 p-0 border-animation-hover"
                      key={index}>
                    <div className="hidden sm:flex flex-col gap-2">
                      <div className="skill-title heading_6 cursor-text-wrp md:mb-3 md:0">
                        {skill.title}
                      </div>
                      <div className="skill-container">
                        {skill.skills.map((skill, index) => (
                            <div className="flex pb-1 border-b border-solid border-ccc mb-2" key={index}>
                              <div className="cursor-text-wrp body_text mr-auto">0{index + 1}.</div>
                              <div className="cursor-text-wrp skill-name body_text">{skill}</div>
                            </div>
                        ))}
                      </div>
                    </div>
                    <div
                        className={`block sm:hidden my-collapse dark:border-b dark:border-999 ${index == 0 ? 'expanded' : ''}`}>
                      <div className="question-container flex">
                        <div className="question mr-auto heading_6">
                          {skill.title}
                        </div>
                        <div className="btn-question flex justify-center items-center">
                          <svg role="presentation" focusable="false" width="12" height="9"
                               className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor"
                                  strokeWidth="1.5"></path>
                          </svg>
                        </div>
                      </div>
                      <div className={`content-container block sm:hidden`}>
                        <div className="flex justify-end">
                          <div className="skill-container w-[60%] pt-2">
                            {skill.skills.map((skill, index) => (
                                <div className="flex pb-1 border-b border-solid border-ccc mb-2" key={index}>
                                  <div className="cursor-text-wrp body_text mr-auto">0{index + 1}.</div>
                                  <div className="cursor-text-wrp skill-name body_text">{skill}</div>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:my-8 my-6 section-full core-value px-0">
          <div className="section">
            <div className="heading_5 md:mb-6 mb-5 cursor-text-wrp core-value-title animate slideInUp">
              MY CORE VALUES
            </div>
            <Slider
                configs={{
                  sliderPerRow: 3,
                  sliderPerRowMobile: 1.1,
                  allowDrag: true,
                  duration: 400,
                  auto: false,
                  autoDuration: 1000,
                  gap: 40,
                  gapMobile: 10,
                  // process: true,
                  paginate: false,
                  navigator: false,
                  active: 0
                }}
            >
              <div className="flex-col flex h-full core-hover">
                {/* <div>
                <img className="w-full" src="./images/about/core1.png" alt="logo" loading="lazy" />
              </div> */}
                <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border border-solid border-ccc">
                  <div className="h-full">
                    <div className="medium_text mb-3 cursor-text-wrp">Live with passion</div>
                    <div className="body_text cursor-text-wrp text-color-muted">
                      Passion is the driving force behind success and happiness that pushes you to reach your highest
                      potential.
                      “Nothing great in the world has ever been accomplished without passion.” ~ George Hegel
                    </div>
                  </div>
                  <div className="heading_5 mt-4 cursor-text-wrp">01.</div>
                </div>
              </div>
              <div className="flex-col flex h-full core-hover">
                {/* <div>
                <img className="w-full" src="./images/about/core2.png" alt="logo" loading="lazy" />
              </div> */}
                <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border border-solid border-ccc">
                  <div className="h-full">
                    <div className="medium_text mb-3 cursor-text-wrp">Eager to learn</div>
                    <div className="body_text cursor-text-wrp text-color-muted">
                      "Learn from yesterday, live for today, hope for tomorrow. The important thing is to not stop
                      questioning." ~ Arthur Wellesley
                    </div>
                  </div>
                  <div className="heading_5 cursor-text-wrp">02.</div>
                </div>
              </div>
              <div className="flex-col flex h-full core-hover">
                {/* <div>
                <img className="w-full" src="./images/about/core3.png" alt="logo" loading="lazy" />
              </div> */}
                <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border border-solid border-ccc">
                  <div className="h-full">
                    <div className="medium_text mb-3 cursor-text-wrp">Undeterred by the hardships</div>
                    <div className="body_text cursor-text-wrp text-color-muted">
                      “Life doesn't require that we be the best, only that we try our best.” ~ H.Jackson Brown, Jr
                    </div>
                  </div>
                  <div className="heading_5 cursor-text-wrp">03.</div>
                </div>
              </div>
            </Slider>
          </div>

        </div>
        <div className="mb-5 md:mb-6 text-center">
          <div className="last-content heading_4">
            <div className="section">
              <div className="md:grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10 heading_4 cursor-text-wrp mb-2 md:mb-4">
                  “The surest way to make your dreams come true is to live them. Dreams don’t work unless you take
                  action.”
                </div>
                <div className="col-span-1"></div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className="flex justify-center md:mb-9 mb-6">
            <div className="flex border-b border-solid border-black">
              <div className="">
                <Link to={ROUTER.CONTACT} className="scroll-text md:text-[60px] text-[40px]"
                      data-replace="GET IN TOUCH">
                <span>
                  GET IN TOUCH
                </span>
                </Link>
              </div>
              <div className="ml-1 md:ml-3">
                <img className="md:h-[90px] h-[65px] w-full" src="./images/icons/arrow-up-right-l.svg" alt="logo"
                     loading="lazy"/>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="">
        <div className="roll overflow-hidden">
          <div className="circle">
            <img className="h-[200px] w-full" src="./images/about/roll.svg" alt="logo" loading="lazy" />
          </div>
        </div>
      </div> */}
      </div>
  )
}

export default About;