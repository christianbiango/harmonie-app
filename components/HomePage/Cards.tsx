import { Heart } from "lucide-react";
import Image from "next/image";

export const Cards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-12">
      <div className="relative">
        <Image
          src="/images/homepage/church.png"
          alt="Mios"
          className="rounded-lg w-full h-auto"
          width={40}
          height={40}
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
        <Image
          src="/images/homepage/beach.png"
          alt="Mimizan"
          className="rounded-lg w-full h-auto"
          width={40}
          height={40}
        />
        <div className="mt-4">
          <h3 className="font-bold text-lg">Mimizan</h3>
          <p className="text-gray-500">Reconnecter avec la nature</p>
        </div>
      </div>
    </div>
  );
};
