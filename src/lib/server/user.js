import { JWT_ACCESS_SECRET } from '$env/static/private';
import prisma from './prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createJWT = (user) => {
	return jwt.sign({ id: user.id, email: user.email }, JWT_ACCESS_SECRET, {
		expiresIn: '1d'
	});
};

export const createUser = async (email, password) => {
	try {
		const user = await prisma.user.create({
			data: {
				email,
				password: await bcrypt.hash(password, 12)
			}
		});
		const token = createJWT(user);

		return { token };
	} catch (error) {
		return error;
	}
};

export const loginUser = async (email, password) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});

		if (!user) {
			return { error: 'User not found' };
		}

		const valid = await bcrypt.compare(password, user.password);

		if (!valid) {
			return { error: 'Invalid password' };
		}

		const token = createJWT(user);

		return { token };
	} catch (error) {
		return error;
	}
};
