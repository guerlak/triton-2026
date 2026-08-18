"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

interface AthleteType {
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
  initialAthletes?: AthleteType[];
}

const TopFiveAthletes: React.FC<Props> = ({ initialAthletes = [] }) => {
  const topGroups = useMemo(() => {
    const safeAthletes = initialAthletes || [];
    const genders: ("Women" | "Men")[] = ["Women", "Men"];
    
    let uniqueDistances = Array.from(new Set(safeAthletes.map((a) => a.Contest)))
      .filter(Boolean)
      .sort((a, b) => {
        const order = ["Sprint Distance", "Middle Distance", "Long Distance"];
        return order.indexOf(a) - order.indexOf(b);
      });

    if (uniqueDistances.length === 0) {
      uniqueDistances = ["Sprint Distance", "Middle Distance", "Long Distance"];
    }

    const result: { gender: "Women" | "Men"; contest: string; athletes: AthleteType[] }[] = [];

    genders.forEach((gender) => {
      uniqueDistances.forEach((distance) => {
        const filtered = safeAthletes
          .filter((a) => a.Gender === gender && a.Contest === distance)
          .sort((a, b) => (a.Time || "").localeCompare(b.Time || ""))
          .slice(0, 5);

        result.push({ gender, contest: distance, athletes: filtered });
      });
    });

    return result;
  }, [initialAthletes]);

  const renderTopTable = (item: { gender: "Women" | "Men"; contest: string; athletes: AthleteType[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      key={`${item.gender}-${item.contest}`}
      className="bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
    >
      <div className={`px-6 py-5 border-b border-white/5 flex items-center justify-between
        ${item.contest === "Sprint Distance" ? "bg-white/70 text-black" : item.contest === "Middle Distance" ? "bg-red-500/30 text-white" : "bg-blue-500/10 text-white"}`}>
        <div className="flex items-center gap-3">
          <h3 className="font-black uppercase tracking-widest text-[10px]">
            {item.gender} <span className="opacity-20 mx-1">/</span>
            {item.contest.replace(" Distance", "")}
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 animate-pulse" />
          <span className={`text-[9px] font-black uppercase tracking-tighter ${item.contest === "Sprint Distance" ? "text-black" : "text-white"}`}>Top 5</span>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse">
          <tbody>
            {item.athletes.length > 0 ? (
              item.athletes.map((athlete, idx) => (
                <tr key={athlete.Bib || idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3 px-6 text-center">
                    <div className="text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center mx-auto text-white bg-white/5">
                      {idx + 1}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {athlete.Flag && <img src={athlete.Flag} alt="" className="w-4 h-2.5 object-contain opacity-60" />}
                      <span className="font-bold text-[11px] text-white uppercase truncate max-w-[140px]">
                        {athlete.Name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-right font-black text-[10px] text-gray-400 tabular-nums">
                    {athlete.Time || "--:--:--"}
                  </td>
                </tr>
              ))
            ) : (
              [1, 2, 3, 4, 5].map((pos) => (
                <tr key={pos} className="border-b border-white/5 opacity-40">
                  <td className="py-3 px-6 text-center">
                    <div className="text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center mx-auto text-gray-500">
                      {pos}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-[11px] text-gray-500 uppercase">
                      --
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right font-black text-[10px] text-gray-500 tabular-nums">
                    --:--:--
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <div className="mt-12 space-y-12">
      {/* Visual Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center gap-4 text-triton-red">
          <div className="h-px w-12 bg-triton-red/30" />
          <Trophy className="w-8 h-8" />
          <div className="h-px w-12 bg-triton-red/30" />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-[0.2em] text-white">
          The <span className="text-triton-red italic">Champions</span>
        </h2>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest max-w-md italic">
          Highlighting the top 5 performers per distance and gender on the current stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {topGroups.map((group) => renderTopTable(group))}
      </div>
    </div>
  );
};

export default TopFiveAthletes;
