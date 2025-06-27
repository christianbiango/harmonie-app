import { DestinationSearch } from "@/components/home/DestinationSearch";
import { TripRecommandations } from "@/components/home/TripRecommandations";
import { DestinationFilters } from "@/components/home/DestinationFilters";
import { DestinationSearchInput } from "@/components/home/DestinationSearchInput";
import { ArrowLeft } from "lucide-react";
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
      <div className="max-w-4xl mx-auto py-32">
        <div className="mt-8 relative flex items-center justify-center">
          <Link
            href="/"
            className="absolute left-0 text-black hover:underline flex items-center"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold mb-6">En fonction de vous</h1>
        </div>

        <main>
          <DestinationSearchInput />
          <div className="relative">
            <DestinationFilters />
            <div className="pointer-events-none absolute top-0 right-0 h-full w-8 md:hidden bg-gradient-to-l from-[#FFFBF5] from-80% to-transparent z-10" />
            <DestinationSearch searchTerm={searchTerm} maxPeople={maxPeople} />
          </div>
        </main>
      </div>
    </div>
  );
}
