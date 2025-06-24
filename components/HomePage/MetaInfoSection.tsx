import { Search, Home, Calendar } from "lucide-react";

export const MetaInfoSection = () => {
  // Path to your image
  const womanImg = "/images/homepage/woman.png";

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
        {/* Card 1 */}
        <div className="flex-1 bg-nephos-primary rounded-xl p-6 flex flex-col items-start text-white relative overflow-visible">
          <div className="absolute left-1/2 -top-12 -translate-x-1/2 -z-10 pointer-events-none">
            <img
              src={womanImg}
              alt=""
              className="w-20 h-20 object-contain"
              style={{ clipPath: "inset(0 0 -50% 0)" }}
              draggable={false}
            />
          </div>
          <h3 className="text-startfont-bold text-lg mb-2">Correspondance</h3>
          <p className="text-sm text-white/90">
            Associer les professionnels aux séjours adaptés à leurs compétences et préférences.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-nephos-primary rounded-xl p-6 flex flex-col items-center text-white relative overflow-visible">
          <div className="absolute left-1/2 -top-12 -translate-x-1/2 -z-10 pointer-events-none">
            <img
              src={womanImg}
              alt=""
              className="w-20 h-20 object-contain"
              style={{ clipPath: "inset(0 0 -50% 0)" }}
              draggable={false}
            />
          </div>
          <h3 className="font-bold text-lg mb-2 mt-8">Hébergement</h3>
          <p className="text-sm text-white/90">
            Fournir un hébergement confortable, clé en main pour tous les membres de la famille.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-nephos-primary rounded-xl p-6 flex flex-col items-center text-white relative overflow-visible">
          <div className="absolute left-1/2 -top-12 -translate-x-1/2 -z-10 pointer-events-none">
            <img
              src={womanImg}
              alt=""
              className="w-20 h-20 object-contain"
              style={{ clipPath: "inset(0 0 -50% 0)" }}
              draggable={false}
            />
          </div>
          <h3 className="font-bold text-lg mb-2 mt-8">Horaires</h3>
          <p className="text-sm text-white/90">
            Assurer des horaires de travail structurés qui permettent du temps personnel.
          </p>
        </div>
      </div>
    </section>
  );
};