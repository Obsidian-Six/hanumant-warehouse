"use client";

import React, { useState } from "react";
// import { MotionDiv } from "../utils/motion-div";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Country: "",
    Email: "",
    Number: "",
    Product: "",
    Requirement: "",
  });

  const variants = {
    startUp: { y: 0, scale: 0 },
    endUp: { y: 0, scale: 1 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      setLoading(true);
      const response = await fetch("https://sheetdb.io/api/v1/nk2b5gozjtzhz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([formData]),
      });
      setLoading(false);

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          Name: "",
          Country: "",
          Email: "",
          Number: "",
          Product: "",
          Requirement: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section id="contact" className="relative my-10 bg-primary-main text-white px-6">
      <img
        alt="HANUMANT Warehouse - Export Operations"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?fm=jpg&q=60&w=3000"
      />
      <div
        // variants={variants}
        // initial={variants.startUp}
        // whileInView={variants.endUp}
        // viewport={{ once: true }}
        // transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
        className="max-w-7xl mx-auto py-10 relative z-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase">Enquiry Now</h2>
          <p className="mt-2">We ensure quality & timely delivery worldwide.</p>
        </div>
        <form
          className="mt-6 max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md text-black"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3 text-sm">
            <input
              className="py-2 px-4 rounded-lg border border-primary-main"
              placeholder="Full Name"
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
            <input
              className="py-2 px-4 rounded-lg border border-primary-main"
              placeholder="Country"
              type="text"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
              required
            />
            <input
              className="py-2 px-4 rounded-lg border border-primary-main"
              placeholder="Email Address"
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <input
              className="py-2 px-4 rounded-lg border border-primary-main"
              placeholder="WhatsApp Number"
              type="tel"
              name="Number"
              value={formData.Number}
              onChange={handleChange}
              required
            />
            <select
              className="py-2 px-4 rounded-lg border border-primary-main md:col-span-2"
              name="Product"
              value={formData.Product}
              onChange={handleChange}
              required
            >
              <option value="">Select Product</option>
              <option value="Guar Refined Dall">Guar Refined Dall</option>
              <option value="Guar Roasted Korma">Guar Roasted Korma</option>
              <option value="Guar Churi">Guar Churi</option>
              <option value="Cumin Seed">Cumin Seed</option>
              <option value="Dill Seed">Dill Seed</option>
              <option value="Psyllium Husk">Psyllium Husk</option>
              <option value="Fennel Seed">Fennel Seed</option>
              <option value="Fenugreek Seed">Fenugreek Seed</option>
            </select>
          </div>
          <textarea
            className="mt-4 py-2 px-4 rounded-lg border border-primary-main w-full resize-none h-24"
            placeholder="Your Requirement"
            name="Requirement"
            value={formData.Requirement}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 py-2 px-6 bg-primary-main hover:bg-secondary-main rounded-md text-white w-full md:w-auto"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}


