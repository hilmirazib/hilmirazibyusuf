import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import PostViewsBadge from "@/components/molecules/PostViewsBadge";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="mx-auto mt-4 max-w-3xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">Latest</p>
          <h2 className="text-2xl font-semibold">
            <span className="text-amber-400">Blog</span> Posts
          </h2>
        </div>
        <Link
          href="/rss.xml"
          aria-label="RSS Feed"
          className="rounded p-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-amber-400"
        >
          {/* simple rss icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4-8v3a11 11 0 0 1 11 11h3C16 14.3 9.7 8 2 8zm0-6v3c12.1 0 22 9.9 22 22h3C27 10.3 13.7-2 2-2z" transform="translate(-2 2)"/>
          </svg>
        </Link>
      </div>

      <ul className="divide-y divide-zinc-800/80 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
        {posts.map((p) => (
          <li key={p.slug} className="flex gap-4 p-4">
            {/* thumbnail */}
            <div className="relative h-14 w-14 flex-none overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-800/40">
              {p.cover ? (
                <Image src={p.cover} alt="" fill className="object-cover" />
              ) : null}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <time dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <PostViewsBadge slug={p.slug} />
              </div>

              <Link
                href={`/blog/${p.slug}`}
                className="mt-1 block text-[15px] font-medium leading-snug hover:underline"
              >
                {p.title}
              </Link>

              {p.description && (
                <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
                  {p.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3 text-right">
        <Link
          href="/blog"
          className="text-sm text-zinc-400 underline decoration-dotted hover:decoration-solid"
        >
          View all →
        </Link>
      </div>
    </section>
  );
}
