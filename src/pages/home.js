import React, { useState, useEffect, useRef } from "react";

const Home = () => {
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
                <div className="info-name heading_2">
                  Nguyen Thuy Duong
                </div>
              </div>
            </div>
            <div className="col-4 body_text text-right">
              “I'm creative, open-minded and a fast learner. I have a strong desire to know, to understand, to grow, to create, to transform, to improve and to share. My dream is to improve people's lives through my designs”
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
                    <img className="w-100" src="./images/home/Rectangle35.png" alt="Rectangle35" loading="lazy"/>
                  </div>
                  <div className="col-6 brands heading_2">
                    Brands <span className="brands-line"></span>
                  </div>
                </div>
              </div>
              <div className="col-4 child2">
                <img className="w-100" src="./images/home/Rectangle36.png" alt="Rectangle35" loading="lazy"/>
              </div>
              <div className="col-2 child3">
                <div className="img-box">
                  <img className="w-100" src="./images/home/Rectangle34.png" alt="Rectangle35" loading="lazy"/>
                </div>
              </div>
            </div>
            <div className="row row-bt">
              <div className="col-6"></div>
              <div className="col-6 small-img">
                <img className="" src="./images/home/Rectangle440.png" alt="Rectangle35" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
        <div className="page-element my-design">
          <div className="container-fluid">
            <div className="row my-des-title">
              {/*<div className="col-3"></div>*/}
              <div className="col-6">
                <div className="d-flex">
                  <div className="text-large-2 text-italic">My</div>
                  <div className="dot-bl">
                    <img className="img-ellipe-bl mx-4" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy"/>
                  </div>
                  <div className="heading_1">DESIGNS</div>
                </div>
                <div className="d-flex">
                  <div className="text-large-2 text-italic">for</div>
                  <div className="line decor-line mx-3"></div>
                  <div className="heading_1">UNIQUE</div>
                </div>
                <div className="d-flex">
                  <div className="heading_1">&</div>
                  <div className="text-large-2 text-italic mx-4">soulful</div>
                  <div className="heading_1">BRANDS</div>
                </div>
                {/*<div className="heading_2 text-center mb-3">My Designs</div>*/}
                {/*<div className="body_text text-center">Step into the world of a passionate UI designer's portfolio.*/}
                {/*  Witness the evolution of my skills as I create intuitive interfaces and explore the realm of captivating design.</div>*/}
              </div>
              <div className="col-2"></div>
              <div className="col-4">
                <div className="body_text text-right mydes-content">
                  "Step into the world of a passionate UI designer's portfolio. Witness the evolution of my skills as I
                  create intuitive interfaces and explore the realm of captivating design."
                </div>
              </div>
            </div>
            <div className="row des_r1">
              <div className="col-lg-5 col-sm-12">
                <div className="des_card img-des">
                  <img className="w-100" src="./images/home/mydes_1.png" alt="logo" loading="lazy"/>
                  <div className="d-flex mt-3 mb-2">
                    <div className="heading_5 mr-2">01/</div>
                    <div className="medium_text pj_name">Season Cake Blog</div>
                    <div className="small_text ml-auto">Finished</div>
                  </div>
                  <div className="small_text pj_intro">
                    User testing was an iterative process that was conducted at every milestone of the project to identify
                    the biggest pain points in the current version.
                  </div>
                </div>
              </div>
              <div className="col-1"/>
              <div className="col-lg-6 col-sm-12">
                <div className="des_card img-des">
                  <img className="w-100" src="./images/home/mydes_2.png" alt="logo" loading="lazy"/>
                  <div className="d-flex mt-3 mb-2">
                    <div className="heading_5 mr-2">02/</div>
                    <div className="medium_text pj_name">Aguri Jewellery Website</div>
                    <div className="small_text ml-auto">Finished</div>
                  </div>
                  <div className="small_text pj_intro">
                    User testing was an iterative process that was conducted at every milestone of the project to identify
                    the biggest pain points in the current version.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="des_card img-des">
                  <img className="w-100" src="./images/home/mydes_3.png" alt="logo" loading="lazy"/>
                  <div className="d-flex mt-3 mb-2">
                    <div className="heading_5 mr-2">03/</div>
                    <div className="medium_text pj_name">Alio Yoga Website & App</div>
                    <div className="small_text ml-auto">Finished</div>
                  </div>
                  <div className="small_text pj_intro">
                    Unwind with our UI design project for a yoga, Pilates, and meditation website. Immerse yourself in
                    serene interfaces that inspire tranquility
                  </div>
                </div>
              </div>
              <div className="col-1"/>
              <div className="col-lg-5 col-sm-12">
                <div className="des_card img-des">
                  <img className="w-100" src="./images/home/mydes_4.png" alt="logo" loading="lazy"/>
                  <div className="d-flex mt-3 mb-2">
                    <div className="heading_5 mr-2">04/</div>
                    <div className="body_text pj_name">Vérité Luxury Fashion App</div>
                    <div className="body_text ml-auto">Finished</div>
                  </div>
                  <div className="small_text pj_intro">
                    User testing was an iterative process that was conducted at every milestone of the project to identify
                    the biggest pain points in the current version.
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