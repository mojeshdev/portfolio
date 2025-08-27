import React from 'react';
import Boxes from "../Components/Boxes.jsx";
import { LeafyGreen } from 'lucide-react';

export default function About() {
    return (
    <div className="px-6 md:px-20 py-10 text-white bg-[#0e0e0e] min-h-screen animate-[fadeInUp_0.5s_ease-out_forwards]">
      {/* Header */}
        <h2 className="relative text-4xl sm:text-5xl font-bold text-center mb-20">
        <span className="absolute inset-0 flex justify-center items-center text-[3rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-gray-700 opacity-10 select-none z-0">
            RESUME
        </span>
        <span className="relative z-10">
            ABOUT <span className="text-yellow-400">ME</span>
        </span>
        </h2>

      {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Left - Personal Info */}
        <div>
            <h3 className="text-2xl font-bold mb-6">PERSONAL <span className='text-yellow-400 font-bold'>INFO'S</span> </h3>
            <div className="space-y-6 text-gray-300 text-base">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoItem label="First Name" value="Vidyardhi" />
                <InfoItem label="Last Name" value="Lamu" />
                <InfoItem label="Age" value="22 Years" />
                <InfoItem label="Nationality" value="Indian" />
                <InfoItem label="Freelance" value="Available" color="text-green-500" />
                <InfoItem label="Address" value="Hyderabad" />
                <InfoItem label="Phone" value="+91 7601033289" />
                <InfoItem label="Email" value="mojeshlam823@mail.com" />
                <InfoItem label="Languages" value="Telugu, English" />
            </div>
            </div>

          {/* Resume Button */}
            <a
            href="./Mojesh.pdf"
            download="Vidyardhi_Resume.pdf"
            className="mt-6 inline-flex items-center gap-2 bg-gray-800 px-5 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-300 hover:ring-1 font-sans font-extrabold"
            >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="2" stroke="currentColor" className="w-5 h-5 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            </a>
        </div>

        {/* Right - Stat Boxes */}
        <div className=" w-full max-w-xl mx-auto md:mx-0">
            <p className='font-sans text-xl mt-5'>Hi, I’m Lamu Vidyardhi — a full stack  developer passionate about crafting fast, and user-focused applications across
                web and mobile platforms. My interest in development sparked from  experimenting with backend APIs and frontend
                design, eventually growing into real-world experience across startups and large organizations.</p>
        </div>
        </div>

      {/* My Skills */}
        <h1 className="text-3xl font-extrabold text-center mb-8">My <span className='font-sans text-yellow-400'>Skills</span></h1>
        <div className="flex justify-center mb-16">
        <Boxes />
        </div>

      {/* Education Details */}
        <h1 className="text-3xl font-extrabold text-center mb-8">Education<span className='font-sans text-yellow-400'> Details</span></h1>
        <div className="grid sm:grid-cols-2 gap-8">
        <EducationCard
            year="2018"
            level="SSC 10TH"
            institution="Z P H SCHOOL -- GOLLANAPALLI"
            description="I have completed the board of SSC in 2018"
        />
        <EducationCard
            year="2020"
            level="BOARD OF INTERMEDIATE"
            institution="CHAITANYA JR COLLEGE -- GANNAVARAM"
            description="I have completed the board of INTERMEDIATE in 2020"
        />
        <EducationCard
            year="2024"
            level="BACHELOR OF TECHNOLOGY"
            institution="LAKKI REDDY BALI REDDY COLLEGE OF ENG -- MYLAVARAM"
            description="I have completed my bachelor of technology in 2024"
        />
    </div>
    </div>
);
}

// InfoItem Component
const InfoItem = ({ label, value, color = "text-white" }) => (
    <span>{label}: <span className={`font-semibold ${color}`}>{value}</span></span>
);



// Education Item Component
const EducationCard = ({ year, level, institution, description }) => (
    <div className="relative border border-gray-700 p-6 w-full mb-5 rounded-lg bg-[#1a1a1a] shadow-md hover:shadow-xl transition-shadow">
    <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 p-3 rounded-full bg-yellow-500 flex items-center justify-center">
        <LeafyGreen />
        </div>
        <div>
        <h3 className="font-extrabold text-lg">{year} - {level}</h3>
        </div>
    </div>
    <h4 className="font-bold mb-2 ml-14">{institution}</h4>
    <p className="text-sm text-gray-300 ml-14">{description}</p>
    </div>
);
