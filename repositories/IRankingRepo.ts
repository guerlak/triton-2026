import { Athlete } from "@/model/ranking";

export interface IRankingRepo {
  getGeneralRankings(): Promise<Athlete[]>;
  getLeaderboard(): Promise<Athlete[]>;
  getDetails(): Promise<Athlete[]>;
}