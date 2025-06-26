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

export const Card = ({
  imageSrc,
  alt,
  title,
  description,
  showHeart = false,
}: CardProps) => (
  <div className="relative min-w-[250px] md:min-w-0">
    <Image
      src={imageSrc}
      alt={alt}
      className="w-full object-cover rounded-xl max-w-[232px] max-h-[232px]"
      width={300}
      height={160}
    />
    {showHeart && (
      <div className="absolute top-2 right-2 py-2 rounded-full z-10">
        <Heart className="text-gray-500" />
      </div>
    )}
    <div className="py-4">
      <div className="mb-1">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  </div>
);
