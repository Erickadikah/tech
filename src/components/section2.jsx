/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="w-full h-auto lg:h-[40vh] xl:h-[60vh] flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)),url(/images/ideas.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowY: "hidden",
      }}>
      <div className="max-w-7xl lg:max-w-8xl xl:max-w-9xl mx-auto lg:grid lg:grid-cols-1 lg:gap-4 items-center">
          <div className="p-2">
            <h6 className="text-lg font-bold mb-2 mt-2 text-white lg:text-xl xl:text-xl">
              OUR SOLID BACKGROUND
            </h6>
            <h1 className="text-lg font-bold md:text-xl text-white">
              Our solutions for your business
              <br />
              <span className="text-[#D0B216] bg-clip-text">Growth</span>
            </h1>
            <p className="text-sm text-white mt-4 lg:text-lg xl:text-lg">
              We specialize in providing tailored solutions to fuel business
              growth. Our services include custom website development, e-commerce
              solutions, SEO strategies, mobile app development, and targeted
              digital marketing campaigns. We prioritize discretion and
              confidentiality, ensuring that our clients' business objectives are
              met with precision and professionalism. From initial consultation to
              ongoing support, we're committed to delivering results-driven
              solutions that propel businesses forward in a competitive
              marketplace.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Section2;
