import React, { useState, useEffect } from 'react';
import AboutPopup from "./AboutPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  return (
    <div className="relative h-screen overflow-hidden flex flex-col lg:flex-row animate-[fadeInUp_0.5s_ease-out_forwards]">

      {/* Yellow Background */}
      <div className="hidden lg:block relative w-1/4 h-full">
        <div className="bg-yellow-500 h-full w-full clip-slant"></div>
      </div>


      {/* Black Background Section */}
      <div className="bg-black w-full lg:w-3/4 h-full"></div>

      {/* Desktop Image */}
      <div className="absolute hidden lg:block top-1/2 left-28 transform -translate-y-1/2 z-10">
        <img
          className="h-[600px] rounded-xl border-4 border-white shadow-xl"
          src="/images/me.jpg"
          alt="Me"
        />
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden absolute top-6 left-0 w-full flex justify-center z-10">
        <img
          className="h-40 w-40 rounded-full border-4 border-yellow-500 shadow-lg"
          src="/images/me.jpg"
          alt="Me"
        />
      </div>

      {/* Text and Button */}
      <div className='mb-52'>
        <div className="text-center lg:text-left max-w-xl mx-auto lg:absolute lg:right-64 lg:top-1/2 lg:-translate-y-1/2">
        <div className="text-center lg:text-left max-w-3xl mx-auto">
          <h1 className="font-sans  font-extrabold text-3xl lg:text-5xl text-yellow-500  mb-4">
            -- I'm Lamu Vidyardhi.
            <span className="block text-white text-3xl lg:text-5xl lg:ml-14">Web Designer</span>
          </h1>
          <p className="text-white text-md lg:text-lg lg:ml-14 mb-8 px-2 lg:px-0">
            I'm a web designer, front‑end & back-end developer focused on crafting clean & user‑friendly experiences.
            I am passionate about building excellent software that improves the lives of those around me.
          </p>
          </div>

          {/* Button */}
          <button
            onClick={openPopup}
            className="flex justify-center  gap-2 items-center mx-auto lg:ml-14 shadow-xl text-md lg:text-lg bg-gray-50 backdrop-blur-md
              lg:font-extrabold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700
              before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-500 hover:text-gray-50
              before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            MORE ABOUT ME
            <svg
              className="w-6 h-6 lg:w-8 lg:h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border
                border-gray-700 group-hover:border-none p-1 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408
                7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 
                8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
        </div>

        {/* Popup */}
        <AboutPopup showPopup={showPopup} onClose={closePopup} />
      </div>
    </div>
  );
}
