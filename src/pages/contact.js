import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sendContactForm } from "../services/app";
import Loading from "../components/common/loading";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePhone = (phone) => {
    const re = /^[0-9\b]+$/;
    return re.test(phone);
  }

  const handleSubmit = async (e) => {
    if (success) return;
    e.preventDefault();
    let isError = false;
    let tmpError = { name: '', phone: '', email: '', message: '' };
    if (!name) {
      tmpError.name = 'Name is required';
      isError = true;
    }
    if (!phone || !validatePhone(phone) || phone.length < 10 || phone.length > 11) {
      tmpError.phone = 'Phone is required';
      isError = true;
    }
    if (!email || !validateEmail(email)) {
      tmpError.email = 'Email is required';
      isError = true;
    }
    if (!message) {
      tmpError.message = 'Message is required';
      isError = true;
    }

    if (isError) {
      setError(tmpError);
      return;
    }
    setLoading(true);
    const res = await sendContactForm({ name, phone, email, message });
    setLoading(false);
    if (res.status) {
      setSuccess(true);
    }
  }

  return (
    <div className="px-3 md:px-0 contact-page mt-4 md:mt-7 md:mb-9 mb-4">
      <div className="md:grid grid-cols-12 gap-4 mb-2 md:mb-5">
        <div className="col-span-1"></div>
        <div className="col-span-11">
          <div className="heading_1 cursor-text-wrp">Get In Touch</div>
        </div>
      </div>
      <div className="md:grid grid-cols-12 gap-4">
        <div className="col-span-1"></div>
        <div className="col-span-3 relative h-fit">
          <div className="body_text cursor-text-wrp md:mb-0 mb-5">
            “I welcome any potential recruiters to contact me regarding job opportunities that match my skillset and interests. I am excited to explore new opportunities and connect with professionals in my field”
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4 mt-8">
            <div className="cols-span-1">
              <img className="w-full" src="./images/contact/contactpage.png" alt="logo" loading="lazy" />
            </div>
            <div className="cols-span-1 flex self-end">
              <div className="w-full text-right">
                <div className="small_text mb-1 cursor-text-wrp">
                  Behance
                </div>
                <div className="small_text mb-1 cursor-text-wrp">
                  Facebook
                </div>
                <div className="small_text cursor-text-wrp">
                  Instagram
                </div>
              </div>
            </div>
          </div>
          <div class="roll-animation contact-roll absolute md:block hidden">
            <div class="roll">
              <div class="circle">
                <img className="h-[200px] w-full" src="./images/contact/contact-roll.svg" alt="logo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-6">
          {/* <div className="heading_6 mb-5 cursor-text-wrp">Send me a message</div> */}
          <div className="md:grid grid-cols-2 gap-4">
            <div className="md:pb-0 mb-4 col-span-1 grid">
              <label className="mb-1 cursor-text-wrp">Your Name *</label>
              <input
                className={`border-solid border-b focus:outline-none focus:border-b focus:border-333 ${error?.name ? 'border-[red]' : 'border-ccc'}`}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md:pb-0 mb-4 col-span-1 grid">
              <label className="mb-1 cursor-text-wrp">Phone number *</label>
              <input
                className={`border-solid border-b focus:outline-none focus:border-b focus:border-333 ${error?.phone ? 'border-[red]' : 'border-ccc'}`}
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="grid my-4">
            <label className="mb-1 cursor-text-wrp">Email address *</label>
            <input
              className={`border-solid border-b focus:outline-none focus:border-b focus:border-333 ${error?.email ? 'border-[red]' : 'border-ccc'}`}
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid">
            <label className="mb-1 cursor-text-wrp">Message *</label>
            <textarea
              className={`border-solid border-b focus:outline-none focus:border-b focus:border-333 ${error?.message ? 'border-[red]' : 'border-ccc'}`}
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-[42px] send-msg-btn mt-6">
            <div className="flex float-right">
              <button
                type="submit"
                className="cursor-pointer cursor-text-wrp flex gap-2 scroll-text"
                onClick={handleSubmit}
                disabled={loading}
                data-replace="SEND MESSAGE"
              >
                {loading && <Loading />}
                <span>
                  SEND MESSAGE
                </span>
              </button>
              <div className="ml-3">
                <img className="h-[63px] w-full" src="./images/icons/arrow-up-right-l.svg" alt="logo" loading="lazy" />
              </div>
            </div>
          </div>
          {success && <div className="text-green-500">Send successfully</div>}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default Contact;