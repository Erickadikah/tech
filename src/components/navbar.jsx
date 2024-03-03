import React, { useState } from "react";
// import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";


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
        <div className="flex items-center text-lg font-extrabold">
  </div>
        <li>
          <ScrollLink
            to="features"
            className="text-base text-gray-700 hover:underline"
            smooth={true}
            duration={300}
          >
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="hero"
            className="text-base text-gray-700 hover:underline"
            smooth={true}
            duration={500}
          >
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            className="text-base text-gray-700 hover:underline"
            smooth={true}
            duration={500}
            id="Services"
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="faq"
            className="text-base text-gray-700 hover:underline"
            smooth={true}
            duration={500}
            id="FAQ"
          >
            FAQ?
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonials"
            className="text-base text-gray-700 hover:underline flex"
            smooth={true}
            duration={500}
            id="Testimonials"
          >
           Testimonials
            <GoArrowUpRight size={20} className="ml-2" />
          </ScrollLink>
        </li>
        <a
        target="_blank"
        rel="noreferrer"
        href="https://hostmasterskenya.com:2096/"
        >
          <button
            className="px-10 bg-blue-500 py-2 text-base lg:text-lg xl:text-lg text-white border-r:bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-yellow-600 focus:outline-none rounded-full focus:bg-yellow-600 transform hover:scale-105 transition-transform flex items-center"
          >
            Get Started
            <LuArrowRight size={20} className="ml-2" />
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
        <div class="md:hidden fixed inset-0 flex flex-col p-8 bg-[#F3F5F8] w-full">
          {/* ... mobile navigation links ... */}
          <ul className="space-y-5 backdrop-blur-2xl bg-white/30 w-full">
            <li className="border-b">
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