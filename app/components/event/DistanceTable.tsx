import { Waves, Bike, PersonStanding } from "lucide-react";

interface DistanceRow {
  name: string;
  swim: string;
  bike: string;
  run: string;
}

interface DistanceTableProps {
  distances?: DistanceRow[] | any[];
}

export default function DistanceTable({ distances }: DistanceTableProps) {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/20">
            <th className="py-2.5 sm:py-4 px-2 sm:px-4 text-[11px] sm:text-sm font-bold uppercase text-gray-400 whitespace-nowrap">
              Distance
            </th>
            <th className="py-2.5 sm:py-4 px-1.5 sm:px-4 text-center">
              <Waves className="mx-auto w-4 h-4 sm:w-6 sm:h-6 text-triton-red" />
            </th>
            <th className="py-2.5 sm:py-4 px-1.5 sm:px-4 text-center">
              <Bike className="mx-auto w-4 h-4 sm:w-6 sm:h-6 text-triton-red" />
            </th>
            <th className="py-2.5 sm:py-4 px-1.5 sm:px-4 text-center">
              <PersonStanding className="mx-auto w-4 h-4 sm:w-6 sm:h-6 text-triton-red" />
            </th>
          </tr>
        </thead>
        <tbody>
          {distances?.map((row: any, idx: number) => (
            <tr
              key={idx}
              className="border-b border-white/10 hover:bg-white/5 transition-colors"
            >
              <td className="py-2.5 sm:py-4 px-2 sm:px-4 font-black text-xs sm:text-xl italic uppercase text-white whitespace-nowrap">
                {row.name}
              </td>
              <td className="py-2.5 sm:py-4 px-1.5 sm:px-4 text-center font-bold text-[11px] sm:text-base text-gray-300 font-mono whitespace-nowrap">
                {row.swim}
              </td>
              <td className="py-2.5 sm:py-4 px-1.5 sm:px-4 text-center font-bold text-[11px] sm:text-base text-gray-300 font-mono whitespace-nowrap">
                {row.bike}
              </td>
              <td className="py-2.5 sm:py-4 px-1.5 sm:px-4 text-center font-bold text-[11px] sm:text-base text-gray-300 font-mono whitespace-nowrap">
                {row.run}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}