import RankingPageClient from "./RankingPageClient";
import Heading from "../../ui/Heading";
import { ApiRankingRepo } from "@/repositories/ApiRankingRepo";
import { fetchDetails, fetchGeneralRanking } from "@/services/RankingService";
import HallOfFame from "./HallOfFame";
import { Award, Trophy } from "lucide-react";
import Image from "next/image";


export const metadata = {
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

    <main className="py-20 bg-neutral-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-white">
        <div className="text-center md:text-left mb-10">
          <div className="flex items-center justify-center md:justify-start gap-3 text-triton-red mb-4">
            <Trophy className="w-8 h-8" />
            <span className="font-black uppercase tracking-[0.3em] text-sm">Global Ranking</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            Leaderboard <span className="text-triton-red italic">2026</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Complete ranking of all <strong>TRITON</strong> World Series participants. Use the filters below to find athletes by name,
            BIB number, category, or distance.
          </p>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RankingPageClient initialAthletes={data} />
      </section>

      <section className="relative w-full overflow-hidden my-10 group bg-triton-gray py-15">
        {/* Background Image with Creative Effects */}

        <Heading text1="GLOBAL RANKING" text2="TWS Global Standings" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div className="space-y-8">

              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-white font-black leading-tight uppercase font-sans">
                  The TRITON Global Ranking is an annual, by-points competition that you score at every race.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed font-sans max-w-lg">
                  Throughout the season, athletes who compete in any TRITON event worldwide earn points that
                  contribute to their position in the ranking. At the end of the year, the top 3 results of all races
                  plus the points scored in the finals, are consolidated to determine the final standings.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/10 rounded-2xl group/card hover:border-white/20 transition-all">
                <p className="text-gray-300 leading-relaxed border-l-2 border-triton-red pl-6 font-sans">
                  The ranking is achieved by combining the points achieved at both: <span className="text-white font-bold">TRITON 1</span> and <span className="text-white font-bold">TRITON 3</span> races, giving the two formats equal relevance and equal rewards across the series.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/10 rounded-2xl group/card hover:border-white/20 transition-all">
                <p className="text-gray-300 leading-relaxed border-l-2 border-triton-red pl-6 font-sans">
                  Rankings are organized by distance — <span className="text-white">SPRINT, MIDDLE and LONG</span> — as well as by gender, overall classification, and age group, ensuring fair competition.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-triton-red/20 
                flex items-center justify-center p-12">
                <Image
                  src="/images/triton-trophy-athletes.jpg"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />

              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-triton-red rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-white/20 rounded-bl-3xl"></div>
            </div>
          </div>
          {/* Trophy Highlight Box */}
          <div className="mt-20  backdrop-blur-2xl p-10  text-center">
            {/* <div className="absolute right-0 top-0 w-32 h-full opacity-10 pointer-events-none">
                <Award className="w-full h-full text-white" />
              </div> */}
            <p className="text-xl text-white leading-relaxed italic font-sans relative z-10">
              At the end of each season, the overall champions in each distance are officially crowned.
              Their names are engraved on the <span className="font-black">TRITON Global Ranking Trophy</span>, and each champion receives a replica of the trophy to commemorate their achievement.
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
            Ranking <span className="text-triton-red italic">Champions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Honoring the athletes who define legacy.
            Explore <strong>TRITON’s ranking competition champions</strong> from each season.
          </p>
        </div>

        <HallOfFame athletes={hallOfFameAthletes} />
      </section>
    </main>

  );
}
