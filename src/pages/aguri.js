import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line1-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line1-02.png" alt="#" loading="lazy"/>
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
                                            semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
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
                                    <div className="small_text text-right font-italic">Visit: https://nthuyduong.github.io/aguri/#/</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line3-02.webp" alt="#" loading="lazy"/>
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
                            <div className="col-6 ">
                                <img className="w-100" src="./images/Pj03_aguri/line2-01.png" alt="#" loading="lazy"/>
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
                                <img className="w-100" src="./images/home/more-4.png" alt="logo" loading="lazy"/>
                                <div className="d-flex title-pj">
                                    <div className="body_text pj_name">
                                        Season Cake Blog
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="small_text pj_intro">
                                    User testing was an iterative process that was conducted at every milestone of the project to identify
                                    the biggest pain points in the current version.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="img-des">
                                <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                                <div className="d-flex title-pj">
                                    <div className="body_text pj_name">Verite Fashion App</div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="small_text pj_intro">
                                    User testing was an iterative process that was conducted at every milestone of the project to identify
                                    the biggest pain points in the current version.
                                </div>
                            </div>
                        </div>
                        <div className="col-4 more-2">
                            <div className="img-des">
                                <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                                <div className="d-flex title-pj">
                                    <div className="body_text pj_name">Alio Yoga Website</div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
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

export default Aguri;