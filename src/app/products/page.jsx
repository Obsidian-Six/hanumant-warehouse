import React from 'react';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import HeroSection from '../_components/hero-section';
import ProductSection from '../_components/product-section';

const Page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Products'} img="" />
        <ProductSection />
   
    <Footer />
    </div>
  );
};

export default Page;
