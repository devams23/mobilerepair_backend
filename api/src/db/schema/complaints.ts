import { pgTable } from "drizzle-orm/pg-core";
import { integer, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helper";
import { usersTable } from "./users";

export const complaintsTable = pgTable("users", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id).notNull(),
  status: varchar("status", { length: 20 }).notNull(),
  email: varchar("email_id", { length: 255 }).notNull().unique(),
  mobile: varchar("mobile", { length: 20 }).notNull().unique(),
  description: varchar("description", { length: 500 }).notNull(),
  
  ...timestamps,
});