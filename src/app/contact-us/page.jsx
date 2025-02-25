import React from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import HeroSection from '../_components/hero-section'
import ContactComp from '../_components/contact-comp'
import ContactForm from '../_components/contact-section'
import FAQSection from '../_components/faq'
import Testimonal from '../_components/testimonal-slider'

const page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Contact Us'} img="" />
        {/* <ContactComp /> */}
        <ContactForm />
        <Testimonal />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default page