"use client";

import { useEffect, useState } from "react";

const TYPES = ["like", "clap", "heart"] as const;
type ReactionType = typeof TYPES[number];

export default function Reactions({ slug }: { slug: string }) {
  const [counts, setCounts] = useState<Record<ReactionType, number>>({
    like: 0, clap: 0, heart: 0
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`);
        const data = await res.json();
        if (data?.ok) {
          const next = { like: 0, clap: 0, heart: 0 };
          for (const row of data.data as Array<{type: ReactionType, count: number}>) {
            next[row.type] = row.count;
          }
          setCounts(next);
        }
      } catch {}
    })();
  }, [slug]);

  const send = async (type: ReactionType) => {
    try {
      await fetch("/api/reactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, type }),
      });
      setCounts((c) => ({ ...c, [type]: c[type] + 1 }));
    } catch {}
  };

  const Btn = ({ type, label }: { type: ReactionType; label: string }) => (
    <button
      onClick={() => send(type)}
      className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50"
      aria-label={`React ${type}`}
    >
      {label} {counts[type]}
    </button>
  );

  return (
    <div className="mt-6 flex items-center gap-2">
      <Btn type="like" label="👍" />
      <Btn type="clap" label="👏" />
      <Btn type="heart" label="❤️" />
    </div>
  );
}
