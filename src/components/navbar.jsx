import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const LandingNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [expertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);
  const [publicationDropdownOpen, setPublicationDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    if (expertiseDropdownOpen) {
      setExpertiseDropdownOpen(false);
    }
  };

  const toggleExpertiseDropdown = () => {
    setExpertiseDropdownOpen(!expertiseDropdownOpen);
    if (aboutDropdownOpen) {
      setAboutDropdownOpen(false);
    }
  };

  const togglePublicationDropdown = () => {
    setPublicationDropdownOpen(!publicationDropdownOpen);
    if (publicationDropdownOpen) {
      setPublicationDropdownOpen(false);
    }
  };

  return (
    <nav className="backdrop-blur-lg bg-white/30 w-full md:h-20 flex items-center justify-between px-8 md:px-14 sticky top-0 shadow-sm z-10">
      {/* Desktop Navigation (Centered) */}
      <ul className="hidden md:flex justify-center items-center gap-8 space-x-4 flex-grow">
        {/*<div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/MWENDA ROYFORD LOGO-03 (1).png"
              alt="Logo"
              className="cursor-pointer"
              height={40}
              width={80}
            />
          </Link>
  </div>*/}
        <li>
          <Link href="/" className="text-base text-gray-700 hover:underline">
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/Our-lawyer"
            className="text-base text-gray-700 hover:underline"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/Our-lawyer"
            className="text-base text-gray-700 hover:underline"
          >
            services
          </Link>
        </li>
        <li>
          <Link
            href="/Our-lawyer"
            className="text-base text-gray-700 hover:underline"
          >
            FAQ?
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-base text-gray-700 hover:underline flex"
          >
            Contact
            <GoArrowUpRight size={20} className="ml-2" />
          </Link>
        </li>
        <a
        target="_blank"
        rel="noreferrer"
        href="https://hostmasterskenya.com:2096/"
        >
          <button
            className="px-6 bg-[#2563EB] py-2 text-base lg:text-lg xl:text-lg text-white border-r:bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none rounded-xl focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center"
          >
            Get Started
          </button>
        </a>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4 h-[55px]">
        <button
          className="text-2xl text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 flex flex-col p-8 bg-gray-300">
          {/* ... mobile navigation links ... */}
          <ul className="space-y-5">
            <li className="border-b w-full">
              <Link href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="relative z-30 border-b w-full">
              <div
                onClick={toggleAboutDropdown}
                className="text-base text-black cursor-pointer mb-4"
              >
                About Us{" "}
                <RiArrowDropDownLine
                  className="inline"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </div>
              {aboutDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md p-2 rounded-sm w-96 gap-8 h-62">
                  {/* Dropdown content */}
                  <li>
                    <Link
                      id="about"
                      href="/about"
                      className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="block py-2  border-b px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b w-full">
              <Link href="/Our-lawyer" onClick={toggleMobileMenu} className="mb-4">
                Our Lawyers
              </Link>
            </li>
            <li className="relative z-20 border-b w-full">
              <div
                onClick={toggleExpertiseDropdown}
                className="text-base text-black cursor-pointer mb-4"
              >
                Expertise{" "}
                <RiArrowDropDownLine
                  className="inline"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </div>
              {expertiseDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md p-2 rounded-sm w-96 gap-8 h-62">
                  <li>
                    <Link
                      href="/practice-areas"
                      id="practice-areas"
                      className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                    >
                      Practise Area
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sector"
                      className="block border-b py-2 px-4 text-gray-800 hover:text-orange-500 transition duration-300"
                    >
                      Sectors
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b w-full">
              <Link href="/contact">
                <button
                  className="px-4 py-2 text-base font-semibold text-black   focus:outline-none focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center mb-4"
                  style={{
                    // background: "rgb(208,178,22)",
                  }}
                >
                  Contact Us
                  <GoArrowUpRight size={20} className="ml-2" />
                </button>
              </Link>
            </li>
            <li className="border-b w-full">
              <Link href="/">
                <button
                  className="px-4  mb-4 py-2 text-base text-white border-r:bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none rounded-full focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center lg:rounded-full xl:rounded-full"
                  style={{
                    background: "rgb(208,178,22)",
                  }}
                >
                  LogIn
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <button
              className="text-2xl text-gray-700 mt-4"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <HiX size={26} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavBar;