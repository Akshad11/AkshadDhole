"use client";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projectsData";
import StarField from "./StarField";

export default function ProjectsSection() {
    return (
        <section className="py-20 bg-gray-900 border-t border-violet-900 relative">
            <StarField count={20} />
            {/* Background (Same as your Experience/Hero) */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6b21a8" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <h2 className="text-4xl font-bold text-white text-center mb-12 text-transparent bg-clip-text animated-gradient">
                Featured Projects
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">

                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="bg-gray-800/80 border border-violet-700/40 rounded-xl shadow-lg hover:shadow-violet-600/30 
            transition-all duration-300 hover:scale-[1.03]"
                    >
                        {/* Image Preview */}
                        <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                            <Image
                                src={p.img}
                                alt={p.name}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        <div className="p-5">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white">{p.name}</h3>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {p.tech.map((t, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-violet-700/40 border border-violet-600 text-white">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-5 flex justify-between">

                                {/* Live button */}
                                <a
                                    href={p.live}
                                    target="_blank"
                                    className="flex items-center text-white bg-violet-700 hover:bg-violet-600
                  px-4 py-2 rounded-lg text-sm transition-all"
                                >
                                    Live <ExternalLink className="w-4 h-4 ml-2" />
                                </a>

                                {/* GitHub button */}
                                <a
                                    href={p.repo}
                                    target="_blank"
                                    className="flex items-center text-white bg-gray-700 hover:bg-gray-600
                  px-4 py-2 rounded-lg text-sm transition-all"
                                >
                                    Code <Github className="w-4 h-4 ml-2" />
                                </a>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
