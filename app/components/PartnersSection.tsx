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
            grayscale hover:grayscale-0">
            <Image src={marathonLogo} alt="Marathon Photos" width={240} height={100} className="h-8 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={hotelPlannerLogo} alt="Hotel Planner" width={240} height={100} className="h-6 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={ahotoLogo} alt="ahoto" width={240} height={100} className="h-7 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={hakuLogo} alt="haku" width={340} height={200} className="h-15 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={smitarLogo} alt="haku" width={340} height={200} className="h-15 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={lucidTravelLogo} alt="haku" width={340} height={200} className="h-16 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={prouderLogo} alt="haku" width={340} height={200} className="h-7 w-auto" />
          </div>
          <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
            grayscale hover:grayscale-0">
            <Image src={icarusLogo} alt="haku" width={340} height={200} className="h-15 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
