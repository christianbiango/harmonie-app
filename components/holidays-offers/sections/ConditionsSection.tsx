import { InfoBlock } from "../blocks/InfoBlock";

export const ConditionsSection = ({
  salary,
  car,
  support,
  exercices_hours,
}: HolidayDetail) => (
  <section className="py-4 mb-8 divide-y">
    <div></div> {/* Invisible divide */}
    <InfoBlock title="Salaire et versement" items={salary} />
    <InfoBlock title="Véhicule" items={car} />
    <InfoBlock title="Accompagnement" items={support} />
    <InfoBlock title="Horaires des exercices" items={exercices_hours} />
  </section>
);
