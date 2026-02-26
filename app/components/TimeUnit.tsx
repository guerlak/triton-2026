export const TimeUnit = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => (
  <div className="flex flex-col items-center px-6 py-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl min-w-[90px] md:min-w-[140px] shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <span className="text-4xl md:text-7xl font-black text-white tabular-nums tracking-tighter drop-shadow-md">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-triton-red text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mt-1">
      {label}
    </span>
  </div>
);
