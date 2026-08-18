"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/public/images/evento_start.jpg";
import logoHero from "@/public/images/triton-ws-branco.png";
import Image from "next/image";
import { motion, delay } from "framer-motion";
import RedLine from "../ui/RedLine";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image acting as video placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="TRITON World Series - Be Eager, Be Brave, Be Strong"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/10 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-2 max-w-6xl mx-auto">
        {/* Logo Mark */}
        <Image
          src={logoHero}
          alt="TRITON World Series Logo"
          priority
          className="w-70 md:w-120 mx-auto"
        />

        <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-6 text-xs sm:text-base md:text-xl font-bold tracking-widest uppercase mt-4">
          <span className="text-white">Be Eager</span>
          <span className="text-triton-red">•</span>
          <span className="text-white">Be Brave</span>
          <span className="text-triton-red">•</span>
          <span className="text-white">Be Strong</span>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
      <RedLine />
    </section >
  );
};

export default Hero;
