/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image"; // Importing Next.js Image component for optimized image rendering
import Partners from "./partners";
import SoftwareRequestForm from "./SoftwareRequestForm";
import { IoCloseCircle } from "react-icons/io5"; // Importing close icon from react-icons/io5
import { Link as ScrollLink } from "react-scroll"; // Importing ScrollLink component from react-scroll
import { LuArrowDownCircle } from "react-icons/lu"; // Importing down arrow icon from react-icons/lu

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      className="lg:h-[95vh] h-[85vh] sm:h-[40vh] relative"
      id="hero"
      style={{ 
        backgroundImage: 'url("/images/ideas.jpg")', // Background image URL
        objectFit: 'cover', // Ensure the image covers the container
        backgroundSize: 'cover', // Make sure the background image covers the entire container
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Don't repeat the background image
      }}
    >
      <div className="absolute inset-0 bg-[#11021F] opacity-90"></div>
      <div className="">
        <div className="container mx-auto px-4 relative z-0 ">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:py-20 py-10">
            <div className="md:w-1/2 lg:mb-8 md:mb-0 md:text-left lg:mt-20 mt-0">
              <h1 className="text-4xl md:text-7xl font-bold text-blue-500 leading-tight mb-6">
                Empowering Businesses with Tech Solutions
              </h1>
              <p className="text-sm lg:text-lg text-white mb-8">
                We specialize in crafting technology solutions that drive
                business growth and innovation. From web and mobile applications
                to AI and IoT, we've got you covered.
              </p>
              <div className="flex gap-6">
                <ScrollLink
                  className="px-6 lg:px-14 lg:py-3 py-2 lg:text-md text-xs bg-blue-500 text-white hover:bg-blue-600 focus:outline-none rounded-full"
                  to="features"
                  smooth={true}
                  duration={300}
                >
                  Get Started
                </ScrollLink>
                <button
                  onClick={toggleForm}
                  className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-xs border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none rounded-full"
                >
                  Request Service
                </button>
              </div>
            </div>
            <div className="md:w-1/2 overflow-hidden ">
              <Image
                src="/images/tech.png" // Image source URL
                alt="hero-image"
                className=" md:block object-cover object-center"
                width={1000} // Image width
                height={200} // Image height
              />
            </div>
          </div>
        </div>
      </div>
      {/* Display the software request form when showForm is true */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20 flex items-center justify-center">
          <div className="relative z-30">
            <SoftwareRequestForm />
            {/* Close button for the form */}
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white hover:text-gray-300 mb-12"
            >
              <IoCloseCircle className="w-8 h-8 text-gray-500" />
            </button>
          </div>
        </div>
      )}
      {/* Scroll to the "features" section */}
      <ScrollLink
        to="features"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-0 left-0 flex gap-4 justify-center items-center p-4 lg:p-16"
      >
        <LuArrowDownCircle className="text-2xl lg:text-3xl text-white animate-bounce" />
        <h1 className="text-white text-sm lg:text-xl leading-relaxed">See More</h1>
      </ScrollLink>
    </div>
  );
};

export default Hero;
