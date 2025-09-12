type Opts = {
  title?: string;
  description?: string;
  url?: string;
};

export function buildMetadata({ title, description, url }: Opts = {}) {
  const site = process.env.SITE_URL ?? "http://localhost:3000";
  const fullUrl = url ? `${site}${url}` : site;
  const baseTitle = "My Portfolio";
  const finalTitle = title ? `${title} · ${baseTitle}` : baseTitle;

  return {
    title: finalTitle,
    description: description ?? "Personal portfolio and blog.",
    metadataBase: new URL(site),
    alternates: { canonical: fullUrl },
    openGraph: {
      title: finalTitle,
      description,
      url: fullUrl,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description
    }
  };
}
