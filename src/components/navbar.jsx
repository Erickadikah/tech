import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";
import Link from "next/link";

const LandingNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [expertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);
  const [publicationDropdownOpen, setPublicationDropdownOpen] = useState(false);


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

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  

  return (
    <nav className={`${scrollNav ? 'backdrop-blur-xl text-white bg-white/30' : 'text-white bg-black opacity-90'} w-full md:h-20 flex items-center justify-between px-8 md:px-14 sticky top-0 shadow-sm z-10`}>
      {/* Desktop Navigation (Centered) */}
      <ul className="hidden md:flex justify-center items-center gap-8 space-x-4 flex-grow">
        <li>
          <ScrollLink
            to="features"
            smooth={true}
            duration={300}
            className={`first-line:text-base cursor-pointer ${scrollNav ? 'text-black' : 'text-white'}`}
          >
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className={`first-line:text-base cursor-pointer ${scrollNav ? 'text-black' : 'text-white'}`}
          >
            About Us
          </ScrollLink>
        </li>
        {/*<li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className={`first-line:text-base cursor-pointer ${scrollNav ? 'text-black' : 'text-white'}`}
          >
            Services
          </ScrollLink>
  </li>*/}
        <li>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className={`first-line:text-base cursor-pointer ${scrollNav ? 'text-black' : 'text-white'}`}
          >
            FAQ?
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className={`first-line:text-base flex cursor-pointer ${scrollNav ? 'text-black' : 'text-white'}`}
            id="Testimonials"
          >
            Testimonials
            <GoArrowUpRight size={20} className="ml-2" />
          </ScrollLink>
        </li>
        <Link
          tLinkrget="_blank"
          rel="noreferrer"
          href="#"
        >
          <button
            className={`first-line:text-base ${scrollNav ? 'text-black' : 'text-white'} px-6 border-2 border-blue-500 py-2 text-base lg:text-md xl:text-lg border-r:bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-blue-500 focus:outline-none rounded-sm focus:bg-yellow-600 transform hover:scale-100 transition-transform flex items-center`}
          >
            Get Started
            <IoLogInOutline size={30} className="ml-2" />
          </button>
        </Link>
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
        <div className="md:hidden fixed inset-0 flex flex-col p-8 bg-blue-500 w-full">
          {/* ... mobile navigation links ... */}
          <ul className="space-y-5  bg-black w-full">
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
              {/* Dropdown content */}
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
              {/* Dropdown content */}
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
