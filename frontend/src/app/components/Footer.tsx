"use client";
import React from "react";
import { Github, Linkedin, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => (
    <footer className="relative w-full bg-gray-900 border-t border-violet-900 mt-16 p-10 overflow-hidden">

        {/* Subtle animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-800/10 to-transparent animate-gradientMove pointer-events-none"></div>

        {/* Floating blurred shapes for depth */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-violet-700/20 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 bg-violet-500/20 rounded-full blur-2xl animate-floatSlow delay-300"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm relative z-10 animate-fadeIn">

            {/* Copyright */}
            <p className="order-2 md:order-1 text-center md:text-left mt-4 md:mt-0 tracking-wide">
                <span className="inline-block hover:text-violet-300 transition duration-300">
                    &copy; {new Date().getFullYear()} Portfolio.
                </span>
                <span className="block md:inline text-violet-400/80 ml-1 relative group">
                    Crafted with React & Tailwind
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-violet-400 group-hover:w-full transition-all duration-700"></span>
                </span>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 order-1 md:order-2">

                {/* GitHub */}
                <a
                    href="https://github.com/akshad11"
                    target="_blank"
                    className="p-3 rounded-full transition-all duration-500 hover:text-white hover:bg-violet-700/70 hover:shadow-violet-700/50 
          transform hover:-translate-y-1 hover:scale-125 animate-floatIcon"
                >
                    <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/akshad-/"
                    className="p-3 rounded-full transition-all duration-500 hover:text-white hover:bg-violet-700/70 hover:shadow-violet-700/50 
          transform hover:-translate-y-1 hover:scale-125 animate-floatIcon delay-150"
                >
                    <Linkedin className="w-5 h-5" />
                </a>

                {/* Twitter */}
                <a
                    href="https://x.com/AkshadDhole"
                    className="p-3 rounded-full transition-all duration-500 hover:text-white hover:bg-violet-700/70 hover:shadow-violet-700/50 
          transform hover:-translate-y-1 hover:scale-125 animate-floatIcon delay-300"
                >
                    <FaXTwitter className="w-5 h-5" />
                </a>

            </div>
        </div>
    </footer>
);

export default Footer;
