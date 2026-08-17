"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ClockArrowUp } from "lucide-react";

interface LiveAthlete {
  Contest: string;
  Pos: number;
  TritonID: number;
  Bib: number;
  Flag: string;
  Name: string;
  Gender: "Men" | "Women";
  AgeGroup: string;
  Swim: string;
  T1: string;
  Bike: string;
  T2: string;
  Run: string;
  Time: string;
  Gap: string;
}

interface Props {
  initialAthletes: LiveAthlete[];
}

const LiveResultsClientWrapper: React.FC<Props> = ({ initialAthletes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

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
      const nameMatch =
        athlete.Name.toLowerCase().includes(query) ||
        athlete.Bib.toString().includes(query);
      const ageGroupMatch = selectedAgeGroup === "" || athlete.AgeGroup === selectedAgeGroup;
      const distanceMatch = selectedDistance === "" || athlete.Contest === selectedDistance;
      const genderMatch = selectedGender === "" || athlete.Gender === selectedGender;

      return nameMatch && ageGroupMatch && distanceMatch && genderMatch;
    });

    // Always sort by time (fastest first)
    return [...result].sort((a, b) => {
      // Handle empty or placeholder times
      const timeA = !a.Time || a.Time === "--:--:--" || a.Time === "" ? "99:99:99" : a.Time;
      const timeB = !b.Time || b.Time === "--:--:--" || b.Time === "" ? "99:99:99" : b.Time;
      return timeA.localeCompare(timeB);
    });
  }, [initialAthletes, searchQuery, selectedAgeGroup, selectedDistance, selectedGender]);

  return (
    <div className="mt-12 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center gap-4 text-triton-red">
          <div className="h-px w-12 bg-triton-red/30" />
          <ClockArrowUp className="w-8 h-8" />
          <div className="h-px w-12 bg-triton-red/30" />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-[0.2em] text-white">
          Full <span className="text-triton-red italic">Results</span>
        </h2>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest max-w-md italic">
          Check all the  results of athletes participating in the event.
        </p>
      </div>
      {/* Filters Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
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
            className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-white uppercase tracking-widest focus:outline-none focus:border-triton-red/50 focus:ring-1 focus:ring-triton-red/50 transition-all placeholder:text-gray-600 shadow-xl"
          />
        </div>

        {/* Select Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
          {/* Distance Filter */}
          <div className="relative">
            <select
              value={selectedDistance}
              onChange={(e) => setSelectedDistance(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white uppercase tracking-widest appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer"
            >
              <option value="">All Distances</option>
              {filterOptions.distances.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div className="relative">
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white uppercase tracking-widest appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer"
            >
              <option value="">All Genders</option>
              {filterOptions.genders.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Age Group Filter */}
          <div className="relative">
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-white uppercase tracking-widest appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer"
            >
              <option value="">All Categories</option>
              {filterOptions.ageGroups.map((ag) => (
                <option key={ag} value={ag}>{ag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        key={`${selectedDistance}-${selectedGender}-${selectedAgeGroup}`} // Re-animate on filter change
        viewport={{ once: true }}
        className="bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-black/40 text-[10px] font-black uppercase text-gray-500 border-b border-white/5 tracking-widest">
                <th className="py-6 px-8 text-center w-24">Pos</th>
                <th className="py-6 px-6">Athlete</th>
                <th className="py-6 px-6">Distance</th>
                <th className="py-6 px-6">Gender</th>
                <th className="py-6 px-6">Age Group</th>
                <th className="py-6 px-8 text-right text-triton-red">
                  <div className="flex items-center justify-end gap-2 text-triton-red">
                    <Clock size={14} />
                    <span>Points</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAthletes.length > 0 ? (
                filteredAthletes.map((athlete, i) => (
                  <tr
                    key={athlete.Bib}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-5 px-4 text-center font-bold text-gray-400">
                      #{i + 1}
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={athlete.Flag}
                          alt={athlete.Flag}
                          className="w-6 h-4 object-contain rounded-sm shadow-md"
                        />
                        <span className="font-black text-sm text-white uppercase tracking-tight">
                          {athlete.Name}
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md border 
                        ${athlete.Contest === "Sprint Distance"
                          ? "border-white/20 text-black bg-white/75"
                          : athlete.Contest === "Middle Distance"
                            ? "border-red-500/30 text-white bg-red-500/30"
                            : "border-black/20 text-white bg-white/5"
                        }`}>
                        {athlete.Contest}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-[10px] font-black uppercase px-2 py-1 tracking-widest text-gray-400">
                        {athlete.Gender}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-black text-xs uppercase tracking-widest px-3 py-1 text-gray-300">
                        {athlete.AgeGroup}
                      </span>
                    </td>
                    <td className="py-5 px-8 text-right">
                      <span className="font-black text-sm text-white tabular-nums tracking-widest">
                        {athlete.Time || "--:--:--"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest">
                    No athletes found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveResultsClientWrapper;
