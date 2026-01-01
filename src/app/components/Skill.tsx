import React from 'react';
import { skills } from '../data/projectsData';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">My Expertise</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Tools & Technologies</h2>
                    <p className="text-slate-400 mt-4 text-lg">
                        The tech stack I use to build robust, scalable, and high-performance applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 hover:bg-slate-800 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;