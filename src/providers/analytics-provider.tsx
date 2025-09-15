"use client";

import Script from "next/script";

export default function AnalyticsProvider() {
  const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd || !id || !src) return null;

  return (
    <Script
      src={src}
      async
      defer
      data-website-id={id}
      data-do-not-track="true"
      // Jika self-host dan base path custom:
      // data-host-url="https://umami.yourdomain.com"
    />
  );
}
