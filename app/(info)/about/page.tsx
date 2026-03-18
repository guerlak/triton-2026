import BrandEssenceSection from "@/app/components/about-page-components/BrandEssenceSection";
import HistorySection from "@/app/components/about-page-components/HistorySection";
import MissionSection from "@/app/components/about-page-components/MissionSection";
import NumerologySection from "@/app/components/about-page-components/NumerologySection";
import PauloSection from "@/app/components/about-page-components/PauloSection";
import RaceFormatsSection from "@/app/components/about-page-components/RaceFormatsSection";
import ValuesSection from "@/app/components/about-page-components/ValuesSection";

export default function Page() {
  return (
    <main className="bg-black pt-20">
      <BrandEssenceSection />
      <MissionSection />
      <RaceFormatsSection />
      <NumerologySection />
      <PauloSection />
      <HistorySection />
    </main>
  );
}
