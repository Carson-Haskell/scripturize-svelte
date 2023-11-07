import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.affd28f6.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/index.09224c3c.js","_app/immutable/chunks/navigation.040f6b97.js","_app/immutable/chunks/singletons.9440a6ac.js","_app/immutable/chunks/index.787d16ac.js","_app/immutable/chunks/axios.47b9d439.js","_app/immutable/chunks/verseStore.329bbc13.js","_app/immutable/chunks/user.943da92b.js"];
export const stylesheets = [];
export const fonts = [];
