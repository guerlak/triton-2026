export const TimeUnit = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => (
  <div className="flex flex-col items-center px-4 py-3 md:px-6 md:py-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl min-w-[80px] md:min-w-[120px] shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white tabular-nums tracking-tighter drop-shadow-md">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-triton-red text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1">
      {label}
    </span>
  </div>
);
