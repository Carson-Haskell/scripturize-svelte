import { json } from '@sveltejs/kit';
import { getVerseById, toggleMemorizedVerse } from '$lib/server/verse';

export async function GET(event) {
	const { id } = event.params;

	const verse = await getVerseById(Number(id));

	return json(verse);
}

export async function PATCH(event) {
	const { memorized } = await event.request.json();
	const { id } = event.params;

	const updatedVerse = await toggleMemorizedVerse(Number(id), memorized);
	return json(updatedVerse);
}
