import { Bath, ShowerHead, Utensils, WashingMachine, Wifi } from "lucide-react";
import { JSX } from "react";

export const equipmentIcons: Record<string, JSX.Element> = {
  "Cuisine équipée": <Utensils className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  "Douche à l'italienne": <ShowerHead className="w-5 h-5" />,
  "Lave-linge": <WashingMachine className="w-5 h-5" />,
  Serviettes: <Bath className="w-5 h-5" />,
};
