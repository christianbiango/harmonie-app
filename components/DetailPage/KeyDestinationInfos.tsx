import { KeyInfoStep, KeyInfoStepProps } from "../shared/KeyInfoStep";

type KeyInfosProps = {
  steps: KeyInfoStepProps[];
};

export const KeyDestinationInfos = ({ steps }: KeyInfosProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Informations sur la commune
      </h2>
      <div className="gap-4 flex flex-col flex-1 lg:flex-row">
        {steps.map((step, idx) => (
          <KeyInfoStep key={idx} icon={step.icon} text={step.text} />
        ))}
      </div>
    </div>
  );
};
