import { json } from '@sveltejs/kit';
import { getVerseById, toggleMemorizedVerse } from '$lib/server/verse.js';

export async function GET(event) {
	const { id } = event.params;

	try {
		const verse = await getVerseById(Number(id));

		return json(verse);
	} catch (error) {
		return json(error);
	}
}

export async function PATCH(event) {
	const { memorized } = await event.request.json();
	const { id } = event.params;

	try {
		const updatedVerse = await toggleMemorizedVerse(Number(id), memorized);
		return json(updatedVerse);
	} catch (error) {
		return json(error);
	}
}
