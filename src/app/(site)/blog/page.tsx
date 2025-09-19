import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import PostCard from "@/components/molecules/PostCard";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Latest articles and notes.",
  url: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p className="text-zinc-500">Belum ada postingan.</p>
      </main>
    );
  }

  // group posts per year
  const groups = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    acc[year] = acc[year] || [];
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          href="/rss.xml"
          aria-label="RSS Feed"
          className="rounded p-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-amber-400"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4-8v3a11 11 0 0 1 11 11h3C16 14.3 9.7 8 2 8zm0-6v3c12.1 0 22 9.9 22 22h3C27 10.3 13.7-2 2-2z" transform="translate(-2 2)"/>
          </svg>
        </Link>
      </div>

      {Object.entries(groups)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, yearPosts]) => (
          <div key={year} className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-amber-400">{year}</h2>
            <ul className="space-y-6">
              {yearPosts.map((p) => (
                <PostCard key={p.slug} {...p} />
              ))}
            </ul>
          </div>
        ))}
    </main>
  );
}
