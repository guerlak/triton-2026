
import Image from "next/image";
import { Globe2, Trophy, Flame, Crown, ArrowDown } from "lucide-react";
import worldMapFinals from "@/public/images/world-finals/world-map-finals.jpg";

interface WorldFinalsJourneySectionProps {
  language?: string;
}

export default function WorldFinalsJourneySection({
  language = "en",
}: WorldFinalsJourneySectionProps) {
  const isPt = language === "pt" || language === "pt-BR";

  const pillars = isPt
    ? [
      {
        icon: Globe2,
        tag: "ROTA GLOBAL",
        title: "Continentes Conectados",
        desc: "Etapas qualificatórias nas Américas, Europa e Ásia unindo atletas de mais de 30 países.",
      },
      {
        icon: Flame,
        tag: "MULTIPLICADOR",
        title: "3× Pontos no Ranking",
        desc: "A prova decisiva onde os pontos multiplicam por três para consagrar o topo da temporada.",
      },
      {
        icon: Crown,
        tag: "DECISÃO MUNDIAL",
        title: "Coroação dos Campeões",
        desc: "Todas as distâncias e categorias reunidas em um único palco para definir quem reina no TRITON.",
      },
    ]
    : [
      {
        icon: Globe2,
        tag: "GLOBAL ROAD",
        title: "Continents Connected",
        desc: "Qualifying stages spanning the Americas, Europe and Asia uniting athletes from 30+ nations.",
      },
      {
        icon: Flame,
        tag: "MULTIPLIER",
        title: "3× Ranking Points",
        desc: "The decisive finale awarding triple ranking points to seal the global season leaderboards.",
      },
      {
        icon: Crown,
        tag: "WORLD DECIDER",
        title: "Crowning the Champions",
        desc: "All distances and categories converging on one global stage to crown the ultimate TRITON champions.",
      },
    ];

  return (
    <section id="journey" className="relative overflow-hidden py-10 sm:py-16 md:py-24 border-y border-white/10 bg-neutral-950">
      {/* Background Graphic: Global Route Map */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={worldMapFinals}
          alt="TRITON World Series Global Journey"
          fill

          quality={90}

          className="object-cover object-center md:object-right opacity-90 sm:opacity-100 filter brightness-115 contrast-120"
          sizes="100vw"
        />
        {/* Directional gradient for text readability without muddying the map graphic */}
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/80 via-45% to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/90 via-neutral-950/40 to-neutral-950 md:hidden" />


      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-triton-red/40 bg-triton-red/10 backdrop-blur-md">
            <Globe2 className="w-3.5 h-3.5 text-triton-red animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red">
              {isPt
                ? "JORNADA MUNDIAL • A GRANDE FINAL"
                : "GLOBAL JOURNEY • THE GRAND FINALE"}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-white tracking-tight">
              {isPt ? (
                <>
                  O MUNDO FOI A ARENA. <br />
                  <span className="text-triton-red italic">
                    ESTA É A ETAPA FINAL.
                  </span>
                </>
              ) : (
                <>
                  THE WORLD WAS THE ARENA. <br />
                  <span className="text-triton-red italic">
                    THIS IS THE FINAL STAGE.
                  </span>
                </>
              )}
            </h2>
          </div>

          {/* Narrative Paragraph */}
          <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans max-w-xl">
            {isPt
              ? "Das Américas à Europa e Ásia, o TRITON World Series percorreu o mundo. Agora, todas as rotas convergem para a decisão suprema: a Grande Final Mundial, onde os campeões da temporada serão coroados."
              : "Across the Americas, Europe, and Asia, the TRITON World Series traversed the globe. Now, all trajectories converge for the ultimate showdown: the Grand World Finals, where the season champions will be crowned."}
          </p>

          {/* Quick CTA Anchor */}


        </div>

        {/* 3 Telemetry Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 pt-6 border-t border-white/10">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-900/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 hover:border-triton-red/50 shadow-xl overflow-hidden"
              >
                {/* Subtle Glow Corner */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-triton-red/10 rounded-full blur-2xl group-hover:bg-triton-red/20 transition-all pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-triton-red/15 border border-triton-red/30 flex items-center justify-center text-triton-red group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-triton-red uppercase bg-triton-red/10 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide mb-1.5 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

