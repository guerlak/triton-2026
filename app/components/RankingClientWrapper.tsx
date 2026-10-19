"use client";
import React, { useState } from "react";
import { Plus, User, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../ui/Modal";
import fotoUrl from "../../public/images/ranking-modal.png";
import { Athlete } from "../../model/ranking";
import { CountryFlag } from "@/app/utils/CountryFlag";

interface Props {
  initialAthletes: Athlete[];
}

const RankingClientWrapper: React.FC<Props> = ({ initialAthletes }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  const athleteFilter = (gender: string, distance: string) => {
    return initialAthletes.filter(
      (a) => a.Gender === gender && a.Contest === distance
    );
  };

  const handleEditClick = (athlete: Athlete) => {
    setSelectedAthlete(athlete);
    setIsModalOpen(true);
  };


  const renderTable = (athletes: Athlete[]) => {
    if (athletes.length === 0) return null;

    return (
      <div className="bg-neutral-900 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shrink-0 w-[82vw] max-w-[340px] sm:max-w-none sm:w-[420px] md:w-full snap-start transition-all hover:border-white/10">
        {/* Card Header */}
        <div className="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-triton-red animate-pulse" />
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
              {athletes[0]?.Gender} • {athletes[0]?.Contest}
            </h4>
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-gray-400 bg-black/40 px-2 py-0.5 sm:py-1 rounded-md border border-white/5">
            Top 3
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/60 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 whitespace-nowrap">
                <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center w-12 sm:w-16">Pos</th>
                <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-4">Athlete</th>
                <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center text-triton-red">Total</th>
                <th className="hidden sm:block py-2.5 sm:py-3.5 px-2 sm:px-4 text-right w-10 sm:w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {athletes.slice(0, 3).map((athlete) => {
                const pos = athlete["Global Standings"];
                return (
                  <tr
                    key={athlete.Name}
                    onClick={() => handleEditClick(athlete)}
                    className="cursor-pointer hover:bg-white/5 active:bg-white/10 transition-colors group whitespace-nowrap"
                  >
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-black text-xs ${pos == 1
                          ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                          : pos == 2
                            ? "bg-slate-300 text-black shadow-sm"
                            : pos == 3
                              ? "bg-amber-700 text-white shadow-sm"
                              : "text-gray-300 bg-white/10"
                          }`}
                      >
                        {pos}
                      </span>
                    </td>
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <CountryFlag countryCode={athlete.Country} className="w-5 sm:w-6 h-3.5 sm:h-4 shadow-sm shrink-0" />
                        <span className="font-bold text-xs sm:text-sm text-white uppercase tracking-tight truncate group-hover:text-triton-red transition-colors">
                          {athlete.Name}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center">
                      <span className="font-mono font-black text-xs sm:text-base text-white group-hover:text-triton-red transition-colors">
                        {athlete["Total Points"]}
                      </span>
                    </td>
                    <td className="hidden sm:block py-2.5 sm:py-3.5 px-2 sm:px-4 text-right">
                      <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-triton-red/10 text-triton-red group-hover:bg-triton-red group-hover:text-white transition-all shadow-sm">
                        <Plus size={16} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-around"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-full">
          {/* Women's Column */}
          <div className="flex flex-col gap-3 sm:gap-4">

            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory gap-4 custom-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {renderTable(athleteFilter("Women", "Sprint"))}
              {renderTable(athleteFilter("Women", "Middle"))}
              {renderTable(athleteFilter("Women", "Long"))}
            </div>
          </div>

          {/* Men's Column */}
          <div className="flex flex-col gap-3 sm:gap-4">

            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory gap-4 custom-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {renderTable(athleteFilter("Men", "Sprint"))}
              {renderTable(athleteFilter("Men", "Middle"))}
              {renderTable(athleteFilter("Men", "Long"))}
            </div>
          </div>
        </div>

      </motion.div>


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="max-w-5xl">
        {selectedAthlete && (
          <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden bg-neutral-950">
            {/* Left Column: Image & Profile Summary */}
            <div className="relative h-[300px] md:h-auto border-b md:border-b-0 md:border-r border-white/10">
              <Image
                src={fotoUrl}
                alt="Athlete"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-4 mb-3">
                  {CountryFlag({ countryCode: selectedAthlete.Country })}
                  <span className="text-triton-red font-black uppercase tracking-widest text-sm">
                    {selectedAthlete.Country} Athlete
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-2 wrap-break-word">
                  {selectedAthlete.Name}
                </h2>
                <div className="flex items-center gap-2 text-white/60 font-bold uppercase tracking-wider text-xs bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                  <User size={14} className="text-triton-red" />
                  {selectedAthlete.Contest}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Stats */}
            <div className="p-6 md:p-10 flex flex-col gap-8 md:max-h-[85vh] md:overflow-y-auto no-scrollbar">
              {/* Top Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Global Standing</p>
                  <p className="text-3xl font-black text-white text-center">#{selectedAthlete["Global Standings"]}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">National Ranking:</p>
                  <p className="text-xl sm:text-2xl font-black text-white text-center">#{selectedAthlete["National Standings"]} <span className="text-gray-400 text-sm">({selectedAthlete.Country})</span></p>
                </div>
                <div className="bg-triton-red/10 border border-triton-red/20 p-3 rounded-2xl">
                  <p className="text-[10px] text-triton-red font-black uppercase tracking-[0.2em] mb-1">Total Points</p>
                  <p className="text-xl sm:text-3xl font-black text-white text-center">{selectedAthlete["Total Points"]}</p>
                </div>
              </div>

              {/* Discipline Breakdown */}
              <div>
                <h3 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
                  <div className="h-px bg-white/10 grow" />
                  Discipline Rankings
                  <div className="h-px bg-white/10 grow" />
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Swim", rank: selectedAthlete["Swim Ranking"], color: "blue" },
                    { label: "Bike", rank: selectedAthlete["Bike Ranking"], color: "emerald" },
                    { label: "Run", rank: selectedAthlete["Run Ranking"], color: "amber" }
                  ].map((disc) => (
                    <div key={disc.label} className="bg-black/40 p-4 rounded-2xl border border-white/5 text-center transition-transform hover:scale-105">
                      <p className="text-[10px] text-gray-500 font-black uppercase mb-2 tracking-widest">{disc.label}</p>
                      <p className="text-xl font-black text-white">#{disc.rank}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Race History */}
              <div>
                <h3 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
                  <div className="h-px bg-white/10 grow" />
                  Top 3 Results
                  <div className="h-px bg-white/10 grow" />
                </h3>
                <div className="grid gap-2">
                  {[
                    { label: "Salvador, BA", value: selectedAthlete.Salvador },
                    { label: "Jiangsu-qidong", value: selectedAthlete.China },
                    { label: "Rio de Janeiro, RJ", value: selectedAthlete.Rio },
                    { label: "Lisboa", value: selectedAthlete.Lisboa },
                  ].map((race, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 group transition-colors hover:bg-white/10">
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-triton-red opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{race.label}</span>
                      </div>
                      <span className="text-white font-black text-sm">
                        {(race.value && race.value !== "-") ? race.value : "---"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </Modal>

    </>
  );
};

export default RankingClientWrapper;