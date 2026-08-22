"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, ClockArrowUp, Trophy, X, Waves, Bike, Footprints, Eye, ChevronDown } from "lucide-react";

interface LiveAthlete {
  Contest: string;
  Pos: number | string;
  PosAgeGroup?: number | string;
  TritonID?: number;
  Bib: number;
  Flag?: string;
  Name: string;
  Gender: "Men" | "Women" | string;
  AgeGroup: string;
  Swim?: string;
  SwimPoints?: string | number;
  T1?: string;
  Bike?: string;
  BikePoints?: string | number;
  T2?: string;
  Run?: string;
  RunPoints?: string | number;
  Time: string;
  Total?: string | number;
  TotalPoints?: string | number;
  Points?: string | number;
  Gap?: string;
  Nation?: string;
  Triton?: string | number;
}

interface Props {
  initialAthletes: LiveAthlete[];
}

function getAthleteTotalValue(athlete: LiveAthlete): string | number | null {
  if (athlete.Total !== undefined && athlete.Total !== null && athlete.Total !== "") return athlete.Total;
  if (athlete.TotalPoints !== undefined && athlete.TotalPoints !== null && athlete.TotalPoints !== "") return athlete.TotalPoints;
  if (athlete.Points !== undefined && athlete.Points !== null && athlete.Points !== "") return athlete.Points;
  return null;
}

function hasCompletedAll3Modalities(athlete: LiveAthlete): boolean {
  const isValid = (val?: string | number) => {
    if (val === undefined || val === null) return false;
    const str = val.toString().trim().toUpperCase();
    return str !== "" && str !== "--:--:--" && str !== "DNS" && str !== "DNF" && str !== "0";
  };

  return isValid(athlete.Swim) && isValid(athlete.Bike) && isValid(athlete.Run);
}

const AthleteResultsClientWrapperTriton3V2: React.FC<Props> = ({ initialAthletes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState<LiveAthlete | null>(null);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    return {
      ageGroups: Array.from(new Set(initialAthletes.map((a) => a.AgeGroup))).sort(),
      distances: Array.from(new Set(initialAthletes.map((a) => a.Contest))).sort(),
      genders: Array.from(new Set(initialAthletes.map((a) => a.Gender))).sort(),
    };
  }, [initialAthletes]);

  const filteredAthletes = useMemo(() => {
    let result = initialAthletes.filter((athlete) => {
      const query = searchQuery.toLowerCase();
      const nameMatch = athlete.Name.toLowerCase().includes(query) || athlete.Bib.toString().includes(query);
      const ageGroupMatch = selectedAgeGroup === "" || athlete.AgeGroup === selectedAgeGroup;
      const distanceMatch = selectedDistance === "" || athlete.Contest === selectedDistance;
      const genderMatch = selectedGender === "" || athlete.Gender === selectedGender;
      const participatedIn3Modalities = hasCompletedAll3Modalities(athlete);

      return nameMatch && ageGroupMatch && distanceMatch && genderMatch && participatedIn3Modalities;
    });

    return [...result].sort((a, b) => {
      const valA = getAthleteTotalValue(a);
      const valB = getAthleteTotalValue(b);
      if (valA !== null && valB !== null) {
        const numA = typeof valA === "number" ? valA : parseFloat(valA.toString().replace(/[^0-9.-]+/g, "")) || 0;
        const numB = typeof valB === "number" ? valB : parseFloat(valB.toString().replace(/[^0-9.-]+/g, "")) || 0;
        if (numA !== numB) return numA - numB;
      }

      // Handle empty or placeholder times
      const timeA = !a.Time || a.Time === "--:--:--" || a.Time === "" ? "99:99:99" : a.Time;
      const timeB = !b.Time || b.Time === "--:--:--" || b.Time === "" ? "99:99:99" : b.Time;
      return timeA.localeCompare(timeB);
    });
  }, [initialAthletes, searchQuery, selectedAgeGroup, selectedDistance, selectedGender]);

  return (
    <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2">
        <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
          <ClockArrowUp className="w-6 h-6 sm:w-8 sm:h-8" />
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white">
          Full Triton 3 <span className="text-triton-red italic"><br />Ranking Results</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-widest max-w-2xl italic">
          This ranking is exclusively for TRITON athletes competing across all three disciplines over the three days of the event.<br />
          Click the Details icon to view each athlete’s times and rankings for all three disciplines.
        </p>
      </div>

      {/* Filters Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-500 group-focus-within:text-triton-red transition-colors" />
          </div>
          <input
            type="text"
            placeholder="SEARCH BY NAME OR BIB..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-3.5 sm:py-4 pl-12 pr-6 text-xs sm:text-sm font-bold text-white uppercase tracking-wider sm:tracking-widest focus:outline-none focus:border-triton-red/50 focus:ring-1 focus:ring-triton-red/50 transition-all placeholder:text-gray-600 shadow-xl"
          />
        </div>

        {/* Select Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto">
          {/* Distance Filter */}
          <div className="relative">
            <select
              value={selectedDistance}
              onChange={(e) => setSelectedDistance(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              <option value="">All Distances</option>
              {filterOptions.distances.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Gender Filter */}
          <div className="relative">
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              <option value="">All Genders</option>
              {filterOptions.genders.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Age Group Filter */}
          <div className="relative">
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              <option value="">All Categories</option>
              {filterOptions.ageGroups.map((ag) => (
                <option key={ag} value={ag}>{ag}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile Layout (< 768px): Responsive Athlete Card List */}
      <div className="block md:hidden space-y-3">
        {filteredAthletes.length > 0 ? (
          filteredAthletes.map((athlete, i) => {
            const totalVal = getAthleteTotalValue(athlete);
            return (
              <motion.div
                key={athlete.Bib}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedAthlete(athlete)}
                className="bg-neutral-900 border border-white/10 hover:border-triton-red/40 rounded-2xl p-4 transition-all shadow-xl active:scale-[0.99] cursor-pointer space-y-3"
              >
                {/* Top Row: Rank, BIB & Distance Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xs text-triton-red bg-triton-red/10 border border-triton-red/20 px-2.5 py-1 rounded-lg whitespace-nowrap">
                      #{i + 1}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono whitespace-nowrap">
                      BIB #{athlete.Bib}
                    </span>
                  </div>
                  <span className={`inline-block whitespace-nowrap text-[9px] font-black uppercase px-2.5 py-1 rounded-md border tracking-wider ${athlete.Contest === "Sprint Distance"
                    ? "border-white/20 text-black bg-white/80"
                    : athlete.Contest === "Middle Distance"
                      ? "border-red-500/30 text-white bg-red-500/30"
                      : "border-white/10 text-white bg-white/5"
                    }`}>
                    {athlete.Contest}
                  </span>
                </div>

                {/* Middle Row: Name, Category, Nation */}
                <div className="flex items-center justify-between gap-3 pt-1 border-t border-white/5">
                  <div className="space-y-0.5">
                    <h4 className="font-black text-sm text-white uppercase tracking-tight">
                      {athlete.Name}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      <span>{athlete.Gender}</span>
                      <span className="text-gray-600">•</span>
                      <span>{athlete.AgeGroup}</span>
                      {athlete.Nation && (
                        <>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-500 font-mono">({athlete.Nation})</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Points & Details Trigger */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <p className="text-[9px] font-black uppercase tracking-widest text-triton-red whitespace-nowrap">Total Pts</p>
                      <p className="text-base font-black text-white tabular-nums whitespace-nowrap">
                        {athlete.Total ?? totalVal ?? athlete.Time ?? "--"}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 text-gray-400 border border-white/10">
                      <Eye size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="bg-neutral-900 border border-white/5 rounded-2xl p-10 text-center text-gray-500 font-bold uppercase tracking-widest text-xs">
            No athletes found matching your filters.
          </div>
        )}
      </div>

      {/* Desktop Layout (>= 768px): Full Table View */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        key={`${selectedDistance}-${selectedGender}-${selectedAgeGroup}`}
        viewport={{ once: true }}
        className="hidden md:block bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-center border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-black/40 text-[10px] font-black uppercase text-gray-500 border-b border-white/5 tracking-widest">
                <th className="py-6 px-6 text-center w-20 whitespace-nowrap">Pos</th>
                <th className="py-6 px-6 text-left whitespace-nowrap">Athlete</th>
                <th className="py-6 px-6 text-center whitespace-nowrap">Distance</th>
                <th className="py-6 px-6 text-center whitespace-nowrap">Gender</th>
                <th className="py-6 px-6 text-center whitespace-nowrap">Age Group</th>
                <th className="py-6 px-8 text-center text-triton-red whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2 text-triton-red">
                    <Trophy size={14} />
                    <span>Total Points</span>
                  </div>
                </th>
                <th className="py-6 px-4 text-center w-16 whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredAthletes.length > 0 ? (
                filteredAthletes.map((athlete, i) => {
                  const totalVal = getAthleteTotalValue(athlete);
                  return (
                    <tr
                      key={athlete.Bib}
                      onClick={() => setSelectedAthlete(athlete)}
                      className="border-b border-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                    >
                      <td className="py-5 px-4 text-center font-bold text-gray-400 whitespace-nowrap">
                        #{i + 1}
                      </td>
                      <td className="py-5 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <span className="font-black text-sm text-white uppercase tracking-tight group-hover:text-triton-red transition-colors">
                            {athlete.Name}
                          </span>
                          {athlete.Nation && (
                            <span className="text-[10px] font-mono text-gray-500 uppercase">
                              ({athlete.Nation})
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                        <span className={`inline-block whitespace-nowrap text-[10px] font-black uppercase px-2.5 py-1 rounded-md border tracking-wider ${athlete.Contest === "Sprint Distance"
                          ? "border-white/20 text-black bg-white/75"
                          : athlete.Contest === "Middle Distance"
                            ? "border-red-500/30 text-white bg-red-500/30"
                            : "border-black/20 text-white bg-white/5"
                          }`}>
                          {athlete.Contest}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center whitespace-nowrap">
                        <span className="text-[10px] font-black uppercase px-2 py-1 tracking-widest text-gray-400">
                          {athlete.Gender}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center whitespace-nowrap">
                        <span className="font-black text-xs uppercase tracking-widest px-3 py-1 text-gray-300">
                          {athlete.AgeGroup}
                        </span>
                      </td>
                      <td className="py-5 px-8 text-center whitespace-nowrap">
                        <span className="font-black text-sm text-white tabular-nums tracking-widest">
                          {athlete.Total ?? totalVal ?? athlete.Time ?? "--"}
                        </span>
                      </td>
                      <td className="py-5 px-4 text-center whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAthlete(athlete);
                          }}
                          className="p-2 rounded-xl bg-white/5 hover:bg-triton-red/20 text-gray-400 hover:text-white border border-white/10 transition-all shadow-md group-hover:border-triton-red/40"
                          title="View Athlete Details"
                        >
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest">
                    No athletes found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Athlete Details Modal */}
      <AnimatePresence>
        {selectedAthlete && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedAthlete(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900 border border-white/10 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative text-white my-auto flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-white/10 p-5 sm:p-8 relative shrink-0">
                <button
                  onClick={() => setSelectedAthlete(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 hover:bg-triton-red/20 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
                  <span className="bg-triton-red/20 text-triton-red border border-triton-red/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">
                    BIB #{selectedAthlete.Bib}
                  </span>
                  <span className={`inline-block whitespace-nowrap text-[10px] font-black uppercase px-2.5 py-1 rounded-md border ${selectedAthlete.Contest === "Sprint Distance"
                    ? "border-white/20 text-black bg-white/80"
                    : selectedAthlete.Contest === "Middle Distance"
                      ? "border-red-500/30 text-white bg-red-500/30"
                      : "border-black/20 text-white bg-white/5"
                    }`}>
                    {selectedAthlete.Contest}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-white/10 text-gray-400 bg-white/5 whitespace-nowrap">
                    {selectedAthlete.Gender}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-white/10 text-gray-400 bg-white/5 whitespace-nowrap">
                    {selectedAthlete.AgeGroup}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                      {selectedAthlete.Name}
                    </h3>
                    {selectedAthlete.Nation && (
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                        Nation: {selectedAthlete.Nation}
                      </p>
                    )}
                  </div>
                  {selectedAthlete.Flag && (
                    <img
                      src={selectedAthlete.Flag}
                      alt={selectedAthlete.Nation || "Flag"}
                      className="w-9 h-6 object-contain rounded-sm shadow-md border border-white/10 shrink-0"
                    />
                  )}
                </div>
              </div>

              {/* Scrollable Body Content */}
              <div className="p-5 sm:p-8 space-y-6 overflow-y-auto scrollbar-hide">
                {/* Total Points & Time Highlights */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-triton-red/10 border border-triton-red/30 p-3.5 sm:p-4 rounded-2xl text-center">
                    <div className="flex items-center justify-center gap-1.5 text-triton-red text-xs font-black uppercase tracking-widest mb-1">
                      <Trophy size={14} />
                      <span>Total Points</span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {selectedAthlete.TotalPoints ?? selectedAthlete.Total ?? selectedAthlete.Points ?? "--"}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-2xl text-center">
                    <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs font-black uppercase tracking-widest mb-1">
                      <Clock size={14} />
                      <span>Total Time</span>
                    </div>
                    <p className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                      {selectedAthlete.Time || "--"}
                    </p>
                  </div>
                </div>

                {/* Modality Breakdown */}
                <div>
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span>Modality Breakdown (Time & Points)</span>
                    <div className="h-px bg-white/10 grow" />
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Swim */}
                    <div className="bg-neutral-950 border border-cyan-500/20 p-4 rounded-2xl flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-cyan-400 font-black text-xs uppercase tracking-wider">
                          <Waves size={16} />
                          <span>Swim</span>
                        </div>
                        <span className="text-[10px] font-bold text-cyan-400/80 bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                          S
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Time</p>
                        <p className="text-base font-black text-white font-mono">{selectedAthlete.Swim || "--"}</p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Points</span>
                        <span className="text-sm font-black text-cyan-400">
                          {selectedAthlete.SwimPoints !== undefined && selectedAthlete.SwimPoints !== ""
                            ? `${selectedAthlete.SwimPoints} pts`
                            : "--"}
                        </span>
                      </div>
                    </div>

                    {/* Bike */}
                    <div className="bg-neutral-950 border border-amber-500/20 p-4 rounded-2xl flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider">
                          <Bike size={16} />
                          <span>Bike</span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-400/80 bg-amber-950 border border-amber-500/30 px-2 py-0.5 rounded-full">
                          B
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Time</p>
                        <p className="text-base font-black text-white font-mono">{selectedAthlete.Bike || "--"}</p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Points</span>
                        <span className="text-sm font-black text-amber-400">
                          {selectedAthlete.BikePoints !== undefined && selectedAthlete.BikePoints !== ""
                            ? `${selectedAthlete.BikePoints} pts`
                            : "--"}
                        </span>
                      </div>
                    </div>

                    {/* Run */}
                    <div className="bg-neutral-950 border border-emerald-500/20 p-4 rounded-2xl flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-wider">
                          <Footprints size={16} />
                          <span>Run</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400/80 bg-emerald-950 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          R
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Time</p>
                        <p className="text-base font-black text-white font-mono">{selectedAthlete.Run || "--"}</p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Points</span>
                        <span className="text-sm font-black text-emerald-400">
                          {selectedAthlete.RunPoints !== undefined && selectedAthlete.RunPoints !== ""
                            ? `${selectedAthlete.RunPoints} pts`
                            : "--"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Transitions if present */}
                  {(selectedAthlete.T1 || selectedAthlete.T2) && (
                    <div className="mt-4 flex flex-wrap gap-4 sm:gap-6 bg-white/5 p-3 rounded-xl border border-white/5 text-xs justify-center">
                      {selectedAthlete.T1 && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 font-bold uppercase">T1:</span>
                          <span className="font-mono text-white font-bold">{selectedAthlete.T1}</span>
                        </div>
                      )}
                      {selectedAthlete.T2 && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 font-bold uppercase">T2:</span>
                          <span className="font-mono text-white font-bold">{selectedAthlete.T2}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-black/40 border-t border-white/10 p-4 sm:p-5 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedAthlete(null)}
                  className="px-6 py-2.5 rounded-xl bg-triton-red hover:bg-triton-red/80 text-white font-black text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AthleteResultsClientWrapperTriton3V2;
