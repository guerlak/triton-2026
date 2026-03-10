import React from "react";

const HistorySection: React.FC = () => {
  const milestones = [
    {
      year: "2017",
      title: "The Beginning",
      description:
        "Concept born in December with a vision to bring meaningful innovation and change to the global triathlon world.",
    },
    {
      year: "2020-2021",
      title: "Immersion & DNA",
      description:
        "A meticulous two-year immersion process to define the unique TRITON DNA and the 3-6-9 Theory.",
    },
    {
      year: "2022-2023",
      title: "Validation",
      description:
        "Following the definition phase, successful test events were conducted to validate the innovative formats.",
    },
    {
      year: "2024",
      title: "Official Launch",
      description:
        "The TRITON World Series was officially launched, ushering in a new era of global triathlon competition.",
    },
  ];

  return (
    <section className="py-16 bg-black border-b border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-triton-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 tracking-tighter">
            OUR <span className="text-triton-red">STORY</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">
            The Evolution of Excellence
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-linear-to-r from-transparent via-triton-red/30 to-transparent"></div>

          {/* Timeline Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {milestones.map((item, index) => (
              <div key={index} className="relative pt-20">
                {/* Timeline Dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-triton-red rounded-full border-2 border-black box-content z-20 shadow-[0_0_15px_rgba(230,0,35,0.6)]"></div>

                {/* Year Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 rounded bg-triton-red/10 border border-triton-red/30 text-triton-red text-xs font-black uppercase tracking-widest">
                    {item.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-triton-red/50 rounded-lg p-4 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
