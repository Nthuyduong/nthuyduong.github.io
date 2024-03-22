import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ROUTER} from "../utils/constants";
import Slider from "../components/common/slider";

const Designs = () =>{

    return (
        <div className="my-design2">
            <div className="design-background">
                <div className="background-text">WELCOME</div>
            </div>
            <div className="design-front">
                <div className="design-title heading_1">My Designs</div>
                <div className="my-project">
                    <div className="design-products">
                        <div className="row all-mydes">
                            <div className="col-3 mydes project-odd">
                                <div className="heading_2 mb-2">01/</div>
                                <img className="w-100" src="./images/design/des1.png" alt="#"
                                     loading="lazy"/>
                            </div>
                            <div className="col-3 mydes project-odd">
                                <div className="heading_2 mb-2">02/</div>
                                <img className="w-100" src="./images/design/des2.png" alt="#"
                                     loading="lazy"/>
                            </div>
                            <div className="col-3 mydes project-odd">
                                <div className="heading_2 mb-2">03/</div>
                                <img className="w-100" src="./images/design/des3.png" alt="#"
                                     loading="lazy"/>
                            </div>
                            <div className="col-3 mydes project-odd">
                                <div className="heading_2 mb-2">04/</div>
                                <img className="w-100" src="./images/design/des4.png" alt="#"
                                     loading="lazy"/>
                            </div>
                        </div>
                        <div className="slidebtn">
                            <div className="my-btn">
                                button
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Designs;