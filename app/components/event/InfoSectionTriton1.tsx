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
        description: "Sprint - Middle - Long",
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
        description: "Sprint - Middle - Long",
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
        description: "Natação - Sex / Ciclismo - Sáb / Corrida - Dom",
        icon: Calendar,
      },
      {
        value: "3",
        label: "opções de distância",
        description: "Sprint - Middle - Long",
        icon: MapPin,
      },
      {
        value: "3",
        label: "opções de competição",
        description:
          "Triathlon Individual / Revezamento / Modalidades Individuais",
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

export default function InfoSection({ info, scoring, eventFormat, language }: InfoSectionProps) {
  const currentLanguage = language === "pt-BR" ? "pt-BR" : "en";
  const stats = STATS_DATA[currentLanguage][eventFormat];

  return (
    <section id="info" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
            {language === "pt-BR" ? "O formato clássico do triathlon" : "The classic triathlon format"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            {language === "pt-BR" ? "impulsionado pela essência TRITON" : "Take on the challenge"}
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-lg text-center mt-10">
            {language === "pt-BR" ? "O TRITON 1 representa a essência do triathlon em sua forma mais intensa e clássica: um desafio de um único dia, onda cada segundo importa. Parte do circuito internacional do TRITON Wolrd Series, o formato combina natação, ciclismo e corrida, com as respectivas transições em uma experiencia dinamica e desafiadora, que une a intensidade do triathlon tradional à inovação e a experiência única do universo TRITON." : "TRITON 1 embodies the essence of triathlon in its purest and most intense form: a one-day challenge where every second counts. As part of the international TRITON World Series circuit, this format brings together swimming, cycling, and running—along with the critical transitions between disciplines—into a dynamic and demanding race experience. Combining the intensity of traditional triathlon with innovation and the distinctive TRITON atmosphere, TRITON 1 delivers a unique racing experience for athletes seeking performance, excitement, and achievement."}
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 border border-white/10 bg-white/5 rounded-lg hover:border-triton-red/50 transition-all duration-300 group">
              {stat.icon && (
                <div className="bg-triton-red/10 text-triton-red w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-triton-red group-hover:text-white transition-all duration-300">
                  <stat.icon size={24} className="stroke-2" />
                </div>
              )}
              <div className="text-xl font-bold  uppercase mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm font-medium max-w-xs mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Demographics Banner */}
        <div className="bg-linear-to-r from-neutral-900 to-neutral-950 rounded-2xl p-8 md:p-12 border-l-4 border-triton-red
         shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="col-span-4">
              <h3 className="text-3xl font-black uppercase text-white mb-4">{language === "pt-BR" ? "Uma disputa que ultrapassa os limites da etapa" : "A race that goes beyond the limits of the stage"}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {language === "pt-BR" ? "Mais do que uma competição de um único dia, o TRITON 1 é uma experiência conectada a um circuito global. A prova soma pontos para o ranking internacional do TRITON World Series, que reúne atletas de mais de 40 nacionalidades e premia, ao final da temporada, os melhores competidores de cada distância. Além disso, a etapa também é classificatória para o TRITON World Finals." : "More than a one-day competition, TRITON 1 is an experience connected to a global circuit. The race awards points for the international TRITON World Series ranking, which brings together athletes from over 40 nationalities and rewards the best competitors in each distance at the end of the season. Furthermore, the stage also serves as a qualifier for the TRITON World Finals."}
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
    </section>
  )
}