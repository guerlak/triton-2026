"use client";
import { Athlete } from "@/model/ranking";

import React, { useState, useMemo } from "react";
import {
  Search,
  Trophy,
  MapPin,
  User,
  FilterX,
  Plus
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Modal from "../ui/Modal";
import MainButton from "../ui/MainButton";
import fotoUrl from "../../public/images/ranking-modal.png";



interface Props {
  initialAthletes: Athlete[];
}

export default function RankingPageClient({ initialAthletes }: Props) {
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");
  const [contestFilter, setContestFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  // Extrair opções únicas para os filtros
  const contestOptions = useMemo(() => {
    const options = new Set(initialAthletes.map(a => a.Contest));
    return ["All", ...Array.from(options)];
  }, [initialAthletes]);

  const filteredAthletes = useMemo(() => {
    return initialAthletes.filter((athlete) => {
      const matchesSearch =
        athlete.Name.toLowerCase().includes(search.toLowerCase()) ||
        athlete.Bib.toString().includes(search);

      const matchesGender = genderFilter === "All" || athlete.Gender === genderFilter;
      const matchesContest = contestFilter === "All" || athlete.Contest === contestFilter;

      return matchesSearch && matchesGender && matchesContest;
    });
  }, [initialAthletes, search, genderFilter, contestFilter]);

  const handleAthleteClick = (athlete: Athlete) => {
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

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20 pt-10 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left mb-10"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 text-triton-red mb-4">
            <Trophy className="w-8 h-8" />
            <span className="font-black uppercase tracking-[0.3em] text-sm">Global Ranking</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            Leaderboard <span className="text-triton-red italic">2026</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Complete ranking of all Triton World Series participants. Use the filters below to find athletes by name, BIB number, category, or distance.
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                Search Athlete / BIB
              </label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-triton-red transition-colors w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ex: John Doe or 3023"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-triton-red focus:ring-1 focus:ring-triton-red/50 transition-all font-bold"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                Gender
              </label>
              <select
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-triton-red transition-all font-bold appearance-none cursor-pointer"
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <option value="All">All Genders</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>

            {/* Contest Filter */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">
                Distance
              </label>
              <select
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-triton-red transition-all font-bold appearance-none cursor-pointer"
                value={contestFilter}
                onChange={(e) => setContestFilter(e.target.value)}
              >
                {contestOptions.map(option => (
                  <option key={option} value={option}>{option === "All" ? "All Distances" : option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Summary & Clear Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
            <span className="text-gray-400 font-bold">
              Showing <span className="text-white">{filteredAthletes.length}</span> athletes
            </span>
            {(search || genderFilter !== "All" || contestFilter !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setGenderFilter("All");
                  setContestFilter("All");
                }}
                className="flex items-center gap-2 text-triton-red hover:text-white transition-colors font-black uppercase tracking-widest text-xs"
              >
                <FilterX size={16} />
                Clear Filters
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Main Table / Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-neutral-900 shadow-2xl rounded-3xl overflow-hidden border border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/60 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10">
                  <th className="py-6 px-4 sm:px-8 text-center w-20">Rank</th>
                  <th className="py-6 px-4">BIB</th>
                  <th className="py-6 px-4">Athlete</th>
                  <th className="py-6 px-4 hidden sm:table-cell">Gender</th>
                  <th className="py-6 px-4 hidden md:table-cell">Distance</th>
                  <th className="py-6 px-4 text-center text-triton-red">Points</th>
                  <th className="py-6 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <AnimatePresence mode="popLayout">
                  {filteredAthletes.length > 0 ? (
                    filteredAthletes.map((athlete, index) => (
                      <motion.tr
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={athlete.Bib}
                        onClick={() => handleAthleteClick(athlete)}
                        className="group hover:bg-white/5 transition-all cursor-pointer"
                      >
                        <td className="py-5 px-4 sm:px-8 text-center">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-black text-xs border ${athlete["Global Standings"] <= 3
                            ? "bg-triton-red border-triton-red text-white"
                            : "border-white/10 text-gray-400"
                            }`}>
                            {athlete["Global Standings"]}
                          </span>
                        </td>
                        <td className="py-5 px-4 font-mono text-xs text-gray-500">#{athlete.Bib}</td>
                        <td className="py-5 px-4">
                          <div className="flex items-center gap-3">
                            {renderFlag(athlete.Country)}
                            <span className="font-bold text-white uppercase tracking-wider">{athlete.Name}</span>
                          </div>
                        </td>
                        <td className="py-5 px-4 hidden sm:table-cell">
                          <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                            {athlete.Gender}
                          </span>
                        </td>
                        <td className="py-5 px-4 hidden md:table-cell">
                          <span className="text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                            {athlete.Contest}
                          </span>
                        </td>
                        <td className="py-5 px-4 text-center">
                          <span className="font-black text-lg text-white group-hover:text-triton-red transition-colors">
                            {athlete["Total Points"]}
                          </span>
                        </td>
                        <td className="py-5 px-4 text-right">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-triton-red/10 text-triton-red group-hover:bg-triton-red group-hover:text-white transition-all shadow-lg shadow-triton-red/0 group-hover:shadow-triton-red/20">
                            <Plus size={20} />
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest">
                        No athletes found with these criteria.
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Reusable Modal (Adapted from RankingClientWrapper) */}
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
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex flex-col items-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">National:</p>
                  <p className="text-xl sm:text-2xl font-black text-white text-center">#{selectedAthlete["National Standings"]} <span className="text-gray-400 text-[10px] block lg:inline-block">({selectedAthlete.Country})</span></p>
                </div>
                <div className="bg-triton-red/10 border border-triton-red/20 p-3 rounded-2xl">
                  <p className="text-[10px] text-triton-red font-black uppercase tracking-[0.2em] mb-1">Total Points</p>
                  <p className="text-xl sm:text-2xl font-black text-white text-center">{selectedAthlete["Total Points"]}</p>
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
                  Event History
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
    </div>
  );
}
