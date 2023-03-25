import React, { useState, useEffect } from "react";

const Home = () => {
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
        <div className="page-element home-info">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 d-flex">
                <img src="./images/home/logo-icon.svg" alt="logo" loading="lazy"/>
                <div className="info-content heading_6">
                  Hello, My name is
                  <div className="info-name heading_3">
                    Nguyen Thuy Duong
                  </div>
                </div>
              </div>
              <div className="col-4 body_text">
                “I'm creative, open-minded and a fast learner. I have a strong desire to know, to understand, to grow, to create, to transform, to improve and to share. My dream is to improve people's lives through my designs”
              </div>
            </div>
          </div>
        </div>
        <div className="page-element container-fluid">
          <div className="img-container">
            <img src="./images/home/Showcase.png" alt="showcase" loading="lazy"/>
            <div className="img-text heading_3">
              Hello!
              <img className="img-smile" src="./images/icons/smile.svg" alt="smile" loading="lazy"/>
              <img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/>
              Welcome to my website.
              <img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/>
              I'm delighted to share my portfolio with you!
              <img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile" loading="lazy"/>
            </div>
          </div>
        </div>
        <div className="page-element home-info2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 d-flex">
                <div className="info-content medium_text">
                  19/08/1998 __________
                  <div className="info-lage heading_4">
                    I’m UX/UI Designer
                  </div>
                </div>
              </div>
              <div className="col-1  medium_text">
                April/2023
              </div>
              <div className="col-6 text-right medium_text">
                Don't just imagine, create
              </div>
            </div>
          </div>
        </div>
        <div className="page-element home-info3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 child1">
                <div className="heading_1">
                  Let’s Create
                </div>
                <div className="text-large">
                  {currentText}
                </div>
                <div className="d-flex">
                  <img src="./images/home/Rectangle35.png" alt="Rectangle35" loading="lazy"/>
                  <div className="brands heading_1">
                    Brands <span className="brands-line"></span>
                  </div>
                </div>
              </div>
              <div className="col-4 child2">
                <img className="w-100" src="./images/home/Rectangle36.png" alt="Rectangle35" loading="lazy"/>
              </div>
              <div className="col-2 child3">
                <div>
                  <img className="w-100" src="./images/home/Rectangle34.png" alt="Rectangle35" loading="lazy"/>
                  <div className="small-img">
                    <img className="w-100" src="./images/home/Rectangle440.png" alt="Rectangle35" loading="lazy"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-element my-design">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 des-main">
                <div>
                  <div className="des-title heading_3">
                    My Designs
                  </div>
                  <div className="des-content">
                    User testing was an iterative process that was conducted at every milestone of the project to identify the biggest pain points in the current version.
                  </div>
                </div>
              </div>
              <div className="col-1"/>
              <div className="col-6">
                <div className="des-img-container">
                  <div className="img-des">
                    <img src="./images/home/mydes_1.png" loading="lazy"></img>
                  </div>
                  <div className="des-img-content">
                    <div className="content-title">
                      <div className="title-name">
                        <span className="des-no">01/</span> Season Cake Blog
                      </div>
                      <div className="title-status body_text">
                        Finished
                      </div>
                    </div>
                    <div className="content-text">
                      <div className="row">
                        <div className="col-8">User testing was an iterative process that was conducted at every milestone of the project to identify the biggest pain points in the current version.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2" />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="des-img-container">
                  <div className="img-des">
                    <img src="./images/home/mydes_2.png" loading="lazy"></img>
                  </div>
                  <div className="des-img-content">
                    <div className="content-title">
                      <div className="title-name">
                        <span className="des-no">02/</span> Alio Yoga Website & App
                      </div>
                      <div className="title-status body_text">
                        Finished
                      </div>
                    </div>
                    <div className="content-text">
                      <div className="row">
                        <div className="col-8">User testing was an iterative process that was conducted at every milestone of the project to identify the biggest pain points in the current version.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1" />
              <div className="col-5">
                <div className="des-img-container">
                  <div className="img-des">
                    <img src="./images/home/mydes_3.png" loading="lazy"></img>
                  </div>
                  <div className="des-img-content">
                    <div className="content-title">
                      <div className="title-name">
                        <span className="des-no">03/</span> Aguri Jewellery Website
                      </div>
                      <div className="title-status body_text">
                        Finished
                      </div>
                    </div>
                    <div className="content-text">
                      <div className="row">
                        <div className="col-8">User testing was an iterative process that was conducted at every milestone of the project to identify the biggest pain points in the current version.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1" />
              <div className="col-6">
                <div className="des-img-container">
                  <div className="img-des">
                    <img src="./images/home/mydes_4.png" loading="lazy"></img>
                  </div>
                  <div className="des-img-content">
                    <div className="content-title">
                      <div className="title-name medium_text">
                        <span className="des-no heading_3">04/</span> Vérité Luxury Fashion App
                      </div>
                      <div className="title-status body_text">
                        In Process
                      </div>
                    </div>
                    <div className="content-text">
                      <div className="row">
                        <div className="col-8">User testing was an iterative process that was conducted at every milestone of the project to identify the biggest pain points in the current version.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;