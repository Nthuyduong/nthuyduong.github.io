import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../components/common/slider";

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
    useEffect(() => {
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
                    <div className="project-item alio1 md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="sm:col-span-6 col-span-12 mb-4 md:mb-0">
                                <img className="w-100" src="./images/Pj02_yoga/line1-01.webp" alt="#" loading="lazy" />
                            </div>
                            <div className="sm:col-span-6 col-span-12 r1-right">
                                <img className="w-100" src="./images/Pj02_yoga/line1-02.webp" alt="#" loading="lazy" />
                                <div className="slide-content z-10">
                                    <div className="heading_5">You will</div>
                                    <div className="md:heading_1 heading_2 my-0 md:my-2">Be Your Best</div>
                                    <div className="heading_5">If you never stop</div>
                                    <div className="md:heading_1 heading_2 my-0 md:mt-2">Trying & Being You</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-6 r2-left flex items-end bg-primary mb-4 md:mb-0">
                                <div className="p-5 md:p-7">
                                    <div className="heading_4 mb-3 md:mb-4">Introduction</div>
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
                            <div className="col-span-12 md:col-span-6">
                                <img className="w-full" src="./images/Pj02_yoga/line2-02-sm.webp" alt="#" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="project-item alio3 md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-6 r3-left mb-4 md:mb-0">
                                <img className="w-100" src={require(`../../public/images/Pj02_yoga/${images[currentImageIndex]}`)}
                                    alt="carousel image" />
                            </div>
                            <div className="col-span-12 md:col-span-6 r3-right flex items-end bg-tertiary">
                                <div className="p-5 md:p-7">
                                    <div className="heading_4 mb-4">The Logotype</div>
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
                    {/* <div className="alio4">

                    </div> */}
                    <div className="project-item alio5 md:pb-6 pb-4">
                        <img className="w-100" src={require(`../../public/images/Pj02_yoga/${Showcase[currentLogoIndex]}`)} />
                    </div>
                    <div className="project-item alio5.1 md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj02_yoga/line5.1.webp" loading="lazy" />
                    </div>
                    <div className="project-item alio6 md:pb-6 pb-4 h-full">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj02_yoga/line6-01.png" alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-6 relative">
                                <img className="w-100" src="./images/Pj02_yoga/line6-02.png" alt="#" loading="lazy" />
                                <div className="sm-img">
                                    <div className="absolute top-[50%] left-[50%] phone-inner">
                                        <img className="" src={require(`../../public/images/Pj02_yoga/${logo[currentLogoIndex]}`)}
                                            alt="carousel image" />
                                        {/* <div className="medium_text text-light text-center">BE WITH YOU ANYWHERE, ANYTIME</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item alio7 md:pb-6 pb-4">
                        <div className="inner">
                            <img className="w-100"
                                src={require(`../../public/images/Pj02_yoga/${mobile[currentMobile]}`)} alt="#"
                                loading="lazy" />
                        </div>
                    </div>
                    <div className="project-item alio8 md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj02_yoga/line7-01.webp" alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-6">
                                <img className="w-100"
                                    src={require(`../../public/images/Pj02_yoga/${mbl[currentMbl]}`)} alt="#"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="project-item alio9">
                        <img className="w-100" src="./images/Pj02_yoga/line9.webp" alt="#" loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="more-project md:mb-8 mb-4">
                <div className="container-fluid">
                    <Slider
                        configs={{
                            sliderPerRow: 3,
                            sliderPerRowMobile: 1.25,
                            allowDrag: true,
                            duration: 400,
                            auto: false,
                            autoDuration: 1000,
                            gap: 30,
                            gapMobile: 10,
                            process: true,
                            paginate: false,
                            navigator: false,
                            active: 0
                        }}
                    >
                        <div className="more-1">
                            <div className="img-des">
                                <Link to={ROUTER.AGURI}>
                                    <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.AGURI}>
                                            Aguri Jewellery Website
                                        </Link>
                                    </div>
                                    
                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.FASHION}>
                                    <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.FASHION}>
                                            Verite Fashion App
                                        </Link>
                                    </div>
                                    
                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                                </div>
                            </div>
                        </div>
                        <div className=" more-2">
                            <div className="img-des">
                                <Link to={ROUTER.CAKE}>
                                    <img className="w-100" src="./images/home/more-4.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.CAKE}>
                                            Season Cake Blog
                                        </Link>
                                    </div>
                                    
                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Indulge in the delectable world of Cake Blog, where sweetness and creativity come together.
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Alio;