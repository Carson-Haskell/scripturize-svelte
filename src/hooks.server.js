import { JWT_ACCESS_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import prisma from '$lib/server/prisma.js';

export const handle = async ({ event, resolve }) => {
	const authCookie = event.cookies.get('AuthorizationToken');

	if (authCookie) {
		const token = authCookie.split(' ')[1];
		try {
			const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);
			const user = await prisma.user.findUnique({
				where: {
					id: jwtUser.id
				},
				select: {
					id: true,
					email: true
				}
			});

			if (user) {
				event.locals.user = user;
			}
		} catch (error) {
			console.log('No user');
		}
	}
	return await resolve(event);
};
