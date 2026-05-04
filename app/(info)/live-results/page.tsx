import MainButton from "../ui/MainButton";
import LiveResultsClientWrapper from "./LiveResultsClientWrapper";

export default async function LiveResultsPage() {

  const url = "https://api.raceresult.com/371805/RQDKNSO0GU02BW4IF4X1G7AF12S073FW"

  const res = await fetch(url, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const urlLiveResults = "https://track.raceresult.com/371805/"

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-triton-red animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-triton-red">Live Feed Active</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
              Live <span className="text-triton-red italic">Results</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Track real-time results from the next <strong>TRITON</strong> stage and stay on TOP of every move.
            </p>
          </div>
          <div className="shrink-0">
            <MainButton href={urlLiveResults} external>Full Dashboard</MainButton>
          </div>
        </div>

        <LiveResultsClientWrapper initialAthletes={data} />
      </div>
    </main>
  );
}


