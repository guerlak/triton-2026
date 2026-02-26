import React from "react";
import { Shield, Zap, Activity, Hexagon, Triangle, Waves } from "lucide-react";

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
        <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2 mb-10">
          Triton Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {PARTNERS.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 cursor-pointer grayscale hover:grayscale-0"
              >
                <Icon className="w-8 h-8 group-hover:text-triton-red transition-colors duration-500" />
                <span className="text-2xl font-black tracking-tighter uppercase">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
