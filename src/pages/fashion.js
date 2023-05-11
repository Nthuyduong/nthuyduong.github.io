import React from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Fashion = () => {
    return(
        <div>
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="showcase pdb-60">
                        <img className="w-100" src="./images/Pj04_fashion/banner.png" alt="#" loading="lazy"/>
                        <div className="showcase-inner">
                            <div className="row">
                                <div className="col-1"/>
                                <div className="col-4 image-left">
                                    <img className="w-100" src="./images/Pj04_fashion/line1.png" alt="#" loading="lazy"/>
                                </div>
                                <div className="col-7 content-right">
                                    <img className="mb-5" src="./images/Pj04_fashion/logo.svg" alt="#" loading="lazy"/>
                                    <div className="heading_5 light-text">LUXURY FASHION BRAND</div>
                                    <div className="line my-4"></div>
                                    <div className="d-flex text-line">
                                        <div className="heading_6 light-text">Be Free</div>
                                        <div className="dot mx-max">
                                            <img className="mb-4" src="./images/Pj04_fashion/ellipse.png" alt="#" loading="lazy"/>
                                        </div>
                                        <div className="heading_6 light-text">Be Bold</div>
                                        <div className="dot mx-max">
                                            <img className="mb-4" src="./images/Pj04_fashion/ellipse.png" alt="#" loading="lazy"/>
                                        </div>
                                        <div className="heading_6 light-text">Be You</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verite_line2 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <div className="content2">
                                    <div className="heading_4">Introduction</div>
                                    <div className="body_text">
                                        “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                        semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
                                        The quality of the products are renowned for striking features such as smooth polish,
                                        stunning design and excelling clarity, look and feature, and luster. “AGURI JEWELLERY” is one
                                        of the leading manufacturers and suppliers of precious, semi precious and artificial jewelleries.
                                        They sell these jewelleries under different brand names.
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj04_fashion/line2-01.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="verite-show1 pdb-60">
                        <img className="mb-4 w-100" src="./images/Pj04_fashion/verite-show.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="verite_line3 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj04_fashion/line3-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj04_fashion/line3-02.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="verite_line4 pdb-60">
                        <img className="w-100" src="./images/Pj04_fashion/line4.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="verite_line5 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj04_fashion/line5-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj04_fashion/line5-02.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-project">
                <div className="contain">
                    <div className="row more-pj">
                        <div className="col-4 more-1">
                            <div className="img-des">
                                <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy"/>
                                <div className="d-flex title-pj">
                                    <div className="body_text pj_name">
                                        Aguri Jewellery Website
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
                        <div className="col-4 more-2">
                            <div className="img-des">
                                <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                                <div className="d-flex title-pj">
                                    <div className="body_text pj_name">
                                        Alio Yoga Website
                                    </div>
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

export default Fashion;