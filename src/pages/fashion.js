import React, {useEffect, useState,} from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ROUTER} from "../utils/constants";

const Fashion = () => {
    const [currentimg, setCurrentimg] = useState(0);
    const [img] = useState(
        [
            "img1.webp",
            "img2.webp",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentimg((prevIndex) =>
            prevIndex === img.length - 1 ? 0 : prevIndex + 1);
        }, 950);
    }, [img.length]);

    return(
        <div>
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="showcase pdb-60">
                        <img className="w-100" src="./images/Pj04_fashion/banner2.webp" alt="#" loading="lazy"/>
                        <div className="showcase-inner">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1"/>
                                <div className="col-span-4 image-left">
                                    <img className="w-100" src="./images/Pj04_fashion/line1.webp" alt="#" loading="lazy"/>
                                </div>
                                <div className="col-span-7 content-right">
                                    <img className="mb-5" src="./images/Pj04_fashion/logo.svg" alt="#" loading="lazy"/>
                                    <div className="heading_4 light-text">LUXURY FASHION BRAND</div>
                                    <div className="line my-4"></div>
                                    <div className="flex text-line">
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
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <div className="">
                                    <div className="heading_4">Introduction</div>
                                    <div className="body_text">
                                        Discover the essence of French luxury fashion. Our brand captures the essence of
                                        timeless elegance and refined craftsmanship. With meticulous attention to detail and
                                        a passion for exquisite design, we offer a curated selection of sophisticated pieces
                                        that epitomize French style. Embrace effortless chic and indulge in the allure of
                                        our collections. Experience the epitome of luxury with our brand, where sophistication
                                        meets impeccable taste.
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj04_fashion/line2-01.webp" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="verite-show1 pdb-60">
                        <img className="mb-4 w-100" src={require(`../../public/images/Pj04_fashion/${img[currentimg]}`)} alt="#" loading="lazy"/>
                    </div>
                    <div className="verite_line3 pdb-60">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj04_fashion/line3-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj04_fashion/line3-02.webp" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="verite_line4 pdb-60">
                        <img className="w-100" src="./images/Pj04_fashion/line4.webp" alt="#" loading="lazy"/>
                    </div>
                    <div className="verite_line5 pdb-60">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj04_fashion/line5-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj04_fashion/line5-02.webp" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-project mb-8">
                <div className="container-fluid">
                    <div className="grid grid-cols-12 gap-4 more-pj">
                        <div className="col-span-4 more-1">
                            <div className="img-des">
                                <Link to={ROUTER.AGURI}>
                                    <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.AGURI}>
                                            Aguri Jewellery Website
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="body_text pj_intro w-100">
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="img-des">
                                <Link to={ROUTER.CAKE}>
                                    <img className="w-100" src="./images/home/more-4.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.CAKE}>
                                            Season Cake Blog
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="body_text pj_intro w-100">
                                    Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 more-2">
                            <div className="img-des">
                                <Link to={ROUTER.ALIO}>
                                    <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                                </Link>
                                <div className="flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.ALIO}>
                                            Alio Yoga Website
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="body_text pj_intro w-100">
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

export default Fashion;