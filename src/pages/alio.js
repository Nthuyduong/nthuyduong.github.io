import React, { useState, useEffect } from "react";

const Alio = () => {
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

    return (
        <div className="container-fluid">
            <div className="product-showcase">
                <div className="alio1 pdb-60">
                    <div className="row">
                        <div className="col-6">
                            <img className="w-100" src="./images/Pj02_yoga/line1-01.png" alt="#" loading="lazy"/>
                        </div>
                        <div className="col-6 r1-right">
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
                    <div className="row">
                        <div className="col-6 r2-left">
                            <div className="content2">
                                <div className="heading_6">Introduction</div>
                                <div className="body_text">
                                    “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                    semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
                                    The quality of the products are renowned for striking features such as smooth polish,
                                    stunning design and excelling clarity, look and feature, and luster. “AGURI JEWELLERY” is one
                                    of the leading manufacturers and suppliers of precious, semi precious and artificial jewelleries.
                                    They sell these jewelleries under different brand names. The quality of the products are
                                    renowned for striking features such as smooth polish, stunning design and excelling clarity,
                                    look and feature, and luster.
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="w-100" src="./images/Pj02_yoga/line2-02.webp" alt="#" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="alio3 pdb-60">
                    <div className="row ">
                        <div className="col-6 r3-left">
                            <img className="w-100" src={require(`../../public/images/Pj02_yoga/${images[currentImageIndex]}`)}
                                 alt="carousel image" />
                        </div>
                        <div className="col-6 r3-right">
                            <div className="content2">
                                <div className="heading_6">The Logotype</div>
                                <div className="body_text">
                                    “AGURI JEWELLERY” is one of the leading manufacturers and suppliers of precious,
                                    semi precious and artificial jewelleries. They sell these jewelleries under different brand names.
                                    The quality of the products are renowned for striking features such as smooth polish,
                                    stunning design and excelling clarity, look and feature, and luster. “AGURI JEWELLERY” is one
                                    of the leading manufacturers and suppliers of precious, semi precious and artificial jewelleries.
                                    They sell these jewelleries under different brand names. The quality of the products are
                                    renowned for striking features such as smooth polish, stunning design and excelling clarity,
                                    look and feature, and luster.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alio4 pdb-60">
                    <img className="w-100" src="./images/Pj02_yoga/line4.webp" alt="#" loading="lazy"/>
                </div>
                <div className="alio5 pdb-60">
                    <img className="w-100" src="./images/Pj02_yoga/line5-bg.png" alt="#" loading="lazy"/>
                    <div className="show">
                        <img src="./images/Pj02_yoga/image5.1.png" alt="#" loading="lazy"/>
                    </div>
                </div>
                <div className="alio6 pdb-60">
                    <div className="row">
                        <div className="col-6">
                            <img className="w-100" src="./images/Pj02_yoga/line6-01.png" alt="#" loading="lazy"/>
                        </div>
                        <div className="col-6">
                            <img className="w-100" src="./images/Pj02_yoga/line6-02.png" alt="#" loading="lazy"/>
                            <div className="r-logo sm-img">
                                <img className="mb-4" src={require(`../../public/images/Pj02_yoga/${logo[currentLogoIndex]}`)}
                                     alt="carousel image" />
                                <div className="heading_6 text-center">BE WITH YOU ANYWHERE, ANYTIME</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alio7 pdb-60">
                    <img className="w-100" src="./images/Pj02_yoga/line7.png" alt="#" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default Alio;