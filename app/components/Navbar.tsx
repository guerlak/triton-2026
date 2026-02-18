"use client";
import React, { useState } from "react";
import tritonLogo from "@/public/images/triton-ws-logo-01.png";
import Image from "next/image";
import { useDictionary } from "./DictionaryProvider";
import Link from "next/link";

const Navbar: React.FC<{ lang: string }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dict } = useDictionary();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-around max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              src={tritonLogo}
              width={80}
              height={100}
              alt="Triton logo"
              className="mt-8 mr-10"
            />
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-4">
              {dict?.navigation?.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 items-center">
                <button className="bg-triton-red hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold uppercase transition-colors">
                  <Link href="/all-events">Find a race</Link>
                </button>
              </div>
            </div>
          </div>
          {/*  <button
            onClick={() => {
              const newLang = lang === "en" ? "pt" : "en";
              const segments = window.location.pathname.split("/");
              segments[1] = newLang;
              window.location.href = segments.join("/");
            }}
            className="cursor-pointer text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
          >
            {lang === "en" ? "PT" : "EN"}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
