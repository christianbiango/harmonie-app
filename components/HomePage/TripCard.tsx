import { Heart } from "lucide-react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  showHeart?: boolean;
}

export const Card = ({ imageSrc, alt, title, description, showHeart = false }: CardProps) => (
  <div className="min-w-[250px] flex-shrink-0 md:min-w-0" style={{ scrollSnapAlign: 'start' }}>
    <div className="relative w-auto">

    <Image
      src={imageSrc}
      alt={alt}
      className="rounded-lg w-full h-auto max-w-[232px] max-h-[232px]"
      width={300}
      height={200}
    />
    {showHeart && (
      <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
        <Heart className="text-gray-500" />
      </div>
    )}
    </div>
    <div className="mt-4">
      <h3 className="text-lg">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);