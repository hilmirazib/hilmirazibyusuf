import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Neon perlu SSL. Untuk local Postgres biasa, kamu bisa hapus opsi ssl.
const client = postgres(process.env.DATABASE_URL!, {
//   ssl: "require",
  // prepare: false // kadang perlu dinonaktifkan pada beberapa hosting
});

export const db = drizzle(client);
