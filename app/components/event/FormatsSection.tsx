"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Waves,
  Bike,
  PersonStanding,
  Users,
  Layers,
  User,
  Calendar,
  Clock,
  MapPin,
  Trophy,
} from "lucide-react";
import bikePic from "@/public/images/triton-fotos-prova-bike.jpeg";
import swimPic from "@/public/images/triton-fotos-prova-swim.jpeg";
import runPic from "@/public/images/triton-fotos-prova-run.jpeg";
import dict from "../../../dictionaries/en.json";
import { motion } from "framer-motion";
import Script from "next/script";

const FormatTable: React.FC<{ distances: any[] }> = ({ distances }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/20">
          <th className="py-4 px-4 text-sm font-bold uppercase text-gray-400">
            Distance
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

const FormatsSection: React.FC<{ language: string; formats: any }> = ({
  language,
  formats,
}) => {
  const [activeTab, setActiveTab] = useState<"1" | "2" | "3">("1");
  const [selectedDistance, setSelectedDistance] = useState<
    "sprint" | "middle" | "long"
  >("sprint");

  const getActiveStravaId = (category: any) => {
    if (!category) return null;
    if (category.stravaIds) {
      return (
        category.stravaIds[selectedDistance] ||
        category.stravaIds.sprint ||
        category.stravaIds.middle ||
        category.stravaIds.long
      );
    }
    return category.stravaId || null;
  };

  const renderStravaSection = (category: any, tabId: string) => {
    const hasStravaIds = !!category.stravaIds;
    const activeStravaId = getActiveStravaId(category);

    if (!activeStravaId) {
      return (
        <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 bg-white/5 p-12 text-center flex flex-col items-center justify-center min-h-[300px] group hover:border-triton-red/30 transition-all duration-300">
          <MapPin className="text-triton-red/40 w-12 h-12 mb-4 animate-pulse" />
          <h4 className="text-white font-black uppercase text-xl mb-2">
            {language === "pt-BR" ? "Em breve" : "Course map coming soon"}
          </h4>
          <p className="text-gray-400 text-sm max-w-sm">
            {language === "pt-BR"
              ? "Estamos finalizando os detalhes do percurso."
              : "We are finalizing the route details."}
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-0 md:space-y-4">
        {hasStravaIds && (
          <div className="flex justify-center md:justify-start items-center">
            <div className="bg-white/5 backdrop-blur-xl p-1 rounded-xl inline-flex border border-white/10 shadow-lg gap-1">
              {(["sprint", "middle", "long"] as const).map((dist) => {
                const isAvailable = category.stravaIds[dist];
                if (!isAvailable) return null;
                const isSelected = selectedDistance === dist;
                return (
                  <button
                    key={dist}
                    onClick={() => setSelectedDistance(dist)}
                    className={`relative px-4 py-2 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 z-10 ${isSelected
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                      }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId={`activeDistance-${tabId}`}
                        className="absolute inset-0 bg-triton-red rounded-lg shadow-[0_0_15px_rgba(223,31,38,0.4)]"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-20">{dist}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-gray-400 text-xs ml-4 italic uppercase hidden sm:block">
              {language === "pt-BR"
                ? "Selecione uma distância para ver o mapa do percurso"
                : "Select a distance to view the course map"}
            </p>
          </div>
        )}

        <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
          <div
            key={`${tabId}-${selectedDistance}-${activeStravaId}`}
            dangerouslySetInnerHTML={{
              __html: `
                <div
                  class="strava-embed-placeholder w-full h-[400px]"
                  data-full-width="true"
                  data-embed-type="route"
                  data-embed-id="${activeStravaId}"
                  data-style="standard"
                  data-terrain="3d"
                  data-from-embed="true"
                ></div>
              `,
            }}
          />
          <div className="absolute inset-0 pointer-events-none transition-colors duration-300" />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
            <MapPin size={12} className="text-triton-red" />
            <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">
              Course Map
            </span>
          </div>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).__STRAVA_EMBED_BOOTSTRAP__ === "function"
    ) {
      (window as any).__STRAVA_EMBED_BOOTSTRAP__();
    }
  }, [formats, activeTab, selectedDistance]);

  return (
    <section id="formats" className="py-12 md:py-24 bg-triton-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
            {language === "pt-BR" ? "PERCURSOS" : "COURSES"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
            {language === "pt-BR"
              ? "Novos formatos para um novo desafio"
              : "Formats that redefine the experience"}
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-lg">
            {language === "pt-BR"
              ? "O TRITON 3 é uma prova realizada em 3 dias consecutivos. Uma experiência única que eleva o triathlon a outro nível. O formato permite que atletas, nadadores, ciclistas e corredores participem da prova individualmente. Confira os percursos de cada modalidade e prepare-se para a prova."
              : "The TRITON 3 is a race held over 3 consecutive days. An unique experience that elevates triathlon to another level. The format allows athletes, swimmers, cyclists, and runners to participate in the race individually."}
          </p>
        </div>

        {/* Toggles - Premium Segmented Control */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl inline-flex border border-white/10 shadow-2xl relative overflow-hidden">
            {["1", "2", "3"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "1" | "2" | "3")}
                className={`relative px-3 md:px-10 py-2 md:py-4 rounded-xl text-[10px] md:text-sm font-black uppercase tracking-widest transition-all duration-300 z-10 ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-white"}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabFormats"
                    className="absolute inset-0 bg-triton-red rounded-xl shadow-[0_0_30px_rgba(223,31,38,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {language === "pt-BR" && (
                  <span className="relative z-20">
                    {tab === "1"
                      ? "Natação"
                      : tab === "2"
                        ? "Ciclismo"
                        : "Corrida"}
                  </span>
                )}
                {language === "en" && (
                  <span className="relative z-20">
                    {tab === "1"
                      ? "Swimming"
                      : tab === "2"
                        ? "Cycling"
                        : "Running"}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container - Day Spotlight Decorator */}
        <div className="relative min-h-[600px]">
          <div
            className={`bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md
            ${activeTab === "1" ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Image and Key Info */}
              <div className="space-y-6">
                <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <Image
                    src={swimPic}
                    alt="Swimming"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-triton-red text-white font-black px-4 py-1.5 rounded-lg text-sm uppercase italic tracking-widest shadow-xl">
                      {language === "pt-BR" ? "Dia 1" : "Day 1"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Calendar className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {language === "pt-BR" ? "Data" : "Date"}
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        {formats.swim.date}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Clock className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {language === "pt-BR"
                          ? "Horário de largada"
                          : "Start Time"}
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        {formats.swim.startTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                      {language === "pt-BR"
                        ? "Distâncias disponíveis"
                        : "Available Distances"}
                    </span>
                  </div>

                  {/* Distance Visualization Graph */}
                  <div className="space-y-5">
                    {[
                      { label: "Sprint", val: "1000m", p: 33 },
                      { label: "Middle", val: "2000m", p: 66 },
                      { label: "Long", val: "3000m", p: 100 },
                    ].map((d, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-gray-500 uppercase italic tracking-tighter">
                            {d.label}
                          </span>
                          <span className="text-lg font-black text-white italic">
                            {d.val}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${d.p}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-triton-red shadow-[0_0_10px_rgba(223,31,38,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Column: Descriptions & available Distances (The "Graph" part) */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <MapPin className="text-triton-red" size={24} />
                    <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                      {language === "pt-BR" ? "Natação" : "Swimming"}
                    </h4>
                  </div>
                  <div
                    className="text-gray-400 text-base leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{
                      __html: formats.swim.description,
                    }}
                  />
                </div>
              </div>
            </div>

            {renderStravaSection(formats.swim, "swim")}
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>

          <div
            className={`bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md
            ${activeTab === "2" ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Image and Key Info */}
              <div className="space-y-6">
                <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <Image
                    src={bikePic}
                    alt="Cycling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-triton-red text-white font-black px-4 py-1.5 rounded-lg text-sm uppercase italic tracking-widest shadow-xl">
                      {language === "pt-BR" ? "Dia 2" : "Day 2"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Calendar className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {language === "pt-BR" ? "Data" : "Date"}
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        {formats.bike.date}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Clock className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {language === "pt-BR"
                          ? "Horário de largada"
                          : "Start Time"}
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        {formats.bike.startTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                      {language === "pt-BR"
                        ? "Distâncias disponíveis"
                        : "Available Distances"}
                    </span>
                  </div>

                  {/* Distance Visualization Graph */}
                  <div className="space-y-5">
                    {[
                      { label: "Sprint", val: "30km", p: 33 },
                      { label: "Middle", val: "60km", p: 66 },
                      { label: "Long", val: "90km", p: 100 },
                    ].map((d, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-gray-500 uppercase italic tracking-tighter">
                            {d.label}
                          </span>
                          <span className="text-lg font-black text-white italic">
                            {d.val}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${d.p}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-triton-red shadow-[0_0_10px_rgba(223,31,38,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Descriptions & available Distances (The "Graph" part) */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <MapPin className="text-triton-red" size={24} />
                    <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                      {language === "pt-BR" ? "Ciclismo" : "Cycling"}
                    </h4>
                  </div>

                  <div
                    className="text-gray-400 text-base leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{
                      __html: formats.bike.description,
                    }}
                  />
                </div>
              </div>
            </div>

            {renderStravaSection(formats.bike, "bike")}
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>

          <div
            className={`bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md
            ${activeTab === "3" ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Image and Key Info */}
              <div className="space-y-6">
                <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <Image
                    src={runPic}
                    alt="Running"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-triton-red text-white font-black px-4 py-1.5 rounded-lg text-sm uppercase italic tracking-widest shadow-xl">
                      {language === "pt-BR" ? "Dia 3" : "Day 3"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Calendar className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {language === "pt-BR" ? "Data" : "Date"}
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        {formats.run.date}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Clock className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        {language === "pt-BR"
                          ? "Horário de largada"
                          : "Start Time"}
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        {dict.format_section.toogles_content.day_3.start}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                      Available Distances
                    </span>
                  </div>

                  {/* Distance Visualization Graph */}
                  <div className="space-y-5">
                    {[
                      { label: "Sprint", val: "10km", p: 33 },
                      { label: "Middle", val: "20km", p: 66 },
                      { label: "Long", val: "30km", p: 100 },
                    ].map((d, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-gray-500 uppercase italic tracking-tighter">
                            {d.label}
                          </span>
                          <span className="text-lg font-black text-white italic">
                            {d.val}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${d.p}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-triton-red shadow-[0_0_10px_rgba(223,31,38,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Descriptions & available Distances (The "Graph" part) */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <MapPin className="text-triton-red" size={24} />
                    <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                      {language === "pt-BR" ? "Corrida" : "Run"}
                    </h4>
                  </div>
                  <div
                    className="text-gray-400 text-base leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{
                      __html: formats.run.description,
                    }}
                  />
                </div>
              </div>
            </div>

            {renderStravaSection(formats.run, "run")}
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>
        </div>

        <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4 mt-20">
          {language === "pt-BR"
            ? "Escolha a sua distância"
            : "Choose your distance"}
        </h4>

        <FormatTable distances={dict?.distances?.triton_1} />

        <div className="mt-8 pt-12">
          <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4">
            {language === "pt-BR"
              ? "Opções de competição"
              : "Competition Options"}
          </h4>
          <div className=" px-4 overflow-x-auto snap-x snap-mandatory md:mx-0 md:px-0 md:overflow-visible">
            <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">
              <div className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-start bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
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
                  {language === "pt-BR"
                    ? "Escolha uma das 3 distâncias e encare os 3 dias de competição. Sua posição final no ranking (após os três dias) será a soma da sua colocação em cada modalidade: Natação + Ciclismo + Corrida"
                    : "Choose one of the 3 distances and face the 3 days of competition. Your final ranking position (after the three days) will be the sum of your placement in each modality: Swimming + Cycling + Running."}
                </p>
              </div>

              <div className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-start bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
                <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                  <Users
                    className="text-triton-red group-hover:text-white"
                    size={24}
                  />
                </div>
                <h5 className="text-white font-black uppercase mb-2 text-lg">
                  {language === "pt-BR" ? "Revezamento" : "Relay"}
                </h5>
                <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-3">
                  Sprint
                </span>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {language === "pt-BR"
                    ? "Forme sua equipe (dupla ou trio). Cada um faz uma modalidade. No caso de dupla, um atleta terá que fazer mais de uma modalidade."
                    : "Form your team (duo or trio). Each one does one modality. In case of a duo, an athlete will have to do more than one modality."}
                </p>
              </div>

              {/* Modalidades Individuais */}
              <div className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-start bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
                <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                  <Layers
                    className="text-triton-red group-hover:text-white"
                    size={24}
                  />
                </div>
                <h5 className="text-white font-black uppercase mb-2 text-lg">
                  {language === "pt-BR"
                    ? "Modalidade Avulsa"
                    : "Individual Modality"}
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
                  {language === "pt-BR"
                    ? "Escolha entre natação, ciclismo e/ou corrida, defina a distância e inscreva-se!"
                    : "Choose between swimming, cycling and/or running, define the distance and sign up!"}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {language === "pt-BR"
                    ? "Não pontua para o ranking geral (3 dias), mas concorre à premiação diária por modalidade."
                    : "Does not score for the final ranking (3 days), but competes for daily awards by modality."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
