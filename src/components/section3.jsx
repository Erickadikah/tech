import React, { useState } from "react";
import Image from "next/image";
// import Testimonial from "./testimonial";
import SoftwareRequestForm from "./SoftwareRequestForm";
import { IoCloseCircle } from "react-icons/io5";

const features = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO) Services",
    description:
      "SEO is crucial for improving a website's visibility in search engine results. Highlight your agency's expertise in optimizing websites to rank higher in search engine results pages (SERPs). Explain the importance of keyword research, on-page optimization, and link building in improving search rankings and driving organic traffic to websites.",
    imageUrl: "/images/speed.png",
  },
  {
    id: 2,
    title: "Content Creation and Marketing",
    description:
      "Content is king in the digital world. Showcase your agency's ability to create high-quality content that engages audiences and drives traffic. Explain how content marketing strategies can help businesses attract, educate, and convert potential customers through valuable and relevant content.",
    imageUrl: "/images/center_image1.png",
  },
  {
    id: 3,
    title: "Website Design and Development(web and mobile)",
    description:
      "A professional website is essential for establishing a strong online presence. Highlight your agency's expertise in designing and developing custom websites that are visually appealing, user-friendly, and optimized for performance. Showcase examples of your work to demonstrate your design and development capabilities.",
    imageUrl: "/images/webdev.png",
  },
];

const Section3 = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#F3F5F8]"
      id="features"
    >
      <div className="container mx-auto lg:px-8 px-4 mb-10 mt-20">
        <h1 className="lg:text-4xl text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight lg:text-center mb-4 lg:mb-8">
          GET YOUR BUSINESS ONLINE
        </h1>
        <p className="lg:text-lg text-sm text-gray-700 lg:text-center mb-4 lg:mb-10 max-w-screen-md mx-auto">
          Our digital marketing agency offers a variety of services to help
          businesses establish a strong online presence.
        </p>
        <div className="flex gap-6 lg:justify-center">
                <button
                className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-xs bg-blue-500 text-white hover:bg-blue-600 hover:shadow-2xl focus:outline-none rounded-full shadow-xl"
                onClick={toggleForm}
                >
                  Contact sales
                </button>
                <button className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-xs border border-blue-500 text-blue-500 hover:shadow-2xl hover:bg-blue-600 hover:text-white focus:outline-none rounded-full shadow-xl">
                  Request Demo
                </button>
              </div>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center lg:gap-16 gap-4 lg:mt-20 mt-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-4">
                {feature.title}
              </h1>
              <p className="text-sm lg:text-lg text-gray-700 mb-4 lg:mt-10">
                {feature.description}
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={feature.imageUrl}
                alt="feature-image"
                className="object-cover object-center rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
            
          </div>
        ))}
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

export default Section3;
