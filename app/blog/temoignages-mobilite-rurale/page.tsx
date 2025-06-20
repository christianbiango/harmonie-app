import React from "react";
import PostTemplate from "@/components/posts/PostTemplate";

export const metadata = {
  title:
    "Témoignages : la mobilité rurale, une clé pour l'équilibre des soignants ",
  description:
    "Découvrez les parcours de soignants qui ont retrouvé leur équilibre grâce à une mobilité rurale encadrée et apaisante.",
  keywords: ["Santé et prévention"],
};

const TemoignagesMobiliteRurale = () => {
  const articleContent = `
  <section aria-labelledby="intro">
    <p class="my-2">
      Quand changer d'air permet de changer de vie.
      Face à l'intensité de leur quotidien, de plus en plus de soignants choisissent de quitter temporairement leur cadre de travail habituel pour s'installer dans des territoires ruraux. Ces mobilités, qu'elles soient de courte durée ou plus durables, permettent un véritable ressourcement, une redécouverte de leur métier, et parfois même une transformation personnelle.
    </p>
    <p class="my-2">
      Grâce à des dispositifs comme ceux proposés par NEPHOS, ces soignants redonnent du sens à leur engagement et participent à la revitalisation de territoires médicalement sous-dotés. Voici leurs histoires.
    </p>
  </section>
  <section role="region" aria-labelledby="lucies-testimonial-heading">
    <h2 id="lucies-testimonial-heading" class="my-6 font-bold text-3xl">Lucie, médecin généraliste : "J’avais besoin de ralentir sans renoncer"</h2>
    <p class="my-2">
      Lucie exerçait dans une grande ville depuis plus de 10 ans. Pression quotidienne, surcharge administrative, consultations à la chaîne... Elle a commencé à ressentir les premiers signes du burn-out : insomnies, irritabilité, perte de motivation.
    </p>
    <p class="my-2">
      "Je ne voulais pas tout quitter, mais j’avais besoin de respirer. Grâce à NEPHOS, j’ai pu effectuer une mission temporaire de trois mois dans un village du Lot. Là-bas, j’ai retrouvé une médecine plus humaine, j’ai pris le temps d’écouter les patients."
    </p>
    <p class="my-2">
      Cette expérience lui a permis de rééquilibrer sa vie, de redonner du sens à son travail, sans renoncer à son expertise. "Depuis, j’intègre un mois de mobilité rurale par an dans mon calendrier. C’est ma manière de prévenir l’épuisement."
    </p>
  </section>

  <section role="region" aria-labelledby="thibaults-testimonial-heading">
    <h2 id="thibaults-testimonial-heading" class="my-6 font-bold text-3xl">Thibault, infirmier libéral : "J’ai découvert une communauté bienveillante"</h2>
    <p class="my-2">
      Travailler seul, courir toute la journée entre les domiciles, gérer les urgences et l’administratif : Thibault se sentait à bout de souffle. "J’avais oublié pourquoi j’avais choisi ce métier. La routine m’étouffait."
    </p>
    <p class="my-2">
      Il accepte une mission temporaire en Haute-Loire. Là-bas, il découvre une coopérative de soignants et une population reconnaissante. "J’avais peur de me sentir seul. Mais j’ai trouvé une équipe, des échanges réguliers, et une ambiance presque familiale."
    </p>
    <p class="my-2">
      Il repart avec de nouvelles pratiques, une vision renouvelée de son rôle, et le sentiment d’avoir rechargé ses batteries.
    </p>
  </section>

<section role="region" aria-labelledby="julies-testimonial-heading">
  <h2 id="julies-testimonial-heading" class="my-6 font-bold text-3xl">Julie, sage-femme salariée : "J’ai pris soin de moi pour mieux accompagner les autres"</h2>
  <p class="my-2">
    Après plusieurs années à la maternité d’un grand CHU, Julie était au bord de l’épuisement. Horaires de nuit, tensions émotionnelles, manque de reconnaissance : elle s’éloigne progressivement de ce qui l’avait motivée.
  </p>
  <p class="my-2">
    "J’ai choisi de partir trois semaines en Auvergne pour un séjour mixte : randonnée, partages entre soignantes, ateliers bien-être."
  </p>
  <p class="my-2">
    Ce temps de pause lui a permis de retrouver sa force intérieure. "Je me suis reconnectée à mon corps, j’ai compris que m’écouter ne signifiait pas être égoïste. Depuis, je milite pour que le temps de ressourcement soit reconnu comme une véritable politique de prévention."
  </p>
</section>

<section role="region" aria-labelledby="mounirs-testimonial-heading">
  <h2 id="mounirs-testimonial-heading" class="my-6 font-bold text-3xl">Mounir, kinésithérapeute : "La campagne m’a rendu ma vocation"</h2>
  <p class="my-2">
    Kinésithérapeute en centre-ville, Mounir enchaînait les consultations à un rythme effréné. Il se sentait vidé à la fin de chaque journée. "Je n'avais plus le temps d'écouter, d'observer, de m'adapter. Je suivais des protocoles sans âme."
  </p>
  <p class="my-2">
    Il décide d’accepter une mission de deux mois dans un centre de soins en Dordogne. "Là-bas, j’ai redécouvert ce qu’était le soin. Moins de patients, mais plus de temps, plus d’attention, plus d’échange."
  </p>
  <p class="my-2">
    Depuis cette expérience, il s’est installé à mi-temps dans une structure rurale où il continue d’exercer avec enthousiasme. "Je ne me suis jamais senti aussi aligné."
  </p>
  <div role="img" aria-label="Illustration de soignants installés en maison de santé rurale, échangeant dans un environnement apaisant">
    <img 
      src="/images/articles/maison-de-sante-rurale.webp" 
      alt="Trois professionnels de santé discutant devant une maison de santé en zone rurale, entourée de collines et de nature"
      width="600" 
      height="400"
      class="mx-auto rounded-sm"
    />
  </div>
</section>

<section role="region" aria-labelledby="rural-mobility-heading">
  <h2 id="rural-mobility-heading" class="my-6 font-bold text-3xl">Mobilité rurale : un outil de résilience durable</h2>
  <p class="my-2">
    Ces témoignages ne sont pas anecdotiques. Ils révèlent un véritable besoin de pause, de changement de rythme, de reconnexion. La mobilité rurale, lorsqu’elle est encadrée, adaptée et volontaire, peut devenir un levier puissant pour prévenir l’épuisement professionnel.
  </p>
  <p class="my-2">
    Elle offre des espaces d’expression, de créativité, et de transmission. Les soignants qui en bénéficient rapportent une augmentation de leur bien-être, une meilleure relation aux patients, et parfois même une envie de rester sur place. Elle permet aussi de tester un nouveau rythme, un autre mode d’exercice, sans engagement irréversible.
  </p>
  <div role="img" aria-label="Illustration de professionnels de santé profitant d’une randonnée en pleine nature">
    <img 
      src="/images/articles/randonnee-soignants-nature.webp" 
      alt="Groupe de personnes, dont des soignants, faisant une randonnée dans un paysage verdoyant et montagneux"
      width="600" 
      height="400"
      class="mx-auto rounded-sm"
    />
  </div>
</section>

<section role="region" aria-labelledby="conclusion-heading">
  <h2 id="conclusion-heading" class="my-6 font-bold text-3xl">Conclusion : Ralentir pour mieux soigner</h2>
  <p class="my-2">
    Changer d’air, sortir de sa zone de tension, se reconnecter à l’essentiel : la mobilité rurale n’est pas une fuite, mais un retour à l’humain. Elle favorise une forme d’écologie personnelle, indispensable à la durabilité de la vocation soignante.
  </p>
  <p class="my-2">
    Avec NEPHOS, ces initiatives deviennent des solutions concrètes, accessibles, et adaptées aux parcours des soignants. Une manière de redonner de la respiration à une vocation parfois mise à mal.
  </p>
</section>
  `;

  return (
    <PostTemplate
      title="Témoignages : ces soignants qui ont retrouvé un équilibre grâce à la mobilité rurale"
      content={articleContent}
      author="Nephos"
      date={new Date("2025-06-18")}
      imageUrl="/images/articles/temoignages-mobilite-rurale.webp"
      altText="Une soignante souriante en tenue décontractée devant un paysage vallonné"
      ariaLabel="Illustration d'une soignante souriante en tenue décontractée devant un paysage vallonné"
      tags={["Santé et prévention"]}
    />
  );
};

export default TemoignagesMobiliteRurale;
