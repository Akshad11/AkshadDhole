"use client";

import Image from "next/image";
import me from "../assets/me.png"
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skills from "../components/Skill";

export default function AboutPage() {

    // Scroll reveal global animations
    useEffect(() => {
        const items = document.querySelectorAll(".reveal-about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("active");
                });
            },
            { threshold: 0.2 }
        );
        items.forEach((i) => observer.observe(i));
    }, []);

    return (<div>
        <Navbar currentPage="about" />
        <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="aboutGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" stroke="#6b21a8" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#aboutGrid)" />
                </svg>
            </div>

            {/* FLOATING SHAPES */}
            <div className="absolute top-10 left-10 w-56 h-56 bg-violet-700/20 blur-3xl rounded-full animate-floatSlow"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-600/20 blur-[90px] rounded-full animate-floatSlow delay-300"></div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

                {/* HEADER */}
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text animated-gradient mb-10 reveal-about">
                    About Me
                </h1>

                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row items-center gap-10 reveal-about">

                    {/* PROFILE IMAGE */}
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-violet-600 shadow-xl shadow-violet-700/40">
                        <Image
                            src={me.src}
                            alt="Akshad Dhole"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* BIO TEXT */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-3">Hi, I'm Akshad 👋</h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            I'm a <span className="text-violet-400 font-semibold">Software Developer</span> with
                            <span className="text-violet-400 font-semibold"> 2+ years of experience</span> in building
                            modern, scalable, and high-performance web applications.
                            I also hold a <span className="text-violet-300 font-semibold">B.Sc. in Computer Science</span>,
                            which strengthened my fundamentals in programming, system design, and problem-solving.
                        </p>

                        <p className="text-gray-300 leading-relaxed mb-4">
                            I specialize in <span className="text-violet-300 font-semibold">full-stack development</span> using
                            React, Next.js, Node.js, Express, MongoDB, and TailwindCSS.
                            I also have hands-on experience with Firebase, WebSockets, Flutter, and cloud deployments,
                            allowing me to work across multiple platforms and architectures.
                        </p>

                        <p className="text-gray-300 leading-relaxed mb-4">
                            Throughout my journey, I’ve worked across several real-world domains including
                            <span className="text-violet-300 font-semibold"> QMS, POS, Transportation, FinTech, and E-commerce.</span>
                            These projects helped me understand real client needs, business logic, and production-grade development.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            I enjoy solving complex problems, creating smooth UI/UX, and building fast, stable,
                            and user-focused digital experiences. My goal is always to deliver clean, maintainable code
                            and build products that make a real impact.
                        </p>
                    </div>

                </div>

                {/* TECH STACK */}
                <div className="mt-20 reveal-about">
                    <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            "JavaScript", "TypeScript", "React", "Next.js",
                            "Node.js", "MongoDB", "Express", "Firebase",
                            "TailwindCSS", "Flutter", "WebSockets", "Git"
                        ].map((tech) => (
                            <div
                                key={tech}
                                className="p-4 rounded-xl bg-gray-800/80 border border-gray-700 
                                hover:border-violet-600 text-center text-gray-300 
                                transition duration-300 hover:scale-105 hover:shadow-violet-600/30"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                </div>

                <div>
                    <Skills />
                </div>


                {/* CTA */}
                <div className="mt-16 text-center reveal-about">
                    <a
                        href="/contact"
                        className="px-10 py-4 bg-violet-700 rounded-full text-lg font-semibold 
                        hover:bg-violet-600 transition duration-300 shadow-lg hover:shadow-violet-600/50"
                    >
                        Contact Me
                    </a>
                </div>

            </div>
        </section>
        <Footer />

    </div>
    );
}
