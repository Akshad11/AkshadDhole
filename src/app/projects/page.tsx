"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { projectBlogs } from "../data/projectsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectsBlog() {

    // Scroll reveal for blog-style animation
    useEffect(() => {
        const items = document.querySelectorAll(".reveal-blog");
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

    return (
        <div>
            <Navbar currentPage="projects" />
            <section className="relative py-24 bg-gray-900 border-t border-violet-900 overflow-hidden">

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="projectsBlogGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M0 0 H80 V80" stroke="#6b21a8" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#projectsBlogGrid)" />
                    </svg>
                </div>

                {/* Title */}
                <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text animated-gradient mb-16">
                    My Projects & Case Studies
                </h2>

                {/* Project Blog Cards */}
                <div className="relative z-10 max-w-5xl mx-auto space-y-12 px-6">

                    {projectBlogs.map((p, index) => (
                        <div
                            key={index}
                            className="reveal-blog opacity-0 translate-y-12
                        bg-gray-800/80 border border-gray-700 hover:border-violet-600
                        rounded-xl shadow-lg hover:shadow-violet-600/20
                        transition-all duration-500 hover:-translate-y-2 p-6"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full h-56 rounded-lg overflow-hidden mb-6">
                                <Image
                                    src={p.img}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-3xl font-bold text-white mb-3">
                                {p.name}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {p.description}
                            </p>

                            {/* TECH TAGS */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-md bg-violet-700/40 
                                    border border-violet-500/40 text-violet-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* BUTTONS */}
                            <div className="flex space-x-4 mt-6">

                                {/* LIVE DEMO */}
                                <a
                                    href={p.live}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 rounded-lg text-sm 
                                text-white bg-violet-700 hover:bg-violet-600 
                                transition-all hover:scale-105"
                                >
                                    Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                                </a>

                                {/* GITHUB */}
                                <a
                                    href={p.repo}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 rounded-lg text-sm
                                text-white bg-gray-700 hover:bg-gray-600 
                                transition-all hover:scale-105"
                                >
                                    Source Code <Github className="w-4 h-4 ml-2" />
                                </a>
                            </div>

                        </div>
                    ))}

                </div>
            </section>
            <Footer />

        </div>
    );
}
