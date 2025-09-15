import { db } from "@/lib/db";
import { views } from "@/lib/schema";
import { sql, eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();
    if (!slug) return Response.json({ ok: false, error: "missing slug" }, { status: 400 });

    // insert jika belum ada, lalu increment
    await db.insert(views).values({ slug, count: 1 })
      .onConflictDoUpdate({
        target: views.slug,
        set: { count: sql`${views.count} + 1`, updatedAt: new Date() }
      });

    const [row] = await db.select().from(views).where(eq(views.slug, slug)).limit(1);
    return Response.json({ ok: true, count: row?.count ?? 0 });
  } catch (e) {
    return Response.json({ ok: false, error: "server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return Response.json({ ok:false, error:"missing slug" }, { status: 400 });
  const { db } = await import("@/lib/db");
  const { views } = await import("@/lib/schema");
  const { eq } = await import("drizzle-orm");
  const rows = await db.select().from(views).where(eq(views.slug, slug)).limit(1);
  return Response.json({ ok:true, count: rows[0]?.count ?? 0 });
}

