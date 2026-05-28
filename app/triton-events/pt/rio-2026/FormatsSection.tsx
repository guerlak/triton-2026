"use client";
import React, { useState } from "react";
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
import { motion } from "framer-motion";
import Image from "next/image";
import swimPic from "@/public/images/triton-fotos-prova-swim.jpeg";
import runPic from "@/public/images/triton-fotos-prova-run.jpeg";
import bikePic from "@/public/images/triton-fotos-prova-bike.jpeg";

import Script from "next/script";

import { EventData } from "@/eventdata";
import dict from "@/dictionaries/pt.json";

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
            O <strong>TRITON 3</strong> é uma prova disputada ao longo de três
            dias consecutivos — Uma proposta única que eleva o triathlon a outro
            nível de experiência. Seu formato inovador abre espaço tanto para
            triatletas quanto para especialistas de cada modalidade: nadadores,
            ciclistas e corredores podem competir individualmente, criando um
            cenário dinâmico e imprevisível. Triatletas são desafiados por
            atletas de alto nível em suas especialidades, elevando a
            competitividade e tornando cada prova ainda mais intensa e fora do
            comum.
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
                  {tab === "1"
                    ? "Natação"
                    : tab === "2"
                      ? "Ciclismo"
                      : "Corrida"}
                </span>
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
                      Dia 1
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
                        Data
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        21 AGO (SEXTA)
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Clock className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        Largada
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        15:30
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                      Distâncias
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
                  <div className="flex items-center gap-3 mb-8">
                    <MapPin className="text-triton-red" size={24} />
                    <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                      Natação
                    </h4>
                  </div>

                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    A natação acontece na praia do Portobello Resort, a poucos
                    metros da arena montada no gramado. O mar abrigado costuma
                    oferecer condições ideais, com boa visibilidade e pouca
                    correnteza.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    A largada será em ondas, iniciando pelo SPRINT, seguido do
                    MIDDLE e do LONG, com saída diretamente da areia. O percurso
                    será delimitado por boias e realizado em voltas:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-base leading-relaxed mb-6">
                    <li>SPRINT — 1 volta</li>
                    <li>MIDDLE — 2 voltas</li>
                    <li>LONG — 3 voltas</li>
                  </ul>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    As distâncias MIDDLE e LONG contam com saídas australianas,
                    adicionando ainda mais dinâmica à prova:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-base leading-relaxed mb-6">
                    <li>MIDDLE — 1 saída</li>
                    <li>LONG — 2 saídas</li>
                  </ul>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    Todos os atletas que concluírem a prova de natação receberão
                    medalha de finisher, e os cinco primeiros colocados,
                    masculino e feminino, de cada distância serão premiados.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden mb-6 border border-white /10 group">
              <div
                className="strava-embed-placeholder w-full h-[400px]"
                data-full-width="true"
                data-embed-type="route"
                data-embed-id={eventData.stravaIds?.swim}
                data-style="standard"
                data-terrain="3d"
                data-from-embed="true"
              ></div>
              <div className="absolute inset-0 pointer-events-none transition-colors duration-300" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <MapPin size={12} className="text-triton-red" />
                <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">
                  Course Map
                </span>
              </div>
            </div>
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
                      Dia 2
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
                        Data
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        22 AGO (SáBADO)
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Clock className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        Largada
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        08:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                      Distâncias
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
                <div className="text-gray-400 text-base leading-relaxed">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-triton-red" size={24} />
                    <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                      Ciclismo
                    </h4>
                  </div>

                  <p className="mb-6 mt-8">
                    O percurso de ciclismo acontece na Serra do Piloto, uma das
                    rotas mais icônicas do ciclismo no Rio de Janeiro. A largada
                    será em frente ao Parque de Exposições de Mangaratiba
                    (EXPO), onde há estacionamento seguro disponível. Haverá um
                    ponto de apoio em Macundu, aproximadamente 18 km após a
                    largada, com hidratação e suporte para os atletas.
                  </p>
                  <p className="mb-2 font-black">Pontos do percurso:</p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Retorno do SPRINT: ~4,5 km após Macundu</li>
                    <li>AID Station (MIDDLE e LONG): ~10 km após Macundu</li>
                    <li>
                      Retorno Rio Claro (MIDDLE e LONG): ~7,5 km após o AID
                      Station
                    </li>
                    <li>Chegada: ~3 km após Macundu (sentido Mangaratiba)</li>
                  </ul>

                  <p className="mb-2 mt-4 font-black">
                    Informações adicionais:
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Descida neutralizada: ~14 km</li>
                    <li>Permitido vácuo (uso de bicicleta TT não permitido)</li>
                  </ul>
                  <p className="text-gray-400 text-base leading-relaxed mt-4">
                    Todos os atletas que concluírem a prova de ciclismo
                    receberão medalha de finisher, e os cinco primeiros
                    colocados, masculino e feminino, de cada distância serão
                    premiados.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
              <div
                className="strava-embed-placeholder w-full h-[400px]"
                data-full-width="true"
                data-embed-type="route"
                data-embed-id={eventData.stravaIds?.bike}
                data-style="standard"
                data-terrain="3d"
                data-from-embed="true"
              ></div>
              <div className="absolute inset-0  pointer-events-none  transition-colors duration-300" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <MapPin size={12} className="text-triton-red" />
                <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">
                  Course Map
                </span>
              </div>
            </div>
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
                      Dia 3
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
                        Data
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        23 AGO (DOMINGO)
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <div className="bg-triton-red/10 p-3 rounded-lg">
                      <Clock className="text-triton-red" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        Largada
                      </p>
                      <p className="text-sm font-black uppercase text-white">
                        07:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-triton-red" size={18} />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                      DISTÂNCIAS
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
                <div className="text-gray-400 text-base leading-relaxed ">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-triton-red" size={24} />
                    <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                      CORRIDA
                    </h4>
                  </div>

                  <p className="mb-6">
                    O percurso da corrida tem largada e chegada na arena do
                    evento, localizada no Portobello Resort. Todo o trajeto
                    acontece dentro do complexo do Portobello, e é marcado por
                    uma paisagem cinematográfica com longas retas, perfeitas
                    para performar bem na corrida.
                  </p>

                  <p className="mb-6 font-black">O percurso é em voltas:</p>
                  <ul className="list-disc list-inside mb-6">
                    <li>SPRINT — 1 volta</li>
                    <li>MIDDLE — 2 voltas</li>
                    <li>LONG — 3 voltas</li>
                  </ul>

                  <p className="mb-6">
                    Haverá pontos de hidratação a cada 2,5 km, atendendo os
                    atletas em ambos os sentidos do percurso.
                  </p>
                  <p className="mb-6">
                    Todos os atletas que concluírem a prova de corrida receberão
                    medalha de finisher, e os cinco primeiros colocados,
                    masculino e feminino, de cada distância serão premiados.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
              <div
                className="strava-embed-placeholder w-full h-100"
                data-full-width="true"
                data-embed-type="route"
                data-embed-id={eventData.stravaIds?.run}
                data-style="standard"
                data-terrain="3d"
                data-from-embed="true"
              ></div>
              <div className="absolute inset-0 pointer-events-none  transition-colors duration-300" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <MapPin size={12} className="text-triton-red" />
                <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">
                  Course Map
                </span>
              </div>
            </div>
            <Script
              id="strava-script"
              src="https://strava-embeds.com/embed.js"
            />
          </div>
        </div>

        <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4 mt-20">
          Escolha sua distância
        </h4>

        <FormatTable distances={dict?.distances?.triton_1} />

        <div className="mt-8  pt-12">
          <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4">
            Opções de Competição
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
                Encare sozinho os três dias de disputa. Sua classificação final
                (após os três dias) será a soma das suas colocações em cada
                modalidade: Natação + Ciclismo + Corrida.
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
                REVEZAMENTO
              </h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-3">
                Sprint
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                Monte sua equipe (dupla ou trio). Cada integrante realiza uma
                modalidade. A classificação final da equipe (após os três dias)
                será a soma das colocações de seus integrantes em cada
                modalidade: Natação + Ciclismo + Corrida.
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
                Escolha entre natação, ciclismo e/ou corrida, defina a distância
                e inscreva-se!
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Essa participação não conta para a classificação final (3 dias),
                mas garante disputa por premiação diária em cada modalidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
