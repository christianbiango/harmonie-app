import Image from "next/image";
import { Users, MapPin, Mountain } from "lucide-react";

interface FavoriteCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  population: string;
  distance: string;
  activity: string;
}

export const FavoriteCard = ({
  title,
  subtitle,
  tags,
  image,
  population,
  distance,
  activity,
}: FavoriteCardProps) => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-stretch bg-[#183B7A] rounded-2xl p-6 gap-6 max-w-2xl w-full">
    <div className="flex flex-col justify-between min-w-0">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#2B4B8B] text-white text-xs px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-white font-bold text-2xl mb-1">{title}</div>
      <div className="text-white text-base mb-4 opacity-80">{subtitle}</div>
      <div className="flex flex-col gap-2 text-white text-base">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 opacity-80" aria-hidden="true" />
          <span>{population}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 opacity-80" aria-hidden="true" />
          <span>{distance}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mountain className="w-5 h-5 opacity-80" aria-hidden="true" />
          <span>{activity}</span>
        </div>
      </div>
    </div>

    <div className="relative w-full h-[200px] md:w-[140px] sm:h-full">
      <Image
        src={image}
        alt={`Illustration de ${title}`}
        fill
        className="rounded-xl object-cover"
        sizes="(max-width: 768px) 100vw, 140px"
      />
    </div>

    <div className="flex items-center justify-center h-full bg-gray-200 rounded-2xl self-center mx-auto md:mx-0 w-full">
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="#183B7A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);
