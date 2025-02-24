// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = PrismaClient;

// const prisma =
//   globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;

// // import { PrismaClient } from "@prisma/client";
// // const globalForPrisma = global;
// // export const prisma =  globalForPrisma.prisma || new PrismaClient();
// // if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
