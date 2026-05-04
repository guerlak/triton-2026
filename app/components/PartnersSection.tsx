import React from "react";
import Image from "next/image";
import marathonLogo from "@/public/images/partners/marathon-photos-logo.png";
import hotelPlannerLogo from "@/public/images/partners/hotel-planner-logo.png";



const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-triton-red font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-10">
          Triton Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <a href="https://www.marathon-photos.com/" target="_blank" className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
           cursor-pointer grayscale hover:grayscale-0">
            <Image src={marathonLogo} alt="Marathon Photos" width={240} height={100} className="h-10 w-auto" />
          </a>
          <a href="https://www.hotelplanner.com/" target="_blank" className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
           cursor-pointer grayscale hover:grayscale-0">
            <Image src={hotelPlannerLogo} alt="Hotel Planner" width={240} height={100} className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
