

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6b661e41.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/index.787d16ac.js","_app/immutable/chunks/index.09224c3c.js","_app/immutable/chunks/stores.3584a75d.js","_app/immutable/chunks/singletons.9440a6ac.js","_app/immutable/chunks/user.943da92b.js"];
export const stylesheets = ["_app/immutable/assets/0.5cbcb50f.css"];
export const fonts = [];
