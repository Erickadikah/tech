import React from "react";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F3EA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div
            className="md:w-1/2"
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image
              src="/images/speed.png"
              alt="hero-image"
              className="object-cover object-center rounded-lg"
              width={700}
              height={500}
            />
          </div>
          <div
            className="md:w-1/2 mb-8 md:mb-0"
            data-aos-duration="1000"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              SEO agency that will evolve your search performance
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              SEO is often referred to as the "long-term game" in the marketing
              world. The more time you invest, the faster the benefits of SEO
              will accrue. As your website content (ie blog, service pages,
              etc.)
            </p>
            <p className="text-lg text-gray-700 mb-6">
              becomes more robust and you earn more backlinks, you will begin to
              see your website rank for more and more keywords.
            </p>
            <button className="px-4 py-4 bg-[#3B82F6] text-white font-semibold hover:bg-yellow-600 focus:outline-none">
                  Explore More
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
