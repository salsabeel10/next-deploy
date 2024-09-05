import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import* as schema from "@/drizzle/schema"

export default async function DB() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  return drizzle(client, { schema });
}