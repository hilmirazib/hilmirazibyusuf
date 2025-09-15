import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL, { ssl: undefined });

async function run() {
  try {
    await sql`REFRESH MATERIALIZED VIEW CONCURRENTLY reactions_summary`;
    console.log(new Date().toISOString(), "refreshed MV reactions_summary");
  } catch (e) {
    console.error("refresh error:", e?.message || e);
  } finally {
    await sql.end();
  }
}

run();
