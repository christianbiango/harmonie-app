"use client";

import { BlueButton } from "@/components/BlueButtton";
import DestinationDetails from "@/components/DestinationDetails";
import DestinationSearch from "@/components/HomePage/DestinationSearch";
import Header from "@/components/HomePage/Header";
import NephosCard from "@/components/NephosCard";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResults } from "@/components/search/SearchResults";
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
      <Header />
      <main className="p-4">
        <DestinationSearch />
      </main>
    </>
  );
}
