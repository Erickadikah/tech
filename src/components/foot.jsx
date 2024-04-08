import React from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';

const Foot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#343434] w-full">
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
          <div className="flex items-center mt-2 mb-3 sm:mb-0">   
            <a href="mailto:wendaandroyfordadvocates@example.com" className="flex items-center text-xs lg:text-sm">
              <FaPhone className="inline mr-1" />
              +254 792 87 3157
            </a>
          </div>
          <div className="flex items-center mt-2 mb-3 sm:mb-0">
            <p className="mr-4 sm:mr-8 text-xs lg:text-sm">© {currentYear}. All rights reserved</p>
            <p className="mr-4 hidden sm:block">|</p>
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank" className="text-xs lg:text-sm mr-4">
              <AiFillFacebook />
            </a>
            <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="text-xs lg:text-sm">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
