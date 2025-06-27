import Image from "next/image";

const benefits = [
  {
    image: "/images/homepage/church.png",
    title: "Réduction du stress",
    subtitle: "Diminution des niveaux de stress et de l'anxiété.",
  },
  {
    image: "/images/homepage/beach.png",
    title: "Meilleure humeur",
    subtitle: "Sentiment de bonheur et de bien-être accru.",
  },
  {
    image: "/images/homepage/field.png",
    title: "Sommeil amélioré",
    subtitle: "Un meilleur repos grâce à l'exposition à la nature.",
  },
];

export const NatureBenefitsSection = () => (
  <section className="py-8" data-testid="nature-benefits-section">
    <h2 className="text-2xl font-bold text-center mb-6">
      Les bienfaits de la nature sur la santé !
    </h2>
    <div
      className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {benefits.map((benefit, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-64 rounded-xl p-4 scrollSnapAlign-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <Image
            src={benefit.image}
            alt={benefit.title}
            width={220}
            height={160}
            className="rounded-lg w-full h-40 object-cover mb-4"
          />
          <div className="font-bold text-lg mb-1">{benefit.title}</div>
          <div className="text-[#183B7A] text-base">{benefit.subtitle}</div>
        </div>
      ))}
    </div>
  </section>
);
