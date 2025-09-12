export async function GET() {
  const site = process.env.SITE_URL ?? "http://localhost:3000";
  const body = `User-agent: *
Allow: /
Sitemap: ${site}/sitemap.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
