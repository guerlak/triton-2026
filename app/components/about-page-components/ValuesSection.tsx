import React from "react";
import { Shield, Users, Map, Scale, Heart } from "lucide-react";

const ValuesSection: React.FC = () => {
  const values = [
    {
      title: "SISU Mentality",
      description: "Perseverance and the drive to never stop until the work is done. Sisu is the Finnish spirit of courage and determination.",
      icon: <Shield className="text-triton-red" size={28} />,
    },
    {
      title: "Athletes First",
      description: "We cherish and support our athletes above all else. They are the true face of the TRITON brand.",
      icon: <Users className="text-triton-red" size={28} />,
    },
    {
      title: "Global Experiences",
      description: "We seek diverse and inspiring destinations to bring the global triathlon community together.",
      icon: <Map className="text-triton-red" size={28} />,
    },
    {
      title: "Market Integrity",
      description: "Non-competing races policy ensuring that similar formats do not conflict within the same continent.",
      icon: <Scale className="text-triton-red" size={28} />,
    },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="text-triton-red mx-auto mb-6" size={48} fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
            OUR <span className="text-triton-red">PLEDGE</span>
          </h2>
          <p className="text-gray-400">The values that define the TRITON Spirit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="p-8 border-l border-white/10 hover:border-triton-red transition-all group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">
                {val.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12  text-center rounded-3xl">
          <h3 className="text-3xl md:text-5xl font-black text-triton-red uppercase mb-4 italic">
            "We will forge athletes with a TRITON Spirit."
          </h3>
         
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
