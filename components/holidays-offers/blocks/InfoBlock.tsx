type InfoBlockProps = {
  title: string;
  items: string[];
};

export const InfoBlock = ({ title, items }: InfoBlockProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="py-4 md:py-9 first:pt-0 last:pb-0">
      <h3 className="text-base font-semibold mb-2 md:text-xl">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-[#61758A]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
