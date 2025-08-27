import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa"
import { FolderClosed } from 'lucide-react';

const projects = [
{
    title: "E-commerce",
    link: "https://e-commerce-p5jl.vercel.app",
    github: "https://github.com/mojeshdev/E-commerce",
    logo : <FaGithub size={29} />,
    description:
    "This e-commerce website allows users to create an account, log in, and log out securely. After logging in, users can add their own products by providing details such as product name, description, price, and image. The products are stored in the backend and displayed on the frontend for everyone to view.",
    skills: "React JS, TailwindCSS, Node JS, Express Js, MongoDB Atlas",
},

{
    title: "E-commerce UI",
    link: "https://e-commerce-cyan-ten-95.vercel.app/",
    description: "This project is a frontend e-commerce application built using React and Tailwind CSS. It provides visitors with a clean and responsive user interface, showcasing product listings, a shopping cart section, and a structured layout to demonstrate the core functionalities of a modern e-commerce platform.",
    skills: "React JS, TailwindCSS"
}
]

const Projects = () => {
    return (
    <div className="px-6 md:px-20 py-10 text-white bg-[#0e0e0e] min-h-screen animate-[fadeInUp_0.5s_ease-out_forwards]">
    <h1 className="text-3xl font-extrabold font-sans text-white text-center mb-12">
        My <span className="font-sans text-yellow-400">Projects</span>
    </h1>

    <section className="px-6 py-10 max-w-4xl mx-auto mb-6">
        <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
            <div
            key={project.title}
            className="bg-gray-950 rounded-xl border border-gray-600 shadow-md p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Title + GitHub logo evenly spaced */}
            <div className="flex items-center justify-between mb-3">
                <p><FolderClosed size={29}/></p>
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                >
                {project.logo}
                </a>
            </div>

            <h3 className="text-xl font-semibold text-white">
                {project.title}
                </h3>

            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <p className="text-gray-400 text-xs mb-3">
                <strong>Tech Stack:</strong> {project.skills}
            </p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
                View Project
            </a>
            </div>
        ))}
        </div>
    </section>
    <div>
        <h1 className='font-sans font-extrabold text-2xl text-gray-400 text-center mb-4 '>Available for select freelance opportunities</h1>
        <p className='font-sans text-sm text-center text-gray-500 mb-10'>Have an exciting project you need help with? Send me an email.</p>
        <NavLink className="text-sans underline flex items-center justify-center text-xl text-green-600 mb-20" to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">mojeshlam823@gmail.com</NavLink>
        <p className='flex flex-wrap text-gray-600 items-center justify-center '> 2025. Made with passion by Lamu Vidyardhi.</p>
    </div>

    </div>
)
}

export default Projects
