import React from "react";
// import { MotionDiv } from "../utils/motion-div";

export default function AboutDetail() {
  const variants = {
    startLeft: { x: -100, opacity: 0 },
    endLeft: { x: 0, opacity: 1 },
    start: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };

  return (
    <main className="max-w-7xl mx-auto my-10 md:px-0 px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className="md:w-2/3">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl text-secondary-main font-bold">20+</span>
            <span className="text-xl text-gray-600">Years of Excellence</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-main mb-4">
            A Leading Name in Agricultural Exports
          </h2>
          <p className="text-gray-700 mb-6">
            HANUMANT Warehouse is a trusted supplier and exporter of premium-quality 
            agricultural products, including <strong className="text-primary-main">Guar, Spices, and 
            Organic Commodities</strong>. Based in <strong>Merta City</strong>, India's largest raw 
            material mandi, we ensure superior quality and timely delivery to our global clients.
          </p>
          <div>
            <img
              alt="HANUMANT Warehouse Export Operations"
              className="w-full h-auto md:h-[26.5rem] object-cover rounded mb-6"
              src="/images/02.jpg"
            />
          </div>
        </div>

        {/* MotionDiv Removed for Now */}
        <div className="md:w-1/3 space-y-5">
          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-seedling text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Premium Quality
              </h3>
            </div>
            <p className="text-gray-700">
              We ensure the highest quality standards in our agricultural products, 
              from sourcing to packaging.
            </p>
          </div>

          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-truck text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Timely Global Delivery
              </h3>
            </div>
            <p className="text-gray-700">
              Our efficient supply chain guarantees prompt deliveries to customers 
              across multiple countries.
            </p>
          </div>

          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-users text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Trusted by Clients Worldwide
              </h3>
            </div>
            <p className="text-gray-700">
              We have built strong relationships with businesses in the food, pharmaceutical, 
              and industrial sectors globally.
            </p>
          </div>

          <div className="bg-white p-6 shadow shadow-secondary-main rounded">
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-globe text-secondary-main text-3xl"></i>
              <h3 className="text-xl font-bold text-primary-main">
                Sustainable Sourcing
              </h3>
            </div>
            <p className="text-gray-700">
              We support sustainable farming practices, ensuring ethical sourcing and 
              eco-friendly processing.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
