import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import PostCard from "@/components/molecules/PostCard";

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
      <ul className="grid gap-4">
        {posts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </ul>
    </main>
  );
}
