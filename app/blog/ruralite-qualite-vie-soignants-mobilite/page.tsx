import React from "react";
import PostTemplate from "@/components/posts/PostTemplate";

export const metadata = {
  title:
    "Ruralité et qualité de vie : ce que recherchent les soignants en mobilité | NEPHOS",
  description:
    "Et si le vrai luxe, c’était l’espace, le temps et le lien humain ? Découvrez pourquoi les soignants en mobilité choisissent de plus en plus les territoires ruraux pour préserver leur équilibre.",
  keywords: ["Ruralité & qualité de vie"],
};

const RuraliteQualiteVieSoignantsMobilite = () => {
  const articleContent = `
  <section aria-labelledby="rethinking-balance-wellbeing-heading">
    <h2 id="rethinking-balance-wellbeing-heading" class="my-6 font-bold text-3xl">Repenser l’équilibre entre engagement et bien-être</h2>
    <p class="my-2">
        La mobilité professionnelle ne se limite plus à un simple changement de lieu. Pour un nombre croissant de soignants, elle devient un levier essentiel pour retrouver du sens et préserver leur santé mentale et physique.
    </p>
    <p class="my-2">
        Les missions rurales proposées par NEPHOS offrent une réponse concrète à ces aspirations. Elles permettent d’exercer autrement, dans un cadre respectueux du rythme et des besoins du professionnel.
    </p>
  </section>
  <section role="region" aria-labelledby="soothing-environment-for-care-heading">
    <h2 id="soothing-environment-for-care-heading" class="my-6 font-bold text-3xl">Un cadre apaisé pour soigner… et se soigner</h2>
    <p class="my-2">
      Exercer en ruralité, c’est bénéficier d’un environnement propice à l’apaisement :
    </p>
    <ul class="list-disc list-inside my-4">
        <li>Moins de temps perdu dans les transports</li>
        <li>Moins de pression sur le nombre d’actes</li>
        <li>Un contact direct et humain avec les patients</li>
        <li>Un ancrage dans un territoire accueillant et valorisant</li>
    </ul>
    <p class="my-2">
      Cette qualité de vie permet non seulement de mieux exercer, mais aussi de retrouver une dynamique personnelle positive.
    </p>
    <div role="img" aria-label="Consultation dans un environnement apaisant entre un soignant en mobilité et une patiente locale">
      <img 
        src="/images/articles/consultation-rurale-humaine.webp" 
        alt="Un soignant à l’écoute d’une patiente dans un cabinet rural lumineux"
        width="600" 
        height="400"
        class="mx-auto rounded-sm"
      />
    </div>
  </section>

  <section role="region" aria-labelledby="aligned-professional-life-heading">
    <h2 id="aligned-professional-life-headingg" class="my-6 font-bold text-3xl">Une vie professionnelle plus libre, plus alignée</h2>
    <p class="my-2">
      Les soignants en mission rurale découvrent une autre manière de pratiquer :
    </p>
    <ul class="list-disc list-inside my-4">
        <li>Plus de temps par consultation</li>
        <li>Moins de contraintes administratives ou commerciales</li>
        <li>Une approche plus globale de la santé</li>
        <li>Une capacité retrouvée à écouter, à prévenir, à accompagner</li>
    </ul>
    <p class="my-2">
      Ces conditions favorisent le bien-être professionnel et l’envie de s’engager durablement.
    </p>
    <div role="img" aria-label="Soignant prenant du temps pour lui en pleine nature rurale – article Ruralité et qualité de vie : ce que recherchent les soignants en mobilité">
      <img 
        src="/images/articles/temps-pour-soi-ruralite.webp" 
        alt="Un professionnel de santé en pause personnelle dans un cadre naturel rural"
        width="600" 
        height="400"
        class="mx-auto rounded-sm"
      />
    </div>
  </section>

<section role="region" aria-labelledby="essential-lifestyle-choices-heading">
    <h2 id="essential-lifestyle-choices-heading" class="my-6 font-bold text-3xl">Des choix de vie ancrés dans l’essentiel</h2>
    <p class="my-2">
        Les soignants en mobilité ne cherchent pas seulement un nouveau lieu d’exercice. Ils recherchent un cadre de vie plus cohérent avec leurs valeurs :
    </p>
    <ul class="list-disc list-inside my-4">
        <li>Un rythme plus doux</li>
        <li>Un environnement naturel préservé</li>
        <li>Une communauté locale vivante et solidaire</li>
        <li>Un quotidien plus simple mais plus riche de liens</li>
    </ul>
    <p class="my-2">
        Grâce à NEPHOS, ces aspirations trouvent un terrain favorable. Les missions deviennent de véritables tremplins vers des projets de vie réfléchis et durables.
    </p>
</section>
  `;

  return (
    <PostTemplate
      title="Ruralité et qualité de vie : ce que recherchent les soignants en mobilité"
      content={articleContent}
      author="Nephos"
      date={new Date("2025-06-23")}
      imageUrl="/images/articles/soignant-paysage-rural.webp"
      altText="Soignant en mobilité explorant un territoire rural paisible"
      ariaLabel="Illustration d’un soignant découvrant la campagne en fin de journée, symbole de calme et de liberté"
      tags={["Ruralité & qualité de vie"]}
    />
  );
};
export default RuraliteQualiteVieSoignantsMobilite;
