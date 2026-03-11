import React from "react";
import { Shield, Zap, Activity, Hexagon, Triangle, Waves } from "lucide-react";
import Image from "next/image";
import lucidLogo from "@/public/images/partners/logo-lg.png";

const PARTNERS = [
  { name: "AeroBike", icon: Triangle },
  { name: "HydroSwim", icon: Waves },
  { name: "RunTech", icon: Activity },
  { name: "Endurance", icon: Zap },
  { name: "SafeSport", icon: Shield },
  { name: "OmniGear", icon: Hexagon },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-triton-red font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-10">
          Triton Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
           cursor-pointer grayscale hover:grayscale-0">
            <Image src={lucidLogo} alt="Lucid Logo" width={300} height={300} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
