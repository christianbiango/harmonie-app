import { LucideIcon } from "lucide-react";

export type KeyInfoStepProps = {
  icon: LucideIcon;
  text: string;
};

export const KeyInfoStep = ({ icon: Icon, text }: KeyInfoStepProps) => (
  <div className="h-full flex items-center bg-nephos-lightBeige pr-4 rounded-lg border overflow-hidden border-nephos-primary">
    <div className="bg-nephos-blue p-3 mr-4 rounded-tr-lg rounded-br-lg">
      <Icon className="text-white" />
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);
