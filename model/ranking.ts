export interface Athlete {
  Bib: number;
  Contest: string;
  Name: string;
  Gender: string;
  Country: string;
  "Global Standings": number;
  "National Standings": number;
  "Swim Ranking": number;
  "Bike Ranking": number;
  "Run Ranking": number;
  "Total Points": string;
  Salvador: string;
  China: string;
  Rio: string;
  Lisboa: string;
  [key: string]: any; // Para outros campos possíveis
}