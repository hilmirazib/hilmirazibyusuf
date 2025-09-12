import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const site = process.env.SITE_URL ?? "http://localhost:3000";
  const posts = getAllPosts();

  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site}/blog/${p.slug}</link>
      <guid>${site}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.description ?? ""}]]></description>
    </item>
  `).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>My Portfolio Blog</title>
      <link>${site}</link>
      <description>Latest posts</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, { headers: { "Content-Type": "application/xml" } });
}
