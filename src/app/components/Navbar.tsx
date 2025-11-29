"use client";

import { Home, User, Code, Mail, Menu, X, LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import AnimatedGreeting from "./AnimatedGreeting";

interface NavItemProps {
    name: string;
    icon: LucideIcon;
    href: string;
    current: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, icon: Icon, href, current, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className={`
            flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 ease-in-out
            transform hover:scale-[1.03]
            hover:bg-violet-700/50 hover:shadow-2xl hover:shadow-violet-800/50
            ${current
                ? "bg-violet-700 text-white font-semibold shadow-xl ring-2 ring-violet-400 shadow-violet-500/50"
                : "text-gray-300 hover:text-white"
            }
        `}
    >
        <Icon className="w-5 h-5" />
        <span className="hidden sm:inline">{name}</span>
    </Link>
);

const Navbar: React.FC<{ currentPage: string }> = ({ currentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "About Me", href: "/about", icon: User },
        { name: "Projects", href: "/projects", icon: Code },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

    return (
        <header className="sticky top-0 z-40 w-full bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-violet-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Branding Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <AnimatedGreeting />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-2">
                        {navItems.map(item => (
                            <NavItem
                                key={item.href}
                                name={item.name}
                                icon={item.icon}
                                href={item.href}
                                current={currentPage === item.href}
                            />
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-violet-700/80 focus:outline-none transition duration-150 transform hover:rotate-6"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col space-y-2">
                    {navItems.map(item => (
                        <NavItem
                            key={item.href}
                            name={item.name}
                            icon={item.icon}
                            href={item.href}
                            current={currentPage === item.href}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
