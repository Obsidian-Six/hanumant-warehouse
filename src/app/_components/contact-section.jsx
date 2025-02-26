

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Country: "",
    Email: "",
    Number: "",
    Requirement: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data Submitted:", formData);
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
    }, 2000);
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl overflow-hidden my-10 md:px-0 px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Contact Details */}
          <div>
            {/* <p className="md:text-lg text-base text-[#0F1416]">
              Have questions? We're here to help.
            </p> */}
            <h2 className="text-primary-main lg:text-4xl md:text-3xl text-2xl font-semibold md:my-3 my-1">
              Contact Us
            </h2>
            <p className="md:text-lg sm:text-base text-xs text-[#0F1416] md:mb-8 mb-2">
              Reach out to us via phone, email, or visit our office for any inquiries.
            </p>
            <ul className="space-y-6">
              {/* Phone */}
              <li className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-main text-primary-main">
                  <IoCall className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-primary-main">Phone</h3>
                  <Link href="tel:9414408320" className="text-heading-main md:text-base text-sm hover:text-secondary-main">
                  94144-08320
                  </Link>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-main text-primary-main">
                  <IoMail className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-primary-main">Email</h3>
                  <Link href="mailto:hanumantwarehouse@gmail.com" className="text-heading-main md:text-base text-sm hover:text-secondary-main">
                    hanumantwarehouse@gmail.com
                  </Link>
                  <br />
                  <Link href="mailto:bangvarun08320@gmail.com" className="text-heading-main md:text-base text-sm hover:text-secondary-main">
                  bangvarun08320@gmail.com
                  </Link>
                </div>
              </li>
              {/* Address */}
              <li className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-main text-primary-main">
                  <FaLocationDot className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-primary-main">Address</h3>
                  <p className="text-heading-main md:text-base text-sm md:max-w-xl am:max-w-sm max-w-64">
                    Hanumant Warehouse, Kosiyanada, Merta Road Marg, Merta City 341510, District Nagour, Rajasthan, India
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="border border-primary-main rounded-xl p-6 bg-white shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <label>
                  <p className="text-sm font-semibold text-heading-main mb-1">Full Name</p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="outline-none w-full rounded-md border border-gray-400 py-2 text-sm pl-2"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <p className="text-sm font-semibold text-heading-main mb-1">Country</p>
                  <input
                    type="text"
                    placeholder="Your country"
                    className="outline-none w-full rounded-md border border-gray-400 py-2 text-sm pl-2"
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <p className="text-sm font-semibold text-heading-main mb-1">Email</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="outline-none w-full rounded-md border border-gray-400 py-2 text-sm pl-2"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <p className="text-sm font-semibold text-heading-main mb-1">WhatsApp Number</p>
                  <input
                    type="tel"
                    placeholder="Your WhatsApp number"
                    className="outline-none w-full rounded-md border border-gray-400 py-2 text-sm pl-2"
                    name="Number"
                    value={formData.Number}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="md:col-span-2">
                  <p className="text-sm font-semibold text-heading-main mb-1">Your Message</p>
                  <textarea
                    placeholder="Tell us about your inquiry..."
                    className="outline-none w-full rounded-md border h-24 border-gray-400 py-2 text-sm pl-2 resize-none"
                    name="Requirement"
                    value={formData.Requirement}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
              </div>
              <div className="mt-4 text-center">
                <button
                  type="submit"
                  className="w-full bg-primary-main text-white px-6 py-2 text-sm font-semibold rounded-md flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
