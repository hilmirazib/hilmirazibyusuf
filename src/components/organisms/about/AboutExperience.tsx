import data from "@/data/experience.json";
import Image from "next/image";
import Link from "next/link";

export default function AboutExperience() {
  return (
    <section className="mt-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Experience</h2>
        <Link href="https://www.self.so/hilmi-razib-yusuf-fullstack" target="_blank" className="rounded-full border px-3 py-1 text-sm">Resume</Link>
      </div>

      <ul className="divide-y divide-zinc-800/60">
        {data.map((job) => (
          <li key={job.company} className="flex items-center gap-4 py-4">
            {job.logo && (
              <Image
                src={job.logo}
                alt={job.company}
                width={40}
                height={40}
                className="rounded"
              />
            )}
            <div className="min-w-0 flex-1">
              {job.url ? (
                <Link
                  href={job.url}
                  target="_blank"
                  className="font-medium hover:underline"
                >
                  {job.company}
                </Link>
              ) : (
                <p className="font-medium">{job.company}</p>
              )}
              <p className="text-sm text-zinc-400">{job.role}</p>
            </div>
            <div className="text-sm text-zinc-500">{job.from} — {job.to}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
