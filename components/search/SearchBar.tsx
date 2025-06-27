import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

interface SearchResult {
  id: number;
  name: string;
  address: string;
  description: string;
}

interface SearchBarProps {
  onResultsChange: (results: SearchResult[]) => void;
}

export function SearchBar({ onResultsChange }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchHolidayOffers = useCallback(
    async (term: string) => {
      if (term.length < 2) {
        onResultsChange([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("holidays_offers")
          .select("id, name, address, description")
          .or(
            `name.ilike.%${term}%,address.ilike.%${term}%,description.ilike.%${term}%`
          )
          .limit(10);

        if (error) throw new Error(error.message);
        onResultsChange(data || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while searching"
        );
        onResultsChange([]);
      } finally {
        setIsLoading(false);
      }
    },
    [onResultsChange]
  );

  const debouncedSearch = useCallback(
    debounce((term: string) => searchHolidayOffers(term), 300),
    [searchHolidayOffers]
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm, debouncedSearch]);

  return (
    <div className="w-full max-w-xl mx-auto space-y-2">
      <Input
        type="text"
        placeholder="Search holiday offers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
        disabled={isLoading}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {isLoading && <p className="text-sm text-gray-500">Searching...</p>}
    </div>
  );
}
