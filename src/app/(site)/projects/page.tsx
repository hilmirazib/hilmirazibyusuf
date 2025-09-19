import data from "@/data/projects.json";
import ProjectCard from "@/components/molecules/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "A collection of projects I have built.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      <ul className="space-y-6">
        {data.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </ul>
    </main>
  );
}
