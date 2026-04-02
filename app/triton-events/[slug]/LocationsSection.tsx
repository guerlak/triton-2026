"use client";
import React from "react";
import Image from "next/image";
import fotoResort from "@/public/images/foto-portobelo-ampla.jpeg";
import { MessageCircle, House, BedDouble } from "lucide-react";
import dict from "../../../dictionaries/en.json";
import Script from "next/script";

const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-0 bg-black">
      <div className="h-auto md:h-[650px] flex items-center justify-around px-4 md:px-8 lg:px-16 overflow-x-auto bg-triton-dark">
        <iframe
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/HRkcLP078Hs?si=mmRw6_3vgriOajq3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-triton-red py-10 px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">
          {dict.locations_section.banner.title}
        </h3>
        <p className="text-white/80 max-w-3xl mx-auto">
          {dict.locations_section.banner.description}
        </p>
      </div>


      <div className="text-center py-14 px-4">
        <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
          {dict.locations_section.title}
        </h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
          {dict.locations_section.subtitle}
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {dict.locations_section.description}
        </p>

        <div className="md:max-w-[1200px] grid md:grid-cols-2 grid-cols-1 justify-center mt-20 gap-10 mx-auto">
          <div className="relative h-80 rounded-2xl overflow-hidden mb-8 group">
            <Image
              src={fotoResort}
              alt="Cycling"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-8">
              <h4 className="text-lg font-black italic text-white opacity-80">
                Mangaratiba-RJ
              </h4>
            </div>
          </div>
          <div className="text-left p-4 md:p-0 text-gray-300">
            <h1 className="text-2xl uppercase font-black mb-2">
              {dict.locations_section.resort.title}
            </h1>
            <h2>{dict.locations_section.resort.description}</h2>
            <ul className="space-y-2  mb-8 mt-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>
                {dict.locations_section.resort.list_1}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>
                {dict.locations_section.resort.list_2}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>
                {dict.locations_section.resort.list_3}
              </li>
            </ul>
            <p className="italic text-sm">
              * Desconto aplicado somente pela central de reservas
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=552127898000&text=Ol%C3%A1!%20Me%20inscrevi%20no%20TRITON%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20reserva%20em%20Portobello."
              target="_blank"
              className="mt-4 text-xs md:text-md md:w-85 md:ml-0 bg-triton-red cursor-pointer hover:bg-red-700 text-white font-bold uppercase tracking-widest p-2 py-3 transition-all transform hover:scale-101 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {dict.locations_section.resort.button}
            </a>
          </div>
        </div>

        <div className="mx-auto md:max-w-[1200px] mt-10 bg-linear-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-8 border-l-4 border-triton-red shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">
                {" "}
                {dict.locations_section.other_options.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {dict.locations_section.other_options.description}
              </p>
            </div>
            <div className="flexitems-center ">
              <div className="flex justify-around">
                <a
                  href="https://www.airbnb.com.br/s/mangaratiba/homes?refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&checkin=2026-08-21&checkout=2026-08-23&adults=6&search_type=search_query"
                  target="_blank"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-triton-red">
                      <House size={40} />
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase text-center mt-2">
                      {dict.locations_section.other_options.option_1}
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.booking.com/searchresults.pt-br.html?ss=Mangaratiba%2C+Estado+do+Rio+de+Janeiro%2C+Brasil&efdco=1&label=pt-br-booking-desktop-9_uvqir24qvA6x6xGiDvCQS652796015463%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9198491%3Ali%3Adec%3Adm&aid=2311236&lang=pt-br&sb=1&src_elem=sb&src=index&dest_id=-653332&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=xb&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=e9e06e426a490600&ac_meta=GhBlOWUwNmU0MjZhNDkwNjAwIAAoATICeGI6Cm1hbmdhcnRpYmE%3D&checkin=2026-08-21&checkout=2026-08-23&group_adults=2&no_rooms=1&group_children=0"
                  target="_blank"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-triton-red">
                      <BedDouble size={40} />
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase text-center mt-2">
                      {dict.locations_section.other_options.option_2}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationsSection;
