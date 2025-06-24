import { fetchPaginatedAction } from "@/app/(actions)/shared";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { InfoCard } from "@/components/blog/InfoCard";

type Post = {
  id: string;
  slug: string;
  title: string;
  image_url: string;
  alt_text: string;
  aria_label: string;
  excerpt: string;
  read_time: string;
  published: boolean;
};

const infoItems = [
  {
    title: "Épuisement",
    description: "Sensation de vide émotionnel et de fatigue.",
  },
  {
    title: "Horaires Longs",
    description: "Longues heures de travail et manque de repos.",
  },
  {
    title: "Paperasse",
    description: "Fardeau des charges administratives.",
  },
  {
    title: "Demandes sociales",
    description: "Stress liées aux interactions avec les patients.",
  },
];

export default async function BlogPage({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const postsPerPage = 10;

  const result = await fetchPaginatedAction("posts", currentPage, postsPerPage);

  if (!result?.data) {
    return <p className="text-center">Impossible de charger les articles.</p>;
  }

  const publishedPosts: Post[] = result.data.filter((post: Post) => post.published);
  const { total, totalPages } = result.metadata;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Nos infos</h1>
        
        <div className="mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Comprendre l'épuisement professionnel des soignants !
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            L'épuisement professionnel des médecins est un problème crucial caractérisé par l'épuisement émotionnel,
            la dépersonnalisation et une réduction du sentiment d'accomplissement personnel. Les facteurs contribuant
            à cela incluent :
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {infoItems.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-8">Nos articles</h2>
      </section>

      {/* Blog Posts Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publishedPosts.map((post) => (
          <Card key={post.id} className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-lg border-none flex flex-col">
            {post.image_url && (
              <div className="relative w-full h-48" role="img" aria-label={post.aria_label || post.alt_text || ''}>
                <Image
                  src={post.image_url}
                  alt={post.alt_text || 'Image de l\'article'}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="bg-blue-900 text-white p-6 flex flex-col flex-grow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="opacity-80">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-0 pt-6 flex items-center justify-between">
                <div className="bg-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                  {post.read_time}
                </div>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                  <Link href={`/blog/${post.slug}`}>
                    Voir l'article
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </main>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            disabled={currentPage <= 1}
            asChild
          >
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
            >
              Précédent
            </Link>
          </Button>
          
          <span className="text-sm">
            Page {currentPage} sur {totalPages}
          </span>

          <Button
            variant="outline"
            disabled={currentPage >= totalPages}
            asChild
          >
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
            >
              Suivant
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
} 