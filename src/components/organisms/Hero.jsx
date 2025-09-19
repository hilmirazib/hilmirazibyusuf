import me from "@/data/me.json";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/avatar.jpg" 
          alt={me.name}
          width={120}
          height={120}
          className="rounded-full"
        />

        <h1 className="text-3xl font-bold">
          👋 Hi, I’m {me.name}
        </h1>

        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          {me.headline}
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          {me.bio}
        </p>

        <Link
          href={me.moreLink}
          className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
        >
          More about me →
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {me.socials.map((s) => (
          <Link
            key={s.label}
            href={s.url}
            target="_blank"
            className="text-zinc-600 dark:text-zinc-300 hover:text-primary"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
