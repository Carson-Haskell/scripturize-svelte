import { json } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { addVerse, getVerses } from '$lib/server/verse';

export async function GET({ locals }) {
	const { id } = locals.user;

	try {
		const verses = await getVerses(id);

		return json(verses);
	} catch (error) {
		return json(error);
	}
}

export async function POST({ request, locals }) {
	const { user } = locals;
	const body = await request.json();

	const { ref, passage } = body;

	try {
		const verse = await addVerse(ref, passage, user);
		return json(verse, { success: true });
	} catch (error) {
		return json(error);
	}
}
