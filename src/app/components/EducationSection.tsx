"use client";

import { Book } from "lucide-react";
import StarField from "./StarField";

type Star = {
    top: number;
    left: number;
    delay: number;
    duration: number;
};

function generateStars(count: number): Star[] {
    return Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
    }));
}

export default function EducationSection() {
    const stars = generateStars(10);

    return (
        <section className="py-20 bg-gray-900 border-t border-violet-900 relative">
            <StarField count={20} />
            <div className="absolute inset-0 diamond-grid"></div>

            <h2 className="text-4xl font-bold text-white mb-12 text-center text-transparent bg-clip-text animated-gradient">
                Education
            </h2>

            <div className="max-w-3xl mx-auto relative px-4 sm:px-0">

                {/* Root Vertical Timeline */}
                <div className="relative border-l-2 border-violet-700/40 pl-6 ml-4">

                    {/* ROOT NODE */}
                    <div className="relative mb-10">
                        <div className="absolute left-[-15px] top-2 w-4 h-4  
                            bg-violet-500 border border-violet-300 rounded-full 
                            shadow-lg shadow-violet-600/40"></div>

                        <h3 className="text-2xl font-bold flex items-center text-white pl-3">
                            <Book className="mr-2" />    Academic Journey
                        </h3>
                        <p className="text-violet-300 text-sm pl-3">
                            My foundation in tech and development
                        </p>
                    </div>

                    {/* BSc */}
                    <div className="relative mb-12 group pl-6">

                        {/* Connector */}
                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/60"></div>

                        {/* Dot */}
                        <div className="absolute left-[4px] top-2.5 w-3 h-3 
                            bg-violet-500 border border-violet-300 rounded-full 
                            shadow transition duration-300 group-hover:scale-125"></div>

                        <h3 className="text-xl font-bold text-white">B.Sc. — Computer Science</h3>
                        <p className="text-violet-300 text-sm mb-3">Graduated • 2023</p>

                        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 
                            group-hover:border-violet-600 transition duration-300">
                            <ul className="text-gray-300 space-y-2">
                                <li>• Strong foundation in programming and algorithms.</li>
                                <li>• Academic projects in C, Java, and MySQL.</li>
                                <li>• Learned OS, Networking, and DBMS fundamentals.</li>
                                <li>• Built base for modern full-stack development.</li>
                            </ul>
                        </div>
                    </div>

                    {/* HSC */}
                    <div className="relative mb-12 group pl-6">

                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/60"></div>

                        <div className="absolute left-[4px] top-2.5 w-3 h-3 
                            bg-emerald-500 border border-violet-300 rounded-full 
                            shadow transition duration-300 group-hover:scale-125"></div>

                        <h3 className="text-xl font-bold text-white">HSC — Science</h3>
                        <p className="text-violet-300 text-sm mb-3">Completed • 2020</p>

                        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 
                            group-hover:border-emerald-600 transition duration-300">
                            <ul className="text-gray-300 space-y-2">
                                <li>• Science stream with IT focus.</li>
                                <li>• Built strong logic and mathematics foundation.</li>
                                <li>• Introduced to programming and computer basics.</li>
                            </ul>
                        </div>
                    </div>

                    {/* SSC */}
                    <div className="relative mb-12 group pl-6">

                        <div className="absolute left-[-2px] top-4 w-6 h-0.5 bg-violet-700/60"></div>

                        <div className="absolute left-[4px] top-2.5 w-3 h-3
                            bg-cyan-500 border border-violet-300 rounded-full
                            shadow transition duration-300 group-hover:scale-125"></div>

                        <h3 className="text-xl font-bold text-white">SSC — Secondary School</h3>
                        <p className="text-violet-300 text-sm mb-3">Completed • 2018</p>

                        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 
                            group-hover:border-cyan-600 transition duration-300">
                            <ul className="text-gray-300 space-y-2">
                                <li>• Built strong basics in mathematics & reasoning.</li>
                                <li>• Strengthened academic foundation.</li>
                                <li>• Sparked early interest in computers & technology.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
