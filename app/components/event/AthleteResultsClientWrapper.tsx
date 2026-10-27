"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ClockArrowUp, ChevronDown } from "lucide-react";

interface LiveAthlete {
  Pos?: number | string;
  PosAgeGroup?: number | string;
  TritonID?: number;
  Bib: number | string;
  Flag?: string;
  Name: string;
  Nation?: string;
  Race?: string;
  Contest?: string;
  Distance?: string;
  Gender: "Men" | "Women" | "m" | "f" | string;
  AgeGroup: string;
  Club?: string;
  Swim?: string;
  T1?: string;
  Bike?: string;
  T2?: string;
  Run?: string;
  Time?: string;
  Gap?: string;
  Total?: string | number;
  TotalPoints?: string | number;
  Points?: string | number;
  Triton?: string | number;
}

interface Props {
  initialAthletes: LiveAthlete[];
}

const formatGender = (gender?: string) => {
  if (!gender) return "-";
  const g = gender.trim().toLowerCase();
  if (g === "m" || g === "men" || g === "male") return "Men";
  if (g === "f" || g === "women" || g === "female") return "Women";
  return gender;
};

const getDistanceBadgeClass = (distanceName?: string) => {
  const d = distanceName?.toLowerCase() || "";
  if (d.includes("sprint")) return "border-white/20 text-black bg-white/75";
  if (d.includes("middle")) return "border-red-500/30 text-white bg-red-500/30";
  if (d.includes("long") || d.includes("full")) return "border-white/30 text-white bg-gray-800";
  return "border-white/10 text-white bg-white/5";
};

const LiveResultsClientWrapper: React.FC<Props> = ({ initialAthletes }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [selectedClub, setSelectedClub] = useState("");

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const list = Array.isArray(initialAthletes) ? initialAthletes : [];
    return {
      races: Array.from(
        new Set(
          list
            .map((a) => a.Race)
            .filter((r): r is string => Boolean(r && r.trim()))
        )
      ).sort(),
      distances: Array.from(
        new Set(
          list
            .map((a) => a.Distance || a.Contest)
            .filter((d): d is string => Boolean(d && d.trim()))
        )
      ).sort(),
      genders: Array.from(
        new Set(
          list
            .map((a) => a.Gender)
            .filter((g): g is string => Boolean(g && g.trim()))
        )
      ).sort(),
      ageGroups: Array.from(
        new Set(
          list
            .map((a) => a.AgeGroup)
            .filter((ag): ag is string => Boolean(ag && ag.trim()))
        )
      ).sort(),
      clubs: Array.from(
        new Set(
          list
            .map((a) => a.Club)
            .filter((c): c is string => Boolean(c && c.trim()))
        )
      ).sort(),
    };
  }, [initialAthletes]);

  const filteredAthletes = useMemo(() => {
    const list = Array.isArray(initialAthletes) ? initialAthletes : [];
    return list.filter((athlete) => {
      const query = searchQuery.trim().toLowerCase();
      const nameMatch =
        query === "" ||
        (athlete.Name && athlete.Name.toLowerCase().includes(query)) ||
        (athlete.Bib != null && athlete.Bib.toString().toLowerCase().includes(query)) ||
        (athlete.Club && athlete.Club.toLowerCase().includes(query)) ||
        (athlete.Race && athlete.Race.toLowerCase().includes(query));

      const raceMatch = selectedRace === "" || athlete.Race === selectedRace;
      const athleteDistance = athlete.Distance || athlete.Contest || "";
      const distanceMatch = selectedDistance === "" || athleteDistance === selectedDistance;
      const genderMatch = selectedGender === "" || athlete.Gender === selectedGender;
      const ageGroupMatch = selectedAgeGroup === "" || athlete.AgeGroup === selectedAgeGroup;
      const clubMatch = selectedClub === "" || athlete.Club === selectedClub;

      return nameMatch && raceMatch && distanceMatch && genderMatch && ageGroupMatch && clubMatch;
    });
  }, [initialAthletes, searchQuery, selectedRace, selectedDistance, selectedGender, selectedAgeGroup, selectedClub]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedRace || selectedDistance || selectedGender || selectedAgeGroup || selectedClub
  );

  return (
    <div className="mt-6 sm:mt-8 md:mt-12 space-y-6 sm:space-y-8">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2">
        <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
          <ClockArrowUp className="w-6 h-6 sm:w-8 sm:h-8" />
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
          Full <span className="text-triton-red italic">Results</span>
        </h2>
        <p className="text-xs sm:text-base md:text-lg text-gray-400 max-w-xl italic">
          Check all the results of athletes participating in the event.
        </p>
      </div>

      {/* Filters Header */}
      <div className="space-y-3">
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
              placeholder="SEARCH BY NAME, BIB, CLUB..."
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
                <option value="" className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                  RACES
                </option>
                {filterOptions.races.map((r) => (
                  <option key={r} value={r} className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                    {r}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>

            {/* Distance Filter */}
            <div className="relative w-[105px] sm:w-32 lg:w-32 xl:w-36 shrink-0">
              <select
                value={selectedDistance}
                onChange={(e) => setSelectedDistance(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
              >
                <option value="" className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                  DISTANCES
                </option>
                {filterOptions.distances.map((d) => (
                  <option key={d} value={d} className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                    {d}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>

            {/* Gender Filter */}
            <div className="relative w-[90px] sm:w-28 lg:w-28 xl:w-32 shrink-0">
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
              >
                <option value="" className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                  GENDERS
                </option>
                {filterOptions.genders.map((g) => (
                  <option key={g} value={g} className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                    {formatGender(g)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>

            {/* Age Group Filter */}
            <div className="relative w-[90px] sm:w-28 lg:w-28 xl:w-32 shrink-0">
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
              >
                <option value="" className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                  GROUPS
                </option>
                {filterOptions.ageGroups.map((ag) => (
                  <option key={ag} value={ag} className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                    {ag}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>

            {/* Club Filter */}
            <div className="relative w-[105px] sm:w-32 lg:w-32 xl:w-36 shrink-0">
              <select
                value={selectedClub}
                onChange={(e) => setSelectedClub(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl py-2 sm:py-2.5 lg:py-3 pl-2 sm:pl-3 pr-5 sm:pr-7 text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider appearance-none focus:outline-none focus:border-triton-red/50 transition-all cursor-pointer truncate"
              >
                <option value="" className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                  CLUBS
                </option>
                {filterOptions.clubs.map((c) => (
                  <option key={c} value={c} className="bg-neutral-900 text-white uppercase text-[10px] sm:text-xs">
                    {c}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-1.5 sm:pr-2.5 flex items-center pointer-events-none text-gray-500">
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Counter and Clear Filters */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-gray-400 px-1 pt-1">
          <span>
            Showing <strong className="text-white font-mono">{filteredAthletes.length}</strong> athlete{filteredAthletes.length === 1 ? "" : "s"}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedRace("");
                setSelectedDistance("");
                setSelectedGender("");
                setSelectedAgeGroup("");
                setSelectedClub("");
              }}
              className="text-triton-red hover:underline font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        key={`${selectedRace}-${selectedDistance}-${selectedGender}-${selectedAgeGroup}-${selectedClub}`}
        viewport={{ once: true }}
        className="bg-neutral-900 border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="overflow-x-auto max-h-[65vh] custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[760px] md:min-w-[960px]">
            <thead className="sticky top-0 z-10 bg-neutral-950/90 backdrop-blur-md">
              <tr className="bg-black/60 text-[10px] font-black uppercase text-gray-400 border-b border-white/10 tracking-widest whitespace-nowrap">
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 text-center w-14 sm:w-20">Pos</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4">Athlete</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 text-center">Race</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 text-center">Distance</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 text-center">Gender</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 text-center">Age Group</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 text-center">Club</th>
                <th className="py-3 sm:py-4 px-2.5 sm:px-4 md:px-6 text-right text-triton-red">
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-triton-red">
                    <Clock size={14} />
                    <span>Time</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAthletes.length > 0 ? (
                filteredAthletes.map((athlete, i) => (
                  <tr
                    key={`${athlete.TritonID ?? ""}-${athlete.Bib}-${i}`}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group whitespace-nowrap"
                  >
                    {/* POS */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center font-mono font-bold text-xs sm:text-sm text-gray-400">
                      {athlete.Pos != null && athlete.Pos !== "" ? `#${athlete.Pos}` : `#${i + 1}`}
                    </td>

                    {/* ATHLETE */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4">
                      <div className="flex items-center gap-2.5 sm:gap-3">
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
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center text-xs font-bold text-gray-300 uppercase tracking-wider">
                      <span className="text-[10px] sm:text-xs font-bold uppercase text-gray-300">
                        {athlete.Race || "-"}
                      </span>
                    </td>

                    {/* DISTANCE */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-1 rounded-md border shadow-xs ${getDistanceBadgeClass(
                          athlete.Distance || athlete.Contest
                        )}`}
                      >
                        {athlete.Distance || athlete.Contest || "-"}
                      </span>
                    </td>

                    {/* GENDER */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center">
                      <span className="text-[10px] sm:text-xs font-black uppercase px-2 py-1 tracking-widest text-gray-400">
                        {formatGender(athlete.Gender)}
                      </span>
                    </td>

                    {/* AGE GROUP */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center">
                      <span className="font-mono font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-300">
                        {athlete.AgeGroup || "-"}
                      </span>
                    </td>

                    {/* CLUB */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 text-center">
                      <span className="font-bold text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
                        {athlete.Club || "-"}
                      </span>
                    </td>

                    {/* TIME */}
                    <td className="py-2.5 sm:py-3.5 px-2.5 sm:px-4 md:px-6 text-right">
                      <span className="font-mono font-black text-xs sm:text-sm text-white tabular-nums tracking-widest">
                        {athlete.Time || "--:--:--"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-16 text-center text-gray-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
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
