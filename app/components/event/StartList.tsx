import StartListClientWrapper from "./StartListClientWrapper";
import { getEventData } from "@/services/EventService";
import MainButton from "@/app/ui/MainButton";
import { Clock } from "lucide-react";

export default async function StartList({ slug }: { slug: string }) {
  const eventData = await getEventData(slug);
  const url = eventData?.startListApiUrl;
  const tritonType = eventData?.eventFormat === "triton3" ? "TRITON 3" : "TRITON 1";
  const thisEvent = eventData?.title || "TRITON Event";

  if (!url) {
    return (
      <main className="min-h-[60vh] bg-neutral-950 text-white pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-40" id="start-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-none mb-4 sm:mb-6">
                Start<span className="text-triton-red">List</span>
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-gray-400">
                Check the startlist of the <strong>{tritonType}</strong> {thisEvent}.
              </p>
            </div>
          </div>

          {/* Empty State Card & Table Shell */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            {/* Header Status Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-triton-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-triton-red"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red">
                  List Status
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                Pending Release
              </span>
            </div>

            {/* Mock Table Preview */}


            {/* Overlay Center Notice Box */}
            <div className="my-6 sm:my-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-triton-red/10 border border-triton-red/30 flex items-center justify-center mb-6 text-triton-red shadow-[0_0_20px_rgba(234,30,36,0.15)]">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-3">
                Start List Coming Soon
              </h2>
              <p className="text-xs sm:text-base text-gray-400 mb-8 leading-relaxed">
                The official start list featuring athlete bib numbers and categories will be published closer to the event date.
              </p>


            </div>
          </div>
        </div>
      </main>
    );
  }

  const res = await fetch(url, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-40" id="start-list">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase mb-4 sm:mb-6 leading-none">
              Start<span className="text-triton-red">List</span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-400">
              Check the startlist of the <strong>{tritonType}</strong> {thisEvent}.
            </p>
          </div>
        </div>
        <StartListClientWrapper initialAthletes={data} />
      </div>
    </main>
  );
}




