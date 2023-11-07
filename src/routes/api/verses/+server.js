import { json } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { addVerse } from '$lib/server/verse';

export async function GET({ locals }) {
	const { id } = locals.user;

	const verses = await prisma.verse.findMany({
		where: { authorId: id },
		orderBy: [{ id: 'desc' }]
	});

	return json(verses);
}

export async function POST({ request, locals }) {
	const { user } = locals;
	const body = await request.json();

	const { ref, passage } = body;

	const verse = await addVerse(ref, passage, user);
	return json(verse, { success: true });
}