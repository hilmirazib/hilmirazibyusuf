import { buildMetadata } from "@/lib/seo";
import AboutIntro from "@/components/organisms/about/AboutIntro";
import AboutConnect from "@/components/organisms/about/AboutConnect";
import AboutExperience from "@/components/organisms/about/AboutExperience";
import AboutActivity from "@/components/organisms/about/AboutActivity";

export const metadata = buildMetadata({
  title: "About",
  description: "More about me.",
  url: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <AboutIntro />
      <AboutConnect />
      <AboutExperience />
      <AboutActivity />
    </main>
  );
}
