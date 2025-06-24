import React from "react"
import PostTemplate from "@/components/posts/PostTemplate"
import { fetchSingleAction } from "@/app/(actions)/shared"
import { Metadata } from "next"

type Params = {
  slug: string
}

const postCache = new Map<string, any>()

async function fetchPostCached(slug: string) {
  console.log("slug", slug)
  if (postCache.has(slug)) {
    return postCache.get(slug)
  }
  const post = await fetchSingleAction("posts", "slug", slug)
  postCache.set(slug, post)
  return post
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params

  const post = await fetchPostCached(slug)

  if (!post?.published) {
    return {
      title: "Article non trouvé",
      description: "",
    }
  }

  return {
    title: post.meta_title,
    description: post.excerpt || "Description par défaut",
    keywords: post.meta_keywords || [],
    openGraph: {
      title: post.meta_title,
      description: post.meta_description,
      images: post.image_url ? [{ url: post.image_url, alt: post.alt_text }] : [],
    },
  }
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = params

  const post = await fetchPostCached(slug)

  if (!post?.published) {
    return <p>Article non trouvé</p>
  }

  return (
    <PostTemplate
      title={post.title}
      content={post.html_content}
      author={post.author}
      date={new Date(post.published_at)}
      imageUrl={post.image_url}
      altText={post.alt_text}
      tags={post.tags}
      ariaLabel={post.aria_label}
    />
  )
}
