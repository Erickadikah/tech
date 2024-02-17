/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Partners from "./partners";

const Hero = () => {
  return (
    <div className="lg:h-[95vh] h-[95vh]  relative bg-gray-900 lg-h-95vh">
    <div className="contained">
      <div className="container mx-auto px-4 relative z-0 lg:mt-10">
        <div className="flex flex-col md:flex-row items-center gap-4 py-24">
          <div className="md:w-1/2 mb-8 md:mb-0 md:text-left">
          <p className="text-sm md:text-lg font-bold text-gray-100 mb-4">
              Welcome to our Tech Agency!
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Businesses with Tech Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We specialize in crafting technology solutions that drive
              business growth and innovation. From web and mobile applications
              to AI and IoT, we've got you covered.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none">
                Get Started
              </button>
              <button className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold hover:bg-blue-600 hover:text-white focus:outline-none">
                Request Service
              </button>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-lg">
            <Image
              src="/images/webdev.png"
              alt="hero-image"
              className="object-cover object-center"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
