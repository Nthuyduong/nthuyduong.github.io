import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="img-container">
        <img className="w-100" src="./images/about/Showcase.webp" loading="lazy" alt="#"></img>
      </div>
      <div className="page-element">
        <div className="container-fluid about1">
          <div className="grid grid-cols-12 row-n1">
            <div className="col-span-1"></div>
            <div className="col-span-4"></div>
            <div className="col-span-6">
              <div className="title-about1-2 heading_5 ">
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
              <div className="medium_text dear">
                Dear all
              </div>
              <div className="body_text">
                Hello and welcome to my website! I'm eager to share with you some of my UX/UI design projects and experiences. As an aspiring professional, I'm dedicated to continuous learning and growth in this field. If you're a recruiter or hiring manager interested in my skills and experience, I'd love to connect with you. Please feel free to reach out if you have any questions or if you'd like to discuss potential opportunities. Thank you for visiting my portfolio!
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
      <div className="page-element">
        <div className="container-fluid about2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className="img-container">
                <img className="w-100" src="./images/about/me.webp" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="col-span-2">
              <div className="heading_2 sef-intro">Self - Introduce</div>
            </div>
            <div className="col-span-1">

            </div>
            <div className="col-span-6 abt-content">
              <div className="abt-inner">
                <div className="about-des body_text">
                  At just 24 years old, I was always driven to find my true passion in life. After trying a few different jobs, I discovered UX/UI design and suddenly everything fell into place. I realized that this was my true passion and I was determined to pursue a career in this field. Although I am relatively new to this industry, I have worked hard to learn a lot during the past 2 years. Now I am eager to gain hands-on experience and contribute to real-world projects in the field of UX/UI Design. I believe that with a strong sense of purpose and passion for design, I can make a valuable contribution to any organization looking for a dedicated and dynamic UX/UI Designer.
                </div>
                <div className="about-title">
                  Basic Information
                </div>
                <div className="about-info body_text">
                  Birthday: 19/08/1998
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Nationality: Local Vietnamese
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Maritality: Single
                  <img className="about-dot" src="./images/about/Ellipse27.webp" alt="#" loading="lazy"></img>
                  Gender: Female
                </div>
                <div className="about-title">
                  Hobbies
                </div>
                <div className="about-info pb-0 body_text">
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
      <div className="page-element about-skill">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 skill-common">
              <div className="heading_3">
                My Skills
              </div>
              <div className="medium_text mid-text">
                Skills that I have so far, to provide my clients
              </div>
              <div className="body_text">
              “Learning new things brings me joy and satisfaction, as it allows me to grow, become more knowledgeable, and improve myself every day”
              </div>
            </div>
            <div className="col-span-1"/>
            <div className="col-span-1 skill-title body_text">
              DESIGN TOOLS
            </div>
            <div className="col-span-2 skill-container">
              <div className="skill-item">
                <div className="skill-no body_text">01/</div>
                <div className="skill-name body_text">Figma</div>
              </div>
              <div className="skill-item">
                <div className="skill-no body_text">02/</div>
                <div className="skill-name body_text">Adobe Illustrator</div>
              </div>
              <div className="skill-item">
                <div className="skill-no body_text">03/</div>
                <div className="skill-name body_text">Adobe Photoshop</div>
              </div>
              <div className="skill-item">
                <div className="skill-no body_text">04/</div>
                <div className="skill-name body_text">Adobe Indesign</div>
              </div>
              <div className="skill-item boder-none">
                <div className="skill-no body_text">05/</div>
                <div className="skill-name body_text">Adobe XD</div>
              </div>
            </div>
            <div className="col-span-1"/>
            <div className="col-1 skill-title body_text">
              TECH STACK
            </div>
            <div className="col-span-2 skill-container">
              <div className="skill-item">
                <div className="skill-no body_text">01/</div>
                <div className="skill-name body_text">HTML/SCSS</div>
              </div>
              <div className="skill-item">
                <div className="skill-no body_text">02/</div>
                <div className="skill-name body_text">Tailwind/Bootstrap</div>
              </div>
              <div className="skill-item">
                <div className="skill-no body_text">03/</div>
                <div className="skill-name body_text">JavaScript</div>
              </div>
              <div className="skill-item">
                <div className="skill-no body_text">04/</div>
                <div className="skill-name body_text">ReactJS</div>
              </div>
              <div className="skill-item boder-none">
                <div className="skill-no body_text">05/</div>
                <div className="skill-name body_text">Angular</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-element core-value">
        <div className="">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5">
              <img className="w-100 about-dot" src="./images/about/mycore.webp" alt="#" loading="lazy"></img>
            </div>
            <div className="col-span-7 core-content">
              <div className="row">
                <div className="col-4 heading_2">
                  My Core Values
                </div>
              </div>
              <div className="detail-container">
                <div className="row">
                  <div className="col-4 left-item">
                    <div className="detail-item">
                      <div className="medium_text">
                        Live with passion
                      </div>
                      <div className="body_text detail-line">
                        “Nothing great in the world has ever been accomplished without passion.” ~ George Hegel
                      </div>
                      <div className="heading_3">
                        01/
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mid-item">
                    <div className="detail-item">
                      <div className="medium_text">
                        Eager to learn
                      </div>
                      <div className="body_text detail-line">
                      "Learn from yesterday, live for today, hope for tomorrow. The important thing is to not stop questioning." ~ Arthur Wellesley
                      </div>
                      <div className="heading_3 detail-title-btm">
                        02/
                      </div>
                    </div>
                  </div>
                  <div className="col-4 right-item">
                    <div className="detail-item">
                      <div className="medium_text">
                        Undeterred by the hardships
                      </div>
                      <div className="body_text detail-line">
                        “Life doesn't require that we be the best, only that we try our best.” ~ H.Jackson Brown, Jr
                      </div>
                      <div className="heading_3 detail-title-btm">
                        03/
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-element about-last">
        <div className="last-content heading_4">
          <div className="line"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col-10 heading_4">
                “The surest way to make your dreams come true is to live them. Dreams don’t work unless you take action.”
              </div>
              <div className="col"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About;