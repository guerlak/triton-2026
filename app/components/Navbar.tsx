"use client";
import React, { useState } from "react";
import tritonLogo from "../../public/images/logo_triton_branco_02.png";
import Image from "next/image";
import { useDictionary } from "./DictionaryProvider";

const Navbar: React.FC<{ lang: string }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dict } = useDictionary();



  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="flex flex-col items-start">
              <Image
                src={tritonLogo}
                width={280}
                height={300}
                alt="Triton logo"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-5 flex items-baseline space-x-4">
              {dict?.navigation?.map((link: any) => (
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
                  <a href="https://www.ticketsports.com.br/e/triton-3-rio-de-janeiro-2026-74526?termo=TRITON&periodo=0&mes=&inicio=&fim=&ordenacao=1&pais=">
                    {lang === "en" ? "Buy Tickets" : "Inscreva-se"}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              const newLang = lang === "en" ? "pt" : "en";
              const segments = window.location.pathname.split('/');
              segments[1] = newLang;
              window.location.href = segments.join('/');
            }}
            className="cursor-pointer text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
