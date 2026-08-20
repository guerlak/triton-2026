// services/RaceResultService.ts
import { cache } from "react";

export const getAthleteResultsFromAPI = cache(async (apiUrl?: string) => {
  if (!apiUrl) return [];

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 60 }, // Cache por 60 segundos
    });

    if (!res.ok) {
      console.error(`Failed to fetch results from ${apiUrl}:`, res.statusText);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching athlete results:", error);
    return [];
  }
});
