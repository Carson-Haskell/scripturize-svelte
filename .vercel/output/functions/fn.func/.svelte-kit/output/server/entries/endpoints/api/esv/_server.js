import { s as searchVerse } from "../../../../chunks/verse.js";
import { j as json } from "../../../../chunks/index.js";
async function POST(event) {
  const body = await event.request.json();
  const verse = await searchVerse(body.query);
  return json(verse);
}
export {
  POST
};
