import React, { useState, useEffect, act, useRef } from "react";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";

const About = () => {

  const skills = [
    {
      title: 'Design Tools',
      skills: ['Figma/Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Indesign', 'Shopify', 'Wordpress']
    },
    {
      title: 'Tech Stack',
      skills: ['HTML/SCSS', 'Bootstrap' ,'Tailwind', 'JavaScript', 'ReactJS', 'Angular']
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
    if(ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className="about-page">
      {/* <div className="img-container">
        <img className="w-100" src="./images/about/Showcase.webp" loading="lazy" alt="#"></img>
      </div> */}
      {/* New banner */}

      <div className="section page-element border-b border-solid border-999">
        <div className="md:grid grid-cols-12 gap-5 md:py-7 py-4">
          <div className="col-span-6 md:flex flex-col">
            <div className="about-title mb-1 font-medium animate slideInUp cursor-text-wrp">DUONG.NT</div>
            <div className="heading_2 h-full animate slideInUp cursor-text-wrp lg:mb-0 mb-4">HELLO AND WELCOME TO MY UX/UI PORTFOLIO.</div>
            <div className="flex items-center md:mb-0 mb-4" onClick={handleScrollToAbout}>
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
            <img className="w-100" src="./images/about/abtme.png" alt="#" loading="lazy"></img>
          </div>
        </div>
      </div>

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

      <div className="section" ref={ref}>
        <div className="py-4 md:py-6 md:grid grid-cols-12 gap-5 w-full border-b border-solid border-999">
          <div className="col-span-12 lg:col-span-3 md:flex items-center">
            <div className="heading_2 md:pb-0 pb-4 cursor-text-wrp animate slideInUp">ABOUT ME</div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="flex sm:block md:blog lg:flex flex-row gap-6 w-full">
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
      </div>
      <div className="page-element section mt-5 md:mt-7">
        <div className="about2">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="lg:col-span-3 md:col-span-6 animate slideInUp">
              <div className="img-container">
                <img className="w-full" src="./images/about/me.webp" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="lg:col-span-1 hidden lg:block">
              {/* <div className="heading_2 md:py-0 py-4 cursor-text-wrp animate slideInUp">Self - Introduce</div> */}
            </div>

            <div className="lg:col-span-8 md:col-span-6 animate body_text slideInUp cursor-text-wrp md:flex items-end">
              <div>
                <div className="text-[20px] mb-4 md:mb-5 md:mt-0 mt-4">Hello. My name is Duong.</div>
                <div className="lg:flex flex-row gap-5">
                  <div className="md:mb-3 mb-3">With 2 years of experience in UX/UI design, I've refined my skills in creating user-centric designs that balance aesthetics
                    and functionality. My journey in the field has given me a strong foundation in diverse design principles and methodologies.
                    Currently, I handle both Designer and Developer tasks, seamlessly blending design and development processes.
                    This dual role enables me to approach projects comprehensively, bridging the gap between design and implementation
                    to ensure that design visions translate effectively into responsive, high-performance digital products that are
                    both functional and visually engaging.
                  </div>
                  <div>
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
      </div>
      <div className="page-element mt-4 md:mt-7">
        <div className="section py-4 md:py-7 border-t border-solid border-ccc">
          <div className="md:grid grid-cols-12 gap-5">
            <div className="md:col-span-12 lg:col-span-4 skill-common mb-2 animate slideInUp">
              <div className="heading_2 mb-4 cursor-text-wrp">
                MY SKILLS
              </div>
              <div className="medium_text mid-text mb-4 cursor-text-wrp">
                Skills that I have so far, to provide my clients
              </div>
              <div className="body_text cursor-text-wrp text-color-muted md:w-[50%] lg:w-[100%]">
                “Learning new things brings me joy and satisfaction, as it allows me to grow, become more knowledgeable, and improve myself every day”
              </div>
            </div>

            {skills.map((skill, index) => (
              <div className="skill-card md:col-span-6 lg:col-span-4 flex flex-col gap-2 md:p-5 p-0 border-animation-hover" key={index}>
                <div className="hidden sm:flex flex-col gap-2">
                  <div className="skill-title heading_6 cursor-text-wrp md:mb-3 md:0">
                    {skill.title}
                  </div>
                  <div className="skill-container">
                    {skill.skills.map((skill, index) => (
                      <div className="flex pb-1 border-b border-solid border-999 mb-2" key={index}>
                        <div className="cursor-text-wrp body_text mr-auto">{index + 1}/</div>
                        <div className="cursor-text-wrp skill-name body_text">{skill}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`block sm:hidden my-collapse dark:border-b dark:border-999 ${index == 0 ? 'expanded' : ''}`}>
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
                            <div className="cursor-text-wrp body_text mr-auto">{index + 1}/</div>
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
      {/* Educational background */}
      <div className="bg-primary">
        <div className="section pt-5 md:pt-7">
          <div className="timeline-title heading_2 mb-5 md:mb-8 cursor-text-wrp">
            ACADEMIC PROFILE
          </div>
        </div>
        <div className="section-full timeline page-element pb-6 md:pb-9">
          <div className="m-w">
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
                  <p className="body_text cursor-text-wrp">Thach That district, Hanoi</p>
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
                  <p className="body_text cursor-text-wrp">Very good degree, GPA 3.4</p>
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
                  <p className="body_text cursor-text-wrp">Graphic Design | UX/UI Design</p>
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
                  <p className="body_text cursor-text-wrp">Developer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="md:my-7 my-4 section-full core-value px-0">
        <div className="m-w">
          <div className="heading_2 md:mb-6 mb-5 cursor-text-wrp core-value-title">
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
              gap: 30,
              gapMobile: 10,
              // process: true,
              paginate: false,
              navigator: false,
              active: 0
            }}
          >
            <div className="flex-col flex h-full core-hover">
              <div>
                <img className="w-full" src="./images/about/core1.png" alt="logo" loading="lazy" />
              </div>
              <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border-x border-b border-solid border-ccc">
                <div className="h-full">
                  <div className="medium_text mb-3 cursor-text-wrp">Live with passion</div>
                  <div className="body_text cursor-text-wrp text-color-muted">
                    Passion is the driving force behind success and happiness that pushes you to reach your highest potential.
                    “Nothing great in the world has ever been accomplished without passion.” ~ George Hegel
                  </div>
                </div>
                <div className="heading_5 mt-4 cursor-text-wrp">01.</div>
              </div>
            </div>
            <div className="flex-col flex h-full core-hover">
              <div>
                <img className="w-full" src="./images/about/core2.png" alt="logo" loading="lazy" />
              </div>
              <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border-x border-b border-solid border-ccc">
                <div className="h-full">
                  <div className="medium_text mb-3 cursor-text-wrp">Eager to learn</div>
                  <div className="body_text cursor-text-wrp text-color-muted">
                    "Learn from yesterday, live for today, hope for tomorrow. The important thing is to not stop questioning." ~ Arthur Wellesley
                  </div>
                </div>
                <div className="heading_5 cursor-text-wrp">02.</div>
              </div>
            </div>
            <div className="flex-col flex h-full core-hover">
              <div>
                <img className="w-full" src="./images/about/core3.png" alt="logo" loading="lazy" />
              </div>
              <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border-x border-b border-solid border-ccc">
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
            <div className="grid grid-cols-12">
              <div className="col-span-1"></div>
              <div className="col-span-10 heading_4 cursor-text-wrp mb-2 md:mb-4">
                “The surest way to make your dreams come true is to live them. Dreams don’t work unless you take action.”
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
              <Link className="scroll-text md:text-[60px] text-[40px]" data-replace="GET IN TOUCH">
                <span>
                  GET IN TOUCH
                </span>
              </Link>
            </div>
            <div className="ml-1 md:ml-3">
              <img className="md:h-[90px] h-[65px] w-full" src="./images/icons/arrow-up-right-l.svg" alt="logo" loading="lazy" />
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
    </div >
  )
}

export default About;