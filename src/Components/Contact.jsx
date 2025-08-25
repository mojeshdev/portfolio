import { MapPin, Mail, Phone } from "lucide-react";
import Tooltip from "./Tooltip.jsx";
import Card from "./Card.jsx";

export default function Contact() {
    return (
    <div className="px-4 sm:px-6 md:px-20 py-10 text-white bg-[#0e0e0e] min-h-screen animate-[fadeInUp_0.5s_ease-out_forwards]">
      {/* Header */}
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="absolute inset-0 flex justify-center items-center text-[3rem] sm:text-[5rem] md:text-[8rem] font-extrabold text-gray-700 opacity-10 select-none z-0">
            CONTACT
        </span>
        <span className="relative z-10">
            GET IN <span className="text-yellow-400">TOUCH</span>
        </span>
        </h2>

      {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
            <h1 className="text-center font-sans font-extrabold text-2xl sm:text-3xl mb-6">
            DETAILS
            </h1>
            <p className="text-gray-300 mb-8 text-sm sm:text-base text-center md:text-left">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
            </p>

            <div className="space-y-8 text-white">
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="text-yellow-500 size-6 sm:size-7 mt-1" />
                <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-400">
                    ADDRESS POINT
                </h2>
                <p className="text-sm sm:text-base">
                    Hyderabad, KPHB colony, Pragathi Nagar, Road No-3
                </p>
                </div>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="text-yellow-500 size-6 sm:size-7 mt-1" />
                <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-400">
                    MAIL ME
                </h2>
                <a
                    href="mailto:mojeshlam823@gmail.com"
                    className="hover:underline text-sm sm:text-base"
                >
                    mojeshlam823@gmail.com
                </a>
                </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="text-yellow-500 size-6 sm:size-7 mt-1" />
                <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-400">
                    CONTACT ME
                </h2>
                <p className="text-sm sm:text-base">+91 7601033289</p>
                </div>
            </div>
            </div>

            <div className="mt-8">
            <Tooltip />
            </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
            <input
                type="text"
                required
                placeholder="Your name"
                className="w-full h-12 bg-[#8e808042] border-b border-slate-700 placeholder-white text-white p-3 sm:p-4 text-sm sm:text-base outline-none focus:outline-white
                transition-all duration-300 focus:placeholder-transparent"
            />
            <input
                type="email"
                required
                placeholder="Your email"
                className="w-full h-12 bg-[#8e808042] border-b border-slate-700 placeholder-white text-white p-3 sm:p-4 text-sm sm:text-base outline-none focus:outline-white
                transition-all duration-300 focus:placeholder-transparent"
            />
        </div>

        <input
            type="text"
            required
            placeholder="Your subject"
            className="w-full h-12 sm:h-14 bg-[#8e808042] border-b border-slate-700 placeholder-white text-white p-3 sm:p-4 text-sm sm:text-base outline-none focus:outline-white
                transition-all duration-300 focus:placeholder-transparent"
        />

            <textarea
            required
            placeholder="Your message"
            className="w-full h-40 sm:h-52 resize-none bg-[#8e808042] border-b border-slate-700 placeholder-white text-white p-3 sm:p-4 text-sm sm:text-base outline-none focus:outline-white
                transition-all duration-300 focus:placeholder-transparent"
            />
            <button className="font-sans font-bold border border-white bg-yellow-600 p-2 text-2xl rounded-xl" type="submit">submit</button>
        </div>
        </div>

      {/* Optional Card Component */}
        <div className="mt-12 md:mt-20">
        <Card />
        </div>
    </div>
);
}
