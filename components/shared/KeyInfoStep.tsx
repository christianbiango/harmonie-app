export type KeyInfoStepProps = {
    icon: LucideIcon;
    text: string;
  }
  
  export const KeyInfoStep = ({ icon: Icon, text }: KeyInfoStepProps) => (
    <div className="flex items-center bg-nephos-lightBeige pr-4 rounded-lg border border-nephos-primary">
      <div className="bg-blue-800 p-3 rounded-lg mr-4">
        <Icon className="text-white" />
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );