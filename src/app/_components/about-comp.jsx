import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutComp = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:px-8 text-justify">
      {/* About Us Section */}
      <p className="mb-6 text-sm sm:text-xl font-opensans leading-relaxed">
        <strong>HANUMANT Warehouse</strong> is a trusted name in the agricultural industry, specializing in the supply and export of high-quality
        <strong className="text-primary-main"> Guar products, spices, and agricultural commodities.</strong>
        Located in <strong>Merta City</strong>, India’s largest raw material mandi, we ensure premium quality and timely delivery to our global clients.
      </p>

      <p className="mb-6 text-sm sm:text-xl font-opensans">
        Our product range includes:
        <strong className="text-primary-main"> Guar Refined Dall, Guar Roasted Korma, Guar Churi, Cumin Seed, Dill Seed, Psyllium Husk, Fennel Seed, and Fenugreek Seed.</strong>
      </p>

      {/* Industrial & Agricultural Applications */}
      <p className="mb-6 text-sm sm:text-xl font-opensans">
        Our products cater to various industries, including:
        <strong> Food Processing, Pharmaceuticals, Animal Feed, and Industrial Applications.</strong>
        The guar and spice-based products we offer are used in food-grade applications, cattle feed, and industrial purposes like textile printing and oil drilling.
      </p>

      {/* Quality Policy */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main font-montserrat">
        QUALITY POLICY
      </h2>
      <p className="mb-6 text-sm sm:text-xl font-opensans">
        Quality is at the core of HANUMANT Warehouse. We have a robust quality control system in place to ensure that all our products meet international standards. Our processing units follow stringent hygiene protocols, ensuring that every batch meets the highest purity levels. Our team continuously monitors the production process, from raw material procurement to final packaging.
      </p>

      <img  src="/images/02.jpg" alt="No Preview" className="md:h-96 h-56 w-full object-cover" />

      {/* Our Team */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main font-montserrat">
        OUR TEAM
      </h2>
      <p className="mb-4 text-sm sm:text-xl font-opensans">We have a dedicated team of professionals with expertise in:</p>
      <ul className="list-none space-y-2 text-sm sm:text-base font-opensans">
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Agricultural product sourcing & quality assurance
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Packaging & logistics
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> International trade & export management
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Sales & customer support
        </li>
      </ul>

      {/* Client Satisfaction */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main font-montserrat">
        CLIENT SATISFACTION
      </h2>
      <p className="mb-6 text-sm sm:text-xl font-opensans">
        Our commitment to customer satisfaction is reflected in our business practices. We ensure customized packaging solutions, timely deliveries, and competitive pricing. We maintain long-term relationships with our clients by providing consistent product quality and reliable service. Our customer-first approach has helped us build a strong global clientele.
      </p>

      {/* Why Us */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 text-primary-main font-montserrat">
        WHY CHOOSE US?
      </h2>
      <p className="mb-4 text-sm sm:text-xl font-opensans">
        Our strong industry presence and commitment to quality make us a preferred choice for bulk agricultural supplies. Here’s why clients trust HANUMANT Warehouse:
      </p>
      <ul className="list-none space-y-2 text-sm sm:text-base font-opensans">
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Located in Merta City, India's largest raw material mandi
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Guaranteed premium quality and purity
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Advanced processing & packaging facilities
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> Competitive pricing & bulk supply availability
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-primary-main mr-2" /> On-time delivery and excellent customer support
        </li>
      </ul>
    </div>
  );
};

export default AboutComp;
