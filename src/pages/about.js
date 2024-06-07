import React, { useState, useEffect, act } from "react";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";

const About = () => {

  const skills = [
    {
      title: 'Design Tools',
      skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Indesign', 'Adobe XD', 'Shopify', 'Wordpress']
    },
    {
      title: 'Tech Stack',
      skills: ['HTML/SCSS', 'Tailwind/Bootstrap', 'JavaScript', 'ReactJS / Nextjs', 'Angular']
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

  return (
    <div className="about-page">
      {/* <div className="img-container">
        <img className="w-100" src="./images/about/Showcase.webp" loading="lazy" alt="#"></img>
      </div> */}
      {/* New banner */}

      <div className="section page-element border-b border-solid border-999">
        <div className="md:grid grid-cols-12 gap-5 md:py-6 py-4">
          <div className="col-span-6 md:flex flex-col">
            <div className="md:text-[106px] font-medium animate slideInUp cursor-text-wrp">DUONG.NT</div>
            <div className="md:text-[42px] h-full animate slideInUp cursor-text-wrp">HELLO AND WELCOME TO MY UX/UI PORTFOLIO.</div>
            <div className="flex items-center">
              <div className="bg-black mr-2 p-1 rounded-full">
                <img className="" src="./images/icons/arrow-down.svg" alt="logo" loading="lazy" />
              </div>
              <div className="scroll-text medium_text" data-replace="MORE ABOUT ME">
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

      <div className="page-element section mt-6 md:mt-9">
        <div className="about2">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-3 animate slideInUp">
              <div className="img-container">
                <img className="w-100" src="./images/about/me.webp" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="col-span-3">
              <div className="heading_2 md:py-0 py-4 cursor-text-wrp animate slideInUp">Self - Introduce</div>
            </div>

            <div className="col-span-6 animate slideInUp cursor-text-wrp">
              <div className="">
                <div className="mb-4 body_text">
                  At just 24 years old, I was always driven to find my true passion in life. After trying a few different jobs, I discovered UX/UI design and suddenly everything fell into place. I realized that this was my true passion and I was determined to pursue a career in this field. Although I am relatively new to this industry, I have worked hard to learn a lot during the past 2 years. Now I am eager to gain hands-on experience and contribute to real-world projects in the field of UX/UI Design. I believe that with a strong sense of purpose and passion for design, I can make a valuable contribution to any organization looking for a dedicated and dynamic UX/UI Designer.
                </div>
                <div className="medium_text mb-2 cursor-text-wrp">
                  Basic Information
                </div>
                <div className="flex items-center body_text mb-4">
                  Birthday: 19/08/1998
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Nationality: Local Vietnamese
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Maritality: Single
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Gender: Female
                </div>
                <div className="medium_text mb-2 md:mt-5 cursor-text-wrp">
                  Hobbies
                </div>
                <div className="flex items-center pb-0 body_text cursor-text-wrp">
                  Reading
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Drawing
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Travelling
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Swimming
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-element py-6 md:py-8 border-y border-solid border-ccc mt-6 md:mt-9">
        <div className="section">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-4 skill-common mb-2 animate slideInUp">
              <div className="heading_3 mb-4 cursor-text-wrp">
                My Skills
              </div>
              <div className="medium_text mid-text mb-3 cursor-text-wrp">
                Skills that I have so far, to provide my clients
              </div>
              <div className="body_text cursor-text-wrp">
                “Learning new things brings me joy and satisfaction, as it allows me to grow, become more knowledgeable, and improve myself every day”
              </div>
            </div>

            {skills.map((skill, index) => (
              <div className="skill-card col-span-4 flex flex-col gap-2 p-5 border border-solid border-ccc" key={index}>
                <div className="hidden sm:flex flex-col gap-2">
                  <div className="skill-title heading_6 cursor-text-wrp md:mb-3 md:0">
                    {skill.title}
                  </div>
                  <div className="skill-container">
                    {skill.skills.map((skill, index) => (
                      <div className="flex pb-1 border-b border-solid border-ccc mb-2" key={index}>
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
      <div>
        <div className="md:grid md:grid-cols-12 gap-4">
          <div className="col-span-3">
            <div></div>
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
          <div className="col-span-3"></div>
        </div>
      </div>
      <div className="section pt-6 md:pt-9">
        <div className="timeline-title heading_3 mb-5 md:mb-8 cursor-text-wrp">
          Educational Background
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
      <div className=" md:my-6 section-full core-value px-0">
        <div className="m-w">
          <div className="heading_3 md:mb-6 mb-5 cursor-text-wrp core-value-title">
            My Core Values
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
              process: true,
              paginate: false,
              navigator: false,
              active: 1
            }}
          >
            <div className="flex-col flex h-full core-hover">
              <div>
                <img className="w-full" src="./images/about/core1.png" alt="logo" loading="lazy" />
              </div>
              <div className="core-main pt-4 px-3 pb-5 flex-col flex h-full border-x border-b border-solid border-ccc">
                <div className="h-full">
                  <div className="medium_text mb-3 cursor-text-wrp">Live with passion</div>
                  <div className="body_text cursor-text-wrp">
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
                  <div className="body_text cursor-text-wrp">
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
                  <div className="body_text cursor-text-wrp">
                    “Life doesn't require that we be the best, only that we try our best.” ~ H.Jackson Brown, Jr
                  </div>
                </div>
                <div className="heading_5 cursor-text-wrp">03.</div>
              </div>
            </div>
          </Slider>
        </div>

      </div>
      <div className="mb-2 md:mb-6 text-center">
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
        <div className="flex justify-center md:mb-9 mb-4">
          <div className="flex border-b border-solid border-black">
            <div className="">
              <Link className="scroll-text md:text-[60px]" data-replace="GET IN TOUCH">
                <span>
                  GET IN TOUCH
                </span>
              </Link>
            </div>
            <div className="ml-3">
              <img className="h-[90px] w-full" src="./images/icons/arrow-up-right-l.svg" alt="logo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* <div class="">
        <div class="roll overflow-hidden">
          <div class="circle">
            <img className="h-[200px] w-full" src="./images/about/roll.svg" alt="logo" loading="lazy" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About;