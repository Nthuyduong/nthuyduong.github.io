import React from "react";
import {Link} from "react-router-dom";
import {ROUTER} from "../utils/constants";

const Designs = () =>{
    return(
        <div>
            <div className="my-design">
                <div className="container-fluid">
                    <div className="row my-des-title">
                        <div className="col-6">
                            <div className="d-flex">
                                <div className="text-large-2">My</div>
                                <div className="dot-bl">
                                    <img className="img-ellipe-bl mx-4" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy"/>
                                </div>
                                <div className="heading_1">DESIGNS</div>
                            </div>
                            <div className="d-flex">
                                <div className="text-large-2">for</div>
                                <div className="line decor-line mx-3"></div>
                                <div className="heading_1">UNIQUE</div>
                            </div>
                            <div className="d-flex">
                                <div className="heading_1">&</div>
                                <div className="text-large-2 mx-4">soulful</div>
                                <div className="heading_1">BRANDS</div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div className="byme">
                                <div className="d-flex">
                                    <div className="text-large-2">By</div>
                                    <div className="dot-bl">
                                        <img className="img-ellipe-bl mx-4" src="./images/icons/ellipse-bl.svg" alt="smile" loading="lazy"/>
                                    </div>
                                    <div className="heading_1 myname">NthDuong</div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="body_text text-right mydes-content">
                                "Step into the world of a passionate UI designer's portfolio. Witness the evolution of my skills as I
                                create intuitive interfaces and explore the realm of captivating design."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-project">
                <div className="">
                    <div className="row">
                        <div className="col-3 project-odd">
                            <div className="heading_2 mb-2">01</div>
                            <Link to={ROUTER.CAKE}>
                                <img className="w-100 project-img" src="./images/design/des-1.png" alt="logo" loading="lazy"/>
                            </Link>
                            <div className="medium_text mt-3">
                                <Link to={ROUTER.CAKE}>
                                    Season Cake Blog
                                </Link>
                            </div>
                            <div className="body_text w-100 mt-2">
                                User testing was an iterative process that was at every milestone of the project to.
                            </div>
                        </div>
                        <div className="col-3 project-even">
                            <div className="heading_2 mb-2">02</div>
                            <Link to={ROUTER.AGURI}>
                                <img className="w-100 project-img" src="./images/design/des-2.png" alt="logo" loading="lazy"/>
                            </Link>
                            <div className="medium_text mt-3">
                                <Link to={ROUTER.AGURI}>
                                    Aguri Jewellery Website
                                </Link>
                            </div>
                            <div className="body_text w-100 mt-2">
                                User testing was an iterative process that was at every milestone of the project to.
                            </div>
                        </div>
                        <div className="col-3 project-odd">
                            <div className="heading_2 mb-2">03</div>
                            <Link to={ROUTER.FASHION}>
                                <img className="w-100 project-img" src="./images/design/des-3.png" alt="logo" loading="lazy"/>
                            </Link>
                            <div className="medium_text mt-3">
                                <Link to={ROUTER.FASHION}>Fashion App</Link>
                            </div>
                            <div className="body_text w-100 mt-2">
                                User testing was an iterative process that was at every milestone of the project to.
                            </div>
                        </div>
                        <div className="col-3 project-even">
                            <div className="heading_2 mb-2">04</div>
                            <Link to={ROUTER.ALIO}>
                                <img className="w-100 project-img" src="./images/design/des-4.png" alt="logo" loading="lazy"/>
                            </Link>
                            <div className="medium_text mt-3">
                                <Link to={ROUTER.ALIO}>
                                    Alio Yoga Website & App
                                </Link>
                            </div>
                            <div className="body_text w-100 mt-2">
                                User testing was an iterative process that was at every milestone of the project to.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Designs;