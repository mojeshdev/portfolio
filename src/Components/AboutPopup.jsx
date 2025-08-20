import React from 'react';
import Circularbars from './Circularbars';
import { LeafyGreen } from 'lucide-react';

const AboutPopup = ({ showPopup, onClose }) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center px-2 sm:px-4 py-6 animate-[fadeInUp_0.5s_ease-out_forwards]">
      <div className="relative bg-[#111] text-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-h-[90vh] w-full max-w-5xl overflow-y-auto z-[1000] custom-scroll">

        {/* onclose button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl sm:text-4xl hover:text-red-500 z-[1000]"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="absolute inset-0 flex justify-center items-center text-[3rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-gray-700 opacity-10 select-none z-0">
            RESUME
          </span>
          <span className="relative z-10">
            ABOUT <span className="text-yellow-400">ME</span>
          </span>
        </h2>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Left - Personal Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 mt-4">PERSONAL INFO'S</h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <span>First Name: <span className="font-semibold text-white">Vidyardhi</span></span>
                <span>Last Name: <span className="font-semibold text-white">Lamu</span></span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <span>Age: <span className="font-semibold text-white">22 Years</span></span>
                <span>Nationality: <span className="font-semibold text-white">Indian</span></span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <span>Freelance: <span className="text-green-500 font-semibold">Available</span></span>
                <span>Address: <span className="font-semibold text-white">Hyderabad</span></span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <span>Phone: <span className="font-semibold text-white">+91 7601033289</span></span>
                <span>Email: <span className="font-semibold text-white">mojeshlam823@mail.com</span></span>
              </div>
              <div>
                <span>Languages: <span className="font-semibold text-white">Telugu, English</span></span>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="./Mojesh.pdf"
              download="Vidyardhi_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-white tracking-wider
              shadow-xl hover:bg-gray-900 hover:scale-105 duration-300 hover:ring-1 font-sans font-extrabold"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>

          {/* Right - Stat Boxes */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <StatBox value="2+" label="Years of Experience" />
            <StatBox value="10+" label="Completed Projects" />
            <StatBox value="5+" label="Happy Clients" />
            <StatBox value="None" label="Awards" />
          </div>
        </div>

        {/* My skills */}
        <h1 className='text-2xl sm:text-3xl mb-10 font-sans font-extrabold text-center mt-16'>My Skills</h1>
        <div className="flex justify-center p-4 sm:p-6">
          <Circularbars />
        </div>

        {/* Education details */}
        <h1 className='font-sans font-extrabold text-2xl sm:text-3xl text-center mt-10 mb-10'>Education Details</h1>
        <div className='space-y-12'>
          {[{
            year: '2018-SSC 10TH',
            school: 'Z P H SCHOOL -- GOLLANAPALLI',
            desc: 'I have completed the board of SSC in 2018'
          }, {
            year: '2020-BOARD OF INTERMEDIATE',
            school: 'CHAITANYA JR COLLEGE -- GANNAVARAM',
            desc: 'I have completed the board of INTERMEDIATE in 2020'
          }, {
            year: '2024-BACHELOR OF TECHNOLOGY',
            school: 'LAKKI REDDY BALI REDDY COLLEGE OF ENG -- MYLAVARAM',
            desc: 'I have completed my bachelor of technology in 2024'
          }].map((edu, index) => (
            <div key={index} className='relative pl-16 sm:pl-20'>
              <span className='absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-full bg-yellow-500'><LeafyGreen /></span>
              <div className='border-l-2 border-[#5e5d5d] absolute h-full top-5 sm:top-6 left-5 sm:left-6'></div>
              <div className='ml-2 sm:ml-4'>
                <h1 className='inline-block px-4 py-2 rounded-xl bg-[#ffffff20] font-sans font-extrabold text-sm sm:text-base'>{edu.year}</h1>
                <h2 className='font-sans font-bold mt-3 sm:mt-4 mb-2 text-sm sm:text-base'>{edu.school}</h2>
                <p className='text-sm sm:text-base'>{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Stat Box Component
const StatBox = ({ value, label }) => (
  <div className="border border-gray-700 p-4 sm:p-6 rounded text-center bg-[#111]/50">
    <div className="text-yellow-400 text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{value}</div>
    <div className="text-white text-xs sm:text-sm uppercase tracking-wide">{label}</div>
  </div>
);

export default AboutPopup;
