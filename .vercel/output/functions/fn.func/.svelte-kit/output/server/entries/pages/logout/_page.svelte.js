import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { u as user } from "../../../chunks/user.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  user.set(null);
  return `<div class="flex flex-col justify-center gap-4" data-svelte-h="svelte-vnwkci"><h1 class="text-6xl tracking-wide uppercase text-primary/60">Goodbye,</h1> <h2 class="opacity-80">Come back soon to work on memorizing those verses!</h2></div>`;
});
export {
  Page as default
};
