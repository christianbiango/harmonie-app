import { Heart } from "lucide-react";
import Image from "next/image";

export const Cards = () => {
  return (
    <div
      className="flex md:grid md:grid-cols-2 gap-8 mb-12 overflow-x-auto md:overflow-x-visible scrollbar-hide pr-8"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      <div className="relative min-w-[250px] flex-shrink-0 md:min-w-0" style={{ scrollSnapAlign: 'start' }}>
        <Image
          src="/images/homepage/church.png"
          alt="Mios"
          className="rounded-lg w-full h-auto max-w-[232px] max-h-[232px]"
          width={300}
          height={200}
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
          <Heart className="text-gray-500" />
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Mios</h3>
          <p className="text-gray-500">Découvrir une part d'histoire</p>
        </div>
      </div>
      <div className="relative min-w-[250px] flex-shrink-0 md:min-w-0" style={{ scrollSnapAlign: 'start' }}>
        <Image
          src="/images/homepage/beach.png"
          alt="Mimizan"
          className="rounded-lg w-full h-auto"
          width={300}
          height={200}
        />
        <div className="mt-4">
          <h3 className="font-bold text-lg">Mimizan</h3>
          <p className="text-gray-500">Reconnecter avec la nature</p>
        </div>
      </div>
      <div className="relative min-w-[250px] flex-shrink-0 md:min-w-0" style={{ scrollSnapAlign: 'start' }}>
        <Image
          src="/images/homepage/field.png"
          alt="Sore"
          className="rounded-lg w-full h-auto"
          width={300}
          height={200}
        />
        <div className="mt-4">
          <h3 className="font-bold text-lg">Sore</h3>
          <p className="text-gray-500">Nature et tranquillité</p>
        </div>
      </div>
      <div className="relative min-w-[250px] flex-shrink-0 md:min-w-0" style={{ scrollSnapAlign: 'start' }}>
        <Image
          src="/images/homepage/bluecircle.svg"
          alt="Sabres"
          className="rounded-lg w-full h-auto"
          width={300}
          height={200}
        />
        <div className="mt-4">
          <h3 className="font-bold text-lg">Sabres</h3>
          <p className="text-gray-500">Village typique landais</p>
        </div>
      </div>
    </div>
  );
};

// Hide scrollbar utility (add to globals.css if not present):
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
