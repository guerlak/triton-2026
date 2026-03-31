import React from "react";
import RankingPageClient from "./RankingPageClient";
import Navbar from "../components/Navbar";
import HeadLine from "../ui/HeadLine";
import { ApiRankingRepo } from "@/repositories/ApiRankingRepo";
import { fetchDetails, fetchGeneralRanking, fetchLeaderboard } from "@/services/RankingService";
import HallOfFame from "./HallOfFame";
import { Award } from "lucide-react";
import Image from "next/image";


export const metadata = {
  title: "Ranking | Triton World Series",
  description: "Check the global standings and points for all Triton World Series athletes.",
};

export default async function RankingPage() {
  const data = await fetchGeneralRanking(new ApiRankingRepo());
  const details = await fetchDetails(new ApiRankingRepo());
  const leaderBoard = await fetchLeaderboard(new ApiRankingRepo());

  if (!data || !leaderBoard) {
    return (
      <div className="bg-neutral-950 min-h-screen text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-black uppercase mb-4">Error loading ranking data</h1>
        <p className="text-gray-400">Please try again later.</p>
        <a href="/" className="mt-8 text-triton-red font-bold hover:underline">Return to Home</a>
      </div>
    );
  }

  const hallOfFameAthletes = [
    {
      Bib: 1,
      Contest: "Triton World Series",
      Name: "Antônio Barreto",
      Gender: "Men",
      Rank: 1,
      Points: "1000",
      Distance: "Sprint Distance",
      Nation: "Brazil",
      imgUrl: "/images/hall-of-fame/antonio-barreto.png"
    },
    {
      Bib: 2,
      Contest: "Triton World Series",
      Name: "Cora Dorst",
      Gender: "Women",
      Rank: 1,
      Points: "1000",
      Distance: "Sprint Distance",
      Nation: "USA",
      imgUrl: "/images/hall-of-fame/cora-dorst.png"
    },
    {
      Bib: 3,
      Contest: "Triton World Series",
      Name: "Marcos Salamonde ",
      Gender: "Men",
      Rank: 1,
      Points: "1000",
      Distance: "Middle Distance",
      Nation: "Brazil",
      imgUrl: "/images/hall-of-fame/marcos-salamonde.png"
    },
    {
      Bib: 4,
      Contest: "Triton World Series",
      Name: "Carla Abrunhosa",
      Gender: "Women",
      Rank: 1,
      Points: "1000",
      Distance: "Middle Distance",
      Nation: "Brazil",
      imgUrl: "/images/hall-of-fame/carla-abrunhosa.png"
    },
    {
      Bib: 5,
      Contest: "Triton World Series",
      Name: "Rui Velez",
      Gender: "Men",
      Rank: 1,
      Points: "1000",
      Distance: "Long Distance",
      Nation: "Brazil",
      imgUrl: "/images/hall-of-fame/rui-velez.png"
    },
    {
      Bib: 6,
      Contest: "Triton World Series",
      Name: "Alba Rodriguez",
      Gender: "Women",
      Rank: 1,
      Points: "1000",
      Distance: "Long Distance",
      Nation: "Spain",
      imgUrl: "/images/hall-of-fame/alba-rodriguez.png"
    }
  ];

  return (
    <div className="bg-neutral-950">
      <Navbar />
      <main className="pt-20 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RankingPageClient initialAthletes={data} />
        </section>

        <HeadLine text1="GLOBAL RANKING" text2="TWS Global Standings" />

        <section className="relative w-full overflow-hidden mb-24 py-24 group">
          {/* Background Image with Creative Effects */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/triton-trophy.jpg"
              alt="Triton Global Ranking Trophy"
              fill
              className="object-cover object-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            {/* Elegant Overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-neutral-950/50" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-triton-red animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">The competition</span>
                </div>
                
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-white font-black leading-tight uppercase font-sans">
                    The TRITON Global Ranking is an annual, by-points competition that you score at every race.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed font-sans max-w-lg">
                    Throughout the season, athletes who compete in any TRITON event worldwide earn points that contribute to their position in the ranking. At the end of the year, the results of all races are consolidated to determine the final standings.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/10 rounded-2xl group/card hover:border-white/20 transition-all">
                  <p className="text-gray-300 leading-relaxed font-sans">
                    The ranking is achieved by combining the points achieved at both: <span className="text-white font-bold">TRITON 1</span> and <span className="text-white font-bold">TRITON 3</span> races, giving the two formats equal relevance and equal rewards across the series.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/10 rounded-2xl group/card hover:border-white/20 transition-all">
                   <p className="text-gray-300 leading-relaxed border-l-2 border-triton-red pl-6 font-sans">
                    Rankings are organized by distance — <span className="text-white">SPRINT, MIDDLE and LONG</span> — as well as by gender, overall classification, and age group, ensuring fair competition.
                  </p>
                </div>
              </div>
            </div>

            {/* Trophy Highlight Box */}
            <div className="mt-20 bg-linear-to-r from-triton-red/20 to-transparent backdrop-blur-2xl p-10 border border-white/10 rounded-2xl overflow-hidden relative">
              <div className="absolute right-0 top-0 w-32 h-full opacity-10 pointer-events-none">
                 <Award className="w-full h-full text-white" />
              </div>
              <p className="text-xl text-white leading-relaxed italic font-sans max-w-4xl relative z-10">
                At the end of each season, the overall champions in each distance are officially crowned. Their names are engraved on the <span className="text-white font-black underline decoration-triton-red underline-offset-8">TRITON Global Ranking Trophy</span>, and each champion receives a replica of the trophy to commemorate their achievement.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-triton-red mb-4">
              <Award className="w-8 h-8" />
              <span className="font-black uppercase tracking-[0.3em] text-sm">Historical Data</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-4">
              Hall of <span className="text-triton-red italic">Fame</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Honoring the athletes who define legacy.
              Explore <strong>TRITON’s ranking competition champions</strong> from each season.
            </p>
          </div>

          <HallOfFame athletes={hallOfFameAthletes} />
        </section>
      </main>
    </div>
  );
}
