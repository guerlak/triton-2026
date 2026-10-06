import StartListClientWrapper from "./StartListClientWrapper";
import { getEventData } from "@/services/EventService";
import MainButton from "@/app/ui/MainButton";
import { Clock, Users } from "lucide-react";

export default async function StartList({ slug }: { slug: string }) {
  const eventData = await getEventData(slug);
  const url = eventData?.athleteArea?.startListApiUrl || eventData?.startListApiUrl;
  const tritonType = eventData?.eventFormat === "triton3" ? "TRITON 3" : "TRITON 1";
  const thisEvent = eventData?.title || "TRITON Event";

  if (!url) {
    return (
      <section className="bg-neutral-950 text-white py-8 sm:py-12 md:py-20 border-t border-white/5" id="start-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
              <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
              Start <span className="text-triton-red italic">List</span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-400 max-w-xl italic">
              Check the start list of the <strong>{tritonType}</strong> {thisEvent}.
            </p>
          </div>

          {/* Empty State Card & Table Shell */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            {/* Header Status Badge */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10 mb-4 sm:mb-6 flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-triton-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-triton-red"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red">
                  List Status
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-gray-400 uppercase bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10">
                Pending Release
              </span>
            </div>

            {/* Overlay Center Notice Box */}
            <div className="my-4 sm:my-6 md:my-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto px-2 sm:px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-triton-red/10 border border-triton-red/30 flex items-center justify-center mb-4 sm:mb-6 text-triton-red shadow-[0_0_20px_rgba(234,30,36,0.15)]">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase text-white mb-2 sm:mb-3">
                Start List Coming Soon
              </h3>
              <p className="text-xs sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                The official start list featuring athlete bib numbers and categories will be published closer to the event date.
              </p>
            </div>
          </div>
        </div>
      </section>
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
    <section className="bg-neutral-950 text-white py-8 sm:py-12 md:py-20 border-t border-white/5" id="start-list">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 text-triton-red">
            <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
            <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="h-px w-8 sm:w-12 bg-triton-red/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
            Start <span className="text-triton-red italic">List</span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-400 max-w-xl italic">
            Check the start list of the <strong>{tritonType}</strong> {thisEvent}.
          </p>
        </div>
        <StartListClientWrapper initialAthletes={data} />
      </div>
    </section>
  );
}




