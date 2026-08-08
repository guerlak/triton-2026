
import Image from "next/image";


import { StaticImageData } from "next/image";

interface Partner {
  name: string;
  logo: StaticImageData | string;
  url: string;
}

const PartnersSectionEvent = ({ partners = [] }: { partners: Partner[] }) => {
  return (
    <section className="py-10 sm:py-16 bg-neutral-950 border-y border-white/5">
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-triton-red font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-6 sm:mb-10 text-sm sm:text-base">
          Triton Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16">
          {partners.map((partner: any) => (
            <div className="group flex items-center gap-3 text-gray-500
           hover:text-white transition-all duration-500 opacity-50 hover:opacity-100 
           grayscale hover:grayscale-0" key={partner.name} >
              <Image src={partner.logo} alt={partner.name} width={240} height={100} className="h-8 sm:h-11 md:h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default PartnersSectionEvent;
