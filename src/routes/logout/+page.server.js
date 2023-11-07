export const load = async ({ cookies }) => {
	cookies.delete('AuthorizationToken');
};
