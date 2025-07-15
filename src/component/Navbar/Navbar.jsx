'use client';
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/mymusic", label: "Favorite Music" },
        { href: "/supportme", label: "Support Me" },
        { href: "/aboutme", label: "About Me" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Profile Section */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/img/profil.jpg"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-white shadow-md transition-all hover:scale-105"
                            priority
                        />
                        <span className="text-white text-lg font-semibold md:text-xl">
                            My Dashboard
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-white text-sm font-medium hover:text-yellow-300 transition-colors duration-200 px-1 py-2 rounded-md"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white text-2xl focus:outline-none transition-all hover:scale-110 active:scale-95"
                        aria-expanded={isOpen}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-1 px-2 pb-3 pt-2 bg-indigo-700 shadow-lg rounded-b-lg">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all p-4"
                            onClick={toggleMenu}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;