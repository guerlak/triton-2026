import BrandEssenceSection from "@/app/(info)/about/BrandEssenceSection";
import HistorySection from "@/app/(info)/about/HistorySection";
import MissionSection from "@/app/(info)/about/MissionSection";
import NumerologySection from "@/app/(info)/about/NumerologySection";
import FounderSection from "@/app/(info)/about/FounderSection";
import RaceFormatsSection from "@/app/(info)/about/RaceFormatsSection";
import ValuesSection from "@/app/(info)/about/ValuesSection";

export default function Page() {
  return (
    <main className="bg-black pt-20">
      <BrandEssenceSection />
      <MissionSection />
      <RaceFormatsSection />
      <NumerologySection />
      <FounderSection />
      <HistorySection />
    </main>
  );
}
