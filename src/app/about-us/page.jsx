import React from "react";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import HeroSection from "../_components/hero-section";
import AboutComp from "../_components/about-comp";
import AboutDetail from "./_components/aboutdetails";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection name={"About Us"} img="" />
      <AboutComp />
      <AboutDetail />
      <Footer />
    </div>
  );
};

export default page;
