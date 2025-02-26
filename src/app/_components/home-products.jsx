"use client"

import React, { useState } from 'react';
import HeadingMain from './headingMain';
import Link from 'next/link';

const products = [
  {
    name: "GUAR REFINED DALL",
    description:
      "Used in the production of guar gum powder for food, pharmaceuticals, and industrial applications. Acts as a natural thickener and stabilizer in sauces, dairy, and beverages. Key ingredient in hydrocolloids and oil & gas drilling fluids.",
    benefits: [
      "High galactomannan content for superior viscosity.",
      "Improves texture, binding, and shelf life of food products.",
      "Used in paper, textile, and cosmetics industries for thickening and emulsifying.",
    ],
    importerCountries: ["USA", "Germany", "China", "France", "Japan", "South Korea"],
    image: `https://images.jdmagicbox.com/quickquotes/images_main/guar-refined-splits-neepo-splits-93-378580090-opje1.jpg`,
    alt: "Guar refined dall",
  },
  {
    name: "GUAR ROASTED KORMA",
    description:
      "Premium animal feed rich in protein and amino acids. Ideal for poultry, cattle, and aquaculture nutrition. Used as a cost-effective alternative to soy protein.",
    benefits: [
      "Boosts digestion and metabolism in livestock.",
      "Enhances muscle growth and immunity in animals.",
      "Eco-friendly, non-GMO, and highly digestible protein source.",
    ],
    importerCountries: ["Netherlands", "Australia", "Vietnam", "UAE", "South Africa"],
    image: "https://prodigyfoods.in/wp-content/uploads/2019/09/roasted.jpg",
    alt: "Guar roasted korma",
  },
  {
    name: "GUAR CHURI",
    description:
      "Used as a high-protein cattle feed supplement. Supports dairy farms in improving milk production. Rich in fibers and carbohydrates for balanced livestock nutrition.",
    benefits: [
      "Increases milk yield and enhances nutritional intake in cattle.",
      "Highly palatable and cost-effective alternative to conventional feeds.",
      "Helps in weight gain and muscle development in livestock.",
    ],
    importerCountries: ["Saudi Arabia", "Canada", "Indonesia", "Brazil", "Egypt"],
    image: "https://5.imimg.com/data5/AB/OF/MY-25306869/chana-dal-churi-500x500.jpg",
    alt: "Guar churi",
  }
];

const HomeProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-primary-main/10 relative">
      <div className="max-w-7xl mx-auto py-10 max-md:px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <HeadingMain name="Our Products" />
          <p className="text-base sm:text-lg text-color-main mt-2 max-w-2xl mx-auto font-opensans">
            Discover our premium quality products at Hanumant Warehouse. We ensure high standards and excellent service.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((ele, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer group"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  alt={ele.alt}
                  className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
                  src={ele.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h2 className="text-lg sm:text-xl font-bold text-primary-main font-montserrat">
                  {ele.name}
                </h2>
                <p className="text-color-main text-sm sm:text-base mt-2 mb-4 font-opensans line-clamp-2">
                  {ele.description}
                </p>

                {/* Buttons */}
                <div className="grid md:grid-cols-2 gap-3 md:text-base text-sm">
                  <Link
                    href="/#contact"
                    className="w-full text-center sm:w-auto text-white font-semibold py-2 px-4 border border-primary-main rounded bg-primary-main hover:bg-secondary-main transition"
                  >
                    Enquiry Now
                  </Link>
                  <button
                    className="w-full sm:w-auto bg-transparent text-primary-main font-semibold py-2 px-4 border border-primary-main rounded hover:bg-secondary-main hover:text-white transition"
                    onClick={() => {
                      setSelectedProduct(ele);
                      document.body.style.overflow = "hidden";
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative transform transition-transform scale-100 shadow-xl h-[80vh] overflow-y-scroll">
              {/* Close Button */}
              <button
                className="absolute top-2 right-3 text-white text-3xl hover:text-red-500 border bg-primary-main  h-8 flex justify-center items-center w-8 rounded pb-1"
                onClick={() => {
                  setSelectedProduct(null);
                  document.body.style.overflow = "auto";
                }}
              >
                &times;
              </button>

              <div className="flex flex-col gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.alt}
                  className="w-full md:w-1/2 mx-auto h-56 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary-main font-montserrat">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-color-main mt-2 font-opensans">
                    {selectedProduct.description}
                  </p>

                  {selectedProduct.benefits && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-secondary-main">
                        Benefits:
                      </h3>
                      <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                        {selectedProduct.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProduct.importerCountries && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-secondary-main">
                        Importer Countries:
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedProduct.importerCountries.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
    </div>
  );
};

export default HomeProducts;
