import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../components/common/slider";

const BeautyBlog = () => {

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

    const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0);
    const [phone] = useState(
        [
            "ssc-phone2.png",
            "ssc-phone3.png",
            "ssc-phone4.png",
            "ssc-phone5.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoneIndex((prevIndex) =>
                prevIndex === phone.length - 1 ? 0 : prevIndex + 1);
        }, 1100);
        return () => clearInterval(interval);
    }, [phone.length]);


    const [currentCakeIndex, setCurrentCakeIndex] = useState(0);
    const [cake] = useState(
        [
            "cake1.png",
            "cake2.png",
            "cake3.png",
            "cake4.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCakeIndex((prevIndex) =>
                prevIndex === cake.length - 1 ? 0 : prevIndex + 1);
        }, 1100);
        return () => clearInterval(interval);
    }, [cake.length]);

    return (
        <div className="cake-page">
            <div className="container-fluid">
                <div className="product-showcase">
                    <div className="project-item md:pb-6 pb-4">
                        <div className="">
                            <img className="w-100" src="./images/Pj05_beauty/beautybanner.png" alt="#" loading="lazy" />
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <div className="md:grid grid-cols-12">
                            <div className="col-span-6 cake-intro-content flex items-end bg-primary md:mb-0 mb-4">
                                <div className="p-5 md:p-7">
                                    <div className="heading_4 mb-4">About project</div>
                                    <div className="body_text">
                                        Season Cake Blog is a vibrant platform dedicated to all things cake. We are passionate
                                        about sharing the artistry, creativity, and joy of cake baking. Through our curated
                                        content, tantalizing recipes, and expert tips, we aim to inspire and empower bakers
                                        of all levels to create extraordinary cakes that are not only visually stunning but
                                        also deliciously unforgettable. Join our thriving community, unleash your inner baker,
                                        and embark on a sweet journey of endless possibilities.
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <img className="w-100" src="./images/Pj05_beauty/intro.png" alt="#" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-item md:pb-6 pb-4">
                        <div className="">
                            <img className="w-100" src="./images/Pj05_beauty/beauty-mockup.png" alt="#" loading="lazy" />
                        </div>
                    </div>
                    {/* <div className="project-item md:pb-6 pb-4">
                        <div className="md:grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src={require(`../../public/images/Pj01_cake/${cake[currentCakeIndex]}`)} alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end relative">
                                <img className="w-100" src="./images/Pj01_cake/cake-bg.png" alt="#" loading="lazy" />
                                <div className="absolute top-[50%] left-[50%] phone-inner">
                                    <img className="w-100" src={require(`../../public/images/Pj01_cake/${phone[currentPhoneIndex]}`)} alt="#" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="project-item md:pb-6 pb-4">
                        <div className="md:grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6 md:mb-0 mb-4">
                                <img className="w-100" src="./images/Pj05_beauty/beauty-mockup4.png" alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end relative">
                                <img className="w-100" src="./images/Pj05_beauty/aboutpage.png" alt="#" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <div className="">
                            <div className="">
                                <img className="w-100" src="./images/Pj05_beauty/beauty-mobile.png" alt="#" loading="lazy" />

                            </div>
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <div className="md:grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6 md:mb-0 mb-4">
                                <img className="w-100" src="./images/Pj05_beauty/homepage.png" alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end relative">
                                <img className="w-100" src="./images/Pj05_beauty/beauty-mockup2.png" alt="#" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-item">
                        <img className="w-100" src="./images/Pj05_beauty/beauty-mockup3.png" alt="#" loading="lazy" />
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
                                    {/* <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} /> */}
                                </div>
                                <div className="w-100 body_text pj_intro text-color-muted mt-4">
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
                                    <div className="medium-text pj_name mt-3">
                                        <Link to={ROUTER.FASHION}>Verite Fashion App</Link>
                                    </div>

                                </div>
                                <div className="w-100 body_text pj_intro text-color-muted mt-4">
                                    Indulge in luxury and style with our timeless fashion brand, redefining elegance and sophistication.
                                </div>
                            </div>
                        </div>
                        <div className="more-2">
                            <div className="img-des">
                                <Link to={ROUTER.ALIO}>
                                    <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.ALIO}>Alio Yoga Website</Link>
                                    </div>

                                </div>
                                <div className=" w-100 body_text pj_intro text-color-muted mt-4">
                                    Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default BeautyBlog;
