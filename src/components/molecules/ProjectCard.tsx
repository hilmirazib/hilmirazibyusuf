import Link from "next/link";
import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  summary?: string;
  link?: string;
  icon?: string; // optional avatar/icon
};

export default function ProjectCard({ title, summary, link, icon }: ProjectCardProps) {
  return (
    <li className="flex gap-4">
      {/* icon */}
      <div className="relative h-11 w-11 flex-none overflow-hidden rounded-lg border border-zinc-800/70 bg-zinc-800/40">
        {icon ? <Image src={icon} alt="" fill className="object-cover" /> : null}
      </div>

      {/* text */}
      <div className="min-w-0 flex-1">
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:underline"
          >
            {title}
          </Link>
        ) : (
          <span className="font-medium">{title}</span>
        )}
        {summary && (
          <p className="mt-1 text-sm text-zinc-400">{summary}</p>
        )}
      </div>
    </li>
  );
}
