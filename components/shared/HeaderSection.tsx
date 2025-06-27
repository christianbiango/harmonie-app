import Image from "next/image";
import { HeaderTitle } from "./HeaderTitle";
import { useRouter } from "next/navigation";

type HeaderSectionProps = {
  image_url: string;
  image_alt: string;
  title: string;
};

export const HeaderSection = ({
  image_url,
  image_alt,
  title,
}: HeaderSectionProps) => {
  const router = useRouter();
  return (
    <header className="relative w-full min-h-[310px] md:min-h-[600px] overflow-hidden flex flex-col justify-start pt-[70px] md:pt-[150px]">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src={image_url}
          alt={image_alt}
          priority
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <HeaderTitle title={title} onBack={() => router.back()} />
    </header>
  );
};
