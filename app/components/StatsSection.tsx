import React from "react";
import StatsClientComponent from "././StatsClientComponent";

const StatsSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-10 bg-triton-dark relative overflow-hidden"
    >
      {/* Subtle Grid Background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StatsClientComponent />
      </div>
    </section>
  );
};

export default StatsSection;
