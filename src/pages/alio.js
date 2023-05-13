import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import {ROUTER} from "../utils/constants";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Alio = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images] = useState([
        "image1.webp",
        "image2.webp",
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [images.length]);

    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [logo] = useState(
        [
            "logo1.svg",
            "logo2.svg",
            "logo3.svg",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) =>
                prevIndex === logo.length - 1 ? 0 : prevIndex + 1);
        }, 900);
        return () => clearInterval(interval);
    }, [logo.length]);

    const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
    const [Showcase] = useState(
        [
            "Showcase1.png",
            "Showcase2.png",
            "Showcase3.png",
            "Showcase4.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentShowcaseIndex((prevIndex) =>
                prevIndex === Showcase.length - 1 ? 0 : prevIndex + 1);
        }, 1100);
        return () => clearInterval(interval);
    }, [Showcase.length]);


    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="alio1 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj02_yoga/line1-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6 r1-right">
                                <img className="w-100" src="./images/Pj02_yoga/line1-02.webp" alt="#" loading="lazy"/>
                                <div className="slide-content">
                                    <div className="heading_5">You will</div>
                                    <div className="heading_1 my-2">Be Your Best</div>
                                    <div className="heading_5">If you never stop</div>
                                    <div className="heading_1 mt-2">Trying & Being You</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alio2 pdb-60">
                        <div className="row">
                            <div className="col-6 r2-left">
                                <div className="content2">
                                    <div className="heading_4">Introduction</div>
                                    <div className="body_text">
                                        “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                        semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
                                        The quality of the products are renowned for striking features such as smooth polish,
                                        stunning design and excelling clarity, look and feature, and luster. “AGURI JEWELLERY” is one
                                        of the leading manufacturers and suppliers of precious, semi precious and artificial jewelleries.
                                        They sell these jewelleries under different brand names. The quality of the products are
                                        renowned for striking features such as smooth polish, stunning design and excelling clarity,
                                        look and feature, and luster.
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="alio2-left">
                                    <img className="w-100" src="./images/Pj02_yoga/line2-02-lg.png" alt="#" loading="lazy"/>
                                    <div className="img-inner">
                                        <img className="" src="./images/Pj02_yoga/line2-02-sm.png" alt="#" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alio3 pdb-60">
                        <div className="row ">
                            <div className="col-6 r3-left">
                                <img className="w-100" src={require(`../../public/images/Pj02_yoga/${images[currentImageIndex]}`)}
                                     alt="carousel image" />
                            </div>
                            <div className="col-6 r3-right">
                                <div className="content2">
                                    <div className="heading_4">The Logotype</div>
                                    <div className="body_text">
                                        “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                        semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
                                        The quality of the products are renowned for striking features such as smooth polish,
                                        stunning design and excelling clarity, look and feature, and luster. “AGURI JEWELLERY” is one
                                        of the leading manufacturers and suppliers of precious, semi precious and artificial jewelleries.
                                        They sell these jewelleries under different brand names. The quality of the products are
                                        renowned for striking features such as smooth polish, stunning design and excelling clarity,
                                        look and feature, and luster.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alio4">

                    </div>
                    <div className="alio5 pdb-60">
                        <img className="w-100" src={require(`../../public/images/Pj02_yoga/${Showcase[currentLogoIndex]}`)}/>
                    </div>
                    <div className="alio6 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj02_yoga/line6-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj02_yoga/line6-02.png" alt="#" loading="lazy"/>
                                <div className="r-logo sm-img">
                                    <img className="mb-5" src={require(`../../public/images/Pj02_yoga/${logo[currentLogoIndex]}`)}
                                         alt="carousel image" />
                                    <div className="medium_text text-light text-center">BE WITH YOU ANYWHERE, ANYTIME</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alio7 pdb-60">
                        <img className="w-100" src="./images/Pj02_yoga/line7.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="alio8 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj02_yoga/line7-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj02_yoga/line7-02.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="alio9 pdb-60">
                        <img className="w-100" src="./images/Pj02_yoga/line9.png" alt="#" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="more-project">
                <div className="contain">
                    <div className="row more-pj">
                        <div className="col-4 more-1">
                            <div className="img-des">
                                <Link to={ROUTER.AGURI}>
                                    <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.AGURI}>
                                            Aguri Jewellery Website
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="w-100 body_text pj_intro">
                                    User testing was an iterative process that was conducted at every milestone of the project to identify
                                    the biggest pain points in the current version.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="img-des">
                                <Link to={ROUTER.FASHION}>
                                    <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.FASHION}>
                                            Verite Fashion App
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="w-100 body_text pj_intro">
                                    User testing was an iterative process that was conducted at every milestone of the project to identify
                                    the biggest pain points in the current version.
                                </div>
                            </div>
                        </div>
                        <div className="col-4 more-2">
                            <div className="img-des">
                                <Link to={ROUTER.CAKE}>
                                    <img className="w-100" src="./images/home/more-4.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.CAKE}>
                                            Season Cake Blog
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="w-100 body_text pj_intro">
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

export default Alio;