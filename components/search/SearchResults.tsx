interface SearchResult {
  id: number;
  name: string;
  address: string;
  description: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">No results found</div>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {results.map((result) => (
        <div
          key={result.id}
          className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <h3 className="text-lg font-semibold">{result.name}</h3>
          <p className="text-sm text-gray-500">{result.address}</p>
          <p className="mt-2 text-sm line-clamp-2">{result.description}</p>
        </div>
      ))}
    </div>
  );
}
