import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-element contact-element">
        <div className="contact-content">
          <div className="img-container">
            <img src="./images/home/logo-icon.svg" alt="#" loading="lazy"></img>
          </div>
          <div className="heading_3 title">Keep in touch</div>
          <div className="line"></div>
          <div className="container-fluid contact-des">
            <div className="row content-center">
              <div className="col-6 body_text">
              “I welcome any potential recruiters to contact me regarding job opportunities that match my skillset and interests. I am excited to explore new opportunities and connect with professionals in my field”
              </div>    
            </div>
          </div>
          <div className="contact-phone body_text">
            <a href="tel:+84336256655">0336256655</a>
          </div>
          <div className="contact-mail body_text">
            <a href="mailto:Nthduong198@gmail.com.com">Nthduong198@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;