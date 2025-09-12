import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const site = process.env.SITE_URL ?? "http://localhost:3000";
  const posts = getAllPosts();

  const urls = [
    `${site}/`,
    `${site}/blog`,
    `${site}/projects`,
    `${site}/uses`,
    ...posts.map(p => `${site}/blog/${p.slug}`)
  ]
    .map(u => `<url><loc>${u}</loc></url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
