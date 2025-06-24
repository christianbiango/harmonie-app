import { fetchAllAction } from "@/app/(actions)/shared";
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

export default async function BlogPage() {
  const posts = await fetchAllAction("posts");

  if (!posts) {
    return <p className="text-center">Impossible de charger les articles.</p>;
  }

  const publishedPosts: Post[] = posts.filter((post: Post) => post.published);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Notre Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
} 