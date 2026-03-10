// RankingSection.tsx (Server Component)
import React from "react";
import { Trophy } from "lucide-react";
import RedLine from "../ui/RedLine";
import RankingClientWrapper from "./RankingClientWrapper"; // Vamos criar este abaixo

// Definimos a Interface aqui também
export interface Athlete {
  Bib: number;
  Contest: string;
  Pos: number;
  Name: string;
  Gender: string;
  Flag: string;
  Salvador: string;
  China: string;
  Rio: string;
  Lisboa: string;
  Total: string;
  Final: string;
}

async function getRankings() {
  const res = await fetch("https://api.raceresult.com/371805/AOGOXB8CKCWGHNE3BLXF2H00YR8YQ330", {
    // IMPORTANTE: Cache de 1 hora para evitar que SEU IP seja banido de novo
    next: { revalidate: 3600 },
    headers: {
      'User-Agent': 'Mozilla/5.0...',
      'Accept': 'application/json'
    }
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function RankingSection() {
  const data = await getRankings();

  if (!data) {
    return <div className="text-white">API Limit reached. Please wait.</div>;
  }

  return (
    <section id="ranking" className="py-14 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" /> Global Ranking
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
            The Best of Triton
          </h3>
        </div>

        {/* Passamos os dados para o componente Client que cuidará do Modal e Motion */}
        <RankingClientWrapper initialAthletes={data} />
        <RedLine />
      </div>
    </section>
  );
}