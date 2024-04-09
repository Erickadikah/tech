import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Image from "next/image";

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
        "I had the pleasure of working with this team to create a stunning website for my law firm, Royfordlaw. From start to finish, the experience was nothing short of amazing. attention to detail, creativity, and technical expertise truly exceeded my expectations.\
Not only did they deliver a website that perfectly captured the essence of my firm.",
      helpfulCount: 5,
    },
    {
      id: 2,
      name: "Eugene Nyasundi",
      position: "Manager Acuitus Consoltancy",
      image: "/images/avatar.png",
      reviewDate: "2021-08-01",
      review:
        "As the Manager at Acuitus Consultancy, I had the pleasure of collaborating with, On the development of our company website, and I must say, the experience was outstanding.\
they demonstrated exceptional skill and professionalism throughout the entire process. From understanding our specific needs to implementing innovative solutions, they exceeded our expectations at every turn.",
      helpfulCount: 5,
    },
    {
      id: 3,
      name: "Morris Mureti",
      position: "CEO Retis Systems",
      image: "/images/avatar.png",
      reviewDate: "2021-08-01",
      review:
        "They crafted for us is not only visually stunning but also highly functional and user-friendly. It perfectly captures the essence of our consultancy and showcases our services in the best possible light.\
Thanks to their expertise and dedication, we now have a website that not only meets but exceeds our goals. I couldn't be happier with the outcome and would highly recommend them to anyone seeking top-notch web development services.",
      helpfulCount: 4,
    },
  ];

  // Testimonial component
  const Testimonial = ({ name, image, review, helpfulCount, position }) => {
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
              <p className="text-blue-500 mt-1">{position}</p>
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
          <p className="text-gray-900 lg:text-md text-sm mt-4">{review}</p>
        </div>
      </div>
    );
  };

  // Render Testimonials
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#F3F5F8] py-12"
      id="testimonials"
    >
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