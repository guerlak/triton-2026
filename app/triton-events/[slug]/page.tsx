import FormatsSection from "@/app/components/FormatsSection";
import LocationsSection from "./LocationsSection";
import CountdownSectionEvent from "./CountDownSectionEvent";
import EventNavBar from "./EventNavBar";
import InfoSection from "./InfoSection";

export default function Page() {
  return (
    <div>
      <EventNavBar />
      <CountdownSectionEvent />
      <InfoSection />
      <FormatsSection />
      <LocationsSection />

    </div>
  );
}
