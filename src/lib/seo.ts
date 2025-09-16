type Opts = {
  title?: string;
  description?: string;
  url?: string;
  image?: string | string[];
};

export function buildMetadata({ title, description, url, image }: Opts = {}) {
  const site = process.env.SITE_URL ?? "http://localhost:3000";
  const fullUrl = url ? `${site}${url}` : site;
  const baseTitle = "My Portfolio";
  const finalTitle = title ? `${title} · ${baseTitle}` : baseTitle;

  const toAbs = (u: string) =>
    u.startsWith("http") ? u : `${site}${u.startsWith("/") ? u : `/${u}`}`;

  const ogList = (Array.isArray(image) ? image : image ? [image] : [
    `/og/image?title=${encodeURIComponent(title ?? baseTitle)}`
  ]).map(toAbs);

  return {
    title: finalTitle,
    description: description ?? "Personal portfolio and blog.",
    metadataBase: new URL(site),
    alternates: { canonical: fullUrl },
    openGraph: {
      title: finalTitle,
      description,
      url: fullUrl,
      type: "website",
      images: ogList.map((u) => ({ url: u, width: 1200, height: 630 })),
      siteName: baseTitle,
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: ogList.slice(0, 1),
    }
  };
}
