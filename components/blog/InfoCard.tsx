import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  description: string;
}

export const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <Card className="bg-transparent border-gray-200 border-nephos-blue h-full">
      <CardHeader>
        <CardTitle className="text-md font-semibold text-nephos-blueText">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}; 