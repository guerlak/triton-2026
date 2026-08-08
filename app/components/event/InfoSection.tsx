import { Trophy, Calendar, MapPin, Users, Shuffle } from "lucide-react";
import { Stat } from "@/types";
import Link from "next/link";

const STATS_DATA = {
  en: {
    triton3: [
      {
        value: "3",
        label: "consecutive days",
        description: "Swim - Fri / Bike - Sat / Run - Sun",
        icon: Calendar,
      },
      {
        value: "3",
        label: "distances options",
        description: "SPRINT - MIDDLE - LONG",
        icon: MapPin,
      },
      {
        value: "3",
        label: "competition options",
        description:
          "Individual Triathlon / Corporate Relay / Individual Disciplines",
        icon: Users,
      },
    ],
    triton1: [
      {
        value: "1",
        label: "day of racing",
        description: "Swim + Bike + Run - Single Day",
        icon: Calendar,
      },
      {
        value: "3",
        label: "distances options",
        description: "SPRINT - MIDDLE - LONG",
        icon: MapPin,
      },
      {
        value: "3",
        label: "competition options",
        description:
          "Individual Triathlon / Corporate Relay / Individual Disciplines",
        icon: Users,
      },
    ],
  },
  "pt-BR": {
    triton3: [
      {
        value: "3",
        label: "dias consecutivos",
        description: "Natação - Sex / Bike - Sáb / Corrida - Dom",
        icon: Calendar,
      },
      {
        value: "3",
        label: "opções de distância",
        description: "SPRINT - MIDDLE - LONG",
        icon: MapPin,
      },
      {
        value: "3",
        label: "opções de competição",
        description:
          "Triathlon Individual / Revezamento / Modalidades Avulsas",
        icon: Users,
      },
    ],
    triton1: [
      {
        value: "3",
        label: "OPÇÕES DE DISTÂNCIAS",
        description: "SPRINT - MIDDLE - LONG",
        icon: MapPin,
      },
      {
        value: "3",
        label: "OPÇÕES DE COMPETIÇÃO",
        description: "Triathlon individual / Revezamento / Mix&Match",
        icon: Users,
      },
      {
        value: "1",
        label: "MIX&MATCH",
        description:
          "Personalize a sua prova de acordo com as opções de distâncias",
        icon: Shuffle,
      },
    ],
  },
};

interface InfoSectionProps {
  info: {
    title: string;
    subtitle: string;
    description: string;
  };
  scoring: {
    title: string;
    description: string;
  };
  eventFormat: "triton1" | "triton3";
  language: "pt-BR" | "en";
}

export default function InfoSection({
  info,
  scoring,
  eventFormat,
  language,
}: InfoSectionProps) {
  const currentLanguage = language === "pt-BR" ? "pt-BR" : "en";
  const stats = STATS_DATA[currentLanguage][eventFormat];

  return (
    <section id="info" className="py-18 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
            {language === "pt-BR"
              ? "Um formato inovador"
              : "An innovative race format"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            {language === "pt-BR"
              ? "Permita-se viver esse desafio"
              : "Embrace the challenge"}
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-lg text-center mt-10">
            {language === "pt-BR"
              ? "O TRITON 3 redefine o triathlon tradicional, oferecendo uma experiência surpreendente para quem topa o desafio. Em vez de concentrar as três modalidades em um único dia, cada uma se torna uma prova independente — ao longo de três dias consecutivos. Esse formato exige mais do que resistência. Ele desafia os atletas a performar no mais alto nível, dia após dia — onde consistência, resiliência e estratégia são levadas ao limite."
              : "TRITON 3 reimagines the traditional triathlon experience, offering a unique and exciting challenge for athletes ready to push their limits. Instead of completing all three disciplines in a single day, each becomes a standalone race held over three consecutive days: swimming on Friday, cycling on Saturday, and running on Sunday. This format demands more than endurance alone. It challenges athletes to perform at their highest level day after day, where consistency, resilience, and strategic race management become the keys to success. The result is an unforgettable journey that tests both physical and mental strength while delivering the full TRITON experience."}
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-12 md:mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-8 border border-white/10 bg-white/5 rounded-lg hover:border-triton-red/50 transition-all duration-300 group"
            >
              <div className="font-black text-3xl md:text-5xl w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 ">
                3
              </div>
              <div className="text-base md:text-xl font-bold text-triton-red uppercase mb-1 md:mb-2">
                {stat.label}
              </div>
              <p className="text-gray-400 text-xs md:text-sm font-medium max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demographics Banner */}
        <div
          className="bg-linear-to-r from-neutral-900 to-neutral-950 rounded-2xl p-8 md:p-12 border-l-4 border-triton-red
         shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h3 className="text-3xl font-black uppercase text-white mb-4">
                {scoring.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {scoring.description}
              </p>
            </div>

            <Link
              href="/ranking"
              className="flex flex-col items-center justify-center text-center w-full p-4 border border-white/10 bg-white/5 rounded-lg hover:border-triton-red/50 active:bg-white/10 active:scale-95 transition-all duration-300 lg:border-0 lg:bg-transparent lg:p-4"
            >
              <Trophy className="text-triton-red mb-3 w-8 h-8 mx-auto" />
              <span className="text-3xl font-black text-white">Global</span>
              <span className="text-xs font-bold text-gray-400 uppercase text-center mt-1">
                Ranking
              </span>
              <span className="text-triton-red text-[10px] font-bold uppercase tracking-wide mt-2 lg:hidden">
                Ver ranking →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
