import data from "@/data/projects.json";

export const metadata = {
  title: "Projects",
  description: "A collection of projects I have built."
};

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-6">
        {data.map((p) => (
          <li key={p.slug}>
            <a href={p.link} className="text-lg font-medium underline">
              {p.title}
            </a>
            <p className="text-sm text-zinc-600">{p.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
