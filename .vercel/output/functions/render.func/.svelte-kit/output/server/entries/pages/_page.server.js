const load = async ({ locals }) => {
  const user = locals.user;
  return { user };
};
export {
  load
};
