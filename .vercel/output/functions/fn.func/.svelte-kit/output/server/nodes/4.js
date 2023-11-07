import * as server from '../entries/pages/collection/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/collection/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/collection/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.47a6f5ed.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/navigation.040f6b97.js","_app/immutable/chunks/singletons.9440a6ac.js","_app/immutable/chunks/index.787d16ac.js"];
export const stylesheets = [];
export const fonts = [];
