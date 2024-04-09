"use_client";
import React, { useEffect, useState } from "react";
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
      joinedDate: "2021-08-01",
      reviewDate: "2021-08-01",
      review:
        "I had the pleasure of working with this team to create a stunning website for my law firm, Royfordlaw. From start to finish, the experience was nothing short of amazing. attention to detail, creativity, and technical expertise truly exceeded my expectations. Not only did they deliver a website that perfectly captured the essence of my firm.",
      helpfulCount: 1,
    },
    {
      id: 2,
      name: "Eugene Nyasundi",
      position: "Manager Acuitus Consoltancy",
      image: "/images/avatar.png",
      reviewDate: "2021-08-01",
      review:
        "As the Manager at Acuitus Consultancy, I had the pleasure of collaborating with, On the development of our company website, and I must say, the experience was outstanding. they demonstrated exceptional skill and professionalism throughout the entire process. From understanding our specific needs to implementing innovative solutions, they exceeded our expectations at every turn.",
      helpfulCount: 5,
    },
    {
      id: 3,
      name: "Morris Mureti",
      position: "CEO Retis Systems",
      image: "/images/avatar.png",
      reviewDate: "2021-08-01",
      review:
        "They crafted for us is not only visually stunning but also highly functional and user-friendly. It perfectly captures the essence of our consultancy and showcases our services in the best possible light. Thanks to their expertise and dedication, we now have a website that not only meets but exceeds our goals. I couldn't be happier with the outcome and would highly recommend them to anyone seeking top-notch web development services.",
      helpfulCount: 4,
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
      // Update the helpful count in cookies
      Cookies.set(`testimonial_${testimonialId}`, true, { expires: 7 }); // Cookie expires in 7 days
    }
  };

  // Function to check if user has already given a helpful count for a testimonial
  const hasGivenHelpful = (testimonialId) => {
    return (
      givenHelpful[testimonialId] || Cookies.get(`testimonial_${testimonialId}`)
    );
  };

  // Testimonial component
  const Testimonial = ({ id, name, image, review, helpfulCount, position }) => {
    // State to track the count of helpful votes
    const [helpfulVoteCount, setHelpfulVoteCount] = useState(helpfulCount);

    // Function to handle setting helpful count and cookie
    const handleHelpfulCount = (testimonialId) => {
      // Check if the user has already given a helpful count
      if (!givenHelpful[testimonialId]) {
        // Update the helpful count in state
        setGivenHelpful((prevState) => ({
          ...prevState,
          [testimonialId]: true,
        }));

        // Update the helpful count in cookies
        Cookies.set(`testimonial_${testimonialId}`, true, { expires: 7 }); // Cookie expires in 7 days

        // Update the count of helpful votes
        setHelpfulVoteCount((prevCount) => prevCount + 1);
      }
    };

    // Function to check if user has already given a helpful count for a testimonial
    const hasGivenHelpful = (testimonialId) => {
      return (
        givenHelpful[testimonialId] ||
        Cookies.get(`testimonial_${testimonialId}`)
      );
    };

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
          <div className="flex items-center mt-4">
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 ${
                hasGivenHelpful(id) ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handleHelpfulCount(id)} // This function is called only when the button is clicked
              disabled={hasGivenHelpful(id)}
            >
              {hasGivenHelpful(id) ? "Helpful ✓" : "Helpful"}
            </button>
            <span className="text-gray-500">
              ({helpfulVoteCount} people found this helpful)
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
