import React, { useState, useEffect } from "react";

const Aguri = () => {

    const [currentBuyIndex, setCurrentBuyIndex] = useState(0);
    const [buy] = useState(
        [
            "buy1.png",
            "buy2.png",
            "buy3.png",
            "buy4.png",
            "buy5.png",
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
                    <div className="ag-line1">
                        <div className="row pdb-60">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line1-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line1-02.webp" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="ag-line2 pdb-60">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line2-01.webp" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="./images/Pj03_aguri/line2-02.png" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="ag-line3 pdb-60">
                        <div className="row">
                            <div className="col-6">
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
                                <img className="w-100" src="./images/Pj03_aguri/line3-02.webp" alt="#" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <div className="ag-line4 pdb-60">
                        <div className="row">
                            <div className="col-6 line4-left">
                                <img className="w-100" src="./images/Pj03_aguri/cate.png" alt="#" loading="lazy"/>
                            </div>
                            <div className="col-6 line4-right"></div>
                        </div>
                    </div>
                    <div className="ag-line5 pdb-60">
                        <img className="w-100" src="./images/Pj03_aguri/home.png" alt="#" loading="lazy"/>
                    </div>
                    <div className="ag-line6 pdb-60">
                        <div className="inner">
                            <img className="w-100" src={require(`../../public/images/Pj03_aguri/${buy[currentBuyIndex]}`)} alt="#" loading="lazy"/>
                        </div>
                    </div>
                    <div className="ag-line6">

                    </div>
                </div>
            </div>
            <div className="contain mt-30">
                <div className="row more-pj">
                    <div className="col-4 more-1">
                        <div className="img-des">
                            <img className="w-100 mb-3" src="./images/home/more-1.png" alt="logo" loading="lazy"/>
                            <div className="body_text pj_name mb-2">Aguri Jewellery Website</div>
                            <div className="small_text pj_intro">
                                User testing was an iterative process that was conducted at every milestone of the project to identify
                                the biggest pain points in the current version.
                            </div>
                        </div>
                    </div>
                    <div className="col-4 more-2">
                        <div className="img-des">
                            <img className="w-100 mb-3" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                            <div className="body_text pj_name mb-2">Verite Fashion App</div>
                            <div className="small_text pj_intro">
                                User testing was an iterative process that was conducted at every milestone of the project to identify
                                the biggest pain points in the current version.
                            </div>
                        </div>
                    </div>
                    <div className="col-4 more-3">
                        <div className="img-des">
                            <img className="w-100 mb-3" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                            <div className="body_text pj_name mb-2">Alio Yoga Website</div>
                            <div className="small_text pj_intro">
                                User testing was an iterative process that was conducted at every milestone of the project to identify
                                the biggest pain points in the current version.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aguri;