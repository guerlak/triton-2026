"use client";
import React from "react";
import Image from "next/image";
import fotoResort from "@/public/images/foto-portobelo-ampla.jpeg";
import { MessageCircle, House, BedDouble, Plane, Car, MapPin, Navigation, Hotel, ShieldCheck, Infinity, ExternalLink, Compass, Utensils, Anchor, Palmtree, Waves } from "lucide-react";
import touristCoast from "@/public/images/mangaratiba-coast.png";
import dict from "../../../dictionaries/en.json";
import Script from "next/script";

const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-triton-dark overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-triton-red font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
          Transform paradise into your experience
        </h2>
        <h3 className="text-4xl md:text-7xl font-black uppercase text-white leading-[0.9] italic mb-8">
          {dict.locations_section.subtitle}
        </h3>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          {dict.locations_section.description}
        </p>
      </div>
      {/* Intro Video Section */}

      {/* Main Destination Selling Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



        {/* Tourism Experience - Beyond the Race */}
        <div className="relative mb-24 group rounded-4xl overflow-hidden border border-white/10 bg-neutral-950 min-h-[550px] flex items-center shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 z-0">
            <Image
              src={touristCoast}
              alt="Mangaratiba Coast"
              className="w-full h-full object-cover opacity-20 lg:opacity-40 group-hover:scale-105 transition-all duration-1000 grayscale-[0.3]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent hidden lg:block"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent lg:hidden"></div>
          </div>

          <div className="relative z-10 p-8 lg:p-20 max-w-4xl">
            <div className="inline-block bg-triton-red/20 text-triton-red px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-[0.2em] mb-6 border border-triton-red/20 backdrop-blur-md">
              Costa Verde Experience
            </div>
            <h3 className="text-4xl lg:text-7xl font-black text-white uppercase italic mb-10 leading-[0.9] tracking-tighter">
              Beyond the <br /> <span className="text-triton-red underline decoration-red-900/30">Competition</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                {
                  icon: Compass,
                  title: "Explore Ilha Grande",
                  desc: "Voted one of the most beautiful islands in the world. Daily boat shuttles take you to crystal clear beaches like Lopes Mendes."
                },
                {
                  icon: Utensils,
                  title: "Gastronomic Journey",
                  desc: "Experience fresh seafood delicacies and traditional 'Caiçara' recipes at waterfront restaurants along the coast."
                },
                {
                  icon: Anchor,
                  title: "Marine Life & Trails",
                  desc: "Dive into calm waters and explore ancient forest trails leading to hidden waterfalls and the Pico da Marambaia."
                },
                {
                  icon: Palmtree,
                  title: "Portobello Safari",
                  desc: "A unique experience for families: visit Brazil's largest resort safari with over 500 animals in natural habitats."
                }
              ].map((poi, idx) => (
                <div key={idx} className="flex gap-5 group/item">
                  <div className="bg-triton-red/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-triton-red/10 group-hover/item:bg-triton-red transition-all duration-300">
                    <poi.icon className="text-triton-red group-hover/item:text-white" size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-black uppercase text-lg italic mb-2 tracking-tight group-hover/item:text-triton-red transition-colors">{poi.title}</h5>
                    <p className="text-gray-400 text-xs font-bold leading-relaxed">{poi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Travel Logistics Infographic Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Plane, title: "GIG Airport", detail: "115 km", sub: "~1h 45min", color: "from-blue-500/20" },
            { icon: Navigation, title: "SDU Airport", detail: "110 km", sub: "~1h 50min", color: "from-green-500/20" },
            { icon: Car, title: "Access", detail: "BR-101", sub: "Easy Connection", color: "from-purple-500/20" },
            { icon: MapPin, title: "Location", detail: "Costa Verde", sub: "Rio de Janeiro", color: "from-red-500/20" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-triton-red/50 transition-all duration-500">
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 text-center">
                <div className="bg-triton-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-triton-red group-hover:scale-110 transition-all duration-500">
                  <item.icon className="text-triton-red group-hover:text-white" size={32} />
                </div>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                <p className="text-2xl font-black text-white italic mb-1 uppercase tracking-tighter">{item.detail}</p>
                <p className="text-sm text-gray-500 font-bold">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Hotel Spotlight */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-linear-to-r from-triton-red to-red-900 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-neutral-950 rounded-4xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
              <div className="lg:col-span-3 relative h-[300px] lg:h-auto">
                <Image
                  src={fotoResort}
                  alt="Portobello Resort"
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-transparent to-transparent hidden lg:block"></div>
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 to-transparent lg:hidden"></div>
              </div>
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Hotel size={16} className="text-triton-red" />
                  <span className="text-triton-red uppercase tracking-[0.2em] text-xs font-black">Official Event Hotel</span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-black text-white uppercase italic mb-6 leading-tight">
                  {dict.locations_section.resort.title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {dict.locations_section.resort.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10">
                  {[
                    dict.locations_section.resort.list_1,
                    dict.locations_section.resort.list_2,
                    dict.locations_section.resort.list_3,
                    "Private Beach Arena"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-triton-red/20 flex items-center justify-center border border-triton-red/30">
                        <ShieldCheck className="text-triton-red" size={12} />
                      </div>
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-tighter">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=552127898000&text=Ol%C3%A1!%20Me%20inscrevi%20no%20TRITON%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20reserva%20em%20Portobello."
                  target="_blank"
                  className="inline-flex items-center justify-center bg-triton-red hover:bg-white text-white hover:text-black px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest transition-all duration-300 group shadow-[0_20px_40px_rgba(223,31,38,0.3)]"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {dict.locations_section.resort.button}
                </a>
                <p className="mt-4 text-[10px] text-gray-500 uppercase font-bold text-center lg:text-left italic">
                  * Discount applied only via reservation center
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Options Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white/5 rounded-4xl p-10 border border-white/10 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-white uppercase italic mb-4">
              {dict.locations_section.other_options.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-bold">
              {dict.locations_section.other_options.description}
            </p>
            <div className="w-12 h-1 bg-triton-red rounded-full"></div>
          </div>

          <a
            href="https://www.airbnb.com.br/s/mangaratiba/homes..."
            target="_blank"
            className="group relative bg-white/5 rounded-4xl p-10 border border-white/10 hover:border-triton-red/50 transition-all py-16"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-triton-red transition-colors">
              <ExternalLink size={24} />
            </div>
            <div className="bg-neutral-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-triton-red transition-all duration-500">
              <House size={32} className="text-triton-red group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tighter">
              {dict.locations_section.other_options.option_1}
            </h4>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Find perfect homes for teams</p>
          </a>

          <a
            href="https://www.booking.com/searchresults..."
            target="_blank"
            className="group relative bg-white/5 rounded-4xl p-10 border border-white/10 hover:border-triton-red/50 transition-all py-16"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-triton-red transition-colors">
              <ExternalLink size={24} />
            </div>
            <div className="bg-neutral-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-triton-red transition-all duration-500">
              <BedDouble size={32} className="text-triton-red group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tighter">
              {dict.locations_section.other_options.option_2}
            </h4>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Browse nearby hotels & inns</p>
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="relative rounded-4xl overflow-hidden shadow-[0_0_50px_rgba(223,31,38,0.2)] border border-white/10 group">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HRkcLP078Hs?si=mmRw6_3vgriOajq3"
                title="Triton Mangaratiba"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 pointer-events-none border-12 border-black/20 rounded-4xl"></div>
          </div>
        </div>


      </div>


    </section>
  );
};
export default LocationsSection;
