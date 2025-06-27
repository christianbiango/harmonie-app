import { EquipmentsDialog } from "../EquipementsDialog";
import { equipmentIcons } from "../icons/EquipementIcons";

export const EquipmentsSection = ({ equipments }: HolidayDetail) => {
  const visibleEquipments = equipments.filter(
    (equipment) => equipmentIcons[equipment]
  );
  const fourEquipments = visibleEquipments.slice(0, 4);

  return (
    <section className="rounded-xl mb-8 flex flex-col justify-start">
      <h2 className="text-base font-bold mb-3 md:text-xl">
        Équipements du logement
      </h2>
      <ul className="mb-4 space-y-2">
        {fourEquipments.map((equipment, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-800 text-sm"
          >
            {equipmentIcons[equipment]}
            {equipment}
          </li>
        ))}
      </ul>
      <EquipmentsDialog
        visibleEquipments={visibleEquipments}
        equipmentIcons={equipmentIcons}
      />
    </section>
  );
};
