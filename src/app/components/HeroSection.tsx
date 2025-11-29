"use client";

import { ArrowRight } from "lucide-react";
import { useTypingEffect } from "./hooks/useTypingEffect";
import { useEffect } from "react";

const HeroSection: React.FC = () => {
    const roles = [
        "Software Developer",
        "Frontend Developer",
        "Backend Developer",
        "Cloud Architect",
        "Full-Stack Engineer",
    ];

    const typedText = useTypingEffect(roles);

    // Parallax grid movement on scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY * 0.15; // smooth subtle movement
            document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative overflow-hidden py-10 sm:py-15 px-6 bg-gray-900/90 border-b border-violet-900">

            {/* Soft Violet Glow Behind Section */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-b from-violet-800/40 to-transparent blur-3xl"></div>

            {/* Tailwind-Style Parallax Grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    transform: "translateY(var(--scroll-offset, 0px))",
                    transition: "transform 0.15s ease-out",
                }}
            >
                <svg
                    className="w-full h-full opacity-[0.25]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                            <path
                                d="M 64 0 L 0 0 0 64"
                                fill="none"
                                stroke="rgba(120, 40, 200, 0.45)"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">

                {/* Greeting */}
                <p className="text-lg sm:text-xl text-violet-300 font-medium mb-3 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
                    Hey, I'm
                </p>

                {/* Name */}
                <h1 className="font-extrabold text-white tracking-tight leading-tight 
                    text-5xl sm:text-7xl lg:text-8xl drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    AKSHAD <br className="hidden sm:block" /> DHOLE
                </h1>

                {/* Typing Animation */}
                <div className="mt-6 min-h-[64px] flex items-center">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-black animated-gradient">
                        <span>{typedText}</span>
                    </span>

                    <span className="w-1.5 h-10 bg-violet-500 ml-2 animate-pulse drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]"></span>
                </div>

                {/* Subtext */}
                <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
                    I build highly performant, scalable digital experiences using modern
                    web technologies — React, Next.js, TypeScript, and cloud-native
                    architectures.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">

                    {/* Primary Button */}
                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        {/* Primary Button */}
                        <a href="/projects">
                            <button
                                className="group relative inline-flex items-center gap-2 
                                px-8 py-3 rounded-full text-lg font-medium text-white
                                bg-gradient-to-r from-violet-600 to-violet-800
                                shadow-lg shadow-violet-700/40
                                hover:bg-violet-700/50 hover:shadow-violet-500/70
                                transition-all hover:scale-[1.05] active:scale-[0.97]"
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>

                        {/* Secondary Button */}
                        <a href="/contact">
                            <button
                                className="px-8 py-3 text-lg font-medium text-white 
                                border border-violet-600 rounded-full
                                hover:bg-violet-700/40 hover:shadow-lg hover:shadow-violet-800/50
                                transition-all hover:scale-[1.05] active:scale-[0.97]"
                            >
                                Get In Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
