import { Athlete } from "@/model/ranking";
import { IRankingRepo } from "./IRankingRepo";

export class ApiRankingRepo implements IRankingRepo {
  private readonly url: string;

  constructor() {
    const url = process.env.RANKING_API_URL;
    if (!url) {
      throw new Error("RANKING_API_URL environment variable is not defined");
    }
    this.url = url;
  }

  async getRankings(): Promise<Athlete[]> {
    const res = await fetch(this.url, {
      next: { revalidate: 1800 }, // cache for 30 minutes
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch rankings: ${res.status} ${res.statusText}`
      );
    }

    return res.json() as Promise<Athlete[]>;
  }
}
