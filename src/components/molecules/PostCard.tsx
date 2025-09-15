import TextLink from "@/components/core/TextLink";

export type PostCardProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
};

export default function PostCard({ slug, title, description, date, tags }: PostCardProps) {
  return (
    <article className="rounded-lg border p-4 transition hover:bg-zinc-50">
      <h3 className="text-lg font-semibold">
        <TextLink href={`/blog/${slug}`} underline="none" className="underline">
          {title}
        </TextLink>
      </h3>
      <p className="mt-1 text-sm text-zinc-500">{new Date(date).toDateString()}</p>
      {description && <p className="mt-2 text-zinc-700">{description}</p>}
      {tags && tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700"
            >
              #{t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
