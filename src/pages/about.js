import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="img-container">
        <img src="./images/about/Showcase.png" loading="lazy" alt="#"></img>
      </div>
      <div className="page-element">
        <div className="container-fluid about1">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-4 about1-1">
              <p>From: Nguyen Thuy Duong</p>
              <p>To: You</p>
            </div>
            <div className="col-6 about1-2">
              <div className="title-about1-2 heading_5 ">
                So glad to see you here!
              </div>
              <div className="medium_text">
                Dear all
              </div>
              <div className="small_text">
                Hello and welcome to my website! I'm eager to share with you some of my UX/UI design projects and experiences. As an aspiring professional, I'm dedicated to continuous learning and growth in this field. If you're a recruiter or hiring manager interested in my skills and experience, I'd love to connect with you. Please feel free to reach out if you have any questions or if you'd like to discuss potential opportunities. Thank you for visiting my portfolio!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-element">
        <div className="container-fluid about2">
          <div className="row">
            <div className="col-3">
              <div className="img-container">
                <img src="./images/about/xinh.png" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="col-1">
              <div className="heading_4 sef-intoduct">Self - Introduce</div>
            </div>
            <div className="col-2">

            </div>
            <div className="col-6">
              <div className="small-text about-des">
                At just 24 years old, I was always driven to find my true passion in life. After trying a few different jobs, I discovered UX/UI design and suddenly everything fell into place. I realized that this was my true passion and I was determined to pursue a career in this field. Although I am relatively new to this industry, I have worked hard to learn a lot during the past 2 years. Now I am eager to gain hands-on experience and contribute to real-world projects in the field of UX/UI Design. I believe that with a strong sense of purpose and passion for design, I can make a valuable contribution to any organization looking for a dedicated and dynamic UX/UI Designer.
              </div>
              <div className="about-title">
                Basic Information
              </div>
              <div className="about-info">
                Birthday: 19/08/1998
                <img className="about-dot" src="./images/about/Ellipse27.png" alt="#" loading="lazy"></img>
                Nationality: Local Vietnamese
                <img className="about-dot" src="./images/about/Ellipse27.png" alt="#" loading="lazy"></img>
                Maritality: Single
                <img className="about-dot" src="./images/about/Ellipse27.png" alt="#" loading="lazy"></img>
                Gender: Female
              </div>
              <div className="about-title">
              Hobbies
              </div>
              <div className="about-info">
                Reading
                <img className="about-dot" src="./images/about/Ellipse27.png" alt="#" loading="lazy"></img>
                Drawing
                <img className="about-dot" src="./images/about/Ellipse27.png" alt="#" loading="lazy"></img>
                Travelling
                <img className="about-dot" src="./images/about/Ellipse27.png" alt="#" loading="lazy"></img>
                Swimming
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-element about-skill">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 skill-common">
              <div className="heading_4">
                My Skill
              </div>
              <div className="medium_text mid-text">
                Skills that I have so far, to provide my clients
              </div>
              <div className="small_text">
              “Learning new things brings me joy and satisfaction, as it allows me to grow, become more knowledgeable, and improve myself every day”
              </div>
            </div>
            <div className="col-1"/>
            <div className="col-1 skill-title">
              DESIGN TOOLS
            </div>
            <div className="col-2 skill-container">
              <div className="skill-item medium-text">
                <div className="skill-no">01/</div>
                <div className="skill-name">Figma</div>
              </div>
              <div className="skill-item medium-text">
                <div className="skill-no">02/</div>
                <div className="skill-name">Adobe Illustrator</div>
              </div>
              <div className="skill-item medium-text">
                <div className="skill-no">03/</div>
                <div className="skill-name">Adobe Photoshop</div>
              </div>
              <div className="skill-item medium-text">
                <div className="skill-no">04/</div>
                <div className="skill-name">Adobe Indesign</div>
              </div>
              <div className="skill-item medium-text boder-none">
                <div className="skill-no">05/</div>
                <div className="skill-name">Adobe XD</div>
              </div>
            </div>
            <div className="col-1"/>
            <div className="col-1 skill-title">
              TECH STACK
            </div>
            <div className="col-2 skill-container">
              <div className="skill-item medium-text">
                <div className="skill-no">01/</div>
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-item medium-text">
                <div className="skill-no">02/</div>
                <div className="skill-name">CSS</div>
              </div>
              <div className="skill-item medium-text">
                <div className="skill-no">03/</div>
                <div className="skill-name">JavaScript</div>
              </div>
              <div className="skill-item medium-text">
                <div className="skill-no">04/</div>
                <div className="skill-name">Angular</div>
              </div>
              <div className="skill-item medium-text boder-none">
                <div className="skill-no">05/</div>
                <div className="skill-name">React</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-element core-value">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 core-img">
              <div className="img-container">
                <img src="./images/about/Crystal_Paperweights_864x6401.png" alt="#" loading="lazy"></img>
              </div>
            </div>
            <div className="col-6 core-content">
              <div className="row">
                <div className="col-2 heading_3">
                  My Core Values
                </div>
              </div>
              <div className="detail-container">
                <div className="row">
                  <div className="col-4">
                    <div className="detail-item">
                      <div className="medium_text">
                        Live with passion
                      </div>
                      <div className="small-text detail-mid">
                        Passion is the driving force behind success and happiness that pushes you to reach your highest potential.
                        <br />
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
                      <div className="small-text detail-mid">
                      "Learn from yesterday, live for today, hope for tomorrow. The important thing is to not stop questioning." ~ Arthur Wellesley
                      </div>
                      <div className="heading_3">
                        02/
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="detail-item">
                      <div className="medium_text">
                        Undeterred by the hardships
                      </div>
                      <div className="small-text detail-mid">
                        “Life doesn't require that we be the best, only that we try our best.” ~ H.Jackson Brown, Jr
                      </div>
                      <div className="heading_3">
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
              <div className="col-2"></div>
              <div className="col-8">
                “The surest way to make your dreams come true is to live them. Dreams don’t work unless you take action.”
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About;