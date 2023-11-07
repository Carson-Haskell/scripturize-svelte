import { f as fail, r as redirect } from "../../../chunks/index.js";
import { p as prisma, J as JWT_ACCESS_SECRET } from "../../../chunks/private.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const setAuthToken = ({ cookies, token }) => {
  cookies.set("AuthorizationToken", `Bearer ${token}`, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/"
  });
};
const createJWT = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_ACCESS_SECRET, {
    expiresIn: "1d"
  });
};
const createUser = async (email, password) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 12)
      }
    });
    const token = createJWT(user);
    return { token };
  } catch (error) {
    return error;
  }
};
const loginUser = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!user) {
      return { error: "User not found" };
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return { error: "Invalid password" };
    }
    const token = createJWT(user);
    return { token };
  } catch (error) {
    return error;
  }
};
const actions = {
  login: async ({ cookies, request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { email, password } = formData;
    const { error, token } = await loginUser(email, password);
    if (error) {
      return fail(400, { email, incorrect: true });
    }
    setAuthToken({ cookies, token });
    throw redirect(302, "/collection");
  },
  register: async ({ cookies, request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { email, password } = formData;
    const { error, token } = await createUser(email, password);
    if (error) {
      console.log(error);
      return fail(500, { error });
    }
    setAuthToken({ cookies, token });
    throw redirect(302, "/collection");
  }
};
export {
  actions
};
