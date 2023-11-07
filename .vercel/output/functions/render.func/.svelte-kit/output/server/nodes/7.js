

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/verse/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.bea3fda3.js","_app/immutable/chunks/scheduler.fa0b062a.js","_app/immutable/chunks/index.b95eafa0.js","_app/immutable/chunks/axios.47b9d439.js","_app/immutable/chunks/navigation.facc5b56.js","_app/immutable/chunks/singletons.e16c2bb9.js","_app/immutable/chunks/index.787d16ac.js","_app/immutable/chunks/verseStore.329bbc13.js"];
export const stylesheets = [];
export const fonts = [];
