// projectsData.ts
import { SkillCategory } from "@/types/types"
import Image1 from "../assets/project1.png"
import Image2 from "../assets/project2.png"
import Image3 from "../assets/project3.png"
import Image4 from "../assets/project4.png"
import Image5 from "../assets/project5.png"
import Image6 from "../assets/project6.png"


export const projects = [
    {
        name: "SmartGadgets-Hub-MERN-Inventory-Sales-Management-System",
        repo: "https://github.com/Akshad11/SmartGadgets-Hub-MERN-Inventory-Sales-Management-System",
        live: "https://smart-gadgets-hub-mern-inventory-sa.vercel.app/",
        img: Image1.src,
        tech: ["TypeScript", "React", "Tailwind", "Node.js"]
    },
    {
        name: "Ecom-Web",
        repo: "https://github.com/akshad11/Ecom-Web",
        live: "https://ecom-web-teal.vercel.app/",
        img: Image2.src,
        tech: ["TypeScript", "React", "Next.js"]
    },
    {
        name: "Saas-Website",
        repo: "https://github.com/Akshad11/Saas-Website",
        live: "https://saas-website-five-ashy.vercel.app/",
        img: Image3.src,
        tech: ["React", "TailwindCSS", "JavaScript"]
    },
    {
        name: "Tic-Tec-Toe Ultimate",
        repo: "https://github.com/akshad11/Tic-Tec-Toe--Ultimate",
        live: "#",
        img: Image6.src,
        tech: ["JavaScript", "WebSockets", "HTML", "CSS", "Node.js"]
    },
    {
        name: "Unify-saas-web",
        repo: "https://github.com/Akshad11/Unify-saas-web",
        live: "https://unify-saas-web-eight.vercel.app/",
        img: Image4.src,
        tech: ["React", "TailwindCSS", "TypeScript"]
    },
    {
        name: "GloboServe",
        repo: "https://github.com/Akshad11/GloboServe",
        live: "https://globo-serve.vercel.app/",
        img: Image5.src,
        tech: ["TypeScript", "Next.js", "TailwindCSS"]
    },
];

export const skills: SkillCategory[] = [
    {
        category: "Frontend Core",
        items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
        category: "Styling & UI",
        items: ["Tailwind CSS", "Framer Motion", "Material UI", "Styled Components", "Shadcn/UI"]
    },
    {
        category: "State & Data",
        items: ["Redux Toolkit", "React Query", "Zustand", "Context API", "GraphQL"]
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Webpack", "Vite", "Vercel", "Jest", "CI/CD"]
    }
];

export const projectBlogs = [
    {
        name: "SmartGadgets Hub – Inventory & Sales System",
        slug: "smartgadgets-hub",
        description:
            "A full MERN-based inventory and sales management system designed to streamline product tracking, stock levels, billing, and analytics for retail stores.",
        repo: "https://github.com/Akshad11/SmartGadgets-Hub-MERN-Inventory-Sales-Management-System",
        live: "https://smart-gadgets-hub-mern-inventory-sa.vercel.app/",
        img: Image1.src,
        tech: ["TypeScript", "React", "Tailwind", "Node.js"]
    },
    {
        name: "Ecom-Web – Modern E-Commerce UI",
        slug: "ecom-web",
        description:
            "A minimal and fast e-commerce frontend built using Next.js, featuring product listings, filters, responsive UI, and reusable components.",
        repo: "https://github.com/akshad11/Ecom-Web",
        live: "https://ecom-web-teal.vercel.app/",
        img: Image2.src,
        tech: ["TypeScript", "React", "Next.js"]
    },
    {
        name: "SaaS Landing Website",
        slug: "saas-website",
        description:
            "A clean and modern SaaS landing page built with React and TailwindCSS focusing on performance, animations, and high-converting UI layout.",
        repo: "https://github.com/Akshad11/Saas-Website",
        live: "https://saas-website-five-ashy.vercel.app/",
        img: Image3.src,
        tech: ["React", "TailwindCSS", "JavaScript"]
    },
    {
        name: "Tic-Tac-Toe Ultimate",
        slug: "tic-tac-toe-ultimate",
        description:
            "A fun interactive Tic-Tac-Toe game with real-time updates, animations, and WebSocket-based multiplayer logic.",
        repo: "https://github.com/akshad11/Tic-Tec-Toe--Ultimate",
        live: "#",
        img: Image6.src,
        tech: ["JavaScript", "WebSockets", "HTML", "CSS", "Node.js"]
    },
    {
        name: "Unify SaaS Web Platform",
        slug: "unify-saas-web",
        description:
            "A polished SaaS multi-section corporate UI built to demonstrate clean layouts, pricing sections, and responsive components.",
        repo: "https://github.com/Akshad11/Unify-saas-web",
        live: "https://unify-saas-web-eight.vercel.app/",
        img: Image4.src,
        tech: ["React", "TailwindCSS", "TypeScript"]
    },
    {
        name: "GloboServe Business Landing",
        slug: "globoserve-landing",
        description:
            "A professional landing website designed for global service providers, featuring smooth animations and fast-loading components.",
        repo: "https://github.com/Akshad11/GloboServe",
        live: "https://globo-serve.vercel.app/",
        img: Image5.src,
        tech: ["TypeScript", "Next.js", "TailwindCSS"]
    }
];
