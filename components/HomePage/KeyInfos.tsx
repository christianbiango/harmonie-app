import { KeyInfoStep, KeyInfoStepProps } from "../shared/KeyInfoStep";

type KeyInfosProps = {
  steps: KeyInfoStepProps[];
};

export const KeyInfos = ({ steps }: KeyInfosProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Et si les soignants pouvaient exercer autrement ?
      </h2>
      <div className="gap-4 flex">
        {steps.map((step, idx) => (
          <KeyInfoStep key={idx} icon={step.icon} text={step.text} />
        ))}
      </div>
    </div>
  );
};
