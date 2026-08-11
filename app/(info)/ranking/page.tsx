import RankingPageClient from "./RankingPageClient";
import Heading from "../../ui/Heading";
import { ApiRankingRepo } from "@/repositories/ApiRankingRepo";
import { fetchGeneralRanking } from "@/services/RankingService";
import HallOfFame from "./HallOfFame";
import { Award, Trophy } from "lucide-react";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ranking | Triton World Series",
  description: "Check the global standings and points for all Triton World Series athletes.",
};

export default async function RankingPage() {

  const data = await fetchGeneralRanking(new ApiRankingRepo());

  if (!data) {
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
      Points: "11580",
      Distance: "Sprint Distance",
      Nation: "BR",
      imgUrl: "/images/hall-of-fame/antonio-barreto.png"
    },
    {
      Bib: 2,
      Contest: "Triton World Series",
      Name: "Cora Dorst",
      Gender: "Women",
      Rank: 1,
      Points: "11820",
      Distance: "Sprint Distance",
      Nation: "NL",
      imgUrl: "/images/hall-of-fame/cora-dorst.png"
    },
    {
      Bib: 3,
      Contest: "Triton World Series",
      Name: "Marcos Salamonde ",
      Gender: "Men",
      Rank: 1,
      Points: "11910",
      Distance: "Middle Distance",
      Nation: "BR",
      imgUrl: "/images/hall-of-fame/marcos-salamonde.png"
    },
    {
      Bib: 4,
      Contest: "Triton World Series",
      Name: "Carla Abrunhosa",
      Gender: "Women",
      Rank: 1,
      Points: "11880",
      Distance: "Middle Distance",
      Nation: "BR",
      imgUrl: "/images/hall-of-fame/carla-abrunhosa.png"
    },
    {
      Bib: 5,
      Contest: "Triton World Series",
      Name: "Rui Velez",
      Gender: "Men",
      Rank: 1,
      Points: "10290",
      Distance: "Long Distance",
      Nation: "PT",
      imgUrl: "/images/hall-of-fame/rui-velez.png"
    },
    {
      Bib: 6,
      Contest: "Triton World Series",
      Name: "Alba Rodriguez",
      Gender: "Women",
      Rank: 1,
      Points: "11880",
      Distance: "Long Distance",
      Nation: "ES",
      imgUrl: "/images/hall-of-fame/alba-rodriguez.png"
    }
  ];

  return (

    <main className="py-8 sm:py-12 md:py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 md:mb-12 text-white">
        <div className="text-center md:text-left mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-triton-red mb-3 sm:mb-4">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm">Global Ranking</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight mb-4 sm:mb-6 tracking-tight break-words">
            Leaderboard <span className="text-triton-red italic">2026</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg">
            Complete ranking of all <strong>TRITON</strong> World Series participants. Use the filters below to find athletes by name,
            BIB number, category, or distance.
          </p>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RankingPageClient initialAthletes={data} />
      </section>

      <section className="relative w-full overflow-hidden my-8 sm:my-10 group bg-triton-gray py-8 sm:py-12 md:py-16">
        {/* Background Image with Creative Effects */}

        <Heading text1="GLOBAL RANKING" text2="TWS Global Standings" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-6 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-12 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">

              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-black leading-snug uppercase font-sans">
                  The TRITON Global Ranking is an annual, by-points competition that you score at every race.
                </p>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-lg">
                  Throughout the season, athletes who compete in any TRITON event worldwide earn points that
                  contribute to their position in the ranking. At the end of the year, the top 3 results of all races
                  plus the points scored in the finals, are consolidated to determine the final standings.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 border border-white/10 rounded-2xl group/card hover:border-white/20 transition-all">
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed border-l-2 border-triton-red pl-4 sm:pl-6 font-sans">
                  The ranking is achieved by combining the points achieved at both: <span className="text-white font-bold">TRITON 1</span> and <span className="text-white font-bold">TRITON 3</span> races, giving the two formats equal relevance and equal rewards across the series.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 border border-white/10 rounded-2xl group/card hover:border-white/20 transition-all">
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed border-l-2 border-triton-red pl-4 sm:pl-6 font-sans">
                  Rankings are organized by distance — <span className="text-white">SPRINT, MIDDLE and LONG</span> — as well as by gender, overall classification, and age group, ensuring fair competition.
                </p>
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-triton-red/20 
                flex items-center justify-center p-6 sm:p-12">
                <Image
                  src="/images/triton-trophy-athletes.jpg"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />

              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-24 sm:h-24 border-t-4 border-r-4 border-triton-red rounded-tr-2xl sm:rounded-tr-3xl"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 sm:w-24 sm:h-24 border-b-4 border-l-4 border-white/20 rounded-bl-2xl sm:rounded-bl-3xl"></div>
            </div>
          </div>
          {/* Trophy Highlight Box */}
          <div className="mt-8 sm:mt-12 md:mt-20 backdrop-blur-2xl p-4 sm:p-8 md:p-10 text-center">
            <p className="text-xs sm:text-lg md:text-xl text-white leading-relaxed italic font-sans relative z-10">
              At the end of each season, the overall champions in each distance are officially crowned.
              Their names are engraved on the <span className="font-black">TRITON Global Ranking Trophy</span>, and each champion receives a replica of the trophy to commemorate their achievement.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-2.5 sm:gap-3 text-triton-red mb-3 sm:mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm">Historical Data</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-3 sm:mb-4 tracking-tight break-words">
            Ranking <span className="text-triton-red italic">Champions</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base md:text-lg">
            Honoring the athletes who define legacy.
            Explore <strong>TRITON’s ranking competition champions</strong> from each season.
          </p>
        </div>

        <HallOfFame athletes={hallOfFameAthletes} />
      </section>
    </main>

  );
}
