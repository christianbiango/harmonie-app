import React, { ReactNode } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  alt: string;
  title: ReactNode;
  description: ReactNode;
  showHeart?: boolean;
}

export const Card = ({ imageSrc, alt, title, description, showHeart = false }: CardProps) => (
  <div className="relative min-w-[250px] flex-shrink-0 md:min-w-0 rounded-xl overflow-hidden bg-white shadow-sm">
    <Image
      src={imageSrc}
      alt={alt}
      className="w-full h-40 object-cover"
      width={300}
      height={160}
    />
    {showHeart && (
      <div className="absolute top-2 right-2 bg-white p-2 rounded-full z-10">
        <Heart className="text-gray-500" />
      </div>
    )}
    <div className="p-4">
      <div className="mb-1">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  </div>
);