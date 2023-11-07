import { fail, redirect } from '@sveltejs/kit';
import { setAuthToken } from '$lib/helpers.js';
import { createUser, loginUser } from '$lib/server/user.js';

export const actions = {
	login: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { email, password } = formData;

		const { error, token } = await loginUser(email, password);

		if (error) {
			return fail(400, { email, incorrect: true });
		}

		setAuthToken({ cookies, token });

		throw redirect(302, '/collection');
	},
	register: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { email, password } = formData;

		const { error, token } = await createUser(email, password);

		if (error) {
			console.log(error);
			return fail(500, { error });
		}

		setAuthToken({ cookies, token });

		throw redirect(302, '/collection');
	}
};
