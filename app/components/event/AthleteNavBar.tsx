"use client";

import tritonLogo from "@/public/images/triton-ws-logo-01.png";
import Image from "next/image";
import NavButton from "@/app/ui/NavButton";
import { useState, useEffect } from "react";
import { Radio, Camera, ExternalLink } from "lucide-react";
import Link from "next/link";

const Navbar = ({ liveResultsUrl, targetDate, mediaPictureUrl }: { liveResultsUrl?: string; targetDate?: string, mediaPictureUrl?: string }) => {
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
    { name: "Race Guide", href: "#race-guide" },
    { name: "Start List", href: "#start-list" },
    { name: "Top 5", href: "#top-five" },
    { name: "Results", href: "#full-results" },
  ];

  const isEventActive = () => {
    if (!liveResultsUrl) return false;
    if (!targetDate) return true;

    const now = new Date();
    const eventStart = new Date(targetDate);
    eventStart.setHours(0, 0, 0, 0);

    return now >= eventStart;
  };

  const activeEvent = isEventActive();
  //const activeEvent = true;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
                ${isScrolled || isOpen ? "bg-black/95 backdrop-blur-md" : "bg-transparent md:bg-black/80"
        } border-b border-white/10`}>

      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-30 h-20 max-w-[1600px]">
        {/* Logo */}
        <Link
          href={`./`}
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
            className="w-auto h-12 md:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          {activeEvent ? (
            <a
              href={liveResultsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-triton-red text-white transition-all duration-300 border border-white/20 hover:border-triton-red shadow-sm group hover:scale-105 active:scale-95"
            >
              <Radio className="w-4 h-4 text-triton-red animate-pulse group-hover:text-white transition-colors" />
              <span>Check Live Results</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ) : (
            <></>
          )}

          {mediaPictureUrl ? (
            <a
              key="media"
              href={mediaPictureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-triton-red text-white transition-all duration-300 border border-white/20 hover:border-triton-red shadow-sm group hover:scale-105 active:scale-95"
            >
              <Camera className="w-4 h-4 text-triton-red group-hover:text-white transition-colors" />
              <span>Race Pictures</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ) : (
            <a
              key="media"
              href="#media"
              className="text-gray-500 cursor-not-allowed opacity-50 px-3 py-2 text-sm font-bold uppercase inline-flex items-center gap-1.5 select-none"
              title="Fotos indisponíveis no momento"
            >
              <Camera className="w-4 h-4" />
              <span>Pictures</span>
            </a>
          )}

        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
          <div className="flex flex-col items-center gap-6 w-full max-w-xs border-b border-white/10 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-triton-red text-base font-bold uppercase transition-colors tracking-widest text-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          {mediaPictureUrl && (
            <a
              href={mediaPictureUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-base font-bold uppercase tracking-wider bg-triton-red text-white shadow-lg shadow-red-900/40 hover:bg-red-700 transition-all duration-300 active:scale-95 my-2 w-full max-w-xs"
            >
              <Camera className="w-5 h-5" />
              <span>Race Pictures</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {activeEvent && liveResultsUrl && (
            <a
              href={liveResultsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-base font-bold uppercase tracking-wider bg-triton-red text-white shadow-lg shadow-red-900/40 hover:bg-red-700 transition-all duration-300 active:scale-95 my-2 w-full max-w-xs"
            >
              <Radio className="w-5 h-5 animate-pulse" />
              <span>Check Live Results</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

