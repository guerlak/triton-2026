import { Athlete, ClubRanking } from "@/model/ranking";

export interface IRankingRepo {
  getGeneralRankings(): Promise<Athlete[]>;
  getLeaderboard(): Promise<Athlete[]>;
  getDetails(): Promise<Athlete[]>;
  getClubRankings(): Promise<ClubRanking[]>;
}