import { Heart, MapPin, Building, Users } from "lucide-react";

const NephosCard = () => {
  return (
    <div className="bg-[#FBF6EE] p-8 font-sans">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Coup de coeur de Nephos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <img
            src="/images/church.png"
            alt="Mios"
            className="rounded-lg w-full h-auto"
          />
          <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
            <Heart className="text-gray-500" />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Mios</h3>
            <p className="text-gray-500">Découvrir une part d'histoire</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/beach.jpg"
            alt="Mimizan"
            className="rounded-lg w-full h-auto"
          />
          <div className="mt-4">
            <h3 className="font-bold text-lg">Mimizan</h3>
            <p className="text-gray-500">Reconnecter avec la nat</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Et si les soignants pouvaient exercer autrement ?
      </h2>

      <div className="space-y-4">
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-300">
          <div className="bg-blue-800 p-3 rounded-lg mr-4">
            <MapPin className="text-white" />
          </div>
          <span className="text-gray-700">Je choisis un lieu de mission</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-300">
          <div className="bg-blue-800 p-3 rounded-lg mr-4">
            <Building className="text-white" />
          </div>
          <span className="text-gray-700">Je suis logé·e et accompagné·e</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg border border-gray-300">
          <div className="bg-blue-800 p-3 rounded-lg mr-4">
            <Users className="text-white" />
          </div>
          <span className="text-gray-700">
            Je découvre, je soigne, je respire
          </span>
        </div>
      </div>
    </div>
  );
};

export default NephosCard;
