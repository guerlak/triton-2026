"use client";
import React from "react";
import { EventHero } from "@/eventdata";
import HeroSection from "@/app/ui/HeroSection";

interface HeroProps {
  data: EventHero;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <HeroSection
      backgroundImage={data.backgroundImage}
      logoImage={data.logoImage}
    />
  );
};

export default Hero;

