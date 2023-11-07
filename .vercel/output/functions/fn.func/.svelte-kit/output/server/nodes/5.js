import * as server from '../entries/pages/login/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/5.c3a0a6e7.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.9440a6ac.js","_app/immutable/chunks/index.787d16ac.js","_app/immutable/chunks/navigation.040f6b97.js"];
export const stylesheets = [];
export const fonts = [];
