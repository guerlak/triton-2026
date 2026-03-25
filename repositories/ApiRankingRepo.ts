import { Athlete } from "@/model/ranking";
import { IRankingRepo } from "./IRankingRepo";

export class ApiRankingRepo implements IRankingRepo {
  private readonly url: string;
  private readonly leaderboardUrl: string;
  private readonly detailsUrl: string;

  constructor() {
    this.url = this.getEnvVar("RANKING_API_URL");
    this.leaderboardUrl = this.getEnvVar("RANKING_LEADERBOARD_API_URL");
    this.detailsUrl = this.getEnvVar("RANKING_DETAILS_API_URL");
  }

  private getEnvVar(name: string): string {
    const value = process.env[name];
    if (!value) {
      throw new Error(`${name} environment variable is not defined`);
    }
    return value;
  }

  async getGeneralRankings(): Promise<Athlete[]> {
    return this.fetchRankingData(this.url);
  }

  async getLeaderboard(): Promise<Athlete[]> {
    return this.fetchRankingData(this.leaderboardUrl);
  }

  async getDetails(): Promise<Athlete[]> {
    return this.fetchRankingData(this.detailsUrl);
  }

  private async fetchRankingData(url: string): Promise<Athlete[]> {
    const res = await fetch(url, {
      next: { revalidate: 1800 }, // cache for 30 minutes
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as Athlete[];
  }
}

