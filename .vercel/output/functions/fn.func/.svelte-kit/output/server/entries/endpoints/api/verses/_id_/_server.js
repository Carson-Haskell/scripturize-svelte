import { j as json } from "../../../../../chunks/index.js";
import { g as getVerseById, t as toggleMemorizedVerse } from "../../../../../chunks/verse.js";
async function GET(event) {
  const { id } = event.params;
  const verse = await getVerseById(Number(id));
  return json(verse);
}
async function PATCH(event) {
  const { memorized } = await event.request.json();
  const { id } = event.params;
  const updatedVerse = await toggleMemorizedVerse(Number(id), memorized);
  return json(updatedVerse);
}
export {
  GET,
  PATCH
};
