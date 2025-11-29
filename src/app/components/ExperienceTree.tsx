"use client";
import React from 'react';

export default function ExperienceSection() {
    return (
        <section className="py-20 bg-gray-900 border-t border-violet-900 relative">
            {/* BACKGROUND GRID + ABSTRACT SHAPES */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* VIOLET GRID LINES */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="bgGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6b21a8" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#bgGrid)" />
                </svg>

                {/* ABSTRACT SHAPES — subtle, soft, premium look */}

                {/* Soft blob (top-left) */}
                <div className="absolute top-[-40px] left-[-20px] w-[280px] h-[280px] bg-gray-700/20 rounded-full blur-3xl"></div>

                {/* Rectangle blur (right) */}
                <div className="absolute top-[20%] right-[-10%] w-[350px] h-[220px] bg-gray-800/30 rounded-3xl blur-2xl rotate-6"></div>

                {/* Large faint circle (bottom-left) */}
                <div className="absolute bottom-[-60px] left-[10%] w-[260px] h-[260px] bg-gray-700/10 rounded-full blur-[90px]"></div>

                {/* Diamond shape (center) */}
                <div className="absolute top-[40%] left-[35%] w-[140px] h-[140px] bg-gray-600/10 rotate-45 blur-xl rounded-lg"></div>

                {/* Small floating dot 1 */}
                <div className="absolute top-[30%] left-[10%] w-2 h-2 bg-gray-500/30 rounded-full animate-ping"></div>

                {/* Small floating dot 2 */}
                <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-gray-400/40 rounded-full animate-pulse"></div>

            </div>

            <h2 className="text-4xl font-bold text-white mb-12 text-center text-transparent bg-clip-text animated-gradient">
                Work Experience Timeline
            </h2>

            <div className="max-w-3xl mx-auto relative px-4 sm:px-0">

                {/* TIMELINE ROOT */}
                <div className="relative border-l-2 border-violet-700/40 pl-6 ml-4">

                    {/* COMPANY NODE */}
                    <div className="relative mb-12">
                        <div className="absolute left-[-15px] top-3 w-4 h-4 bg-violet-500 border border-violet-300 rounded-full shadow-lg shadow-violet-500/30 "></div>

                        <h3 className="text-3xl font-bold text-white mb-1 ml-3">Umang Software</h3>
                        <p className="text-violet-300 text-sm">Full-time · On-site</p>
                    </div>

                    {/* ------------------------------ */}
                    {/* 1. SOFTWARE DEVELOPER (Newest) */}
                    {/* ------------------------------ */}

                    <div className="relative pb-10 pl-6 group">
                        {/* Branch */}
                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/70"></div>

                        {/* Dot */}
                        <div className="absolute left-[4px] top-2.5 w-3 h-3 rounded-full bg-purple-400 shadow group-hover:scale-125 transition"></div>

                        <p className="text-xl font-bold text-white">
                            Software Developer
                        </p>
                        <p className="text-violet-300 text-sm mb-4">6 Months (Oct 2023 – Apr 2024)</p>

                        <ul className="text-gray-300 space-y-2 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-md group-hover:border-violet-600">
                            <li>• Worked on QMS, POS, Transportation & FinTech systems.</li>
                            <li>• Fixed production-level issues & implemented feature updates.</li>
                            <li>• Supported clients with real-time debugging & solutions.</li>
                            <li>• Maintained stable system performance for daily operations.</li>
                        </ul>
                    </div>

                    {/* -------------------------------- */}
                    {/* 2. SOFTWARE DEVELOPER JR.        */}
                    {/* -------------------------------- */}

                    <div className="relative pb-10 pl-6 group">
                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/70"></div>
                        <div className="absolute left-[4px] top-2.5 w-3 h-3 rounded-full bg-emerald-500 shadow group-hover:scale-125 transition"></div>

                        <p className="text-xl font-bold text-white">
                            Software Developer Jr.
                        </p>
                        <p className="text-violet-300 text-sm mb-4">1.6 Years (Apr 2022 – Oct 2023)</p>

                        <ul className="text-gray-300 space-y-2 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-md group-hover:border-emerald-600">
                            <li>• Created new features and logic in existing Pascal systems.</li>
                            <li>• Debugged issues raised by clients and testers.</li>
                            <li>• Participated in daily client support and requirement calls.</li>
                            <li>• Refactored old modules for better performance and clarity.</li>
                        </ul>
                    </div>

                    {/* -------------------------------- */}
                    {/* 3. SOFTWARE DEVELOPER TRAINEE     */}
                    {/* -------------------------------- */}

                    <div className="relative pb-10 pl-6 group">
                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/70"></div>
                        <div className="absolute left-[4px] top-2.5 w-3 h-3 rounded-full bg-cyan-500 shadow group-hover:scale-125 transition"></div>

                        <p className="text-xl font-bold text-white">
                            Software Developer Trainee
                        </p>
                        <p className="text-violet-300 text-sm mb-4">6 Months (Oct 2021 – Apr 2022)</p>

                        <ul className="text-gray-300 space-y-2 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-md group-hover:border-cyan-600">
                            <li>• Learned Pascal, data flow, and system architecture.</li>
                            <li>• Helped seniors with debugging and code-level tasks.</li>
                            <li>• Understood how internal modules connect and process data.</li>
                            <li>• Participated in training sessions and internal reviews.</li>
                        </ul>
                    </div>

                    {/* -------------------------------- */}
                    {/* 4. INTERN (Oldest)               */}
                    {/* -------------------------------- */}

                    <div className="relative pb-10 pl-6 group">
                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/70"></div>
                        <div className="absolute left-[4px] top-2.5 w-3 h-3 rounded-full bg-pink-500 shadow group-hover:scale-125 transition"></div>

                        <p className="text-xl font-bold text-white">
                            Software Developer Intern
                        </p>
                        <p className="text-violet-300 text-sm mb-4">1 Month (Sep 2021 – Oct 2021)</p>

                        <ul className="text-gray-300 space-y-2 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-md group-hover:border-pink-600">
                            <li>• Introduced to company tools and workflow.</li>
                            <li>• Assisted senior developers with documentation and testing.</li>
                            <li>• Understood basic problem-solving in real systems.</li>
                            <li>• Observed client communication and issue handling process.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
