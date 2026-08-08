"use client";
import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  House,
  BedDouble,
  Hotel,
  ShieldCheck,
  ExternalLink,
  Waves,
  Compass,
  Utensils,
  Anchor,
  Palmtree,
  Plane,
  Navigation,
  Car,
  MapPin,
} from "lucide-react";
import { POI, LogisticItem, ResortInfo } from "@/eventdata";

const ICON_MAP: Record<string, any> = {
  Compass,
  Utensils,
  Anchor,
  Palmtree,
  Plane,
  Navigation,
  Car,
  MapPin,
};

interface LocationsSectionProps {
  locations: {
    description: string;
    experience: {
      image: any;
      pois: POI[];
    };
    logistics: LogisticItem[];
    resort: ResortInfo;
  };
  language: string;
  description?: string;
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ locations, language, description }) => {
  return (
    <section id="locations" className="py-12 md:py-24 bg-triton-dark overflow-hidden">
      <div className="text-center mb-14 hidden sm:block">
        <h2 className="text-triton-red font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
          {language === "pt-BR" ? "SEU PRÓXIMO DESAFIO É NO PARAÍSO" : "YOUR NEXT CHALLENGE IS IN PARADISE"}
        </h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase text-white leading-[0.9] italic mb-8">
          {language === "pt-BR" ? "VIAGEM & DESTINO" : "TRAVEL & DESTINATION"}
        </h3>
        <p className="text-gray-400 max-w-7xl mx-auto text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
      {/* Intro Video Section */}

      {/* Main Destination Selling Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tourism Experience - Beyond the Race */}
        <div className="relative mb-8 group rounded-4xl overflow-hidden border border-white/10 bg-neutral-950 min-h-[550px] flex items-center shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 z-0">
            <Image
              src={locations.experience.image}
              alt="Destination Coast"
              className="w-full h-full object-cover opacity-20 lg:opacity-40 group-hover:scale-105 transition-all duration-1000 grayscale-[0.3]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent hidden lg:block"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent lg:hidden"></div>
          </div>

          <div className="relative z-10 p-8 lg:p-20 max-w-4xl">
            <div className="inline-block bg-triton-red/20 text-triton-red px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-[0.2em] mb-6 border border-triton-red/20 backdrop-blur-md">
              Experience
            </div>
            <h3 className="text-4xl lg:text-5xl font-black text-white uppercase italic mb-10 leading-[0.9] tracking-tighter">
              {language === "pt-BR" ? "Para além da" : "Beyond the"}
              <br />{" "}
              <span className="text-triton-red underline decoration-red-900/30">
                {language === "pt-BR" ? "Competição" : "Race"}
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {locations.experience.pois.map((poi, idx) => {
                const Icon = ICON_MAP[poi.icon] || Compass;
                return (
                  <div key={idx} className="flex gap-5 group/item">
                    <div className="bg-triton-red/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-triton-red/10 group-hover/item:bg-triton-red transition-all duration-300">
                      <Icon
                        className="text-triton-red group-hover/item:text-white"
                        size={24}
                      />
                    </div>
                    <div>
                      <h5 className="text-white font-black uppercase text-lg italic mb-2 tracking-tight group-hover/item:text-triton-red transition-colors">
                        {poi.title}
                      </h5>
                      <p className="text-gray-400 text-sm font-bold leading-relaxed">
                        {poi.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Travel Logistics Infographic Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24">
          {locations.logistics.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || MapPin;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-triton-red/50 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10 text-center">
                  <div className="bg-triton-red/10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-triton-red group-hover:scale-110 transition-all duration-500">
                    <Icon
                      className="text-triton-red group-hover:text-white w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <h4 className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">
                    {item.title}
                  </h4>
                  <p className="text-lg sm:text-2xl font-black text-white italic mb-1 uppercase tracking-tighter">
                    {item.detail}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-bold">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Hotel Spotlight */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-linear-to-r from-triton-red to-red-900 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-neutral-950 rounded-4xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
              <div className="lg:col-span-3 relative h-[300px] lg:h-auto">
                <Image
                  src={locations.resort.image}
                  alt={locations.resort.title}
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-transparent to-transparent hidden lg:block"></div>
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 to-transparent lg:hidden"></div>
              </div>
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Hotel size={16} className="text-triton-red" />
                  <span className="text-triton-red uppercase tracking-[0.2em] text-xs font-black">
                    {language === "pt-BR" ? "Hotel Oficial" : "OFFICIAL HOTEL"}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-black text-white uppercase italic mb-6 leading-tight">
                  {locations.resort.title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {locations.resort.description}
                </p>

                <div className="grid grid-cols-1 gap-y-4 mb-10">
                  {locations.resort.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full bg-triton-red/20 flex items-center justify-center 
                      border border-triton-red/30"
                      >
                        <ShieldCheck className="text-triton-red" size={12} />
                      </div>
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={locations.resort.whatsappLink}
                  target="_blank"
                  className="inline-flex items-center justify-center bg-triton-red hover:bg-white text-white hover:text-black px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest transition-all duration-300 group shadow-[0_20px_40px_rgba(223,31,38,0.3)]"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {locations.resort.buttonText}
                </a>
                {locations.resort.title === "Portobello Resort" && (
                  <p className="mt-4 text-[10px] text-gray-500 uppercase font-bold text-center lg:text-left italic">
                    * Desconto válido apenas via atendimento com consultor. Não
                    aplicável no atendimento automático.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other Options Section */}
        <div className="relative group mb-4">
          <div className="absolute -inset-0.5 bg-linear-to-r from-triton-red/30 to-red-900/30 rounded-4xl blur-md opacity-40 group-hover:opacity-80 transition duration-500"></div>
          <div className="relative bg-neutral-950/80 backdrop-blur-xl rounded-4xl overflow-hidden border border-white/10 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <BedDouble size={16} className="text-triton-red" />
                <span className="text-triton-red uppercase tracking-[0.2em] text-xs font-black">
                  {language === "pt-BR" ? "Hospedagem Alternativa" : "Alternative Lodging"}
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white uppercase italic mb-4">
                {language === "pt-BR" ? "Opções de Acomodação" : "Other Accommodation Options"}
              </h3>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-3xl font-bold">
                {language === "pt-BR" ? (
                  <>
                    Confira algumas opções de acomodação próximas ao local da prova. Acesse o nosso parceiro  <span className="text-white  uppercase italic tracking-wider border-b-2 border-triton-red">Lucid Travel</span> e faça a sua pesquisa!
                  </>
                ) : (
                  <>
                    Staying at the official hotel is not mandatory. Discover other great accommodation options near the race venue. Access our partner <span className="text-white  uppercase italic tracking-wider border-b-2 border-triton-red">Lucid Travel</span> and find and compare the best rates!
                  </>
                )}
              </p>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <a
                href="https://triton.hotelplanner.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center bg-triton-red hover:bg-white text-white hover:text-black px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest transition-all duration-300 shadow-[0_20px_40px_rgba(223,31,38,0.3)] hover:scale-105 transform"
              >
                {language === "pt-BR" ? "Buscar" : "Search"}
                <ExternalLink className="w-5 h-5 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationsSection;
