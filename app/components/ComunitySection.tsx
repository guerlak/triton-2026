"use client";
import VennDiagram from "@/app/ui/VennDiagram"
import { motion } from "framer-motion";

export default function CommunitySection() {
  return (
    <section id="community" className="pt-6 sm:pt-10">
      <motion.div
        id="community"
        className="relative flex justify-end md:max-h-[750px] overflow-hidden mx-auto p-4 sm:p-8 md:p-10 md:pr-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundImage: 'url("/images/community.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay to darken the photo */}
        <div className="absolute inset-0 bg-black/75 pointer-events-none"></div>

        <div className="container md:px-8 z-10 text-left md:text-right py-4 sm:py-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-white leading-[0.9] mb-3 sm:mb-4">
            JOIN OUR
            <span className="block mt-2">
              <span className="bg-triton-red px-3 sm:px-4 py-1 inline-block">COMMUNITY</span>
            </span>
          </h2>

          <p className="text-sm sm:text-lg md:text-2xl text-white font-medium max-w-lg ml-0 md:ml-auto mt-4 sm:mt-8 leading-relaxed">
            We are <span className="font-black">triathletes</span>, <span className="font-black">swimmers</span>,
            <span className="font-black"> cyclists</span>, <span className="font-black">runners </span>
            and those seeking new challenges. <strong>Step into our world</strong>.
          </p>

          <div className="flex justify-end w-full">
            {/* <VennDiagram /> */}
          </div>

          <div className="flex flex-wrap md:justify-end gap-2 sm:gap-3 mt-6 sm:mt-10">
            {["#TRITONworldseries", "#TRITON1", "#TRITON3", "#BEEAGERBEBRAVEBESTRONG"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]
                 text-white/60 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
                  hover:text-white hover:border-white/30 
                  transition-all cursor-default bg-black/40 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>


  );
}
