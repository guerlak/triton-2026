"use client";

import tritonLogo from "@/public/images/triton-ws-logo-01.png";
import Image from "next/image";
import NavButton from "../ui/NavButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 hidden md:block">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-30 h-20 max-w-[1600px]">
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

        <div className="flex gap-6">
          <a
            key="formats"
            href="#formats"
            className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
          >
            Formats
          </a>
          <a
            key="movement"
            href="#moviment"
            className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
          >
            The Moviment
          </a>

          <a
            key="calendar"
            href="#calendar"
            className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
          >
            Calendar
          </a>
          <a
            key="ranking"
            href="#ranking"
            className="text-gray-300 hover:text-triton-red hover:bg-white/5 px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors duration-300"
          >
            Global Ranking
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavButton text="Live Results" href="/live-results" />
          <NavButton isRed text="Find a Race" href="/triton-events" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
