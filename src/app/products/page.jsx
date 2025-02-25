import React from 'react';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import HeroSection from '../_components/hero-section';
import ProductSection from '../_components/product-section';
import ContactForm from '../_components/contact-section';
import FAQSection from '../_components/faq';

const Page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Products'} img="" />
        <ProductSection />
        {/* <ContactForm /> */}
        <FAQSection />
   
    <Footer />
    </div>
  );
};

export default Page;
