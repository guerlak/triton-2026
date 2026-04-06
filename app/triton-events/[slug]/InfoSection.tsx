import { Trophy } from "lucide-react";
import { Stat } from "@/types";
import Link from "next/link";

export const MARKET_STATS: Stat[] = [
  { value: "3", label: "consectutive days", description: "Swim - Fri / Bike - Sat / Run - Sun" },
  {
    value: "3",
    label: "distances options",
    description: "Sprint - Middle - Long",
  },
  { value: "3", label: "competition options", description: "Individual Triathlon / Corporate Relay / Individual Disciplines" },
];


export default function InfoSection() {
  return (
    <section id="formats" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">An innovative format
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            Beyond expectations starts here
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg text-center mt-10">
            TRITON 3 redefines the traditional triathlon. Instead of compressing all three disciplines into a single day,
            each becomes its own race—across three consecutive days. Swim on Friday. Bike on Saturday. Run on Sunday. This format demands more than endurance. It challenges athletes to perform at their peak, day after day—where consistency, resilience, and strategy are pushed to the limit.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {MARKET_STATS.map((stat, index) => (
            <div key={index} className="text-center p-8 border border-white/10 bg-white/5 rounded-lg hover:border-triton-red/50 transition-colors duration-300">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-triton-red uppercase mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm font-medium max-w-xs mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Demographics Banner */}
        <div className="bg-linear-to-r from-neutral-900 to-neutral-950 rounded-2xl p-8 md:p-12 border-l-4 border-triton-red
         shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="col-span-4">
              <h3 className="text-3xl font-black uppercase text-white mb-4">INNOVATIVE SCORING SYSTEM</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Each discipline carries equal weight, rewarding athletes who perform consistently across all three. This race also contributes points to the TRITON World global ranking and serves as a qualifying event for the World Championship.
              </p>
            </div>

            <Link href="/ranking" className="flex flex-col items-center justify-center p-4">
              <Trophy className="text-triton-red mb-3 w-8 h-8" />
              <span className="text-3xl font-black text-white">Global</span>
              <span className="text-xs font-bold text-gray-400 uppercase text-center mt-1">Ranking</span>
            </Link>

          </div>

        </div>
      </div>
    </section >
  )
}