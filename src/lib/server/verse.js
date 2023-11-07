import prisma from './prisma';
import axios from 'axios';
import { PRIVATE_ESV_API_SECRET } from '$env/static/private';

export const addVerse = async (ref, passage, user) => {
	try {
		const verse = await prisma.verse.create({
			data: {
				ref,
				passage,
				authorId: user.id
			}
		});

		return verse;
	} catch (error) {
		return error;
	}
};

export const getVerses = async (userId) => {
	try {
		const verses = await prisma.verse.findMany({ where: { authorId: userId } });

		return verses;
	} catch (error) {
		return error;
	}
};

export const getVerseById = async (id) => {
	try {
		const verse = await prisma.verse.findUnique({
			where: {
				id
			}
		});

		return verse;
	} catch (error) {
		return error;
	}
};

export const toggleMemorizedVerse = async (verseId, newValue) => {
	try {
		const updatedVerse = await prisma.verse.update({
			where: {
				id: verseId
			},
			data: {
				memorized: newValue
			}
		});

		return updatedVerse;
	} catch (error) {
		return error;
	}
};

export const searchVerse = async (query) => {
	const response = await axios.get(
		`https://api.esv.org/v3/passage/text/?q=${query}&include-passage-references=false&include-verse-numbers=false&include-headings=false&include-footnotes=false`,
		{
			headers: {
				Authorization: `Token ${PRIVATE_ESV_API_SECRET}`
			}
		}
	);

	const verse = {
		ref: response.data.query,
		passage: response.data.passages[0]?.trim() || 'No verse found'
	};

	return verse;
};
