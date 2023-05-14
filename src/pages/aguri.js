import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ROUTER} from "../utils/constants";

const Aguri = () => {

    const [currentBuyIndex, setCurrentBuyIndex] = useState(0);
    const [buy] = useState(
        [
            "buy1.png",
            "buy2.png",
            "buy3.png",
            "buy4.png",
            "buy5.png",
            "buy6.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBuyIndex((prevIndex) =>
                prevIndex === buy.length - 1 ? 0 : prevIndex + 1);
        }, 950);
        return () => clearInterval(interval);
    }, [buy.length]);

    return(
        <div>
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="ag-line1 pdb-60">
                        <div className="row">
                            <div className="col-6 line1-left">
                                <div className="line1-left-inner">
                                    <div className="content-top text-center">
                                        <div className="heading_3 mb-1">RADIANT ELEGANCE</div>
                                        <div className="heading_4">Our Utmost Pride</div>
                                    </div>
                                    <img className="" src="./images/Pj03_aguri/line1-center.png" alt="#" loading="lazy"/>
                                    <div className="content-bottom text-center">
                                        <div className="heading_2 mb-5">JOIN US</div>
                                        <div className="body_text">
                                            We're the leading manufacturers and suppliers of precious
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 line1-right">
                                <img className="w-100" src="./images/Pj03_aguri/line1-02.png" alt="#" loading="lazy"/>
                                <div className="line-right-content text-center">
                                    <div className="heading_6 mb-2">We are</div>
                                    <div className="heading_4">JEWELLERY BRAND</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="intro-section pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/intro-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6 text-center intro-right">
                                <div className="intro-inner">
                                    <div className="inner-content content2">
                                        <div className="heading_4">Introduction</div>
                                        <div className="body_text">
                                            “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                            semi precious and artificial jewelleries. We sell these jewelleries under different brand names.
                                            The quality of the products are renowned for striking features.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ag-line2 pdb-60">
                        <div className="row">
                            <div className="col-6 line2-left">
                                <div className="content2">
                                    <div className="heading_4">Logotype</div>
                                    <div className="body_text mb-5">
                                        “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                        semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
                                        The quality of the products are renowned for striking features such as smooth polish,
                                        stunning design and excelling clarity, look and feature, and luster. “AGURI JEWELLERY” is one
                                        of the leading manufacturers and suppliers of precious, semi precious and artificial jewelleries.
                                        They sell these jewelleries under different brand names. The quality of the products are
                                        renowned for striking features such as smooth polish, stunning design and excelling clarity,
                                        look and feature, and luster.
                                    </div>
                                    <div className="small_text text-right font-italic">
                                        <a href="https://nthuyduong.github.io/aguri/#/" target="_blank">Visit: https://nthuyduong.github.io/aguri/#/</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 line2-right">
                                <img className="w-100" src="./images/Pj03_aguri/line3-02.png" alt="#" loading="lazy"/>
                                <div className="line2-right-inner">
                                    <img className="aguri-logo" src="./images/Pj03_aguri/logo.svg" alt="#" loading="lazy"/>
                                    <div className="d-flex text-light mt-4">
                                        <div className="medium-text">Timeless</div>
                                        <div className="medium-text mx-auto mid-txt">Iconic</div>
                                        <div className="medium-text">Elegant</div>
                                    </div>
                                    <div className="heading_5 text-light text-center mt-5">JEWELLERY BRAND</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ag-line5 pdb-60">
                        <img className="w-100" src="./images/Pj03_aguri/home.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="ag-line6 mdb-60">
                        <div className="inner">
                            <img className="w-100" src={require(`../../public/images/Pj03_aguri/${buy[currentBuyIndex]}`)} alt="#" loading="lazy"/>
                        </div>
                    </div>
                    <div className="ag-line4 pdb-60">
                        <div className="row">
                            <div className="col-6 fix-img">
                                {/*<img className="w-100" src="./images/Pj03_aguri/line2-01.png" alt="#" loading="lazy"/>*/}
                            </div>
                            <div className="col-6 line4-left">
                                <img className="w-100" src="./images/Pj03_aguri/cate.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="ag-line7 pdb-60">
                        <div className="inner">
                            <img className="w-100" src="./images/Pj03_aguri/line7.png" alt="#" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-project">
                <div className="contain">
                    <div className="row more-pj">
                        <div className="col-4 more-1">
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
                        <div className="col-4">
                            <div className="img-des">
                                <Link to={ROUTER.FASHION}>
                                    <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.FASHION}>Verite Fashion App</Link>
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
                                <Link to={ROUTER.ALIO}>
                                    <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.ALIO}>
                                            Alio Yoga Website
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

export default Aguri;