// RankingSection.tsx (Server Component)
import React from "react";
import { Trophy } from "lucide-react";
import RedLine from "../ui/RedLine";
import RankingClientWrapper from "./RankingClientWrapper"; // Vamos criar este abaixo
import MainButton from "../ui/MainButton";
import { fetchGeneralRanking } from "@/services/RankingService";
import { ApiRankingRepo } from "@/repositories/ApiRankingRepo";

export default async function RankingSection() {
  const data = await fetchGeneralRanking(new ApiRankingRepo());

  if (!data) {
    return <div className="text-white p-20 text-center text-xs md:text-sm"><span className="bg-triton-red/70 p-4 rounded-sm">Error loading data...</span></div>;
  }

  return (
    <section id="ranking" className="py-14 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" /> Global Ranking
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
            TOP 3 LEADER BOARD
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-lg mt-4">
            Check your score, and ranking. The points competition rewards consistency rather
            than single day performance making it a year long open race to the end that anyone can win.
          </p>
        </div>

        {/* Passamos os dados para o componente Client que cuidará do Modal e Motion */}
        <RankingClientWrapper initialAthletes={data} />

        <div className="text-center py-10">
          <MainButton href="/#">Full Ranking</MainButton>
        </div>

        <RedLine />
      </div>
    </section>
  );
}