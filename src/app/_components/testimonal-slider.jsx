"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
// import { MotionDiv } from "../utils/motion-div";

export default function Testimonal() {
  const aboutVariants = {
    hiddenTop: {
      y: -100,
      opacity: 0,
    },
    visibleTop: {
      y: 0,
      opacity: 1,
      staggerChildren: 0.3,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
    hiddenBottom: {
      y: 200,
      opacity: 0,
    },
    visibleBottom: {
      y: 0,
      opacity: 1,
    },
  };
  const testimonials = [
    {
      name: "Jonathan Edwards",
      location: "United Kingdom",
      data: "HANUMANT Warehouse ensures the highest quality agricultural products with seamless international shipping. Their commitment to excellence makes them a trusted supplier in global trade.",
    },
    {
      name: "Sofia Martinez",
      location: "Spain",
      data: "As an importer of spices and guar products, I rely on HANUMANT Warehouse for top-grade quality and timely deliveries. Their professionalism and service are unmatched.",
    },
    {
      name: "Arjun Mehta",
      location: "India",
      data: "HANUMANT Warehouse has transformed the way we source guar and spice products. Their superior quality and excellent customer service set them apart in the industry.",
    },
    {
      name: "Fatima Hassan",
      location: "UAE",
      data: "From cumin to fennel seeds, HANUMANT Warehouse delivers premium agricultural commodities with efficiency. Their deep understanding of export regulations ensures smooth transactions.",
    },
    {
      name: "Luigi Ricci",
      location: "Italy",
      data: "The freshness and purity of HANUMANT Warehouse's guar products make them a leading exporter. Their quality control and packaging are top-notch.",
    },
    {
      name: "Chen Wei",
      location: "China",
      data: "HANUMANT Warehouse’s dedication to timely shipping and premium quality sourcing is impressive. They have become our preferred supplier for guar and spice exports.",
    },
    {
      name: "Ahmed Al Maktoum",
      location: "Dubai",
      data: "HANUMANT Warehouse bridges the gap between Indian farmers and global buyers. Their commitment to sustainable sourcing and reliable exports is truly commendable.",
    },
  ];
  
  
  return (
    <div
      id="review"
      className="relative w-full h-full max-w-7xl mx-auto md:py-10 rounded-md max-md:my-6  md:px-0 px-4"
    >
      <div
        // variants={aboutVariants}
        // initial={aboutVariants.hiddenBottom}
        // whileInView={aboutVariants.visibleBottom}
        // viewport={{ once: true }}
        className="grid md:grid-cols-7 grid-cols-1 w-full h-full "
      >
        <div className="max-w-xl md:col-span-3 md:pr-2">
          <h1
            className={`md:text-4xl sm:text-2xl text-2xl font-bold md:tracking-tight text-primary-main max-md:text-center`}
          >
            What Our Partners Are Saying
          </h1>
          <p className="text-secondary-main font-medium md:mt-4 mt-2 max-md:text-xl text-2xl max-md:text-center max-md:leading-snug">
            Hear from our valued partners who experience the quality,
            reliability, and exceptional service we deliver consistently.
          </p>
          <p className="md:text-lg text-base text-[#666666] md:mt-4 mt-2">
            Our export-import solutions are trusted globally for their
            efficiency, quality, and unmatched customer service. Our dedication
            to meeting and exceeding client expectations has built long-lasting
            partnerships and earned us respect across borders.
          </p>
        </div>

        <Swiper
          autoPlay={true}
          loop={true}
          spaceBetween={40}
          navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full max-md:mt-4 rounded-xl md:col-span-4 pl-4"
        >
          {testimonials?.map((ele, i) => (
            <SwiperSlide
              key={i}
              className="md:px-6 grid items-center h-full w-full"
            >
              <div className="md:h-16 md:w-16 h-12 w-12 relative">
                <Image
                  src={`/images/user.png`}
                  alt="No Preview"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-[#666] md:text-lg text-base mt-4">
                {ele.data}
              </p>
              <p className="md:text-2xl text-base text-primary-main font-bold  mt-2">
                {ele.name}
              </p>
              <p className="md:text-lg text-sm font-medium text-[#666666]">
                {ele.location}
              </p>
            </SwiperSlide>
          ))}

          <div className="relative md:mt-6 mt-4 max-md:pb-4">
            <button className="HomeSlidePrev text-primaryMain absolute md:bottom-0 bottom-5 max-md:left-1/3 left-6 -translate-y-1/2 z-10 hover:bg-secondary-main hover:text-white md:text-2xl p-2 rounded border bg-secondary-main/10 text-secondary-main">
              <FaArrowLeft />
            </button>
            <button className="HomeSlideNext text-primaryMain absolute md:bottom-0 bottom-5 max-md:left-1/2 -translate-y-1/2 md:left-24 left-20 z-10 hover:bg-secondary-main hover:text-white md:text-2xl p-2 rounded border bg-secondary-main/10 text-secondary-main">
              <FaArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
