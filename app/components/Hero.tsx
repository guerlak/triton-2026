"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/public/images/evento_start.jpg";
import logoHero from "@/public/images/triton-ws-branco.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image acting as video placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Triathlon Swimming"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-2 max-w-6xl mx-auto">
        {/* Logo Mark */}
        <Image
          src={logoHero}
          alt="Triathlon Swimming"
          className="w-70 md:w-120 mx-auto"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-xl font-bold tracking-widest uppercase">
          <span className="text-white">Be Eager.</span>
          <span className="hidden md:block text-triton-red">•</span>
          <span className="text-white">Be Brave.</span>
          <span className="hidden md:block text-triton-red">•</span>
          <span className="text-white">Be Strong.</span>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
