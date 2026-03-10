"use client";
import dict from "../../dictionaries/en.json";

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
          JOIN OUR COMMUNITY

        </h2>
        <p className="text-xl text-gray-300 mb-8">
          We are triathletes, swimmers, cyclists, runners, and those seeking new challenges. Step into our world.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 tracking-widest uppercase">
            #TRITONworldseries
          </span>
          <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 tracking-widest uppercase">
            #TRITON1
          </span>
          <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 tracking-widest uppercase">
            #TRITON3
          </span>
          <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 tracking-widest uppercase">
            #BEEAGERBEBRAVEBESTRONG
          </span>
        </div>
      </div>
    </section>
  );
}
