import React, {useEffect, useState} from "react";

const Cake = () => {

    const [currentShowIndex, setCurrentShowIndex] = useState(0);
    const [show] = useState(
        [
            "show1.png",
            "show2.png",
        ]
    )
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentShowIndex((prevIndex) =>
                prevIndex === show.length - 1 ? 0 : prevIndex + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [show.length]);

    return(
        <div className="container-fluid">
            <div className="product-showcase">
                <div className="">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-6">
                            <img className="w-100" src="./images/Pj01_cake/line2-01.png" alt="#" loading="lazy"/>
                        </div>
                        <div className="col-6">
                            <div className="content2">
                                <div className="heading_6">Introduction</div>
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
                <div className="">
                    <div className="">
                        <img className="w-100" src={require(`../../public/images/Pj01_cake/${show[currentShowIndex]}`)} alt="#" loading="lazy"/>
                        <div className="d-flex mt-3">
                            <div className="medium_text">Hello Foodlovers</div>
                            <div className="medium_text ml-auto">We're Season Cake Blog</div>
                            <div className="medium_text ml-auto">Since 19/08/2020</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row more-pj">
                <div className="col-4 more-1">
                    <div className="">
                        <img className="w-100" src="./images/home/more-1.png" alt="logo" loading="lazy"/>
                        <div className="body_text pj_name">Aguri Jewellery Website</div>
                        <div className="small_text pj_intro">
                            User testing was an iterative process that was conducted at every milestone of the project to identify
                            the biggest pain points in the current version.
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="">
                        <img className="w-100" src="./images/home/more-2.png" alt="logo" loading="lazy"/>
                        <div className="body_text pj_name">Verite Fashion App</div>
                        <div className="small_text pj_intro">
                            User testing was an iterative process that was conducted at every milestone of the project to identify
                            the biggest pain points in the current version.
                        </div>
                    </div>
                </div>
                <div className="col-4 more-2">
                    <div className="">
                        <img className="w-100" src="./images/home/more-3.png" alt="logo" loading="lazy"/>
                        <div className="body_text pj_name">Alio Yoga Website</div>
                        <div className="small_text pj_intro">
                            User testing was an iterative process that was conducted at every milestone of the project to identify
                            the biggest pain points in the current version.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cake;