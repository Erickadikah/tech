import React from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO) Services",
    description: "SEO is crucial for improving a website's visibility in search engine results. Highlight your agency's expertise in optimizing websites to rank higher in search engine results pages (SERPs). Explain the importance of keyword research, on-page optimization, and link building in improving search rankings and driving organic traffic to websites.",
    imageUrl: "/images/speed.png",
  },
  {
    id: 2,
    title: "Content Creation and Marketing",
    description: "Content is king in the digital world. Showcase your agency's ability to create high-quality content that engages audiences and drives traffic. Explain how content marketing strategies can help businesses attract, educate, and convert potential customers through valuable and relevant content.",
    imageUrl: "/images/speed.png",
  },
  {
    id: 3,
    title: "Website Design and Development",
    description: "A professional website is essential for establishing a strong online presence. Highlight your agency's expertise in designing and developing custom websites that are visually appealing, user-friendly, and optimized for performance. Showcase examples of your work to demonstrate your design and development capabilities.",
    imageUrl: "/images/speed.png",
  }
];

const Section3 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F3EA]">
      <div className="container mx-auto px-8 mb-10">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-4 mt-10 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                {feature.title}
              </h1>
              <p className="text-lg text-gray-700 mb-4">{feature.description}</p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={feature.imageUrl}
                alt="hero-image"
                className="object-cover object-center"
                width={700}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
