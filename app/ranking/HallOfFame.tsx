"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, MapPin, Award } from "lucide-react";

interface HallOfFameAthlete {
  year: number;
  gender: 'Men' | 'Women';
  position: 1 | 2 | 3;
  name: string;
  country: string; // ISO code for flags
  score: string;
  category: string;
  image: string;
}

const hallOfFameData: HallOfFameAthlete[] = [
  // 2025
  { year: 2025, gender: 'Men', position: 1, name: "Marcus Rocha", country: "br", score: "4850", category: "Middle Distance", image: "/images/atletas/bizarelo.jpeg" },
  { year: 2025, gender: 'Men', position: 2, name: "Lucas Ferreira", country: "pt", score: "4620", category: "Long Distance", image: "/images/ranking-modal.png" },
  { year: 2025, gender: 'Men', position: 3, name: "André Santos", country: "es", score: "4410", category: "Sprint Distance", image: "/images/ranking-modal.png" },
  
  { year: 2025, gender: 'Women', position: 1, name: "Mariana Costa", country: "br", score: "4920", category: "Long Distance", image: "/images/atletas/viviane.jpeg" },
  { year: 2025, gender: 'Women', position: 2, name: "Clara Mendes", country: "pt", score: "4780", category: "Middle Distance", image: "/images/atletas/elida.jpeg" },
  { year: 2025, gender: 'Women', position: 3, name: "Sofia Lima", country: "br", score: "4550", category: "Sprint Distance", image: "/images/ranking-modal.png" },

  // 2024
  { year: 2024, gender: 'Men', position: 1, name: "Bruno Bizarelo", country: "br", score: "5120", category: "Middle Distance", image: "/images/atletas/bizarelo.jpeg" },
  { year: 2024, gender: 'Men', position: 2, name: "Ricardo Alves", country: "pt", score: "4980", category: "Long Distance", image: "/images/ranking-modal.png" },
  { year: 2024, gender: 'Men', position: 3, name: "Tiago Silva", country: "br", score: "4760", category: "Sprint Distance", image: "/images/ranking-modal.png" },

  { year: 2024, gender: 'Women', position: 1, name: "Élida Cássia", country: "br", score: "5050", category: "Long Distance", image: "/images/atletas/elida.jpeg" },
  { year: 2024, gender: 'Women', position: 2, name: "Viviane Maria", country: "br", score: "4890", category: "Middle Distance", image: "/images/atletas/viviane.jpeg" },
  { year: 2024, gender: 'Women', position: 3, name: "Helena Sousa", country: "pt", score: "4640", category: "Sprint Distance", image: "/images/ranking-modal.png" },
];

const HallOfFame = () => {
  const years = [2025, 2024];
  const [selectedYear, setSelectedYear] = useState(2025);

  const renderFlag = (countryCode: string) => {
    if (!countryCode) return null;
    return (
      <img
        src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
        alt={countryCode}
        className="w-5 h-3.5 object-contain rounded-sm inline-block"
      />
    );
  };

  const currentYearData = hallOfFameData.filter(a => a.year === selectedYear);
  const menWinners = currentYearData.filter(a => a.gender === 'Men').sort((a, b) => a.position - b.position);
  const womenWinners = currentYearData.filter(a => a.gender === 'Women').sort((a, b) => a.position - b.position);

  const getPositionIcon = (pos: number) => {
    switch(pos) {
      case 1: return <Trophy className="w-5 h-5 text-amber-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-300" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return null;
    }
  };

  const AthleteCard = ({ athlete }: { athlete: HallOfFameAthlete }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden bg-neutral-900 border border-white/5 rounded-2xl flex flex-col h-full"
    >
      <div className="relative h-64 md:h-72 w-full overflow-hidden">
        <Image
          src={athlete.image}
          alt={athlete.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        
        {/* Position Badge */}
        <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 ${
            athlete.position === 1 ? 'bg-amber-400/20 text-amber-400' : 
            athlete.position === 2 ? 'bg-gray-300/20 text-gray-300' : 'bg-amber-600/20 text-amber-600'
          }`}>
          {getPositionIcon(athlete.position)}
          <span className="font-black text-xs uppercase tracking-widest">{athlete.position === 1 ? 'Winner' : `${athlete.position}º Place`}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 mb-2">
          {renderFlag(athlete.country)}
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-triton-red">
            {athlete.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-white uppercase leading-tight mb-4 group-hover:text-triton-red transition-colors">
          {athlete.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Final Score</span>
            <span className="text-xl font-black text-white">{athlete.score}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-triton-red transition-colors">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-triton-red mb-4">
              <Award className="w-8 h-8" />
              <span className="font-black uppercase tracking-[0.3em] text-sm">Historical Data</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-4">
              Hall of <span className="text-triton-red italic">Fame</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Honoring the champions who define the Triton legacy. Explore the top performers from each season.
            </p>
          </div>

          <div className="flex bg-neutral-900 p-1.5 rounded-2xl border border-white/5 w-fit h-fit self-start md:self-auto">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                  selectedYear === year 
                  ? "bg-triton-red text-white shadow-lg shadow-triton-red/20" 
                  : "text-gray-500 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {/* Men Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-white/10 grow" />
              <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="font-black uppercase tracking-[0.3em] text-xs text-white">Men Leaders</span>
              </div>
              <div className="h-px bg-white/10 grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {menWinners.map(athlete => (
                  <AthleteCard key={`${athlete.year}-${athlete.gender}-${athlete.position}`} athlete={athlete} />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Women Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-white/10 grow" />
              <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="font-black uppercase tracking-[0.3em] text-xs text-white">Women Leaders</span>
              </div>
              <div className="h-px bg-white/10 grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {womenWinners.map(athlete => (
                  <AthleteCard key={`${athlete.year}-${athlete.gender}-${athlete.position}`} athlete={athlete} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
