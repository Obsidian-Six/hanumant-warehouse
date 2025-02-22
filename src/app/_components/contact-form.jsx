"use client"

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can replace this with API integration
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto py-10 px-6">
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-primary-main mb-6 text-center font-montserrat">
          Send us a quick message
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2 text-gray-900 placeholder-transparent"
              id="first-name"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
            />
            <label
              className="absolute left-0 top-0 text-gray-500 transition-all duration-300 font-opensans"
              htmlFor="first-name"
            >
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2 text-gray-900 placeholder-transparent"
              id="last-name"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
            />
            <label className="absolute left-0 top-0 text-gray-500 transition-all duration-300 font-opensans">
              Last Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2 text-gray-900 placeholder-transparent"
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
            />
            <label className="absolute left-0 top-0 text-gray-500 transition-all duration-300 font-opensans">
              Email
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2 text-gray-900 placeholder-transparent"
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
            />
            <label className="absolute left-0 top-0 text-gray-500 transition-all duration-300 font-opensans">
              Phone Number
            </label>
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2 relative">
            <textarea
              className="w-full border-b-2 border-gray-300 focus:border-primary-main outline-none py-2 resize-none text-gray-900 placeholder-transparent"
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            />
            <label className="absolute left-0 top-0 text-gray-500 transition-all duration-300 font-opensans">
              Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              className="bg-primary-main text-white px-6 py-2 rounded-full w-full sm:w-auto hover:bg-secondary-main transition-all duration-300 font-montserrat"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
