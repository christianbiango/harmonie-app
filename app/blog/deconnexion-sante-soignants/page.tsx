import React from "react";
import PostTemplate from "@/components/posts/PostTemplate";
import { fetchSingleAction } from "@/app/(actions)/shared";

export const metadata = {
  title:
    "Pourquoi la déconnexion est essentielle pour la santé mentale des soignants ?  ",
  description:
    "Le temps de déconnexion, clé de la prévention du burn-out ? Analyse des effets concrets sur la santé mentale des professionnels du soin.",
  keywords: ["Santé et prévention"],
};

export default async function DeconnexionSanteSoignants() {
  const {
    title,
    author,
    published,
    published_at,
    tags,
    html_content,
    image_url,
    alt_text,
    aria_label,
  } = await fetchSingleAction("posts", "slug", "deconnexion-sante-soignants");

  return published ? (
    <PostTemplate
      title={title}
      content={html_content}
      author={author}
      date={new Date(published_at)}
      imageUrl={image_url}
      altText={alt_text}
      tags={tags}
      ariaLabel={aria_label}
    />
  ) : (
    <p>Article non trouvé</p>
  );
}
