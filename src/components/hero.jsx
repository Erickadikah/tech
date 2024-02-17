/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Partners from "./partners";

const Hero = () => {
  return (
    <div className="lg:h-[95vh] h-[60vh]  relative bg-[#F3F5F8]">
      <div className="">
        <div className="container mx-auto px-8 relative z-0 ">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:py-18 py-10">
            <div className="md:w-1/2 lg:mb-8 md:mb-0 md:text-left lg:mt-20 mt-0">
              <p className="text-sm md:text-lg font-bold text-gray-900 mb-4">
                Welcome to our Tech Agency!
              </p>
              <h1 className="text-4xl md:text-7xl font-bold text-blue-500 leading-tight mb-6">
                Empowering Businesses with Tech Solutions
              </h1>
              <p className="text-lg text-gray-900 mb-8">
                We specialize in crafting technology solutions that drive
                business growth and innovation. From web and mobile applications
                to AI and IoT, we've got you covered.
              </p>
              <div className="flex gap-4">
                <button className="px-6 md:px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none rounded-full">
                  Get Started
                </button>
                <button className="px-6 md:px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none rounded-full">
                  Request Service
                </button>
              </div>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-full bg-blue-400">
              <Image
                src="/images/tech.png"
                alt="hero-image"
                className="hidden md:block object-cover object-center"
                width={1000}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
