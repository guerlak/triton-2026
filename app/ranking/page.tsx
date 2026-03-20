import React from "react";
import RankingPageClient from "./RankingPageClient";
import Navbar from "../components/Navbar";
import HeadLine from "../ui/HeadLine";

async function getRankings() {

  const url = process.env.RANKING_API_URL;

  if (!url) {
    console.error("RANKING_API_URL is not defined");
    return null;
  }

  const res = await fetch(url, {
    // Cache de 1 hora para evitar excesso de requisições e garantir boa performance
    next: { revalidate: 1800 },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'application/json'
    }
  });

  if (!res.ok) {
    console.error(`Failed to fetch rankings: ${res.status} ${res.statusText}`);
    return null;
  }
  return res.json();
}

export const metadata = {
  title: "Ranking | Triton World Series",
  description: "Check the global standings and points for all Triton World Series athletes.",
};

export default async function RankingPage() {
  const data = await getRankings();

  if (!data) {
    return (
      <div className="bg-neutral-950 min-h-screen text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-black uppercase mb-4">Error loading ranking data</h1>
        <p className="text-gray-400">Please try again later.</p>
        <a href="/" className="mt-8 text-triton-red font-bold hover:underline">Return to Home</a>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950">
      <Navbar />
      <main className="pt-20 pb-20">
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RankingPageClient initialAthletes={data} />
        </section>
      </main>
    </div>
  );
}
