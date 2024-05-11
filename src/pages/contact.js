import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page mt-8">
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-1"></div>
        <div className="col-span-11">
          <div className="heading_1">Get In Touch</div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <div className="body_text">
            “I welcome any potential recruiters to contact me regarding job opportunities that match my skillset and interests. I am excited to explore new opportunities and connect with professionals in my field”
          </div>
          <div className="grid grid-cols-2 gap-4 mt-7">
            <div className="cols-span-1">
              <img className="w-full" src="./images/contact/contactpage.png" alt="logo" loading="lazy" />
            </div>
            <div className="cols-span-1 flex self-end">
              <div className="w-full text-right">
                <div className="small_text mb-1">Send me a mail</div>
                <div className="small_text">Follow me on Behance</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-6">
          <div className="heading_6 mb-5">Send me a message</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 grid">
              <label>Your Name *</label>
              <input className="border-solid border-b border-ccc" type="text" required />
            </div>
            <div className="col-span-1 grid">
              <label>Phone number *</label>
              <input className="border-solid border-b border-ccc" type="text" required />
            </div>
          </div>
          <div className="grid my-4">
            <label>Email address *</label>
            <input className="border-solid border-b border-ccc" type="text" required />
          </div>
          <div className="grid">
            <label>Message *</label>
            <textarea className="border-solid border-b border-ccc" rows="4" required></textarea>
          </div>
          <div className="heading_3 send-msg-btn mt-6">
            <div className="flex float-right">
              <div type="heading_3">Send Message</div>
              <div className="ml-3">
                <img className="h-[50px] w-full" src="./images/icons/arrow-up-right-l.svg" alt="logo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default Contact;