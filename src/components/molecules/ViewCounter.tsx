"use client";

import { useEffect, useRef, useState } from "react";

export default function ViewCounter({ slug }: { slug: string }) {
  const fired = useRef(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    (async () => {
      try {
        const res = await fetch("/api/views", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }), // <= kirim slug mentah
        });
        const data = await res.json();
        if (data?.ok) setCount(data.count ?? null);
      } catch {}
    })();
  }, [slug]);

  return (
    <span className="text-xs text-zinc-500">
      {count !== null ? `${count} views` : "—"}
    </span>
  );
}
