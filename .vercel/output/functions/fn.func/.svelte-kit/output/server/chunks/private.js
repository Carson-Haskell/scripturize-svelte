import { PrismaClient } from "@prisma/client";
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}
const JWT_ACCESS_SECRET = "lasdfdaskljd435845u243jl0983523892398g";
const PRIVATE_ESV_API_SECRET = "1e5cf3daa2456f9b424618a97c94455fc68031d8";
export {
  JWT_ACCESS_SECRET as J,
  PRIVATE_ESV_API_SECRET as P,
  prisma as p
};
