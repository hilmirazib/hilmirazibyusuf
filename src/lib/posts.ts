import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  cover?: string;
  image?: string;
};

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith(".mdx"))
    .map(f => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString(),
      tags: data.tags ?? [],
      cover: data.cover ?? "",
      image: data.image ?? "",
    } as PostMeta,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map(slug => getPostBySlug(slug).meta)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
