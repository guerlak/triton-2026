"use client";

import { useMemo, useState } from "react";
import { ClubRanking } from "@/model/ranking";
import {
  Search,
  Shield,
  Trophy,
  Medal,
  FilterX,
  Plus,
  Users,
  Award,
  Globe,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CountryFlag } from "@/app/utils/CountryFlag";

interface ClubRankingPageClientProps {
  initialClubs?: ClubRanking[] | null;
}

export interface NormalizedClub {
  id: string;
  name: string;
  totalPoints: number;
  totalPointsDisplay: string;
  countryCode: string;
  countryName: string;
  rawFlag: string;
  rank: number;
}

// Extrai o código do país (ex: BR, PT, ES, US) a partir de strings como "[img:/graphics/flags/BR.svg]" ou "BR"
export function extractCountryCode(rawFlag?: string | null): string {
  if (!rawFlag) return "";
  const cleaned = rawFlag.trim();

  // Se já for código ISO de 2 letras
  if (/^[A-Za-z]{2}$/.test(cleaned)) {
    return cleaned.toUpperCase();
  }

  // Se estiver no formato de imagem "[img:/graphics/flags/BR.svg]" ou "/flags/BR.svg"
  const match = cleaned.match(/\/([A-Za-z]{2})\.(?:svg|png|webp|jpg)/i);
  if (match) {
    return match[1].toUpperCase();
  }

  // Tenta capturar duas letras maiúsculas isoladas
  const isoMatch = cleaned.match(/\b([A-Z]{2})\b/);
  if (isoMatch) {
    return isoMatch[1].toUpperCase();
  }

  return "";
}

// Obtém nome legível do país em inglês
function getCountryName(countryCode: string): string {
  if (!countryCode) return "Global";
  try {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(countryCode) || countryCode;
  } catch {
    return countryCode;
  }
}

export function ClubRankingPageClient({ initialClubs = [] }: ClubRankingPageClientProps) {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState<"points-desc" | "points-asc" | "name-asc">("points-desc");
  const [selectedClub, setSelectedClub] = useState<NormalizedClub | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Normalização e cálculo de ranking sequencial
  const normalizedClubs = useMemo<NormalizedClub[]>(() => {

    const list = Array.isArray(initialClubs) ? initialClubs : [];

    const mapped = list.map((item, idx) => {
      const name = item.Club || item.club || item.name || item.Nome || `Club #${idx + 1}`;
      const pointsRaw = item["Total Points"] ?? item.TotalPoints ?? item.total_points ?? item.points ?? item.Points ?? 0;
      const numPoints =
        typeof pointsRaw === "number"
          ? pointsRaw
          : parseFloat(String(pointsRaw).replace(/[^\d.-]/g, "")) || 0;

      const rawFlag = item.NationFlag || item.Flag || item.Nation || item.Country || item.bandeira || "";
      const countryCode = extractCountryCode(rawFlag);
      const countryName = getCountryName(countryCode);

      return {
        id: `${name}-${countryCode}-${idx}`,
        name,
        totalPoints: numPoints,
        totalPointsDisplay: numPoints.toLocaleString(),
        countryCode,
        countryName,
        rawFlag,
        rank: idx + 1,
      };
    });

    // Ordenar primeiro por pontos decrescente para atribuir posições oficiais (Rank)
    const rankedList = [...mapped].sort((a, b) => b.totalPoints - a.totalPoints);
    rankedList.forEach((club, index) => {
      club.rank = index + 1;
    });

    return rankedList;
  }, [initialClubs]);



  // Filtragem e ordenação na visualização
  const filteredClubs = useMemo(() => {
    return normalizedClubs
      .filter((club) => {
        const matchesSearch =
          club.name.toLowerCase().includes(search.toLowerCase()) ||
          club.countryName.toLowerCase().includes(search.toLowerCase()) ||
          club.countryCode.toLowerCase().includes(search.toLowerCase());

        const matchesCountry = countryFilter === "All" || club.countryName === countryFilter;

        return matchesSearch && matchesCountry;
      })
      .sort((a, b) => {
        if (sortOrder === "points-desc") return b.totalPoints - a.totalPoints;

        return a.totalPoints - b.totalPoints; // points-desc por padrão do rank
      });
  }, [normalizedClubs, search, countryFilter, sortOrder]);

  // Top 3 clubes para o pódio (baseado no ranking geral)
  const topClubs = useMemo(() => {
    return normalizedClubs.slice(0, 3);
  }, [normalizedClubs]);

  const handleClubClick = (club: NormalizedClub) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  return (
    <div className="text-white pb-6 sm:pb-10 md:py-16">
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2 mb-6 sm:mb-10 md:mb-12">
        <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
          <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
          <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
          Club <span className="text-triton-red italic">Ranking</span>
        </h2>
        <p className="text-xs sm:text-base md:text-lg text-gray-400 max-w-2xl italic">
          Official club standings for this Stage. Track which triathlon
          teams and clubs lead the scoreboard.
        </p>
      </div>

      {/* Destaque do Pódio / Top 3 Cards (se houver clubes) */}
      {topClubs.length > 0 && (
        <div className="mb-6 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            <Sparkles className="w-4 h-4 text-triton-red" />
            <span>Top Performing Clubs</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {topClubs.map((club) => {
              const isFirst = club.rank === 1;
              const isSecond = club.rank === 2;


              return (
                <motion.div
                  key={club.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all ${isFirst
                    ? "bg-linear-to-b from-triton-red/20 via-neutral-900/90 to-neutral-900 border-triton-red/40 shadow-xl shadow-triton-red/10"
                    : isSecond
                      ? "bg-linear-to-b from-white/10 via-neutral-900/90 to-neutral-900 border-white/20 shadow-lg"
                      : "bg-linear-to-b from-amber-500/10 via-neutral-900/90 to-neutral-900 border-amber-500/20 shadow-lg"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full font-black text-xs sm:text-sm ${isFirst
                        ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                        : isSecond
                          ? "bg-slate-300 text-black shadow-sm"
                          : club.rank === 3
                            ? "bg-amber-700 text-white shadow-sm"
                            : "text-gray-300 bg-white/10"
                        }`}
                    >
                      {club.rank}
                    </span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {club.countryCode ? (
                        <CountryFlag countryCode={club.countryCode} className="w-5 sm:w-6 h-3.5 sm:h-4 shadow-sm" />
                      ) : (
                        <Globe className="w-4 h-4 text-gray-500" />
                      )}
                      <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-gray-400">
                        {club.countryName}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase text-white tracking-tight break-words group-hover:text-triton-red transition-colors">
                      {club.name}
                    </h3>

                    <div className="pt-2 border-t border-white/5 flex items-baseline justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-500">
                        Total Points
                      </span>
                      <span className="font-mono font-black text-base sm:text-xl md:text-2xl text-triton-red">
                        {club.totalPointsDisplay}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Filtros e Busca */}

      {/* Tabela de Classificação */}
      <div className="bg-neutral-900 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/60 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/10">
                <th className="py-3 sm:py-3.5 md:py-5 px-2.5 sm:px-4 md:px-6 text-center w-12 sm:w-14 md:w-20">POS</th>
                <th className="py-3 sm:py-3.5 md:py-5 px-2.5 sm:px-4">Club</th>
                <th className="py-3 sm:py-3.5 md:py-5 px-2.5 sm:px-4 hidden sm:table-cell">Country</th>
                <th className="py-3 sm:py-3.5 md:py-5 px-2.5 sm:px-4 text-center text-triton-red">
                  Total Points
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AnimatePresence mode="wait">
                {filteredClubs.length > 0 ? (
                  filteredClubs.map((club) => (
                    <motion.tr
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={club.id}

                      className="group hover:bg-white/5 transition-all cursor-pointer"
                    >
                      {/* Posição no Ranking */}
                      <td className="py-2.5 sm:py-3 md:py-4 px-2 sm:px-3 md:px-6 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full font-black text-[10px] sm:text-xs ${club.rank === 1
                            ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                            : club.rank === 2
                              ? "bg-slate-300 text-black shadow-sm"
                              : club.rank === 3
                                ? "bg-amber-700 text-white shadow-sm"
                                : "border border-white/10 text-gray-400 bg-white/5"
                            }`}
                        >
                          {club.rank}
                        </span>
                      </td>

                      {/* Nome do Clube + Bandeira */}
                      <td className="py-2.5 sm:py-3 md:py-4 px-2.5 sm:px-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          {club.countryCode ? (
                            <CountryFlag countryCode={club.countryCode} className="w-5 sm:w-6 h-3.5 sm:h-4 shadow-sm shrink-0" />
                          ) : (
                            <Globe className="w-4 h-4 text-gray-500 shrink-0" />
                          )}
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-sm md:text-base font-bold text-white uppercase tracking-wider group-hover:text-triton-red transition-colors">
                              {club.name}
                            </span>
                            <span className="text-[10px] text-gray-500 sm:hidden uppercase font-semibold">
                              {club.countryName}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* País */}
                      <td className="py-2.5 sm:py-3 md:py-4 px-2.5 sm:px-4 hidden sm:table-cell whitespace-nowrap">
                        <span className="text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                          {club.countryName}
                        </span>
                      </td>

                      {/* Total de Pontos */}
                      <td className="py-2.5 sm:py-3 md:py-4 px-2.5 sm:px-4 text-center whitespace-nowrap">
                        <span className="font-mono font-black text-xs sm:text-base md:text-lg text-white group-hover:text-triton-red transition-colors">
                          {club.totalPointsDisplay}
                        </span>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 sm:py-16 text-center text-gray-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <Users className="w-8 h-8 text-gray-600" />
                        <p>No clubs found matching the criteria.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}