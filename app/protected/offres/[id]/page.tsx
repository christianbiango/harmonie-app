"use client";

import DestinationDetails from "@/components/DetailPage/DestinationDetails";
import { ArrowLeft, Quote } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeyInfos } from "@/components/HomePage/KeyInfos";
import { KeyInfoStepProps } from "@/components/shared/KeyInfoStep";
import { Users, MapPin, Building, Utensils, Wifi, ShowerHead, WashingMachine } from "lucide-react";
import { KeyDestinationInfos } from "@/components/DetailPage/KeyDestinationInfos";
import { Card } from "@/components/HomePage/TripCard";
import Link from "next/link";

const conditions = [
  {
    title: "Salaire et versement",
    description: (
      <>
        Versements <span className="font-semibold">hebdomadaires de 375€</span> de la part de la commune pour vos activités personnelles.<br />
        Concernant vos rendez-vous avec les patients, vous serez payé sur la <span className="font-semibold">base tarifaire de vos consultations ordinaires</span>.
      </>
    ),
  },
  {
    title: "Voiture de prêt",
    description: (
      <>
        Une voiture de fonction vous sera prêtée sur place.<br />
        Seulement <span className="font-semibold">lors de vos déplacements privés</span>, le plein sera à <span className="underline">votre charge</span>.
      </>
    ),
  },
  {
    title: "Horaires d'exercices",
    description: (
      <>
        Il vous sera demander d'effectuer des visites à domicile au sein de la commune le <span className="font-semibold">lundi et vendredi de 9h à 14h</span> et de vous présenter au cabinet 17 rue de la Madeleine le <span className="font-semibold">mardi et jeudi de 9h30 à 16h30</span>.
      </>
    ),
  },
  {
    title: "Accompagnement",
    description: (
      <>
        Il vous sera proposer des <span className="font-semibold">espaces de bien-être</span> et de relaxation totalement gratuitement : spa, séance de yoga en pleine aire ou encore massage.
      </>
    ),
  },
];

const AlsoLikeSection = () => {
  const cards = [
    {
      id: 1,
      imageSrc: "/images/homepage/field.png",
      alt: "Chamberet",
      title: "Chamberet",
      subtitle: "En forêt",
    },
    {
      id: 2,
      imageSrc: "/images/homepage/field.png",
      alt: "Vigan",
      title: "Vigan",
      subtitle: "Pour deux",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cela aussi pourrait vous plaire</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        {cards.map((card) => (
          <div key={card.id} className="flex-1 min-w-0">
            <Card
              imageSrc={card.imageSrc}
              alt={card.alt}
              title={<span className="font-bold text-lg">{card.title}</span>}
              description={<span className="text-[#183B7A] text-base">{card.subtitle}</span>}
              showHeart={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default function OffresDetails(){
    const router = useRouter();

    const steps: KeyInfoStepProps[] = [
      { icon: Users, text: "Une population de 11 469 habitants" },
      { icon: MapPin, text: "À 1h15 de votre lieu d'exercice actuel" },
      { icon: Building, text: "Des randonnées en bord de l'Eyre" },
    ];

    return (
<>
<header className="mt-7 relative w-full min-h-[310px] md:min-h-[600px] overflow-hidden flex flex-col justify-start pt-[70px] md:pt-[150px]">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/images/homepage/church.png"
          alt="Paysage avec un champ doré et un ciel bleu"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sticky top-0 z-10 p-4 shadow-sm text-white">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold mx-auto">Mios</h1>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>
      </div>
    </header>
    <section className="my-8">
      <KeyDestinationInfos steps={steps} />
    </section>
    <section>
      <CommentCard name="Dr. Mortino" date="21 mai 2025" comment="J'ai passé un agréable séjour avec mes deux filles, le village était très agréable et les activités variées." />
    </section>
    <section>
    <MissionCard />
    </section>
    <section>
    <EquipmentsCard />
    </section>
    <section>
    <ConditionsCard />
    </section>
    <section>
    <AlsoLikeSection />
    </section>
    <DestinationDetails/>
</>
    )
    
}

type CommentCardProps = {
  name: string;
  date: string;
  comment: string;
};

const CommentCard = ({ name, date, comment }: CommentCardProps) => (
  <div className="bg-[#183B7A] rounded-xl p-6 text-white max-w-lg">
    <div className="flex items-center mb-2">
      <Image src="/images/homepage/quote.svg" alt="alt text" width={30} height={30} className="text-[#1DE1FC] w-8 h-8 mr-2" />
      <span className="font-bold text-lg">{name}</span>
      <span className="ml-2 text-sm text-[#CFE6F9]">- <span className="underline">{date}</span></span>
    </div>
    <p className="text-base text-white mt-2">
      {comment}
    </p>
  </div>
);


const MissionCard = () => (
  <section className="bg-[#FFFBF5] rounded-xl p-4 mb-8">
    <h2 className="text-lg font-bold mb-3">Découvrez votre mission</h2>
    <div className="flex gap-2 mb-3">
      <Image
        src="/images/homepage/field.png"
        alt="Chambre de la maison"
        width={110}
        height={110}
        className="rounded-lg object-cover w-[110px] h-[110px]"
      />
      <Image
        src="/images/homepage/field.png"
        alt="Piscine de la maison"
        width={110}
        height={110}
        className="rounded-lg object-cover w-[110px] h-[110px]"
      />
    </div>
    <div className="mb-1">
      <span className="font-bold text-lg">Grande maison au bord de la forêt</span>
    </div>
    <div className="text-sm text-gray-800 mb-1">Mios, Nouvelle Aquitaine</div>
    <div className="text-sm text-gray-600">3 chambres – 3 lits – 1 salle de bain</div>
  </section>
);

const EquipmentsCard = () => (
  <section className="bg-[#FFFBF5] rounded-xl p-4 mb-8 max-w-xs">
    <h2 className="text-base font-bold mb-3">Équipements du logement</h2>
    <ul className="mb-4 space-y-2">
      <li className="flex items-center gap-2 text-gray-800 text-sm">
        <Utensils className="w-5 h-5" /> Cuisine équipée
      </li>
      <li className="flex items-center gap-2 text-gray-800 text-sm">
        <Wifi className="w-5 h-5" /> Wifi
      </li>
      <li className="flex items-center gap-2 text-gray-800 text-sm">
        <ShowerHead className="w-5 h-5" /> Douche à l'italienne
      </li>
      <li className="flex items-center gap-2 text-gray-800 text-sm">
        <WashingMachine className="w-5 h-5" /> Lave-linge
      </li>
    </ul>
    <button className="w-full bg-[#183B7A] text-white font-semibold py-2 rounded-md text-base mt-2">Afficher les équipements</button>
  </section>
);

const ConditionsCard = () => (
  <div className="bg-[#FFFBF5] rounded-xl p-4 mb-8 divide-y divide-[#E5E5E5]">
    {conditions.map((item, idx) => (
      <div key={idx} className={"py-4 first:pt-0 last:pb-0"}>
        <div className="font-bold text-base mb-1">{item.title}</div>
        <div className="text-sm text-gray-800 leading-relaxed">{item.description}</div>
      </div>
    ))}
  </div>
);