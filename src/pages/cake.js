import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";

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
                    {/*<div className="project-item md:pb-6 pb-4">*/}
                    {/*    <img className="w-full" src="./images/Pj01_cake/cake-b.png" alt="#" loading="eager" height={500}*/}
                    {/*         width={500}/>*/}
                    {/*</div>*/}
                    {/* <div className="project-item md:pb-6 pb-4">
                        <div className="">
                            <img className="w-100 w-full" src="./images/Pj01_cake/cakebanner.png" alt="#" loading="eager" height={500} width={500} />
                        </div>
                    </div> */}
                    <div className="project-item md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src="./images/Pj01_cake/line2-01.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end bg-[#FFFDF8]">
                                <div className="p-7">
                                    <div className="heading_4 mb-4">About project</div>
                                    <div className="body_text">
                                        Season Cake Blog is a vibrant platform dedicated to all things cake. We are
                                        passionate
                                        about sharing the artistry, creativity, and joy of cake baking. Through our
                                        curated
                                        content, tantalizing recipes, and expert tips, we aim to inspire and empower
                                        bakers
                                        of all levels to create extraordinary cakes that are not only visually stunning
                                        but
                                        also deliciously unforgettable. Join our thriving community, unleash your inner
                                        baker,
                                        and embark on a sweet journey of endless possibilities.
                                    </div>
                                    {/* <div className="small_text text-right font-italic">
                                        <a href="https://nthuyduong.github.io/CakeBlog/#/" target="_blank">Comming soon: https://nthuyduong.github.io/CakeBlog/#/</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="pdb-60">
                        <div className="">
                            <img className="w-100" src={require(`../../public/images/Pj01_cake/${show[currentShowIndex]}`)} alt="#" loading="lazy"/>
                        </div>
                    </div> */}
                    {/* <div className="pdb-60 cake-abtpage">
                        <div className="grid grid-cols-12">
                            <div className="col-span-6 cake-abtpage-left">
                                <div className="about-contain">
                                    <div className="heading_3 text-center title-top">SEASON CAKE BLOG</div>
                                    <div>
                                        <img className="" src="./images/Pj01_cake/about-left.webp" alt="#" loading="lazy"/>
                                    </div>
                                    <div className="heading_3 text-center title-btm">THIS OUR MADE</div>
                                </div>
                            </div>
                            <div className="col-span-6 cake-abtpage-right">
                                <img className="w-100" src="./images/Pj01_cake/about.webp" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="ag-line6 mdb-60">
                        <div className="inner">
                            <img className="w-100" src={require(`../../public/images/Pj01_cake/${cake[currentCakeIndex]}`)} alt="#" loading="lazy"/>
                        </div>
                    </div> */}

                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj01_cake/abtcake.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj01_cake/category-cake.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj01_cake/cake-blog.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj01_cake/cake-detail.webp" alt="#" loading="lazy"/>
                    </div>
                    {/*<div className="project-item">*/}
                    {/*    <img className="w-100" src="./images/Pj01_cake/cake-list.png" alt="#" loading="lazy" />*/}
                    {/*</div>*/}
                    {/*<div className="project-item md:pb-6 pb-4">*/}
                    {/*    <div className="">*/}
                    {/*        <img className="w-100" src="./images/Pj01_cake/cake-typo.png" alt="#" loading="lazy"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="project-item md:pb-6 pb-4">*/}
                    {/*    <div className="">*/}
                    {/*        <img className="w-100" src="./images/Pj01_cake/cake-color.png" alt="#" loading="lazy"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="project-item md:pb-6 pb-4">
                        <div className="">
                            <img className="w-100" src="./images/Pj01_cake/abt-cake.png" alt="#" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <div className="md:grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src="./images/Pj01_cake/cakephone.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end relative">
                                <img className="w-100" src="./images/Pj01_cake/cakephone2.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <div className="md:grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100"
                                     src={require(`../../public/images/Pj01_cake/${cake[currentCakeIndex]}`)} alt="#"
                                     loading="lazy"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end relative">
                                <img className="w-100" src="./images/Pj01_cake/cake-bg.png" alt="#" loading="lazy"/>
                                <div className="absolute top-[50%] left-[50%] phone-inner">
                                    <img className="w-100"
                                         src={require(`../../public/images/Pj01_cake/${phone[currentPhoneIndex]}`)}
                                         alt="#" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="project-item md:pb-6 pb-4">
                        <div className="">
                            <div className="">
                                <img className="w-100" src="./images/Pj01_cake/detail.png" alt="#" loading="lazy" />
                            </div>
                        </div>
                    </div> */}
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100" src="./images/Pj01_cake/cakebg.png" alt="#" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="more-project md:mb-8 mb-4">
                <div className="container-fluid">
                    <Slider
                        configs={{
                            sliderPerRow: 3.5,
                            sliderPerRowMobile: 1.25,
                            allowDrag: true,
                            duration: 400,
                            auto: false,
                            autoDuration: 1000,
                            gap: 30,
                            gapMobile: 10,
                            process: false,
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
                                <div className="w-full body_text pj_intro text-color-muted mt-4">
                                    Discover the allure of our luxury jewellery brand, where elegance meets exquisite craftsmanship.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.WORKOUT}>
                                    <img className="w-100" src="./images/home/more-6.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.WORKOUT}>
                                            Workout Clothes Website
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-100 body_text pj_intro w-100 text-color-muted mt-4">
                                    Explore our workout clothes designed for comfort, performance, and effortless style.
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
                                        <Link to={ROUTER.FASHION}>Verite Fashion App</Link>
                                    </div>
                                </div>
                                <div className="w-full body_text pj_intro text-color-muted mt-4">
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
                                <div className=" w-full body_text pj_intro text-color-muted mt-4">
                                    Discover a serene oasis at our Yoga, Pilates, and Meditation website, where tranquility awaits.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-des">
                                <Link to={ROUTER.BEAUTYBLOG}>
                                    <img className="w-100" src="./images/home/more-5.png" alt="logo" loading="lazy" />
                                </Link>
                                <div className="d-flex title-pj">
                                    <div className="medium_text pj_name mt-3">
                                        <Link to={ROUTER.BEAUTYBLOG}>
                                            Beauty Blog
                                        </Link>
                                    </div>
                                    {/* <FontAwesomeIcon className="ms-auto icon-right" icon={faArrowRight} /> */}
                                </div>
                                <div className="w-full body_text pj_intro text-color-muted mt-4">
                                    Welcome to my Beauty Blog! Find skincare tips, makeup tutorials, and the latest beauty trends for radiant skin.
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Cake;