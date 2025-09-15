import { pgTable, serial, text, integer, timestamp, primaryKey } from "drizzle-orm/pg-core";

export const views = pgTable("views", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  count: integer("count").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const reactions = pgTable("reactions", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull(),
  type: text("type").notNull(), // 'like' | 'clap' | 'heart' (etc)
  createdAt: timestamp("created_at").defaultNow(),
});

export const reactionsSummary = pgTable("reactions_summary", {
  slug: text("slug").notNull(),
  type: text("type").notNull(),
  count: integer("count").notNull(),
});
