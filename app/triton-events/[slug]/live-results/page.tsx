import MainButton from "@/app/ui/MainButton";
import LiveResultsClientWrapper from "./LiveResultsClientWrapper";
import { div } from "framer-motion/client";
import { Radio } from "lucide-react";

export default async function LiveResultsPage() {

  const url = "https://api.raceresult.com/371805/RQDKNSO0GU02BW4IF4X1G7AF12S073FW"
  const resultsAgeGroupUrl = "https://api.raceresult.com/371805/9WXOB72R7FJ8XA4UU1DW4NC11DJYIZG0"

  const res = await fetch(resultsAgeGroupUrl, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const urlLiveResults = "https://resultscui.active.com/events/TRITONSALVADOR2026"
  const activeEvent = true;

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">

            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
              All <span className="text-triton-red italic">Results</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Check the results of the <strong>TRITON 1 </strong>Salvador.
            </p>
          </div>
          <div className="shrink-0">
            {activeEvent ? <a href={urlLiveResults} target="_blank" className="flex items-center gap-2 text-2xl font-black"><span className="text-triton-red animate-pulse text-4xl font-black flex items-center gap-2"><Radio size={34} /></span><span>Check Live Results</span></a> : <></>}
          </div>
        </div>

        <LiveResultsClientWrapper initialAthletes={data} />
      </div>
    </main>
  );
}
