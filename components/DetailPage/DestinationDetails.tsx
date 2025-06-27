"use client"
import {
  CheckCircle,
  MapPin,
  Star,
  Users
} from "lucide-react";
import { useRouter } from "next/navigation";

const DestinationDetails = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">

      {/* Main content */}
      <main>
        {/* Location and rating */}
        <div className="p-4">
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 text-gray-500 mr-1" />
            <span className="text-gray-500">Nouvelle-Aquitaine, France</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">4.8</span>
              <span className="text-gray-500 ml-1">(24 avis)</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-500" />
              <span className="ml-1 text-gray-500">12-25 ans</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 border-t border-gray-100">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">
            Découvrez Mios, un charmant village au cœur de la forêt des Landes.
            Parfait pour les amoureux de la nature et les passionnés d'histoire
            locale.
          </p>
        </div>

        {/* Features */}
        <div className="p-4 border-t border-gray-100">
          <h2 className="text-lg font-semibold mb-3">Ce qui vous attend</h2>
          <div className="space-y-3">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-green-500" />,
                text: "Cadre naturel préservé",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-500" />,
                text: "Proche de la nature",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-500" />,
                text: "Activités en plein air",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-500" />,
                text: "Patrimoine culturel riche",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                {item.icon}
                <span className="ml-2 text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Available dates */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Dates disponibles</h2>
            <button className="text-blue-600 text-sm font-medium">
              Voir le calendrier
            </button>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {["15-22 Juin", "22-29 Juin", "29 Juin-6 Juil", "6-13 Juil"].map(
              (date, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg border ${index === 0 ? "bg-blue-900 text-white border-blue-900" : "border-gray-300"}`}
                >
                  {date}
                </button>
              )
            )}
          </div>
        </div>
      </main>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">À partir de</p>
            <p className="text-2xl font-bold">
              250€
              <span className="text-sm font-normal text-gray-500">
                /semaine
              </span>
            </p>
          </div>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
