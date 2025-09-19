import me from "@/data/me.json";
import Image from "next/image";
export default function AboutIntro() {
  return (
    <section className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-2xl mb-5">About</h1>
      <p>👋 {me.bio1}</p>
      <p className="mb-5">{me.bio2}</p>

      <figure>
        <Image
          src={me.avatar}
          alt={me.name}
          width={1200}
          height={630}
          className="w-full h-auto rounded-xl"
        />
        <figcaption>{me.avatarCaption}</figcaption>
      </figure>

      <p>
        Over the years I’ve worked with <code>JavaScript</code>, <code>TypeScript</code>,{" "}
        <code>React</code>, <code>Next.js</code>, <code>Tailwind CSS</code>,{" "}
        <code>Node.js</code>, dan lainnya.
      </p>
    </section>
  );
}
