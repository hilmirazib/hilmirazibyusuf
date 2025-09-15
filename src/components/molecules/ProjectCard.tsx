import TextLink from "@/components/core/TextLink";

export type ProjectCardProps = {
  title: string;
  slug?: string;
  summary?: string;
  link?: string;
};

export default function ProjectCard({ title, summary, link }: ProjectCardProps) {
  const Content = (
    <div className="rounded-lg border p-4 transition hover:bg-zinc-50">
      <h3 className="text-lg font-semibold">{title}</h3>
      {summary && <p className="mt-2 text-zinc-700">{summary}</p>}
      {link && (
        <p className="mt-3">
          <TextLink href={link} underline="always" target="_blank" rel="noreferrer">
            Visit →
          </TextLink>
        </p>
      )}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className="block">{Content}</a>
  ) : (
    Content
  );
}
