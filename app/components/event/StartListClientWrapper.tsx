"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface LiveAthlete {
  TritonID: number;
  Contest: string;
  Bib: number;
  Flag: string;
  Nation: string;
  Name: string;
  Gender: string;
  AgeGroup: string;
}

interface Props {
  initialAthletes: LiveAthlete[];
}

const StartListClientWrapper: React.FC<Props> = ({ initialAthletes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("ALL GENDERS");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("ALL AGE GROUPS");
  const [showAll, setShowAll] = useState(false);

  const uniqueGenders = ["ALL GENDERS", ...Array.from(new Set(initialAthletes.map((a) => a.Gender)))];
  const uniqueAgeGroups = ["ALL AGE GROUPS", ...Array.from(new Set(initialAthletes.map((a) => a.AgeGroup)))].sort();

  const filteredAthletes = initialAthletes.filter((athlete) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      athlete.Name.toLowerCase().includes(query) ||
      athlete.Bib.toString().includes(query);
    const matchesGender = selectedGender === "ALL GENDERS" || athlete.Gender === selectedGender;
    const matchesAgeGroup = selectedAgeGroup === "ALL AGE GROUPS" || athlete.AgeGroup === selectedAgeGroup;

    return matchesSearch && matchesGender && matchesAgeGroup;
  });

  const displayedAthletes = showAll ? filteredAthletes : filteredAthletes.slice(0, 20);

  return (

    <div className="mt-12 space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
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

        {/* Gender Filter */}
        <div className="relative w-full lg:w-48">
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-4 px-6 text-xs font-black text-white uppercase tracking-widest focus:outline-none focus:border-triton-red/50 transition-all appearance-none cursor-pointer"
          >
            {uniqueGenders.map((gender) => (
              <option key={gender} value={gender} className="bg-neutral-900 text-white uppercase">
                {gender}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>

        {/* Age Group Filter */}
        <div className="relative w-full lg:w-64">
          <select
            value={selectedAgeGroup}
            onChange={(e) => setSelectedAgeGroup(e.target.value)}
            className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-4 px-6 text-xs font-black text-white uppercase tracking-widest focus:outline-none focus:border-triton-red/50 transition-all appearance-none cursor-pointer"
          >
            {uniqueAgeGroups.map((group) => (
              <option key={group} value={group} className="bg-neutral-900 text-white uppercase">
                {group}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-black/40 text-[10px] font-black uppercase text-gray-500 border-b border-white/5 tracking-widest">
                <th className="py-6 px-8 text-center w-24">Bib</th>
                <th className="py-6 px-6">Athlete</th>
                <th className="py-6 px-6">Distance</th>
                <th className="py-6 px-6">Gender</th>
                <th className="py-6 px-6 text-center">Age Group</th>
              </tr>
            </thead>
            <tbody>
              {displayedAthletes.length > 0 ? (
                displayedAthletes.map((athlete) => (
                  <tr
                    key={athlete.Bib}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-5 px-8 text-center font-bold text-gray-400">
                      {athlete.Bib}
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={athlete.Flag}
                          alt={athlete.Nation}
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
                      <span className={`text-[10px] font-black uppercase px-2 py-1 text-white/60 tracking-wider`}>
                        {athlete.Gender}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <span className="font-black text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                        {athlete.AgeGroup}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-20 text-center text-gray-500 font-bold uppercase tracking-widest">
                    No athletes found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* View All Button */}
        {filteredAthletes.length > displayedAthletes.length && !showAll && (
          <div className="p-8 flex justify-center border-t border-white/5 bg-black/20">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-10 py-4 bg-triton-red hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(234,30,36,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3"
            >
              <span>View All</span>
              <span className="opacity-60 font-medium text-[10px]">({filteredAthletes.length} Matches)</span>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default StartListClientWrapper;
