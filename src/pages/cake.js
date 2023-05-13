import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Cake = () => {

    const [currentShowIndex, setCurrentShowIndex] = useState(0);
    const [show] = useState(
        [
            "show1.png",
            "show2.png",
            "show3.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentShowIndex((prevIndex) =>
                prevIndex === show.length - 1 ? 0 : prevIndex + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [show.length]);

    const [currentCakeIndex, setCurrentCakeIndex] = useState(0);
    const [cake] = useState(
        [
            "cake1.png",
            "cake2.png",
            "cake3.png",
            "cake4.png",
            "cake5.png",
            "cake6.png",
            "cake7.png",
            "cake8.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCakeIndex((prevIndex) =>
                prevIndex === cake.length - 1 ? 0 : prevIndex + 1);
        }, 950);
        return () => clearInterval(interval);
    }, [cake.length]);

    return(
        <div>
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="cake-banner pdb-60">
                        <img className="w-100" src="https://i.imgur.com/RLSInkn.png"/>
                    </div>
                    <div className="">
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                    <div className="pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj01_cake/line2-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6 cake-intro-content">
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
                        </div>
                    </div>
                    <div className="pdb-60">
                        <div className="">
                            <img className="w-100" src={require(`../../public/images/Pj01_cake/${show[currentShowIndex]}`)} alt="#" loading="lazy"/>

                        </div>
                    </div>
                    <div className="pdb-60">
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj01_cake/about.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>

                    <div className="ag-line6 mdb-60">
                        <div className="inner">
                            <img className="w-100" src={require(`../../public/images/Pj01_cake/${cake[currentCakeIndex]}`)} alt="#" loading="lazy"/>
                        </div>
                    </div>
                    <div className="pdb-60">
                        <div className="">
                            <div className="">
                                <img className="w-100" src="./images/Pj01_cake/detail.png" alt="#" loading="lazy"/>
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
export default Cake;