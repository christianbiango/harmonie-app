import React from "react";
import Image from "next/image";

interface PostTemplateProps {
  title: string;
  content: string;
  author: string;
  date: Date;
  imageUrl?: string;
  tags?: string[];
  altText?: string;
}

const PostTemplate: React.FC<PostTemplateProps> = ({
  title,
  content,
  author,
  date,
  imageUrl,
  tags = [],
  altText,
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8" aria-labelledby="post">
      {/* En-tête de l'article */}
      <header className="mb-8">
        <h1 id="article-title" className="text-4xl font-bold mb-4">
          {title}
        </h1>
        <div className="flex items-center text-gray-600 mb-4">
          <address className="not-italic mr-4">
            Par <span>{author}</span>
          </address>
          <time dateTime={date.toISOString()}>{formatDate(date)}</time>
        </div>
        {tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Image principale */}
      {imageUrl && (
        <div className="relative w-fulL mb-8">
          <Image
            src={imageUrl}
            alt={altText || ""}
            width={864}
            height={400}
            className="rounded-lg w-full h-full"
          />
        </div>
      )}

      {/* Contenu de l'article */}
      <div
        className="prose prose-lg max-w-none"
        aria-labelledby="content-heading"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default PostTemplate;
