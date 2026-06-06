"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Waves, Bike, PersonStanding, Users, User, Shuffle, MapPin, Trophy } from "lucide-react";
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

const FormatsSection: React.FC<{ language: string, formats: any }> = ({ language, formats }) => {
  const [activeTab, setActiveTab] = useState<"1" | "2" | "3">("1");

  React.useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).__STRAVA_EMBED_BOOTSTRAP__ === "function") {
      (window as any).__STRAVA_EMBED_BOOTSTRAP__();
    }
  }, [formats, activeTab]);

  return (
    <section id="formats" className="py-24 bg-triton-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
            {language === "pt-BR" ? "Percursos" : "COURSES"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
            {language === "pt-BR" ? "Explore cada trecho da prova" : "EXPLORE EVERY SECTION OF THE COURSE"}
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-lg">
            {language === "pt-BR" ? "Conhecer os percursos é parte fundamental da preparação para o TRITON. Estudar cada segmento permite que você desenvolva melhor sua estratégia, gerencie seu ritmo e chegue mais preparado para os desafios da competição. Todos os percursos do TRITON são realizados em voltas, proporcionando maior controle operacional, melhor experiência para o público e máxima segurança para os atletas ao longo de toda a prova." : "Understanding the course is a fundamental part of your TRITON preparation. Studying each segment allows you to refine your race strategy, manage your pace effectively, and arrive fully prepared for the challenges ahead. All TRITON courses are designed as multi-lap circuits, providing greater operational control, an enhanced spectator experience, and maximum athlete safety throughout the race."}
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
                {language === "pt-BR" &&
                  <span className="relative z-20">
                    {tab === "1" ? "Natação" : tab === "2" ? "Ciclismo" : "Corrida"}
                  </span>
                }
                {language === "en" &&
                  <span className="relative z-20">
                    {tab === "1" ? "Swimming" : tab === "2" ? "Cycling" : "Running"}
                  </span>
                }
              </button>
            ))}
          </div>
        </div>

        {/* Content Container - Day Spotlight Decorator */}
        <div className="relative min-h-[600px]">
          <div className={`bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md
            ${activeTab === "1" ? "block" : "hidden"}`}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Image and Key Info */}
              <div className="space-y-6">
                <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <Image
                    src={formats.swim.image}
                    alt="Swimming"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6" >

                  </div>
                </div>


                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">{language === "pt-BR" ? "Distâncias disponíveis" : "Available Distances"}</span>
                  </div>

                  {/* Distance Visualization Graph */}
                  <div className="space-y-5">
                    {formats.swim.distances.map((d: { label: string; val: string; p: number }, i: number) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-gray-500 uppercase italic tracking-tighter">{d.label}</span>
                          <span className="text-lg font-black text-white italic">{d.val}</span>
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
                    dangerouslySetInnerHTML={{ __html: formats.swim.description }}
                  />
                </div>

              </div>
            </div>

            {formats.swim.stravaId ? (
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                <div
                  className="strava-embed-placeholder w-full h-[400px]"
                  data-full-width="true"
                  data-embed-type="route"
                  data-embed-id={formats.swim.stravaId}
                  data-style="standard"
                  data-terrain="3d"
                  data-from-embed="true"
                ></div>
                <div className="absolute inset-0 pointer-events-none transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <MapPin size={12} className="text-triton-red" />
                  <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">Course Map</span>
                </div>
              </div>
            ) : (
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
            )}
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>

          <div className={`bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md
            ${activeTab === "2" ? "block" : "hidden"}`}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Image and Key Info */}
              <div className="space-y-6">
                <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <Image
                    src={formats.bike.image}
                    alt="Cycling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6" >

                  </div>
                </div>



                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">{language === "pt-BR" ? "Distâncias disponíveis" : "Available Distances"}</span>
                  </div>

                  {/* Distance Visualization Graph */}
                  <div className="space-y-5">
                    {formats.bike.distances.map((d: { label: string; val: string; p: number }, i: number) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-gray-500 uppercase italic tracking-tighter">{d.label}</span>
                          <span className="text-lg font-black text-white italic">{d.val}</span>
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
                    dangerouslySetInnerHTML={{ __html: formats.bike.description }}
                  />
                </div>
              </div>
            </div>

            {formats.bike.stravaId ? (
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                <div
                  className="strava-embed-placeholder w-full h-[400px]"
                  data-full-width="true"
                  data-embed-type="route"
                  data-embed-id={formats.bike.stravaId}
                  data-style="standard"
                  data-terrain="3d"
                  data-from-embed="true"
                ></div>
                <div className="absolute inset-0 pointer-events-none transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <MapPin size={12} className="text-triton-red" />
                  <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">Course Map</span>
                </div>
              </div>
            ) : (
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
            )}
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>

          <div className={`bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md
            ${activeTab === "3" ? "block" : "hidden"}`}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Image and Key Info */}
              <div className="space-y-6">
                <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <Image
                    src={formats.run.image}
                    alt="Running"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                </div>



                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">Available Distances</span>
                  </div>

                  {/* Distance Visualization Graph */}
                  <div className="space-y-5">
                    {formats.run.distances.map((d: { label: string; val: string; p: number }, i: number) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] font-bold text-gray-500 uppercase italic tracking-tighter">{d.label}</span>
                          <span className="text-lg font-black text-white italic">{d.val}</span>
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
                    dangerouslySetInnerHTML={{ __html: formats.run.description }}
                  />
                </div>
              </div>
            </div>

            {formats.run.stravaId ? (
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                <div
                  className="strava-embed-placeholder w-full h-[400px]"
                  data-full-width="true"
                  data-embed-type="route"
                  data-embed-id={formats.run.stravaId}
                  data-style="standard"
                  data-terrain="3d"
                  data-from-embed="true"
                ></div>
                <div className="absolute inset-0 pointer-events-none transition-colors duration-300" />
                <div className="absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <MapPin size={12} className="text-triton-red" />
                  <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">Course Map</span>
                </div>
              </div>
            ) : (
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
            )}
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>

        </div>

        <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4 mt-20">
          {language === "pt-BR" ? "Escolha a sua distância" : "Choose your distance"}
        </h4>

        <FormatTable distances={formats.distanceTable} />

        <div className="mt-8  pt-12">
          <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4">
            {language === "pt-BR" ? "Opções de competição" : "Competition Options"}
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
                {language === "pt-BR" ? "Encare sozinho o triathlon completo, escolhendo uma das 3 distâncias disponíveis. Esse formato conta com premiação no dia e também é classificatório para a final mundial, além de somar pontos para o ranking global do TRITON." : "Take on the full triathlon challenge on your own by choosing one of the three available distances. This format includes age-group awards, earns points toward the TRITON Global Ranking, and serves as a qualifier for the TRITON World Finals."}
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
                {language === "pt-BR" ? "Revezamento" : "Corporate Relay"}
              </h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-3">
                SPRINT
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">{language === "pt-BR" ? "Forme sua equipe (dupla ou trio). Cada um faz uma modalidade. No caso de dupla, um atleta terá que fazer mais de uma modalidade. Esse formato conta com premiação no dia, mas não classifica para a final mundial" : "Build your team of two or three athletes, with each participant completing one or more disciplines. This format includes age-group awards and serves as a qualifier for the TRITON World Finals."}
              </p>
            </div>

            {/* Modalidades Individuais */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <Shuffle
                  className="text-triton-red group-hover:text-white"
                  size={24}
                />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">
                MIX&MATCH
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
                {language === "pt-BR" ? "Personalize a sua prova com as distancias pré-estabelecidas. Mescle as modalidades de acordo com o seu interesse. Exemplo: Natação SPRINT - Bike MIDDLE - Corrida LONG." : "Create your own race experience by combining predefined distances across the three disciplines. For example: SPRINT Swim • MIDDLE Bike • LONG Run."}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                {language === "pt-BR" ? "Formato participativo, não concorre a premiação." : "This is a participation-based format and is not eligible for awards or rankings."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
