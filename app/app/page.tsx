import { DestinationFilters } from "@/components/home/DestinationFilters";
import DestinationSearch from "@/components/home/DestinationSearch";
import Header from "@/components/home/Header";
import { KeyInfos } from "@/components/home/KeyInfos";
import { MetaInfoSection } from "@/components/home/MetaInfoSection";
import { TripRecommandations } from "@/components/home/TripRecommandations";
import Navbar from "@/components/navigation/NavBar";
import { KeyInfoStepProps } from "@/components/shared/KeyInfoStep";
import { Building, MapPin, Users } from "lucide-react";

export default async function ProtectedPage() {
  const steps: KeyInfoStepProps[] = [
    { icon: MapPin, text: "Je choisis un lieu de mission" },
    { icon: Building, text: "Je suis logé·e et accompagné·e" },
    { icon: Users, text: "Je découvre, je soigne, je respire" },
  ];

  return (
    <>
      <Navbar loggedIn={true} />
      <Header />
      <main>
        <DestinationSearch />
        <div className="relative">
          <DestinationFilters />
          <TripRecommandations />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 md:hidden bg-gradient-to-l from-[#FFFBF5] from-80% to-transparent z-10" />
        </div>
      </main>
      <div className="p-4">
        <KeyInfos steps={steps} />
      </div>
      <div className="hidden md:block">
        <MetaInfoSection />
      </div>
    </>
  );
}
