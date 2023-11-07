

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.868bf87d.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/stores.3584a75d.js","_app/immutable/chunks/singletons.9440a6ac.js","_app/immutable/chunks/index.787d16ac.js"];
export const stylesheets = [];
export const fonts = [];
