"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { EventFormatDetail } from "@/eventdata";

interface EventTabContentProps {
  activeTab: string;
  tabId: string;
  data: EventFormatDetail;
}

const EventTabContent: React.FC<EventTabContentProps> = ({
  activeTab,
  tabId,
  data,
}) => {
  return (
    <div className={activeTab === tabId ? "block" : "hidden"}>
      <div className="bg-white/5 text-white p-6 block w-full h-full rounded-2xl border border-white/10 backdrop-blur-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left Column: Image and Key Info */}
        <div className="space-y-6">
          <div className="w-full h-[300px] mb-4 rounded-2xl relative overflow-hidden group shadow-2xl">
            <Image
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-triton-red text-white font-black px-4 py-1.5 rounded-lg text-sm uppercase italic tracking-widest shadow-xl">
                {data.day}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="bg-triton-red/10 p-3 rounded-lg">
                <Calendar className="text-triton-red" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Data</p>
                <p className="text-sm font-black uppercase text-white">{data.date}</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="bg-triton-red/10 p-3 rounded-lg">
                <Clock className="text-triton-red" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Horário de Largada</p>
                <p className="text-sm font-black uppercase text-white">{data.startTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="text-triton-red" size={18} />
              <span className="text-xs font-black uppercase tracking-widest text-gray-300">Distâncias Disponíveis</span>
            </div>

            {/* Distance Visualization Graph */}
            <div className="space-y-5">
              {data.distances.map((d, i) => (
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

        {/* Right Column: Descriptions */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-triton-red" size={24} />
              <h4 className="text-2xl font-black uppercase italic text-white leading-none">
                {data.title}
              </h4>
            </div>
            <div className="space-y-4">
              {data.description.split("\n\n").map((para, idx) => (
                <p key={idx} className="text-gray-400 text-base leading-relaxed">
                  {para}
                </p>
              ))}
              {data.details && (
                <ul className="list-disc list-inside text-gray-400 text-base leading-relaxed space-y-1 mt-4">
                  {data.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group h-[400px]">
        <iframe
          src={`https://www.strava.com/routes/${data.stravaId}/embed?style=standard&terrain=3d`}
          width="100%"
          height="400"
          frameBorder="0"
          allowTransparency={true}
          scrolling="no"
          className="w-full h-full"
          title={`Strava Route - ${data.title}`}
        ></iframe>
        <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors duration-300" />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
          <MapPin size={12} className="text-triton-red" />
          <span className="text-[10px] font-bold uppercase text-white tracking-widest italic">Course Map</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EventTabContent;
