"use client";

import React, { useState } from "react";
import HeadingMain from "./headingMain";

const faqs = [
  {
    question: "What products do you offer?",
    answer:
      "We specialize in high-quality guar products, spices, and agricultural commodities, including Guar Refined Dall, Guar Roasted Korma, Guar Churi, Psyllium Husk, Cumin Seed, and more.",
  },
  {
    question: "Where is your company located?",
    answer:
      "Our headquarters are located in Merta City, Rajasthan, India, with additional branches in Dubai and Sharjah, UAE.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we offer worldwide shipping with secure packaging and timely delivery to ensure product quality.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can contact us via email at info@hanumantwarehouse.com or call us at +91 9411-106883. Our team will assist you with the ordering process.",
  },
  {
    question: "Do you offer bulk order discounts?",
    answer:
      "Yes, we provide competitive pricing for bulk orders. Contact us to discuss customized rates based on your requirements.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto py-10 md:px-0 px-6">
      {/* Heading */}
      <HeadingMain name={"Frequently Asked Questions"} />
      {/* <h2 className="text-3xl md:text-4xl font-bold text-primary-main text-center font-montserrat">
        
      </h2> */}
      <p className="text-base sm:text-lg text-gray-700 text-center font-opensans mt-2 mb-8">
        Find answers to the most common questions about our products and services.
      </p>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-primary-main rounded-lg shadow overflow-hidden">
            <button
              className="w-full text-left p-4 bg-white font-montserrat text-lg text-primary-main flex justify-between items-center transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-secondary-main text-xl transition-transform transform">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 text-sm sm:text-base font-opensans bg-gray-50 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
