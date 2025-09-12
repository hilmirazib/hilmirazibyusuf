import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Latest articles and notes.",
  url: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 && <p className="text-zinc-500">Belum ada postingan.</p>}
      <ul className="space-y-5">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline font-medium">
              {p.title}
            </Link>
            <div className="text-sm text-zinc-500">
              {new Date(p.date).toDateString()}
            </div>
            {p.description && (
              <p className="text-zinc-600">{p.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
