import { ArrowLeft } from "lucide-react";

type HeaderTitleProps = {
  title: string;
  onBack: () => void;
};

export const HeaderTitle = ({ title, onBack }: HeaderTitleProps) => (
  <div className="sticky top-0 z-10 px-8 sm:px-12 shadow-sm text-white">
    <div className="flex items-center">
      <button onClick={onBack} className="p-2 -ml-2">
        <ArrowLeft className="w-6 h-6 md:w-10 md:h-10" />
      </button>
      <h1 className="text-3xl font-semibold mx-auto">{title}</h1>
      <div className="w-6"></div>
    </div>
  </div>
);
