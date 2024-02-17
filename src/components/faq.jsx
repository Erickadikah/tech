/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    document
      .querySelectorAll('[id^="question"]')
      .forEach(function (button, index) {
        button.addEventListener("click", function () {
          var answer = document.getElementById("answer" + (index + 1));
          var arrow = document.getElementById("arrow" + (index + 1));

          if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
            arrow.style.transform = "rotate(0deg)";
          } else {
            answer.style.display = "none";
            arrow.style.transform = "rotate(-180deg)";
          }
        });
      });
  }, []);

  return (
    <section className="py-8 bg-[#F3F5F8] sm:py-16 lg:py-18 " id="faq">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl leading-tight text-black sm:text-4xl lg:text-5xl font-bold lg:mt-10">
            Got questions about our <span className="text-black">services?</span>
          </p>
          <p className="mt-4 tex-sm lg:text-xl text-gray-600 font-thin">
            We've got answers. If you have some other questions, feel free to
            contact us.
            </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div className="transition-all dark:border-none duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 ">
            <button
              type="button"
              id="question1"
              data-state="closed"
              className="flex items-center justify-between w-full px-10 py-5 sm:p-6"
            >
              <span className="flex text-md  lg:text-lg lg:font-semibold text-black">
                What website development services do you offer?
              </span>
              <svg
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer1"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-xs lg:text-lg">
                We offer a range of services, including custom website development, web design, e-commerce solutions, content management systems (CMS), and website maintenance
              </p>
            </div>
          </div>
          <div className="transition-all dark:border-none duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question2"
              data-state="closed"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-md  lg:text-lg lg:font-semibold text-black">
                How long does it take to build a website?
              </span>
              <svg
                id="arrow2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer2"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-xs lg:text-lg">
                The timeline for website development depends on the complexity and features required. We'll provide you with a detailed project timeline during the initial consultation
              </p>
            </div>
          </div>
          <div className="transition-all dark:border-none dark:text-white duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question3"
              data-state="closed"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex  text-md lg:text-lg lg:font-semibold text-black">
                What technologies do you use for website development?
              </span>
              <svg
                id="arrow3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer3"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-xs lg:text-lg">
               We utilize a variety of technologies based on project requirements. Our expertise includes HTML, CSS, JavaScript, React, Angular, Vue.js, Node.js and more
              </p>
            </div>
          </div>
          <div className="transition-all dark:text-white duration-200 bg-white border dark:border-none  border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              id="question4"
              data-state="closed"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-md lg:text-lg  lg:font-semibold text-black">
                 Do you provide e-commerce solutions?
              </span>
              <svg
                id="arrow4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="answer4"
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-xs lg:text-lg">
                Yes, we specialize in developing e-commerce websites using platforms like WooCommerce, Shopify, Magento, and custom solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-sm lg:text-lg text-gray-600 textbase mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Faq;