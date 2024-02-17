/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import Partners from "./partners";
import SoftwareRequestForm from "./SoftwareRequestForm";
import { IoCloseCircle } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="lg:h-[95vh] h-[9up5vh]  relative bg-[#F3F5F8]" id="hero">
      <div className="">
        <div className="container mx-auto px-4 relative z-0 ">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:py-20 py-10">
            <div className="md:w-1/2 lg:mb-8 md:mb-0 md:text-left lg:mt-20 mt-0">
              <p className="text-sm md:text-lg font-bold text-gray-900 mb-4">
                Welcome to our Tech Agency!
              </p>
              <h1 className="text-4xl md:text-7xl font-bold text-blue-500 leading-tight mb-6">
                Empowering Businesses with Tech Solutions
              </h1>
              <p className="text-sm lg:text-lg text-gray-900 mb-8">
                We specialize in crafting technology solutions that drive
                business growth and innovation. From web and mobile applications
                to AI and IoT, we've got you covered.
              </p>
              <div className="flex gap-6">
                <ScrollLink
                  className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-sm bg-blue-500 text-white hover:bg-blue-600 focus:outline-none rounded-full"
                  to="features"
                  smooth={true}
                  duration={300}
                >
                  Get Started
                </ScrollLink>
                <button
                  onClick={toggleForm}
                  className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-sm border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none rounded-full"
                >
                  Request Service
                </button>
              </div>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-full bg-blue-400">
              <Image
                src="/images/tech.png"
                alt="hero-image"
                className=" md:block object-cover object-center"
                width={1000}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20 flex items-center justify-center">
          <div className="relative z-30">
            <SoftwareRequestForm />
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white hover:text-gray-300 mb-12"
            >
              <IoCloseCircle className="w-8 h-8 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

