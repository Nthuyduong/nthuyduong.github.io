import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {ROUTER} from "../utils/constants";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Alio = () => {
    const [currentMbl, setCurrentMbl] = useState(0);
    const [mbl] = useState(
        [
            "mbl1.webp",
            "mbl2.webp",
            "mbl3.webp",
            "mbl4.webp",
        ]
    )
    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrentMbl((prevIndex) =>
            prevIndex === mbl.length - 1 ? 0 : prevIndex + 1);
        }, 950);
    return () => clearInterval(interval);
    }, [mbl.length]);

    const [currentMobile, setCurrentMobile] = useState(0);
    const [mobile] = useState(
        [
            "mobile1.webp",
            "mobile2.webp",
            "mobile3.webp",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMobile((prevIndex) =>
                prevIndex === mobile.length - 1 ? 0 : prevIndex + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [mobile.length]);

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
            "Showcase1.webp",
            "Showcase2.webp",
            "Showcase3.webp",
            "Showcase4.webp",
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
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj02_yoga/line1-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-6 r1-right">
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
                        <div className="grid grid-cols-12">
                            <div className="col-span-6 r2-left">
                                <div className="">
                                    <div className="heading_4">Introduction</div>
                                    <div className="body_text">
                                        Welcome to Alio, Pilate, and Meditation! Our website is your sanctuary for holistic
                                        wellness and mindful living. Discover the power of Alio for dynamic fitness, Pilate
                                        for strength and flexibility, and meditation for inner peace. Join our nurturing
                                        community and embark on a transformative journey of self-care and rejuvenation.
                                        Experience the synergy of Alio, Pilate, and Meditation as you nurture your body,
                                        calm your mind, and find balance in everyday life.
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 relative">
                                <div className="alio2-left">
                                    <img className="w-100" src="./images/Pj02_yoga/line2-02-lg.webp" alt="#" loading="lazy"/>
                                    <div className="absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <img className="" src="./images/Pj02_yoga/line2-02-sm.webp" alt="#" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alio3 pdb-60">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6 r3-left">
                                <img className="w-100" src={require(`../../public/images/Pj02_yoga/${images[currentImageIndex]}`)}
                                     alt="carousel image" />
                            </div>
                            <div className="col-span-6 r3-right">
                                <div className="">
                                    <div className="heading_4">The Logotype</div>
                                    <div className="body_text">
                                        The logo for a yoga website embodies the essence of tranquility and self-discovery.
                                        Designed to cater to users seeking to learn yoga, meditation, and pilates, the
                                        logo draws inspiration from the serene act of sitting in meditation. The central
                                        element of the logo features a figure gracefully positioned in a meditative pose,
                                        radiating a sense of inner peace and mindfulness. Symbolizing the harmonious
                                        integration of body and mind, the logo encapsulates the core values of the website,
                                        inviting users to embark on a journey of self-transformation and holistic well-being.
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
                    <div className="alio5.1 pdb-60">
                        <img className="w-100" src="./images/Pj02_yoga/line5.1.webp" loading="lazy"/>
                    </div>
                    <div className="alio6 pdb-60 h-full">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj02_yoga/line6-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj02_yoga/line6-02.png" alt="#" loading="lazy"/>
                                <div className="sm-img">
                                    <div className="absolute">
                                        <img className="mb-5" src={require(`../../public/images/Pj02_yoga/${logo[currentLogoIndex]}`)}
                                             alt="carousel image" />
                                        <div className="medium_text text-light text-center">BE WITH YOU ANYWHERE, ANYTIME</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alio7 pdb-60">
                        <div className="inner">
                            <img className="w-100"
                                 src={require(`../../public/images/Pj02_yoga/${mobile[currentMobile]}`)} alt="#"
                                 loading="lazy"/>
                        </div>
                    </div>
                    <div className="alio8 pdb-60">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj02_yoga/line7-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-6">
                                <img className="w-100"
                                     src={require(`../../public/images/Pj02_yoga/${mbl[currentMbl]}`)} alt="#"
                                     loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="alio9 pdb-60">
                        <img className="w-100" src="./images/Pj02_yoga/line9.webp" alt="#" loading="lazy"/>
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
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name">
                                        <Link to={ROUTER.AGURI}>
                                            Aguri Jewellery Website
                                        </Link>
                                    </div>
                                    <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} />
                                </div>
                                <div className="w-100 body_text pj_intro w-100">
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
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
                                <div className="w-100 body_text pj_intro w-100">
                                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 more-2">
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
                                <div className="w-100 body_text pj_intro w-100">
                                    Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
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