import { searchVerse } from '$lib/server/verse';
import { json } from '@sveltejs/kit';

export async function POST(event) {
	const body = await event.request.json();

	const verse = await searchVerse(body.query);

	return json(verse);
}
