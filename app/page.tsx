"use client";

import Header from "@/components/HomePage/Header";
import { WhoWeAreSection } from "@/components/HomePage/WhoWeAreSection";
import { MissionSection } from "@/components/HomePage/MissionSection";
import { MetaInfoSection } from "@/components/HomePage/MetaInfoSection";
import { LinkButton } from "@/components/shared/LinkButton";
import { JoinNephos } from "@/components/JoinNephos";
import { NatureBenefitsSection } from "@/components/HomePage/NatureBenefitsSection";

export default function Home() {
  const items = [
    "Un cadre de travail serein",
    "Un hébergement pris en charge",
    "Une communauté engagée",
  ];
  return (
    <div className="p-4 sm:p-8 mt-20">
      <div className="rounded-[10px] overflow-hidden">
        <Header />
      </div>
      <WhoWeAreSection items={items} />
      <MissionSection />
      <NatureBenefitsSection />
      <MetaInfoSection />
      <JoinNephos />
    </div>
  );
}
