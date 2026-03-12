"use client";
import React, { useState } from "react";
import { Gauge, ArrowRight, Trophy, MapPin, User, Hash, Flag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
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
      <div className="bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl mb-12 w-full sm:w-140">
        <table className="w-full text-left border-collapse">
          <caption className="p-4 font-bold text-white bg-white/5">
            {athletes[0]?.Gender} - {athletes[0]?.Contest}
          </caption>
          <thead>
            <tr className="bg-black/40 text-xs font-bold uppercase text-gray-500 border-b border-white/5">
              <th className="py-5 px-6 text-center">Pos</th>
              <th className="py-5 px-6">Athlete</th>
              <th className="py-5 px-6 text-center text-triton-red">Total</th>
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
                <tr key={athlete.Bib} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 text-center font-bold">
                    <span className={medalClass}>{pos}</span>
                  </td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    {renderFlag(athlete.Country)}
                    <span className="font-bold text-sm text-white">{athlete.Name}</span>
                  </td>
                  <td className="py-4 px-2 text-center font-black text-white">{athlete["Total Points"]}</td>
                  <td className="py-4 px-6 text-right">
                    <button onClick={() => handleEditClick(athlete)}>
                      <Gauge size={30} className="text-triton-red cursor-pointer" />
                    </button>
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-around"
      >
        {renderTable(athleteFilter("Women", "Sprint Distance"))}
        {renderTable(athleteFilter("Men", "Sprint Distance"))}
        {renderTable(athleteFilter("Women", "Middle Distance"))}
        {renderTable(athleteFilter("Men", "Middle Distance"))}
        {renderTable(athleteFilter("Women", "Long Distance"))}
        {renderTable(athleteFilter("Men", "Long Distance"))}
        {/* ... outros filtros ... */}
      </motion.div>

      <div className="p-12 text-center">
        <MainButton href="/ranking">Check The Full Ranking</MainButton>

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedAthlete && (
          <div className="max-w-sm bg-neutral-900 rounded-2xl overflow-hidden">
            <div className="relative">
              <Image src={fotoUrl} alt="Athlete" className="w-full" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-neutral-900 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">{selectedAthlete.Name}</h2>
                <div className="flex items-center gap-2">
                  {renderFlag(selectedAthlete.Country)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">


              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <User className="text-triton-red w-5 h-5" />
                  <p className="font-bold uppercase text-sm tracking-wide">
                    {selectedAthlete.Contest}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Flag className="text-triton-red w-5 h-5" />
                  <p className="font-bold uppercase text-sm tracking-wide">
                    Global Standing: <span className="text-white">{selectedAthlete["Global Standings"]}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Flag className="text-triton-red w-5 h-5" />
                  <p className="font-bold uppercase text-sm tracking-wide">
                    National Standing ({selectedAthlete.Country}): <span className="text-white">{selectedAthlete["National Standings"]}</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 pb-4">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Discipline Rankings</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-black/40 p-2 rounded-xl border border-white/5 text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Swim</p>
                    <p className="text-white font-black text-md tracking-wider">#{selectedAthlete["Swim Ranking"]}</p>
                  </div>
                  <div className="bg-black/40 p-2 rounded-xl border border-white/5 text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Bike</p>
                    <p className="text-white font-black text-md tracking-wider">#{selectedAthlete["Bike Ranking"]}</p>
                  </div>
                  <div className="bg-black/40 p-2 rounded-xl border border-white/5 text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Run</p>
                    <p className="text-white font-black text-md tracking-wider">#{selectedAthlete["Run Ranking"]}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Season Performance</h3>
                <div className="space-y-0 text-gray-400">
                  {[
                    { label: "Salvador, BA", value: selectedAthlete.Salvador },
                    { label: "Jiangsu-qidong", value: selectedAthlete.China },
                    { label: "Rio de Janeiro, RJ", value: selectedAthlete.Rio },
                    { label: "Lisboa", value: selectedAthlete.Lisboa },
                  ].map((race, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 transition-colors hover:bg-white/5 px-1">
                      <span className="text-xs font-bold uppercase tracking-widest">{race.label}</span>
                      <span className="text-white font-black text-sm">{(race.value && race.value !== "-") ? race.value : "---"}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 bg-triton-red/10 border border-triton-red/20 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-triton-red font-black uppercase tracking-widest">Total Season Points</p>
                  <p className="text-3xl font-black text-white">{selectedAthlete["Total Points"]}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Overall</p>
                  <p className="text-xl font-black text-white">#{selectedAthlete["Global Standings"]}</p>
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