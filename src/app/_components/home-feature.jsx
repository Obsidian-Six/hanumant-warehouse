import React from "react";
import HeadingMain from "./headingMain";
import Link from "next/link";

const features = [
  {
    icon: "fa-handshake text-secondary-main",
    title: "TRUST & RELIABILITY",
    description:
      "HANUMANT Warehouse is known for its integrity and long-standing relationships with clients. We ensure fair business practices and deliver consistent quality in every order.",
  },
  {
    icon: "fa-seedling text-secondary-main",
    title: "PREMIUM QUALITY PRODUCTS",
    description:
      "We supply only the best quality Guar products, spices, and agricultural commodities. Our strict quality control measures ensure purity and freshness.",
  },
  {
    icon: "fa-industry text-secondary-main",
    title: "ADVANCED PROCESSING TECHNOLOGY",
    description:
      "Our warehouse and processing units use modern technology to enhance efficiency, ensuring top-grade products for domestic and international markets.",
  },
  {
    icon: "fa-users text-secondary-main",
    title: "EXPERIENCED TEAM",
    description:
      "With years of expertise in the industry, our team ensures smooth operations, from sourcing raw materials to final product delivery.",
  },
  {
    icon: "fa-map-marker-alt text-secondary-main",
    title: "STRATEGIC LOCATION",
    description:
      "Located in Merta City, India’s largest raw material mandi, we have access to premium-quality crops at competitive prices, ensuring cost-effective solutions for our buyers.",
  },
  {
    icon: "fa-certificate text-secondary-main",
    title: "QUALITY ASSURANCE & CERTIFICATION",
    description:
      "We follow international standards for quality assurance and have certifications to ensure our products meet global market requirements.",
  },
];

const HomeFeature = () => {
  return (
    <section className="bg-secondary-main/10 py-12">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Title Section */}
        <HeadingMain name="Our Features" />
        <p className="text-lg text-primary-main max-w-3xl mx-auto mb-10">
          At Hanumant Warehouse, we take pride in offering top-notch storage solutions, superior product handling, and timely delivery to meet all your business needs.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <i className={`fas ${feature.icon} text-5xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2 text-primary-main">
                {feature.title}
              </h3>
              <p className="text-color-main text-sm sm:text-base text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-12">
          <Link
            className="bg-primary-main text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-secondary-main transition-all duration-300"
            href="/blogs"
          >
            Our Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
