import { Building, MapPin, Users } from "lucide-react";

type KeyInfosProps = {
  people: string;
  distance: string;
  holiday_type: string;
};

export const KeyInfosSection = ({
  people,
  distance,
  holiday_type,
}: KeyInfosProps) => {
  const infos = [
    {
      icon: Users,
      text: people,
    },
    {
      icon: MapPin,
      text: distance,
    },
    {
      icon: Building,
      text: holiday_type,
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Informations clés
      </h2>
      <div className="gap-4 flex flex-col flex-1 lg:flex-row">
        {infos.map((info, idx) => (
          <div
            key={idx}
            className="h-full flex items-center bg-nephos-lightBeige pr-4 rounded-lg border overflow-hidden border-nephos-primary"
          >
            <div className="bg-nephos-blue p-3 mr-4 rounded-tr-lg rounded-br-lg">
              <info.icon className="text-white" />
            </div>
            <span className="text-gray-700">{info.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
