import React from "react";
import StatsClientComponent from "././StatsClientComponent";

const StatsSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-triton-dark relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StatsClientComponent />
      </div>
    </section>
  );
};

export default StatsSection;
