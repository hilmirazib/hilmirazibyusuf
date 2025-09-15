export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-600">
        <p>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="mt-1">
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="/rss.xml"
          >
            RSS
          </a>{" "}
          ·{" "}
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="/sitemap.xml"
          >
            Sitemap
          </a>
        </p>
      </div>
    </footer>
  );
}
