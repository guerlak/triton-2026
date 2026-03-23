import { Athlete } from "@/model/ranking";

export interface IRankingRepo {
    getRankings(): Promise<Athlete[]>;
}