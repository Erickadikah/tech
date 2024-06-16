/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LandingNavBar from "../components/navbar";
import Foot from "../components/foot"
import { IoMdCheckboxOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Portal = () => {
  return (
    <>
      <LandingNavBar />
      <div className="flex flex-col h-[65vh]" id='portal'>
      <div className="bg-[#03234D] w-full lg:h-auto h-auto">
      <div className="container mx-auto block lg:flex lg:items-center lg:justify-between lg:gap-8 xl:gap-10 lg:mb-0 p-6 xl:p-12 lg:p-8">
        <div className="lg:w-1/2">
        <Image src="/images/customer.png" alt="financial" width={50} height={50} className="mb-2" loading="lazy" />
          <h1 className="text-2xl lg:text-3xl text-yellow-600 lg:mb-10 mb-8 lg:mt-0 mt-5 lg:ml-0 mr-0 lg:mr-0">
          Client Portal
        </h1>
        <p className="text-lg lg:text-5xl text-white">
        Welcome to Your Project Hub.
        </p>
        <p className="text-sm lg:text-xl mt-10 mb-10 text-white">
        Hello and welcome to your client portal! This page contains everything 
        you need to kick off your project with us. From important documents to 
        
        helpful resources, you’ll find it all here. We’re committed to making your 
        experience seamless, so please let us know if you need any help along the way.
          
        
        </p>
        <Link href="/contact">
            <button className="mt-4 text-md ${scrollNav ? 'text-black' : 'text-yellow-300'} py-2 lg:py-4 px-5 lg:px-10 hover:bg-yellow-500 transition duration-300 border border-yellow-300 flex text-white text-sm lg:text-lg">
              GET STARTED
            </button>
          </Link>
      </div>
      <div className="hidden lg:block">
          <div className="lg:flex lg:flex-row flex flex-col gap-5 lg:gap-6">
          <div className="flex flex-row gap-5 mt-10">
          <Image
            src="/images/happy1.jpg"
            alt="financial"
            width={220}
            height={200}
            className="border-2 border-[#03234D]"
            style={{ borderRadius: "80px 80px 60px 0" }}
            loading="lazy"
          />
          <Image
            src="/images/webdev.png"
            alt="financial"
            width={220}
            height={200}
            className="border-2 border-[#03234D]"
            style={{ borderRadius: "80px 0 80px 60px" }}
            loading="lazy"
          />
          <Image
            src="/images/ideas.jpg"
            alt="financial"
            width={220}
            height={220}
            className="border-2 border-[#03234D]"
            style={{ borderRadius: "80px 80px 0 60px " }}
            loading="lazy"
          />
        </div>
          </div>
        </div>
      </div>
      </div>
    
      </div>
      <div className="lg:container lg:mx-auto flex flex-col lg:flex-row justify-center gap-5 lg:gap-20 lg:mb-20 mb-10">
        <div className="lg:w-1/1 p-2 lg:p-0">
          <div className="lg:w-96 lg:h-[24rem] w-68 h-[24rem] duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <div className="flex justify-center items-center">
              {/*<Image src='/images/logo-footer.svg' alt="logo" width={150} height={60} loading="lazy" />*/}
              </div>
            <span className="lg:text-xl text-lg font-bold text-center">
             DOWNLOAD
            </span>
              <Link
              href="/file/Sovereign - WMID (1).pdf"
              download
              className="bg-blue-950 py-3 px-2 text-white mt-4 cursor-pointer text-center"
               >
                 CLIENT INTAKE FORM
               </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/1 p-2 lg:p-0">
          <div className="lg:w-96 lg:h-[24rem] w-68 h-[24rem] duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly lg:mt-40 mb-10">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <div className="flex justify-center items-center">
            {/*<Image src='/images/eMoney-logo.png' alt="logo" width={200} height={60} loading="lazy" />*/}
            </div>
            <span className="lg:text-xl text-lg font-bold text-center">
              Log in to your
            </span>
              <button className="border border-yellow-500 py-3 px-2 mt-4">
                FINANCIAL PLAN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container lg:mx-auto px-5 lg:px-20 lg:mb-20 mb-10">
      <p className="text-sm lg:text-lg text-black">
          Download the client intake form and fill it out before your first meeting.
          This will help us better understand your financial goals and needs.
      </p>
      <br />
        <p className="text-sm lg:text-lg text-black">
          PLEASE NOTE: The information being provided is strictly as a courtesy.
          When you link to any of the websites provided here, you are leaving
          this website. We make no representation as to the completeness or
          accuracy of information provided at these websites. Nor is the company
          liable for any direct or indirect technical or system issues or any
          consequences arising out of your access to or your use of third-party
          technologies, websites, information and programs made available
          through this website. When you access one of these websites, you are
          leaving our website and assume total responsibility and risk for your
          use of the websites you are linking to.
        </p>
      </div>
      <Foot />
    </>
  );
};

export default Portal;