"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import tritonLogo from "@/public/images/triton-ws-logo-01.png";
import { Menu, X } from "lucide-react";

const InfoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms", href: "/terms-and-conditions" },
    { name: "Privacy", href: "/privacy-policy" },

  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${isScrolled || isOpen
      ? "bg-black/95 backdrop-blur-md border-white/10 py-3"
      : "bg-black/60 backdrop-blur-sm border-white/5 py-5"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 transition-transform active:scale-95">
            <Image
              src={tritonLogo}
              alt="Triton World Series"
              width={120}
              height={60}
              className="w-auto h-10 md:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[60px] bg-black/98 backdrop-blur-2xl transition-all duration-500 overflow-hidden ${isOpen ? "h-screen opacity-100" : "h-0 opacity-0 pointer-events-none"
        }`}>
        <div className="px-6 py-12 flex flex-col gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-triton-red transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default InfoNavbar;
