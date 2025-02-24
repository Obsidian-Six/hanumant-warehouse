"use client"

import React, { useState } from 'react';
import HeadingMain from './headingMain';
import Link from 'next/link';

const products = [
  {
    name: 'GUAR REFINED DALL',
    description:
      'Guar refined dall is obtained after processing guar seeds. It is widely used in various industries and food applications due to its high-quality standards and purity.',
    image: 'https://5.imimg.com/data5/IOS/Default/2023/3/293651740/VU/RC/TG/80380709/product-jpeg-500x500.png',
    alt: 'Guar refined dall',
  },
  {
    name: 'GUAR ROASTED KORMA',
    description:
      'Roasted Guar Korma is a high-protein animal feed supplement. It is roasted at high temperatures to enhance its protein content, making it highly digestible and nutritious for livestock and poultry.',
    image: 'https://5.imimg.com/data5/IOS/Default/2023/3/293651590/QZ/DC/VZ/80380709/product-jpeg-500x500.png',
    alt: 'Guar roasted korma',
  },
  {
    name: 'GUAR CHURI',
    description:
      'Guar Churi is a by-product of guar gum processing, rich in protein and fiber. It is widely used in the cattle feed industry as a cost-effective and nutritious feed ingredient.',
    image: 'https://5.imimg.com/data5/AB/OF/MY-25306869/chana-dal-churi-500x500.jpg',
    alt: 'Guar churi',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((ele, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img alt={ele.alt} className="w-full h-56 object-cover" src={ele.image} />
              <div className="p-5">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-primary-main font-montserrat">
                  {ele.name}
                </h2>
                <p className="text-color-main text-sm sm:text-base mb-4 line-clamp-2 font-opensans">
                  {ele.description}
                </p>
                <div className='grid md:grid-cols-2 md:gap-6 gap-2 md:text-base text-sm'>
                <Link
                  href={'/#contact'}
                  className="w-full text-center sm:w-auto text-white font-semibold py-2 px-4 border border-primary-main rounded hover:bg-secondary-main bg-primary-main hover:text-white transition duration-300"
                >
                  Enquiry Now
                </Link>
                <button 
                  className="w-full sm:w-auto bg-transparent text-primary-main font-semibold py-2 px-4 border border-primary-main rounded hover:bg-secondary-main hover:text-white transition duration-300"
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
      </div>

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
            <button 
              className="absolute top-1 right-1 hover:text-red-500 text-gray-600 text-3xl" 
              onClick={() => {
                setSelectedProduct(null);
                document.body.style.overflow = "auto";
              }}
            >
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.alt} className="w-full h-64 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-4 text-primary-main font-montserrat">{selectedProduct.name}</h2>
            <p className="text-color-main mt-2 font-opensans">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
