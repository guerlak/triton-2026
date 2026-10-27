"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface LiveAthlete {
  TritonID: number;
  Contest?: string;
  Race?: string;
  Distance?: string;
  Bib: number;
  Flag?: string;
  Nation?: string;
  Name: string;
  Gender: string;
  AgeGroup: string;
  Club?: string;
}

interface Props {
  initialAthletes: LiveAthlete[];
}

const StartListClientWrapper: React.FC<Props> = ({ initialAthletes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRace, setSelectedRace] = useState("RACES");
  const [selectedGender, setSelectedGender] = useState("GENDERS");
  const [selectedDistance, setSelectedDistance] = useState("DISTANCES");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("GROUPS");
  const [selectedClub, setSelectedClub] = useState("CLUBS");
  const [showAll, setShowAll] = useState(false);

  const uniqueRaces = [
    "RACES",
    ...Array.from(
      new Set(
        initialAthletes
          .map((a) => a.Race)
          .filter((r): r is string => Boolean(r && r.trim())),
      ),
    ).sort(),
  ];
  const uniqueGenders = [
    "GENDERS",
    ...Array.from(
      new Set(initialAthletes.map((a) => a.Gender).filter(Boolean)),
    ),
  ];
  const uniqueDistances = [
    "DISTANCES",
    ...Array.from(
      new Set(
        initialAthletes
          .map((a) => a.Distance || a.Contest)
          .filter((d): d is string => Boolean(d)),
      ),
    ).sort(),
  ];
  const uniqueAgeGroups = [
    "GROUPS",
    ...Array.from(
      new Set(initialAthletes.map((a) => a.AgeGroup).filter(Boolean)),
    ).sort(),
  ];
  const uniqueClubs = [
    "CLUBS",
    ...Array.from(
      new Set(
        initialAthletes
          .map((a) => a.Club)
          .filter((c): c is string => Boolean(c && c.trim())),
      ),
    ).sort(),
  ];

  const filteredAthletes = initialAthletes.filter((athlete) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      athlete.Name.toLowerCase().includes(query) ||
      athlete.Bib.toString().includes(query) ||
      (athlete.Race && athlete.Race.toLowerCase().includes(query)) ||
      (athlete.Distance && athlete.Distance.toLowerCase().includes(query)) ||
      (athlete.Contest && athlete.Contest.toLowerCase().includes(query));
    const matchesRace =
      selectedRace === "RACES" || athlete.Race === selectedRace;
    const matchesGender =
      selectedGender === "GENDERS" || athlete.Gender === selectedGender;
    const matchesAgeGroup =
      selectedAgeGroup === "GROUPS" || athlete.AgeGroup === selectedAgeGroup;
    const athleteDistance = athlete.Distance || athlete.Contest;
    const matchesDistance =
      selectedDistance === "DISTANCES" || athleteDistance === selectedDistance;
    const matchesClub =
      selectedClub === "CLUBS" || athlete.Club === selectedClub;

    return (
      matchesSearch &&
      matchesRace &&
      matchesGender &&
      matchesAgeGroup &&
      matchesDistance &&
      matchesClub
    );
  });

  const displayedAthletes = showAll
    ? filteredAthletes
    : filteredAthletes.slice(0, 20);

  return (
    <div className="mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row items-center gap-2 xl:gap-2.5 w-full">
        {/* Search Bar */}
        <div className="relative w-full lg:flex-1 min-w-0 group">
          <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 lg:pl-3.5 flex items-center pointer-events-none">
            <Search
              size={14}
              className="sm:w-4 sm:h-4 text-gray-500 group-focus-within:text-triton-red transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="SEARCH BY NAME OR BIB..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-8 sm:pl-9 lg:pl-10 pr-3 sm:pr-4 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider focus:outline-none focus:border-triton-red/50 focus:ring-1 focus:ring-triton-red/50 transition-all placeholder:text-[10px] sm:placeholder:text-xs placeholder:text-gray-600 shadow-xl truncate"
          />
        </div>

        {/* Filter Selects: single horizontal line below Search on mobile, inline on desktop */}
        <div className="w-full lg:w-auto flex flex-nowrap items-center gap-1.5 sm:gap-2 xl:gap-2.5 overflow-x-auto lg:overflow-visible pb-1.5 lg:pb-0 custom-scrollbar shrink-0">
          {/* Race Filter */}
          <div className="relative w-[90px] sm:w-28 lg:w-28 xl:w-32 shrink-0">
            <select
              value={selectedRace}
              onChange={(e) => setSelectedRace(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              {uniqueRaces.map((race) => (
                <option
                  key={race}
                  value={race}
                  className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs"
                >
                  {race}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Distance Filter */}
          <div className="relative w-[105px] sm:w-32 lg:w-32 xl:w-36 shrink-0">
            <select
              value={selectedDistance}
              onChange={(e) => setSelectedDistance(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              {uniqueDistances.map((dist) => (
                <option
                  key={dist}
                  value={dist}
                  className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs"
                >
                  {dist}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Gender Filter */}
          <div className="relative w-[90px] sm:w-28 lg:w-28 xl:w-32 shrink-0">
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2.5 sm:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              {uniqueGenders.map((gender) => (
                <option
                  key={gender}
                  value={gender}
                  className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs"
                >
                  {gender}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Age Group Filter */}
          <div className="relative w-[90px] sm:w-28 lg:w-28 xl:w-32 shrink-0">
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              {uniqueAgeGroups.map((group) => (
                <option
                  key={group}
                  value={group}
                  className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs"
                >
                  {group}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Club Filter */}
          <div className="relative w-[105px] sm:w-32 lg:w-32 xl:w-36 shrink-0">
            <select
              value={selectedClub}
              onChange={(e) => setSelectedClub(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
            >
              {uniqueClubs.map((club) => (
                <option
                  key={club}
                  value={club}
                  className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs"
                >
                  {club}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-900 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="overflow-x-auto custom-scrollbar pb-2 sm:pb-3">
          <table className="w-full text-left border-collapse min-w-[700px] md:min-w-[800px]">
            <thead>
              <tr className="bg-black/60 text-[10px] font-black uppercase text-gray-400 border-b border-white/10 tracking-widest whitespace-nowrap text-center">
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-center w-14 sm:w-20 md:w-24">
                  Bib
                </th>
                <th className="py-3 sm:py-4 px-3 sm:px-6">Athlete</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6">Race</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6">Distance</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6">Gender</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                  Age Group
                </th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-center">Club</th>
              </tr>
            </thead>
            <tbody>
              {displayedAthletes.length > 0 ? (
                displayedAthletes.map((athlete) => (
                  <tr
                    key={`${athlete.TritonID}-${athlete.Bib}`}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group whitespace-nowrap text-center"
                  >
                    {/* BIB */}
                    <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-center font-mono font-bold text-gray-400 text-xs sm:text-sm">
                      {athlete.Bib}
                    </td>

                    {/* ATHLETE */}
                    <td className="py-3.5 sm:py-4 px-3 sm:px-6">
                      <div className="flex items-center gap-3">
                        {athlete.Flag && (
                          <img
                            src={athlete.Flag}
                            alt={athlete.Nation || "Flag"}
                            className="w-5 h-3.5 sm:w-6 sm:h-4 object-contain rounded-xs shadow-sm shrink-0"
                          />
                        )}
                        <span className="font-black text-xs sm:text-sm text-white uppercase tracking-tight">
                          {athlete.Name}
                        </span>
                        {athlete.Nation && (
                          <span className="text-[10px] font-mono text-gray-500 uppercase">
                            ({athlete.Nation})
                          </span>
                        )}
                      </div>
                    </td>

                    {/* RACE */}
                    <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <span className="text-[10px] font-black uppercase px-2 py-1 text-gray-300">
                        {athlete.Race || "-"}
                      </span>
                    </td>

                    {/* DISTANCE */}
                    <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-1 rounded-md border shadow-sm ${
                          (athlete.Distance || athlete.Contest)
                            ?.toLowerCase()
                            .includes("sprint")
                            ? "bg-gray-400 text-black border-white/40"
                            : (athlete.Distance || athlete.Contest)
                                  ?.toLowerCase()
                                  .includes("middle")
                              ? "bg-red-500/30 text-white border-red-500/30"
                              : (athlete.Distance || athlete.Contest)
                                    ?.toLowerCase()
                                    .includes("long") ||
                                  (athlete.Distance || athlete.Contest)
                                    ?.toLowerCase()
                                    .includes("full")
                                ? "bg-gray-800 text-white border-white/30"
                                : "bg-white/10 text-gray-200 border-white/10"
                        }`}
                      >
                        {athlete.Distance || athlete.Contest || "-"}
                      </span>
                    </td>

                    {/* GENDER */}
                    <td className="py-3.5 sm:py-4 px-3 sm:px-6">
                      <span className="text-[10px] font-black uppercase px-2 py-1 tracking-widest text-gray-400">
                        {athlete.Gender}
                      </span>
                    </td>

                    {/* AGE GROUP */}
                    <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-center">
                      <span className="font-black text-xs uppercase tracking-widest px-3 py-1 text-gray-300">
                        {athlete.AgeGroup}
                      </span>
                    </td>

                    <td className="py-3.5 sm:py-4 px-3 sm:px-6 text-center">
                      <span className="font-black text-xs uppercase tracking-widest px-3 py-1 text-gray-300">
                        {athlete.Club}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-16 text-center text-gray-500 font-bold uppercase tracking-widest text-xs sm:text-sm"
                  >
                    No athletes found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* View All Button */}
        {filteredAthletes.length > displayedAthletes.length && !showAll && (
          <div className="p-4 sm:p-6 md:p-8 flex justify-center border-t border-white/5 bg-black/20">
            <button
              onClick={() => setShowAll(true)}
              className="group relative w-full sm:w-auto justify-center px-6 sm:px-10 py-3 sm:py-4 bg-triton-red hover:bg-white text-white hover:text-black font-black uppercase tracking-wider sm:tracking-[0.2em] text-xs rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(234,30,36,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3"
            >
              <span>View All</span>
              <span className="opacity-60 font-medium text-[10px]">
                ({filteredAthletes.length} Matches)
              </span>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default StartListClientWrapper;
