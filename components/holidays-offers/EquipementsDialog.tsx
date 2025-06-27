import { JSX } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const EquipmentsDialog = ({
  visibleEquipments,
  equipmentIcons,
}: {
  visibleEquipments: string[];
  equipmentIcons: Record<string, JSX.Element>;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="w-full self-center max-w-[400px] text-white font-semibold py-2 rounded-md text-base mt-2 bg-nephos-blue">
        Afficher les équipements
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Équipements du logement</DialogTitle>
        <DialogClose />
      </DialogHeader>
      <ul className="space-y-2 mt-4">
        {visibleEquipments.map((equipment, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-800 text-sm"
          >
            {equipmentIcons[equipment]}
            {equipment}
          </li>
        ))}
      </ul>
    </DialogContent>
  </Dialog>
);
