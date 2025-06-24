import { DestinationFilters } from "@/components/HomePage/DestinationFilters";
import DestinationSearch from "@/components/HomePage/DestinationSearch";
import Header from "@/components/HomePage/Header";
import { MetaInfoSection } from "@/components/HomePage/MetaInfoSection";
import { TripRecommandations } from "@/components/HomePage/TripRecommandations";
import { WhatIfSection } from "@/components/HomePage/WhatIfSection";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/NavBar";

export default async function ProtectedPage() {
  return (
    <>
    <Navbar loggedIn={true}/>
      <Header />
      <main>
        <DestinationSearch />
        <div className="relative">
          <DestinationFilters />
          <TripRecommandations />
          <div
            className="pointer-events-none absolute top-0 right-0 h-full w-8 md:hidden bg-gradient-to-l from-[#FFFBF5] from-80% to-transparent z-10"
          />
        </div>
      </main>
      <div className="p-4">
        <WhatIfSection />
      </div>
      <div className="hidden md:block">
        <MetaInfoSection />
      </div>
      <Footer />
    </>
  );
}
