/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Partners from "./partners";

const Section1 = () => {
  return (
    <div className="w-full bg-[#F5F3EA] min-h-screen p-2 " id="services">
      <div className="container mx-auto mt-20 justify-center">
      <p className="text-sm text-center md:text-lg font-bold text-gray-900 mb-4">
                Services
              </p>
        <h1 className="text-center text-2xl md:text-5xl font-bold text-gray-900 mb-12">
          Fueling Business Success with
          <br />
           Cutting-Edge Technology
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            <div className="mb-6">
              <Image
                src="/images/1-10.png"
                alt=""
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Increases Brand Awareness
            </h2>
            <p className="text-sm text-gray-300 text-center">
              Stand out in your industry as a leader and relevant solution for
              your audience with our advanced SEO strategies.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            <div className="mb-6">
              <Image
                src="/images/2-6.png"
                alt=""
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Amplifies PPC Success
            </h2>
            <p className="text-sm text-gray-300 text-center">
              Optimize your PPC ads for both desktop and mobile search with our
              state-of-the-art technology.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            <div className="mb-6">
             
              <Image
                src="/images/16.svg"
                alt=""
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Builds Customer Trust
            </h2>
            <p className="text-sm text-gray-300 text-center">
              Establish strong customer trust with our innovative SEO and
              content strategies.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            <div className="mb-6">
              <Image
                src="/images/preview.png"
                alt=""
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Enhanced User Experience
            </h2>
            <p className="text-sm text-gray-300 text-center">
              Deliver seamless user experiences across all digital touchpoints
              with our UX/UI design expertise.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            <div className="mb-6">
               <Image
                src="/images/3-6.png"
                alt=""
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Drives Business Growth
            </h2>
            <p className="text-sm text-gray-300 text-center">
              Accelerate your business growth and achieve your goals with our
              comprehensive digital solutions.
            </p>
          </div>
        </div>
      </div>
    {/*<div className="mt-10">
    <Partners />
  </div>*/}
    </div>
  );
};

export default Section1;
