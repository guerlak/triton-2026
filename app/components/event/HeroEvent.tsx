"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import RedLine from "@/app/ui/RedLine";
import { EventHero } from "@/eventdata";

interface HeroProps {
  data: EventHero;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image acting as video placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage}
          alt="Triathlon Swimming"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-2 max-w-6xl mx-auto">
        {/* Logo Mark */}
        <Image
          src={data.logoImage}
          alt="Triathlon Swimming"
          className="w-70 md:w-120 mx-auto"
        />
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
      <RedLine />
    </section >
  );
};

export default Hero;
