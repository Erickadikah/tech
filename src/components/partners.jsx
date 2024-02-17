import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className="container mx-auto py-6 bg-gray-900 shadow-sm">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Partner Images */}
        <div className="partner-item">
          <Image
            src="/images/1-10.png"
            alt="Partner 1"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
        <div className="partner-item">
          <Image
            src="/images/1-10.png"
            alt="Partner 2"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
        <div className="partner-item">
          <Image
            src="/images/1-10.png"
            alt="Partner 3"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>

      {/*  <div className="absolute bottom-0 left-0 w-full">
        <h1 className="text-center text-xl text-gray-900 mb-4">
          What makes us different?
        </h1>
        <div className="flex justify-center items-center mx-auto flex-wrap container gap-6">
          <div className="flex flex-col items-center mx-4 mb-4">
            <Image
              src="/images/2-6.png"
              alt="scroll-down"
              width={150}
              height={50}
            />
            <p className="text-center text-sm text-gray-300 mt-2">Simplicity</p>
          </div>
          <div className="flex flex-col items-center mx-4 mb-4">
            <Image
              src="/images/1-10.png"
              alt="scroll-down"
              width={150}
              height={50}
            />
            <p className="text-center text-sm text-gray-300 mt-2">Innovation</p>
          </div>
          <div className="flex flex-col items-center mx-4 mb-4">
            <Image
              src="/images/3-6.png"
              alt="scroll-down"
              width={150}
              height={50}
            />
            <p className="text-center text-sm text-gray-300 mt-2">Quality</p>
          </div>
        </div>
      </div>*/}
      {/* Add more partner images as needed */}

      <style jsx>{`
        .partner-item {
        //   width: 120px;
        //   height: 120px;
        //   border-radius: 50%;
        //   overflow: hidden;
        //   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .partner-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .partner-item {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default Partners;
