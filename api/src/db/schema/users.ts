
import { pgTable,integer,varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helper";


export const usersTable = pgTable("users", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email_id", { length: 255 }).notNull().unique(),
  mobile: varchar("mobile", { length: 20 }).notNull().unique(),
  ...timestamps,
});