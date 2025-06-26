import { ArrowLeft } from "lucide-react";

export const OfferStickyHeader = ({
  cityName,
  onBack,
}: {
  cityName: string;
  onBack: () => void;
}) => (
  <div className="sticky top-0 z-10 px-8 sm:px-12 shadow-sm text-white">
    <div className="flex items-center">
      <button onClick={onBack} className="p-2 -ml-2">
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-2xl font-semibold mx-auto">{cityName}</h1>
      <div className="w-6"></div>
    </div>
  </div>
);
