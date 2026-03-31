"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { Athlete } from "@/model/ranking";

interface HallOfFameData {
  womenSprint: Athlete[];
  menSprint: Athlete[];
  womenMiddle: Athlete[];
  menMiddle: Athlete[];
  womenLong: Athlete[];
  menLong: Athlete[];
}

const GENDERS: {
  label: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  distances: { key: keyof HallOfFameData; distanceLabel: string }[];
}[] = [
  {
    label: "Women",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/30",
    accentText: "text-pink-400",
    distances: [
      { key: "womenSprint", distanceLabel: "Sprint" },
      { key: "womenMiddle", distanceLabel: "Middle" },
      { key: "womenLong", distanceLabel: "Long" },
    ],
  },
  {
    label: "Men",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/30",
    accentText: "text-blue-400",
    distances: [
      { key: "menSprint", distanceLabel: "Sprint" },
      { key: "menMiddle", distanceLabel: "Middle" },
      { key: "menLong", distanceLabel: "Long" },
    ],
  },
];

const HallOfFame = ({ hallFameData }: { hallFameData: HallOfFameData }) => {
  const AthleteCard = ({
    athlete,
    accentBg,
    accentBorder,
    accentText,
    distanceLabel,
    index,
  }: {
    athlete: Athlete;
    accentBg: string;
    accentBorder: string;
    accentText: string;
    distanceLabel: string;
    index: number;
  }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative group overflow-hidden bg-neutral-900 border border-white/5 rounded-2xl flex flex-col h-full"
    >
      {/* Image placeholder */}
      <div className="relative h-52 w-full overflow-hidden bg-neutral-800">
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

        {/* Champion badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-amber-400/20 border border-amber-400/30 text-amber-400">
          <Trophy className="w-4 h-4" />
          <span className="font-black text-xs uppercase tracking-widest">Champion</span>
        </div>

        {/* Distance badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-black uppercase tracking-widest ${accentBg} ${accentBorder} ${accentText}`}
        >
          {distanceLabel}
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-triton-red mb-2">
          {athlete.Distance}
        </span>

        <h3 className="text-xl font-black text-white uppercase leading-tight mb-4 group-hover:text-triton-red transition-colors duration-300">
          {athlete.Athlete}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
              Final Score
            </span>
            <span className="text-xl font-black text-white">{athlete.Points}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-triton-red transition-colors duration-300">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {GENDERS.map(({ label, accentBg, accentBorder, accentText, distances }) => {
            const athletes = distances.map(({ key, distanceLabel }) => ({
              athlete: hallFameData[key][0],
              distanceLabel,
            }));

            if (athletes.every(({ athlete }) => !athlete)) return null;

            return (
              <div key={label}>
                {/* Gender divider */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px bg-white/10 grow" />
                  <div
                    className={`flex items-center gap-3 px-6 py-2 rounded-full border backdrop-blur-md ${accentBg} ${accentBorder}`}
                  >
                    <span className={`font-black uppercase tracking-[0.3em] text-xs ${accentText}`}>
                      {label}
                    </span>
                  </div>
                  <div className="h-px bg-white/10 grow" />
                </div>

                {/* 3 cards: Sprint · Middle · Long */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {athletes.map(({ athlete, distanceLabel }, i) =>
                      athlete ? (
                        <AthleteCard
                          key={`${label}-${distanceLabel}`}
                          athlete={athlete}
                          accentBg={accentBg}
                          accentBorder={accentBorder}
                          accentText={accentText}
                          distanceLabel={distanceLabel}
                          index={i}
                        />
                      ) : null
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
