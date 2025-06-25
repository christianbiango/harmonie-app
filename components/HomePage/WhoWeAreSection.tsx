type WhoWeAreSectionProps = {
  items: string[];
};

type WhoWeAreCardProps = {
  number: number;
  text: string;
};

const WhoWeAreCard = ({ number, text }: WhoWeAreCardProps) => (
  <div className="flex items-center bg-white rounded-lg border border-[#183B7A] overflow-hidden">
    <div className="bg-[#183B7A] text-white flex items-center justify-center w-16 h-16 text-3xl font-bold">
      {number}
    </div>
    <div className="pl-4 text-base text-[#183B7A] font-medium">{text}</div>
  </div>
);

export const WhoWeAreSection = ({ items }: WhoWeAreSectionProps) => {
  return (
    <section className="rounded-xl p-6 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-2">Qui sommes nous ?</h2>
      <p className="text-center text-base text-gray-700 mb-6">
        Une plateforme digitale qui souhaite connecter les soignants volontaires
        et campagnes en demande, pour soigner autrement, librement, humainement
        !
      </p>
      <div className="space-y-4">
        {items.map((text, idx) => (
          <WhoWeAreCard key={idx} number={idx + 1} text={text} />
        ))}
      </div>
    </section>
  );
};
