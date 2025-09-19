export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto border-t border-t-gray-400 max-w-3xl px-4 py-8 text-sm text-zinc-600">
        <p>
          © {new Date().getFullYear()} Hilmi Razib Yusuf. All rights reserved.
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
