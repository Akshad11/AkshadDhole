"use client"
import React from 'react';
// These imports assume Footer and Navbar components are available in the same directory or correctly aliased
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    currentPage: string;
    setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
    return (
        // min-h-screen ensures the div covers at least the viewport height
        <div className="min-h-screen flex flex-col">
            {/* Navbar is rendered with state management props */}
            <Navbar currentPage={currentPage} />
            {/* main content area. flex-grow ensures it pushes the footer down */}
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;