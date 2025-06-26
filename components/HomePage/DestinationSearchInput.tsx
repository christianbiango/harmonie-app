"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function DestinationSearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [adults, setAdults] = useState(
    searchParams.get("adults") ? Number(searchParams.get("adults")) : 0
  );
  const [children, setChildren] = useState(
    searchParams.get("children") ? Number(searchParams.get("children")) : 0
  );
  const [babies, setBabies] = useState(
    searchParams.get("babies") ? Number(searchParams.get("babies")) : 0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("search", searchTerm);
    params.set("adults", String(adults));
    params.set("children", String(children));
    params.set("babies", String(babies));
    router.push(`/app/recherche?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="relative mb-6 max-w-[600px] mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 lg:py-5 border border-gray-300 rounded-[10px] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Rechercher une destination"
        />
      </div>
      <div className="max-w-[600px] mx-auto bg-[#FFFBF5] rounded-lg p-6 border">
        <h2 className="text-xl font-bold mb-4">Qui ?</h2>
        {/* Adultes */}
        <div className="flex items-center justify-between border-b py-2">
          <div>
            <div className="font-medium">Adultes</div>
            <div className="text-xs text-gray-500">13 ans et plus</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Retirer un adulte"
              onClick={() => setAdults(Math.max(0, adults - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xl"
            >
              -
            </button>
            <span className="w-6 text-center">{adults}</span>
            <button
              type="button"
              aria-label="Ajouter un adulte"
              onClick={() => setAdults(adults + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xl"
            >
              +
            </button>
          </div>
        </div>
        {/* Enfants */}
        <div className="flex items-center justify-between border-b py-2">
          <div>
            <div className="font-medium">Enfants</div>
            <div className="text-xs text-gray-500">De 2 à 12 ans</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Retirer un enfant"
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xl"
            >
              -
            </button>
            <span className="w-6 text-center">{children}</span>
            <button
              type="button"
              aria-label="Ajouter un enfant"
              onClick={() => setChildren(children + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xl"
            >
              +
            </button>
          </div>
        </div>
        {/* Bébés */}
        <div className="flex items-center justify-between border-b py-2">
          <div>
            <div className="font-medium">Bébés</div>
            <div className="text-xs text-gray-500">- De 2 ans</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Retirer un bébé"
              onClick={() => setBabies(Math.max(0, babies - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xl"
            >
              -
            </button>
            <span className="w-6 text-center">{babies}</span>
            <button
              type="button"
              aria-label="Ajouter un bébé"
              onClick={() => setBabies(babies + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
// ... existing code ...
