'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';
import tritonLogo from '../../public/images/logo_triton_branco_02.png';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex flex-col items-start">
              <Image src={tritonLogo} width={280} height={300} alt="Triton logo" />

            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-triton-red hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold uppercase transition-colors">
                <a href="https://www.ticketsports.com.br/e/triton-3-rio-de-janeiro-2026-74526?termo=TRITON&periodo=0&mes=&inicio=&fim=&ordenacao=1&pais=">Inscreva-se</a>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-triton-red block px-3 py-2 rounded-md text-base font-bold uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;