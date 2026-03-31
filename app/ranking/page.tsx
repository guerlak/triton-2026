import React from "react";
import RankingPageClient from "./RankingPageClient";
import Navbar from "../components/Navbar";
import HeadLine from "../ui/HeadLine";
import { ApiRankingRepo } from "@/repositories/ApiRankingRepo";
import { fetchDetails, fetchGeneralRanking, fetchLeaderboard } from "@/services/RankingService";
import HallOfFame from "./HallOfFame";
import { Award } from "lucide-react";


export const metadata = {
  title: "Ranking | Triton World Series",
  description: "Check the global standings and points for all Triton World Series athletes.",
};

export default async function RankingPage() {
  const data = await fetchGeneralRanking(new ApiRankingRepo());
  const details = await fetchDetails(new ApiRankingRepo());
  const leaderBoard = await fetchLeaderboard(new ApiRankingRepo());

  const rankingPosition = 1;

  if (!data || !leaderBoard) {
    return (
      <div className="bg-neutral-950 min-h-screen text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-black uppercase mb-4">Error loading ranking data</h1>
        <p className="text-gray-400">Please try again later.</p>
        <a href="/" className="mt-8 text-triton-red font-bold hover:underline">Return to Home</a>
      </div>
    );
  }

  const hallFameData = {
    menSprint: leaderBoard.filter(a => a.Gender === 'Men' && a.Rank <= rankingPosition && a.Distance === 'Sprint Distance'),
    womenSprint: leaderBoard.filter(a => a.Gender === 'Women' && a.Rank <= rankingPosition && a.Distance === 'Sprint Distance'),
    menMiddle: leaderBoard.filter(a => a.Gender === 'Men' && a.Rank <= rankingPosition && a.Distance === 'Middle Distance'),
    womenMiddle: leaderBoard.filter(a => a.Gender === 'Women' && a.Rank <= rankingPosition && a.Distance === 'Middle Distance'),
    menLong: leaderBoard.filter(a => a.Gender === 'Men' && a.Rank <= rankingPosition && a.Distance === 'Long Distance'),
    womenLong: leaderBoard.filter(a => a.Gender === 'Women' && a.Rank <= rankingPosition && a.Distance === 'Long Distance'),
  }

  return (
    <div className="bg-neutral-950">
      <Navbar />
      <main className="pt-20 pb-20">



        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RankingPageClient initialAthletes={data} />
        </section>

        <HeadLine text1="GLOBAL RANKING" text2="TWS Global Standings" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <div className="max-w-xl">
              <p className="text-xl text-white font-medium leading-relaxed mb-6 font-sans">
                The TRITON Global Ranking is an annual, by-points competition that you score at every race.
              </p>
              <p className="text-gray-400 leading-relaxed font-sans">
                Throughout the season, athletes who compete in any TRITON event worldwide earn points that contribute to their position in the ranking. At the end of the year, the results of all races are consolidated to determine the final standings.
              </p>
            </div>

            <div className="max-w-xl space-y-6">
              <p className="text-gray-400 leading-relaxed font-sans">
                The ranking is achieved by combining the points achieved at both: <span className="text-white font-bold">TRITON 1</span> and <span className="text-white font-bold">TRITON 3</span> races, giving the two formats equal relevance and equal rewards across the series.
              </p>
              <p className="text-gray-400 leading-relaxed border-l-2 border-triton-red pl-6 font-sans">
                Rankings are organized by distance — <span className="text-white">SPRINT, MIDDLE and LONG</span> — as well as by gender, overall classification, and age group, ensuring fair competition and a meaningful comparison among peers within the global TRITON community.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-neutral-900/50 p-8 border border-white/5 rounded-sm">
            <p className="text-gray-400 leading-relaxed italic font-sans">
              At the end of each season, the overall champions in each distance are officially crowned. Their names are engraved on the <span className="text-white font-bold">TRITON Global Ranking Trophy</span>, and each champion receives a replica of the trophy to commemorate their achievement.
            </p>
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
              Honoring the champions who define the Triton legacy. Explore the top performers from each season.
            </p>
          </div>
        </section>

        <HallOfFame hallFameData={hallFameData} />

      </main>
    </div>
  );
}
