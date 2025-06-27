import React from "react";
import { MetaInfoCard, MetaInfoCardProps } from "../shared/MetaInfoCard";

export const MetaInfoSection = () => {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Processus de placement saisonnier
        </h2>
        <p className="text-nephos-gray text-base md:text-lg mb-24">
          Nephos facilite les placements saisonniers pour les professionnels de
          santé en milieu rural en France.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-24 justify-center items-stretch relative z-0">
        {cards.map((card, idx) => (
          <MetaInfoCard key={idx} {...card} cardNumber={idx} />
        ))}
      </div>
    </section>
  );
};

const womanImg = "/images/homepage/woman.svg";
const womanHi = "/images/homepage/woman-hi.svg";
const womanHolding = "/images/homepage/woman-holding.svg";

const cards = [
  {
    image: womanImg,
    title: "Correspondance",
    description:
      "Associer les professionnels aux séjours adaptés à leurs compétences et préférences.",
  },
  {
    image: womanHi,
    title: "Hébergement",
    description:
      "Fournir un hébergement confortable, clé en main pour tous les membres de la famille.",
  },
  {
    image: womanHolding,
    title: "Horaires",
    description:
      "Assurer des horaires de travail structurés qui permettent du temps personnel.",
  },
];
