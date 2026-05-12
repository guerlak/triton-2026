"use client";
import React, { useState } from "react";
import { Waves, Bike, PersonStanding, Users, Layers, User } from "lucide-react";
import { motion } from "framer-motion";

import EventTabContent from "@/app/components/event/EventTabContent";
import { EventData } from "@/eventdata";
import dict from "../../../dictionaries/en.json";

const FormatTable: React.FC<{ distances: any[] }> = ({ distances }) => (

  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/20">
          <th className="py-4 px-4 text-sm font-bold uppercase text-gray-400">
            Distancia
          </th>
          <th className="py-4 px-4 text-center">
            <Waves className="mx-auto w-6 h-6 text-triton-red" />
          </th>
          <th className="py-4 px-4 text-center">
            <Bike className="mx-auto w-6 h-6 text-triton-red" />
          </th>
          <th className="py-4 px-4 text-center">
            <PersonStanding className="mx-auto w-6 h-6 text-triton-red" />
          </th>
        </tr>
      </thead>
      <tbody>
        {distances?.map((row: any, idx: number) => (
          <tr
            key={idx}
            className="border-b border-white/10 hover:bg-white/5 transition-colors"
          >
            <td className="py-4 px-4 font-black text-xl italic uppercase text-white">
              {row.name}
            </td>
            <td className="py-4 px-4 text-center font-bold text-gray-300">
              {row.swim}
            </td>
            <td className="py-4 px-2 text-center font-bold text-gray-300">
              {row.bike}
            </td>
            <td className="py-4 px-4 text-center font-bold text-gray-300">
              {row.run}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FormatsSection: React.FC<{ eventData: EventData }> = ({ eventData }) => {
  const [activeTab, setActiveTab] = useState<"1" | "2" | "3">("1");

  return (
    <section id="formats" className="py-24 bg-triton-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
            INOVAÇÃO
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
            UM FORMATO QUE REDEFINE A EXPERIÊNCIA
          </h3>
          <p className="text-gray-400 max-w-6xl mx-auto text-lg">
            O TRITON 3 é uma prova disputada ao longo de três dias consecutivos — Uma proposta única que eleva o triathlon a outro nível de experiência. Seu formato inovador abre espaço tanto para triatletas quanto para especialistas de cada modalidade: nadadores, ciclistas e corredores podem competir individualmente, criando um cenário dinâmico e imprevisível. Triatletas são desafiados por atletas de alto nível em suas especialidades, elevando a competitividade e tornando cada prova ainda mais intensa e fora do comum.
          </p>
        </div>

        {/* Toggles - Premium Segmented Control */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl inline-flex border border-white/10 shadow-2xl relative overflow-hidden">
            {["1", "2", "3"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "1" | "2" | "3")}
                className={`relative px-6 md:px-10 py-3 md:py-4 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 z-10 ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-white"}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabFormats"
                    className="absolute inset-0 bg-triton-red rounded-xl shadow-[0_0_30px_rgba(223,31,38,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">
                  {tab === "1" ? "Natação" : tab === "2" ? "Ciclismo" : "Corrida"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container - Day Spotlight Decorator */}
        <div className="relative min-h-[600px]">
          {eventData.formats?.swim && (
            <EventTabContent
              activeTab={activeTab}
              tabId="1"
              data={eventData.formats.swim}
            />
          )}

          {eventData.formats?.bike && (
            <EventTabContent
              activeTab={activeTab}
              tabId="2"
              data={eventData.formats.bike}
            />
          )}

          {eventData.formats?.run && (
            <EventTabContent
              activeTab={activeTab}
              tabId="3"
              data={eventData.formats.run}
            />
          )}
        </div>

        <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4 mt-20">
          choose your distance
        </h4>

        <FormatTable distances={dict?.distances?.triton_1} />

        <div className="mt-8  pt-12">
          <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4">
            Competition Options
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <User
                  className="text-triton-red group-hover:text-white"
                  size={24}
                />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">
                Triathlon
              </h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase 0.5">
                Sprint
              </span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">
                Middle
              </span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">
                Long
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 mt-2">
                {dict.format_section.competition.cards.card_1.description}
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <Users
                  className="text-triton-red group-hover:text-white"
                  size={24}
                />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">
                {dict.format_section.competition.cards.card_2.title}
              </h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-3">
                Sprint
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                {dict.format_section.competition.cards.card_2.description}
              </p>
            </div>

            {/* Modalidades Individuais */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <Layers
                  className="text-triton-red group-hover:text-white"
                  size={24}
                />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">
                {dict.format_section.competition.cards.card_3.title}
              </h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">
                Sprint
              </span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">
                Middle
              </span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">
                Long
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 mt-2">
                {dict.format_section.competition.cards.card_3.description}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                {dict.format_section.competition.cards.card_3.advise}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default FormatsSection;
