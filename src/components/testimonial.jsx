"use_client";
import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Image from "next/image";
import Cookies from "js-cookie";

const Testimonials = () => {
  // Testimonial data array
  const testimonialData = [
    {
      id: 1,
      name: "Nkonge R. Mwenda",
      position: "CEO, Royfordlaw",
      image: "/images/avatar.png",
      review:
        "I had the pleasure of working with this team to create a stunning website for my law firm, Royfordlaw. From start to finish, the experience was nothing short of amazing. attention to detail, creativity, and technical expertise truly exceeded my expectations. Not only did they deliver a website that perfectly captured the essence of my firm.",
      helpfulCount: 4,
    },
    {
      id: 2,
      name: "Eugene Nyasundi",
      position: "Manager Acuitus Consoltancy",
      image: "/images/avatar.png",
      review:
        "As the Manager at Acuitus Consultancy, I had the pleasure of collaborating with, On the development of our company website, and I must say, the experience was outstanding. they demonstrated exceptional skill and professionalism throughout the entire process. From understanding our specific needs to implementing innovative solutions, they exceeded our expectations at every turn.",
      helpfulCount: 2,
    },
    {
      id: 3,
      name: "Morris Mureti",
      position: "CEO Retis Systems",
      image: "/images/avatar.png",
      review:
        "They crafted for us is not only visually stunning but also highly functional and user-friendly. It perfectly captures the essence of our consultancy and showcases our services in the best possible light. Thanks to their expertise and dedication, we now have a website that not only meets but exceeds our goals. I couldn't be happier with the outcome and would highly recommend them to anyone seeking top-notch web development services.",
      helpfulCount: 3,
    },
  ];

  // State to track if the user has already given a helpful count
  const [givenHelpful, setGivenHelpful] = useState({});

  // Function to handle setting helpful count and cookie
  const handleHelpfulCount = (testimonialId) => {
    // Check if the user has already given a helpful count
    if (!givenHelpful[testimonialId]) {
      // Update the helpful count in state
      setGivenHelpful((prevState) => ({
        ...prevState,
        [testimonialId]: true,
      }));

      // Increment the helpful count in cookies
      const prevCount = Cookies.get(`testimonial_${testimonialId}_count`) || 0;
      const newCount = parseInt(prevCount, 10) + 1;
      Cookies.set(`testimonial_${testimonialId}_count`, newCount, { expires: 7 }); // Cookie expires in 7 days
    }
  };

  // Function to get helpful count from cookies
  const getHelpfulCountFromCookie = (testimonialId) => {
    return parseInt(Cookies.get(`testimonial_${testimonialId}_count`) || 0, 10);
  };

  // Function to check if user has already given a helpful count for a testimonial
  const hasGivenHelpful = (testimonialId) => {
    return givenHelpful[testimonialId] || Cookies.get(`testimonial_${testimonialId}`);
  };

  // Testimonial component
  const Testimonial = ({ id, name, image, review, helpfulCount, position }) => {
    return (
      <div className="max-w-lg mx-auto overflow-hidden bg-white shadow-md rounded-lg">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <Image
                className="w-14 h-14 rounded-full ml-5 md:ml-0 md:mr-4"
                width={100}
                height={100}
                src={image}
                alt={name}
              />
              <div className="font-semibold lg:text-xl text-lg text-gray-800 mt-2">
                {name}
              </div>
              <div className="text-blue-500 mt-1">{position}</div>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStarPurple500
                  key={index}
                  className={`w-6 h-6 ${
                    index < helpfulCount ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-gray-900 lg:text-md text-sm mt-4">{review}</div>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 ${
              hasGivenHelpful(id) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handleHelpfulCount(id)}
            disabled={hasGivenHelpful(id)}
          >
            {hasGivenHelpful(id) ? "Helpful ✓" : "Helpful"}
          </button>
          <span className="text-gray-500">({getHelpfulCountFromCookie(id)} people found this helpful)</span>
        </div>
      </div>
    );
  };

  // Render Testimonials
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F5F8] py-12">
      <div className="container px-4">
        <h1 className="lg:text-4xl text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight pl-0 mb-8 text-center">
          WHAT OUR CLIENTS SAY ABOUT
          <br />
          OUR SERVICES
        </h1>
        <p className="lg:text-lg text-sm mt-4 text-gray-700 mb-10 text-center">
          We take pride in delivering real results to our clients. Read what our
          clients have to say about our digital marketing services.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

