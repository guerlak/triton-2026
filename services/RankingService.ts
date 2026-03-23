// services/RankingService.ts
import { IRankingRepo } from "@/repositories/IRankingRepo";
import { Athlete } from "@/model/ranking";

export async function fetchRankings(repo: IRankingRepo): Promise<Athlete[] | null> {
  try {
    return await repo.getRankings();
  } catch (error) {
    console.error("Failed to fetch rankings:", error);
    return null;
  }
}
