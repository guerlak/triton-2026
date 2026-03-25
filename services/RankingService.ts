// services/RankingService.ts
import { IRankingRepo } from "@/repositories/IRankingRepo";
import { Athlete } from "@/model/ranking";

export async function fetchGeneralRanking(repo: IRankingRepo): Promise<Athlete[] | null> {
  try {
    return await repo.getGeneralRankings();
  } catch (error) {
    console.error("Failed to fetch rankings:", error);
    return null;
  }
}

export async function fetchLeaderboard(repo: IRankingRepo): Promise<Athlete[] | null> {
  try {
    return await repo.getLeaderboard();
  } catch (error) {
    console.error("Failed to fetch leaderboard:", error);
    return null;
  }
}

export async function fetchDetails(repo: IRankingRepo): Promise<Athlete[] | null> {
  try {
    return await repo.getDetails();
  } catch (error) {
    console.error("Failed to fetch details:", error);
    return null;
  }
}

