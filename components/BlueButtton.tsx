import { Button } from "./ui/button";

type BlueButtonProps = {
  text: string;
};

export const BlueButton = ({ text }: BlueButtonProps) => {
  return (
    <Button className="bg-nephos-primary text-white px-16 py-2 rounded-lg font-normal">
      {text}
    </Button>
  );
};
