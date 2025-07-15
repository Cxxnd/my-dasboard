'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Profile Section */}
                    <div className="flex h-16 items-center gap-x-4">
                        <Image
                            src="/img/profil.jpg"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-white shadow-md transition-all hover:scale-105 px-3 py-3"
                            priority
                        />
                        <span className="text-white text-lg font-semibold md:text-xl">
                            My Dashboard
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-x-4">
                        <Link href={'/'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link href={'/mymusic'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            Favorite Music
                        </Link>
                        <Link href={'/support'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            Support Me
                        </Link>
                        <Link href={'/about'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            About Me
                        </Link>
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
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} gap-x-2`}>
                <div className="flex flex-col gap-y-2 px-2 pb-3 pt-2 bg-indigo-700 shadow-lg rounded-b-lg">
                        <Link href={'/'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link href={'/mymusic'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            Favorite Music
                        </Link>
                        <Link href={'/support'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            Support Me
                        </Link>
                        <Link href={'/about'} className="block px-3 py-2 text-white text-base font-medium hover:bg-indigo-600 hover:text-yellow-300 rounded-md transition-all"
                            onClick={toggleMenu}
                        >
                            About Me
                        </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;