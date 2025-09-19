"use client";

import { useEffect, useState } from "react";

export default function PostViewsBadge({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`);
        const j = await r.json();
        if (mounted && j?.ok) setCount(j.count ?? 0);
      } catch {}
    })();
    return () => { mounted = false; };
  }, [slug]);

  return (
    <span className="text-xs text-zinc-400">
      {count !== null ? `${count} views` : "— views"}
    </span>
  );
}
