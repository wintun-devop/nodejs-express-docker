import { PrismaClient } from '@prisma/client'
import { readReplicas } from '@prisma/extension-read-replicas';

/* 
PrismaClient is attached to the `global` object in development to prevent
exhausting your database connection limit.
Learn more:
https://pris.ly/d/help/next-js-best-practices
*/




const globalForPrisma = global as unknown as { prisma: PrismaClient }

/* 
// one primary database
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: ['query'],
  }); 
*/


export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        // log: ['query'],
    }).$extends(
        readReplicas({
            url: [process.env.DATABASE_URL_REPLICA_1 as string]
        })
    );

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma