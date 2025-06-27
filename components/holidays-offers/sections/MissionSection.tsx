import Image from "next/image";

export const MissionSection = ({
  name,
  cities,
  rooms_description,
  image_url,
  image_alt,
  image_url_2,
  image_url_3,
  image_2_alt,
  image_3_alt,
}: HolidayDetail) => (
  <section className="mt-14 py-4 mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Découvrez votre mission
    </h2>
    <div className="mt-8 flex md:justify-center md:gap-20 md:mb-10 md:mt-5 gap-2 mb-3">
      <Image
        src={image_url}
        alt={image_alt}
        width={300}
        height={300}
        className="rounded-lg object-cover w-[174px] h-[195px]  md:w-[231px] md:h-[219px]"
      />
      <Image
        src={image_url_2}
        alt={image_2_alt}
        width={300}
        height={300}
        className="rounded-lg object-cover w-[174px] h-[195px]  md:w-[231px] md:h-[219px]"
      />
      <Image
        src={image_url_3}
        alt={image_3_alt}
        width={300}
        height={300}
        className="rounded-lg object-cover w-[174px] h-[195px] md:w-[231px] md:h-[219px]"
      />
    </div>
    <div className="mb-1">
      <span className="font-bold text-lg md:text-xl">{name}</span>
    </div>
    <div className="text-sm text-bold mb-1">
      {cities.name}, {cities.region}
    </div>
    <div className="text-sm">{rooms_description}</div>
  </section>
);
