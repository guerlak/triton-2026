import React from "react";
import Image from "next/image";
import marathonLogo from "@/public/images/partners/marathon-photos-logo.png";
import hotelPlannerLogo from "@/public/images/partners/hotel-planner-logo.png";
import ahotoLogo from "@/public/images/partners/ahoto-logo.png";
import hakuLogo from "@/public/images/partners/haku-logo.png";
import smitarLogo from "@/public/images/partners/smitar-logo.png";
import lucidTravelLogo from "@/public/images/partners/lucid-logo.png";
import prouderLogo from "@/public/images/partners/prouder-logo.png";
import icarusLogo from "@/public/images/partners/icarus-logo.png";

const partners = [
  { name: "Marathon Photos", logo: marathonLogo, className: "max-h-5 sm:max-h-7 md:max-h-8" },
  { name: "HotelPlanner", logo: hotelPlannerLogo, className: "max-h-4 sm:max-h-5 md:max-h-6" },
  { name: "Ahoto", logo: ahotoLogo, className: "max-h-5 sm:max-h-6 md:max-h-7" },
  { name: "Haku", logo: hakuLogo, className: "max-h-6 sm:max-h-8 md:max-h-9" },
  { name: "Smitar", logo: smitarLogo, className: "max-h-6 sm:max-h-8 md:max-h-9" },
  { name: "Lucid Travel", logo: lucidTravelLogo, className: "max-h-6 sm:max-h-8 md:max-h-9" },
  { name: "Prouder", logo: prouderLogo, className: "max-h-5 sm:max-h-6 md:max-h-7" },
  { name: "Icarus", logo: icarusLogo, className: "max-h-6 sm:max-h-8 md:max-h-9" },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-triton-red font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-8 sm:mb-10 text-xs sm:text-sm">
          Triton Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center h-10 sm:h-12 w-full lg:w-auto px-2 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={100}
                className={`w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px] ${partner.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
