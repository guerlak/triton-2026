import FormatsSection from "@/app/components/FormatsSection";
import LocationsSection from "./LocationsSection";
import CountdownSectionEvent from "./CountDownSectionEvent";

export default function Page() {
  return (
    <div>
      <CountdownSectionEvent />
      <FormatsSection />
      <LocationsSection />
    </div>
  );
}
