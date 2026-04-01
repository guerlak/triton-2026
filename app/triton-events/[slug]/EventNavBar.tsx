"use client";

import tritonLogo from "@/public/images/triton-ws-logo-01.png";
import Image from "next/image";
import NavButton from "@/app/ui/NavButton";
import { useState, useEffect } from "react";
import Link from "next/link";

const EventNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "About", href: "#formats" },
        { name: "Global Ranking", href: "#ranking" },
        { name: "Course", href: "#calendar" },
        { name: "Calendar", href: "#calendar" },

    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? "bg-black/95 backdrop-blur-md" : "bg-transparent md:bg-black/80"
                } border-b border-white/10`}
        >
            <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-30 h-20 max-w-[1600px]">
                {/* Logo */}
                <div
                    className="shrink-0 cursor-pointer flex items-center h-full"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsOpen(false);
                    }}
                >
                    <Image
                        src={tritonLogo}
                        width={80}
                        height={40}
                        alt="Triton logo"
                        className="w-auto h-12 md:h-22 mt-10"
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 
                            rounded-md text-sm font-bold uppercase transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <NavButton text="Live Results" href="#" />
                    <NavButton isRed text="Find a Race" href="#" />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                         hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 
                                6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-x-0 top-20 bg-black transition-all duration-500 ease-in-out overflow-y-auto ${isOpen ? "h-[calc(100vh-80px)] opacity-100 translate-y-0" : "h-0 opacity-0 -translate-y-10 pointer-events-none"
                    }`}
            >
                <div className="px-6 py-12 flex flex-col items-center gap-8 min-h-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white block px-3 py-2 text-2xl font-bold uppercase hover:text-triton-red transition-all duration-300 active:scale-95"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="mt-8 flex flex-col items-center gap-6 w-full max-w-xs">
                        <NavButton text="Live Results" href="/live-results" className="w-full" />
                        <NavButton isRed text="Find a Race" href="/triton-events" className="w-full" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default EventNavBar;


