import Navbar from "@/app/components/Navbar";
import MainButton from "@/app/ui/MainButton";
import { Activity, Calendar, Trophy } from "lucide-react";
import { redirect } from "next/navigation";

export default function LiveResultsPage() {

  redirect("/under-development");

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-triton-red selection:text-white flex flex-col justify-between">


      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-triton-red/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-triton-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl w-full text-center relative z-10">
          {/* Animated Indicator */}
          <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            {/* Pulsing outer rings */}
            <div className="absolute inset-0 rounded-full border border-triton-red/30 animate-ping opacity-75" />
            <div className="absolute -inset-4 rounded-full border border-white/5 animate-pulse" />

            {/* Spinning/rotating dashed border */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-triton-red/50 animate-[spin_10s_linear_infinite]" />

            {/* Glowing central circle */}
            <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(223,31,38,0.25)]">
              <Activity className="text-triton-red animate-pulse" size={28} />
            </div>
          </div>

          {/* Under construction / Coming soon Badge */}
          <div className="inline-flex items-center gap-2 bg-triton-red/10 border border-triton-red/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-triton-red mb-6">
            <span className="w-2 h-2 rounded-full bg-triton-red animate-ping" />
            Under Development
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-6 tracking-tight">
            Live <span className="text-triton-red">Results</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            We are preparing the ultimate live tracking and timing experience for <strong className="text-white">TRITON World Series</strong> athletes and spectators.
          </p>

          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-12">
            Soon, you will be able to follow every split time, transition, and leaderboard live. Stay tuned!
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MainButton href="/">
              Back to Home
            </MainButton>
          </div>
        </div>
      </main>
    </div>
  );
}



