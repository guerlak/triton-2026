import TopFiveAthletes from "@/app/components/event/TopFIveAthletes";
import AthleteResultsClientWrapper from "@/app/components/event/AthleteResultsClientWrapper";
import AthleteResultsClientWrapperTriton3 from "@/app/components/event/AthleteResultsClientWrapperTriton3";
import AthleteResultsClientWrapperTriton3V2 from "@/app/components/event/AthleteResultsClientWrapperTriton3V2";
import { getAthleteResultsFromAPI } from "@/services/RaceResultsService";

export default async function AthleteResultsPage({ url }: { url?: string }) {
  let data = [];

  const mockUrl = "https://api.raceresult.com/371805/8V8J3H8N4GPDVM2U89Q075VG4V6AC9TK";

  const athletes = await getAthleteResultsFromAPI(mockUrl);


  return (
    <main className="min-h-screen bg-black text-white py-20" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          {/* <TopFiveAthletes initialAthletes={data} /> */}
          <AthleteResultsClientWrapperTriton3V2 initialAthletes={athletes} />
        </div>
      </div>
    </main>
  );
}
