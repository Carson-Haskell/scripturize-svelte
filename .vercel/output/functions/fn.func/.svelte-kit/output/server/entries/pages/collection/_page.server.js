const load = async ({ locals, fetch }) => {
  const user = locals.user;
  const response = await fetch("/api/verses");
  const verses = await response.json();
  return { user, verses };
};
export {
  load
};
