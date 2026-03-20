import React from "react";
import RankingPageClient from "./RankingPageClient";
import Navbar from "../components/Navbar";

async function getRankings() {
  const res = await fetch("https://api.raceresult.com/371805/52CHLQ2F75QS7P4MFBU2J3AZIVFHXUUU", {
    // Cache de 1 hora para evitar excesso de requisições e garantir boa performance
    next: { revalidate: 3600 },
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
      <main>
        <RankingPageClient initialAthletes={data} />
      </main>
    </div>
  );
}
