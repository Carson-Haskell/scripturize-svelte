export const setAuthToken = ({ cookies, token }) => {
	cookies.set('AuthorizationToken', `Bearer ${token}`, {
		httpOnly: true,
		secure: false,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24,
		path: '/'
	});
};
