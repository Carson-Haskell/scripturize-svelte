import { j as json } from "../../../../chunks/index.js";
import { p as prisma } from "../../../../chunks/private.js";
import { a as addVerse } from "../../../../chunks/verse.js";
async function GET({ locals }) {
  const { id } = locals.user;
  const verses = await prisma.verse.findMany({
    where: { authorId: id },
    orderBy: [{ id: "desc" }]
  });
  return json(verses);
}
async function POST({ request, locals }) {
  const { user } = locals;
  const body = await request.json();
  const { ref, passage } = body;
  const verse = await addVerse(ref, passage, user);
  return json(verse, { success: true });
}
export {
  GET,
  POST
};
