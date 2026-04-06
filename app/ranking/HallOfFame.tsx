"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Zap, Activity, Timer } from "lucide-react";
import Image from "next/image";
import { CountryFlag } from "../utils/CountryFlag";

type HallOfFameAthlete = {
  Bib: number,
  Contest: string,
  Name: string,
  Gender: string,
  Rank: number,
  Points: string,
  Distance: string,
  Nation: string,
  imgUrl: string
}

const GENDERS: {
  label: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  distances: { distanceLabel: string; icon: any }[];
}[] = [
    {
      label: "Women",
      accentBg: "bg-pink-500/10",
      accentBorder: "border-pink-500/30",
      accentText: "text-triton-red",
      distances: [
        { distanceLabel: "Sprint", icon: Zap },
        { distanceLabel: "Middle", icon: Activity },
        { distanceLabel: "Long", icon: Timer },
      ],
    },
    {
      label: "Men",
      accentBg: "bg-blue-500/10",
      accentBorder: "border-blue-500/30",
      accentText: "text-blue-400",
      distances: [
        { distanceLabel: "Sprint", icon: Zap },
        { distanceLabel: "Middle", icon: Activity },
        { distanceLabel: "Long", icon: Timer },
      ],
    },
  ];

const HallOfFame = ({ athletes }: { athletes: HallOfFameAthlete[] }) => {
  const AthleteCard = ({
    athlete,
    accentBg,
    accentText,
    distanceLabel,
    icon: Icon,
    index,
  }: {
    athlete: HallOfFameAthlete;
    accentBg: string;
    accentText: string;
    distanceLabel: string;
    icon: any;
    index: number;
  }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative group flex flex-col h-full rounded-2xl overflow-hidden"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${accentBg}`} />

      <div className="relative bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full group-hover:border-white/20 transition-colors">
        {/* Top Header/Image Area */}
        <div className="relative h-64 w-full overflow-hidden bg-neutral-800">
          {/* Athlete Image */}
          {athlete.imgUrl && (
            <Image
              src={athlete.imgUrl}
              alt={athlete.Name}
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
          )}

          {/* Gradients to keep content readable */}
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className={`absolute inset-0 bg-linear-to-tr ${accentBg} opacity-20 group-hover:opacity-0 transition-opacity`} />

          {/* Abstract Icon in background - subtle overlay */}
          <div className="absolute right-[-5%] top-[-5%] opacity-10 group-hover:opacity-5 transition-opacity pointer-events-none">
            <Icon size={140} strokeWidth={1} />
          </div>

          {/* Champion Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-neutral-950 font-black text-[10px] uppercase tracking-wider shadow-lg shadow-amber-400/30">
              <Trophy className="w-3 h-3" />
              <span>CHAMPION</span>
            </div>
          </div>

          {/* Distance Tag */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
            <Icon className={`w-4 h-4 ${accentText}`} />
            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">{distanceLabel}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${accentText}`}>
              GLOBAL SERIES
            </span>
            <CountryFlag countryCode={athlete.Nation} />
          </div>

          <h3 className="text-2xl font-black text-white uppercase leading-none mb-6 group-hover:text-triton-red transition-colors duration-300">
            {athlete.Name}
          </h3>

          <div className="mt-auto space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">Final Standing</p>
                <p className="text-lg font-black text-white">#1 OVERALL</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">Total Points</p>
                <p className="text-xl font-black text-triton-red tracking-tight">{athlete.Points}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center shadow-lg">
                    <Award size={12} className="text-white/20" />
                  </div>
                ))}
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                FULL STATS <div className="w-4 h-px bg-current group-hover:w-6 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Heavy Decorative Typography in Background */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[25vw] font-black leading-none -ml-20 tracking-tighter">ELITE</h2>
        <h2 className="text-[25vw] font-black leading-none self-end -mr-20 tracking-tighter uppercase italic">Legacy</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-32">
          {GENDERS.map(({ label, accentBg, accentBorder, accentText, distances }) => {
            const displayAthletes = distances.map(({ distanceLabel, icon }) => ({
              athlete: athletes.find(a =>
                a.Gender === label &&
                a.Distance.startsWith(distanceLabel)
              ),
              distanceLabel,
              icon
            }));

            if (displayAthletes.every(({ athlete }) => !athlete)) return null;

            return (
              <div key={label}>
                {/* Gender Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                  <div className="flex flex-col">
                    <h2 className="text-6xl md:text-6xl font-black text-white uppercase leading-[0.8] mb-6">
                      {label}<span className={`text-triton-red animate-pulse`}>.</span>
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      {/* <div className={`h-[2px] w-12 ${accentText.replace('text-', 'bg-')}`} /> */}
                    </div>
                    <span className={`text-sm font-black uppercase tracking-[0.4em] text-triton-red`}>
                      2025 RANKING COMPETITION CHAMPIONS
                    </span>
                  </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  <AnimatePresence mode="popLayout">
                    {displayAthletes.map(({ athlete, distanceLabel, icon }, i) =>
                      athlete ? (
                        <AthleteCard
                          key={`${label}-${distanceLabel}-${athlete.Bib}`}
                          athlete={athlete}
                          accentBg={accentBg}
                          accentText={accentText}
                          distanceLabel={distanceLabel}
                          icon={icon}
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
    </section>
  );
};

export default HallOfFame;
