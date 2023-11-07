import { J as JWT_ACCESS_SECRET, p as prisma } from "./private.js";
import jwt from "jsonwebtoken";
const handle = async ({ event, resolve }) => {
  const authCookie = event.cookies.get("AuthorizationToken");
  if (authCookie) {
    const token = authCookie.split(" ")[1];
    try {
      const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);
      const user = await prisma.user.findUnique({
        where: {
          id: jwtUser.id
        },
        select: {
          id: true,
          email: true
        }
      });
      if (user) {
        event.locals.user = user;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return await resolve(event);
};
export {
  handle
};
