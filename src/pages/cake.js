import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ROUTER} from "../utils/constants";

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
            "cake1.webp",
            "cake2.webp",
            "cake3.webp",
            "cake4.webp",
            "cake5.webp",
            "cake6.webp",
            "cake7.webp",
            "cake8.webp",
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
                        <img className="w-100" src="./images/Pj01_cake/cake-banner.webp" alt="#" loading="lazy"/>
                        <div className="showcase-content">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6 text-center">
                                    <div className="heading_4 mb-3">SEASON CAKE BLOG</div>
                                    <div className="body-text">
                                        There are many food blog websites existing, but over the years I gained more experience
                                        in baking and this is where I am now, sharing my passion for creative special cakes,
                                        my favorite recipes and healthy baking.
                                    </div>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                        {/*<img className="w-100" src="https://i.imgur.com/RLSInkn.png"/>*/}
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
                                <img className="w-100" src="./images/Pj01_cake/line2-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6 cake-intro-content">
                                <div className="content2">
                                    <div className="heading_4">Introduction</div>
                                    <div className="body_text mb-5">
                                        Season Cake Blog is a vibrant platform dedicated to all things cake. We are passionate
                                        about sharing the artistry, creativity, and joy of cake baking. Through our curated
                                        content, tantalizing recipes, and expert tips, we aim to inspire and empower bakers
                                        of all levels to create extraordinary cakes that are not only visually stunning but
                                        also deliciously unforgettable. Join our thriving community, unleash your inner baker,
                                        and embark on a sweet journey of endless possibilities.
                                    </div>
                                    <div className="small_text text-right font-italic">
                                        <a href="https://nthuyduong.github.io/CakeBlog/#/" target="_blank">Visit: https://nthuyduong.github.io/CakeBlog/#/</a>
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
                    <div className="pdb-60 cake-abtpage">
                        <div className="row">
                            <div className="col-6 cake-abtpage-left">
                                <div className="about-contain">
                                    <div className="heading_3 text-center title-top">SEASON CAKE BLOG</div>
                                    <div>
                                        <img className="" src="./images/Pj01_cake/about-left.png" alt="#" loading="lazy"/>
                                    </div>
                                    <div className="heading_3 text-center title-btm">THIS OUR MADE</div>
                                </div>
                            </div>
                            <div className="col-6 cake-abtpage-right">
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
                                <img className="w-100" src="./images/Pj01_cake/detail.webp" alt="#" loading="lazy"/>
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
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="img-des">
                                <Link to={ROUTER.FASHION}>
                                    <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium-text pj_name">
                                        <Link to={ROUTER.FASHION}>Verite Fashion App</Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="w-100 body_text pj_intro">
                                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
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
                                        <Link to={ROUTER.ALIO}>Alio Yoga Website</Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className=" w-100 body_text pj_intro">
                                    Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
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