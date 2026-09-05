"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import RedLine from "./RedLine";

interface HeroSectionProps {
  backgroundImage: string | StaticImageData;
  logoImage?: string | StaticImageData;
  backgroundImageAlt?: string;
  logoImageAlt?: string;
  heightClass?: string;
  backgroundImageClassName?: string;
  darkFilter?: boolean;
  showChevron?: boolean;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  logoImage,
  backgroundImageAlt = "Triathlon",
  logoImageAlt = "Triathlon",
  heightClass = "aspect-[3/2] sm:aspect-auto sm:h-[800px]",
  backgroundImageClassName = "opacity-60",
  darkFilter = false,
  showChevron = true,
  children,
}) => {
  return (
    <section className={`relative ${heightClass} w-full flex items-center justify-center overflow-hidden`}>
      {/* Background Image acting as video placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          quality={80}
          className={`object-cover ${backgroundImageClassName}`}
        />
        {darkFilter && <div className="absolute inset-0 bg-black/60 z-10" />}
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black z-20"></div>
      </div>

      <div className="relative z-30 text-center px-2 max-w-6xl mx-auto">
        {/* Logo Mark */}
        {logoImage && (
          <Image
            src={logoImage}
            alt={logoImageAlt}
            className="w-40 md:w-120 mx-auto"
          />
        )}
        {children}
      </div>

      {showChevron && (
        <div className="absolute bottom-2 sm:bottom-10 animate-bounce text-white/50 z-30">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      )}

    </section>
  );
};

export default HeroSection;
