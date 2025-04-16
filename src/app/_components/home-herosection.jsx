import Link from "next/link";
import React from "react";

const HomeHerosection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24">
        <div className="flex flex-col justify-center items-start text-left max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-main mb-4 font-montserrat uppercase">
            PREMIUM QUALITY guar gum product
          </h1>
{/*           <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-opensans">
            Exported to 20+ Countries
          </p> */}
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 font-opensans">
           Vast experience of more than 15 years
          </p>
{/*           <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 font-opensans">
            Trusted by Global Clients
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <Link
              className="bg-primary-main text-white text-sm md:text-lg px-5 py-2 rounded-full hover:bg-secondary-main transition-all duration-300 font-opensans"
              href="/#contact"
            >
              Contact Us
            </Link>
            <Link
              className="text-white text-sm md:text-lg px-5 py-2 rounded-full border border-white hover:bg-white hover:text-primary-main transition-all duration-300 font-opensans"
              href="/products"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHerosection;



// import Link from "next/link";
// import React from "react";

// const HomeHerosection = () => {
//   return (
//     <section className="relative w-full h-[60vh] md:h-screen">
//       {/* Background Image */}
//       <img
//         alt="Various spices in bowls"
//         className="w-full h-full object-cover"
//         src="/images/01.jpg"
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24">
//         <div className="flex flex-col justify-center items-start text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-main mb-4 font-montserrat">
//             PREMIUM QUALITY SPICES
//           </h1>
//           <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-opensans">
//             Exported to 20+ Countries
//           </p>
//           <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-opensans">
//             Best-in-Class Processing & Packaging
//           </p>
//           <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 font-opensans">
//             Trusted by Global Clients
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
//             <Link
//               className="bg-primary-main text-white text-sm md:text-lg px-5 py-2 rounded-full hover:bg-secondary-main transition-all duration-300 font-opensans"
//               href="/#contact"
//             >
//               Contact Us
//             </Link>
//             <Link
//               className="text-white text-sm md:text-lg px-5 py-2 rounded-full border border-white hover:bg-white hover:text-primary-main transition-all duration-300 font-opensans"
//               href="/products"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHerosection;
