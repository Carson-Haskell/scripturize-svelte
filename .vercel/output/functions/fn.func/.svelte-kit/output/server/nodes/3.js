import * as server from '../entries/pages/collection/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/collection/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/collection/+page.server.js";
export const imports = ["_app/immutable/nodes/3.15d26a37.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/navigation.a0cf1922.js","_app/immutable/chunks/singletons.4f550248.js","_app/immutable/chunks/index.787d16ac.js","_app/immutable/chunks/user.943da92b.js","_app/immutable/chunks/axios.47b9d439.js"];
export const stylesheets = ["_app/immutable/assets/3.8b42e456.css"];
export const fonts = [];
