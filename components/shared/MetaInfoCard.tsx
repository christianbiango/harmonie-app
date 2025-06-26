export type MetaInfoCardProps = {
  image: string;
  title: string;
  description: string;
  cardNumber: number;
};

export const MetaInfoCard = ({
  image,
  title,
  description,
  cardNumber,
}: MetaInfoCardProps) => (
  <div className="flex-1 bg-nephos-primary rounded-xl p-6 flex flex-col items-center text-white relative overflow-visible">
    <div
      className={`absolute -top-20 ${cardNumber !== 1 ? "left-14" : "right-auto sm:right-none sm:left-14"} -translate-x-1/2 -z-10 pointer-events-none`}
    >
      <img
        src={image}
        alt=""
        className="w-32 h-32 object-contain"
        style={{ clipPath: "inset(0 0 -50% 0)" }}
        draggable={false}
      />
    </div>
    <h3 className="font-bold text-lg mb-2 mt-8">{title}</h3>
    <p className="text-sm text-white/90">{description}</p>
  </div>
);
