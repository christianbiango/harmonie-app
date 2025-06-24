"use client";

import Footer from "@/components/navigation/Footer";
import { DependsOnYouSection } from "@/components/HomePage/DependsOnYouSection";
import { DestinationFilters } from "@/components/HomePage/DestinationFilters";
import DestinationSearch from "@/components/HomePage/DestinationSearch";
import Header from "@/components/HomePage/Header";
import { MetaInfoSection } from "@/components/HomePage/MetaInfoSection";
import { WhatIfSection } from "@/components/HomePage/WhatIfSection";
import Navbar from "@/components/navigation/NavBar";
import { useState } from "react";

interface SearchResult {
  id: number;
  name: string;
  address: string;
  description: string;
}

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <>
    <Navbar/>
      <Header />
      <main>
        <DestinationSearch />
        <div className="relative">
          <DestinationFilters />
          <DependsOnYouSection />
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
