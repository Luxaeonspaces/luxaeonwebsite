import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 15_000,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const prisma = new PrismaClient({ adapter });