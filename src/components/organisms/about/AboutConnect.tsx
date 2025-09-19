import me from "@/data/me.json";
import Link from "next/link";

export default function AboutConnect() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">Connect</h2>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-zinc-400">
        {me.socials.map((s) => (
          <Link
            key={s.label}
            href={s.url}
            target={s.url.startsWith("http") ? "_blank" : undefined}
            className="underline decoration-dotted hover:decoration-solid"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
