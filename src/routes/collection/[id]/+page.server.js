export const load = async ({ fetch, params }) => {
	const { id } = params;

	const response = await fetch(`/api/verses/${id}`);
	const verse = await response.json();
	return { verse };
};
