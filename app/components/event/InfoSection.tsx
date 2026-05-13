import { Trophy } from "lucide-react";
import { Stat } from "@/types";
import Link from "next/link";

interface InfoSectionProps {
  stats: Stat[];
  info: {
    title: string;
    subtitle: string;
    description: string;
  };
  scoring: {
    title: string;
    description: string;
  };
}

export default function InfoSection({ stats, info, scoring }: InfoSectionProps) {
  return (
    <section id="formats" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
            {info.title}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            {info.subtitle}
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-lg text-center mt-10">
            {info.description}
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {stats.map((stat, index) => (
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
              <h3 className="text-3xl font-black uppercase text-white mb-4">{scoring.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {scoring.description}
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