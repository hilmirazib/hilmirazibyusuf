import { db } from "@/lib/db";
import { reactions } from "@/lib/schema";
import { eq, sql } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { slug, type } = await req.json();
    if (!slug || !type) {
      return Response.json(
        { ok: false, error: "missing slug or type" },
        { status: 400 }
      );
    }
    await db.insert(reactions).values({ slug, type });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: "server error" }, { status: 500 });
  }
}


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug)
    return Response.json({ ok: false, error: "missing slug" }, { status: 400 });

  const agg = await db.execute(
    sql`select type, count(*)::int as count
    from ${reactions}
    where slug = ${slug}
    group by type`
  );

//   const result = await db
//   .select({ type: reactions.type, count: sql<number>`count(*)` })
//   .from(reactions)
//   .where(eq(reactions.slug, slug))
//   .groupBy(reactions.type);
    // untuk keperluan reactionsSummary
    // const rows = await db
    // .select()
    // .from(reactionsSummary)
    // .where(reactionsSummary.slug.eq(slug));

  return Response.json({ ok: true, data: agg ?? [] });
}
