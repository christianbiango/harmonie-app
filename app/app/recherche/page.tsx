import { DestinationSearch } from "@/components/HomePage/DestinationSearch";
import Link from "next/link";

export default async function RecherchePage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const searchTerm = searchParams?.search || "";
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Résultats de recherche
        </h1>
        <DestinationSearch searchTerm={searchTerm} />
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
