import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function BlogPage() {
  // Path to the blog posts
  const blogDir = path.join(process.cwd(), 'app/blog');
  // Get all subdirectories (each post)
  const posts = fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        fs.existsSync(path.join(blogDir, dirent.name, 'page.tsx'))
    )
    .map((dirent) => dirent.name);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((slug) => (
          <li key={slug}>
            <Link className="text-blue-600 hover:underline" href={`/blog/${slug}`}>
              {slug.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 