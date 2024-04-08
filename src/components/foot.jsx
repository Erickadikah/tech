import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Foot = () => {
  return (
    <div className="bg-[#343434] w-full py-6 dark:text-white h-[10vh]">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center text-white text-sm">
          <a
            href="tel:+254 792650720"
            className="flex items-center mt-2 mb-3 sm:mb-0"
          >
            <FaPhone className="mr-2" />
            <p className="mr-4 hidden sm:block">+254 792873157</p>
          </a>
          <a href="mailto:devdymos@gmail.com"
          target="_blank"
      rel="noopener noreferrer" 
           className="flex items-center mt-2 mb-3 sm:mb-0">
            <MdEmail className="mr-2" />
            <p className="mr-4 hidden sm:block">
              devdymos@gmail.com
            </p>
          </a>
          <div href='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.791699620398!2d36.78176001089665!3d-1.2997965986823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5TH%20AVENUE%20OFFICE%20SUITES%204TH%20FLOOR%20SUITE%204%20%E2%80%93%2015%20OFF%20NGONG%20ROAD!5e0!3m2!1sen!2ske!4v1703769902782!5m2!1sen!2ske'
          target="_blank" // Opens the link in a new tab/window
      rel="noopener noreferrer"
           className="flex items-center mt-2 mb-3 sm:mb-0"
          >
            <IoLocationSharp className="mr-2" />
            <p className="hidden sm:block">
             Juja City Mall, 2nd Floor, Suite 2-1, Thika Superhighway
            </p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <BsTwitterX className="mr-2" />
            <p className="mr-4 hidden sm:block">Twitter</p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <FaLinkedin className="mr-2" />
            <p className="mr-4 hidden sm:block">LinkedIn</p>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <FaYoutube className="mr-2" />
            <p className="hidden sm:block">YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;