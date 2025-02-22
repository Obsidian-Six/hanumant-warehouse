"use client";

import React, { useState } from "react";
import HeadingMain from "./headingMain";

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "GUAR REFINED DALL",
      description:
        "Guar refined dall is obtained after processing guar seeds. It is widely used in various industries and food applications due to its high-quality standards and purity.",
      image: `https://images.jdmagicbox.com/quickquotes/images_main/guar-refined-splits-neepo-splits-93-378580090-opje1.jpg`,
      alt: "Guar refined dall",
    },
    {
      name: "GUAR ROASTED KORMA",
      description:
        "Roasted Guar Korma is a high-protein animal feed supplement. It is roasted at high temperatures to enhance its protein content, making it highly digestible and nutritious for livestock and poultry.",
      image: "https://prodigyfoods.in/wp-content/uploads/2019/09/roasted.jpg",
      alt: "Guar roasted korma",
    },
    {
      name: "GUAR CHURI",
      description:
        "Guar Churi is a by-product of guar gum processing, rich in protein and fiber. It is widely used in the cattle feed industry as a cost-effective and nutritious feed ingredient.",
      image:
        "https://5.imimg.com/data5/FG/MV/OQ/SELLER-13496523/cottan-seed-binola-.jpg",
      alt: "Guar churi",
    },
    {
      name: "CUMIN SEED (JEERA)",
      description:
        "Cumin seed, also known as Jeera, is one of the most widely used spices in Indian cuisine. It has a distinct aroma and flavor and is known for its health benefits, including aiding digestion.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVriOYiylS_ZqbRngEh9USE5Idr2kSIX99A&s",
      alt: "Cumin seed (Jeera)",
    },
    {
      name: "DILL SEED",
      description:
        "Dill seed is an aromatic spice widely used in pickling, seasoning, and herbal medicine. It has antibacterial properties and is known for its health benefits, including improving digestion.",
      image: "https://m.media-amazon.com/images/I/6105b8CYHZL.jpg",
      alt: "Dill seed",
    },
    {
      name: "PSYLLIUM HUSK",
      description:
        "Psyllium husk is a high-fiber product used as a natural laxative and dietary supplement. It is widely used in pharmaceuticals, food, and dietary industries for its digestive benefits.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Psyllium_seed_husk_pile.JPG/1200px-Psyllium_seed_husk_pile.JPG",
      alt: "Psyllium husk",
    },
    {
      name: "FENNEL SEED",
      description:
        "Fennel seed is a flavorful spice with a sweet and aromatic taste. It is commonly used in cooking, herbal tea, and as a digestive aid due to its carminative properties.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUO_pFV3HLpHYZnVnuLb7pOTX08zbafsmDA&s",
      alt: "Fennel seed",
    },
    {
      name: "FENUGREEK SEED",
      description:
        "Fenugreek seed is a powerful medicinal spice known for its numerous health benefits. It is used in food seasoning, herbal remedies, and as a dietary supplement for digestion and blood sugar control.",
      image:
        "https://cdn.britannica.com/05/118605-004-4D6BF054/Seeds-fenugreek.jpg?w=400&h=300&c=crop",
      alt: "Fenugreek seed",
    },
  ];

  return (
    //     <section className="my-10">
    //     <div className="max-w-6xl mx-auto max-md:px-6">
    //       <HeadingMain name={'OUR PRODUCTS'} />
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {products.map((product, index) => (
    //           <div
    //             key={index}
    //             className="grid md:grid-cols-2 items-center bg-white shadow-lg rounded-lg p-4"
    //           >
    //             <img
    //               alt={product.alt}
    //               className="w-auto h-full object-cover border-2 border-primary-main rounded-lg"
    //               src={product.image}
    //             />
    //             <div className="mt-4 md:mt-0 md:ml-4">
    //               <h2 className="text-primary-main font-bold text-base max-md:text-center w-full">{product.name}</h2>
    //               <p className="text-gray-700 mt-2 text-justify text-sm leading-8">{product.description}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-6">
      {/* Section Title */}
      <HeadingMain name="OUR PRODUCTS" />
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 max-md:p-2">
        {products.map((ele, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
           
          >
            <img alt={ele.alt} className="w-full h-56 object-cover" src={ele.image} />
            <div className="p-5">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-primary-main font-montserrat">
                {ele.name}
              </h2>
              <p className="text-color-main text-sm sm:text-base mb-4 font-opensans line-clamp-2">
                {ele.description}
              </p>
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
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full relative transform transition-transform scale-100">
            <button
              className="absolute top-0 right-1 hover:text-red-500 text-gray-600 text-3xl"
              onClick={() => {
                setSelectedProduct(null);
                document.body.style.overflow = "auto";
              }}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.alt}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4 text-primary-main font-montserrat">
              {selectedProduct.name}
            </h2>
            <p className="text-color-main mt-2 font-opensans">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
