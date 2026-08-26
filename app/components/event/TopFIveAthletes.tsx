"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

export interface AthleteType {
  Contest: string;
  Pos: number | string;
  TritonID?: number | string;
  Bib?: number | string;
  Flag?: string;
  Name: string;
  Gender: string;
  TotalPoints?: string | number;
  Points?: string | number;
  Total?: string | number;
  Time?: string;
  AgeGroup?: string;
  Swim?: string;
  T1?: string;
  Bike?: string;
  T2?: string;
  Run?: string;
  Gap?: string;
}

export interface Props {
  initialAthletes?: AthleteType[];
}

function normalizeGender(gender?: string): "Men" | "Women" | string {
  if (!gender) return "Men";
  const g = gender.trim().toLowerCase();
  if (g === "m" || g === "men" || g === "male") return "Men";
  if (g === "w" || g === "f" || g === "women" || g === "female") return "Women";
  return gender.toUpperCase();
}

function formatResultValue(athlete: AthleteType): string {
  const val = athlete.TotalPoints ?? athlete.Points ?? athlete.Total;
  if (val !== undefined && val !== null && val !== "") {
    const str = String(val).trim();
    if (str.toLowerCase().includes("pt")) return str;
    return `${str} pts`;
  }
  if (athlete.Time) return athlete.Time;
  return "--";
}

const TopFiveAthletes: React.FC<Props> = ({ initialAthletes = [] }) => {
  const topGroups = useMemo(() => {
    const safeAthletes = initialAthletes || [];
    
    let uniqueDistances = Array.from(new Set(safeAthletes.map((a) => a.Contest)))
      .filter(Boolean)
      .sort((a, b) => {
        const order = ["Sprint Distance", "Middle Distance", "Long Distance"];
        const indexA = order.indexOf(a);
        const indexB = order.indexOf(b);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
      });

    if (uniqueDistances.length === 0) {
      uniqueDistances = ["Sprint Distance", "Middle Distance", "Long Distance"];
    }

    const genders: ("Women" | "Men")[] = ["Women", "Men"];
    const result: { gender: "Women" | "Men"; contest: string; athletes: AthleteType[] }[] = [];

    genders.forEach((gender) => {
      uniqueDistances.forEach((distance) => {
        const filtered = safeAthletes
          .filter(
            (a) =>
              normalizeGender(a.Gender) === gender &&
              a.Contest === distance
          )
          .sort((a, b) => {
            const posA = typeof a.Pos === "number" ? a.Pos : parseInt(String(a.Pos || 999), 10);
            const posB = typeof b.Pos === "number" ? b.Pos : parseInt(String(b.Pos || 999), 10);
            if (!isNaN(posA) && !isNaN(posB) && posA !== posB) {
              return posA - posB;
            }
            const ptsA = parseFloat(String(a.TotalPoints ?? a.Points ?? 0));
            const ptsB = parseFloat(String(b.TotalPoints ?? b.Points ?? 0));
            if (!isNaN(ptsA) && !isNaN(ptsB) && ptsA !== ptsB) {
              return ptsB - ptsA;
            }
            return (a.Name || "").localeCompare(b.Name || "");
          })
          .slice(0, 5);

        result.push({ gender, contest: distance, athletes: filtered });
      });
    });

    return result;
  }, [initialAthletes]);

  const renderPosBadge = (pos: number) => {
    if (pos === 1) {
      return (
        <div className="w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] bg-amber-400 text-black shadow-md shadow-amber-500/20">
          1
        </div>
      );
    }
    if (pos === 2) {
      return (
        <div className="w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] bg-slate-300 text-black shadow-sm">
          2
        </div>
      );
    }
    if (pos === 3) {
      return (
        <div className="w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] bg-amber-700 text-white shadow-sm">
          3
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] text-gray-300 bg-white/10">
        {pos}
      </div>
    );
  };

  const renderTopTable = (item: { gender: "Women" | "Men"; contest: string; athletes: AthleteType[] }) => {
    const isSprint = item.contest === "Sprint Distance";
    const isMiddle = item.contest === "Middle Distance";

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        key={`${item.gender}-${item.contest}`}
        className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all hover:border-white/20"
      >
        <div
          className={`px-4 sm:px-6 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between ${
            isSprint
              ? "bg-white/80 text-black"
              : isMiddle
              ? "bg-red-500/20 text-white"
              : "bg-blue-500/20 text-white"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <h3 className="font-black uppercase tracking-widest text-xs sm:text-sm truncate">
              {item.gender} <span className="opacity-40 mx-1">/</span>
              {item.contest.replace(" Distance", "")}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shrink-0">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-white">Top 5</span>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <colgroup>
              <col className="w-10 sm:w-12" />
              <col />
              <col className="w-20 sm:w-24" />
            </colgroup>
            <tbody>
              {item.athletes.length > 0 ? (
                item.athletes.map((athlete, idx) => {
                  const posDisplay =
                    typeof athlete.Pos === "number"
                      ? athlete.Pos
                      : parseInt(String(athlete.Pos), 10) || idx + 1;

                  return (
                    <tr
                      key={athlete.Bib || athlete.TritonID || idx}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    >
                      <td className="py-3 px-2 sm:px-3 text-center align-middle">
                        <div className="flex items-center justify-center">
                          {renderPosBadge(posDisplay)}
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:px-3 align-middle min-w-0">
                        <div className="flex items-center gap-2 min-w-0">
                          {athlete.Flag && (
                            <img
                              src={athlete.Flag}
                              alt=""
                              className="w-4 sm:w-5 h-2.5 sm:h-3.5 object-contain rounded-xs opacity-80 shrink-0"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = "none";
                              }}
                            />
                          )}
                          <div className="flex flex-col min-w-0 grow">
                            <span className="font-bold text-xs sm:text-sm text-white uppercase truncate block group-hover:text-triton-red transition-colors">
                              {athlete.Name}
                            </span>
                            {athlete.Bib && (
                              <span className="text-[9px] font-mono font-bold text-gray-500 truncate block">
                                BIB #{athlete.Bib}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:px-3 text-right font-mono font-black text-xs sm:text-sm text-gray-300 tabular-nums align-middle whitespace-nowrap">
                        {formatResultValue(athlete)}
                      </td>
                    </tr>
                  );
                })
              ) : (
                [1, 2, 3, 4, 5].map((pos) => (
                  <tr key={pos} className="border-b border-white/5 opacity-40">
                    <td className="py-3 px-2 sm:px-3 text-center align-middle">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] text-gray-600 bg-white/5 mx-auto">
                        {pos}
                      </div>
                    </td>
                    <td className="py-3 px-2 sm:px-3 align-middle min-w-0">
                      <span className="font-bold text-xs text-gray-600 uppercase">--</span>
                    </td>
                    <td className="py-3 px-2 sm:px-3 text-right font-mono font-black text-xs text-gray-600 tabular-nums align-middle whitespace-nowrap">
                      --
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2">
        <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
          The <span className="text-triton-red italic">Champions</span>
        </h2>
        <p className="text-xs sm:text-base md:text-lg text-gray-400 max-w-md italic">
          Highlighting the top 5 performers per distance and gender.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {topGroups.map((group) => renderTopTable(group))}
      </div>
    </div>
  );
};

export default TopFiveAthletes;
