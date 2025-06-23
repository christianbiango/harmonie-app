import React from "react";
import PostTemplate from "@/components/posts/PostTemplate";

export const metadata = {
  title:
    "Travailler au vert : un levier pour fidéliser les soignants dans les territoires | NEPHOS",
  description:
    "Et si le cadre de vie devenait un atout stratégique pour fidéliser les soignants ? Découvrez comment les missions en milieu rural peuvent renforcer l’attractivité et la rétention des professionnels de santé.",
  keywords: ["Ruralité & qualité de vie"],
};

const TravaillerAuVertFideliserSoignantsTerritoires = () => {
  const articleContent = `
  <section aria-labelledby="rethinking-balance-wellbeing-heading">
    <h2 id="rethinking-balance-wellbeing-heading" class="my-6 font-bold text-3xl">Plus qu’un lieu d’exercice, un cadre de vie choisi</h2>
    <p class="my-2">
        Les difficultés de recrutement et de fidélisation des soignants dans les territoires ne sont pas nouvelles. Mais une dynamique nouvelle émerge : celle d’un lien fort entre qualité de vie et stabilité professionnelle.
    </p>
    <p class="my-2">
        Proposer un cadre naturel, paisible et porteur de sens devient un argument concret pour attirer, mais surtout fidéliser, les professionnels de santé. Les missions rurales temporaires s’inscrivent parfaitement dans cette logique, en permettant une immersion progressive.
    </p>
  </section>
  <section role="region" aria-labelledby="soothing-environment-for-care-heading">
    <h2 id="soothing-environment-for-care-heading" class="my-6 font-bold text-3xl">Un environnement qui répond aux besoins profonds des soignants</h2>
    <p class="my-2">
      Dans un contexte de surcharge et de pression constante, les soignants recherchent :
    </p>
    <ul class="list-disc list-inside my-4">
        <li>Un rythme de travail plus soutenable</li>
        <li>Une relation plus humaine avec leurs patients</li>
        <li>Un meilleur équilibre entre vie professionnelle et personnelle</li>
        <li>Un sentiment d’utilité au sein d’une communauté</li>
    </ul>
    <p class="my-2">
      La ruralité offre ces conditions. Et elle séduit de plus en plus de soignants lassés du modèle urbain intensif.
    </p>
    <div role="img" aria-label="Scène de soin humain dans un environnement de proximité – article Travailler au vert : un levier pour fidéliser les soignants dans les territoires">
      <img 
        src="/images/articles/consultation-humaine-ruralite.webp" 
        alt="Consultation bienveillante entre un soignant et un patient dans un petit cabinet rural"
        width="600" 
        height="400"
        class="mx-auto rounded-sm"
      />
    </div>
  </section>

  <section role="region" aria-labelledby="aligned-professional-life-heading">
    <h2 id="aligned-professional-life-headingg" class="my-6 font-bold text-3xl">Un levier de fidélisation durable</h2>
    <p class="my-2">
      Les professionnels qui expérimentent une mission rurale dans un cadre agréable sont nombreux à souhaiter prolonger l’expérience. Ce qui les convainc :
    </p>
    <div role="img" aria-label="Illustration de l’intégration d’un soignant dans la vie locale – article Travailler au vert : un levier pour fidéliser les soignants dans les territoires">
      <img 
        src="/images/articles/fidelisation-territoire-soignant.webp" 
        alt="Un professionnel de santé partage un moment convivial avec des habitants dans un village rural"
        width="600" 
        height="400"
        class="mx-auto rounded-sm"
      />
    </div>
    <ul class="list-disc list-inside my-4">
        <li>La qualité des échanges humains</li>
        <li>La reconnaissance locale de leur engagement</li>
        <li>La possibilité d’exercer avec autonomie</li>
        <li>Une qualité de vie souvent jugée supérieure</li>
    </ul>
    <p class="my-2">
      Ces éléments créent un attachement progressif au territoire, souvent déterminant dans les choix d’installation.
    </p>
  </section>
  `;

  return (
    <PostTemplate
      title="Travailler au vert : un levier pour fidéliser les soignants dans les territoires"
      content={articleContent}
      author="Nephos"
      date={new Date("2025-06-23")}
      imageUrl="/images/articles/soignant-cadre-de-vie.webp"
      altText="Un soignant en balade dans un village rural verdoyant, découvrant un nouveau cadre de vie"
      ariaLabel="Un professionnel de santé explorant un territoire accueillant – article Travailler au vert : un levier pour fidéliser les soignants dans les territoires"
      tags={["Ruralité & qualité de vie"]}
    />
  );
};
export default TravaillerAuVertFideliserSoignantsTerritoires;
