import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="lg:h-[70vh] h-auto bg-[rgb(243,245,248)]" id="services">
      <div className="lg:container lg:mx-auto lg:px-8 px-4 py-8 lg:py-14">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4 lg:text-center lg:mb-8 lg:mt-10">
          COMPLETE DIGITAL SOLUTIONS
        </h1>
        <p className="text-sm lg:text-base text-gray-700 mb-4 lg:mb-10 max-w-screen-md lg:text-center mx-auto">
          Unlike traditional marketing, digital marketing allows you to target
          your audience more precisely than ever before. We offer a range of
          services, including custom website development, web design, e-commerce
          solutions, content management systems (CMS), and website maintenance.
        </p>
        <div className="flex flex-wrap gap-4">
          <ServiceCard
            image="/images/1-10.png"
            alt="Social Media Marketing"
            title="Social Media Marketing"
            description="Enhance your brand's presence on social media platforms and engage with your audience effectively."
          />
          <ServiceCard
            image="/images/3-6.png"
            alt="Pay-Per-Click Advertising"
            title="Pay-Per-Click Advertising"
            description="Drive targeted traffic to your website through paid advertising campaigns, maximizing your ROI."
          />
          <ServiceCard
            image="/images/2-6.png"
            alt="Email Marketing"
            title="Email Marketing"
            description="Reach your target audience directly through personalized email campaigns and increase conversions."
          />
          <ServiceCard
            image="/images/graphics.png"
            alt="Graphic Design"
            title="Graphic Design"
            description="Reach your target audience directly through personalized email campaigns and increase conversions."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, alt, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden">
      <Image src={image} alt={alt} width={150} height={50} 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg lg:text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Services;

