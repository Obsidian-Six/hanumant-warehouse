import React from "react";
import ContactForm from "./contact-form";
import Link from "next/link";

const ContactComp = () => {
  return (
    <div className="bg-gray-50">
      {/* Contact Information */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Firm Location */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold font-montserrat mb-2">Hanumant Warehouse</h2>
          <p className="text-sm sm:text-base font-opensans text-gray-600 leading-relaxed">
            Al Tawhidi Building 1, Office No 404 <br />
            Near ADCB Bank, Bur Dubai <br />
            Dubai, United Arab Emirates
          </p>
        </div>

        {/* Products We Deal In */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold font-montserrat mb-2">We Deal In</h2>
          <p className="text-sm sm:text-base font-opensans text-gray-600 leading-relaxed">
            Catalyst International LLC <br />
            Business Center, SHAMS Free Zone <br />
            Sharjah, UAE
          </p>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold font-montserrat mb-2">Contact Us</h2>
          <p className="text-gray-600 font-opensans">General Inquiries</p>
          <p>
            <strong>Email:</strong>{" "}
            <a className="text-primary-main hover:underline" href="mailto:info@hanumantwarehouse.com">
              info@hanumantwarehouse.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a className="text-primary-main hover:underline" href="tel:+919411106883">
              (+91) 9411-106883
            </a>
          </p>

          {/* Social Media Links */}
          {/* <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary-main hover:text-secondary-main text-sm sm:text-base">
              Facebook
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary-main hover:text-secondary-main text-sm sm:text-base">
              Twitter
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary-main hover:text-secondary-main text-sm sm:text-base">
              LinkedIn
            </Link>
          </div> */}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="mx-auto my-10 rounded-lg overflow-hidden shadow-lg max-md:h-40">
        <iframe
          className="w-full h-96 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1639736814735!2d73.8972081149757!3d26.15662178346845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA5JzIwLjgiTiA3M8KwNTMnNDAuMCJF!5e0!3m2!1sen!2sin!4v1633931332041!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactComp;
