"use client";
import React, { useState } from "react";
import { Gauge, ArrowRight, Trophy, MapPin, User, Hash, Flag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../ui/Modal";
import fotoUrl from "../../public/images/ranking-modal.png";
import { Athlete } from "./RankingSection"; // Importa a interface
import MainButton from "../ui/MainButton";

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

  const renderFlag = (countryCode: string) => {
    if (!countryCode) return null;
    return (
      <img
        src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
        alt={countryCode}
        className="w-6 h-4 object-contain rounded-sm inline-block"
      />
    );
  };

  const renderTable = (athletes: Athlete[]) => {
    if (athletes.length === 0) return null;

    return (
      <div className="bg-neutral-900 shrink-0 w-[80vw] border border-white/5 rounded-3xl overflow-hidden shadow-2xl mb-12 sm:w-140 snap-center">
        <table className="w-full text-left border-collapse">
          <caption className="p-4 font-bold text-white bg-white/5">
            {athletes[0]?.Gender} - {athletes[0]?.Contest}
          </caption>
          <thead>
            <tr className="bg-black/40 text-xs font-bold uppercase text-gray-500 border-b border-white/5">
              <th className="py-5 px-6 text-center">Pos</th>
              <th className="py-5 px-6">Athlete</th>
              <th className="py-5 px-6 text-center text-triton-red ">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {athletes.slice(0, 3).map((athlete) => {
              const pos = athlete["Global Standings"];
              let medalClass = "text-white";
              if (pos == 1) medalClass = "bg-yellow-600 border border-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mx-auto";
              if (pos == 2) medalClass = "bg-gray-500 border border-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center mx-auto";
              if (pos == 3) medalClass = "bg-amber-900 border border-amber-700 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto";

              return (
                <tr key={athlete.Bib} onClick={() => handleEditClick(athlete)} className="cursor-pointer border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 text-center font-bold">
                    <span className={medalClass}>{pos}</span>
                  </td>
                  <td className="py-4 px-2">
                    {renderFlag(athlete.Country)}
                    <span className="font-bold text-sm text-white ml-2">{athlete.Name}</span>
                  </td>
                  <td className="py-4 px-2 text-center font-black text-white">{athlete["Total Points"]}</td>
                  <td className="py-4 px-6 text-right hidden md:block">
                    <Gauge size={30} className="text-triton-red" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full overflow-hidden">
          {/* Women's Column */}
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300 text-center font-black uppercase tracking-widest text-lg mb-4 px-4 md:px-0">Women</h3>
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory gap-4 no-scrollbar px-4 md:px-0">
              {renderTable(athleteFilter("Women", "Sprint Distance"))}
              {renderTable(athleteFilter("Women", "Middle Distance"))}
              {renderTable(athleteFilter("Women", "Long Distance"))}
            </div>
          </div>

          {/* Men's Column */}
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300 text-center font-black uppercase tracking-widest text-lg mb-4 px-4 md:px-0">Men</h3>
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory gap-4 no-scrollbar px-4 md:px-0">
              {renderTable(athleteFilter("Men", "Sprint Distance"))}
              {renderTable(athleteFilter("Men", "Middle Distance"))}
              {renderTable(athleteFilter("Men", "Long Distance"))}
            </div>
          </div>
        </div>

      </motion.div>

      <div className="text-center mt-10">
        <MainButton href="/ranking">Full Ranking</MainButton>
      </div>

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
                  {renderFlag(selectedAthlete.Country)}
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

              {/* National Standing Footer */}

            </div>
          </div>
        )}
      </Modal>

    </>
  );
};

export default RankingClientWrapper;