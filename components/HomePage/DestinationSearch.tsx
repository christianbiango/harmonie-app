//Server component
import { searchCommunesAction } from "@/app/(actions)/holidays";
import Link from "next/link";
import Image from "next/image";

export async function DestinationSearch({
  searchTerm,
  maxPeople,
}: {
  searchTerm: string;
  maxPeople?: number;
}) {
  const search = await searchCommunesAction(searchTerm || "", maxPeople);
  return (
    <div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {search.length === 0 ? (
        <div className="col-span-full text-center text-gray-500">
          Aucune destination trouvée.
        </div>
      ) : (
        search.map((item: any, idx: number) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            {item.image_url && (
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={item.image_url}
                  alt={item.name || "Image de la destination"}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm text-center">
              {item.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
