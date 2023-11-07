const load = async ({ cookies }) => {
  cookies.delete("AuthorizationToken");
};
export {
  load
};
