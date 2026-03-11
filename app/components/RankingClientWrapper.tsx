"use client";
import React, { useState } from "react";
import { Gauge, ArrowRight } from "lucide-react";
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

  const renderFlag = (flagString: string) => {
    const match = flagString?.match(/\[img:(.*?)\]/);
    if (match?.[1]) {
      return (
        <Image
          src={`https://my.raceresult.com${match[1]}`}
          alt="flag" width={24} height={16}
          className="w-6 h-4 object-cover rounded-sm inline-block"
        />
      );
    }
    return null;
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
              const pos = athlete.Pos;
              let medalClass = "text-white";
              if (pos == 1) medalClass = "bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mx-auto";
              if (pos == 2) medalClass = "bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center mx-auto";
              if (pos == 3) medalClass = "bg-amber-700 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto";

              return (
                <tr key={athlete.Bib} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 text-center font-bold">
                    <span className={medalClass}>{athlete.Pos}</span>
                  </td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    {renderFlag(athlete.Flag)}
                    <span className="font-bold text-sm text-white">{athlete.Name}</span>
                  </td>
                  <td className="py-4 px-2 text-center font-black text-white">{athlete.Final}</td>
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
              <h2 className="text-2xl font-bold text-white">{selectedAthlete.Name}</h2>
              <p className="text-red-500 font-black text-xl">Points: {selectedAthlete.Total}</p>
              {/* Detalhes do modal aqui... */}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default RankingClientWrapper;