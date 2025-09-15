import data from "@/data/projects.json";
import ProjectCard from "@/components/molecules/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "A collection of projects I have built."
};

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="grid gap-4">
        {data.map((p) => (
          <ProjectCard key={p.slug ?? p.title} {...p} />
        ))}
      </ul>
    </main>
  );
}
