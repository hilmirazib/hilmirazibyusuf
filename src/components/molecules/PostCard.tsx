import Link from "next/link";
import Image from "next/image";
import PostViewsBadge from "@/components/molecules/PostViewsBadge";

export type PostCardProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  cover?: string;
};

export default function PostCard({ slug, title, description, date, cover }: PostCardProps) {
  return (
    <li className="flex gap-4">
      <div className="relative h-14 w-14 flex-none overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-800/40">
        {cover ? <Image src={cover} alt="" fill className="object-cover" /> : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(undefined, {
              month: "short",
              day: "2-digit",
            })}
          </time>
          <span>·</span>
          <PostViewsBadge slug={slug} />
        </div>

        <Link
          href={`/blog/${slug}`}
          className="mt-1 block text-[15px] font-medium leading-snug hover:underline"
        >
          {title}
        </Link>

        {description && (
          <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{description}</p>
        )}
      </div>
    </li>
  );
}
