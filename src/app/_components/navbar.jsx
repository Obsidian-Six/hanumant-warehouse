"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMenu, IoHomeOutline, IoInformationCircleOutline, IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { RiProductHuntLine, RiArticleLine, RiContactsLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const path = usePathname();
  const [isDrawer, setIsDrawer] = useState(false);

  const menuItems = [
    { name: "Home", link: "/", icon: <IoHomeOutline className="text-xl mr-2" /> },
    { name: "Products", link: "/products", icon: <RiProductHuntLine className="text-xl mr-2" /> },
    { name: "Blog", link: "/blogs", icon: <RiArticleLine className="text-xl mr-2" /> },
    { name: "About Us", link: "/about-us", icon: <IoInformationCircleOutline className="text-xl mr-2" /> },
    { name: "Contact Us", link: "/contact-us", icon: <RiContactsLine className="text-xl mr-2" /> },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-primary-main/80 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 md:px-0 px-2">
        {/* Contact Information */}
        <div className="flex items-center md:space-x-4 max-md:justify-between w-full md:text-base sm:text-sm max-md:text-xs md:px-2">
          {/* Phone Number */}
          <div className="flex items-center space-x-2 hover:text-secondary-main transition-transform p-1 px-2 text-white font-semibold">
            <IoCall />
            <Link href="tel:9414408320">+91 94144-08320</Link>
          </div>

          {/* Email */}
          <div className="space-x-2 flex items-center hover:text-secondary-main transition-transform p-1 px-2 text-white font-semibold">
            <MdMail />
            <Link href="mailto:hanumantwarehouse@gmail.com">
            hanumantwarehouse@gmail.com
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="md:flex space-x-4 hidden">
          <Link href="#" className="hover:text-secondary-main transition-transform">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="hover:text-secondary-main transition-transform">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-secondary-main transition-transform">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </header>
      <nav className="bg-white border-primary-main border-b-2 py-2">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" className="h-10 mr-3 sm:h-16 scale-110" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="lg:flex hidden justify-between mt-0 text-lg w-full max-w-4xl gap-10">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className={`flex items-center gap-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-main lg:p-0 dark:hover:bg-gray-700 dark:hover:text-heading-main lg:dark:hover:bg-transparent dark:border-gray-700 ${
                  path === item.link ? "text-primary-main font-medium" : "text-heading-main"
                }`}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <IoMenu className="text-2xl cursor-pointer" onClick={() => setIsDrawer(true)} />
          </div>
        </div>
      </nav>

      {/* Dark Overlay When Menu Opens */}
      {isDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={() => setIsDrawer(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform lg:hidden w-64 bg-white shadow-lg ${
          isDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button type="button" onClick={() => setIsDrawer(false)} className="absolute top-4 right-4">
          <RxCross1 className="text-black text-xl" />
        </button>

        {/* Sidebar Logo */}
        <div className="py-4">
          <h5 className="text-lg font-semibold uppercase text-black flex items-center space-x-3">
            <img src="/logo.png" className="h-6" alt="Logo" />
            <span>HANUMANT</span>
          </h5>

          {/* Sidebar Links */}
          <ul className="mt-6 space-y-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all ${
                    path === item.link ? "bg-gray-300 font-medium" : "text-black"
                  }`}
                  onClick={() => setIsDrawer(false)}
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
