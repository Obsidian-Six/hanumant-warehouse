import Link from "next/link";
import React from "react";

const HomeAbout = ({ aboutData }) => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-6 grid md:grid-cols-2 items-center gap-8">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary-main mb-4 font-montserrat">
          {aboutData?.title || "Leading Exporters"}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-color-main mb-6 font-opensans max-md:text-justify">
          <span className="text-primary-main font-semibold">{aboutData?.companyName || "HANUMANT WAREHOUSE"}</span> 
          {" "} {aboutData?.description || 
          "is a trusted name in the agricultural industry, specializing in the supply and export of high-quality products. Located in Merta City, the largest raw material mandi in India, we ensure the best quality guar products, spices, and agricultural commodities. Our expertise in processing and quality control allows us to deliver premium products to our clients worldwide."}
        </p>
        <Link 
          href="/about-us" 
          className="bg-primary-main text-white font-semibold py-3 px-6 rounded-full hover:bg-secondary-main transition-all duration-300 font-opensans"
        >
          ABOUT US
        </Link>
      </div>

      {/* Dynamic Image Section */}
      <div className="mt-8 md:mt-0 flex justify-center md:h-96 h-64">
        <img
          alt={aboutData?.imageAlt || "Warehouse with shelves filled with boxes and products"}
          className="w-full md:max-w-lg h-auto rounded-lg shadow-lg"
          src={aboutData?.image || "/images/02.jpg"}
        />
      </div>
    </div>
  );
};

export default HomeAbout;
