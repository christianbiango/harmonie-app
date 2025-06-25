import React from "react";

type MetaInfoSectionProps = {
  cards: MetaInfoCardProps[];
}

export const MetaInfoSection = ({ cards }: MetaInfoSectionProps) => {
  return (
    <section className="bg-nephos-lightBeige py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Processus de placement saisonnier
        </h2>
        <p className="text-nephos-gray text-base md:text-lg">
          Nephos facilite les placements saisonniers pour les professionnels de santé en milieu rural en France.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch relative z-0">
        {cards.map((card, idx) => (
          <MetaInfoCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};