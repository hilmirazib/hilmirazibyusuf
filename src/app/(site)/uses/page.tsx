import uses from "@/data/uses.json";

export const metadata = {
  title: "Uses",
  description: "Tools and software I use daily."
};

export default function UsesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Uses</h1>
      <ul className="space-y-2">
        {Object.entries(uses).map(([key, value]) => (
          <li key={key}>
            <span className="font-medium">{key}:</span> {value}
          </li>
        ))}
      </ul>
    </main>
  );
}
