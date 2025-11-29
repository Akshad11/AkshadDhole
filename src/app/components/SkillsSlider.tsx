"use client";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiDocker,
    SiAmazon,
} from "react-icons/si";

const techIcons = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiAmazon, name: "AWS" },
];

// 3 hover animations
const animations = [
    "hover:animate-jump",
    "hover:animate-glitch",
    "hover:animate-pulse-fast",
];

export default function SkillsSlider() {
    return (
        <section className="py-20 bg-gray-900 border-t border-violet-900 overflow-hidden">
            <h2 className="text-4xl font-bold text-white mb-10 text-center">
                Skills & Tech Stack
            </h2>

            <div className="relative w-full overflow-hidden">
                <div
                    className="
                    flex items-center gap-10
                    animate-marquee whitespace-nowrap
                "
                >
                    {[...techIcons, ...techIcons].map((tech, index) => {
                        const IconComponent = tech.icon;
                        const animation = animations[index % 3];

                        return (
                            <div
                                key={index}
                                className={`
                                    min-w-24 h-24 flex items-center justify-center
                                    rounded-xl bg-gray-800 border border-violet-600/40 
                                    shadow-lg shadow-violet-600/20 text-white text-5xl
                                    cursor-pointer transition-all duration-300
                                    ${animation}
                                `}
                            >
                                <IconComponent />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
