import React, { useState, useEffect } from "react";

const About = () => {

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
      <div className="page-element bg-primary">
        <div className="container-fluid about1 md:py-0 py-6">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-1"></div>
            <div className="col-span-4">
              <img className="w-100" src="./images/about/banner-abt.png" alt="#" loading="lazy"></img>
            </div>
            <div className="col-span-6 flex items-center">
              <div className="">
                <div className="md:mt-0 mt-4 heading_5 mb-4 animate slideInUp animate--delay-fast cursor-text-wrp">
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
      </div>
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
      <div className="page-element mt-4 md:mt-9">
        <div className="container-fluid about2">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-3">
              <div className="img-container">
                <img className="w-100" src="./images/about/me.webp" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="col-span-3">
              <div className="heading_2 md:py-0 py-4 cursor-text-wrp">Self - Introduce</div>
            </div>

            <div className="col-span-6">
              <div className="">
                <div className=" body_text">
                  At just 24 years old, I was always driven to find my true passion in life. After trying a few different jobs, I discovered UX/UI design and suddenly everything fell into place. I realized that this was my true passion and I was determined to pursue a career in this field. Although I am relatively new to this industry, I have worked hard to learn a lot during the past 2 years. Now I am eager to gain hands-on experience and contribute to real-world projects in the field of UX/UI Design. I believe that with a strong sense of purpose and passion for design, I can make a valuable contribution to any organization looking for a dedicated and dynamic UX/UI Designer.
                </div>
                <div className="medium_text mb-2 cursor-text-wrp">
                  Basic Information
                </div>
                <div className="flex items-center body_text">
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
      <div className="page-element py-8 bg-primary mt-4 md:mt-9">
        <div className="container-fluid">
          <div className="md:grid md:grid-cols-12 gap-5">
            <div className="col-span-4 skill-common">
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
            <div className="col-span-1" />
            <div className="col-span-1 skill-title body_text cursor-text-wrp">
              DESIGN SOFTWARE
            </div>
            <div className="col-span-2 skill-container">
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">01/</div>
                <div className="cursor-text-wrp skill-name body_text">Figma</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">02/</div>
                <div className="cursor-text-wrp skill-name body_text">Adobe Illustrator</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">03/</div>
                <div className="cursor-text-wrp skill-name body_text">Adobe Photoshop</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">04/</div>
                <div className="cursor-text-wrp skill-name body_text">Adobe Indesign</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">05/</div>
                <div className="cursor-text-wrp skill-name body_text">Adobe XD</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">06/</div>
                <div className="cursor-text-wrp skill-name body_text">Shopify</div>
              </div>
              <div className="flex">
                <div className="cursor-text-wrp body_text mr-auto">07/</div>
                <div className="cursor-text-wrp skill-name body_text">Wordpress</div>
              </div>
              
            </div>
            <div className="col-span-1" />
            <div className="col-1 skill-title body_text">
              TECH STACK
            </div>
            <div className="col-span-2 skill-container">
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">01/</div>
                <div className="cursor-text-wrp skill-name body_text">HTML/SCSS</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">02/</div>
                <div className="cursor-text-wrp skill-name body_text">Tailwind/Bootstrap</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">03/</div>
                <div className="cursor-text-wrp skill-name body_text">JavaScript</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2">
                <div className="cursor-text-wrp body_text mr-auto">04/</div>
                <div className="cursor-text-wrpskill-name body_text">ReactJS / Nextjs</div>
              </div>
              <div className="flex pb-1 border-b border-solid border-ccc mb-2 boder-none">
                <div className="cursor-text-wrp body_text mr-auto">05/</div>
                <div className="cursor-text-wrp skill-name body_text">Angular</div>
              </div>
            </div>
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
      <div className="timeline">
        <div className="page-element container-fluid my-9">
          <div className="heading_3 mb-7 cursor-text-wrp">
            Educational Background
          </div>
          <div className="flex">
            <div className="w-full flex flex-col gap-3 timeline-card">
              <div className="timeline-top small_text cursor-text-wrp">
                Past - 2016
              </div>
              <div className="timeline-line">
                <div className="timeline-content"></div>
              </div>
              <div className="timeline-bottom mt-3">
                <p className="medium_text mb-3 cursor-text-wrp">Phung Khac Khoan High School</p>
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
                <p className="medium_text mb-3 cursor-text-wrp">HUNRE</p>
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
                <p className="medium_text mb-3 cursor-text-wrp">Arena Multimedia</p>
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
                <p className="medium_text mb-3 cursor-text-wrp">FPT Aptech VietNam</p>
                <p className="body_text cursor-text-wrp">Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="page-element container-fluid mt-4 md:my-9">
        <div className="heading_3 mb-5 cursor-text-wrp">
          My Core Values
        </div>
        <div className="md:grid md:grid-cols-12 gap-5">
          <div className="col-span-4 border border-solid border-ccc flex-col flex h-full core-hover">
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
              <div className="heading_6 mt-4 cursor-text-wrp">01.</div>
            </div>
          </div>
          <div className="col-span-4 border border-solid border-ccc flex-col flex h-full core-hover">
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
              <div className="heading_6 cursor-text-wrp">02.</div>
            </div>
          </div>
          <div className="col-span-4 border border-solid border-ccc flex-col flex h-full core-hover">
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
              <div className="heading_6 cursor-text-wrp">03.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 md:mb-6 text-center">
        <div className="last-content heading_4">
          <div className="container-fluid">
            <div className="grid grid-cols-12">
              <div className="col-span-1"></div>
              <div className="col-span-10 heading_4 cursor-text-wrp">
                “The surest way to make your dreams come true is to live them. Dreams don’t work unless you take action.”
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>

        </div>
      </div>
      <div class="">
        <div class="roll overflow-hidden mb-5">
          <div class="circle">
            <img className="h-[200px] w-full" src="./images/about/roll.svg" alt="logo" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;