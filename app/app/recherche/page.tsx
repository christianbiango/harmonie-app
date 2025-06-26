import { DestinationSearch } from "@/components/HomePage/DestinationSearch";
import Link from "next/link";

export default function RecherchePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchTerm = (searchParams?.search as string) || "";
  const adults = Number((searchParams?.adults as string) || 0);
  const children = Number((searchParams?.children as string) || 0);
  const babies = Number((searchParams?.babies as string) || 0);
  const maxPeople = adults + children + babies;
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Résultats de recherche
        </h1>
        <DestinationSearch searchTerm={searchTerm} maxPeople={maxPeople} />
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
